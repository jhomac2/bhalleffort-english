/* Bhalleffort — arranque. Se carga al final, cuando todo lo demás ya existe. */
(function () {
  'use strict';
  var EL = window.EL, C = EL.c, V = EL.v, bh = window.__bh || (window.__bh = { ready: false });

  C.load();
  C.speech.init();
  V.init();

  /* Pide al navegador que no borre el progreso. */
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* nada */ }

  /* ---------- Tiempo de estudio ----------
     Solo cuenta si estás dentro de una sesión/práctica/examen, la pestaña está visible
     y hubo actividad en los últimos 90 s (o suena audio / se está grabando). */
  ['pointerdown', 'keydown', 'touchstart', 'scroll', 'input'].forEach(function (n) {
    window.addEventListener(n, C.touch, { passive: true, capture: true });
  });
  var ticks = 0;
  setInterval(function () {
    try {
      if (V.studying() && C.isActive()) {
        C.addTime(5);
        if (++ticks % 6 === 0) C.save();
      }
    } catch (e) { /* nada */ }
  }, 5000);
  window.addEventListener('pagehide', function () { C.save(); });
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') C.save(); });

  /* ---------- Instalar como app ---------- */
  window.addEventListener('beforeinstallprompt', function (ev) {
    ev.preventDefault();
    bh.install = ev;
    if (V.route() === 'progress') V.redraw();
  });
  window.addEventListener('appinstalled', function () {
    bh.install = null;
    if (V.route() === 'progress') V.redraw();
  });

  /* ---------- Modo sin internet y actualizaciones ---------- */
  function showUpdate() {
    var u = document.getElementById('update');
    if (u) u.hidden = false;
  }
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    var hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (hadController) showUpdate();            /* hay una versión nueva: avisa y deja recargar */
      else {
        hadController = true;                      /* primera instalación: ahora ya funciona sin internet */
        var el = document.getElementById('offline-status');
        if (el) el.textContent = 'La app está guardada en este dispositivo y funciona sin internet.';
      }
    });
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').then(function (reg) {
        /* Busca versiones nuevas al abrir y cada vez que vuelves a la app. */
        document.addEventListener('visibilitychange', function () {
          if (document.visibilityState === 'visible') { try { reg.update(); } catch (e) { /* nada */ } }
        });
      }).catch(function () { /* sin modo offline: la app sigue funcionando */ });
    });
  }

  bh.ready = true;
})();
