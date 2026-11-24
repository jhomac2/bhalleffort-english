#!/usr/bin/env node
/* Bhalleffort — build: deja el service worker listo para publicar.
   Uso:  node tools/build.js
   1) Lee index.html, el manifest y el CSS para saber qué archivos usa la app.
   2) Comprueba que todos existan (y que cada script de index.html esté incluido).
   3) Escribe la lista ASSETS y una VERSION nueva (hash del contenido) en sw.js.
   Corre esto SIEMPRE después de cambiar cualquier archivo de la app. */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f));
const exists = (f) => fs.existsSync(path.join(ROOT, f));
const errors = [];

const html = read('index.html').toString('utf8');
const files = new Set(['index.html', 'manifest.webmanifest']);
let m;

const srcRe = /<script[^>]+src="([^"]+)"/g;
while ((m = srcRe.exec(html))) files.add(m[1]);
const linkRe = /<link[^>]+href="([^"#]+)"/g;
while ((m = linkRe.exec(html))) if (!/^https?:/.test(m[1])) files.add(m[1]);

/* iconos del manifest */
try {
  const man = JSON.parse(read('manifest.webmanifest').toString('utf8'));
  (man.icons || []).forEach((i) => files.add(i.src));
} catch (e) { errors.push('manifest.webmanifest no es JSON válido: ' + e.message); }

/* fuentes e imágenes que usa el CSS */
if (exists('css/styles.css')) {
  const css = read('css/styles.css').toString('utf8');
  const urlRe = /url\(\s*['"]?([^'")]+)['"]?\s*\)/g;
  while ((m = urlRe.exec(css))) {
    if (/^(data:|https?:|#)/.test(m[1])) continue;
    files.add(path.posix.normalize(path.posix.join('css', m[1])));
  }
}

const list = [...files].filter((f) => !/^https?:/.test(f));
list.forEach((f) => { if (!exists(f)) errors.push('Falta el archivo: ' + f); });

/* ningún .js de la app debe quedar sin usar */
['js', 'data'].forEach((d) => {
  fs.readdirSync(path.join(ROOT, d)).filter((f) => f.endsWith('.js')).forEach((f) => {
    if (!files.has(d + '/' + f)) errors.push('El archivo ' + d + '/' + f + ' existe pero index.html no lo carga');
  });
});

if (errors.length) { console.error(errors.map((e) => '✗ ' + e).join('\n')); process.exit(1); }

list.sort();
const hash = crypto.createHash('sha256');
list.forEach((f) => { hash.update(f); hash.update(read(f)); });
const stamp = new Date().toISOString().slice(0, 10);
const version = stamp + '-' + hash.digest('hex').slice(0, 10);

const assets = ['./'].concat(list);
let sw = read('sw.js').toString('utf8');
sw = sw.replace(/const VERSION = '[^']*';/, "const VERSION = '" + version + "';");
sw = sw.replace(/\/\* ASSETS:begin \*\/[\s\S]*?\/\* ASSETS:end \*\//,
  '/* ASSETS:begin */\nconst ASSETS = [\n' + assets.map((a) => "  '" + a + "'").join(',\n') + '\n];\n/* ASSETS:end */');
fs.writeFileSync(path.join(ROOT, 'sw.js'), sw);

console.log('✓ ' + list.length + ' archivos guardados para modo sin internet');
console.log('✓ VERSION ' + version);
