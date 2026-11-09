/* Bhalleffort — ejercicios (opción múltiple, completar, ordenar, escuchar y elegir) y tarjetas de repaso. */
(function () {
  'use strict';
  var EL = window.EL, C = EL.c, S = C.S, V = EL.v, esc = C.esc, ctx = V.ctx, I = V.ICON, A = V.A;
  function Speech() { return C.speech; }

  /* ---------- reproductor de diálogo ---------- */
  /* Dibuja el reproductor de un diálogo. Si no hay voz en inglés, muestra el texto para leerlo. */
  V.playerHtml = function (lines, label) {
    ctx.curAud = lines;
    if (!Speech().ok) {
      var t = lines.map(function (l) { return '<b>' + esc(l[0]) + ':</b> ' + esc(l[1]); }).join('<br>');
      return '<div class="card"><p class="note">Este dispositivo no tiene voz en inglés, así que esta parte se hace leyendo.</p><p lang="en">' + t + '</p></div>';
    }
    return '<div class="card player"><p class="muted">' + esc(label || 'Escucha la conversación. Puedes repetirla las veces que quieras.') + '</p>' +
      '<div class="say-row"><button class="btn primary" data-act="dlg-play">' + I.play + ' Escuchar</button>' +
      '<button class="btn" data-act="dlg-play" data-slow="1">Más lento</button>' +
      '<button class="btn ghost" data-act="dlg-stop">' + I.stop + ' Detener</button></div></div>';
  };
  V.transcriptHtml = function (lines) {
    return lines.map(function (l) { return '<b>' + esc(l[0]) + ':</b> ' + esc(l[1]); }).join('<br>');
  };
  A['dlg-play'] = function (el) {
    if (!ctx.curAud) return;
    var slow = el && el.getAttribute && el.getAttribute('data-slow') === '1';
    if (!Speech().dialogue(ctx.curAud, slow)) V.toast('Este dispositivo no tiene voz en inglés');
  };
  A['dlg-stop'] = function () { Speech().stop(); };
  A.say = function (el) { if (!Speech().say(el.getAttribute('data-t'), el.getAttribute('data-slow'))) V.toast('Este dispositivo no tiene voz en inglés'); };
  A['hear-play'] = function (el) {
    var R = ctx.run; if (!R || !R.cur) return;
    Speech().say(R.queue[R.i].e.say, el.getAttribute('data-slow') === '1');
  };

  /* ---------- ejercicios ---------- */
  /* list: ejercicios. opts: { top (HTML), noRetry, onDone(first,total,R), result(R) -> HTML } */
  V.runExercises = function (list, opts) {
    ctx.run = { queue: list.map(function (e, k) { return { e: e, k: k, retry: false }; }), i: 0, first: 0, total: list.length, opts: opts || {}, cur: null, log: [] };
    newCur();
  };
  function newCur() {
    var R = ctx.run;
    if (R.i >= R.queue.length) { R.cur = null; return; }
    var e = R.queue[R.i].e, cur = { done: false, ok: false, pick: -1, value: '', built: [], played: false };
    if (e.t === 'order') {
      var toks = e.a[0].split(' ').map(function (t, i) { return { id: i, t: t }; });
      var sh = C.shuffle(toks), tries = 0;
      while (tries++ < 6 && sh.map(function (x) { return x.id; }).join() === toks.map(function (x) { return x.id; }).join()) sh = C.shuffle(toks);
      cur.bank = sh;
    }
    R.cur = cur;
  }
  /* Texto de la respuesta correcta de un ejercicio. */
  V.answerText = function (e) { return e.t === 'mc' || e.t === 'hear' ? e.o[e.a] : e.a[0]; };
  V.questionText = function (e) {
    if (e.t === 'order') return e.es;
    if (e.t === 'hear') return 'Escucha y elige: ' + e.o.join(' / ');
    return e.q.replace('___', '…');
  };

  V.drawEx = function () {
    var R = ctx.run, s = '';
    if (R.i >= R.queue.length) {
      if (R.opts.result) return V.out(R.opts.result(R));
      var pct = R.first / R.total;
      s = '<section class="card result"><p class="muted">Resultado</p><p class="big">' + R.first + ' de ' + R.total + '</p>' +
        '<p>' + (pct === 1 ? 'Perfecto: todo a la primera.' : pct >= 0.6 ? 'Buen trabajo. Lo que fallaste ya lo repetiste.' : 'Vas bien: repetirlo es parte de aprender. Repasa la explicación si quieres.') + '</p></section>' +
        '<button class="btn primary block" data-act="ex-finish">Seguir</button>';
      return V.out(s);
    }
    var item = R.queue[R.i], e = item.e, cur = R.cur;
    s += V.bar(R.i, R.queue.length, 'Progreso de los ejercicios') + '<p class="count">' + (R.i + 1) + ' de ' + R.queue.length + (item.retry ? ' · otra vez' : '') + '</p>';
    if (R.opts.top) s += R.opts.top;
    if (e.pass) s += '<article class="card read" lang="en">' + V.breakSpeakers(e.pass) + '</article>';
    if (e.aud) s += V.playerHtml(e.aud);
    s += '<section class="card ex">';
    if (e.t === 'mc') {
      s += '<p class="q">' + V.qHtml(e.q) + '</p><div class="opts">';
      e.o.forEach(function (t, i) { s += optHtml(t, i, e, cur); });
      s += '</div>';
    } else if (e.t === 'hear') {
      s += '<p class="q">Escucha y elige lo que oyes.</p>';
      if (Speech().ok) s += '<div class="say-row"><button class="btn primary" data-act="hear-play">' + I.play + ' Escuchar</button><button class="btn" data-act="hear-play" data-slow="1">Más lento</button></div>';
      else s += '<p class="note">Este dispositivo no tiene voz en inglés. La palabra era una de estas opciones: elige la que creas.</p>';
      s += '<div class="opts">';
      e.o.forEach(function (t, i) { s += optHtml(t, i, e, cur, true); });
      s += '</div>';
    } else if (e.t === 'fill') {
      s += '<p class="q">' + V.qHtml(e.q) + '</p>' +
        '<input id="fill-in" class="field" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" data-enter="ex-check" aria-label="Tu respuesta" value="' + esc(cur.value) + '"' + (cur.done ? ' disabled' : '') + '>' +
        (cur.done ? '' : '<button class="btn primary block" data-act="ex-check">Comprobar</button>');
    } else {
      s += '<p class="q">Ordena la frase en inglés:</p><p class="es">«' + esc(e.es) + '»</p><div class="slot" aria-label="Tu frase" lang="en">';
      if (!cur.built.length) s += '<span class="ph">Toca las palabras en orden</span>';
      cur.built.forEach(function (id) {
        var tk = cur.bank.filter(function (b) { return b.id === id; })[0];
        s += '<button class="chip-w" data-act="ex-chip" data-id="' + id + '"' + (cur.done ? ' disabled' : '') + '>' + esc(tk.t) + '</button>';
      });
      s += '</div><div class="bank" lang="en">';
      cur.bank.forEach(function (b) {
        if (cur.built.indexOf(b.id) < 0) s += '<button class="chip-w" data-act="ex-chip" data-id="' + b.id + '"' + (cur.done ? ' disabled' : '') + '>' + esc(b.t) + '</button>';
      });
      s += '</div>';
      if (!cur.done) s += '<div class="say-row"><button class="btn ghost" data-act="ex-clear">Borrar</button><button class="btn primary" data-act="ex-check"' + (cur.built.length ? '' : ' disabled') + '>Comprobar</button></div>';
    }
    s += '</section>';
    if (cur.done) {
      var full = C.fullSentence(e), ans = V.answerText(e);
      s += '<div class="fb ' + (cur.ok ? 'ok' : 'bad') + '" role="status"><p class="fb-h">' + (cur.ok ? 'Correcto' : 'Todavía no') + '</p>' +
        (cur.ok && !full ? '' : '<p class="fb-a">' + (cur.ok ? '' : 'Respuesta: ') + '<span lang="en">' + esc(full || ans) + '</span> ' + (full && Speech().ok ? V.spk(full, 'Escuchar la frase completa') : '') + '</p>') +
        (e.why ? '<p class="fb-w">' + e.why + '</p>' : '') + '</div>' +
        '<button class="btn primary block" data-act="ex-next" id="focus-me">Continuar</button>';
    }
    V.out(s);
    var fm = document.getElementById('focus-me'); if (fm) fm.focus();
    var fi = document.getElementById('fill-in'); if (fi && !cur.done) fi.focus();
    if (e.t === 'hear' && !cur.played && !cur.done && Speech().ok) { cur.played = true; Speech().say(e.say); }
  };
  function optHtml(t, i, e, cur, isEn) {
    var cls = 'opt', mark = '';
    if (cur.done) {
      if (i === e.a) { cls += ' right'; mark = '<span class="mk">' + I.check + '<span class="sr"> correcta</span></span>'; }
      else if (i === cur.pick) { cls += ' wrong'; mark = '<span class="mk">' + I.cross + '<span class="sr"> tu respuesta</span></span>'; }
    }
    return '<button class="' + cls + '" data-act="ex-mc" data-i="' + i + '"' + (cur.done ? ' disabled' : '') + '><span' + (isEn ? ' lang="en"' : '') + '>' + esc(t) + '</span>' + mark + '</button>';
  }
  function exResolve(ok, extra) {
    var R = ctx.run, item = R.queue[R.i];
    R.cur.done = true; R.cur.ok = ok;
    if (extra) Object.assign(R.cur, extra);
    if (!item.retry) {
      R.log.push({ e: item.e, ok: ok });
      if (ok) R.first++;
      if (item.e.src) C.recordResult(item.e.src, ok);
    } else if (ok && item.e.src) C.recordResult(item.e.src, true);
    if (!ok && !item.retry && !R.opts.noRetry) R.queue.push({ e: item.e, k: item.k, retry: true });
    C.save();
    V.drawEx();
  }
  A['ex-mc'] = function (el) {
    var R = ctx.run; if (!R || R.cur.done) return;
    var i = parseInt(el.getAttribute('data-i'), 10), e = R.queue[R.i].e;
    exResolve(i === e.a, { pick: i });
  };
  A['ex-check'] = function () {
    var R = ctx.run; if (!R || R.cur.done) return;
    var e = R.queue[R.i].e;
    if (e.t === 'fill') {
      var inp = document.getElementById('fill-in'), v = inp ? inp.value : '';
      if (!v.trim()) { V.toast('Escribe tu respuesta primero'); return; }
      exResolve(C.checkFill(e, v), { value: v });
    } else if (e.t === 'order') {
      if (!R.cur.built.length) return;
      var words = R.cur.built.map(function (id) { return R.cur.bank.filter(function (b) { return b.id === id; })[0].t; });
      exResolve(C.checkOrder(e, words));
    }
  };
  A['ex-chip'] = function (el) {
    var cur = ctx.run.cur; if (cur.done) return;
    var id = parseInt(el.getAttribute('data-id'), 10), k = cur.built.indexOf(id);
    if (k >= 0) cur.built.splice(k, 1); else cur.built.push(id);
    V.drawEx();
  };
  A['ex-clear'] = function () { ctx.run.cur.built = []; V.drawEx(); };
  A['ex-next'] = function () { ctx.run.i++; newCur(); V.drawEx(); window.scrollTo(0, 0); };
  A['ex-finish'] = function () { var R = ctx.run; R.opts.onDone(R.first, R.total, R); };

  /* Resumen de lo fallado, para mostrar al terminar una prueba. */
  V.missesHtml = function (R) {
    var miss = R.log.filter(function (x) { return !x.ok; });
    if (!miss.length) return '';
    var s = '<section class="card"><h3>Lo que fallaste</h3><ul class="miss">';
    miss.forEach(function (x) {
      s += '<li><span class="muted">' + esc(V.questionText(x.e)) + '</span><br><b lang="en">' + esc(V.answerText(x.e)) + '</b>' +
        (x.e.why ? '<br><span class="fb-w">' + x.e.why + '</span>' : '') + '</li>';
    });
    return s + '</ul></section>';
  };

  /* ---------- tarjetas de repaso ---------- */
  V.startCards = function (ids, opts) {
    ctx.cr = { q: ids.slice(), total: ids.length, shown: false, opts: opts, rated: 0 };
    pickDir();
  };
  function pickDir() {
    var cr = ctx.cr; if (!cr.q.length) return;
    var c = S.cards[cr.q[0]];
    cr.dir = (c.n >= 2 && c.n % 2 === 0) ? 'rev' : 'fwd';
    cr.shown = false;
  }
  V.drawCard = function () {
    var cr = ctx.cr, s = '';
    if (!cr.q.length) {
      if (cr.opts.autoAdvance) return cr.opts.onDone();
      s = '<section class="card result"><p class="muted">Repaso terminado</p><p class="big">' + cr.rated + '</p><p>' + (cr.rated === 1 ? 'tarjeta repasada' : 'tarjetas repasadas') + '. ' + (cr.opts.extra ? '' : 'Las verás de nuevo cuando toque.') + '</p></section>' +
        '<button class="btn primary block" data-act="cards-back">Listo</button>';
      return V.out(s);
    }
    var c = S.cards[cr.q[0]], rev = cr.dir === 'rev', sp = Speech().ok;
    s += (cr.opts.intro && cr.rated === 0 && !cr.shown ? '<p class="muted">' + esc(cr.opts.intro) + '</p>' : '');
    s += V.bar(cr.total - cr.q.length, cr.total, 'Progreso del repaso') + '<p class="count">' + cr.q.length + (cr.q.length === 1 ? ' tarjeta restante' : ' tarjetas restantes') + '</p>';
    s += '<section class="card flash" aria-live="polite">';
    if (!rev) {
      s += '<p class="flash-front" lang="en">' + esc(c.en) + '</p>' + (cr.shown ? '' : '<p class="muted">¿Qué significa? Piénsalo y luego muestra la respuesta.</p>') + (sp ? '<p>' + V.spk(c.en, 'Escuchar la palabra') + '</p>' : '');
      if (cr.shown) s += '<hr><p class="flash-back">' + esc(c.es) + '</p><p class="flash-ex" lang="en">' + esc(c.ex) + (sp ? ' ' + V.spk(c.ex, 'Escuchar el ejemplo') : '') + '</p>';
    } else {
      s += '<p class="flash-front">' + esc(c.es) + '</p>' + (cr.shown ? '' : '<p class="muted">¿Cómo se dice en inglés? Piénsalo y luego muestra la respuesta.</p>');
      if (cr.shown) s += '<hr><p class="flash-back" lang="en">' + esc(c.en) + (sp ? ' ' + V.spk(c.en, 'Escuchar la palabra') : '') + '</p><p class="flash-ex" lang="en">' + esc(c.ex) + (sp ? ' ' + V.spk(c.ex, 'Escuchar el ejemplo') : '') + '</p>';
    }
    s += '</section>';
    if (!cr.shown) s += '<button class="btn primary block" data-act="card-show" id="focus-me">Mostrar respuesta</button>';
    else {
      s += '<div class="rate" role="group" aria-label="¿Qué tan bien la recordaste?">';
      [['Otra vez', 0], ['Difícil', 1], ['Bien', 2], ['Fácil', 3]].forEach(function (x) {
        var days = C.nextState(c, x[1]).iv;
        s += '<button class="btn rate-' + x[1] + '" data-act="card-rate" data-q="' + x[1] + '"><b>' + x[0] + '</b><span>' + (cr.opts.extra ? '' : C.ivLabel(days)) + '</span></button>';
      });
      s += '</div><p class="muted kbd">Atajos: espacio para mostrar, teclas 1 a 4 para calificar.</p>';
    }
    V.out(s);
    var fm = document.getElementById('focus-me'); if (fm) fm.focus();
  };
  A['card-show'] = function () { ctx.cr.shown = true; V.drawCard(); };
  A['card-rate'] = function (el) {
    var cr = ctx.cr, q = parseInt(el.getAttribute('data-q'), 10), id = cr.q.shift();
    if (!cr.opts.extra) C.rate(id, q);
    if (q === 0) cr.q.push(id); else cr.rated++;
    if (cr.q.length) pickDir();
    V.drawCard();
    window.scrollTo(0, 0);
  };
  A['cards-back'] = function () { if (ctx.cr && ctx.cr.opts.back) ctx.cr.opts.back(); else V.go('cards'); };

  /* ---------- teclado ---------- */
  V.onKey = function (ev) {
    var R = ctx.run;
    if (ctx.cr && ctx.cr.q.length && (V.route() === 'cardsflow' || V.route() === 'session')) {
      if (!ctx.cr.shown && (ev.key === ' ' || ev.key === 'Enter')) { ev.preventDefault(); A['card-show'](); }
      else if (ctx.cr.shown && /^[1-4]$/.test(ev.key)) { A['card-rate']({ getAttribute: function () { return String(parseInt(ev.key, 10) - 1); } }); }
      return;
    }
    if (R && R.cur && !R.cur.done && R.i < R.queue.length && /^[1-4]$/.test(ev.key)) {
      var e = R.queue[R.i].e, k = parseInt(ev.key, 10) - 1;
      if ((e.t === 'mc' || e.t === 'hear') && k < e.o.length) A['ex-mc']({ getAttribute: function () { return String(k); } });
    }
  };
})();
