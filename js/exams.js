/* Bhalleffort — exámenes de nivel (5 secciones), práctica extra y práctica libre. */
(function () {
  'use strict';
  var EL = window.EL, C = EL.c, S = C.S, V = EL.v, esc = C.esc, ctx = V.ctx, I = V.ICON, A = V.A, Q = EL.q;
  function Speech() { return C.speech; }
  var RUBRIC_LABELS = ['No', 'Un poco', 'Bastante', 'Sí'];

  function words(t) { return String(t || '').trim().split(/\s+/).filter(Boolean).length; }
  function pctOf(vals) { return Math.round(vals.reduce(function (n, v) { return n + v; }, 0) * 100 / (3 * vals.length)); }
  function syncText() { var t = document.getElementById('ew-in'); if (t) ctx.text = t.value; }
  function rubricHtml(crit, vals) {
    var s = '<ul class="rubric">';
    crit.forEach(function (c, k) {
      s += '<li><p>' + esc(c) + '</p><div class="filters" role="group" aria-label="' + esc(c) + '">';
      RUBRIC_LABELS.forEach(function (l, v) { s += '<button class="pill" data-act="rb-set" data-k="' + k + '" data-v="' + v + '" aria-pressed="' + (vals[k] === v) + '">' + l + '</button>'; });
      s += '</div></li>';
    });
    return s + '</ul>';
  }
  A['rb-set'] = function (el) { syncText(); ctx.rub[parseInt(el.getAttribute('data-k'), 10)] = parseInt(el.getAttribute('data-v'), 10); V.redraw(); };

  /* ======================= EXAMEN DE NIVEL (centro) ======================= */
  V.views.exam = function () {
    var lvId = ctx.lv, lv = C.levelById(lvId), idx = EL.LEVELS.indexOf(lv);
    if (!lv) return V.go('home');
    var rec = S.exams[lvId] || { sec: {}, passed: false, tries: 0 }, passed = C.levelPassed(lvId), complete = C.levelComplete(idx);
    var s = '<header class="page-head"><button class="link" data-act="go-home">' + I.back + ' Inicio</button><h1>Examen del nivel ' + esc(lvId) + '</h1>' +
      '<p>Para abrir el siguiente nivel necesitas aprobar las cinco secciones. Puedes repetir cualquiera con preguntas nuevas; se guarda tu mejor resultado.</p></header>';
    if (!complete && !passed) {
      return V.html(s + '<section class="card"><p>Primero domina todas las lecciones del nivel ' + esc(lvId) + '.</p><button class="btn primary block" data-act="go-home">Volver</button></section>');
    }
    if (passed) {
      var nxt = EL.LEVELS[idx + 1];
      s += '<section class="card result"><p class="muted">Nivel ' + esc(lvId) + '</p><p class="big">Aprobado</p><p>' + (nxt ? 'Ya puedes entrar al nivel ' + esc(nxt.id) + '.' : 'Terminaste toda la ruta de Bhalleffort. Sigue practicando para mantener el nivel.') + '</p>' +
        '<button class="btn primary block" data-act="go-home">' + (nxt ? 'Empezar el nivel ' + esc(nxt.id) : 'Volver al inicio') + '</button></section>';
    }
    if (!Speech().ok) s += '<p class="note warn">Este dispositivo no tiene voz en inglés: la sección de escucha se hará leyendo los diálogos, así que no mide tu oído. Si puedes, haz este examen en otro dispositivo.</p>';
    s += '<ul class="rows">';
    C.EXAM.order.forEach(function (k) {
      var best = rec.sec[k], need = C.EXAM.pass[k], ok = best !== undefined && best >= need;
      var desc = { g: '20 preguntas de gramática y vocabulario', r: '4 textos con preguntas', l: '4 conversaciones con preguntas', w: 'Escribes un texto y lo evalúas con una rúbrica', s: 'Hablas y te evalúas con una rúbrica' }[k];
      s += '<li class="exam-sec"><div><b>' + esc(C.EXAM.labels[k]) + '</b><br><span class="muted">' + desc + ' · necesitas ' + need + ' %</span></div>' +
        '<div class="exam-r">' + (best === undefined ? '<span class="muted">Pendiente</span>' : '<span class="state ' + (ok ? 'ok' : 'bad') + '">' + (ok ? I.check : I.cross) + ' ' + best + ' %</span>') +
        '<button class="btn' + (ok ? ' ghost' : ' primary') + '" data-act="exam-sec" data-k="' + k + '">' + (best === undefined ? 'Empezar' : ok ? 'Repetir' : 'Intentar otra vez') + '</button></div></li>';
    });
    s += '</ul><p class="muted">Escritura y habla son autoevaluaciones con criterios concretos. Para una opinión experta, copia tu texto y pídele a Claude o a un profesor que lo corrija.</p>';
    V.html(s);
  };
  A['exam-sec'] = function (el) {
    var k = el.getAttribute('data-k'), lvId = ctx.lv, back = { r: 'exam', c: { lv: lvId } };
    if (k === 'w') return V.go('examw', { lv: lvId, back: back, ph: 'write', text: '', rub: [-1, -1, -1, -1, -1] });
    if (k === 's') return V.go('exams', { lv: lvId, back: back, rub: [-1, -1, -1, -1, -1], es: { url: null, rec: false, err: '', noMic: !C.rec.ok } });
    var items = Q.examSection(lvId, k);
    if (!items.length) return V.toast('No hay preguntas disponibles para esta sección');
    V.enter('run', { lv: lvId, back: back, title: 'Examen ' + lvId + ' · ' + C.EXAM.labels[k] });
    V.runExercises(items, { noRetry: true, result: function (R) { return examResult(R, k); } });
    V.draw(true);
  };
  function examResult(R, k) {
    var need = C.EXAM.pass[k], pct = Math.round(R.first * 100 / R.total);
    if (!R.fin) { R.fin = true; ctx.fin = true; R.rec = C.examSectionDone(ctx.lv, k, pct); }
    var pass = pct >= need;
    return '<section class="card result"><p class="muted">' + esc(C.EXAM.labels[k]) + '</p><p class="big">' + pct + ' %</p><p>' + R.first + ' de ' + R.total + ' · ' +
      (pass ? '<b>Sección aprobada.</b>' : '<b>Todavía no.</b> Necesitas ' + need + ' %.') + '</p>' + (R.rec.passed ? '<p><b>¡Aprobaste el examen completo del nivel ' + esc(ctx.lv) + '!</b></p>' : '') + '</section>' +
      V.missesHtml(R) + '<button class="btn primary block" data-act="exam-back">Volver al examen</button>';
  }
  A['exam-back'] = function () { V.go('exam', { lv: ctx.lv }); };
  V.views.run = function () { ctx.head = V.flowHead(ctx.title || 'Práctica'); V.drawEx(); };

  /* ======================= EXAMEN: ESCRITURA ======================= */
  V.views.examw = function () {
    var lvId = ctx.lv, X = EL.EXAMS && EL.EXAMS[lvId] && EL.EXAMS[lvId].w;
    ctx.head = V.flowHead('Examen ' + lvId + ' · Escritura');
    if (!X) return V.out('<p>Esta sección no está disponible.</p>');
    var n = words(ctx.text), s;
    if (ctx.ph === 'write') {
      s = '<h2>Escribe</h2><p>' + esc(X.p) + '</p><p class="muted">Mínimo ' + X.min + ' palabras. Sin traductor ni ayuda: así sabrás dónde estás de verdad.</p>' +
        '<label class="lbl" for="ew-in">Tu texto en inglés</label><textarea id="ew-in" class="field area" rows="9" autocapitalize="sentences" spellcheck="false" lang="en">' + esc(ctx.text) + '</textarea>' +
        '<p class="count" id="ew-count">' + n + ' de ' + X.min + ' palabras</p><button class="btn primary block" data-act="ew-eval">Ya terminé: evaluar mi texto</button>';
      return V.out(s);
    }
    if (ctx.ph === 'rate') {
      s = '<h2>Evalúa tu texto</h2><section class="card"><p class="muted">Tu texto (' + n + ' palabras)</p><p lang="en" class="pre">' + esc(ctx.text) + '</p></section>' +
        '<p>Léelo despacio y responde con honestidad a cada criterio. Si dudas, marca la opción más baja: así sabrás qué reforzar.</p>' + rubricHtml(X.c, ctx.rub) +
        '<button class="btn primary block" data-act="ew-score">Ver mi resultado</button><button class="btn ghost block" data-act="ew-edit">Volver a editar</button>';
      return V.out(s);
    }
    var R = ctx.res, pass = R.pct >= C.EXAM.pass.w;
    s = '<section class="card result"><p class="muted">Escritura</p><p class="big">' + R.pct + ' %</p><p>' + (pass ? '<b>Sección aprobada.</b>' : '<b>Todavía no.</b> Necesitas ' + C.EXAM.pass.w + ' %.') + '</p>' +
      (R.rec.passed ? '<p><b>¡Aprobaste el examen completo del nivel ' + esc(lvId) + '!</b></p>' : '') + '</section>' +
      '<section class="card"><h3>Para mejorar</h3><ul class="plain">';
    X.c.forEach(function (c, k) { if (ctx.rub[k] < 2) s += '<li>' + esc(c) + '</li>'; });
    s += '</ul></section><button class="btn block" data-act="ew-copy">Copiar para que Claude me corrija</button><button class="btn primary block" data-act="exam-back">Volver al examen</button>';
    V.out(s);
  };
  A['ew-eval'] = function () {
    syncText();
    var X = EL.EXAMS[ctx.lv].w;
    if (words(ctx.text) < X.min) return V.toast('Escribe al menos ' + X.min + ' palabras (llevas ' + words(ctx.text) + ')', 3000);
    ctx.ph = 'rate'; V.redraw(); window.scrollTo(0, 0);
  };
  A['ew-edit'] = function () { ctx.ph = 'write'; V.redraw(); };
  A['ew-score'] = function () {
    if (ctx.rub.some(function (v) { return v < 0; })) return V.toast('Responde los cinco criterios', 2800);
    var pct = pctOf(ctx.rub);
    ctx.res = { pct: pct, rec: C.examSectionDone(ctx.lv, 'w', pct) };
    ctx.ph = 'result'; V.redraw(); window.scrollTo(0, 0);
  };
  A['ew-copy'] = function () {
    var X = EL.EXAMS[ctx.lv].w;
    V.copyText('Corrige mi inglés (nivel ' + ctx.lv + ') y explícame mis errores en español, de forma breve y con ejemplos.\nEjercicio: ' + X.p + '\nMi texto:\n' + ctx.text);
  };
  document.addEventListener('input', function (ev) {
    var t = ev.target;
    if (t && t.id === 'ew-in') {
      var c = document.getElementById('ew-count'), X = EL.EXAMS && EL.EXAMS[ctx.lv] && EL.EXAMS[ctx.lv].w;
      if (c && X) c.textContent = words(t.value) + ' de ' + X.min + ' palabras';
    }
  });

  /* ======================= EXAMEN: HABLA ======================= */
  V.views.exams = function () {
    var lvId = ctx.lv, X = EL.EXAMS && EL.EXAMS[lvId] && EL.EXAMS[lvId].s, E = ctx.es;
    ctx.head = V.flowHead('Examen ' + lvId + ' · Habla');
    if (!X) return V.out('<p>Esta sección no está disponible.</p>');
    var s;
    if (ctx.res) {
      var R = ctx.res, pass = R.pct >= C.EXAM.pass.s;
      s = '<section class="card result"><p class="muted">Habla</p><p class="big">' + R.pct + ' %</p><p>' + (pass ? '<b>Sección aprobada.</b>' : '<b>Todavía no.</b> Necesitas ' + C.EXAM.pass.s + ' %.') + '</p>' +
        (R.rec.passed ? '<p><b>¡Aprobaste el examen completo del nivel ' + esc(lvId) + '!</b></p>' : '') + '</section><section class="card"><h3>Para mejorar</h3><ul class="plain">';
      X.c.forEach(function (c, k) { if (ctx.rub[k] < 2) s += '<li>' + esc(c) + '</li>'; });
      return V.out(s + '</ul><p class="muted">Practica las frases de las lecciones con «Grabar» y compárate con el modelo.</p></section><button class="btn primary block" data-act="exam-back">Volver al examen</button>');
    }
    s = '<h2>Habla</h2><p>' + esc(X.p) + '</p><p class="muted">Habla de 20 a 30 segundos, sin parar a corregirte. Si te trabas, sigue.</p>';
    if (E.err) s += '<p class="note warn" role="alert">' + esc(E.err) + '</p>';
    if (C.rec.ok && !E.noMic) {
      s += '<div class="say-row">' + (E.rec ? '<button class="btn danger" data-act="es-stop">' + I.stop + ' Parar</button>' : '<button class="btn primary" data-act="es-rec">' + I.mic + ' ' + (E.url ? 'Grabar otra vez' : 'Grabar mi respuesta') + '</button>') +
        (E.url ? '<button class="btn ghost" data-act="es-mine">' + I.play + ' Escucharme</button>' : '') + '</div>';
      if (E.rec) s += '<p class="rec-now" role="status"><span class="dot"></span> Grabando… (se detiene sola a los 30 s)</p>';
      s += '<p class="muted">Tu grabación se queda en este dispositivo y se borra al salir. <button class="link" data-act="es-nomic">No puedo usar el micrófono</button></p>';
    } else s += '<p class="note">Di tu respuesta en voz alta (puedes cronometrarte con tu celular) y luego evalúate.</p>';
    if (E.url || E.noMic || !C.rec.ok) {
      s += '<h3>Evalúa tu respuesta</h3>' + rubricHtml(X.c, ctx.rub) + '<button class="btn primary block" data-act="es-score">Ver mi resultado</button>';
    }
    V.out(s);
  };
  A['es-rec'] = function () {
    var E = ctx.es; Speech().stop(); C.rec.stopPlay();
    C.rec.start().then(function () {
      E.rec = true; E.err = '';
      C.rec.onAutoStop(function () { A['es-stop'](); });
      if (V.route() === 'exams') V.redraw();
    }, function (e) { E.err = C.rec.errorText(e); E.noMic = true; if (V.route() === 'exams') V.redraw(); });
  };
  A['es-stop'] = function () {
    var E = ctx.es; if (!E) return;
    C.rec.stop().then(function (blob) {
      E.rec = false;
      if (blob) E.url = C.rec.makeUrl(blob); else E.err = 'No se grabó nada. Intenta de nuevo.';
      if (V.route() === 'exams' && ctx.es === E) V.redraw();
    });
  };
  A['es-mine'] = function () { if (ctx.es.url) C.rec.play(ctx.es.url); };
  A['es-nomic'] = function () { ctx.es.noMic = true; V.redraw(); };
  A['es-score'] = function () {
    if (ctx.rub.some(function (v) { return v < 0; })) return V.toast('Responde los cinco criterios', 2800);
    var pct = pctOf(ctx.rub);
    ctx.res = { pct: pct, rec: C.examSectionDone(ctx.lv, 's', pct) };
    V.redraw(); window.scrollTo(0, 0);
  };

  /* ======================= PRÁCTICA EXTRA ======================= */
  V.views.extra = function () {
    var hasListen = Q.doneLessons('listen').length > 0, hasRead = Q.doneLessons('read').length > 0, due = C.dueCards().length, ec = C.errorCount();
    var mins = C.minutesToday(), goal = C.goalMinutes();
    var s = '<header class="page-head"><button class="link" data-act="go-home">' + I.back + ' Inicio</button><h1>Práctica extra</h1><p>Hoy llevas <b>' + mins + '</b> de ' + goal + ' min. Elige lo que más necesitas.</p></header>' + V.bar(mins, goal, 'Meta de hoy');
    function item(title, text, act, enabled, why) {
      return '<section class="card inline"><div><h2>' + title + '</h2><p>' + text + (enabled ? '' : ' <span class="muted">' + why + '</span>') + '</p></div><button class="btn" data-act="' + act + '"' + (enabled ? '' : ' disabled') + '>Empezar</button></section>';
    }
    s += item('Simulacros IELTS y TOEFL', 'Exámenes completos con cronómetro, audio una sola vez y puntaje estimado.', 'go-sims', C.simsOpen(), 'Se abren al aprobar el examen B2.');
    s += item('Tarjetas pendientes', due + ' por repasar (espaciado).', 'cards-start', due > 0, 'No tienes pendientes.');
    s += item('Cuaderno de errores', ec + ' puntos por reforzar. Es lo más rentable.', 'ex-errors', ec > 0, 'Aún no tienes errores guardados.');
    s += item('Escucha libre', 'Conversaciones de lecciones que ya dominas, con preguntas nuevas.', 'ex-listen', hasListen && Speech().ok, hasListen ? 'Necesita voz en inglés.' : 'Disponible al dominar tu primera lección.');
    s += item('Pronunciación: oye y elige', 'Pares de sonidos parecidos (ship / sheep).', 'ex-pron', Speech().ok, 'Necesita voz en inglés.');
    s += item('Lectura extra', 'Textos de lecciones que ya dominas, con preguntas.', 'ex-read', hasRead, 'Disponible al dominar tu primera lección.');
    s += item('Tarjetas al azar', '10 palabras de las que ya guardaste.', 'cards-extra', C.cardCount() > 0, 'Aún no tienes tarjetas.');
    var tk = C.nextTask(), lvId = tk && tk.type === 'lesson' ? C.levelOf(tk.id).id : tk && tk.type === 'exam' ? tk.level : EL.LEVELS[EL.LEVELS.length - 1].id;
    var topics = { A1: ['English for beginners listening practice', 'basic English conversation slow'], A2: ['English listening A2 daily routines', 'travel English conversations airport hotel'], B1: ['cybersecurity basics explained in English', 'IT job interview in English'], B2: ['IELTS listening practice test with answers', 'TED talk technology cybersecurity subtitles English'], C1: ['academic lecture English university subtitles', 'cybersecurity conference talk English'] }[lvId] || [];
    s += '<section class="card"><h2>Inglés real</h2><p>Un poco de inglés auténtico acelera todo. Elige un video con subtítulos <b>en inglés</b>, un podcast o documentación técnica. <span class="muted">Necesita internet.</span></p><ul class="plain">';
    topics.forEach(function (t) { s += '<li><a href="https://www.youtube.com/results?search_query=' + encodeURIComponent(t) + '" target="_blank" rel="noopener noreferrer">' + esc(t) + '</a></li>'; });
    s += '</ul><p class="tip">No traduzcas todo. Anota 3 palabras y vuelve a oírlas una vez. Cuando termines, registra el tiempo:</p><div class="say-row"><button class="btn" data-act="log-min" data-m="10">+10 min</button><button class="btn" data-act="log-min" data-m="20">+20 min</button></div>' +
      '<p class="muted">Se registra por tu palabra (fuera de la app no podemos medirlo).</p></section>';
    V.html(s);
  };
  A['log-min'] = function (el) {
    var m = parseInt(el.getAttribute('data-m'), 10) || 0;
    if (m <= 0 || m > 60) return;
    C.addTime(m * 60); C.save(); V.toast('Sumaste ' + m + ' min'); V.redraw();
  };
  function runList(title, items, back) {
    if (!items.length) return V.toast('No hay ejercicios disponibles ahora');
    V.enter('run', { back: back || { r: 'extra' }, title: title });
    V.runExercises(items, { onDone: function () { V.go((back && back.r) || 'extra', back && back.c); } });
    V.draw(true);
  }
  A['ex-errors'] = function () {
    var back = V.route() === 'extra' ? { r: 'extra' } : { r: V.route() === 'home' ? 'home' : 'cards' };
    runList('Cuaderno de errores', Q.errorItems(10), back);
  };
  A['ex-listen'] = function () {
    var items = [];
    C.pick(Q.doneLessons('listen'), 2).forEach(function (L) { L.listen.q.forEach(function (e) { var c = Object.assign({}, e); c.aud = L.listen.d; items.push(c); }); });
    runList('Escucha libre', items);
  };
  A['ex-pron'] = function () { runList('Pronunciación', Q.hearItems(8)); };
  A['ex-read'] = function () {
    var items = [];
    C.pick(Q.doneLessons('read'), 2).forEach(function (L) { L.read.q.forEach(function (e) { var c = Object.assign({}, e); c.pass = L.read.t; items.push(c); }); });
    runList('Lectura extra', items);
  };
})();
