/* Bhalleffort — núcleo: estado seguro, ruta con bloqueo por dominio, repaso espaciado, errores y exámenes. */
(function () {
  'use strict';
  var EL = window.EL;
  var C = EL.c = {};
  var KEY = 'bhalleffort-v1';
  var MAX_IMPORT = 2000000;

  /* ---------- utilidades ---------- */
  function pad(n) { return String(n).padStart(2, '0'); }
  C.now = function () { return new Date(); };
  C.today = function () { var d = C.now(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
  C.addDays = function (ds, n) {
    var p = ds.split('-').map(Number);
    var d = new Date(p[0], p[1] - 1, p[2] + n);
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  };
  C.daysBetween = function (a, b) {
    var pa = a.split('-').map(Number), pb = b.split('-').map(Number);
    return Math.round((new Date(pb[0], pb[1] - 1, pb[2]) - new Date(pa[0], pa[1] - 1, pa[2])) / 86400000);
  };
  C.esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  /* Normaliza texto para comparar respuestas. */
  C.norm = function (s) {
    return String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/-/g, ' ')
      .replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();
  };
  function ntok(t) { return String(t).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[^a-z0-9']/g, ''); }
  C.shuffle = function (a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  C.pick = function (a, n) { return C.shuffle(a).slice(0, n); };
  function clamp(n, min, max, def) {
    if (typeof n !== 'number' || !isFinite(n)) return def;
    n = Math.floor(n); return n < min ? min : n > max ? max : n;
  }
  function clampF(n, min, max, def) {
    if (typeof n !== 'number' || !isFinite(n)) return def;
    return n < min ? min : n > max ? max : n;
  }
  function okDate(s) {
    if (typeof s !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
    var p = s.split('-').map(Number), d = new Date(p[0], p[1] - 1, p[2]);
    return d.getFullYear() === p[0] && d.getMonth() === p[1] - 1 && d.getDate() === p[2];
  }
  function isObj(o) { return o !== null && typeof o === 'object' && !Array.isArray(o); }

  /* ---------- lecciones y niveles ---------- */
  var byId = Object.create(null);
  EL.lessons.forEach(function (L) { byId[L.id] = L; });
  C.lesson = function (id) { return typeof id === 'string' ? byId[id] : undefined; };
  C.position = function (id) { return EL.PATH.indexOf(id) + 1; };
  C.levelIndexAt = function (i) {
    for (var k = 0; k < EL.LEVELS.length; k++) if (i >= EL.LEVELS[k].from && i <= EL.LEVELS[k].to) return k;
    return 0;
  };
  C.levelOf = function (id) { return EL.LEVELS[C.levelIndexAt(EL.PATH.indexOf(id))]; };
  C.levelById = function (id) { return EL.LEVELS.filter(function (l) { return l.id === id; })[0]; };
  C.lessonsOfLevel = function (lvId) {
    var lv = C.levelById(lvId), out = [];
    if (!lv) return out;
    for (var i = lv.from; i <= lv.to; i++) out.push(byId[EL.PATH[i]]);
    return out;
  };

  /* ---------- pasos de la sesión ---------- */
  C.STEPS = {
    review: { name: 'Repaso', min: 10 },
    learn: { name: 'Lección', min: 12 },
    practice: { name: 'Práctica', min: 10 },
    listen: { name: 'Escucha', min: 15 },
    speak: { name: 'Pronunciación y habla', min: 12 },
    read: { name: 'Lectura', min: 10 },
    write: { name: 'Escritura', min: 15 },
    quiz: { name: 'Prueba de dominio', min: 10 }
  };
  C.STEP_ORDER = ['review', 'learn', 'practice', 'listen', 'speak', 'read', 'write', 'quiz'];
  C.QUIZ_PASS = 80;
  C.EXAM = {
    pass: { g: 75, r: 75, l: 75, w: 60, s: 60 },
    labels: { g: 'Gramática y vocabulario', r: 'Lectura', l: 'Escucha', w: 'Escritura', s: 'Habla' },
    order: ['g', 'r', 'l', 'w', 's']
  };

  /* ---------- estado ---------- */
  function simsFresh() { return { strict: true, ielts: { cur: {}, hist: [] }, toefl: { cur: {}, hist: [] } }; }
  function fresh() {
    return {
      v: 2, created: C.today(), level: null, start: 0, placement: null,
      done: {}, cards: {}, days: {}, errors: [], exams: {}, session: null, sims: simsFresh(),
      settings: { rate: 0.9, goal: 90, voice: '', asr: false, lastBackup: null, remind: '19:00' }
    };
  }
  var S = C.S = fresh();
  C.noStorage = false;
  C.corrupt = false;

  function hydrateCard(c) {
    var L = byId[c.lid], v = L.vocab[c.i];
    c.id = c.lid + ':' + c.i; c.en = v[0]; c.es = v[1]; c.ex = v[2];
    return c;
  }

  /* Reconstruye TODO el estado desde cero con listas blancas. Nada de lo importado se usa tal cual. */
  C.sanitize = function (o) {
    if (!isObj(o) || (o.v !== 1 && o.v !== 2)) return null;
    var st = fresh(), k, i, src;
    st.created = okDate(o.created) ? o.created : C.today();
    st.level = typeof o.level === 'string' && C.levelById(o.level) ? o.level : null;
    st.start = clamp(o.start, 0, Math.max(0, EL.PATH.length - 1), 0);
    if (isObj(o.placement) && C.levelById(o.placement.level)) {
      var sc = isObj(o.placement.score) ? o.placement.score : {};
      st.placement = { date: okDate(o.placement.date) ? o.placement.date : C.today(), level: o.placement.level,
        score: {}, seeded: !!o.placement.seeded };
      EL.LEVELS.forEach(function (lv) { st.placement.score[lv.id] = clamp(sc[lv.id], 0, 40, 0); });
    }
    if (isObj(o.done)) Object.keys(o.done).forEach(function (id) {
      if (!byId[id] || !isObj(o.done[id])) return;
      var r = o.done[id];
      st.done[id] = {
        date: okDate(r.date) ? r.date : C.today(),
        ex: Array.isArray(r.ex) && r.ex.length === 2 ? [clamp(r.ex[0], 0, 99, 0), clamp(r.ex[1], 0, 99, 0)] : null,
        words: clamp(r.words, 0, 99, 0),
        quiz: r.quiz === null || r.quiz === undefined ? null : clamp(r.quiz, 0, 100, 0),
        tries: clamp(r.tries, 0, 99, 1)
      };
    });
    if (isObj(o.cards)) Object.keys(o.cards).forEach(function (id) {
      var m = /^([a-z]\d{2}):(\d{1,2})$/.exec(id);
      if (!m || !byId[m[1]] || !isObj(o.cards[id])) return;
      var idx = parseInt(m[2], 10);
      if (idx >= byId[m[1]].vocab.length) return;
      var c = o.cards[id];
      st.cards[id] = hydrateCard({
        lid: m[1], i: idx, ef: clampF(c.ef, 1.3, 3.5, 2.5), n: clamp(c.n, 0, 99, 0), iv: clamp(c.iv, 0, 3650, 0),
        due: okDate(c.due) ? c.due : C.today(), lapses: clamp(c.lapses, 0, 99, 0)
      });
    });
    if (isObj(o.days)) Object.keys(o.days).forEach(function (d) {
      if (!okDate(d) || !isObj(o.days[d])) return;
      var r = o.days[d];
      st.days[d] = { sec: clamp(r.sec, 0, 86400, 0), steps: clamp(r.steps, 0, 999, 0), cards: clamp(r.cards, 0, 99999, 0), lessons: clamp(r.lessons, 0, 99, 0) };
    });
    src = isObj(o.settings) ? o.settings : {};
    st.settings = {
      rate: clampF(src.rate, 0.5, 1.3, 0.9),
      goal: [60, 90, 120].indexOf(src.goal) >= 0 ? src.goal : 90,
      voice: typeof src.voice === 'string' && /^[\w .()\-,\u00C0-\u024F]{1,100}$/.test(src.voice) ? src.voice : '',
      asr: src.asr === true,
      lastBackup: okDate(src.lastBackup) ? src.lastBackup : null,
      remind: typeof src.remind === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(src.remind) ? src.remind : '19:00'
    };
    if (isObj(o.session) && byId[o.session.id] && Array.isArray(o.session.steps)) {
      var seen = {}, steps = [];
      o.session.steps.forEach(function (s) { if (typeof s === 'string' && C.STEPS[s] && !seen[s]) { seen[s] = 1; steps.push(s); } });
      if (steps.length) {
        st.session = { id: o.session.id, date: okDate(o.session.date) ? o.session.date : C.today(), steps: steps,
          step: clamp(o.session.step, 0, steps.length - 1, 0),
          exScore: Array.isArray(o.session.exScore) && o.session.exScore.length === 2 ? [clamp(o.session.exScore[0], 0, 99, 0), clamp(o.session.exScore[1], 0, 99, 0)] : null,
          newWords: clamp(o.session.newWords, 0, 99, 0), quizTry: clamp(o.session.quizTry, 0, 99, 0) };
      }
    }
    if (Array.isArray(o.errors)) {
      var seenE = {};
      o.errors.slice(0, 400).forEach(function (e) {
        if (!isObj(e) || !byId[e.lid]) return;
        var L = byId[e.lid], kind = e.kind, d = clamp(e.d, 0, 3, 0), i = clamp(e.i, 0, 999, -1);
        if (kind === 'ex') { if (!L.ex || i < 0 || i >= L.ex.length) return; d = 0; }
        else if (kind === 'quiz') { if (!L.quiz || i < 0 || i >= L.quiz.length) return; d = 0; }
        else if (kind === 'vocab') { if (i < 0 || i >= L.vocab.length) return; }
        else return;
        var key = e.lid + '|' + kind + '|' + i + '|' + d;
        if (seenE[key] || st.errors.length >= 200) return;
        seenE[key] = 1;
        st.errors.push({ lid: e.lid, kind: kind, i: i, d: d, n: clamp(e.n, 1, 99, 1), ok: clamp(e.ok, 0, 9, 0), last: okDate(e.last) ? e.last : C.today() });
      });
    }
    if (isObj(o.exams)) EL.LEVELS.forEach(function (lv) {
      var r = o.exams[lv.id];
      if (!isObj(r)) return;
      var sec = {}, rs = isObj(r.sec) ? r.sec : {};
      C.EXAM.order.forEach(function (key) { if (rs[key] !== undefined && rs[key] !== null) sec[key] = clamp(rs[key], 0, 100, 0); });
      st.exams[lv.id] = { sec: sec, passed: !!r.passed && C.EXAM.order.every(function (key) { return sec[key] !== undefined && sec[key] >= C.EXAM.pass[key]; }),
        date: okDate(r.date) ? r.date : null, tries: clamp(r.tries, 0, 99, 0) };
    });
    if (isObj(o.sims)) {
      st.sims.strict = o.sims.strict !== false;
      [['ielts', 0, 9], ['toefl', 1, 6]].forEach(function (k) {
        var r = o.sims[k[0]], dst = st.sims[k[0]], half = function (n, def) { return Math.round(clampF(n, k[1], k[2], def) * 2) / 2; };
        if (!isObj(r)) return;
        if (isObj(r.cur)) ['l', 'r', 'w', 's'].forEach(function (sec) {
          var c = r.cur[sec];
          if (isObj(c)) dst.cur[sec] = { b: half(c.b, k[1]), n: clamp(c.n, 0, 99, 0), t: clamp(c.t, 0, 99, 0) };
        });
        if (Array.isArray(r.hist)) r.hist.slice(-10).forEach(function (h) {
          if (!isObj(h)) return;
          dst.hist.push({ date: okDate(h.date) ? h.date : C.today(), l: half(h.l, k[1]), r: half(h.r, k[1]), w: half(h.w, k[1]), s: half(h.s, k[1]), o: half(h.o, k[1]) });
        });
      });
    }
    return st;
  };

  function parseState(text) {
    if (typeof text !== 'string' || text.length > MAX_IMPORT) return null;
    var o;
    try { o = JSON.parse(text); } catch (e) { return null; }
    return C.sanitize(o);
  }
  function replaceState(st) {
    Object.keys(S).forEach(function (k) { delete S[k]; });
    Object.assign(S, st || fresh());
  }

  C.load = function () {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (raw) {
        var st = parseState(raw);
        if (st) replaceState(st);
        else {
          C.corrupt = true;
          try { window.localStorage.setItem(KEY + '-corrupt', raw.slice(0, MAX_IMPORT)); } catch (e0) { /* nada */ }
        }
      }
    } catch (e) { C.noStorage = true; }
    try { window.localStorage.setItem(KEY + '-probe', '1'); window.localStorage.removeItem(KEY + '-probe'); } catch (e2) { C.noStorage = true; }
  };
  C.save = function () {
    try { window.localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { C.noStorage = true; }
  };
  C.reset = function () {
    replaceState(null); C.corrupt = false;
    try { window.localStorage.removeItem(KEY + '-corrupt'); } catch (e) { /* nada */ }
    C.save();
  };
  C.rawCorrupt = function () { try { return window.localStorage.getItem(KEY + '-corrupt') || ''; } catch (e) { return ''; } };
  C.exportData = function () { return JSON.stringify(S, null, 1); };
  C.importData = function (text) {
    if (typeof text === 'string' && text.length > MAX_IMPORT) return { ok: false, error: 'El archivo es demasiado grande para ser un respaldo.' };
    var o;
    try { o = JSON.parse(text); } catch (e) { return { ok: false, error: 'El archivo no es un respaldo válido.' }; }
    var st = C.sanitize(o);
    if (!st) return { ok: false, error: 'Este archivo no parece un respaldo de Bhalleffort.' };
    replaceState(st); C.corrupt = false;
    C.save();
    return { ok: true };
  };

  /* ---------- ruta con bloqueo por dominio ---------- */
  C.placedLevelIdx = function () { return C.levelIndexAt(S.start || 0); };
  C.levelPassed = function (lvId) {
    var idx = EL.LEVELS.indexOf(C.levelById(lvId));
    if (idx < 0) return false;
    if (idx < C.placedLevelIdx()) return true;
    return !!(S.exams[lvId] && S.exams[lvId].passed);
  };
  C.levelOpen = function (idx) { return idx <= C.placedLevelIdx() || idx === 0 || C.levelPassed(EL.LEVELS[idx - 1].id); };
  C.levelComplete = function (idx) {
    var lv = EL.LEVELS[idx];
    for (var i = lv.from; i <= lv.to; i++) if (!S.done[EL.PATH[i]]) return false;
    return true;
  };
  C.unlocked = function (lid) {
    var i = EL.PATH.indexOf(lid);
    if (i < 0) return false;
    if (S.done[lid]) return true;
    var k = C.levelIndexAt(i);
    if (k < C.placedLevelIdx()) return true;
    if (!C.levelOpen(k)) return false;
    if (i === EL.LEVELS[k].from) return true;
    return !!S.done[EL.PATH[i - 1]];
  };
  C.lockReason = function (lid) {
    var i = EL.PATH.indexOf(lid), k = C.levelIndexAt(i);
    if (!C.levelOpen(k)) return 'Aprueba el examen del nivel ' + EL.LEVELS[k - 1].id + ' para abrir este nivel.';
    return 'Domina primero la lección anterior (prueba de dominio de ' + C.PASS_TXT + ').';
  };
  C.PASS_TXT = '80 %';
  /* Siguiente cosa por hacer: una lección o el examen del nivel. */
  C.nextTask = function () {
    var P = EL.PATH, placed = C.placedLevelIdx(), k, lv, i;
    for (k = placed; k < EL.LEVELS.length; k++) {
      if (!C.levelOpen(k)) break;
      lv = EL.LEVELS[k];
      for (i = lv.from; i <= lv.to; i++) if (!S.done[P[i]]) return { type: 'lesson', id: P[i] };
      if (!C.levelPassed(lv.id)) return { type: 'exam', level: lv.id };
    }
    for (i = 0; i < EL.LEVELS[placed].from; i++) if (!S.done[P[i]]) return { type: 'lesson', id: P[i], review: true };
    return null;
  };
  C.nextLessonId = function () { var t = C.nextTask(); return t && t.type === 'lesson' ? t.id : null; };
  C.doneCount = function () { return EL.PATH.filter(function (id) { return S.done[id]; }).length; };
  C.levelProgress = function () {
    return EL.LEVELS.map(function (lv, idx) {
      var total = lv.to - lv.from + 1, done = 0;
      for (var i = lv.from; i <= lv.to; i++) if (S.done[EL.PATH[i]]) done++;
      return { id: lv.id, name: lv.name, total: total, done: done, open: C.levelOpen(idx), passed: C.levelPassed(lv.id), complete: done === total };
    });
  };

  /* ---------- sesión diaria ---------- */
  C.startSession = function (lid) {
    var steps = C.STEP_ORDER.slice();
    if (!C.dueCards().length) steps.shift();
    S.session = { id: lid, date: C.today(), step: 0, steps: steps, exScore: null, newWords: 0, quizTry: 0 };
    C.save();
  };
  C.sessionMinutes = function (steps) {
    return steps.reduce(function (n, s) { return n + C.STEPS[s].min; }, 0);
  };
  C.dayStat = function (d) {
    d = d || C.today();
    if (!S.days[d]) S.days[d] = { sec: 0, steps: 0, cards: 0, lessons: 0 };
    return S.days[d];
  };
  C.markStep = function () { C.dayStat().steps++; C.save(); };
  C.addTime = function (sec) { C.dayStat().sec = Math.min(86400, C.dayStat().sec + sec); };
  C.minutesToday = function () { var s = S.days[C.today()]; return s ? Math.floor((s.sec || 0) / 60) : 0; };
  /* Tiempo activo: el reloj solo corre si hubo actividad reciente (o hay audio / grabación en curso). */
  var lastAct = Date.now();
  C.busy = false;
  C.touch = function () { lastAct = Date.now(); };
  C.isActive = function () {
    return (typeof document === 'undefined' || document.visibilityState === 'visible') && (C.busy || Date.now() - lastAct < 90000);
  };
  C.finishLesson = function (lid, extra) {
    var prev = S.done[lid], rec = Object.assign({ date: C.today(), tries: 1 }, extra || {});
    if (prev && prev.quiz !== null && prev.quiz !== undefined && rec.quiz !== null && rec.quiz < prev.quiz) rec.quiz = prev.quiz;
    S.done[lid] = rec;
    C.dayStat().lessons++;
    S.session = null;
    C.save();
  };
  C.dayActive = function (d) { var s = S.days[d]; return !!s && ((s.sec || 0) >= 600 || (s.lessons || 0) > 0); };
  C.streak = function () {
    var d = C.today();
    if (!C.dayActive(d)) d = C.addDays(d, -1);
    var n = 0;
    while (C.dayActive(d)) { n++; d = C.addDays(d, -1); }
    return n;
  };
  C.activeDays = function () { return Object.keys(S.days).filter(C.dayActive).length; };
  C.totalSeconds = function () {
    return Object.keys(S.days).reduce(function (n, d) { return n + (S.days[d].sec || 0); }, 0);
  };
  C.goalMinutes = function () { return S.settings.goal || 90; };

  /* ---------- tarjetas con repaso espaciado ---------- */
  function newCard(L, i, due) {
    return hydrateCard({ lid: L.id, i: i, ef: 2.5, n: 0, iv: 0, due: due, lapses: 0 });
  }
  C.addLessonCards = function (L) {
    var tomorrow = C.addDays(C.today(), 1), added = 0;
    L.vocab.forEach(function (v, i) {
      var id = L.id + ':' + i;
      if (S.cards[id]) return;
      S.cards[id] = newCard(L, i, tomorrow);
      added++;
    });
    C.save();
    return added;
  };
  /* Si empiezas en A2 o B1, las palabras de los niveles anteriores entran al repaso poco a poco (12 por día). */
  C.seedSkippedCards = function () {
    var P = EL.PATH, k = 0, added = 0, today = C.today(), MAXW = 300;
    /* Se siembran las palabras de los niveles saltados más cercanos a tu nivel (máximo 300, para no abrumarte). */
    for (var i = S.start - 1; i >= 0 && added < MAXW; i--) {
      var L = byId[P[i]];
      if (!L) continue;
      for (var vi = 0; vi < L.vocab.length && added < MAXW; vi++) {
        var id = L.id + ':' + vi;
        if (S.cards[id]) continue;
        S.cards[id] = newCard(L, vi, C.addDays(today, 1 + Math.floor(k / 12)));
        k++; added++;
      }
    }
    if (S.placement) S.placement.seeded = true;
    C.save();
    return added;
  };
  C.dueCards = function () {
    var t = C.today();
    return Object.keys(S.cards).map(function (k) { return S.cards[k]; })
      .filter(function (c) { return c.due <= t; })
      .sort(function (a, b) { return a.due < b.due ? -1 : a.due > b.due ? 1 : 0; });
  };
  C.cardCount = function () { return Object.keys(S.cards).length; };
  C.matureCount = function () {
    return Object.keys(S.cards).filter(function (k) { return S.cards[k].iv >= 21; }).length;
  };
  /* q: 0 otra vez, 1 difícil, 2 bien, 3 fácil. Devuelve el estado siguiente sin modificar la tarjeta. */
  C.nextState = function (c, q) {
    var ef = c.ef, n = c.n, iv = c.iv;
    if (q === 0) return { ef: Math.max(1.3, ef - 0.2), n: 0, iv: 0, lapses: (c.lapses || 0) + 1 };
    if (q === 1) return { ef: Math.max(1.3, ef - 0.15), n: n, iv: Math.max(1, Math.round((iv || 1) * 1.2)), lapses: c.lapses || 0 };
    if (q === 2) return { ef: ef, n: n + 1, iv: n === 0 ? 1 : n === 1 ? 3 : Math.max(iv + 1, Math.round(iv * ef)), lapses: c.lapses || 0 };
    return { ef: Math.min(3.5, ef + 0.1), n: n + 1, iv: n === 0 ? 3 : n === 1 ? 6 : Math.max(iv + 2, Math.round(iv * ef * 1.3)), lapses: c.lapses || 0 };
  };
  C.rate = function (id, q) {
    var c = S.cards[id];
    if (!c) return;
    var s = C.nextState(c, q);
    c.ef = s.ef; c.n = s.n; c.iv = Math.min(3650, s.iv); c.lapses = s.lapses;
    c.due = C.addDays(C.today(), c.iv);
    C.dayStat().cards++;
    C.save();
  };
  C.ivLabel = function (days) {
    if (days <= 0) return 'ahora';
    if (days === 1) return '1 día';
    if (days < 30) return days + ' días';
    var m = Math.round(days / 30);
    return m === 1 ? '1 mes' : m + ' meses';
  };

  /* ---------- cuaderno de errores (solo referencias, nunca contenido) ---------- */
  function errKey(r) { return r.lid + '|' + r.kind + '|' + r.i + '|' + (r.d || 0); }
  function errFind(r) {
    var k = errKey(r);
    for (var i = 0; i < S.errors.length; i++) if (errKey(S.errors[i]) === k) return i;
    return -1;
  }
  C.recordResult = function (src, ok) {
    if (!src || !byId[src.lid]) return;
    var ref = { lid: src.lid, kind: src.kind, i: src.i, d: src.d || 0 }, at = errFind(ref);
    if (!ok) {
      if (at >= 0) { S.errors[at].n = Math.min(99, S.errors[at].n + 1); S.errors[at].ok = 0; S.errors[at].last = C.today(); }
      else {
        if (S.errors.length >= 200) {
          S.errors.sort(function (a, b) { return a.last < b.last ? 1 : -1; }); S.errors.pop();
        }
        S.errors.push({ lid: ref.lid, kind: ref.kind, i: ref.i, d: ref.d, n: 1, ok: 0, last: C.today() });
      }
    } else if (at >= 0) {
      S.errors[at].ok++;
      if (S.errors[at].ok >= 2) S.errors.splice(at, 1);
    }
  };
  C.errorCount = function () { return S.errors.length; };
  /* Resumen por tipo de habilidad. */
  C.errorSummary = function () {
    var sum = { grammar: 0, vocab: 0, listen: 0 };
    S.errors.forEach(function (e) {
      if (e.kind === 'vocab') { if (e.d === 2) sum.listen++; else sum.vocab++; }
      else if (e.kind === 'ex' || e.kind === 'quiz') { var L = byId[e.lid], x = (e.kind === 'ex' ? L.ex : L.quiz)[e.i]; if (x && x.t === 'hear') sum.listen++; else sum.grammar++; }
    });
    return sum;
  };

  /* ---------- simulacros (IELTS / TOEFL) ---------- */
  C.simsOpen = function () { return C.levelPassed('B2'); };
  C.simSection = function (kind, sec, rec) {
    if (!S.sims[kind]) return;
    S.sims[kind].cur[sec] = { b: rec.b, n: rec.n || 0, t: rec.t || 0 };
    C.save();
  };
  C.simFinish = function (kind, overall) {
    var d = S.sims[kind], c = d.cur;
    d.hist.push({ date: C.today(), l: c.l.b, r: c.r.b, w: c.w.b, s: c.s.b, o: overall });
    if (d.hist.length > 10) d.hist.shift();
    d.cur = {};
    C.save();
  };

  /* ---------- exámenes de nivel ---------- */
  C.examRec = function (lvId) {
    if (!S.exams[lvId]) S.exams[lvId] = { sec: {}, passed: false, date: null, tries: 0 };
    return S.exams[lvId];
  };
  C.examSectionDone = function (lvId, key, pct) {
    var r = C.examRec(lvId);
    r.tries++;
    if (r.sec[key] === undefined || pct > r.sec[key]) r.sec[key] = Math.round(pct);
    r.passed = C.EXAM.order.every(function (k) { return r.sec[k] !== undefined && r.sec[k] >= C.EXAM.pass[k]; });
    if (r.passed && !r.date) r.date = C.today();
    C.save();
    return r;
  };

  /* ---------- ejercicios ---------- */
  C.checkFill = function (ex, val) {
    var v = C.norm(val);
    return !!v && ex.a.some(function (a) { return C.norm(a) === v; });
  };
  C.checkOrder = function (ex, words) {
    var v = C.norm(words.join(' '));
    return ex.a.some(function (a) { return C.norm(a) === v; });
  };
  /* Oración completa en inglés para escucharla (o null si no aplica). */
  C.fullSentence = function (ex) {
    var s = null;
    if (ex.t === 'order') return ex.a[0];
    if (ex.t === 'hear') return null;
    if (/→/.test(ex.q || '')) return null;
    if (ex.t === 'mc' && ex.q.indexOf('___') >= 0) s = ex.q.replace('___', ex.o[ex.a]);
    else if (ex.t === 'fill') s = ex.q.replace('___', ex.a[0]);
    if (!s) return null;
    s = s.replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
    return s;
  };

  /* ---------- dictado y frases para hablar ---------- */
  C.dictationSentences = function (L) {
    var all = L.vocab.map(function (v) { return v[2]; }).filter(function (s) {
      var n = s.split(' ').length; return n >= 3 && n <= 9;
    });
    if (all.length <= 3) return all;
    var idx = [0, Math.floor(all.length / 2), all.length - 1];
    return idx.map(function (i) { return all[i]; });
  };
  C.speakPhrases = function (L) {
    if (L.speak && L.speak.length) return L.speak.slice(0, 4);
    var out = C.dictationSentences(L).slice();
    if (L.listen && L.listen.d) {
      var line = L.listen.d.map(function (x) { return x[1]; }).filter(function (t) { var n = t.split(' ').length; return n >= 4 && n <= 12 && out.indexOf(t) < 0; })[0];
      if (line) out.push(line);
    }
    return out.slice(0, 4);
  };
  /* Compara lo escrito (o reconocido) con la frase correcta. */
  C.diffDictation = function (expected, typed) {
    var e = expected.split(/\s+/).filter(Boolean);
    var t = typed.split(/\s+/).filter(Boolean).map(ntok);
    var en = e.map(ntok);
    var n = en.length, m = t.length, i, j;
    var dp = [];
    for (i = 0; i <= n; i++) { dp.push(new Array(m + 1).fill(0)); }
    for (i = 1; i <= n; i++) for (j = 1; j <= m; j++) {
      dp[i][j] = en[i - 1] === t[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
    var ok = new Array(n).fill(false);
    i = n; j = m;
    while (i > 0 && j > 0) {
      if (en[i - 1] === t[j - 1]) { ok[i - 1] = true; i--; j--; }
      else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--;
    }
    return { words: e, ok: ok, score: n ? dp[n][m] / n : 0 };
  };
})();
