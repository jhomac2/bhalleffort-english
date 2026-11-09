/* Bhalleffort — arranque seguro: si algo falla al cargar, muestra una pantalla de reparación en vez de una página en blanco.
   Se carga primero y no depende de nada más. */
(function () {
  'use strict';
  var KEY = 'bhalleffort-v1';
  var bh = window.__bh = { ready: false };

  function el(tag, attrs, text) {
    var e = document.createElement(tag), k;
    for (k in (attrs || {})) e.setAttribute(k, attrs[k]);
    if (text) e.textContent = text;
    return e;
  }
  function btn(label, cls, fn) {
    var b = el('button', { type: 'button', 'class': 'btn ' + cls }, label);
    b.addEventListener('click', fn);
    return b;
  }
  function download(name, text) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
    a.download = name;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }
  function repairApp() {
    var jobs = [];
    try {
      if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
        jobs.push(navigator.serviceWorker.getRegistrations().then(function (rs) { return Promise.all(rs.map(function (r) { return r.unregister(); })); }));
      }
      if (window.caches && caches.keys) {
        jobs.push(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k.indexOf('bhalleffort-') === 0; }).map(function (k) { return caches.delete(k); })); }));
      }
    } catch (e) { /* nada */ }
    Promise.all(jobs).then(function () { location.reload(); }, function () { location.reload(); });
  }
  /* Pantalla de reparación. detail = texto técnico opcional. */
  bh.recovery = function (title, detail) {
    var app = document.getElementById('app');
    if (!app) return;
    while (app.firstChild) app.removeChild(app.firstChild);
    document.body.classList.add('flow');
    var card = el('section', { 'class': 'card', role: 'alert' });
    card.appendChild(el('h2', null, title || 'Algo salió mal'));
    card.appendChild(el('p', null, 'Tu progreso no se ha perdido. Prueba en este orden:'));
    card.appendChild(btn('1. Reparar la app (conserva tu progreso)', 'primary block', repairApp));
    var raw = '';
    try { raw = localStorage.getItem(KEY) || localStorage.getItem(KEY + '-corrupt') || ''; } catch (e) { raw = ''; }
    if (raw) card.appendChild(btn('2. Descargar una copia de mis datos', 'block', function () { download('bhalleffort-datos-' + Date.now() + '.json', raw); }));
    card.appendChild(btn('3. Borrar mi progreso y empezar de cero', 'danger block', function () {
      if (!window.confirm('¿Borrar TODO tu progreso? Esto no se puede deshacer.')) return;
      try { localStorage.removeItem(KEY); localStorage.removeItem(KEY + '-corrupt'); } catch (e) { /* nada */ }
      repairApp();
    }));
    if (detail) { var d = el('details'); d.appendChild(el('summary', null, 'Detalle técnico')); d.appendChild(el('p', null, String(detail).slice(0, 400))); card.appendChild(d); }
    app.appendChild(card);
  };

  /* Falló la carga de algún archivo de la app. */
  window.addEventListener('error', function (ev) {
    var t = ev.target;
    if (!bh.ready && t && t.tagName === 'SCRIPT' && t.src) {
      bh.recovery('No se pudo cargar la app', 'Archivo: ' + t.src.split('/').slice(-2).join('/'));
    }
  }, true);
  window.addEventListener('load', function () {
    setTimeout(function () { if (!bh.ready) bh.recovery('La app no terminó de cargar', 'Tiempo de espera agotado'); }, 2500);
  });
})();
