/* Bhalleffort — tema claro / oscuro / automático.
   Se carga en el <head> para que la pantalla no parpadee al abrir.
   Guarda SOLO la preferencia de tema en su propia clave ('bhalleffort-tema'); no toca tu progreso. */
(function () {
  'use strict';
  var KEY = 'bhalleffort-tema', root = document.documentElement;
  var mq = null;
  try { mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null; } catch (e) { mq = null; }

  var T = window.__tema = {
    /* 'auto' | 'light' | 'dark' */
    get: function () {
      try { var v = localStorage.getItem(KEY); return v === 'dark' || v === 'light' ? v : 'auto'; } catch (e) { return 'auto'; }
    },
    /* El tema que se está viendo ahora: 'light' | 'dark'. */
    effective: function () {
      var v = T.get();
      return v === 'auto' ? (mq && mq.matches ? 'dark' : 'light') : v;
    },
    apply: function () {
      var v = T.get();
      if (v === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', v);
      var m = document.querySelector('meta[name="theme-color"]');
      if (m) m.setAttribute('content', T.effective() === 'dark' ? '#130D25' : '#6C3CE1');
    },
    set: function (v) {
      try { if (v === 'dark' || v === 'light') localStorage.setItem(KEY, v); else localStorage.removeItem(KEY); } catch (e) { /* nada */ }
      T.apply();
    }
  };
  T.apply();
  if (mq) {
    try { if (mq.addEventListener) mq.addEventListener('change', T.apply); else if (mq.addListener) mq.addListener(T.apply); } catch (e) { /* nada */ }
  }
})();
