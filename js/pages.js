/* Bhalleffort — pantallas principales: inicio, prueba de nivel, lecciones, tarjetas y errores, progreso y ajustes. */
(function () {
  'use strict';
  var EL = window.EL, C = EL.c, S = C.S, V = EL.v, esc = C.esc, ctx = V.ctx, I = V.ICON, A = V.A;
  function Speech() { return C.speech; }

  /* Cabecera de las pantallas "de flujo" (sin barra de pestañas). */
  V.flowHead = function (title) {
    return function () {
      return '<header class="flow-head"><button class="link" data-act="exit-flow">' + I.back + ' Salir</button><span>' + esc(title) + '</span></header>';
    };
  };
  function track(t) { return V.trackChip(t); }
  function nextWeeks() {
    var done = C.doneCount(), total = EL.PATH.length, left = total - done;
    if (left <= 0) return null;
    var days = Object.keys(S.days).filter(function (d) { return S.days[d].steps > 0 || S.days[d].lessons > 0; }).sort();
    var perWeek = 5, real = false;
    if (days.length >= 3 && done >= 2) {
      var weeks = Math.max(1, C.daysBetween(days[0], C.today()) / 7);
      perWeek = Math.max(1, Math.min(7, done / weeks)); real = true;
    }
    return { perWeek: perWeek, weeks: Math.ceil(left / perWeek), real: real };
  }
  function backupDue() {
    if (C.doneCount() < 3) return false;
    var lb = S.settings.lastBackup;
    return !lb || C.daysBetween(lb, C.today()) >= 7;
  }
  function levelRows() {
    var s = '';
    C.levelProgress().forEach(function (p, idx) {
      var ex = S.exams[p.id];
      var tag = p.passed ? '<span class="state ok">' + I.check + ' Aprobado</span>' : !p.open ? '<span class="state lock">' + I.lock + ' Bloqueado</span>' : p.complete ? '<span class="state next">Examen</span>' : '';
      if (idx < C.placedLevelIdx()) tag = '<span class="state ok">' + I.check + ' Saltado</span>';
      s += '<div class="lv"><span class="lv-n"><b>' + p.id + '</b> ' + esc(p.name) + '</span>' + V.bar(p.done, p.total, 'Nivel ' + p.id) + '<span class="lv-c">' + p.done + ' de ' + p.total + '</span></div>';
      if (tag) s += '<p class="lv-tag">' + tag + (ex && !p.passed && ex.tries ? ' <span class="muted">intentos: ' + ex.tries + '</span>' : '') + '</p>';
    });
    return s;
  }

  /* ======================= INICIO ======================= */
  V.views.home = function () {
    var ss = S.session, task = C.nextTask(), due = C.dueCards().length, st = C.streak(), mins = C.minutesToday(), goal = C.goalMinutes();
    var s = '<header class="brand"><span class="brand-mark">' + I.plane + '</span><div><h1>Bhalleffort</h1><p>Inglés para tu carrera y para viajar</p></div></header>';
    if (C.noStorage) s += '<div class="note warn" role="alert">Este navegador no permite guardar tu progreso (¿ventana privada?). Ábrela en una ventana normal para no perderlo.</div>';
    if (C.corrupt) s += '<div class="note warn" role="alert">No pude leer tu progreso guardado (estaba dañado), así que empezaste de cero. Guardé una copia por si quieres recuperarla. <button class="link" data-act="dl-corrupt">Descargar copia</button></div>';

    if (!S.level) {
      s += '<section class="card"><h2>Empecemos por tu nivel</h2>' +
        '<p>Son hasta 40 preguntas, con algo de escucha, y se detiene sola cuando llegas a tu nivel (si empiezas de cero, son unas 8). No es un examen: sirve para empezar en la lección correcta. Si no sabes una respuesta, elige «No sé».</p>' +
        '<button class="btn primary block" data-act="pl-start">Hacer la prueba de nivel</button>' +
        '<button class="btn ghost block" data-act="from-zero">Prefiero empezar desde cero</button></section>' +
        '<section class="card"><h2>Cómo funciona</h2><ul class="plain">' +
        '<li><b>Una sesión guiada al día</b> (unos 90 min): repaso, lección, práctica, escucha, habla, lectura, escritura y prueba.</li>' +
        '<li><b>No avanzas si no dominas.</b> Cada lección termina con una prueba: necesitas 80 % para abrir la siguiente.</li>' +
        '<li><b>Exámenes por nivel</b> con gramática, lectura, escucha, escritura y habla.</li>' +
        '<li><b>Tres temas en una ruta:</b> inglés general, para viajar y técnico de TI y ciberseguridad, más trabajo y pronunciación.</li></ul></section>';
      return V.html(s);
    }

    var lid = ss ? ss.id : (task && task.type === 'lesson' ? task.id : null);
    var L = lid && C.lesson(lid);
    if (L) {
      var steps = ss ? ss.steps : (due ? C.STEP_ORDER : C.STEP_ORDER.slice(1));
      var lv = C.levelOf(L.id), doneToday = !ss && S.days[C.today()] && S.days[C.today()].lessons > 0;
      var cta = ss ? 'Continuar sesión (paso ' + (ss.step + 1) + ' de ' + ss.steps.length + ')' : doneToday ? 'Hacer otra lección hoy' : 'Empezar sesión de hoy';
      s += '<section class="pass" aria-label="Tu próxima sesión"><div class="pass-top"><div class="leg"><span class="leg-k">Nivel actual</span><span class="leg-v">' + lv.id + '</span></div>' +
        '<span class="pass-plane">' + I.plane + '</span><div class="leg end"><span class="leg-k">Meta</span><span class="leg-v">' + EL.LEVELS[EL.LEVELS.length - 1].id + '</span></div></div>' +
        '<div class="pass-cut" aria-hidden="true"></div><div class="pass-body"><p class="pass-line">' + (ss ? 'Sesión en curso' : doneToday ? 'Hoy ya dominaste una lección' : 'Hoy toca') +
        ' · lección ' + C.position(L.id) + ' de ' + EL.PATH.length + ' · ' + esc(EL.TRACKS[L.track]) + '</p><h2>' + esc(L.title) + '</h2>' +
        '<p class="pass-meta">Unos ' + V.fmtMin(C.sessionMinutes(steps)) + ' en ' + steps.length + ' pasos' + (task && task.review ? ' · repaso de un nivel que saltaste' : '') + '</p>' +
        '<button class="btn primary block" data-act="start-session">' + cta + '</button></div></section>';
    } else if (task && task.type === 'exam') {
      s += '<section class="pass" aria-label="Examen del nivel"><div class="pass-top"><div class="leg"><span class="leg-k">Terminaste</span><span class="leg-v">' + esc(task.level) + '</span></div>' +
        '<span class="pass-plane">' + I.flag + '</span><div class="leg end"><span class="leg-k">Falta</span><span class="leg-v">Examen</span></div></div>' +
        '<div class="pass-cut" aria-hidden="true"></div><div class="pass-body"><p class="pass-line">Para abrir el siguiente nivel</p><h2>Examen del nivel ' + esc(task.level) + '</h2>' +
        '<p class="pass-meta">Cinco secciones: gramática, lectura, escucha, escritura y habla. Puedes repetir cada una.</p>' +
        '<button class="btn primary block" data-act="go-exam">Ir al examen</button></div></section>';
    } else {
      s += '<section class="card"><h2>Completaste toda la ruta ' + EL.LEVELS[0].id + ' a ' + EL.LEVELS[EL.LEVELS.length - 1].id + '</h2><p>Dominaste las ' + EL.PATH.length + ' lecciones y aprobaste los exámenes. Para medirte como en un examen real, haz los simulacros de IELTS y TOEFL. Y para no perder lo aprendido: repasa tarjetas, practica tus errores y escucha inglés real.</p>' +
        '<button class="btn primary block" data-act="go-sims">Simulacros de examen</button><button class="btn block" data-act="go-extra">Práctica extra</button></section>';
    }

    s += '<section class="card goal"><div class="goal-h"><h2>Meta de hoy</h2><span><b>' + mins + '</b> de ' + goal + ' min</span></div>' + V.bar(mins, goal, 'Minutos de estudio de hoy') +
      '<p class="muted">' + (mins >= goal ? 'Meta cumplida. Todo lo que hagas ahora suma extra.' : 'Cuenta solo el tiempo en que estás estudiando (con la pantalla activa).') + '</p>' +
      (mins < goal && !ss ? '<button class="btn block ghost" data-act="go-extra">Sumar minutos con práctica extra</button>' : '') + '</section>';

    s += '<section class="stats" aria-label="Tu avance"><div><b>' + st + '</b><span>' + (st === 1 ? 'día seguido' : 'días seguidos') + '</span></div>' +
      '<div><b>' + C.doneCount() + '</b><span>lecciones dominadas</span></div>' +
      '<div><b>' + due + '</b><span>' + (due === 1 ? 'tarjeta por repasar' : 'tarjetas por repasar') + '</span></div></section>';

    if (due && !ss) {
      s += '<section class="card inline"><div><h2>Repaso pendiente</h2><p>' + due + (due === 1 ? ' tarjeta espera' : ' tarjetas esperan') + '. Se repasan solas dentro de la sesión, o ahora mismo:</p></div>' +
        '<button class="btn" data-act="cards-start">Repasar ahora</button></section>';
    }
    if (C.simsOpen() && !ss && task) {
      s += '<section class="card inline"><div><h2>Simulacros IELTS y TOEFL</h2><p>Mídete con el formato real: cronómetro, audio una sola vez y puntaje estimado.</p></div><button class="btn" data-act="go-sims">Abrir</button></section>';
    }
    if (C.errorCount() >= 5 && !ss) {
      s += '<section class="card inline"><div><h2>Cuaderno de errores</h2><p>' + C.errorCount() + ' puntos por reforzar. Practicarlos es lo que más sube tu nivel.</p></div><button class="btn" data-act="ex-errors">Practicar</button></section>';
    }
    if (backupDue()) {
      s += '<section class="card inline"><div><h2>Haz un respaldo</h2><p>Tu progreso vive solo en este dispositivo. Descarga una copia (30 segundos) por si cambias de teléfono o borras datos.</p></div><button class="btn" data-act="export">Respaldar</button></section>';
    }
    s += '<section class="card"><h2>Tu ruta</h2>' + levelRows() + '</section>';
    V.html(s);
  };

  A['start-session'] = function () {
    var task = C.nextTask();
    if (S.session) return V.go('session');
    if (task && task.type === 'exam') return V.go('exam', { lv: task.level });
    if (task && task.type === 'lesson') { C.startSession(task.id); V.go('session'); }
  };
  A['go-home'] = function () { V.go('home'); };
  A['go-extra'] = function () { V.go('extra'); };
  A['go-exam'] = function (el) {
    var lv = el && el.getAttribute && el.getAttribute('data-lv'), t = C.nextTask();
    lv = lv || (t && t.type === 'exam' ? t.level : null);
    if (lv) V.go('exam', { lv: lv });
  };
  A['dl-corrupt'] = function () { V.download('bhalleffort-datos-danados.json', C.rawCorrupt() || '{}'); };
  A.nav = function (el) { var to = el.getAttribute('data-to'); if (V.views[to]) V.go(to); };
  A['exit-flow'] = function () {
    var r = V.route(), back = ctx.back, msg = null;
    if (r === 'placement' && ctx.pl && ctx.pl.i > 0 && ctx.pl.i < ctx.pl.items.length) msg = '¿Salir de la prueba? Perderás tus respuestas.';
    else if (r === 'run' && ctx.run && ctx.run.i > 0 && ctx.run.i < ctx.run.queue.length && !ctx.fin) msg = '¿Salir? Perderás el avance de esta práctica.';
    else if (r === 'examw' && !ctx.res && (ctx.text || '').length > 20) msg = '¿Salir? Perderás lo que escribiste.';
    else if (r === 'simrun' && ctx.sim && (ctx.sim.phase === 'steps' || ctx.sim.phase === 'rate')) msg = '¿Salir? Perderás esta sección del simulacro (el cronómetro no se pausa en el examen real).';
    if (msg && !window.confirm(msg)) return;
    if (back) V.go(back.r, back.c); else V.go('home');
  };

  /* ======================= PRUEBA DE NIVEL ======================= */
  function plItems() { return EL.PLACEMENT.filter(function (q) { return !q.say || Speech().ok; }); }
  V.views.placement = function () {
    ctx.head = V.flowHead('Prueba de nivel');
    var pl = ctx.pl, P = pl.items;
    if (pl.i >= P.length) return placementResult();
    var q = P[pl.i], s = V.bar(pl.i, P.length, 'Progreso de la prueba') + '<p class="count">Pregunta ' + (pl.i + 1) + (EL.LEVELS.length > 1 ? ' (máximo ' + P.length + ')' : '') + '</p><section class="card ex">';
    if (q.say) {
      s += '<p class="q">Escucha y elige lo que oyes.</p><div class="say-row"><button class="btn primary" data-act="pl-play">' + I.play + ' Escuchar</button><button class="btn" data-act="pl-play" data-slow="1">Más lento</button></div>';
    } else s += '<p class="q" lang="en">' + V.qHtml(q.q) + '</p>';
    s += '<div class="opts">';
    q.o.forEach(function (t, i) { s += '<button class="opt" data-act="pl-ans" data-i="' + i + '"><span lang="en">' + esc(t) + '</span></button>'; });
    s += '<button class="opt dunno" data-act="pl-ans" data-i="-1">No sé</button></div></section>';
    V.out(s);
    if (q.say && pl.played !== pl.i) { pl.played = pl.i; Speech().say(q.say); }
  };
  function placementResult() {
    var pl = ctx.pl, P = pl.items, sc = {}, tot = {}, level = null;
    EL.LEVELS.forEach(function (l) { sc[l.id] = 0; tot[l.id] = 0; });
    P.forEach(function (q, i) { if (i < pl.ans.length) { tot[q.lv]++; if (pl.ans[i] === q.a) sc[q.lv]++; } });
    function ok(l) { return tot[l] > 0 && sc[l] >= Math.ceil(tot[l] * 0.75); }
    EL.LEVELS.some(function (l) { if (!ok(l.id)) { level = l.id; return true; } return false; });
    if (!level) level = EL.LEVELS[EL.LEVELS.length - 1].id;
    var lv = C.levelById(level);
    if (!ctx.saved) {
      S.placement = { date: C.today(), score: sc, level: level };
      S.level = level; S.start = lv.from; S.session = null;
      C.save();
      if (S.start > 0) ctx.seeded = C.seedSkippedCards();
      ctx.saved = true;
    }
    var first = C.lesson(EL.PATH[lv.from]);
    var msg = { A1: 'Empezarás desde lo básico. Es la mejor base: avanzarás rápido.', A2: 'Ya manejas lo básico. Empezarás en el nivel elemental (A2).', B1: 'Tienes buena base. Empezarás en el nivel intermedio (B1).',
      B2: 'Tu nivel es intermedio alto. Empezarás en B2, donde se trabajan las estrategias de IELTS y TOEFL.', C1: 'Tu nivel es avanzado. Empezarás en C1: precisión, registro académico y estrategias de examen.' }[level];
    var rows = '';
    EL.LEVELS.forEach(function (l) { if (tot[l.id]) rows += '<li>' + l.id + ': <b>' + sc[l.id] + ' de ' + tot[l.id] + '</b></li>'; });
    V.out('<section class="card result"><p class="muted">Tu punto de partida</p><p class="big">' + level + '</p><p>' + msg + '</p>' +
      '<ul class="plain">' + rows + '</ul>' +
      '<p class="muted">Empezarás en la lección ' + (lv.from + 1) + ': ' + esc(first.title) + '.</p>' +
      (ctx.seeded ? '<p class="muted">Algunas palabras de los niveles que saltaste entrarán poco a poco a tus tarjetas (' + ctx.seeded + ' palabras, unas 12 al día) para que no queden huecos.</p>' : '') + '</section>' +
      '<button class="btn primary block" data-act="go-home">Ir al inicio</button><button class="btn ghost block" data-act="pl-start">Repetir la prueba</button>');
  }
  A['pl-start'] = function () { V.go('placement', { pl: { i: 0, ans: [], items: plItems(), played: -1 } }); };
  A['pl-ans'] = function (el) {
    var pl = ctx.pl, q = pl.items[pl.i];
    pl.ans.push(parseInt(el.getAttribute('data-i'), 10)); pl.i++;
    var next = pl.items[pl.i];
    if (next && next.lv !== q.lv) {          /* terminó el bloque de un nivel: si no lo pasaste, la prueba se detiene */
      var s = 0, t = 0;
      pl.items.forEach(function (x, j) { if (x.lv === q.lv && j < pl.ans.length) { t++; if (pl.ans[j] === x.a) s++; } });
      if (s < Math.ceil(t * 0.75)) pl.items = pl.items.slice(0, pl.i);
    }
    Speech().stop(); V.draw(true);
  };
  A['pl-play'] = function (el) { Speech().say(ctx.pl.items[ctx.pl.i].say, el.getAttribute('data-slow') === '1'); };
  A['from-zero'] = function () { S.level = 'A1'; S.start = 0; S.placement = null; S.session = null; C.save(); V.go('home'); };
  A['redo-placement'] = function () { A['pl-start'](); };

  /* ======================= LECCIONES ======================= */
  V.views.lessons = function () {
    var f = ctx.f || 'all', nextId = C.nextLessonId();
    var s = '<header class="page-head"><h1>Lecciones</h1><p>Cada lección se abre cuando dominas la anterior (prueba de ' + C.PASS_TXT + ').</p></header><div class="filters" role="group" aria-label="Filtrar por tema">';
    [['all', 'Todas'], ['general', 'General'], ['travel', 'Viajes'], ['tech', 'Técnico'], ['work', 'Trabajo'], ['pron', 'Pronunciación'], ['exam', 'Examen']].forEach(function (x) {
      s += '<button class="pill" data-act="lf" data-f="' + x[0] + '" aria-pressed="' + (f === x[0]) + '">' + x[1] + '</button>';
    });
    s += '</div>';
    EL.LEVELS.forEach(function (lv, idx) {
      var rows = '', open = C.levelOpen(idx), i, L, st, row;
      for (i = lv.from; i <= lv.to; i++) {
        L = C.lesson(EL.PATH[i]);
        if (f !== 'all' && L.track !== f) continue;
        var locked = !C.unlocked(L.id), rec = S.done[L.id];
        st = rec ? '<span class="state ok">' + I.check + ' ' + (rec.quiz !== null && rec.quiz !== undefined ? rec.quiz + ' %' : 'Hecha') + '</span>' :
          locked ? '<span class="state lock">' + I.lock + '<span class="sr"> bloqueada</span></span>' : L.id === nextId ? '<span class="state next">Siguiente</span>' : '<span class="state">Abierta</span>';
        row = '<li><button class="row' + (locked ? ' locked' : '') + '" data-act="' + (locked ? 'locked-lesson' : 'open-lesson') + '" data-id="' + esc(L.id) + '"' + (locked ? ' aria-disabled="true"' : '') + '>' +
          '<span class="row-n">' + (i + 1) + '</span><span class="row-t"><b>' + esc(L.title) + '</b>' + track(L.track) + '</span>' + st + '</button></li>';
        rows += row;
      }
      var complete = C.levelComplete(idx), passed = C.levelPassed(lv.id);
      var exRow = '<li><button class="row exam-row' + (complete || passed ? '' : ' locked') + '" data-act="open-exam" data-lv="' + lv.id + '"><span class="row-n">' + I.flag + '</span><span class="row-t"><b>Examen del nivel ' + lv.id + '</b><span class="muted">Gramática, lectura, escucha, escritura y habla</span></span>' +
        (passed ? '<span class="state ok">' + I.check + ' Aprobado</span>' : complete ? '<span class="state next">Disponible</span>' : '<span class="state lock">' + I.lock + '<span class="sr"> bloqueado</span></span>') + '</button></li>';
      s += '<h2 class="lv-h">' + lv.id + ' · ' + esc(lv.name) + (open ? '' : ' <span class="state lock">' + I.lock + ' Bloqueado</span>') + '</h2>';
      if (idx < C.placedLevelIdx()) s += '<p class="muted">Empezaste en un nivel más alto. Puedes abrir estas lecciones cuando quieras para repasar.</p>';
      s += '<ul class="rows">' + rows + (f === 'all' ? exRow : '') + '</ul>';
    });
    V.html(s);
  };
  A.lf = function (el) { ctx.f = el.getAttribute('data-f'); V.redraw(); };
  A['open-lesson'] = function (el) {
    var id = el.getAttribute('data-id');
    if (!C.unlocked(id)) return V.toast(C.lockReason(id), 3200);
    V.startLesson(id);
  };
  A['locked-lesson'] = function (el) { V.toast(C.lockReason(el.getAttribute('data-id')), 3500); };
  A['open-exam'] = function (el) {
    var lvId = el.getAttribute('data-lv'), idx = EL.LEVELS.indexOf(C.levelById(lvId));
    if (idx < 0) return;
    if (!C.levelComplete(idx) && !C.levelPassed(lvId)) return V.toast('Primero domina todas las lecciones de ' + lvId + '.', 3200);
    V.go('exam', { lv: lvId });
  };

  /* ======================= TARJETAS Y ERRORES ======================= */
  V.views.cards = function () {
    var n = C.cardCount(), due = C.dueCards().length, mature = C.matureCount(), ec = C.errorCount(), sum = C.errorSummary();
    var s = '<header class="page-head"><h1>Tarjetas</h1><p>Repaso espaciado: las palabras vuelven justo antes de que las olvides.</p></header>';
    if (!n) {
      s += '<section class="card"><h2>Aún no tienes tarjetas</h2><p>Se crean solas cuando terminas el paso «Lección» de la sesión diaria.</p><button class="btn primary block" data-act="go-home">Ir al inicio</button></section>';
    } else {
      s += '<section class="stats"><div><b>' + n + '</b><span>guardadas</span></div><div><b>' + due + '</b><span>para hoy</span></div><div><b>' + mature + '</b><span>dominadas</span></div></section>';
      if (due) s += '<button class="btn primary block" data-act="cards-start">Repasar ' + Math.min(due, 20) + ' tarjetas ahora</button>';
      else s += '<section class="card"><h2>Todo al día</h2><p>No tienes repasos pendientes hoy. Vuelve mañana o practica un poco más sin alterar tu calendario.</p></section>';
      s += '<button class="btn ' + (due ? 'ghost' : 'primary') + ' block" data-act="cards-extra">Practicar 10 al azar</button>';
    }
    s += '<h2 class="lv-h">Cuaderno de errores</h2>';
    if (!ec) s += '<section class="card"><p>Está vacío. Cuando falles algo en un ejercicio o prueba, queda aquí hasta que lo aciertes dos veces seguidas.</p></section>';
    else {
      s += '<section class="card"><p><b>' + ec + '</b> ' + (ec === 1 ? 'punto' : 'puntos') + ' por reforzar:</p><ul class="plain"><li>Gramática: <b>' + sum.grammar + '</b></li><li>Vocabulario: <b>' + sum.vocab + '</b></li><li>Escucha: <b>' + sum.listen + '</b></li></ul>' +
        '<p class="muted">Cada uno sale de tu lista cuando lo aciertas dos veces seguidas.</p><button class="btn primary block" data-act="ex-errors">Practicar mis errores</button></section>';
    }
    V.html(s);
  };
  A['cards-start'] = function () {
    var q = C.dueCards().slice(0, 20).map(function (c) { return c.id; }), from = V.route() === 'home' ? 'home' : 'cards';
    if (!q.length) return V.toast('No tienes tarjetas pendientes');
    V.enter('cardsflow', { back: { r: from } });
    V.startCards(q, { back: function () { V.go(from); } });
    V.draw(true);
  };
  A['cards-extra'] = function () {
    var from = V.route() === 'extra' ? 'extra' : 'cards', ids = C.shuffle(Object.keys(S.cards)).slice(0, 10);
    if (!ids.length) return V.toast('Aún no tienes tarjetas');
    V.enter('cardsflow', { back: { r: from } });
    V.startCards(ids, { extra: true, back: function () { V.go(from); } });
    V.draw(true);
  };
  V.views.cardsflow = function () { ctx.head = V.flowHead('Repaso de tarjetas'); V.drawCard(); };

  /* ======================= PROGRESO Y AJUSTES ======================= */
  function offlineText() {
    if (!('serviceWorker' in navigator)) return 'Este navegador no puede guardar la app para usarla sin internet.';
    if (!/^https?:$/.test(location.protocol)) return 'Estás abriendo el archivo directamente. Para el modo sin internet y la instalación, abre la app desde su enlace web.';
    if (navigator.serviceWorker.controller) return 'La app está guardada en este dispositivo y funciona sin internet.';
    return 'Todavía no está guardada para usarla sin internet. Se guarda sola la primera vez que la abres con conexión; recarga una vez si ya lo hiciste.';
  }
  function examSummary() {
    var s = '<section class="card"><h2>Exámenes de nivel</h2><ul class="plain">';
    EL.LEVELS.forEach(function (lv) {
      var p = C.levelPassed(lv.id), ex = S.exams[lv.id], secs = '';
      if (ex) C.EXAM.order.forEach(function (k) { if (ex.sec[k] !== undefined) secs += ' ' + C.EXAM.labels[k].split(' ')[0] + ' ' + ex.sec[k] + ' %' + (ex.sec[k] >= C.EXAM.pass[k] ? ' ✓' : '') + ' ·'; });
      s += '<li><b>' + lv.id + '</b>: ' + (p ? 'aprobado' : ex ? 'en curso' : 'pendiente') + (secs ? '<br><span class="muted">' + esc(secs.replace(/ ·$/, '')) + '</span>' : '') + '</li>';
    });
    return s + '</ul></section>';
  }
  function icsText() {
    var t = (S.settings.remind || '19:00').replace(':', '') + '00', d = C.today().replace(/-/g, '');
    var stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
    return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Bhalleffort//ES', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT', 'UID:bhalleffort-diario@jhomac2.github.io', 'DTSTAMP:' + stamp,
      'DTSTART:' + d + 'T' + t, 'DURATION:PT1H30M', 'RRULE:FREQ=DAILY', 'SUMMARY:Bhalleffort: sesión de inglés', 'DESCRIPTION:Abre Bhalleffort y completa tu sesión de hoy.',
      'BEGIN:VALARM', 'TRIGGER:PT0M', 'ACTION:DISPLAY', 'DESCRIPTION:Bhalleffort: hora de estudiar inglés', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  }
  V.views.progress = function () {
    var done = C.doneCount(), total = EL.PATH.length, hrs = C.totalSeconds() / 3600, bh = window.__bh || {};
    var s = '<header class="page-head"><h1>Progreso</h1></header><section class="card"><h2>Ruta ' + EL.LEVELS[0].id + ' a ' + EL.LEVELS[EL.LEVELS.length - 1].id + '</h2>' + V.bar(done, total, 'Lecciones dominadas') +
      '<p><b>' + done + ' de ' + total + '</b> lecciones dominadas</p>' + levelRows();
    var est = nextWeeks();
    if (est) s += '<p class="muted">Al ritmo ' + (est.real ? 'actual' : 'de referencia') + ' (' + est.perWeek.toFixed(1).replace('.', ',') + ' lecciones por semana) terminarías esta ruta en unas ' + est.weeks + ' semanas.</p>';
    s += '</section><section class="stats"><div><b>' + C.streak() + '</b><span>racha (días)</span></div><div><b>' + C.activeDays() + '</b><span>días estudiados</span></div><div><b>' + (hrs < 10 ? hrs.toFixed(1).replace('.', ',') : Math.round(hrs)) + '</b><span>horas en total</span></div></section>' +
      '<section class="stats"><div><b>' + C.cardCount() + '</b><span>palabras guardadas</span></div><div><b>' + C.matureCount() + '</b><span>dominadas</span></div><div><b>' + C.errorCount() + '</b><span>errores por reforzar</span></div></section>' + examSummary();

    s += '<section class="card"><h2>Meta diaria</h2><p>Minutos de estudio activo por día:</p><div class="filters" role="group" aria-label="Meta diaria">';
    [60, 90, 120].forEach(function (g) { s += '<button class="pill" data-act="set-goal" data-g="' + g + '" aria-pressed="' + (C.goalMinutes() === g) + '">' + g + ' min</button>'; });
    s += '</div><p class="muted">Con 90 min haces una sesión completa. El tiempo solo cuenta mientras estudias de verdad.</p></section>';

    s += '<section class="card"><h2>Voz y micrófono</h2>';
    if (!Speech().ok) s += '<p class="note">Este navegador no tiene síntesis de voz. Las partes de escucha se harán leyendo. Prueba con Chrome, Edge o Safari actualizados.</p>';
    else {
      s += '<p>Velocidad de la voz en inglés:</p><div class="filters" role="group" aria-label="Velocidad de la voz">';
      [[0.75, 'Lenta'], [0.9, 'Normal'], [1.05, 'Rápida']].forEach(function (x) {
        s += '<button class="pill" data-act="set-rate" data-r="' + x[0] + '" aria-pressed="' + (Math.abs((S.settings.rate || 0.9) - x[0]) < 0.01) + '">' + x[1] + '</button>';
      });
      s += '</div>';
      var vs = Speech().voices();
      if (vs.length) {
        s += '<label class="lbl" for="voice-sel">Voz</label><select id="voice-sel" class="field"><option value="">Automática</option>';
        vs.forEach(function (v) { s += '<option value="' + esc(v.name) + '"' + (S.settings.voice === v.name ? ' selected' : '') + '>' + esc(v.name + ' (' + v.lang + ')') + '</option>'; });
        s += '</select>';
      }
      s += '<div class="say-row"><button class="btn" data-act="say" data-t="Hello! This is how I sound.">' + I.speaker + ' Probar la voz</button></div>';
      if (!vs.length) s += '<p class="note warn">No encontré una voz en inglés en este dispositivo (si acabas de abrir la app, espera unos segundos y vuelve a entrar). Android: Ajustes → Idioma → Texto a voz → instala «Inglés». iPhone: Ajustes → Accesibilidad → Contenido hablado → Voces.</p>';
    }
    s += '<p>' + (C.rec.ok ? 'Puedes grabar tu voz para compararla con el modelo. La grabación nunca sale de tu dispositivo y se borra al salir de la pantalla.' : 'Este navegador no puede grabar tu voz; la práctica de habla será por autoevaluación.') + '</p>';
    if (C.asr.ok) {
      s += '<p>Reconocimiento de voz (opcional): el navegador intenta entender lo que dices y marca qué palabras salieron. <b>Envía tu audio al servicio de voz de tu navegador y necesita internet.</b></p>' +
        '<div class="filters" role="group" aria-label="Reconocimiento de voz"><button class="pill" data-act="set-asr" data-v="0" aria-pressed="' + !S.settings.asr + '">Desactivado</button><button class="pill" data-act="set-asr" data-v="1" aria-pressed="' + !!S.settings.asr + '">Activado</button></div>';
    }
    s += '</section>';

    s += '<section class="card"><h2>Recordatorio diario</h2><p>Crea un evento diario en el calendario de tu teléfono o computadora con alarma:</p>' +
      '<label class="lbl" for="remind-time">Hora</label><input id="remind-time" class="field" type="time" value="' + esc(S.settings.remind || '19:00') + '">' +
      '<button class="btn block" data-act="get-ics">Descargar recordatorio (.ics)</button></section>';

    s += '<section class="card"><h2>Sin internet e instalación</h2><p id="offline-status">' + esc(offlineText()) + '</p>';
    if (bh.install) s += '<button class="btn primary block" data-act="install">Instalar la app</button>';
    s += '<details><summary>Cómo instalarla</summary><p><b>Android (Chrome):</b> menú ⋮ → «Instalar app».<br><b>iPhone (Safari):</b> Compartir → «Agregar a inicio».<br><b>Computadora (Chrome/Edge):</b> icono de instalar en la barra de direcciones.<br>Ábrela una vez con internet; después funciona sin conexión.</p></details></section>';

    var lb = S.settings.lastBackup;
    s += '<section class="card"><h2>Respaldo y otro dispositivo</h2><p>Tu avance se guarda solo en este dispositivo. Para pasarlo a otro (o por seguridad), descarga un respaldo e impórtalo allá.</p>' +
      '<p class="muted">' + (lb ? 'Último respaldo: ' + esc(lb) + '.' : 'Aún no has hecho un respaldo.') + '</p>' +
      '<div class="say-row"><button class="btn" data-act="export">Descargar respaldo</button><button class="btn" data-act="import">Importar respaldo</button></div></section>' +
      '<section class="card"><h2>Otras opciones</h2><div class="say-row"><button class="btn ghost" data-act="redo-placement">Repetir la prueba de nivel</button><button class="btn danger" data-act="reset">Borrar todo mi progreso</button></div></section>' +
      '<p class="muted foot">Bhalleffort · tus datos nunca salen de tu dispositivo.</p>';
    V.html(s);
  };
  A['set-goal'] = function (el) { S.settings.goal = parseInt(el.getAttribute('data-g'), 10); C.save(); V.redraw(); };
  A['set-rate'] = function (el) {
    S.settings.rate = parseFloat(el.getAttribute('data-r')); C.save(); V.redraw();
    Speech().say('This is the new speed.');
  };
  A['set-asr'] = function (el) { S.settings.asr = el.getAttribute('data-v') === '1'; C.save(); V.redraw(); };
  A['get-ics'] = function () { V.download('bhalleffort-recordatorio.ics', icsText(), 'text/calendar'); V.toast('Recordatorio descargado: ábrelo para agregarlo al calendario', 3500); };
  A.install = function () {
    var bh = window.__bh, ev = bh && bh.install;
    if (!ev) return;
    ev.prompt();
    if (ev.userChoice && ev.userChoice.then) ev.userChoice.then(function () { bh.install = null; if (V.route() === 'progress') V.redraw(); });
  };
  A.reload = function () { window.location.reload(); };
  A.export = function () {
    V.download('bhalleffort-respaldo-' + C.today() + '.json', C.exportData());
    S.settings.lastBackup = C.today(); C.save();
    V.toast('Respaldo descargado');
    if (V.route() === 'progress' || V.route() === 'home') V.redraw();
  };
  A.import = function () { var f = document.getElementById('import-file'); if (f) f.click(); };
  A.reset = function () {
    if (!window.confirm('¿Borrar TODO tu progreso (lecciones, tarjetas, exámenes y racha)? Esto no se puede deshacer.')) return;
    C.reset(); V.toast('Progreso borrado'); V.go('home');
  };

  /* Cambios en <select> y <input type=time>, y contador de palabras de la escritura. */
  document.addEventListener('change', function (ev) {
    try {
      var t = ev.target;
      if (t && t.id === 'voice-sel') { Speech().setVoice(t.value); Speech().say('Hello! This is how I sound.'); }
      else if (t && t.id === 'remind-time' && /^([01]\d|2[0-3]):[0-5]\d$/.test(t.value)) { S.settings.remind = t.value; C.save(); }
    } catch (e) { V.fail(e); }
  });
})();
