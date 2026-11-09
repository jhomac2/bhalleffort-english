#!/usr/bin/env node
/* Revisa que todo el contenido de data/ esté bien formado.
   Uso: node tools/check-data.js
   Corre esto cada vez que agregues o cambies lecciones. Sale con código 1 si hay errores. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const files = [];
html.replace(/<script[^>]+src="(data\/[^"]+)"/g, (_, f) => { files.push(f); });

const sandbox = {};
sandbox.window = sandbox;
vm.createContext(sandbox);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), sandbox, { filename: f });
const EL = sandbox.EL;

let errors = 0, warns = 0;
const err = (id, msg) => { errors++; console.log('ERROR  ' + id + ': ' + msg); };
const warn = (id, msg) => { warns++; console.log('AVISO  ' + id + ': ' + msg); };

const ids = new Set();
const seenWords = new Map();
const norm = s => String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/-/g, ' ').replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();
const tokens = s => norm(s).split(' ').filter(Boolean);
const sameBag = (a, b) => { const x = tokens(a).sort().join('|'), y = tokens(b).sort().join('|'); return x === y; };

function checkMc(id, label, e) {
  if (!e.q || !Array.isArray(e.o) || e.o.length < 2) return err(id, label + ': mc sin opciones');
  if (!Number.isInteger(e.a) || e.a < 0 || e.a >= e.o.length) return err(id, label + ': índice de respuesta fuera de rango');
  if (new Set(e.o.map(o => String(o).trim())).size !== e.o.length) err(id, label + ': opciones repetidas');
  if (e.o.some(o => !String(o).trim())) err(id, label + ': opción vacía');
}
function checkHear(id, label, e) {
  if (!Array.isArray(e.o) || e.o.length < 2) return err(id, label + ': hear sin opciones');
  if (!Number.isInteger(e.a) || e.a < 0 || e.a >= e.o.length) return err(id, label + ': índice fuera de rango');
  if (e.say !== e.o[e.a]) err(id, label + ': "say" no coincide con la opción correcta');
  if (new Set(e.o.map(norm)).size !== e.o.length) err(id, label + ': opciones repetidas');
}
function checkEx(id, label, e) {
  if (e.t === 'mc') checkMc(id, label, e);
  else if (e.t === 'hear') checkHear(id, label, e);
  else if (e.t === 'fill') {
    if (!e.q || !e.a || !e.a.length || e.a.some(x => !x)) err(id, label + ': fill sin respuesta');
    if (e.q && e.q.indexOf('___') < 0) err(id, label + ': fill sin "___"');
  } else if (e.t === 'order') {
    if (!e.es || !e.a || !e.a.length) return err(id, label + ': order incompleto');
    const n = tokens(e.a[0]).length;
    if (n > 10) warn(id, label + ': frase muy larga para ordenar (' + n + ' palabras)');
    if (n < 3) err(id, label + ': frase demasiado corta para ordenar');
    e.a.slice(1).forEach((alt, k) => { if (!sameBag(alt, e.a[0])) err(id, label + ': la variante ' + (k + 2) + ' no usa las mismas palabras que la principal'); });
  } else err(id, label + ': tipo desconocido ' + e.t);
}

for (const L of EL.lessons) {
  const id = L.id;
  if (ids.has(id)) err(id, 'id repetido');
  ids.add(id);
  for (const k of ['track', 'level', 'title', 'en', 'explain', 'q']) if (!L[k]) err(id, 'falta ' + k);
  if (!EL.TRACKS[L.track]) err(id, 'track desconocido: ' + L.track);
  if (!EL.LEVELS.some(lv => lv.id === L.level)) err(id, 'nivel desconocido: ' + L.level);

  /* vocabulario */
  if (!Array.isArray(L.vocab) || L.vocab.length < 8) err(id, 'menos de 8 palabras');
  (L.vocab || []).forEach((v, i) => {
    if (!Array.isArray(v) || v.length < 3 || !v[0] || !v[1] || !v[2]) return err(id, 'vocab ' + i + ' incompleto');
    const key = norm(v[0]) + '|' + norm(v[1]);
    if (seenWords.has(key)) warn(id, 'palabra repetida "' + v[0] + '" (también en ' + seenWords.get(key) + ')');
    else seenWords.set(key, id);
  });
  const dict = (L.vocab || []).map(v => v[2]).filter(s => { const n = s.split(' ').length; return n >= 3 && n <= 9; });
  if (dict.length < 3) err(id, 'menos de 3 frases aptas para dictado (3 a 9 palabras)');

  /* práctica */
  if (!Array.isArray(L.ex) || L.ex.length < 5) err(id, 'menos de 5 ejercicios de práctica');
  (L.ex || []).forEach((e, i) => checkEx(id, 'ejercicio ' + (i + 1), e));

  /* lectura y escritura */
  if (!L.read || !L.read.t || !L.read.tr || !Array.isArray(L.read.q) || L.read.q.length < 2) err(id, 'lectura incompleta');
  else L.read.q.forEach((e, i) => checkMc(id, 'pregunta de lectura ' + (i + 1), e));
  if (!L.write || !L.write.p || !L.write.m) err(id, 'escritura incompleta');

  /* escucha */
  if (!L.listen || !Array.isArray(L.listen.d) || L.listen.d.length < 4) err(id, 'falta el diálogo de escucha (mínimo 4 líneas)');
  else {
    L.listen.d.forEach((ln, i) => { if (!Array.isArray(ln) || ln.length < 2 || !ln[0] || !ln[1]) err(id, 'línea ' + (i + 1) + ' del diálogo mal formada'); });
    const speakers = new Set(L.listen.d.map(l => l[0]));
    if (speakers.size > 2) warn(id, 'el diálogo tiene ' + speakers.size + ' hablantes (las voces solo alternan entre 2)');
    if (!Array.isArray(L.listen.q) || L.listen.q.length < 3) err(id, 'el diálogo necesita 3 preguntas');
    else L.listen.q.forEach((e, i) => checkMc(id, 'pregunta de escucha ' + (i + 1), e));
  }

  /* prueba de dominio */
  if (!Array.isArray(L.quiz) || L.quiz.length !== 8) err(id, 'la prueba de dominio debe tener exactamente 8 preguntas (tiene ' + (L.quiz ? L.quiz.length : 0) + ')');
  else {
    L.quiz.forEach((e, i) => checkEx(id, 'prueba ' + (i + 1), e));
    const types = new Set(L.quiz.map(e => e.t));
    if (types.size < 3) warn(id, 'la prueba usa pocos tipos de pregunta (' + [...types].join(', ') + ')');
    const key = e => JSON.stringify([e.q || e.es || e.say, e.o || e.a, e.a]);
    const exQ = new Set((L.ex || []).map(key));
    L.quiz.forEach((e, i) => { if (exQ.has(key(e))) warn(id, 'prueba ' + (i + 1) + ' repite un ejercicio de práctica'); });
  }

  /* habla (opcional) */
  if (L.speak !== undefined) {
    if (!Array.isArray(L.speak) || L.speak.length < 3) err(id, '"speak" debe tener al menos 3 frases');
    else L.speak.forEach((p, i) => { const n = tokens(p).length; if (n < 3 || n > 12) warn(id, 'frase de habla ' + (i + 1) + ' tiene ' + n + ' palabras'); });
  }
  if (L.track === 'pron' && !L.speak) err(id, 'las lecciones de pronunciación necesitan "speak"');
}

/* ruta */
const pathIds = EL.PATH;
pathIds.forEach(p => { if (!ids.has(p)) err(p, 'está en PATH pero no existe la lección'); });
if (new Set(pathIds).size !== pathIds.length) err('PATH', 'ids repetidos en PATH');
EL.lessons.forEach(L => { if (pathIds.indexOf(L.id) < 0) err(L.id, 'no está en PATH (no aparecería en la ruta)'); });
EL.LEVELS.forEach(lv => {
  for (let i = lv.from; i <= lv.to; i++) {
    const L = EL.lessons.find(x => x.id === pathIds[i]);
    if (L && L.level !== lv.id) err(pathIds[i], 'su nivel es ' + L.level + ' pero está en el bloque ' + lv.id);
  }
});
if (EL.LEVELS[EL.LEVELS.length - 1].to !== pathIds.length - 1) err('PATH', 'LEVELS no cubre todo PATH');
EL.LEVELS.forEach((lv, k) => { if (k && lv.from !== EL.LEVELS[k - 1].to + 1) err('LEVELS', 'hay un hueco antes de ' + lv.id); });

/* prueba de nivel */
const P = EL.PLACEMENT;
if (!Array.isArray(P)) err('placement', 'falta EL.PLACEMENT');
else {
  EL.LEVELS.forEach(lv => {
    const items = P.filter(p => p.lv === lv.id), listen = items.filter(p => p.say);
    if (items.length !== 8) err('placement', lv.id + ' debe tener 8 preguntas (tiene ' + items.length + ')');
    if (listen.length !== 1) err('placement', lv.id + ' debe tener 1 pregunta de escucha (tiene ' + listen.length + ')');
  });
  P.forEach((p, i) => {
    const lb = 'pregunta ' + (i + 1);
    if (!EL.LEVELS.some(lv => lv.id === p.lv)) err('placement', lb + ': nivel desconocido');
    if (p.say) {
      if (!Array.isArray(p.o) || p.o.length < 2 || !Number.isInteger(p.a) || p.a < 0 || p.a >= p.o.length) err('placement', lb + ': escucha mal formada');
      else if (new Set(p.o.map(norm)).size !== p.o.length) err('placement', lb + ': opciones repetidas');
    } else checkMc('placement', lb, p);
  });
}

/* exámenes */
EL.LEVELS.forEach(lv => {
  const X = EL.EXAMS && EL.EXAMS[lv.id];
  if (!X) return err('exams', 'falta el examen de ' + lv.id);
  ['w', 's'].forEach(k => {
    const s = X[k];
    if (!s || !s.p) return err('exams', lv.id + '.' + k + ': falta la consigna');
    if (!Array.isArray(s.c) || s.c.length !== 5 || s.c.some(c => !c)) err('exams', lv.id + '.' + k + ': necesita 5 criterios');
  });
  if (!X.w || !(X.w.min >= 15)) err('exams', lv.id + '.w: falta "min" de palabras');
});

/* simulacros IELTS / TOEFL */
let simQ = '';
(function () {
  const SIMS = EL.SIMS;
  if (!SIMS) return err('sims', 'falta EL.SIMS');
  const SECS = { ielts: ['l', 'r', 'w', 's'], toefl: ['r', 'l', 'w', 's'] };
  const tot = [];
  Object.keys(SECS).forEach(kind => {
    const X = SIMS[kind];
    if (!X || !X.name || !X.info) return err('sims', 'falta ' + kind);
    SECS[kind].forEach(sec => {
      const d = X.secs && X.secs[sec], id = 'sims.' + kind + '.' + sec;
      if (!d || !d.name || !d.desc) return err(id, 'falta la sección');
      let n = 0;
      const item = (e, lb) => {
        n++;
        if (e.t === 'mc') checkMc(id, lb, e);
        else if (e.t === 'fill') { if (!e.q || !Array.isArray(e.a) || !e.a.length || e.a.some(a => !String(a).trim())) err(id, lb + ': fill mal formado'); }
        else err(id, lb + ': tipo desconocido');
      };
      const rub = r => { if (!Array.isArray(r) || r.length !== 4 || r.some(c => !c)) err(id, 'la rúbrica necesita 4 criterios'); };
      if (sec === 'l' || sec === 'r') {
        if (!Array.isArray(d.parts) || !d.parts.length) return err(id, 'sin partes');
        if (sec === 'r' && !(d.minutes > 0)) err(id, 'falta "minutes"');
        d.parts.forEach((p, i) => {
          const lb = 'parte ' + (i + 1);
          if (!p.title || !p.intro) err(id, lb + ': falta título o instrucciones');
          if (p.kind === 'cloze') {
            const gaps = p.t.match(/\[\[[^|\]]+\|[^\]]+\]\]/g) || [];
            if (gaps.length < 5) err(id, lb + ': pocas palabras para completar');
            if ((p.t.match(/\[\[/g) || []).length !== gaps.length) err(id, lb + ': marca [[pre|resto]] mal formada');
            n += gaps.length;
          } else if (p.kind === 'multi') {
            if (!Array.isArray(p.items) || p.items.length < 3) return err(id, lb + ': necesita 3 o más frases');
            p.items.forEach((it, j) => { if (!it.say || typeof it.say !== 'string') err(id, lb + '.' + (j + 1) + ': falta el audio'); item(it.q, lb + '.' + (j + 1)); });
          } else {
            if (!Array.isArray(p.q) || p.q.length < 3) return err(id, lb + ': necesita 3 o más preguntas');
            if (sec === 'l' && (!Array.isArray(p.say) || p.say.length < 4 || p.say.some(l => !Array.isArray(l) || !l[0] || !l[1]))) err(id, lb + ': audio mal formado (4+ líneas [hablante, texto])');
            if (sec === 'l' && new Set(p.say.map(l => l[0])).size > 2) err(id, lb + ': el audio tiene más de 2 voces');
            if (sec === 'r' && (!Array.isArray(p.t) || !p.t.length)) err(id, lb + ': falta el texto');
            p.q.forEach((e, j) => item(e, lb + '.' + (j + 1)));
          }
          if (p.kind !== 'multi' && p.kind !== 'cloze' && !p.say && sec === 'l') err(id, lb + ': falta audio');
          if (p.kind === 'multi' || p.kind === 'cloze') { /* contado arriba */ }
          if (p.kind === 'multi') { /* item() ya contó */ }
        });
      } else if (sec === 'w') {
        if (kind === 'toefl') {
          if (!Array.isArray(d.build) || d.build.length < 4) err(id, 'Build a Sentence necesita 4 frases');
          else d.build.forEach((b, i) => { n++; if (!b.s || b.s.split(' ').length < 6 || !Array.isArray(b.a) || b.a[0] !== b.s) err(id, 'frase ' + (i + 1) + ' mal formada'); });
        }
        if (!Array.isArray(d.tasks) || !d.tasks.length) err(id, 'sin tareas');
        else d.tasks.forEach((t, i) => { if (!t.title || !t.p || !(t.min >= 50) || !(t.minutes > 0)) err(id, 'tarea ' + (i + 1) + ': falta título, consigna, min o minutes'); rub(t.rubric); });
      } else {
        if (!Array.isArray(d.steps) || d.steps.length < 4) return err(id, 'necesita 4 o más pasos');
        d.steps.forEach((st, i) => { if (!st.title || !st.prompt || !(st.max >= 10)) err(id, 'paso ' + (i + 1) + ': falta título, consigna o max'); });
        rub(d.rubric);
      }
      if (sec === 'l' || sec === 'r') tot.push(kind + '/' + sec + ':' + n);
    });
  });
  simQ = tot.join('  ');
})();

/* cobertura por nivel y tema */
const count = {};
EL.lessons.forEach(L => { const k = L.level + '/' + L.track; count[k] = (count[k] || 0) + 1; });
const words = EL.lessons.reduce((n, L) => n + L.vocab.length, 0);
const hearN = EL.lessons.reduce((n, L) => n + (L.quiz || []).concat(L.ex || []).filter(e => e.t === 'hear').length, 0);
console.log('\n' + EL.lessons.length + ' lecciones · ' + words + ' palabras · ' + hearN + ' ejercicios de escucha-y-elegir · ' + (P ? P.length : 0) + ' preguntas de nivel');
console.log(Object.keys(count).sort().map(k => k + ':' + count[k]).join('  '));
console.log('Simulacros (preguntas): ' + simQ);
console.log(errors + ' errores, ' + warns + ' avisos');
process.exit(errors ? 1 : 0);
