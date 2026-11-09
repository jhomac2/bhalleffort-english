/* Bhalleffort — sesión diaria: repaso, lección, práctica, escucha, habla, lectura, escritura y prueba de dominio. */
(function () {
  'use strict';
  var EL = window.EL, C = EL.c, S = C.S, V = EL.v, esc = C.esc, ctx = V.ctx, I = V.ICON, A = V.A;
  function Speech() { return C.speech; }

  /* ---------- cabecera de la sesión ---------- */
  function sessionHead() {
    var ss = S.session;
    /* Al aprobar la prueba la sesión se cierra antes de dibujar el resultado: se reutiliza la última cabecera. */
    if (!ss) return ctx.lastHead || '';
    var L = C.lesson(ss.id), cur = ss.steps[ss.step], info = C.STEPS[cur];
    var seg = '';
    ss.steps.forEach(function (k, i) {
      seg += '<li class="' + (i < ss.step ? 'done' : i === ss.step ? 'now' : '') + '"><span class="sr">' + esc(C.STEPS[k].name) + (i < ss.step ? ' (hecho)' : i === ss.step ? ' (ahora)' : '') + '</span></li>';
    });
    return (ctx.lastHead = '<header class="flow-head"><button class="link" data-act="exit-flow">' + I.back + ' Salir</button>' +
      '<span>' + V.trackChip(L.track) + ' Lección ' + C.position(L.id) + '</span></header>' +
      '<ol class="segs" aria-label="Pasos de la sesión">' + seg + '</ol>' +
      '<p class="step-h"><b>Paso ' + (ss.step + 1) + ' de ' + ss.steps.length + ': ' + esc(info.name) + '</b><span class="muted">unos ' + info.min + ' min</span></p>');
  }
  var STEP = {};
  V.views.session = function () {
    var ss = S.session;
    if (!ss) return ctx.passedId ? V.go('done', { id: ctx.passedId }) : V.go('home');
    var L = C.lesson(ss.id);
    if (!L) { S.session = null; C.save(); return V.go('home'); }
    ctx.head = sessionHead;
    STEP[ss.steps[ss.step]](L);
  };
  function advance() {
    var ss = S.session;
    Speech().stop();
    C.markStep();
    ss.step++;
    if (ss.step >= ss.steps.length) ss.step = ss.steps.length - 1;
    C.save();
    V.go('session');
  }
  /* Empieza (o retoma) la sesión de una lección. */
  V.startLesson = function (lid) {
    if (S.session && S.session.id !== lid) {
      if (!window.confirm('Tienes una sesión en curso. ¿Cambiar a esta lección? Perderás el avance de esa sesión.')) return;
    }
    if (!S.session || S.session.id !== lid) C.startSession(lid);
    V.go('session');
  };

  /* --- paso: repaso --- */
  STEP.review = function () {
    if (!ctx.cr) {
      var q = C.dueCards().slice(0, 20).map(function (c) { return c.id; });
      if (!q.length) return advance();
      V.startCards(q, { onDone: advance, autoAdvance: true, intro: 'Antes de la lección nueva, repasa lo que ya viste.' });
    }
    V.drawCard();
  };

  /* --- paso: lección --- */
  STEP.learn = function (L) {
    var s = '<h2 class="lesson-title">' + esc(L.title) + '</h2><p class="muted" lang="en">' + esc(L.en) + '</p>' +
      '<section class="card explain">' + L.explain + '</section><h3>Palabras nuevas</h3>' +
      '<p class="muted">Toca la palabra para oírla y la frase para oír el ejemplo.</p><ul class="vocab">';
    L.vocab.forEach(function (v) {
      s += '<li><div class="vmain"><button class="vword" data-act="say" data-t="' + esc(v[0]) + '"><span lang="en">' + esc(v[0]) + '</span>' + I.speaker + '</button><span class="ves">' + esc(v[1]) + '</span></div>' +
        '<button class="vex" data-act="say" data-t="' + esc(v[2]) + '" lang="en">' + esc(v[2]) + '</button></li>';
    });
    s += '</ul><button class="btn primary block" data-act="learn-done">Entendido, a practicar</button>';
    V.out(s);
  };
  A['learn-done'] = function () { S.session.newWords = C.addLessonCards(C.lesson(S.session.id)); advance(); };

  /* --- paso: práctica --- */
  STEP.practice = function (L) {
    if (!ctx.run) V.runExercises(L.ex.map(function (e, i) { return Object.assign({}, e, { src: { lid: L.id, kind: 'ex', i: i, d: 0 } }); }), {
      onDone: function (first, total) { S.session.exScore = [first, total]; advance(); }
    });
    V.drawEx();
  };

  /* --- paso: escucha (diálogo + dictado) --- */
  STEP.listen = function (L) {
    var ph = ctx.ph || (L.listen ? 'play' : 'dict');
    if (ph === 'play') {
      return V.out('<h2>Escucha</h2><p>Primero solo con los oídos: <b>no leas el texto todavía</b>. Escucha la conversación dos veces y luego responde.</p>' +
        V.playerHtml(L.listen.d) + '<button class="btn primary block" data-act="listen-q">Responder las preguntas</button>');
    }
    if (ph === 'q') {
      if (!ctx.run) V.runExercises(L.listen.q.map(function (e) { return Object.assign({}, e); }), {
        top: V.playerHtml(L.listen.d, 'Puedes volver a escuchar mientras respondes.'), noRetry: true,
        result: function (R) {
          return '<section class="card result"><p class="muted">Comprensión</p><p class="big">' + R.first + ' de ' + R.total + '</p>' +
            '<p>' + (R.first === R.total ? 'Entendiste todo.' : 'Lee ahora el texto y escúchalo otra vez: así afinas el oído.') + '</p></section>' +
            '<section class="card"><h3>Lo que decía</h3><p lang="en">' + V.transcriptHtml(L.listen.d) + '</p></section>' + V.playerHtml(L.listen.d, 'Escúchalo siguiendo el texto.') +
            V.missesHtml(R) + '<button class="btn primary block" data-act="listen-dict">Seguir con el dictado</button>';
        }
      });
      return V.drawEx();
    }
    // dictado
    if (!ctx.dict) ctx.dict = { i: 0, sents: C.dictationSentences(L), res: null };
    var D = ctx.dict, sent = D.sents[D.i], s;
    s = '<h2>Dictado: frase ' + (D.i + 1) + ' de ' + D.sents.length + '</h2>';
    if (Speech().ok) {
      s += '<p>Escucha y escribe lo que oigas. Puedes repetirlo las veces que quieras.</p>' +
        '<div class="say-row"><button class="btn" data-act="say-dict">' + I.speaker + ' Escuchar</button><button class="btn ghost" data-act="say-dict" data-slow="1">Más lento</button></div>';
    } else {
      s += '<p class="note">Este dispositivo no tiene voz en inglés, así que haremos la versión de lectura: mira la frase, tápala y escríbela de memoria.</p><p class="big-en" lang="en">' + esc(sent) + '</p>';
    }
    if (!D.res) {
      s += '<input id="dict-in" class="field" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" data-enter="dict-check" placeholder="Escribe aquí en inglés" aria-label="Lo que escuchaste">' +
        '<button class="btn primary block" data-act="dict-check">Comprobar</button>';
    } else {
      var r = D.res, w = '';
      r.words.forEach(function (t, i) { w += '<span class="' + (r.ok[i] ? 'w-ok' : 'w-miss') + '">' + esc(t) + (r.ok[i] ? '' : '<span class="sr"> (fallaste esta palabra)</span>') + '</span> '; });
      s += '<div class="fb ' + (r.score >= 0.8 ? 'ok' : 'bad') + '" role="status"><p class="fb-h">' + (r.score >= 0.8 ? 'Muy bien' : 'Casi: compara con la frase correcta') + '</p>' +
        '<p class="fb-a" lang="en">' + w + '</p><p class="muted">Tú escribiste: <span lang="en">' + esc(D.typed || '(nada)') + '</span></p></div>' +
        '<button class="btn primary block" data-act="dict-next" id="focus-me">' + (D.i + 1 < D.sents.length ? 'Siguiente frase' : 'Seguir a pronunciación') + '</button>';
    }
    V.out(s);
    var inp = document.getElementById('dict-in'); if (inp) inp.focus();
    var fm = document.getElementById('focus-me'); if (fm) fm.focus();
  };
  A['listen-q'] = function () { ctx.ph = 'q'; V.redraw(); window.scrollTo(0, 0); };
  A['listen-dict'] = function () { ctx.ph = 'dict'; delete ctx.run; Speech().stop(); V.redraw(); window.scrollTo(0, 0); };
  A['say-dict'] = function (el) { Speech().say(ctx.dict.sents[ctx.dict.i], el.getAttribute('data-slow')); };
  A['dict-check'] = function () {
    var D = ctx.dict, inp = document.getElementById('dict-in'), typed = inp ? inp.value : '';
    if (!typed.trim()) { V.toast('Escribe lo que escuchaste'); return; }
    D.typed = typed; D.res = C.diffDictation(D.sents[D.i], typed); V.redraw();
  };
  A['dict-next'] = function () {
    var D = ctx.dict; D.res = null; D.typed = '';
    if (D.i + 1 < D.sents.length) { D.i++; V.redraw(); window.scrollTo(0, 0); } else advance();
  };

  /* --- paso: pronunciación y habla (grabarte y comparar) --- */
  function rateOf(r) { return r === 'ok' ? 'Sonó igual' : r === 'close' ? 'Casi igual' : r === 'again' ? 'Necesito practicar' : ''; }
  STEP.speak = function (L) {
    if (!ctx.sp) {
      var ph = C.speakPhrases(L);
      ctx.sp = { phrases: ph, items: ph.map(function () { return { url: null, rate: null, asr: null }; }), rec: -1, noMic: !C.rec.ok, err: '' };
    }
    var P = ctx.sp, s = '<h2>Di las frases en voz alta</h2>';
    s += '<p>Escucha el modelo, grábate y compárate. Imita el <b>ritmo</b> y la <b>entonación</b>, no solo las palabras.</p>';
    if (!C.rec.ok) s += '<p class="note">Este navegador no puede grabar tu voz. Di cada frase en voz alta dos veces y califícate con honestidad.</p>';
    else s += '<p class="muted">Tu grabación se queda en este dispositivo y se borra al salir de esta pantalla.</p>';
    if (P.err) s += '<p class="note warn" role="alert">' + esc(P.err) + '</p>';
    s += '<ul class="spk-list">';
    P.phrases.forEach(function (t, i) {
      var it = P.items[i], recording = P.rec === i;
      s += '<li class="spk-item"><p class="phrase" lang="en">' + esc(t) + '</p><div class="say-row">';
      if (Speech().ok) s += '<button class="btn" data-act="sp-model" data-i="' + i + '">' + I.speaker + ' Modelo</button><button class="btn ghost" data-act="sp-model" data-i="' + i + '" data-slow="1">Lento</button>';
      if (C.rec.ok && !P.noMic) {
        s += recording ? '<button class="btn danger" data-act="sp-stop" data-i="' + i + '">' + I.stop + ' Parar</button>'
          : '<button class="btn" data-act="sp-rec" data-i="' + i + '"' + (P.rec >= 0 ? ' disabled' : '') + '>' + I.mic + ' ' + (it.url ? 'Grabar otra vez' : 'Grabar') + '</button>';
        if (it.url) s += '<button class="btn ghost" data-act="sp-mine" data-i="' + i + '">' + I.play + ' Mi voz</button>';
      }
      if (C.asr.available() && !recording) s += '<button class="btn ghost" data-act="sp-asr" data-i="' + i + '">Comprobar con reconocimiento</button>';
      s += '</div>';
      if (recording) s += '<p class="rec-now" role="status"><span class="dot"></span> Grabando… di la frase y toca «Parar».</p>';
      if (it.asr) {
        var w = '';
        it.asr.words.forEach(function (x, k) { w += '<span class="' + (it.asr.ok[k] ? 'w-ok' : 'w-miss') + '">' + esc(x) + '</span> '; });
        s += '<p class="asr" lang="en">' + w + '</p><p class="muted">El navegador entendió: «<span lang="en">' + esc(it.asr.text) + '</span>» (' + Math.round(it.asr.score * 100) + ' %)</p>';
      }
      if (it.url || P.noMic) {
        s += '<div class="filters" role="group" aria-label="¿Cómo te sonó?">';
        ['ok', 'close', 'again'].forEach(function (r) { s += '<button class="pill" data-act="sp-rate" data-i="' + i + '" data-r="' + r + '" aria-pressed="' + (it.rate === r) + '">' + rateOf(r) + '</button>'; });
        s += '</div>';
      }
      s += '</li>';
    });
    s += '</ul>';
    var ready = P.items.every(function (it) { return it.rate && (it.url || P.noMic); });
    s += '<p class="tip">Compara tu voz con el modelo: ¿tus finales de palabra se oyen? ¿Subes y bajas la voz igual? Si no, grábate otra vez.</p>' +
      '<button class="btn primary block" data-act="sp-done"' + (ready ? '' : ' aria-disabled="true"') + '>Listo, seguir</button>' +
      (ready ? '' : '<p class="muted">Para seguir: ' + (P.noMic ? 'califica cada frase.' : 'graba y califica cada frase.') + '</p>');
    if (C.rec.ok && !P.noMic) s += '<p><button class="link" data-act="sp-nomic">No puedo usar el micrófono</button></p>';
    V.out(s);
  };
  A['sp-model'] = function (el) { Speech().say(ctx.sp.phrases[+el.getAttribute('data-i')], el.getAttribute('data-slow') === '1'); };
  A['sp-rec'] = function (el) {
    var i = +el.getAttribute('data-i'), P = ctx.sp;
    Speech().stop(); C.rec.stopPlay();
    C.rec.start().then(function () {
      P.rec = i; P.err = '';
      C.rec.onAutoStop(function () { A['sp-stop']({ getAttribute: function () { return String(i); } }); });
      if (V.route() === 'session') V.redraw();
    }, function (e) { P.err = C.rec.errorText(e); P.noMic = true; if (V.route() === 'session') V.redraw(); });
  };
  A['sp-stop'] = function (el) {
    var i = +el.getAttribute('data-i'), P = ctx.sp;
    if (!P) return;
    C.rec.stop().then(function (blob) {
      P.rec = -1;
      if (blob) { P.items[i].url = C.rec.makeUrl(blob); P.items[i].rate = null; }
      else P.err = 'No se grabó nada. Intenta de nuevo.';
      if (V.route() === 'session' && ctx.sp === P) V.redraw();
    });
  };
  A['sp-mine'] = function (el) { C.rec.play(ctx.sp.items[+el.getAttribute('data-i')].url); };
  A['sp-rate'] = function (el) { ctx.sp.items[+el.getAttribute('data-i')].rate = el.getAttribute('data-r'); V.redraw(); };
  A['sp-nomic'] = function () { ctx.sp.noMic = true; V.redraw(); };
  A['sp-asr'] = function (el) {
    var i = +el.getAttribute('data-i'), P = ctx.sp, target = P.phrases[i];
    Speech().stop();
    V.toast('Habla ahora…', 3000);
    var ok = C.asr.listen(function (alts) {
      var best = null;
      alts.forEach(function (t) { var d = C.diffDictation(target, t); if (!best || d.score > best.score) best = { score: d.score, words: d.words, ok: d.ok, text: t }; });
      if (best) {
        P.items[i].asr = best;
        P.items[i].rate = best.score >= 0.9 ? 'ok' : best.score >= 0.7 ? 'close' : 'again';
        P.items[i].url = P.items[i].url || null;
      }
      if (V.route() === 'session' && ctx.sp === P) V.redraw();
    }, function (err) {
      V.toast(err === 'no-speech' ? 'No te escuché. Intenta de nuevo.' : 'No se pudo usar el reconocimiento de voz.', 3000);
    });
    if (!ok) V.toast('Este navegador no permite el reconocimiento de voz');
  };
  A['sp-done'] = function () {
    var P = ctx.sp;
    var ready = P.items.every(function (it) { return it.rate && (it.url || P.noMic || (it.asr && !C.rec.ok)); });
    if (!ready) { V.toast(P.noMic ? 'Califica cada frase para seguir' : 'Graba y califica cada frase para seguir'); return; }
    advance();
  };

  /* --- paso: lectura --- */
  STEP.read = function (L) {
    var R = L.read, s;
    if (ctx.phase === 'q') {
      if (!ctx.run) V.runExercises(R.q.map(function (e) { return Object.assign({}, e); }), {
        top: '<details class="reread"><summary>Releer el texto</summary><p lang="en">' + V.breakSpeakers(R.t) + '</p></details>',
        onDone: function () { advance(); }
      });
      return V.drawEx();
    }
    s = '<h2>Lectura</h2><p class="muted">Léela una vez sin traducir. Después comprueba con la traducción.</p>' +
      '<article class="card read" lang="en">' + V.breakSpeakers(R.t) + '</article>';
    if (Speech().ok) s += '<div class="say-row"><button class="btn" data-act="say-read">' + I.speaker + ' Escuchar el texto</button><button class="btn ghost" data-act="say-read" data-slow="1">Más lento</button></div>';
    s += '<details class="card tr"><summary>Ver traducción</summary><p>' + V.breakSpeakers(R.tr) + '</p></details>' +
      '<button class="btn primary block" data-act="read-q">Responder ' + R.q.length + ' preguntas</button>';
    V.out(s);
  };
  A['say-read'] = function (el) {
    var L = C.lesson(S.session.id);
    Speech().say(L.read.t.replace(/ ((?:Step \d+)|(?:[A-Z][A-Za-z]+)): /g, '. '), el.getAttribute('data-slow'));
  };
  A['read-q'] = function () { ctx.phase = 'q'; Speech().stop(); V.redraw(); window.scrollTo(0, 0); };

  /* --- paso: escritura --- */
  STEP.write = function (L) {
    var W = L.write, saved = ctx.text || '';
    var s = '<h2>Escritura</h2><p>' + esc(W.p) + '</p>' +
      '<label class="lbl" for="write-in">Tu texto en inglés</label>' +
      '<textarea id="write-in" class="field area" rows="5" autocapitalize="sentences" spellcheck="false" placeholder="Escribe aquí…">' + esc(saved) + '</textarea>' +
      '<div class="say-row"><button class="btn" data-act="write-model">' + (ctx.model ? 'Ocultar ejemplo' : 'Ver un ejemplo') + '</button>' +
      '<button class="btn" data-act="write-copy">Copiar para que Claude me corrija</button></div>';
    if (ctx.model) {
      s += '<div class="card model"><p class="muted">Ejemplo (el tuyo puede ser distinto):</p><p lang="en">' + esc(W.m) + '</p>' +
        (Speech().ok ? '<p>' + V.spk(W.m, 'Escuchar el ejemplo') + '</p>' : '') + '</div>';
    }
    s += '<p class="tip"><b>Ahora dilo en voz alta.</b> Lee tu texto 2 veces como si hablaras con alguien. Escribir es la mitad; hablar es la otra.</p>' +
      '<button class="btn primary block" data-act="write-done">Listo, seguir a la prueba</button>';
    V.out(s);
  };
  A['write-model'] = function () { ctx.text = (document.getElementById('write-in') || {}).value || ''; ctx.model = !ctx.model; V.redraw(); };
  A['write-copy'] = function () {
    var L = C.lesson(S.session.id), t = (document.getElementById('write-in') || {}).value || '';
    if (!t.trim()) { V.toast('Escribe tu texto primero'); return; }
    V.copyText('Corrige mi inglés (nivel ' + C.levelOf(L.id).id + ') y explícame mis errores en español, de forma breve y con ejemplos.\nEjercicio: ' + L.write.p + '\nMi texto:\n' + t);
  };
  A['write-done'] = function () {
    var t = ((document.getElementById('write-in') || {}).value || '').trim();
    if ((t ? t.split(/\s+/).length : 0) < 4) { V.toast('Escribe al menos 4 palabras (puedes mirar el ejemplo y cambiarlo)', 3200); return; }
    advance();
  };

  /* --- paso: prueba de dominio --- */
  STEP.quiz = function (L) {
    var ss = S.session;
    if (ctx.ph !== 'run') {
      var pre = ss.quizTry > 0 ? '<p class="note">Intento ' + (ss.quizTry + 1) + '. Las preguntas cambian cada vez.</p>' : '';
      return V.out('<h2>Prueba de dominio</h2>' + pre + '<section class="card"><p>12 preguntas de la lección: significado, escucha, frases y gramática.</p>' +
        '<ul class="plain"><li>Necesitas <b>' + C.PASS_TXT + '</b> (10 de 12) para pasar a la siguiente lección.</li><li>No hay segunda oportunidad dentro de la prueba; al final verás qué fallaste.</li><li>Si no apruebas, repasas y vuelves a intentarlo con preguntas nuevas.</li></ul></section>' +
        '<button class="btn primary block" data-act="quiz-start">Empezar la prueba</button>');
    }
    if (!ctx.run) V.runExercises(EL.q.lessonQuiz(L), { noRetry: true, result: quizResult(L) });
    V.drawEx();
  };
  A['quiz-start'] = function () { ctx.ph = 'run'; V.redraw(); window.scrollTo(0, 0); };
  function quizResult(L) {
    return function (R) {
      var ss = S.session, pct = Math.round(R.first * 100 / R.total), pass = pct >= C.QUIZ_PASS;
      if (!R.fin && ss) {
        R.fin = true;
        if (pass) {
          C.finishLesson(L.id, { ex: ss.exScore, words: ss.newWords, quiz: pct, tries: ss.quizTry + 1 });
          ctx.passedId = L.id;
        } else { ss.quizTry++; C.save(); }
      }
      var s = '<section class="card result"><p class="muted">Prueba de dominio</p><p class="big">' + pct + ' %</p><p>' + R.first + ' de ' + R.total + ' · ' +
        (pass ? '<b>Aprobada.</b> Dominaste esta lección.' : '<b>Todavía no.</b> Necesitas ' + C.PASS_TXT + ' para pasar.') + '</p></section>' + V.missesHtml(R);
      if (pass) return s + '<button class="btn primary block" data-act="quiz-pass">Continuar</button>';
      return s + '<div class="tip">No pasa nada: repasar es parte de aprender. Vuelve a la explicación y a los ejercicios, o intenta de nuevo con preguntas nuevas.</div>' +
        '<button class="btn primary block" data-act="quiz-review">Repasar la lección y volver a intentar</button>' +
        '<button class="btn block" data-act="quiz-retry">Intentar de nuevo ahora</button>' +
        '<button class="btn ghost block" data-act="go-home">Seguir mañana</button>';
    };
  }
  A['quiz-pass'] = function () { V.go('done', { id: ctx.passedId }); };
  A['quiz-retry'] = function () { V.go('session'); };
  A['quiz-review'] = function () { var ss = S.session; ss.step = Math.max(0, ss.steps.indexOf('learn')); C.save(); V.go('session'); };

  /* ---------- pantalla final de la lección ---------- */
  V.views.done = function () {
    var L = C.lesson(ctx.id), rec = S.done[ctx.id] || {}, task = C.nextTask(), mins = C.minutesToday(), goal = C.goalMinutes();
    var s = '<section class="card result"><p class="muted">Lección dominada</p><h1 class="big-h">Lección ' + C.position(L.id) + ' hecha</h1>' +
      '<p>' + esc(L.title) + '</p><ul class="plain"><li>Prueba de dominio: <b>' + (rec.quiz === null || rec.quiz === undefined ? '—' : rec.quiz + ' %') + '</b></li>' +
      '<li><b>' + C.streak() + '</b> ' + (C.streak() === 1 ? 'día seguido' : 'días seguidos') + '</li>' +
      '<li><b>' + (rec.words || 0) + '</b> palabras nuevas se repasarán desde mañana</li>' +
      '<li><b>' + mins + '</b> de ' + goal + ' min de tu meta de hoy</li></ul></section>';
    if (task && task.type === 'lesson') s += '<button class="btn primary block" data-act="start-next">Siguiente lección: ' + esc(C.lesson(task.id).title) + '</button>';
    else if (task && task.type === 'exam') s += '<section class="card"><h2>Terminaste el nivel ' + esc(task.level) + '</h2><p>Para abrir el siguiente nivel, aprueba el examen por secciones.</p></section><button class="btn primary block" data-act="go-exam">Ir al examen del nivel ' + esc(task.level) + '</button>';
    else s += '<p>Completaste toda la ruta. Repasa tus tarjetas y practica tus errores.</p>';
    if (mins < goal) s += '<button class="btn block" data-act="go-extra">Completar mi meta de hoy (' + (goal - mins) + ' min más)</button>';
    s += '<button class="btn ghost block" data-act="go-home">Volver al inicio</button>' + freeEnglishCard(L);
    V.html(s);
  };
  function freeEnglishCard(L) {
    var url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(L.q);
    return '<section class="card"><h3>Inglés real (opcional)</h3><p>Un poco de inglés auténtico acelera todo. Elige: un video corto con subtítulos <b>en inglés</b>, un podcast o una página de documentación técnica.</p>' +
      '<p>Tema de hoy: <a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">buscar «' + esc(L.q) + '» en YouTube</a> <span class="muted">(necesita internet)</span></p>' +
      '<p class="tip">No traduzcas todo. Anota 3 palabras nuevas y vuelve a oírlas una vez.</p></section>';
  }
  V.freeEnglishCard = freeEnglishCard;

  A['start-next'] = function () { var lid = C.nextLessonId(); if (lid) { C.startSession(lid); V.go('session'); } };
})();
