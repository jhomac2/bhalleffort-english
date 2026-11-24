/* Contenido de Bhalleffort: ayudantes para escribir lecciones.
   Cada archivo de lecciones agrega objetos a EL.lessons.
   Para añadir lecciones nuevas: crea un archivo en data/, agrégalo a index.html y a sw.js (o corre `node tools/build.js`),
   y añade el id de la lección a EL.PATH (data/path.js). Cada lección necesita: vocab, ex (6), read, write, listen y quiz (8). */
window.EL = window.EL || {};
EL.lessons = [];

/* Ejercicio de opción múltiple. a = índice de la opción correcta. */
EL.mc = function (q, o, a, why) { return { t: 'mc', q: q, o: o, a: a, why: why || '' }; };

/* Completar. a = respuesta o lista de respuestas aceptadas. */
EL.fill = function (q, a, why) { return { t: 'fill', q: q, a: [].concat(a), why: why || '' }; };

/* Ordenar palabras. es = frase en español. a = frase en inglés (o lista de variantes válidas). */
EL.order = function (es, a, why) { return { t: 'order', es: es, a: [].concat(a), why: why || '' }; };

/* Escuchar y elegir. o = palabras o frases parecidas; a = índice de la que se dice en voz alta. */
EL.hear = function (o, a, why) { return { t: 'hear', o: o, a: a, say: o[a], why: why || '' }; };

/* Agrega a una lección ya existente (por id) un diálogo de escucha y/o un banco de preguntas de dominio.
   Uso: EL.extend('g01', { listen: {...}, quiz: [...] }) */
EL.extend = function (id, extra) {
  var L = EL.lessons.filter(function (x) { return x.id === id; })[0];
  if (!L) { if (window.console) console.error('EL.extend: no existe la lección ' + id); return; }
  Object.keys(extra).forEach(function (k) { L[k] = extra[k]; });
};
