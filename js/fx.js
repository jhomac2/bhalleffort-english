/* Bhalleffort — efectos y tema: confeti al terminar y botones de modo claro/oscuro.
   El confeti se dibuja en un <canvas> (no usa estilos en línea) y se omite si tu dispositivo pide menos animación. */
(function () {
  'use strict';
  var EL = window.EL, V = EL.v, A = V.A, I = V.ICON;
  var COLORS = ['#6C3CE1', '#B794FF', '#F5B82E', '#FF6B4A', '#58CC02', '#FFFFFF'];
  var cv = null, raf = 0;

  function reduced() {
    try { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); } catch (e) { return false; }
  }
  function stop() {
    if (raf) { try { cancelAnimationFrame(raf); } catch (e) { /* nada */ } raf = 0; }
    if (cv && cv.parentNode) cv.parentNode.removeChild(cv);
    cv = null;
  }

  /* big = true para un logro grande (lección dominada, examen aprobado). */
  function confetti(big) {
    if (reduced()) return;
    try {
      stop();
      var c = document.createElement('canvas');
      if (!c.getContext) return;
      var g = c.getContext('2d');
      if (!g) return;
      var w = c.width = Math.max(200, window.innerWidth), h = c.height = Math.max(200, window.innerHeight);
      c.className = 'confetti';
      c.setAttribute('aria-hidden', 'true');
      document.body.appendChild(c);
      cv = c;
      var n = big ? 170 : 100, life = big ? 4200 : 3000, parts = [], i;
      for (i = 0; i < n; i++) {
        parts.push({
          x: Math.random() * w, y: -20 - Math.random() * h * 0.6,
          vx: (Math.random() - 0.5) * 4, vy: 2 + Math.random() * 4,
          s: 6 + Math.random() * 7, r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.3,
          c: COLORS[Math.floor(Math.random() * COLORS.length)], round: Math.random() < 0.3
        });
      }
      var t0 = 0;
      var frame = function (t) {
        if (!cv) return;
        if (!t0) t0 = t;
        var el = t - t0;
        g.clearRect(0, 0, w, h);
        for (var k = 0; k < parts.length; k++) {
          var p = parts[k];
          p.x += p.vx; p.y += p.vy; p.vy += 0.06; p.vx *= 0.995; p.r += p.vr;
          g.save();
          g.translate(p.x, p.y); g.rotate(p.r);
          g.globalAlpha = el > life - 800 ? Math.max(0, (life - el) / 800) : 1;
          g.fillStyle = p.c;
          if (p.round) { g.beginPath(); g.arc(0, 0, p.s / 2, 0, 6.2832); g.fill(); }
          else g.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * 0.66);
          g.restore();
        }
        if (el < life) raf = requestAnimationFrame(frame); else stop();
      };
      raf = requestAnimationFrame(frame);
    } catch (e) { stop(); }
  }
  EL.fx = { confetti: confetti, stop: stop };

  /* ---------- modo claro / oscuro ---------- */
  function T() { return window.__tema; }
  /* Botón pequeño para el inicio: cambia entre claro y oscuro. */
  V.themeBtn = function () {
    var t = T();
    if (!t) return '';
    var dark = t.effective() === 'dark';
    return '<button type="button" class="theme-btn" data-act="theme" aria-label="' + (dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro') + '">' + (dark ? I.sun : I.moon) + '</button>';
  };
  A.theme = function () {
    var t = T(); if (!t) return;
    t.set(t.effective() === 'dark' ? 'light' : 'dark');
    V.redraw();
  };
  A['set-theme'] = function (el) {
    var t = T(); if (!t) return;
    t.set(el.getAttribute('data-v'));
    V.redraw();
  };
})();
