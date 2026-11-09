/* Bhalleffort — simulacros IELTS Academic y TOEFL iBT: cronómetro, audio una sola vez, sin volver atrás y puntaje ESTIMADO.
   Escucha y lectura se corrigen solas. Escritura y habla se autoevalúan con una rúbrica (la app no puede corregir tu texto ni tu voz). */
(function () {
  'use strict';
  var EL = window.EL, C = EL.c, S = C.S, V = EL.v, esc = C.esc, ctx = V.ctx, I = V.ICON, A = V.A;
  var KINDS = ['ielts', 'toefl'];
  var ORDER = { ielts: ['l', 'r', 'w', 's'], toefl: ['r', 'l', 'w', 's'] };
  var NAME = { l: 'Listening', r: 'Reading', w: 'Writing', s: 'Speaking' };
  var RB = ['No', 'Un poco', 'Bastante', 'Sí'];
  var TBL = {
    l: [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [11, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1]],
    r: [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1]]
  };

  function Speech() { return C.speech; }
  function words(t) { return String(t || '').trim().split(/\s+/).filter(Boolean).length; }
  function half(x) { return Math.round(x * 2) / 2; }
  function fmt(b) { return (Math.round(b * 10) / 10).toFixed(1); }
  function fmtTime(sec) { sec = Math.max(0, Math.ceil(sec)); var m = Math.floor(sec / 60), s = sec % 60; return m + ':' + (s < 10 ? '0' : '') + s; }
  function D(kind, sec) { return EL.SIMS[kind].secs[sec]; }

  /* ---------- puntajes estimados ---------- */
  function ieltsBand(sec, n, t) {
    var n40 = t ? Math.round(n * 40 / t) : 0, tb = TBL[sec];
    for (var i = 0; i < tb.length; i++) if (n40 >= tb[i][0]) return tb[i][1];
    return 0;
  }
  function toeflBand(n, t) {
    var p = t ? n * 100 / t : 0, T = [[95, 6], [85, 5.5], [75, 5], [65, 4.5], [55, 4], [45, 3.5], [35, 3], [25, 2.5], [15, 2]];
    if (n <= 0) return 1;
    for (var i = 0; i < T.length; i++) if (p >= T[i][0]) return T[i][1];
    return 1.5;
  }
  /* Autoevaluación: IELTS 4 a 8 (nunca 9: eso solo lo decide un examinador); TOEFL 2 a 5,5. */
  function selfBand(kind, vals, cap) {
    var p = vals.reduce(function (n, v) { return n + v; }, 0) / (3 * vals.length);
    var b = kind === 'ielts' ? half(4 + 4 * p) : half(2 + 3.5 * p);
    return cap !== undefined && b > cap ? cap : b;
  }
  function lenCap(kind, n, min) {
    var r = min ? n / min : 1;
    if (r < 0.4) return kind === 'ielts' ? 3 : 1.5;
    if (r < 0.8) return kind === 'ielts' ? 5 : 3.5;
    return undefined;
  }
  function overall(kind, b) {
    var m = (b.l + b.r + b.w + b.s) / 4;
    return half(m);
  }
  function cefr(kind, o) {
    if (kind === 'ielts') return o >= 8.5 ? 'C2' : o >= 7 ? 'C1' : o >= 5.5 ? 'B2' : o >= 4 ? 'B1' : o >= 3 ? 'A2' : 'A1';
    return o >= 6 ? 'C2' : o >= 5 ? 'C1' : o >= 4 ? 'B2' : o >= 3 ? 'B1' : o >= 2 ? 'A2' : 'A1';
  }
  function scaleMax(kind) { return kind === 'ielts' ? '9' : '6'; }

  /* ---------- armado de una sección ---------- */
  function parseCloze(t) {
    var parts = [], re = /\[\[([^|\]]+)\|([^\]]*)\]\]/g, last = 0, m;
    while ((m = re.exec(t))) {
      if (m.index > last) parts.push({ txt: t.slice(last, m.index) });
      parts.push({ pre: m[1], a: m[2] });
      last = re.lastIndex;
    }
    if (last < t.length) parts.push({ txt: t.slice(last) });
    return parts;
  }
  function scramble(sentence) {
    var w = sentence.split(' '), out = C.shuffle(w), k = 0;
    while (out.join(' ') === sentence && k++ < 8) out = C.shuffle(w);
    return out;
  }
  function qCount(st) {
    if (st.k === 'q' || st.k === 'multi' || st.k === 'build') return st.items.length;
    if (st.k === 'cloze') return st.parts.filter(function (p) { return p.pre !== undefined; }).length;
    return 0;
  }
  function newSim(kind, sec) {
    var d = D(kind, sec), steps = [], n = 0;
    if (sec === 'l' || sec === 'r') {
      d.parts.forEach(function (p) {
        if (p.kind === 'cloze') steps.push({ k: 'cloze', title: p.title, intro: p.intro, parts: parseCloze(p.t) });
        else if (p.kind === 'multi') steps.push({ k: 'multi', title: p.title, intro: p.intro, items: p.items });
        else steps.push({ k: 'q', title: p.title, intro: p.intro, say: p.say, passage: p.t, items: p.q });
      });
    } else if (sec === 'w') {
      if (d.build) steps.push({ k: 'build', title: 'Build a Sentence', intro: 'Ordena las palabras y escribe la frase completa, con mayúscula inicial y punto o signo final.', items: d.build.map(function (b) { return { s: b.s, a: b.a, words: scramble(b.s) }; }) });
      d.tasks.forEach(function (t, j) { steps.push({ k: 'write', task: t, ti: j }); });
    } else {
      d.steps.forEach(function (s) { steps.push({ k: 'speak', title: s.title, say: s.say, prompt: s.prompt, bullets: s.bullets, prep: s.prep, max: s.max }); });
    }
    steps.forEach(function (st) { st.base = n; n += qCount(st); });
    return { kind: kind, sec: sec, d: d, steps: steps, i: 0, phase: 'intro', ans: {}, texts: {}, played: {}, sp: {}, rub: [], total: n, strict: S.sims.strict !== false, dl: null };
  }

  /* ---------- cronómetro ---------- */
  function setTimer(sim, seconds, fn) { sim.dl = { end: Date.now() + seconds * 1000, fn: fn, fired: false }; }
  setInterval(function () {
    try {
      var sim = ctx.sim;
      if (V.route() !== 'simrun' || !sim || !sim.dl) return;
      var left = (sim.dl.end - Date.now()) / 1000, el = document.getElementById('sim-timer');
      if (el) {
        el.textContent = left > 0 ? fmtTime(left) : (sim.strict ? '0:00' : '+' + fmtTime(-left));
        if (left <= 60) el.classList.add('low');
      }
      if (left <= 0 && !sim.dl.fired) {
        sim.dl.fired = true;
        if (sim.strict) sim.dl.fn();
        else V.toast('Se acabó el tiempo. Estás en modo sin límite: puedes seguir.', 3500);
      }
    } catch (e) { /* nada */ }
  }, 400);
  function timerHtml(sim) {
    if (!sim.dl) return '';
    var left = (sim.dl.end - Date.now()) / 1000;
    return '<span id="sim-timer" class="sim-timer' + (left <= 60 ? ' low' : '') + '" role="timer" aria-label="Tiempo restante">' + (left > 0 ? fmtTime(left) : (sim.strict ? '0:00' : '+' + fmtTime(-left))) + '</span>';
  }
  function focusHead() { setTimeout(function () { var h = document.getElementById('sim-h'); if (h && h.focus) h.focus(); }, 30); }

  /* ======================= CENTRO DE SIMULACROS ======================= */
  function bandCell(kind, sec) {
    var c = S.sims[kind].cur[sec];
    return c ? '<span class="state ok">' + I.check + ' ' + fmt(c.b) + (c.t ? ' · ' + c.n + '/' + c.t : '') + '</span>' : '<span class="muted">Pendiente</span>';
  }
  function histHtml(kind) {
    var h = S.sims[kind].hist.slice(-5).reverse();
    if (!h.length) return '';
    var s = '<h3>Tus intentos anteriores</h3><ul class="rows">';
    h.forEach(function (r) {
      s += '<li class="exam-sec"><div><b>' + esc(r.date) + '</b><br><span class="muted">L ' + fmt(r.l) + ' · R ' + fmt(r.r) + ' · W ' + fmt(r.w) + ' · S ' + fmt(r.s) + '</span></div><div class="exam-r"><b>' + fmt(r.o) + '</b> <span class="muted">(' + cefr(kind, r.o) + ')</span></div></li>';
    });
    return s + '</ul>';
  }
  function kindCard(kind) {
    var X = EL.SIMS[kind], cur = S.sims[kind].cur, all = ORDER[kind].every(function (k) { return !!cur[k]; }), any = ORDER[kind].some(function (k) { return !!cur[k]; });
    var s = '<section class="card"><h2>' + esc(X.name) + '</h2><p>' + esc(X.info) + '</p><ul class="rows">';
    ORDER[kind].forEach(function (sec) {
      var d = X.secs[sec], needVoice = (sec === 'l') && !Speech().ok, rec = cur[sec];
      s += '<li class="exam-sec"><div><b>' + NAME[sec] + '</b><br><span class="muted">' + esc(d.desc) + (needVoice ? ' · necesita voz en inglés' : '') + '</span></div>' +
        '<div class="exam-r">' + bandCell(kind, sec) + '<button class="btn' + (rec ? ' ghost' : ' primary') + '" data-act="sim-start" data-k="' + kind + '" data-s="' + sec + '"' + (needVoice ? ' disabled' : '') + '>' + (rec ? 'Repetir' : 'Empezar') + '</button></div></li>';
    });
    s += '</ul>';
    if (all) s += '<button class="btn primary block" data-act="sim-total" data-k="' + kind + '">Ver mi resultado total</button>';
    else s += '<p class="muted">Haz las cuatro partes (puedes hacerlas en días distintos) para ver tu resultado total.</p>';
    if (any) s += '<button class="btn ghost block" data-act="sim-reset" data-k="' + kind + '">Empezar un intento nuevo</button>';
    return s + histHtml(kind) + '</section>';
  }
  V.views.sims = function () {
    var s = '<header class="page-head"><button class="link" data-act="go-home">' + I.back + ' Inicio</button><h1>Simulacros IELTS y TOEFL</h1>' +
      '<p>Practica como en el examen: cronómetro, audio una sola vez, sin volver atrás y con un puntaje estimado.</p></header>';
    if (!C.simsOpen()) {
      return V.html(s + '<section class="card"><h2>' + I.lock + ' Todavía cerrados</h2><p>Los simulacros se abren al aprobar el examen del nivel <b>B2</b>. Son más difíciles que las lecciones: miden tu nivel con la forma real de IELTS y TOEFL. Lo ideal es hacerlos al terminar C1.</p>' +
        '<button class="btn primary block" data-act="go-home">Volver a mi ruta</button></section>');
    }
    s += '<p class="note"><b>Cómo leer tu puntaje:</b> es una <b>estimación orientativa, no oficial</b>. Las preguntas son originales de Bhalleffort (no del examen real), los simulacros son más cortos que los oficiales, y escritura y habla son autoevaluaciones (tope 8 en IELTS y 5,5 en TOEFL: solo un examinador puede dar más). Para decidir si te presentas, usa los resultados junto a una evaluación real.</p>';
    KINDS.forEach(function (k) { s += kindCard(k); });
    s += '<section class="card"><label class="sim-opt"><input type="checkbox" data-act="sim-strict"' + (S.sims.strict !== false ? ' checked' : '') + '><span><b>Cronómetro estricto</b> (como el examen real: al acabarse el tiempo pasa a lo siguiente). Desactívalo si necesitas más tiempo.</span></label></section>';
    V.html(s);
  };
  A['go-sims'] = function () { V.go('sims'); };
  A['sim-strict'] = function (el) { S.sims.strict = !!el.checked; C.save(); };
  A['sim-reset'] = function (el) {
    var k = el.getAttribute('data-k');
    if (!window.confirm('¿Empezar un intento nuevo? Se borran los puntajes de este intento (tu historial se conserva).')) return;
    S.sims[k].cur = {}; C.save(); V.redraw();
  };
  A['sim-start'] = function (el) {
    var k = el.getAttribute('data-k'), sec = el.getAttribute('data-s');
    if (!EL.SIMS[k] || !D(k, sec)) return;
    V.go('simrun', { kind: k, sec: sec, back: { r: 'sims' }, sim: newSim(k, sec) });
  };

  /* ======================= PANTALLA DE LA SECCIÓN ======================= */
  V.views.simrun = function () {
    var sim = ctx.sim;
    ctx.head = V.flowHead(EL.SIMS[sim.kind].short + ' · ' + NAME[sim.sec]);
    if (sim.phase === 'intro') return V.out(introHtml(sim));
    if (sim.phase === 'steps') return V.out(stepHtml(sim));
    if (sim.phase === 'rate') return V.out(rateHtml(sim));
    return V.out(doneHtml(sim));
  };
  function introHtml(sim) {
    var d = sim.d, rules = [], s;
    if (sim.sec === 'l') rules = ['El audio de cada parte suena <b>una sola vez</b>. No hay botón para repetirlo.', 'No puedes volver a una parte anterior.', 'Escribe las respuestas mientras escuchas. Revisa la ortografía.', 'Usa audífonos si puedes y busca un lugar tranquilo.'];
    else if (sim.sec === 'r') rules = ['Tienes <b>' + d.minutes + ' minutos</b> para todos los textos.', 'No puedes volver a un texto anterior; no te quedes demasiado en una pregunta.', 'Las respuestas casi siempre aparecen en el orden del texto.'];
    else if (sim.sec === 'w') rules = ['Sin traductor ni ayuda: así sabrás dónde estás de verdad.', 'Cada tarea tiene su propio cronómetro y un mínimo de palabras.', 'Al final te evalúas con una rúbrica concreta. Si dudas, marca la opción más baja.'];
    else rules = ['Tu voz se graba <b>solo en este dispositivo</b> y se borra al salir.', 'Responde sin parar a corregirte. Si te trabas, sigue hablando.', 'Al final te evalúas con una rúbrica. Si no puedes usar el micrófono, di tus respuestas en voz alta igualmente.'];
    s = '<h2 id="sim-h" tabindex="-1">' + NAME[sim.sec] + '</h2><p>' + esc(d.desc) + '</p><ul class="plain">';
    rules.forEach(function (r) { s += '<li>' + r + '</li>'; });
    s += '</ul>' + (sim.strict ? '<p class="muted">Cronómetro estricto activado.</p>' : '<p class="muted">Modo sin límite: el cronómetro solo te avisa.</p>');
    if (sim.sec === 's' && !C.rec.ok) s += '<p class="note warn">Este navegador no puede grabar. Responderás en voz alta y te evaluarás igual.</p>';
    return s + '<button class="btn primary block" data-act="sim-begin">Empezar ahora</button>';
  }
  A['sim-begin'] = function () {
    var sim = ctx.sim; if (!sim || sim.phase !== 'intro') return;
    sim.phase = 'steps'; sim.i = 0;
    if (sim.sec === 'r' && sim.d.minutes) setTimer(sim, sim.d.minutes * 60, function () { if (ctx.sim === sim && sim.phase === 'steps') endSteps(sim); });
    enterStep(sim); V.redraw(); window.scrollTo(0, 0); focusHead();
  };
  function enterStep(sim) {
    Speech().stop(); C.rec.cancel();
    var st = sim.steps[sim.i];
    if (sim.sec !== 'r') sim.dl = null;
    if (st.k === 'write') setTimer(sim, st.task.minutes * 60, function () { goNext(sim); });
    if (st.k === 'speak') sim.sp[sim.i] = { ph: 'ready' };
  }
  function stepNo(sim) { return 'Parte ' + (sim.i + 1) + ' de ' + sim.steps.length; }
  function navHtml(sim) {
    var last = sim.i === sim.steps.length - 1;
    return '<button class="btn primary block" data-act="sim-next">' + (last ? 'Terminar esta sección' : 'Siguiente (no se puede volver)') + '</button>';
  }
  function barHtml(sim, st) { return '<div class="sim-bar"><span>' + stepNo(sim) + '</span>' + timerHtml(sim) + '</div>'; }
  function lines(say, who) { return typeof say === 'string' ? [[who || 'Speaker', say]] : say; }

  function audioBlock(sim, key, label) {
    var s = sim.played[key] || 'idle';
    var txt = s === 'idle' ? 'Se oye una sola vez.' : s === 'playing' ? 'Reproduciendo… escucha con atención.' : 'Audio terminado.';
    return '<div class="sim-audio"><button class="btn primary" data-act="sim-play" data-key="' + key + '"' + (s !== 'idle' ? ' disabled' : '') + '>' + I.speaker + ' ' + esc(label) + '</button>' +
      '<span class="muted" id="sim-aud-' + key + '" role="status">' + txt + '</span></div>';
  }
  function audioSource(sim, key) {
    var parts = String(key).split('.'), st = sim.steps[parseInt(parts[0], 10)];
    if (!st) return null;
    if (st.k === 'q') return lines(st.say);
    if (st.k === 'multi') return lines(st.items[parseInt(parts[1], 10)].say);
    if (st.k === 'speak') return lines(st.say);
    return null;
  }
  A['sim-play'] = function (el) {
    var sim = ctx.sim, key = el.getAttribute('data-key');
    if (!sim || sim.played[key]) return;
    var src = audioSource(sim, key); if (!src) return;
    Object.keys(sim.played).forEach(function (k) {
      if (sim.played[k] === 'playing') { sim.played[k] = 'done'; var o = document.getElementById('sim-aud-' + k); if (o) o.textContent = 'Audio terminado.'; }
    });
    var ok = Speech().dialogue(src, false, function () {
      sim.played[key] = 'done';
      if (ctx.sim === sim && V.route() === 'simrun') { var e = document.getElementById('sim-aud-' + key); if (e) e.textContent = 'Audio terminado.'; }
    });
    if (!ok) { V.toast('No pude reproducir el audio en este dispositivo', 3000); return; }
    sim.played[key] = 'playing';
    el.disabled = true;
    var e2 = document.getElementById('sim-aud-' + key); if (e2) e2.textContent = 'Reproduciendo… escucha con atención.';
  };

  function itemHtml(sim, e, key, num) {
    var val = sim.ans[key], s;
    if (e.t === 'mc') {
      s = '<fieldset class="sim-q"><legend lang="en"><b>' + num + '.</b> ' + esc(e.q) + '</legend>';
      e.o.forEach(function (o, j) { s += '<label class="sim-opt"><input type="radio" name="sq' + key + '" value="' + j + '" data-sq="' + key + '"' + (val === j ? ' checked' : '') + '><span lang="en">' + esc(o) + '</span></label>'; });
      return s + '</fieldset>';
    }
    return '<div class="sim-q"><label for="sq' + key + '" lang="en"><b>' + num + '.</b> ' + esc(e.q) + '</label><input id="sq' + key + '" class="field" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" data-sq="' + key + '" value="' + esc(val === undefined ? '' : val) + '"></div>';
  }
  function tableHtml(t) {
    var s = '<table class="sim-table" lang="en"><caption>' + esc(t.cap) + '</caption><thead><tr>';
    t.head.forEach(function (h) { s += '<th scope="col">' + esc(h) + '</th>'; });
    s += '</tr></thead><tbody>';
    t.rows.forEach(function (r) { s += '<tr>'; r.forEach(function (c, j) { s += j === 0 ? '<th scope="row">' + esc(c) + '</th>' : '<td>' + esc(c) + '</td>'; }); s += '</tr>'; });
    return s + '</tbody></table>';
  }

  function stepHtml(sim) {
    var st = sim.steps[sim.i], s = barHtml(sim, st), i = sim.i;
    if (st.k === 'q') {
      s += '<h2 id="sim-h" tabindex="-1">' + esc(st.title) + '</h2><p>' + esc(st.intro) + '</p>';
      if (st.say) s += audioBlock(sim, String(i), 'Escuchar esta parte (una sola vez)');
      if (st.passage) { s += '<article class="card sim-text" lang="en">'; st.passage.forEach(function (p) { s += '<p>' + esc(p) + '</p>'; }); s += '</article>'; }
      st.items.forEach(function (e, j) { s += itemHtml(sim, e, String(st.base + j), st.base + j + 1); });
      return s + navHtml(sim);
    }
    if (st.k === 'multi') {
      s += '<h2 id="sim-h" tabindex="-1">' + esc(st.title) + '</h2><p>' + esc(st.intro) + '</p>';
      st.items.forEach(function (it, j) { s += '<div class="card">' + audioBlock(sim, i + '.' + j, 'Escuchar la frase ' + (j + 1)) + itemHtml(sim, it.q, String(st.base + j), st.base + j + 1) + '</div>'; });
      return s + navHtml(sim);
    }
    if (st.k === 'cloze') {
      s += '<h2 id="sim-h" tabindex="-1">' + esc(st.title) + '</h2><p>' + esc(st.intro) + '</p><p class="card sim-cloze" lang="en">';
      var g = 0;
      st.parts.forEach(function (p) {
        if (p.pre === undefined) { s += esc(p.txt); return; }
        var key = String(st.base + g), v = sim.ans[key];
        s += '<span class="gap-wrap"><span class="gap-pre" aria-hidden="true">' + esc(p.pre) + '</span><input class="gap" type="text" size="' + Math.max(3, p.a.length + 1) + '" maxlength="14" autocomplete="off" autocapitalize="off" spellcheck="false" data-sq="' + key + '" aria-label="Palabra ' + (g + 1) + ': empieza con ' + esc(p.pre) + '" value="' + esc(v === undefined ? '' : v) + '"></span>';
        g++;
      });
      return s + '</p>' + navHtml(sim);
    }
    if (st.k === 'build') {
      s += '<h2 id="sim-h" tabindex="-1">' + esc(st.title) + '</h2><p>' + esc(st.intro) + '</p>';
      st.items.forEach(function (it, j) {
        var key = String(st.base + j), v = sim.ans[key];
        s += '<div class="sim-q card"><p class="sim-words" lang="en" id="sw' + key + '"><b>' + (st.base + j + 1) + '.</b> ' + it.words.map(function (w) { return '<span class="sim-w">' + esc(w) + '</span>'; }).join(' ') + '</p>' +
          '<label class="lbl" for="sq' + key + '">Tu frase</label><input id="sq' + key + '" class="field" type="text" autocomplete="off" autocapitalize="sentences" spellcheck="false" lang="en" data-sq="' + key + '" aria-describedby="sw' + key + '" value="' + esc(v === undefined ? '' : v) + '"></div>';
      });
      return s + navHtml(sim);
    }
    if (st.k === 'write') {
      var t = st.task, txt = sim.texts[i] || '', n = words(txt);
      s += '<h2 id="sim-h" tabindex="-1">' + esc(t.title) + '</h2>';
      if (t.disc) { s += '<section class="card disc" lang="en">'; t.disc.forEach(function (d) { s += '<p><b>' + esc(d[0]) + ':</b> ' + esc(d[1]) + '</p>'; }); s += '</section>'; }
      s += '<p lang="en">' + esc(t.p) + '</p>';
      if (t.table) s += tableHtml(t.table);
      s += '<p class="muted">Mínimo ' + t.min + ' palabras · ' + t.minutes + ' minutos.</p><label class="lbl" for="sim-text">Tu texto en inglés</label>' +
        '<textarea id="sim-text" class="field area" rows="12" autocapitalize="sentences" spellcheck="false" lang="en">' + esc(txt) + '</textarea>' +
        '<p class="count" id="sim-count">' + n + ' de ' + t.min + ' palabras</p>';
      return s + navHtml(sim);
    }
    return s + speakHtml(sim, st);
  }

  /* ---------- habla ---------- */
  function sp(sim) { return sim.sp[sim.i] || (sim.sp[sim.i] = { ph: 'ready' }); }
  function speakHtml(sim, st) {
    var p = sp(sim), s = '<h2 id="sim-h" tabindex="-1">' + esc(st.title) + '</h2>';
    s += '<section class="card" lang="en"><p><b>' + esc(st.prompt) + '</b></p>';
    if (st.bullets) { s += '<p>You should say:</p><ul class="plain">'; st.bullets.forEach(function (b) { s += '<li>' + esc(b) + '</li>'; }); s += '</ul>'; }
    s += '</section>';
    if (p.err) s += '<p class="note warn" role="alert">' + esc(p.err) + '</p>';
    if (p.ph === 'ready') {
      s += '<p class="muted">' + (st.say && Speech().ok ? 'Oirás la pregunta una sola vez. ' : '') + (st.prep ? 'Después tendrás ' + st.prep + ' segundos para preparar y hasta ' + st.max + ' s para hablar.' : 'Tendrás hasta ' + st.max + ' segundos para responder.') + '</p>' +
        '<button class="btn primary block" data-act="sim-sp-go">' + (st.say && Speech().ok ? I.speaker + ' Escuchar la pregunta y empezar' : 'Empezar') + '</button>';
    } else if (p.ph === 'listen') {
      s += '<p class="muted" role="status">Escuchando la pregunta…</p>';
    } else if (p.ph === 'prep') {
      s += '<p role="status"><b>Preparación.</b> Anota ideas clave (no frases completas) en papel.</p><button class="btn block" data-act="sim-sp-rec">Ya estoy listo: empezar a hablar</button>';
    } else if (p.ph === 'rec') {
      s += '<p class="rec-now" role="status"><span class="dot"></span> ' + (p.noMic ? 'Habla ahora en voz alta (no se graba).' : 'Grabando… habla ahora.') + '</p><button class="btn danger block" data-act="sim-sp-stop">' + I.stop + ' Terminar mi respuesta</button>';
    } else {
      s += '<p><b>' + (p.skipped ? 'Pregunta omitida.' : 'Respuesta registrada.') + '</b></p><div class="say-row">' + (p.url ? '<button class="btn ghost" data-act="sim-sp-play" data-i="' + sim.i + '">' + I.play + ' Escucharme</button>' : '') + '</div>' + navHtml(sim);
    }
    if (p.ph !== 'done') s += '<p class="muted"><button class="link" data-act="sim-sp-skip">No puedo responder esta pregunta</button></p>';
    return s;
  }
  function recStart(sim, st, p) {
    p.ph = 'rec'; p.err = '';
    setTimer(sim, st.max, function () { A['sim-sp-stop'](); });
    if (C.rec.ok && !p.noMic) {
      C.rec.start((st.max + 2) * 1000).then(function () {
        if (ctx.sim !== sim || p.ph !== 'rec') { C.rec.cancel(); return; }
        C.rec.onAutoStop(function () { A['sim-sp-stop'](); });
      }, function (e) { p.err = C.rec.errorText(e); p.noMic = true; if (ctx.sim === sim && V.route() === 'simrun') V.redraw(); });
    } else p.noMic = true;
  }
  function startPrepOrRec(sim, st, p) {
    if (st.prep) { p.ph = 'prep'; setTimer(sim, st.prep, function () { A['sim-sp-rec'](); }); }
    else recStart(sim, st, p);
  }
  A['sim-sp-go'] = function () {
    var sim = ctx.sim, st = sim.steps[sim.i], p = sp(sim), idx = sim.i;
    if (p.ph !== 'ready') return;
    if (st.say && Speech().ok) {
      p.ph = 'listen'; V.redraw();
      var ok = Speech().say(st.say, false, function () {
        if (ctx.sim === sim && sim.i === idx && p.ph === 'listen' && V.route() === 'simrun') { startPrepOrRec(sim, st, p); V.redraw(); }
      });
      if (!ok) { startPrepOrRec(sim, st, p); V.redraw(); }
    } else { startPrepOrRec(sim, st, p); V.redraw(); }
  };
  A['sim-sp-rec'] = function () {
    var sim = ctx.sim, st = sim.steps[sim.i], p = sp(sim);
    if (p.ph !== 'prep') return;
    recStart(sim, st, p); V.redraw();
  };
  A['sim-sp-stop'] = function () {
    var sim = ctx.sim; if (!sim || V.route() !== 'simrun') return;
    var p = sp(sim), idx = sim.i;
    if (p.ph !== 'rec') return;
    sim.dl = null; p.ph = 'stopping';
    C.rec.stop().then(function (blob) {
      if (ctx.sim !== sim || sim.i !== idx) return;
      if (blob) p.url = C.rec.makeUrl(blob);
      p.ph = 'done'; V.redraw();
    });
  };
  A['sim-sp-skip'] = function () {
    var sim = ctx.sim; if (!sim) return;
    var p = sp(sim);
    sim.dl = null; Speech().stop(); C.rec.cancel();
    p.ph = 'done'; p.skipped = true; V.redraw();
  };
  A['sim-sp-play'] = function (el) {
    var sim = ctx.sim, i = parseInt(el.getAttribute('data-i'), 10), p = sim && sim.sp[i];
    if (p && p.url) C.rec.play(p.url);
  };

  /* ---------- avanzar y terminar ---------- */
  function goNext(sim) {
    if (ctx.sim !== sim || V.route() !== 'simrun' || sim.phase !== 'steps') return;
    Speech().stop();
    if (sim.sec === 's') {
      var p = sp(sim);
      if (p.ph === 'rec') { A['sim-sp-stop'](); return; }
    }
    if (sim.i < sim.steps.length - 1) {
      sim.i++; enterStep(sim); V.redraw(); window.scrollTo(0, 0); focusHead();
    } else endSteps(sim);
  }
  A['sim-next'] = function () {
    var sim = ctx.sim; if (!sim) return;
    if (sim.sec === 's' && sp(sim).ph !== 'done') { V.toast('Primero responde esta pregunta'); return; }
    goNext(sim);
  };

  function gradeItem(e, v) {
    if (v === undefined || v === null || v === '') return false;
    if (e.t === 'mc') return v === e.a;
    return C.checkFill(e, v);
  }
  function collect(sim) {
    var out = [];
    sim.steps.forEach(function (st) {
      if (st.k === 'q' || st.k === 'build') st.items.forEach(function (e, j) {
        var key = String(st.base + j), it = st.k === 'build' ? { t: 'build', q: st.items[j].words.join(' / '), a: e.a } : e;
        out.push({ num: st.base + j + 1, e: it, v: sim.ans[key] });
      });
      else if (st.k === 'multi') st.items.forEach(function (m, j) { out.push({ num: st.base + j + 1, e: m.q, v: sim.ans[String(st.base + j)] }); });
      else if (st.k === 'cloze') {
        var g = 0;
        st.parts.forEach(function (p) {
          if (p.pre === undefined) return;
          out.push({ num: st.base + g + 1, e: { t: 'fill', q: p.pre + '___', a: [p.a], full: p.pre + p.a }, v: sim.ans[String(st.base + g)] });
          g++;
        });
      }
    });
    return out;
  }
  function endSteps(sim) {
    sim.dl = null; Speech().stop(); C.rec.cancel();
    if (sim.sec === 'l' || sim.sec === 'r') {
      var all = collect(sim), n = 0;
      all.forEach(function (r) { r.ok = gradeItem(r.e, r.v); if (r.ok) n++; });
      sim.review = all; sim.n = n; sim.t = all.length;
      sim.b = sim.kind === 'ielts' ? ieltsBand(sim.sec, n, all.length) : toeflBand(n, all.length);
      C.simSection(sim.kind, sim.sec, { b: sim.b, n: n, t: all.length });
      sim.phase = 'done';
    } else {
      if (sim.sec === 'w') {
        sim.build = collect(sim).filter(function (r) { return r.e.t === 'build'; });
        sim.build.forEach(function (r) { r.ok = gradeItem(r.e, r.v); });
      }
      sim.rub = (sim.sec === 'w' ? sim.d.tasks : [sim.d]).map(function (t) { return t.rubric.map(function () { return -1; }); });
      sim.phase = 'rate';
    }
    V.redraw(); window.scrollTo(0, 0); focusHead();
  }

  /* ---------- entrada de datos ---------- */
  function onField(ev) {
    var sim = ctx.sim, t = ev.target;
    if (!sim || V.route() !== 'simrun' || !t || !t.getAttribute) return;
    var k = t.getAttribute('data-sq');
    if (k !== null && k !== '') {
      if (t.type === 'radio') { if (t.checked) sim.ans[k] = parseInt(t.value, 10); }
      else sim.ans[k] = t.value;
      return;
    }
    if (t.id === 'sim-text') {
      sim.texts[sim.i] = t.value;
      var c = document.getElementById('sim-count'), st = sim.steps[sim.i];
      if (c && st && st.task) c.textContent = words(t.value) + ' de ' + st.task.min + ' palabras';
    }
  }
  document.addEventListener('input', onField);
  document.addEventListener('change', onField);

  /* ---------- autoevaluación (escritura y habla) ---------- */
  function rubricHtml(items, vals, t) {
    var s = '<ul class="rubric">';
    items.forEach(function (c, k) {
      s += '<li><p>' + esc(c) + '</p><div class="filters" role="group" aria-label="' + esc(c) + '">';
      RB.forEach(function (l, v) { s += '<button class="pill" data-act="sim-rb" data-t="' + t + '" data-k="' + k + '" data-v="' + v + '" aria-pressed="' + (vals[k] === v) + '">' + l + '</button>'; });
      s += '</div></li>';
    });
    return s + '</ul>';
  }
  A['sim-rb'] = function (el) {
    var sim = ctx.sim, t = parseInt(el.getAttribute('data-t'), 10), k = parseInt(el.getAttribute('data-k'), 10), v = parseInt(el.getAttribute('data-v'), 10);
    if (sim && sim.rub[t]) { sim.rub[t][k] = v; V.redraw(); }
  };
  function rateHtml(sim) {
    var s = '<h2 id="sim-h" tabindex="-1">Evalúa tu desempeño</h2>';
    if (sim.sec === 'w') {
      s += '<p>Relee cada texto despacio y responde con honestidad. Si dudas, marca la opción más baja: así sabrás qué reforzar.</p>';
      sim.d.tasks.forEach(function (t, j) {
        var idx = sim.steps.findIndex(function (st) { return st.k === 'write' && st.ti === j; }), txt = sim.texts[idx] || '';
        s += '<section class="card"><h3>' + esc(t.title) + '</h3><p class="muted">' + words(txt) + ' palabras (mínimo ' + t.min + ')</p><details class="sim-rev"><summary>Ver mi texto</summary><p class="pre" lang="en">' + esc(txt || '(vacío)') + '</p></details>' + rubricHtml(t.rubric, sim.rub[j], j) + '</section>';
      });
      if (sim.build) s += '<p class="muted">Build a Sentence: ' + sim.build.filter(function (r) { return r.ok; }).length + ' de ' + sim.build.length + ' correctas (se corrige solo).</p>';
    } else {
      s += '<p>Escúchate (si grabaste) y responde con honestidad. Si dudas, marca la opción más baja.</p>';
      var any = sim.steps.some(function (st, i) { return sim.sp[i] && sim.sp[i].url; });
      if (any) {
        s += '<section class="card"><h3>Tus respuestas</h3><ul class="plain">';
        sim.steps.forEach(function (st, i) { if (sim.sp[i] && sim.sp[i].url) s += '<li>' + esc(st.title) + ' · ' + esc(st.prompt.slice(0, 60)) + '… <button class="btn ghost" data-act="sim-sp-play" data-i="' + i + '">' + I.play + ' Oír</button></li>'; });
        s += '</ul></section>';
      }
      s += '<section class="card">' + rubricHtml(sim.d.rubric, sim.rub[0], 0) + '</section>';
    }
    return s + '<button class="btn primary block" data-act="sim-score">Ver mi puntaje estimado</button>';
  }
  A['sim-score'] = function () {
    var sim = ctx.sim; if (!sim) return;
    if (sim.rub.some(function (r) { return r.some(function (v) { return v < 0; }); })) { V.toast('Responde todos los criterios', 2800); return; }
    var kind = sim.kind, b;
    if (sim.sec === 'w') {
      var bands = sim.d.tasks.map(function (t, j) {
        var idx = sim.steps.findIndex(function (st) { return st.k === 'write' && st.ti === j; });
        return selfBand(kind, sim.rub[j], lenCap(kind, words(sim.texts[idx]), t.min));
      });
      if (kind === 'ielts') b = half((bands[0] + 2 * bands[1]) / 3);
      else {
        var bl = sim.build || [], okN = bl.filter(function (r) { return r.ok; }).length;
        b = half((toeflBand(okN, bl.length) + bands[0] + bands[1]) / 3);
      }
      sim.parts = bands;
    } else {
      var rec = sim.steps.filter(function (st, i) { return sim.sp[i] && sim.sp[i].url; }).length, need = Math.ceil(sim.steps.length / 2), cap;
      if (C.rec.ok && rec < need && !sim.steps.some(function (st, i) { return sim.sp[i] && sim.sp[i].noMic; })) cap = kind === 'ielts' ? 3.5 : 2;
      b = selfBand(kind, sim.rub[0], cap);
      sim.cap = cap;
    }
    sim.b = b; sim.n = 0; sim.t = 0;
    C.simSection(kind, sim.sec, { b: b, n: 0, t: 0 });
    sim.phase = 'done'; V.redraw(); window.scrollTo(0, 0); focusHead();
  };

  /* ---------- resultado de una sección ---------- */
  function doneHtml(sim) {
    var kind = sim.kind, auto = sim.sec === 'l' || sim.sec === 'r';
    var s = '<section class="card result"><p class="muted">' + esc(EL.SIMS[kind].name) + ' · ' + NAME[sim.sec] + '</p><h2 id="sim-h" tabindex="-1" class="big">' + fmt(sim.b) + '</h2>' +
      '<p>' + (auto ? sim.n + ' de ' + sim.t + ' correctas · ' : '') + 'puntaje <b>estimado</b> (de ' + (kind === 'ielts' ? '0 a 9' : '1 a 6') + ')</p></section>';
    if (auto) {
      s += '<details class="sim-rev"><summary>Ver mis respuestas y las correctas</summary><ul class="plain">';
      sim.review.forEach(function (r) {
        var e = r.e, mine = r.v === undefined || r.v === '' ? '—' : e.t === 'mc' ? e.o[r.v] : r.v, right = e.t === 'mc' ? e.o[e.a] : (e.full || e.a[0]);
        s += '<li lang="en"><b>' + r.num + '.</b> ' + (r.ok ? I.check : I.cross) + ' ' + esc(mine) + (r.ok ? '' : ' → <b>' + esc(right) + '</b>') + '</li>';
      });
      s += '</ul></details>';
    } else {
      if (sim.cap !== undefined) s += '<p class="note warn">Como casi no grabaste respuestas, el puntaje se limitó a ' + fmt(sim.cap) + '.</p>';
      var crit = sim.sec === 'w' ? sim.d.tasks.reduce(function (a, t, j) { return a.concat(t.rubric.filter(function (c, k) { return sim.rub[j][k] < 2; })); }, []) : sim.d.rubric.filter(function (c, k) { return sim.rub[0][k] < 2; });
      if (crit.length) { s += '<section class="card"><h3>Para mejorar</h3><ul class="plain">'; crit.forEach(function (c) { s += '<li>' + esc(c) + '</li>'; }); s += '</ul></section>'; }
      if (sim.sec === 'w') s += '<button class="btn block" data-act="sim-copy">Copiar mis textos para que Claude me los corrija</button>';
      s += '<p class="muted">Es una autoevaluación: tu puntaje real puede ser distinto. Para una opinión experta, copia tu texto y pídele a Claude o a un profesor que lo revise.</p>';
    }
    return s + '<button class="btn primary block" data-act="exit-flow">Volver a los simulacros</button>';
  }
  A['sim-copy'] = function () {
    var sim = ctx.sim; if (!sim) return;
    var out = 'Corrige mi inglés (estilo ' + EL.SIMS[sim.kind].name + ') con la rúbrica del examen y explícame mis errores en español, de forma breve y con ejemplos.\n';
    sim.d.tasks.forEach(function (t, j) {
      var idx = sim.steps.findIndex(function (st) { return st.k === 'write' && st.ti === j; });
      out += '\n--- ' + t.title + ' ---\nTarea: ' + t.p + '\nMi texto:\n' + (sim.texts[idx] || '') + '\n';
    });
    V.copyText(out);
  };

  /* ======================= RESULTADO TOTAL ======================= */
  var TIPS = {
    l: 'Escucha: antes del audio lee las preguntas y predice qué tipo de dato falta; atiende a las correcciones del hablante («no, sorry…»). Repasa la lección de estrategias de escucha.',
    r: 'Lectura: practica skimming y scanning, y la diferencia entre False y Not Given. No pases más de minuto y medio por pregunta. Repasa las lecciones de estrategias de lectura.',
    w: 'Escritura: usa siempre un plan (postura, razones, ejemplos), varía estructuras y revisa el conteo de palabras. Pídele a Claude o a un profesor que corrija tus textos.',
    s: 'Habla: usa la fórmula respuesta + razón + ejemplo, graba y escúchate, y practica ritmo y entonación con las lecciones de pronunciación.'
  };
  A['sim-total'] = function (el) {
    var kind = el.getAttribute('data-k'), cur = S.sims[kind].cur;
    if (!ORDER[kind].every(function (k) { return !!cur[k]; })) return;
    var b = { l: cur.l.b, r: cur.r.b, w: cur.w.b, s: cur.s.b }, o = overall(kind, b);
    C.simFinish(kind, o);
    V.go('simres', { kind: kind, b: b, o: o, back: { r: 'sims' } });
  };
  A['sim-copy-res'] = function () {
    var r = ctx.kind && ctx;
    if (!r) return;
    V.copyText(EL.SIMS[ctx.kind].name + ' (simulacro Bhalleffort, estimado): L ' + fmt(ctx.b.l) + ' · R ' + fmt(ctx.b.r) + ' · W ' + fmt(ctx.b.w) + ' · S ' + fmt(ctx.b.s) + ' · Total ' + fmt(ctx.o) + ' (' + cefr(ctx.kind, ctx.o) + ')');
  };
  V.views.simres = function () {
    var kind = ctx.kind, X = EL.SIMS[kind], b = ctx.b, o = ctx.o;
    var weakest = ORDER[kind].slice().sort(function (x, y) { return b[x] - b[y]; })[0];
    var s = '<header class="page-head"><button class="link" data-act="go-sims">' + I.back + ' Simulacros</button><h1>Resultado · ' + esc(X.name) + '</h1></header>' +
      '<section class="card result"><p class="muted">Puntaje total estimado (de ' + (kind === 'ielts' ? '0 a 9' : '1 a 6') + ')</p><h2 id="sim-h" tabindex="-1" class="big">' + fmt(o) + '</h2><p>Nivel aproximado: <b>' + cefr(kind, o) + '</b></p></section>' +
      '<section class="card"><h2>Por sección</h2><ul class="rows">';
    ORDER[kind].forEach(function (sec) { s += '<li class="exam-sec"><div><b>' + NAME[sec] + '</b><br><span class="muted">' + (sec === 'w' || sec === 's' ? 'autoevaluación' : 'corrección automática') + '</span></div><div class="exam-r"><b>' + fmt(b[sec]) + '</b></div></li>'; });
    s += '</ul></section><section class="card"><h2>Qué mejorar primero</h2><p><b>' + NAME[weakest] + '</b> (' + fmt(b[weakest]) + ').</p><p>' + esc(TIPS[weakest]) + '</p></section>' +
      '<p class="note">Esta cifra es una <b>estimación orientativa, no oficial</b>: las preguntas son originales de Bhalleffort, el simulacro es más corto que el examen real y escritura y habla son autoevaluaciones. El puntaje que obtengas en el examen oficial puede ser distinto.</p>' +
      '<button class="btn block" data-act="sim-copy-res">Copiar mi resultado</button><button class="btn primary block" data-act="go-sims">Volver a los simulacros</button>';
    V.html(s);
  };
})();
