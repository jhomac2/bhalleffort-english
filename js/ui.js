/* Bhalleffort — base de la interfaz: navegación, ayudantes de HTML, acciones y teclado. */
(function () {
  'use strict';
  var EL = window.EL, C = EL.c, S = C.S, esc = C.esc;
  var V = EL.v = {
    views: {}, A: {},
    FLOWS: { session: 1, placement: 1, cardsflow: 1, run: 1, examw: 1, exams: 1, simrun: 1 },
    TAB: { home: 'home', done: 'home', exam: 'home', extra: 'home', sims: 'home', simres: 'home', lessons: 'lessons', cards: 'cards', progress: 'progress' },
    STUDY: { session: 1, placement: 1, cardsflow: 1, run: 1, examw: 1, exams: 1, simrun: 1 }
  };
  var app, toastEl, route = 'home';
  var ctx = V.ctx = {};

  /* ---------- iconos ---------- */
  function svg(path, size, extra) {
    return '<svg viewBox="0 0 24 24" width="' + (size || 20) + '" height="' + (size || 20) + '" aria-hidden="true">' + path + '</svg>';
  }
  V.ICON = {
    speaker: svg('<path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'),
    plane: '<svg viewBox="0 0 48 24" width="44" height="22" aria-hidden="true"><path d="M2 11 46 2 30 22 24 14Z" fill="currentColor"/><path d="M24 14 46 2" stroke="var(--pass-bg, #12203A)" stroke-width="1.6" fill="none"/></svg>',
    back: svg('<path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'),
    check: svg('<path d="M5 13l4 4 10-10" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>', 18),
    cross: svg('<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>', 18),
    mic: svg('<rect x="9" y="3" width="6" height="12" rx="3" fill="currentColor"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'),
    stop: svg('<rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/>'),
    play: svg('<path d="M8 5v14l11-7z" fill="currentColor"/>'),
    lock: svg('<rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2"/>', 18),
    flag: svg('<path d="M6 21V4M6 5h11l-2 4 2 4H6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>', 18)
  };

  /* ---------- ayudantes ---------- */
  V.html = function (s) { app.innerHTML = s; };
  V.out = function (body) { V.html((ctx.head ? ctx.head() : '') + body); };
  V.fmtMin = function (m) {
    if (m < 60) return m + ' min';
    var h = Math.floor(m / 60), r = m % 60;
    return h + ' h' + (r ? ' ' + r + ' min' : '');
  };
  V.qHtml = function (q) { return esc(q).replace('___', '<span class="blank" role="img" aria-label="espacio en blanco"></span>'); };
  V.breakSpeakers = function (t) {
    return esc(t).replace(/ ((?:Step \d+|Paso \d+)|(?:[A-Z][A-Za-zÁÉÍÓÚáéíóúñ]+)): /g, '<br><b>$1:</b> ').replace(/^((?:[A-Z][A-Za-z]+)): /, '<b>$1:</b> ');
  };
  V.spk = function (text, label, slow) {
    return '<button class="spk" data-act="say" data-t="' + esc(text) + '"' + (slow ? ' data-slow="1"' : '') +
      ' aria-label="' + esc(label || 'Escuchar en inglés') + '">' + V.ICON.speaker + '</button>';
  };
  /* Barra de avance. El ancho se pone después de dibujar (data-w) para no necesitar estilos en línea. */
  V.bar = function (done, total, label) {
    var pct = total ? Math.max(0, Math.min(100, Math.round(done * 100 / total))) : 0;
    return '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="' + done + '"' +
      (label ? ' aria-label="' + esc(label) + '"' : '') + '><i data-w="' + pct + '"></i></div>';
  };
  function applyBars() {
    var bars = app.querySelectorAll('.bar > i[data-w]');
    for (var i = 0; i < bars.length; i++) bars[i].style.width = bars[i].getAttribute('data-w') + '%';
  }
  V.toast = function (msg, ms) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(V.toast.t);
    V.toast.t = setTimeout(function () { toastEl.classList.remove('show'); }, ms || 2400);
  };
  V.copyText = function (text) {
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      V.toast(ok ? 'Copiado' : 'No se pudo copiar: selecciona el texto y cópialo');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { V.toast('Copiado'); }, fallback);
    } else fallback();
  };
  V.trackChip = function (track) { return '<span class="chip chip-' + esc(track) + '">' + esc(EL.TRACKS[track] || track) + '</span>'; };
  V.download = function (name, text, type) {
    var blob = new Blob([text], { type: type || 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  };
  V.fail = function (e) {
    if (window.console && console.error) console.error(e);
    if (window.__bh && window.__bh.recovery) window.__bh.recovery('Algo salió mal en esta pantalla', e && e.message);
  };
  V.leaveMedia = function () {
    try { C.speech.stop(); C.rec.cancel(); C.rec.revokeAll(); C.asr.stop(); } catch (e) { /* nada */ }
  };

  /* ---------- navegación ---------- */
  V.route = function () { return route; };
  V.studying = function () { return !!V.STUDY[route]; };
  /* Cambia de pantalla sin dibujar (para preparar el contexto antes). */
  V.enter = function (r, newCtx) {
    V.leaveMedia();
    route = r;
    Object.keys(ctx).forEach(function (k) { delete ctx[k]; });
    Object.assign(ctx, newCtx || {});
  };
  V.go = function (r, newCtx) { V.enter(r, newCtx); V.draw(true); };
  V.draw = function (top) {
    document.body.classList.toggle('flow', !!V.FLOWS[route]);
    var tabs = document.querySelectorAll('#nav [data-to]');
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].getAttribute('data-to') === V.TAB[route]) tabs[i].setAttribute('aria-current', 'page');
      else tabs[i].removeAttribute('aria-current');
    }
    try {
      var view = V.views[route];
      if (!view) throw new Error('Pantalla desconocida: ' + route);
      view();
      applyBars();
    } catch (e) { V.fail(e); return; }
    if (top) window.scrollTo(0, 0);
  };
  /* Repinta sin cambiar el contexto y sin mover el scroll. */
  V.redraw = function () { V.draw(false); };

  /* ---------- arranque de la interfaz ---------- */
  V.init = function () {
    app = document.getElementById('app');
    toastEl = document.getElementById('toast');
    document.addEventListener('click', function (ev) {
      try {
        var t = ev.target;
        var el = t && t.closest ? t.closest('[data-act]') : null;
        if (!el) { var tab = t && t.closest ? t.closest('[data-to]') : null; if (tab) V.A.nav(tab); return; }
        var fn = V.A[el.getAttribute('data-act')];
        if (fn) fn(el, ev);
      } catch (e) { V.fail(e); }
    });
    document.addEventListener('keydown', function (ev) {
      try {
        var t = ev.target, tag = t && t.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
          if (ev.key === 'Enter' && tag === 'INPUT' && t.getAttribute('data-enter')) { ev.preventDefault(); V.A[t.getAttribute('data-enter')](t); }
          return;
        }
        if (V.onKey) V.onKey(ev);
      } catch (e) { V.fail(e); }
    });
    var file = document.getElementById('import-file');
    if (file) file.addEventListener('change', function () {
      var f = file.files && file.files[0]; if (!f) return;
      if (f.size > 2000000) { V.toast('Ese archivo es demasiado grande para ser un respaldo'); file.value = ''; return; }
      var r = new FileReader();
      r.onload = function () {
        var res = C.importData(String(r.result));
        if (!res.ok) V.toast(res.error, 3500); else { V.toast('Respaldo importado'); V.go('home'); }
        file.value = '';
      };
      r.readAsText(f);
    });
    V.go('home');
  };
})();
