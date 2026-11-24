/* Bhalleffort — audio: voz en inglés (dos voces para diálogos), grabación de tu voz y reconocimiento opcional. */
(function () {
  'use strict';
  var EL = window.EL, C = EL.c, S = C.S;
  var speechBusy = false, recBusy = false;
  function sync() { C.busy = speechBusy || recBusy; }

  /* ---------- síntesis de voz (funciona sin internet con las voces del dispositivo) ---------- */
  var Speech = C.speech = {
    ok: 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window,
    voice: null, voiceB: null, checked: false, token: 0
  };
  var keep = null; // referencia para que el navegador no descarte la frase en curso

  function isEn(v) { return /^en[-_]/i.test(v.lang || ''); }
  Speech.voices = function () {
    if (!Speech.ok) return [];
    var vs = [];
    try { vs = window.speechSynthesis.getVoices() || []; } catch (e) { vs = []; }
    return vs.filter(isEn);
  };
  Speech.refresh = function () {
    var en = Speech.voices();
    if (!en.length) return;
    Speech.checked = true;
    var want = S.settings.voice, a = null;
    if (want) a = en.filter(function (v) { return v.name === want; })[0] || null;
    if (!a) a = en.filter(function (v) { return /en[-_]US/i.test(v.lang) && v.localService; })[0] ||
      en.filter(function (v) { return /en[-_]US/i.test(v.lang); })[0] || en[0];
    Speech.voice = a;
    var others = en.filter(function (v) { return v.name !== a.name; });
    Speech.voiceB = others.filter(function (v) { return v.localService && v.lang === a.lang; })[0] ||
      others.filter(function (v) { return v.localService; })[0] || others[0] || null;
  };
  Speech.init = function () {
    if (!Speech.ok) return;
    Speech.refresh();
    try {
      if (window.speechSynthesis.addEventListener) window.speechSynthesis.addEventListener('voiceschanged', Speech.refresh);
      else window.speechSynthesis.onvoiceschanged = Speech.refresh;
    } catch (e) { /* nada */ }
  };
  Speech.setVoice = function (name) { S.settings.voice = name || ''; C.save(); Speech.refresh(); };

  function utter(text, o) {
    var u = new window.SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    var v = o.voice || Speech.voice;
    if (v) { u.voice = v; u.lang = v.lang || 'en-US'; }
    u.rate = o.slow ? Math.max(0.5, (S.settings.rate || 0.9) * 0.65) : (S.settings.rate || 0.9);
    if (o.pitch) u.pitch = o.pitch;
    return u;
  }
  /* Dice una frase. slow = más lento. Devuelve false si no se pudo. */
  Speech.say = function (text, slow, onend) {
    if (!Speech.ok) return false;
    try {
      Speech.token++;
      window.speechSynthesis.cancel();
      var u = utter(text, { slow: slow });
      keep = u;
      speechBusy = true; sync();
      var done = function () { speechBusy = false; sync(); if (onend) onend(); };
      u.onend = done; u.onerror = done;
      window.speechSynthesis.speak(u);
      return true;
    } catch (e) { speechBusy = false; sync(); return false; }
  };
  /* Reproduce un diálogo línea por línea con dos voces. lines = [[hablante, texto], ...] */
  Speech.dialogue = function (lines, slow, onend) {
    if (!Speech.ok) return false;
    try {
      Speech.token++;
      var my = Speech.token, names = [], i = 0;
      window.speechSynthesis.cancel();
      lines.forEach(function (l) { if (names.indexOf(l[0]) < 0) names.push(l[0]); });
      speechBusy = true; sync();
      var finish = function () { if (my === Speech.token) { speechBusy = false; sync(); if (onend) onend(); } };
      var next = function () {
        if (my !== Speech.token) return;
        if (i >= lines.length) return finish();
        var l = lines[i++], who = names.indexOf(l[0]) % 2;
        var o = { slow: slow };
        if (who === 1) { if (Speech.voiceB) o.voice = Speech.voiceB; else o.pitch = 0.75; }
        else if (!Speech.voiceB) o.pitch = 1.1;
        var u = utter(l[1], o);
        keep = u;
        u.onend = function () { setTimeout(next, 250); };
        u.onerror = finish;
        window.speechSynthesis.speak(u);
      };
      next();
      return true;
    } catch (e) { speechBusy = false; sync(); return false; }
  };
  Speech.stop = function () {
    Speech.token++;
    speechBusy = false; sync();
    try { if (Speech.ok) window.speechSynthesis.cancel(); } catch (e) { /* nada */ }
  };

  /* ---------- grabar tu voz (se queda en este dispositivo y solo en memoria) ---------- */
  var Rec = C.rec = {
    ok: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder),
    state: 'idle', urls: []
  };
  var cur = null, player = null;
  function pickMime() {
    var list = ['audio/webm;codecs=opus', 'audio/mp4', 'audio/webm', 'audio/ogg;codecs=opus'];
    if (!window.MediaRecorder || !window.MediaRecorder.isTypeSupported) return '';
    for (var i = 0; i < list.length; i++) if (window.MediaRecorder.isTypeSupported(list[i])) return list[i];
    return '';
  }
  Rec.start = function (maxMs) {
    return navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var mime = pickMime(), mr;
      try { mr = mime ? new window.MediaRecorder(stream, { mimeType: mime }) : new window.MediaRecorder(stream); }
      catch (e) { stream.getTracks().forEach(function (t) { t.stop(); }); throw e; }
      var chunks = [];
      mr.ondataavailable = function (ev) { if (ev.data && ev.data.size) chunks.push(ev.data); };
      mr.start();
      cur = { stream: stream, mr: mr, chunks: chunks, timer: setTimeout(function () { if (cur && cur.onAuto) cur.onAuto(); }, maxMs || 30000) };
      Rec.state = 'recording'; recBusy = true; sync();
    });
  };
  function release() {
    if (cur) { clearTimeout(cur.timer); try { cur.stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) { /* nada */ } }
    cur = null; Rec.state = 'idle'; recBusy = false; sync();
  }
  Rec.onAutoStop = function (fn) { if (cur) cur.onAuto = fn; };
  Rec.stop = function () {
    return new Promise(function (resolve) {
      var r = cur;
      if (!r) return resolve(null);
      var finished = false;
      var fin = function () {
        if (finished) return; finished = true;
        var blob = r.chunks.length ? new Blob(r.chunks, { type: r.mr.mimeType || 'audio/webm' }) : null;
        release(); resolve(blob);
      };
      r.mr.onstop = fin;
      try { r.mr.stop(); } catch (e) { fin(); }
      setTimeout(fin, 1500);
    });
  };
  Rec.cancel = function () { if (cur) { try { cur.mr.onstop = null; cur.mr.stop(); } catch (e) { /* nada */ } } release(); };
  Rec.makeUrl = function (blob) { var u = URL.createObjectURL(blob); Rec.urls.push(u); return u; };
  Rec.revokeAll = function () { Rec.stopPlay(); Rec.urls.forEach(function (u) { try { URL.revokeObjectURL(u); } catch (e) { /* nada */ } }); Rec.urls = []; };
  Rec.play = function (url, onend) {
    Rec.stopPlay();
    try {
      player = new Audio(url);
      recBusy = true; sync();
      var done = function () { recBusy = !!cur; sync(); if (onend) onend(); };
      player.onended = done; player.onerror = done;
      var p = player.play(); if (p && p.catch) p.catch(done);
    } catch (e) { recBusy = !!cur; sync(); }
  };
  Rec.stopPlay = function () { if (player) { try { player.pause(); } catch (e) { /* nada */ } player = null; recBusy = !!cur; sync(); } };
  Rec.errorText = function (err) {
    var n = err && err.name;
    if (n === 'NotAllowedError' || n === 'SecurityError') return 'No diste permiso al micrófono. Actívalo en el candado de la barra de direcciones (o en Ajustes del navegador) y vuelve a intentar.';
    if (n === 'NotFoundError' || n === 'OverconstrainedError') return 'No encontré un micrófono en este dispositivo.';
    if (n === 'NotReadableError') return 'El micrófono está ocupado por otra app. Ciérrala e intenta de nuevo.';
    return 'No pude usar el micrófono en este navegador. Puedes seguir con la autoevaluación.';
  };

  /* ---------- reconocimiento de voz (opcional; el navegador envía el audio a su servicio y necesita internet) ---------- */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var Asr = C.asr = { ok: !!SR };
  var asrCur = null;
  Asr.available = function () { return !!SR && S.settings.asr === true && navigator.onLine !== false; };
  Asr.listen = function (onResult, onError) {
    try {
      var r = new SR();
      r.lang = 'en-US'; r.interimResults = false; r.maxAlternatives = 3; r.continuous = false;
      var got = false;
      r.onresult = function (ev) {
        got = true;
        var res = ev.results && ev.results[0], alts = [];
        for (var j = 0; res && j < res.length; j++) alts.push(res[j].transcript);
        onResult(alts);
      };
      r.onerror = function (ev) { got = true; onError(ev && ev.error ? ev.error : 'error'); };
      r.onend = function () { asrCur = null; recBusy = false; sync(); if (!got) onError('no-speech'); };
      asrCur = r; recBusy = true; sync();
      r.start();
      return true;
    } catch (e) { recBusy = false; sync(); return false; }
  };
  Asr.stop = function () { if (asrCur) { try { asrCur.stop(); } catch (e) { /* nada */ } } };
})();
