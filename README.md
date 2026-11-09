# Bhalleffort

App para aprender inglés de **A1 a C1**: general, para viajar, técnico (TI y ciberseguridad), de trabajo, pronunciación y estrategias de examen. Incluye **exámenes de nivel obligatorios** y, al final, **simulacros tipo IELTS y TOEFL**. Funciona **con y sin internet**, en celular, tablet y computador. No tiene cuentas, anuncios ni servidores: tu avance se guarda solo en tu dispositivo.

> Diseñado por Jhordy Cabascango · TikTok [@mr_jhordy21](https://www.tiktok.com/@mr_jhordy21)

## La idea: no avanzas si no dominas

- Cada lección termina con una **prueba de dominio de 12 preguntas**. Necesitas **80 % (10 de 12)** para abrir la siguiente. Si no apruebas, repasas y repites con preguntas nuevas.
- Al terminar cada nivel (A1, A2, B1, B2, C1) hay un **examen por secciones**: gramática y vocabulario, lectura, escucha (75 % cada una), escritura y habla (60 %, con rúbrica de 5 criterios). La dificultad sube con el nivel. Sin aprobarlo no se abre el siguiente nivel.
- Los errores van a un **cuaderno de errores** y salen de él cuando los aciertas 2 veces seguidas.
- Las palabras nuevas pasan a **tarjetas con repaso espaciado** (se repiten justo antes de olvidarlas).

## Qué incluye

| | |
|---|---|
| Lecciones | 99 en una ruta ordenada: 42 generales, 8 de viaje, 22 técnicas, 9 de trabajo, 10 de pronunciación y 8 de estrategias de examen (B2 y C1) |
| Niveles | A1, A2, B1, B2 (intermedio alto) y C1 (avanzado) |
| Vocabulario | 1010 palabras con ejemplo y audio |
| Habilidades | Escucha (diálogos con dos voces + dictado), habla (modelo, grabación, comparar, autoevaluación), lectura, escritura |
| Prueba de nivel | Hasta 40 preguntas adaptativas (8 por nivel, con escucha): se detiene en el primer nivel donde no llegas al 75 % y te coloca ahí |
| Exámenes de nivel | A1, A2, B1, B2 y C1, con 5 secciones cada uno |
| Simulacros | **IELTS Academic** (Listening, Reading, Writing, Speaking) y **TOEFL iBT** (Reading, Listening, Writing, Speaking), con cronómetro, audio una sola vez y puntaje estimado |
| Meta diaria | 60, 90 o 120 minutos de estudio activo, con racha, recordatorio (.ics) y respaldo de datos |
| Modo sin internet | Se instala como app y funciona sin conexión |

Los temas de TI y ciberseguridad (comandos, redes, contraseñas, ataques web, respuesta a incidentes, arquitectura de red, informes de errores, análisis de riesgos, post-mortems) están en la ruta desde A1.

## Simulacros IELTS y TOEFL

Se desbloquean al **aprobar el examen de nivel B2**. Cada sección se hace por separado y tiene su resultado; el total se calcula cuando terminas las cuatro.

- **IELTS Academic:** Listening 4 partes (20 preguntas), Reading 3 textos (15), Writing Task 1 (tabla, 150 palabras) + Task 2 (ensayo, 250 palabras), Speaking en 3 partes. Banda de 1 a 9 con medias bandas.
- **TOEFL iBT (formato 2026):** Reading (Complete the Words, Daily Life, Academic Passage), Listening (Choose a Response, Conversation, Announcement, Academic Talk), Writing (Build a Sentence, Email, Academic Discussion), Speaking (Listen and Repeat, Take an Interview). Puntaje de 1 a 6.
- **Condiciones de examen:** cronómetro estricto (se puede desactivar para practicar), audio que suena **una sola vez**, sin volver atrás.
- **Corrección:** Listening y Reading se corrigen solos. Writing y Speaking son **autoevaluación** con rúbrica; la app limita el puntaje si tu texto es muy corto o si no grabaste tus respuestas.
- **Resultado:** puntaje total estimado, nivel aproximado (MCER), qué mejorar primero y un historial de tus últimos 10 intentos. Puedes copiar tu texto para que un profesor o Claude lo corrija.

## Cómo usarla

**En el computador:** abre `index.html` con doble clic. Funciona directo desde el archivo (sin modo sin internet automático; para eso usa la versión publicada).

**En línea con GitHub Pages (recomendado):**

1. Crea un repositorio público nuevo y vacío (por ejemplo `bhalleffort-english`).
2. Sube **el contenido** de esta carpeta (no la carpeta ni el .zip): `index.html`, `sw.js`, `manifest.webmanifest`, `.nojekyll`, `css/`, `js/`, `data/`, `fonts/`, `icons/` y `tools/`.
3. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch → rama `main`, carpeta `/ (root)` → Save**.
4. Espera 1 o 2 minutos. La dirección será `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

**En el celular:** abre esa dirección una vez con internet. Luego:
- Android (Chrome): menú ⋮ → *Instalar app* (o el botón «Instalar la app» en la pestaña Progreso).
- iPhone (Safari): Compartir → *Agregar a pantalla de inicio*.

Desde ahí funciona sin conexión. Para pasar tu progreso a otro dispositivo: **Progreso → Respaldo → Descargar respaldo**, y en el otro dispositivo **Importar respaldo**.

## Cómo publicar cambios

Si cambias cualquier archivo, corre esto antes de subir (requiere Node.js):

```
node tools/check-data.js   # revisa que lecciones, prueba de nivel, exámenes y simulacros estén bien formados
node tools/build.js        # actualiza la versión del modo sin internet
```

`build.js` calcula una versión nueva a partir del contenido y la guarda en `sw.js`; así los dispositivos que ya tienen la app muestran el aviso «Hay una versión nueva» y se actualizan solos. Si olvidas correrlo, los dispositivos seguirán con la versión anterior.

## Cómo agregar una lección

Cada lección es un objeto en `data/` (mira `data/general-a1.js` como ejemplo):

1. Escribe la lección con `EL.lessons.push({...})` (explicación, ~10 palabras, 6 ejercicios, lectura, escritura, diálogo de escucha con 3 preguntas y 8 preguntas de prueba).
2. Agrega su `id` a `data/path.js` en la posición donde quieres que aparezca (los bloques A1/A2/B1/B2/C1 se leen de ahí).
3. Si creas un archivo nuevo, agrégalo a `index.html` antes de `js/core.js`.
4. Corre `node tools/check-data.js` y luego `node tools/build.js`.

Las preguntas de los simulacros están en `data/sims.js` y las de los exámenes de nivel en `data/exams.js`.

## Límites (para ser honestos)

- **Los simulacros no son oficiales.** Las preguntas son originales de Bhalleffort (no del IELTS ni del TOEFL reales), son **más cortos** que los exámenes verdaderos y el puntaje es una **estimación orientativa**. Úsalos para practicar el formato y el tiempo; para decidir si te presentas, compáralos con una prueba oficial de práctica o una evaluación real.
- Las secciones de escritura y habla (en los exámenes y en los simulacros) son **autoevaluaciones** con rúbrica; la app no corrige tu texto ni tu voz, y no puede dar un puntaje alto en esas secciones por sí sola (tope 8 en IELTS y 5,5 en TOEFL). Para una corrección real, copia tu texto y pide a Claude o a un profesor que lo revise.
- El reconocimiento de voz es opcional y depende del navegador (necesita internet y Chrome/Edge/Safari); la grabación y la voz del modelo funcionan sin internet, pero necesitan una voz en inglés instalada en el dispositivo.
- El contenido fue redactado con ayuda de IA y no ha sido revisado por un profesor de inglés.
- Se probó con un navegador de escritorio simulando celular (pruebas automáticas de lecciones, exámenes, simulacros, modo sin internet y accesibilidad), pero no en iPhone y Android reales.
