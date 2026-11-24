/* Estrategias de examen, nivel B2: x01 a x04 (IELTS Academic y TOEFL iBT). Preguntas originales, no oficiales. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  var TFNG = ['True', 'False', 'Not Given'];
  EL.lessons.push(

    {
      id: 'x01', track: 'exam', level: 'B2', title: 'Lectura de examen: skimming, scanning y Verdadero/Falso/No dado', en: 'Exam reading strategies',
      explain:
        '<p>En IELTS y TOEFL la lectura se gana con <b>estrategia</b>, no leyendo palabra por palabra. Tienes aprox. <b>20 minutos por texto</b> (IELTS: 60 min, 3 textos, 40 preguntas).</p>' +
        '<table><tr><th>Técnica</th><th>Qué haces</th></tr>' +
        '<tr><td><i lang="en">Skim</i></td><td>lees título, primera y última frase de cada párrafo → idea general (1–2 min)</td></tr>' +
        '<tr><td><i lang="en">Scan</i></td><td>buscas un dato concreto (fecha, nombre, número) sin leer todo</td></tr>' +
        '<tr><td><i lang="en">Keywords</i></td><td>subrayas palabras clave de la pregunta y buscas sus <b>sinónimos</b> en el texto</td></tr></table>' +
        '<p><b>True / False / Not Given</b> (el tipo que más confunde):</p>' +
        '<ul><li><b>True</b>: el texto dice lo mismo (con otras palabras).</li>' +
        '<li><b>False</b>: el texto dice <b>lo contrario</b>.</li>' +
        '<li><b>Not Given</b>: el texto <b>no habla</b> de eso. No uses tu conocimiento del mundo: solo lo que dice el texto.</li></ul>' +
        '<p><b>Matching headings:</b> lee primero el párrafo y decide su idea principal; después elige el título. Hay más títulos que párrafos (distractores).</p>' +
        '<p>Regla de oro: <b>no te quedes más de 1 minuto y medio</b> en una pregunta; marca y sigue. Las respuestas casi siempre vienen <b>en el orden del texto</b>.</p>',
      vocab: [
        ['skim', 'leer rápido para la idea general', 'Skim the text for the main idea.'],
        ['scan', 'buscar un dato concreto', 'Scan the paragraph for a date.'],
        ['keyword', 'palabra clave', 'Underline the keyword in each question.'],
        ['paraphrase', 'parafrasear', 'The question paraphrases the text.'],
        ['not given', 'no se menciona', 'If it is not mentioned, choose Not Given.'],
        ['heading', 'título de sección', 'Match each paragraph to a heading.'],
        ['main idea', 'idea principal', 'The first sentence gives the main idea.'],
        ['distractor', 'distractor (opción engañosa)', 'One option is a distractor.'],
        ['infer', 'inferir', 'You must infer the answer.'],
        ['time limit', 'límite de tiempo', 'Watch the time limit carefully.']
      ],
      ex: [
        mc('When you "skim" a text, you…', ['read quickly for the general idea', 'read every word slowly', 'look only at the pictures'], 0),
        mc('When you "scan", you look for…', ['a specific detail', 'the author\'s mood', 'a title'], 0),
        mc('If the text says the opposite of the statement, the answer is…', TFNG, 1),
        mc('If the text does not mention the idea at all, the answer is…', TFNG, 2),
        fill('Underline the ___ in each question. (keywords)', 'keywords'),
        order('La pregunta parafrasea el texto.', 'The question paraphrases the text.')
      ],
      read: {
        t: "Many cities are creating more green spaces such as parks and rooftop gardens. According to a recent study, residents who live within 300 metres of a park report lower stress levels than those who live further away. The researchers also found that trees reduce the temperature of nearby streets by up to three degrees during summer. However, the study did not examine whether the benefits are the same in every country. Some critics argue that building parks is expensive and that the money could be used for public transport instead. The authors accept this concern but believe that the long-term health savings outweigh the initial cost.",
        tr: 'Muchas ciudades están creando más espacios verdes, como parques y jardines en azoteas. Según un estudio reciente, los residentes que viven a menos de 300 metros de un parque dicen sentir menos estrés que quienes viven más lejos. Los investigadores también hallaron que los árboles reducen hasta tres grados la temperatura de las calles cercanas durante el verano. Sin embargo, el estudio no examinó si los beneficios son iguales en todos los países. Algunos críticos sostienen que construir parques es caro y que ese dinero podría usarse en transporte público. Los autores aceptan esta preocupación, pero creen que el ahorro en salud a largo plazo supera el costo inicial.',
        q: [
          mc('True, False or Not Given? "People who live near a park report less stress."', TFNG, 0),
          mc('True, False or Not Given? "Trees can lower street temperatures by up to ten degrees."', TFNG, 1),
          mc('True, False or Not Given? "Parks improve the quality of residents\' sleep."', TFNG, 2)
        ]
      },
      write: { p: 'Escribe 3 afirmaciones sobre el texto de lectura (una verdadera, una falsa y una que no se mencione) y marca cuál es cuál. Así practicas pensar como el examen.', m: 'True: Parks are linked to lower stress. False: Parks always cost less than transport. Not Given: Parks make people sleep better.' },
      q: 'IELTS reading true false not given strategy explained',
      listen: { d: [['Teacher', 'In the exam, do not read every word of the passage first.'], ['Student', 'So what should I do?'], ['Teacher', 'Skim the text for the main idea, then read the questions and underline the keywords.'], ['Student', 'And for True, False, Not Given?'], ['Teacher', 'Remember: if the text does not mention it, it is Not Given. Never use your own knowledge.'], ['Student', 'Understood. I will also move on if a question takes more than a minute and a half.']],
        q: [mc('¿Qué se debe hacer primero?', ['Skim the text', 'Translate every word', 'Write the essay'], 0), mc('¿Cuándo se elige Not Given?', ['When the text does not mention it', 'When you disagree', 'When it is difficult'], 0), mc('¿Cuánto tiempo máximo en una pregunta?', ['About a minute and a half', 'Ten minutes', 'Thirty seconds exactly'], 0)] },
      quiz: [
        mc('The text says the opposite of the statement. Choose…', TFNG, 1),
        mc('The statement is about something the text never mentions. Choose…', TFNG, 2),
        mc('The text says the same thing in different words. Choose…', TFNG, 0),
        mc('In "matching headings", the extra headings are…', ['distractors', 'answers', 'questions'], 0),
        mc('Which is the best first step with a new passage?', ['Skim for the main idea', 'Read the last paragraph only', 'Start with the hardest question'], 0),
        fill('Do not spend too long on one question: ___ on. (move)', 'move'),
        order('Si no se menciona, elige No dado.', 'If it is not mentioned, choose Not Given.'),
        hear(['Scan the text for a date.', 'Scam the text for a date.', 'Skin the text for a date.'], 0, 'Se oía «scan».')
      ]
    },

    {
      id: 'x02', track: 'exam', level: 'B2', title: 'Escucha de examen: predecir, palabras guía y distractores', en: 'Exam listening strategies',
      explain:
        '<p>En el examen de escucha <b>el audio suena una sola vez</b> (IELTS: 30 min, 4 secciones, 40 preguntas; TOEFL: conversaciones, anuncios y charlas académicas).</p>' +
        '<ol><li><b>Antes del audio, predice:</b> lee las preguntas y piensa qué tipo de dato falta (¿número? ¿nombre? ¿lugar?).</li>' +
        '<li><b>Escucha palabras guía</b> (<i lang="en">signposts</i>): <i lang="en">however, in fact, on the other hand, first, finally</i>. Después de «however» suele venir la información importante.</li>' +
        '<li><b>Cuidado con los distractores:</b> el hablante se corrige. <i lang="en">The meeting is on Tuesday… no, sorry, Thursday.</i> → la respuesta es <b>Thursday</b>.</li>' +
        '<li><b>Respeta el límite de palabras</b> (<i lang="en">NO MORE THAN TWO WORDS</i>) y revisa la <b>ortografía</b>.</li>' +
        '<li><b>Si pierdes una respuesta, suéltala</b> y sigue: las preguntas van en orden.</li></ol>' +
        '<p>Números y deletreo: practica <i lang="en">fifteen / fifty</i>, <i lang="en">thirteen / thirty</i> y deletrear nombres (<i lang="en">B-R-O-W-N</i>).</p>',
      vocab: [
        ['predict', 'predecir', 'Predict the answer before you listen.'],
        ['signpost', 'palabra guía del discurso', 'Listen for signposts like however.'],
        ['spelling', 'ortografía', 'Check your spelling at the end.'],
        ['gap', 'espacio en blanco', 'Fill the gap with one word.'],
        ['word limit', 'límite de palabras', 'Do not exceed the word limit.'],
        ['accent', 'acento (de pronunciación)', 'You may hear different accents.'],
        ['detail', 'detalle', 'Focus on the key details.'],
        ['correct yourself', 'corregirse', 'Speakers often correct themselves.'],
        ['lecture', 'clase magistral, charla académica', 'The lecture is about climate change.'],
        ['announcement', 'anuncio', 'Listen to the announcement carefully.']
      ],
      ex: [
        mc('Before the audio starts, you should…', ['read the questions and predict', 'close your eyes', 'translate the title'], 0),
        mc('"However" usually signals…', ['a contrast or important information', 'the end of the test', 'a greeting'], 0),
        mc('The speaker says: "It is on Tuesday… no, sorry, Thursday." The answer is…', ['Thursday', 'Tuesday', 'Not given'], 0),
        fill('Do not exceed the word ___ . (limit)', 'limit'),
        mc('If you miss one answer, you should…', ['move on to the next question', 'stop the test', 'guess the whole section'], 0),
        hear(['fifteen', 'fifty', 'five'], 0, 'Se oía «fifteen».')
      ],
      read: {
        t: "Listening exams are difficult because the recording is played only once. Experts recommend three habits. First, read the questions before the audio starts and predict what kind of information is missing, such as a number or a name. Second, listen for signpost words such as however or finally, because they show where the speaker is going next. Third, remember that speakers sometimes change their mind: the first answer you hear may be a distractor. Finally, check your spelling and the word limit, since one extra word can make an answer wrong.",
        tr: 'Los exámenes de escucha son difíciles porque la grabación se reproduce una sola vez. Los expertos recomiendan tres hábitos. Primero, leer las preguntas antes de que empiece el audio y predecir qué tipo de información falta, como un número o un nombre. Segundo, escuchar palabras guía como «however» o «finally», porque muestran hacia dónde va el hablante. Tercero, recordar que a veces los hablantes cambian de idea: la primera respuesta que oyes puede ser un distractor. Por último, revisar la ortografía y el límite de palabras, ya que una palabra de más puede invalidar una respuesta.',
        q: [mc('Why are listening exams difficult?', ['The recording is played only once', 'The questions are secret', 'The audio is always long'], 0), mc('What do signpost words show?', ['Where the speaker is going next', 'The speaker\'s age', 'The exam score'], 0), mc('Why can one extra word be a problem?', ['It can make the answer wrong', 'It improves the answer', 'It is never counted'], 0)]
      },
      write: { p: 'Escribe tus 3 reglas personales para el examen de escucha (por ejemplo: leer preguntas antes, soltar una respuesta perdida, revisar ortografía).', m: 'Before the audio, I read the questions. I listen for words like however. If I miss an answer, I move on.' },
      q: 'IELTS listening tips predict signpost words distractors',
      listen: { d: [['Receptionist', 'The tour starts at ten thirty, not ten fifteen. Sorry, I made a mistake.'], ['Visitor', 'So it is ten thirty. Where do we meet?'], ['Receptionist', 'At the main entrance. However, if it rains, we will meet in the hall.'], ['Visitor', 'And the price?'], ['Receptionist', 'Fifteen dollars per person. Please bring your student card.']],
        q: [mc('¿A qué hora empieza el tour?', ['10:30', '10:15', '11:00'], 0), mc('¿Dónde se reúnen si llueve?', ['In the hall', 'At the entrance', 'At the park'], 0), mc('¿Cuánto cuesta?', ['Fifteen dollars', 'Fifty dollars', 'Five dollars'], 0)] },
      quiz: [
        mc('Why is "however" an important signpost?', ['It often introduces key information', 'It means the audio ends', 'It repeats the question'], 0),
        mc('A "distractor" in listening is…', ['a wrong answer you hear first', 'the right answer', 'background music'], 0),
        mc('You should read the questions…', ['before the audio', 'after the audio', 'never'], 0),
        mc('The limit says "NO MORE THAN TWO WORDS". Which answer is allowed?', ['student card', 'a student card of the school', 'the old student card'], 0),
        mc('"Predict" means to…', ['guess what information is missing', 'translate', 'repeat'], 0),
        hear(['thirteen', 'thirty', 'three'], 1, 'Se oía «thirty».'),
        fill('Speakers often ___ themselves. (correct)', 'correct'),
        order('Lee las preguntas antes de que empiece el audio.', 'Read the questions before the audio starts.')
      ]
    },

    {
      id: 'x03', track: 'exam', level: 'B2', title: 'Escritura de examen: ensayo de opinión y discusión académica', en: 'Exam writing: opinion essay',
      explain:
        '<p>Dos formatos frecuentes: <b>IELTS Writing Task 2</b> (ensayo de <b>mínimo 250 palabras</b>, ~40 min) y <b>TOEFL Write for an Academic Discussion</b> (respuesta breve, ~100 palabras o más, ~10 min). Ambos piden: <b>postura clara + razones + ejemplos + lenguaje variado</b>.</p>' +
        '<table><tr><th>Parte</th><th>Qué escribir</th><th>Frases</th></tr>' +
        '<tr><td>Introducción</td><td>reformula el tema + tu postura</td><td><i lang="en">Some people believe that… In my opinion…</i></td></tr>' +
        '<tr><td>Cuerpo 1</td><td>razón + explicación + ejemplo</td><td><i lang="en">Firstly… This is because… For instance…</i></td></tr>' +
        '<tr><td>Cuerpo 2</td><td>otra razón o el otro lado</td><td><i lang="en">On the other hand… Admittedly…</i></td></tr>' +
        '<tr><td>Conclusión</td><td>resume sin ideas nuevas</td><td><i lang="en">In conclusion, … / Overall, …</i></td></tr></table>' +
        '<p><b>Qué evalúan</b> (IELTS): respuesta a la tarea, coherencia y cohesión, vocabulario, gramática. En la discusión académica del TOEFL: <b>responde a lo que dijeron los otros</b> y añade tu propia idea.</p>' +
        '<p>Errores típicos: no responder a la pregunta, copiar la pregunta tal cual, frases muy largas sin puntuación, y no revisar el conteo de palabras.</p>',
      vocab: [
        ['position', 'postura', 'State your position in the introduction.'],
        ['argument', 'argumento', 'Support each argument with an example.'],
        ['counterargument', 'contraargumento', 'Mention one counterargument briefly.'],
        ['conclusion', 'conclusión', 'Summarise your view in the conclusion.'],
        ['cohesion', 'cohesión', 'Linking words improve cohesion.'],
        ['word count', 'número de palabras', 'Check the word count before submitting.'],
        ['admittedly', 'es cierto que', 'Admittedly, the cost is high.'],
        ['overall', 'en general', 'Overall, I agree with this view.'],
        ['paragraph', 'párrafo', 'Each paragraph has one main idea.'],
        ['agree', 'estar de acuerdo', 'I partly agree with this statement.']
      ],
      ex: [
        mc('A good introduction…', ['restates the topic and gives your opinion', 'tells a long story', 'copies the question'], 0),
        mc('Each body paragraph should have…', ['one main idea with an example', 'five unrelated ideas', 'only a quotation'], 0),
        mc('Which phrase introduces an example?', ['For instance', 'In conclusion', 'On the contrary'], 0),
        fill('In ___ , I strongly believe that education is key. (conclusion)', 'conclusion'),
        mc('IELTS Writing Task 2 requires at least…', ['250 words', '50 words', '1000 words'], 0),
        order('Apoya cada argumento con un ejemplo.', 'Support each argument with an example.')
      ],
      read: {
        t: "Question: Some people think that students should learn online instead of in classrooms. Do you agree or disagree? Sample answer: It is often argued that online learning should replace traditional classes. In my opinion, online study is useful, but it cannot completely replace classrooms. Firstly, online courses give students flexibility. For instance, workers can study at night after their jobs. However, classrooms offer direct contact with teachers and classmates, which improves motivation and communication skills. Admittedly, online platforms can be cheaper. Nevertheless, many students need face-to-face support to stay focused. In conclusion, a combination of both methods is the best solution.",
        tr: 'Pregunta: Algunas personas piensan que los estudiantes deberían aprender en línea en lugar de en aulas. ¿Estás de acuerdo o en desacuerdo? Respuesta modelo: A menudo se sostiene que el aprendizaje en línea debería reemplazar las clases tradicionales. En mi opinión, estudiar en línea es útil, pero no puede reemplazar por completo las aulas. En primer lugar, los cursos en línea dan flexibilidad. Por ejemplo, quienes trabajan pueden estudiar de noche. Sin embargo, las aulas ofrecen contacto directo con profesores y compañeros, lo que mejora la motivación y las habilidades de comunicación. Es cierto que las plataformas en línea pueden ser más baratas. Aun así, muchos estudiantes necesitan apoyo presencial para mantenerse concentrados. En conclusión, una combinación de ambos métodos es la mejor solución.',
        q: [mc('What is the writer\'s position?', ['A mix of online and classroom learning', 'Only online learning', 'Only classrooms'], 0), mc('Which example supports online learning?', ['Workers can study at night', 'Teachers are friendly', 'Classrooms are big'], 0), mc('Which word introduces the concession?', ['Admittedly', 'Firstly', 'In conclusion'], 0)]
      },
      write: { p: 'Escribe una mini respuesta (mínimo 60 palabras) a: "Do you think social media does more harm than good?" Con postura, una razón con ejemplo y una conclusión breve.', m: 'In my opinion, social media does both harm and good. Firstly, it connects people, for instance family who live abroad. However, it can reduce sleep and focus. Admittedly, some apps help students learn. Overall, I think the benefits are bigger if people use it carefully.' },
      q: 'IELTS writing task 2 opinion essay structure band 7 example',
      listen: { d: [['Examiner', 'How should I start my essay?'], ['Teacher', 'Restate the topic in your own words and give your opinion clearly.'], ['Examiner', 'And the body paragraphs?'], ['Teacher', 'One idea per paragraph, with an explanation and a specific example.'], ['Examiner', 'What about the ending?'], ['Teacher', 'Summarise your view in the conclusion. Do not add new ideas, and always check the word count.']],
        q: [mc('¿Cómo se empieza el ensayo?', ['Restate the topic and give an opinion', 'With a joke', 'With the conclusion'], 0), mc('¿Cuántas ideas por párrafo?', ['One', 'Five', 'None'], 0), mc('¿Qué no se debe añadir en la conclusión?', ['New ideas', 'A summary', 'The word count'], 0)] },
      quiz: [
        mc('"Admittedly" introduces…', ['a concession', 'a conclusion', 'a question'], 0),
        mc('The conclusion should…', ['summarise without new ideas', 'add three new arguments', 'copy the introduction'], 0),
        mc('In the TOEFL academic discussion, you should…', ['respond to the other students and add your idea', 'ignore the others', 'only write one word'], 0),
        mc('Which linking word shows contrast?', ['However', 'For example', 'Firstly'], 0),
        mc('What does "cohesion" mean in writing?', ['ideas are connected smoothly', 'words are long', 'the text is short'], 0),
        fill('Check the word ___ before you finish. (count)', 'count'),
        order('En mi opinión, la educación en línea es útil.', 'In my opinion, online education is useful.'),
        hear(['In conclusion, I disagree.', 'In confusion, I disagree.', 'In conversation, I disagree.'], 0, 'Se oía «conclusion».')
      ]
    },

    {
      id: 'x04', track: 'exam', level: 'B2', title: 'Habla de examen: tarjeta de tema y entrevista', en: 'Exam speaking strategies',
      explain:
        '<p>El examen de habla evalúa <b>fluidez, vocabulario, gramática y pronunciación</b>. No necesitas «perfecto»: necesitas <b>hablar con continuidad y claridad</b>.</p>' +
        '<table><tr><th>Examen</th><th>Formato</th></tr>' +
        '<tr><td>IELTS Speaking (11–14 min)</td><td><b>Parte 1</b>: preguntas personales.<br><b>Parte 2</b>: tarjeta de tema, 1 min de preparación y 1–2 min hablando.<br><b>Parte 3</b>: discusión más abstracta.</td></tr>' +
        '<tr><td>TOEFL iBT (2026)</td><td><b>Listen and Repeat</b> (repetir frases) y <b>Take an Interview</b> (responder preguntas con tiempo limitado).</td></tr></table>' +
        '<p><b>Fórmula para cualquier respuesta (APE):</b> <b>A</b>nswer (responde directo) → <b>P</b>oint/<b>R</b>eason (razón con <i lang="en">because</i>) → <b>E</b>xample (<i lang="en">for instance…</i>). Así llegas a 30–45 segundos sin quedarte en blanco.</p>' +
        '<p><b>Si dudas:</b> usa frases puente como <i lang="en">Well, let me think… / That is an interesting question…</i> y <b>parafrasea</b> si olvidas una palabra: <i lang="en">It is a thing you use to…</i>. No te quedes en silencio ni pidas disculpas largas.</p>' +
        '<p>En la Parte 3 se te pide <b>especular y comparar</b>: <i lang="en">In the future, I think people will probably… compared to the past…</i></p>',
      vocab: [
        ['cue card', 'tarjeta de tema (Parte 2 del IELTS)', 'The cue card lists four prompts.'],
        ['fluency', 'fluidez', 'Fluency matters more than perfect grammar.'],
        ['extend', 'ampliar tu respuesta', 'Extend your answer with a reason.'],
        ['for instance', 'por ejemplo', 'For instance, I study at night.'],
        ['speculate', 'especular, suponer', 'In Part 3 you speculate about the future.'],
        ['filler', 'muletilla', 'Use fillers like well sparingly.'],
        ['pause', 'pausa', 'A short pause is natural.'],
        ['hesitate', 'dudar, titubear', 'Do not hesitate for too long.'],
        ['vary', 'variar', 'Vary your vocabulary and structures.'],
        ['interview', 'entrevista', 'The test includes a short interview.']
      ],
      ex: [
        mc('A good answer usually includes…', ['a reason and an example', 'only yes or no', 'a long silence'], 0),
        mc('In IELTS Speaking Part 2 you get…', ['one minute to prepare', 'ten minutes to prepare', 'no time to prepare'], 0),
        mc('To extend an answer you can say…', ['because…', 'yes.', 'I do not know.'], 0),
        fill('If you forget a word, ___ it with other words. (paraphrase)', 'paraphrase'),
        mc('Which phrase gives you time to think?', ['That is an interesting question.', 'I give up.', 'Next question.'], 0),
        order('Amplía tu respuesta con una razón.', 'Extend your answer with a reason.')
      ],
      read: {
        t: "Question: Describe a skill that you would like to learn. Sample answer: I would like to learn how to program. Well, I am studying information systems, so it is closely related to my career. The main reason is that programming opens many job opportunities. For instance, my cousin learned Python last year and found a job in two months. I have already started with online tutorials, but I find it hard to practise every day. In the future, I hope to build my own application. Overall, I think it is the most useful skill for my generation.",
        tr: 'Pregunta: Describe una habilidad que te gustaría aprender. Respuesta modelo: Me gustaría aprender a programar. Bueno, estudio sistemas de información, así que está muy relacionado con mi carrera. La razón principal es que programar abre muchas oportunidades de trabajo. Por ejemplo, mi primo aprendió Python el año pasado y encontró trabajo en dos meses. Ya empecé con tutoriales en línea, pero me cuesta practicar todos los días. En el futuro espero crear mi propia aplicación. En general, creo que es la habilidad más útil para mi generación.',
        q: [mc('What skill does the speaker want to learn?', ['Programming', 'Cooking', 'Painting'], 0), mc('What example does the speaker give?', ['A cousin who found a job', 'A famous company', 'A university course'], 0), mc('What is the speaker\'s problem?', ['Practising every day', 'Finding tutorials', 'Buying a computer'], 0)]
      },
      write: { p: 'Escribe (y luego di en voz alta) una respuesta de 5 frases a: "Describe a place you would like to visit." Usa Answer, Reason y For instance.', m: 'I would like to visit Japan. The main reason is that I love technology. For instance, the trains are fast and modern. I also want to try the food. Overall, it is my dream trip.' },
      q: 'IELTS speaking part 2 cue card answer example band 7',
      listen: { d: [['Examiner', 'Describe a skill you would like to learn. You have one minute to prepare.'], ['Candidate', 'Well, I would like to learn how to program. The main reason is that it will help my career.'], ['Examiner', 'Can you give an example?'], ['Candidate', 'Of course. For instance, my cousin learned Python and found a job within two months.'], ['Examiner', 'In the future, do you think more people will learn this skill?'], ['Candidate', 'Probably, yes. Compared to the past, technology is now part of almost every job.']],
        q: [mc('¿Cuánto tiempo hay para preparar?', ['One minute', 'Ten minutes', 'No time'], 0), mc('¿Qué ejemplo da el candidato?', ['His cousin got a job', 'A famous programmer', 'A school project'], 0), mc('¿Qué predice para el futuro?', ['More people will learn it', 'Nobody will learn it', 'It will disappear'], 0)] },
      quiz: [
        mc('The APE formula means…', ['Answer, Point/Reason, Example', 'Ask, Pause, End', 'Apologise, Pray, Escape'], 0),
        mc('In Part 3 the questions are…', ['more abstract and about the future or society', 'only about your name', 'only about your family'], 0),
        mc('If you forget a word, you should…', ['paraphrase and keep speaking', 'stay silent', 'switch to Spanish'], 0),
        mc('"Fluency" means speaking…', ['smoothly and continuously', 'very quietly', 'with no mistakes at all'], 0),
        mc('Which is better at the start of an answer?', ['Well, let me think about that.', 'No idea.', 'Skip.'], 0),
        fill('For ___ , I practise English every night. (instance)', 'instance'),
        order('Creo que probablemente más gente aprenderá a programar.', 'I think more people will probably learn to program.'),
        hear(['Describe a skill.', 'Describe a school.', 'Describe a scale.'], 0, 'Se oía «skill».')
      ]
    }

  );
})();
