/* Bhalleffort — pruebas: quiz de dominio por lección, exámenes de nivel por secciones y reconstrucción de errores. */
(function () {
  'use strict';
  var EL = window.EL, C = EL.c, Q = EL.q = {};

  function escRe(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function tag(e, src) { var c = Object.assign({}, e); c.src = src; return c; }
  function range(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; }

  /* Opciones incorrectas: primero de la misma lección, luego de otras lecciones del mismo nivel. */
  function others(L, i, field, count) {
    var seen = {}, out = [];
    seen[C.norm(L.vocab[i][field])] = 1;
    function take(list) {
      for (var k = 0; k < list.length && out.length < count; k++) {
        var key = C.norm(list[k]);
        if (!key || seen[key]) continue;
        seen[key] = 1; out.push(list[k]);
      }
    }
    take(C.shuffle(L.vocab.filter(function (v, k) { return k !== i; }).map(function (v) { return v[field]; })));
    if (out.length < count) {
      var pool = [];
      C.lessonsOfLevel(C.levelOf(L.id).id).forEach(function (M) { if (M.id !== L.id) M.vocab.forEach(function (v) { pool.push(v[field]); }); });
      take(C.shuffle(pool));
    }
    return out;
  }
  function withAnswer(wrong, right) {
    var o = C.shuffle(wrong.concat([right]));
    return { o: o, a: o.indexOf(right) };
  }

  /* ---------- ítems generados desde el vocabulario ---------- */
  Q.meaning = function (L, i) {
    var v = L.vocab[i], x = withAnswer(others(L, i, 1, 2), v[1]);
    return { t: 'mc', q: '¿Qué significa «' + v[0] + '»?', o: x.o, a: x.a, why: '', src: { lid: L.id, kind: 'vocab', i: i, d: 0 } };
  };
  Q.reverse = function (L, i) {
    var v = L.vocab[i], x = withAnswer(others(L, i, 0, 2), v[0]);
    return { t: 'mc', q: '¿Cómo se dice «' + v[1] + '» en inglés?', o: x.o, a: x.a, why: '', src: { lid: L.id, kind: 'vocab', i: i, d: 1 } };
  };
  Q.hear = function (L, i) {
    var v = L.vocab[i], x = withAnswer(others(L, i, 0, 2), v[0]);
    return { t: 'hear', o: x.o, a: x.a, say: v[0], why: 'Era «' + v[0] + '»: ' + v[1] + '.', src: { lid: L.id, kind: 'vocab', i: i, d: 2 } };
  };
  Q.cloze = function (L, i) {
    var v = L.vocab[i], re = new RegExp('(^|[^A-Za-z])' + escRe(v[0]) + '(?![A-Za-z])', 'i');
    if (!re.test(v[2])) return null;
    var x = withAnswer(others(L, i, 0, 2), v[0]);
    return { t: 'mc', q: v[2].replace(re, function (m, p1) { return p1 + '___'; }) + '  (' + v[1] + ')', o: x.o, a: x.a, why: '', src: { lid: L.id, kind: 'vocab', i: i, d: 3 } };
  };
  function byKind(d, L, i) {
    return d === 0 ? Q.meaning(L, i) : d === 1 ? Q.reverse(L, i) : d === 2 ? Q.hear(L, i) : Q.cloze(L, i) || Q.meaning(L, i);
  }

  /* Reconstruye un ejercicio a partir de una referencia guardada (no se guarda contenido, solo dónde estaba). */
  Q.resolve = function (ref) {
    var L = C.lesson(ref.lid);
    if (!L) return null;
    if (ref.kind === 'ex') return L.ex[ref.i] ? tag(L.ex[ref.i], { lid: L.id, kind: 'ex', i: ref.i, d: 0 }) : null;
    if (ref.kind === 'quiz') return L.quiz && L.quiz[ref.i] ? tag(L.quiz[ref.i], { lid: L.id, kind: 'quiz', i: ref.i, d: 0 }) : null;
    if (ref.kind === 'vocab' && L.vocab[ref.i]) return byKind(ref.d, L, ref.i);
    return null;
  };
  /* Quita ejercicios de audio si el dispositivo no tiene voz. */
  function playable(list) { return C.speech.ok ? list : list.filter(function (e) { return e.t !== 'hear'; }); }

  /* ---------- prueba de dominio de una lección (12 preguntas) ---------- */
  Q.lessonQuiz = function (L) {
    var items = [];
    var bank = (L.quiz || []).map(function (e, i) { return tag(e, { lid: L.id, kind: 'quiz', i: i, d: 0 }); });
    bank = playable(bank);
    var fromBank = C.pick(bank, 5);
    if (fromBank.length < 5) {
      var extra = playable(L.ex.map(function (e, i) { return tag(e, { lid: L.id, kind: 'ex', i: i, d: 0 }); }));
      fromBank = fromBank.concat(C.pick(extra, 5 - fromBank.length));
    }
    items = fromBank.slice();
    var idx = C.shuffle(range(L.vocab.length)), p = 0;
    function nextIdx() { var k = idx[p % idx.length]; p++; return k; }
    var i;
    for (i = 0; i < 3; i++) items.push(Q.meaning(L, nextIdx()));
    items.push(Q.reverse(L, nextIdx()));
    for (i = 0; i < 2; i++) items.push(C.speech.ok ? Q.hear(L, nextIdx()) : Q.meaning(L, nextIdx()));
    var cz = null, tries = 0;
    while (!cz && tries++ < L.vocab.length) cz = Q.cloze(L, nextIdx());
    items.push(cz || Q.reverse(L, nextIdx()));
    return C.shuffle(items).slice(0, 12);
  };

  /* ---------- exámenes de nivel ---------- */
  function lessonsWith(levelId, key) { return C.lessonsOfLevel(levelId).filter(function (L) { return L && L[key]; }); }

  Q.examG = function (levelId) {
    var lessons = C.lessonsOfLevel(levelId), pairs = [], items = [], perLesson = {};
    lessons.forEach(function (L) { (L.quiz || []).forEach(function (e, i) { pairs.push({ L: L, i: i }); }); });
    C.shuffle(pairs).forEach(function (p) {
      if (items.length >= 12) return;
      if ((perLesson[p.L.id] || 0) >= 2) return;
      var e = tag(p.L.quiz[p.i], { lid: p.L.id, kind: 'quiz', i: p.i, d: 0 });
      if (e.t === 'hear' && !C.speech.ok) return;
      perLesson[p.L.id] = (perLesson[p.L.id] || 0) + 1;
      items.push(e);
    });
    var kinds = [0, 1, 3, 2, 0, 3, 1, 2], k;
    for (k = 0; k < 8; k++) {
      var L = lessons[Math.floor(Math.random() * lessons.length)], d = kinds[k];
      if (d === 2 && !C.speech.ok) d = 0;
      items.push(byKind(d, L, Math.floor(Math.random() * L.vocab.length)));
    }
    return C.shuffle(items);
  };
  Q.examR = function (levelId) {
    var items = [];
    C.pick(lessonsWith(levelId, 'read'), 4).forEach(function (L) {
      L.read.q.forEach(function (e) { var c = Object.assign({}, e); c.pass = L.read.t; items.push(c); });
    });
    return items;
  };
  Q.examL = function (levelId) {
    var items = [];
    C.pick(lessonsWith(levelId, 'listen'), 4).forEach(function (L) {
      L.listen.q.slice(0, 2).forEach(function (e) { var c = Object.assign({}, e); c.aud = L.listen.d; items.push(c); });
    });
    return items;
  };
  Q.examSection = function (levelId, key) {
    return key === 'g' ? Q.examG(levelId) : key === 'r' ? Q.examR(levelId) : key === 'l' ? Q.examL(levelId) : [];
  };

  /* ---------- práctica extra ---------- */
  Q.errorItems = function (n) {
    var out = [];
    C.S.errors.slice().sort(function (a, b) { return b.n - a.n || (a.last < b.last ? 1 : -1); }).forEach(function (r) {
      if (out.length >= n) return;
      var e = Q.resolve(r);
      if (e && !(e.t === 'hear' && !C.speech.ok)) out.push(e);
    });
    return out;
  };
  /* Lecciones ya hechas, para repasar escucha/lectura con material que ya conoces. */
  Q.doneLessons = function (key) {
    return EL.PATH.map(C.lesson).filter(function (L) { return L && C.S.done[L.id] && L[key]; });
  };
  /* Pares de pronunciación de las lecciones de pronunciación ya hechas (o de todas si aún no hay). */
  Q.hearItems = function (n) {
    var src = EL.PATH.map(C.lesson).filter(function (L) { return L && L.track === 'pron' && C.S.done[L.id]; });
    if (!src.length) src = EL.PATH.map(C.lesson).filter(function (L) { return L && L.track === 'pron'; }).slice(0, 2);
    var pool = [];
    src.forEach(function (L) {
      (L.quiz || []).forEach(function (e, i) { if (e.t === 'hear') pool.push(tag(e, { lid: L.id, kind: 'quiz', i: i, d: 0 })); });
      (L.ex || []).forEach(function (e, i) { if (e.t === 'hear') pool.push(tag(e, { lid: L.id, kind: 'ex', i: i, d: 0 })); });
    });
    return C.pick(pool, n);
  };
})();
