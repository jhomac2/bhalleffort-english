/* Estrategias de examen, nivel C1: x05 a x08 (IELTS Academic y TOEFL iBT, nivel avanzado). Preguntas originales, no oficiales. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  var YNNG = ['Yes', 'No', 'Not Given'];
  EL.lessons.push(

    {
      id: 'x05', track: 'exam', level: 'C1', title: 'Lectura académica: inferencia, actitud del autor y resumen', en: 'Academic reading: inference and writer\'s view',
      explain:
        '<p>En nivel avanzado las preguntas dejan de ser «busca el dato». Piden <b>entender lo que el texto implica</b>.</p>' +
        '<table><tr><th>Tipo de pregunta</th><th>Cómo resolverla</th></tr>' +
        '<tr><td><i lang="en">Yes / No / Not Given</i></td><td>trata de la <b>opinión del autor</b> (no de hechos). <i lang="en">Yes</i> = coincide con su opinión; <i lang="en">No</i> = la contradice; <i lang="en">Not Given</i> = no la expresa.</td></tr>' +
        '<tr><td><i lang="en">Inference</i></td><td>la respuesta no está escrita: se deduce. Palabras: <i lang="en">implies, suggests, can be inferred</i>.</td></tr>' +
        '<tr><td><i lang="en">Writer\'s attitude</i></td><td>fíjate en adjetivos y adverbios: <i lang="en">sceptical, cautious, critical, enthusiastic, neutral</i>.</td></tr>' +
        '<tr><td><i lang="en">Summary completion</i></td><td>lee el resumen entero, predice el tipo de palabra (sustantivo, verbo, adjetivo) y respeta el límite de palabras.</td></tr>' +
        '<tr><td><i lang="en">Vocabulary in context</i> (TOEFL)</td><td>elige el significado que encaja <b>en esa frase</b>, no el más común.</td></tr></table>' +
        '<p><b>Trampas:</b> opciones con palabras extremas (<i lang="en">always, never, all</i>) casi nunca son correctas; una opción puede ser <b>verdadera en el texto pero no responde la pregunta</b>.</p>' +
        '<p>Para el <b>tono</b> del autor: el hedging (<i lang="en">arguably, may</i>) indica cautela; las comillas con ironía (<i lang="en">so-called</i>) indican escepticismo.</p>',
      vocab: [
        ['infer', 'inferir', 'We can infer that the author disagrees.'],
        ['imply', 'dar a entender', 'The text implies a hidden problem.'],
        ['attitude', 'actitud', 'The writer\'s attitude is sceptical.'],
        ['sceptical', 'escéptico', 'The author is sceptical about the claim.'],
        ['cautious', 'cauteloso', 'The tone of the report is cautious.'],
        ['so-called', 'supuesto, llamado así (con ironía)', 'The so-called experts disagreed.'],
        ['summary', 'resumen', 'Complete the summary with one word.'],
        ['claim', 'afirmación', 'The writer disputes this claim.'],
        ['in context', 'en contexto', 'Choose the meaning in context.'],
        ['extreme', 'extremo', 'Extreme words are often wrong.']
      ],
      ex: [
        mc('"Yes / No / Not Given" questions are about…', ['the writer\'s opinion', 'dates and numbers only', 'the title'], 0),
        mc('An "inference" is something that…', ['is suggested, not written directly', 'is written exactly', 'is false'], 0),
        mc('If the writer says "so-called experts", the tone is…', ['sceptical', 'enthusiastic', 'neutral and warm'], 0),
        fill('Extreme words like always and never are often ___ . (wrong)', 'wrong'),
        mc('In "vocabulary in context" you choose the meaning that…', ['fits that sentence', 'is most common', 'is the longest'], 0),
        order('El autor es escéptico sobre esta afirmación.', 'The author is sceptical about this claim.')
      ],
      read: {
        t: "The notion that listening to classical music makes children more intelligent has been repeated for decades, usually by companies selling recordings. Yet the original experiment, which involved only a small group of adults, found a brief improvement in one type of spatial task, and this effect lasted about fifteen minutes. Subsequent research has largely failed to reproduce even this modest result. It may well be that any enjoyable activity temporarily improves concentration, which would explain the earlier findings. Parents are, of course, free to play Mozart at home, but the so-called \"Mozart effect\" should not be treated as a substitute for reading, conversation or play.",
        tr: 'La idea de que escuchar música clásica hace más inteligentes a los niños se ha repetido durante décadas, normalmente por empresas que venden grabaciones. Sin embargo, el experimento original, que involucró solo a un pequeño grupo de adultos, encontró una mejora breve en un tipo de tarea espacial, y ese efecto duró unos quince minutos. Investigaciones posteriores han fracasado en gran parte en reproducir incluso este modesto resultado. Es muy posible que cualquier actividad agradable mejore temporalmente la concentración, lo que explicaría los hallazgos anteriores. Los padres son, por supuesto, libres de poner a Mozart en casa, pero el supuesto «efecto Mozart» no debe tratarse como sustituto de la lectura, la conversación o el juego.',
        q: [
          mc('Do you agree with the writer? "The Mozart effect has been strongly confirmed by later studies."', YNNG, 1),
          mc('Which word best describes the writer\'s attitude to the "Mozart effect"?', ['Sceptical', 'Enthusiastic', 'Indifferent'], 0),
          mc('What does the writer suggest might explain the original results?', ['Enjoyable activities improve concentration for a short time', 'Classical music changes the brain permanently', 'Adults are smarter than children'], 0)
        ]
      },
      write: { p: 'Escribe 3 frases sobre el texto: una inferencia que se pueda deducir, una afirmación del autor y una pregunta Yes/No/Not Given (con su respuesta).', m: 'It can be inferred that companies benefit from the claim. The writer says the effect lasted only fifteen minutes. Statement: "Mozart makes adults happier." Answer: Not Given.' },
      q: 'IELTS reading yes no not given writer\'s views inference strategy',
      listen: { d: [['Tutor', 'This question asks about the writer\'s view. Is it a fact or an opinion?'], ['Student', 'An opinion. So I should look for words like arguably or so-called.'], ['Tutor', 'Exactly. What if the text neither agrees nor disagrees with the statement?'], ['Student', 'Then the answer is Not Given.'], ['Tutor', 'Correct. And remember: an option can be true in the text but still not answer the question.']],
        q: [mc('¿De qué tratan las preguntas Yes/No/Not Given?', ['The writer\'s view', 'Dates', 'The title'], 0), mc('¿Qué palabras sirven como pista del tono?', ['Arguably, so-called', 'Table, chair', 'One, two'], 0), mc('¿Cuándo se elige Not Given?', ['When the text neither agrees nor disagrees', 'When it is difficult', 'When it is short'], 0)] },
      quiz: [
        mc('The writer says "so-called experts". The attitude is…', ['sceptical', 'admiring', 'neutral'], 0),
        mc('The text neither supports nor contradicts the statement. Choose…', YNNG, 2),
        mc('The text clearly disagrees with the statement. Choose…', YNNG, 1),
        mc('"Imply" means to…', ['suggest without saying directly', 'say very loudly', 'repeat'], 0),
        mc('Which option is most likely wrong?', ['All students always pass.', 'Some students may improve.', 'Results vary.'], 0),
        fill('Answers to inference questions must be ___ from the text. (inferred)', 'inferred'),
        order('El texto da a entender que hay un problema oculto.', 'The text implies that there is a hidden problem.'),
        hear(['She is sceptical.', 'She is septic.', 'She is practical.'], 0, 'Se oía «sceptical».')
      ]
    },

    {
      id: 'x06', track: 'exam', level: 'C1', title: 'Escritura avanzada: describir datos y ensayo de nivel alto', en: 'Advanced writing: describing data and high-band essays',
      explain:
        '<p><b>IELTS Writing Task 1 (Academic):</b> describir un gráfico o tabla en <b>mínimo 150 palabras</b>, ~20 minutos. <b>No des opiniones ni causas</b>: solo describe.</p>' +
        '<table><tr><th>Parte</th><th>Qué escribir</th></tr>' +
        '<tr><td>Introducción</td><td>reformula el título: <i lang="en">The graph shows the number of…</i></td></tr>' +
        '<tr><td>Overview</td><td><b>obligatorio</b>: 2 tendencias generales. <i lang="en">Overall, sales rose while costs remained stable.</i></td></tr>' +
        '<tr><td>Detalle 1 y 2</td><td>datos concretos agrupados con comparaciones</td></tr></table>' +
        '<p><b>Lenguaje de tendencias:</b> <i lang="en">rose / increased / climbed</i>, <i lang="en">fell / declined / dropped</i>, <i lang="en">peaked at</i>, <i lang="en">fluctuated</i>, <i lang="en">remained stable</i>; adjetivos <i lang="en">sharp, steady, slight, dramatic</i>; aproximación <i lang="en">roughly, approximately, just over, nearly</i>.</p>' +
        '<p><b>Ensayo de nivel alto (band 7+):</b> postura clara en todo el texto, ideas desarrolladas con ejemplos, <b>vocabulario menos común</b> usado con precisión, <b>estructuras variadas</b> (condicionales, pasivas, inversión), cohesión sin abusar de conectores.</p>' +
        '<p>Errores que bajan puntaje: memorizar plantillas, repetir palabras de la pregunta, olvidar el overview, datos sin agrupar.</p>',
      vocab: [
        ['overall', 'en general', 'Overall, sales rose steadily.'],
        ['peak', 'alcanzar el máximo', 'Sales peaked at ten thousand units.'],
        ['fluctuate', 'fluctuar', 'Prices fluctuated during the year.'],
        ['remain stable', 'mantenerse estable', 'Costs remained stable throughout.'],
        ['sharp', 'brusco', 'There was a sharp decline in July.'],
        ['steady', 'constante', 'A steady increase followed.'],
        ['approximately', 'aproximadamente', 'Approximately half of the users left.'],
        ['whereas', 'mientras que', 'Sales rose whereas costs fell.'],
        ['account for', 'representar (una proporción)', 'Women accounted for forty percent.'],
        ['by contrast', 'en cambio', 'By contrast, exports declined.']
      ],
      ex: [
        mc('In Task 1 you should NOT…', ['give your personal opinion', 'write an overview', 'compare figures'], 0),
        mc('The "overview" is…', ['a summary of the main trends', 'an opinion', 'a conclusion with advice'], 0),
        mc('Sales ___ at ten thousand units in June.', ['peaked', 'peaks', 'peak'], 0),
        fill('Costs ___ stable throughout the period. (remained)', 'remained'),
        mc('Which means "aproximadamente"?', ['roughly', 'exactly', 'never'], 0),
        order('En general, las ventas subieron de forma constante.', 'Overall, sales rose steadily.')
      ],
      read: {
        t: "The line graph shows the number of online users in three countries between 2010 and 2020. Overall, usage rose in all three countries, although the pace of growth differed considerably. In 2010, roughly 20 percent of Country A's population was online, compared with just over 10 percent in Country B. By 2020, Country A had climbed to approximately 85 percent, whereas Country B reached only 50 percent after a steady increase. Country C, by contrast, fluctuated between 30 and 40 percent for most of the decade before rising sharply in the final two years to nearly 70 percent.",
        tr: 'El gráfico de líneas muestra el número de usuarios en línea en tres países entre 2010 y 2020. En general, el uso aumentó en los tres países, aunque el ritmo de crecimiento difirió considerablemente. En 2010, aproximadamente el 20 por ciento de la población del País A estaba en línea, frente a poco más del 10 por ciento en el País B. Para 2020, el País A había subido a aproximadamente 85 por ciento, mientras que el País B alcanzó solo 50 por ciento tras un aumento constante. El País C, en cambio, fluctuó entre 30 y 40 por ciento durante la mayor parte de la década antes de subir bruscamente en los dos últimos años a casi 70 por ciento.',
        q: [mc('What is the overall trend?', ['Usage rose in all three countries', 'Usage fell everywhere', 'Usage was stable'], 0), mc('Which country fluctuated for most of the decade?', ['Country C', 'Country A', 'Country B'], 0), mc('Which word shows a contrast?', ['By contrast', 'Overall', 'Roughly'], 0)]
      },
      write: { p: 'Escribe un overview y dos frases de detalle (mínimo 45 palabras) para estos datos inventados: ventas 2019 = 100, 2020 = 60, 2021 = 150. Usa un verbo de tendencia y una aproximación.', m: 'Overall, sales fell sharply in 2020 before recovering strongly. In 2019 sales were 100 units, but they dropped to roughly 60 in 2020. By 2021, sales had risen to approximately 150, the highest figure of the period.' },
      q: 'IELTS writing task 1 line graph overview trends language band 7',
      listen: { d: [['Teacher', 'In Task 1, never give opinions. Describe only what you can see.'], ['Student', 'What should I write first?'], ['Teacher', 'Restate the title, then write an overview with the two main trends.'], ['Student', 'And the details?'], ['Teacher', 'Group similar data and compare them. Use words like whereas, by contrast, and roughly.']],
        q: [mc('¿Qué no se debe dar en Task 1?', ['Opinions', 'Numbers', 'Comparisons'], 0), mc('¿Qué va después del título?', ['An overview', 'A conclusion', 'A story'], 0), mc('¿Qué palabras sugiere para comparar?', ['Whereas and by contrast', 'First and then', 'Yes and no'], 0)] },
      quiz: [
        mc('Which verb describes a change from 40 to 80?', ['doubled', 'peaked at 40', 'remained stable'], 0),
        mc('"Fluctuate" means…', ['go up and down', 'go straight up', 'stay still'], 0),
        mc('A band 7+ essay uses…', ['a range of structures and precise vocabulary', 'memorised templates', 'very short sentences only'], 0),
        mc('"Account for 40 percent" means…', ['represent 40 percent', 'explain why', 'count to 40'], 0),
        mc('The minimum for Task 1 is…', ['150 words', '50 words', '500 words'], 0),
        fill('Sales ___ sharply in July. (fell)', 'fell'),
        order('Los costos se mantuvieron estables durante el periodo.', 'Costs remained stable during the period.'),
        hear(['Sales peaked in June.', 'Sales picked in June.', 'Sales packed in June.'], 0, 'Se oía «peaked».')
      ]
    },

    {
      id: 'x07', track: 'exam', level: 'C1', title: 'Escucha académica: charlas y apuntes', en: 'Academic listening and note-taking',
      explain:
        '<p>En nivel avanzado escuchas <b>charlas académicas</b> (IELTS Sección 4: un monólogo sin pausa; TOEFL: conversaciones y charlas). El reto: <b>seguir la estructura</b> mientras tomas notas.</p>' +
        '<ol><li><b>Estructura típica:</b> introducción del tema → 2 o 3 ideas principales con ejemplos → conclusión.</li>' +
        '<li><b>Palabras guía:</b> <i lang="en">To begin with… / In contrast… / What this means is… / The key point here… / As a result…</i></li>' +
        '<li><b>Toma notas con símbolos</b> y abreviaturas, no frases: <i lang="en">↑ = increase, → = leads to, w/ = with, e.g.</i></li>' +
        '<li><b>Escucha el propósito del hablante:</b> ¿explica, compara, critica, propone, duda?</li>' +
        '<li><b>Entonación:</b> un tono ascendente y pausa antes de una palabra suele marcar algo importante.</li></ol>' +
        '<p><b>Distractores avanzados:</b> el profesor menciona una idea y después la refuta (<i lang="en">Some people believe… but in fact…</i>). La respuesta es lo que viene después del <i lang="en">but in fact</i>.</p>' +
        '<p>Práctica diaria: escucha una charla corta, escribe 5 notas, y resume en dos frases.</p>',
      vocab: [
        ['lecture', 'charla académica', 'The lecture lasted forty minutes.'],
        ['note-taking', 'tomar apuntes', 'Good note-taking saves time later.'],
        ['abbreviation', 'abreviatura', 'Use abbreviations to write faster.'],
        ['to begin with', 'para empezar', 'To begin with, let us define the term.'],
        ['in contrast', 'en contraste', 'In contrast, the second theory is newer.'],
        ['what this means is', 'lo que esto significa es', 'What this means is we need more data.'],
        ['refute', 'refutar', 'The professor refuted the old theory.'],
        ['main idea', 'idea principal', 'Write the main idea first.'],
        ['purpose', 'propósito', 'What is the speaker\'s purpose?'],
        ['monologue', 'monólogo', 'Section four is a monologue.']
      ],
      ex: [
        mc('When taking notes you should write…', ['key words and symbols', 'every word', 'only the title'], 0),
        mc('"But in fact…" often introduces…', ['the real or corrected idea', 'a joke', 'the end of the talk'], 0),
        mc('The symbol "↑" means…', ['increase', 'decrease', 'stop'], 0),
        fill('"To begin ___ , let us define the term." (with)', 'with'),
        mc('A lecture often ends with…', ['a conclusion', 'a new topic', 'silence only'], 0),
        order('Anota palabras clave, no frases completas.', 'Write key words, not full sentences.')
      ],
      read: {
        t: "Effective note-taking is one of the most underrated skills in academic listening. Instead of writing complete sentences, successful students record key words, numbers and relationships between ideas. They use symbols, such as an arrow to show cause and effect, and abbreviations like \"e.g.\" for examples. They also listen for signpost phrases: expressions such as \"in contrast\" or \"what this means is\" tell the listener that the speaker is about to make an important point. After the lecture, they review their notes within twenty-four hours, since memory declines quickly without revision.",
        tr: 'Tomar buenos apuntes es una de las habilidades más subestimadas en la escucha académica. En lugar de escribir frases completas, los estudiantes exitosos registran palabras clave, números y relaciones entre ideas. Usan símbolos, como una flecha para mostrar causa y efecto, y abreviaturas como «e.g.» para ejemplos. También escuchan frases guía: expresiones como «in contrast» o «what this means is» indican al oyente que el hablante va a hacer un punto importante. Después de la clase, revisan sus apuntes en las primeras veinticuatro horas, ya que la memoria se deteriora rápidamente sin repaso.',
        q: [mc('What do successful students record?', ['Key words, numbers and relationships', 'Every full sentence', 'Only the speaker\'s name'], 0), mc('What do signpost phrases tell the listener?', ['An important point is coming', 'The talk is over', 'The speaker is tired'], 0), mc('When should notes be reviewed?', ['Within twenty-four hours', 'After a month', 'Never'], 0)]
      },
      write: { p: 'Escucha o lee una charla corta en inglés y escribe 5 apuntes con símbolos (↑ ↓ →) y un resumen de 2 frases.', m: 'Notes: ↑ temperature → ↓ crops; e.g. wheat; solution: new seeds. Summary: Rising temperatures reduce crops. New seeds may help farmers.' },
      q: 'academic lecture listening note-taking IELTS section 4 strategies',
      listen: { d: [['Professor', 'To begin with, let me define the term urban heat island. It means that cities are warmer than nearby rural areas.'], ['Professor', 'Some people believe that this is caused only by traffic. But in fact, buildings and roads absorb heat during the day and release it at night.'], ['Professor', 'What this means is that planting trees and using light-coloured roofs can reduce the effect. In contrast, adding more concrete increases it.'], ['Professor', 'To sum up, the main causes are materials and lack of vegetation, and the best solutions are green spaces and reflective surfaces.']],
        q: [mc('¿Qué es una isla de calor urbana?', ['Cities warmer than nearby rural areas', 'A hot island in the sea', 'A type of building'], 0), mc('¿Qué causa el efecto realmente?', ['Buildings and roads absorbing heat', 'Only traffic', 'Rain'], 0), mc('¿Qué soluciones menciona?', ['Trees and light-coloured roofs', 'More concrete', 'More roads'], 0)] },
      quiz: [
        mc('"What this means is…" signals…', ['an explanation or consequence', 'the end of the lecture', 'a joke'], 0),
        mc('After "Some people believe X, but in fact…" the answer is usually…', ['what follows "in fact"', 'X', 'neither'], 0),
        mc('Good note-taking uses…', ['abbreviations and symbols', 'full paragraphs', 'no notes'], 0),
        mc('"Refute" means to…', ['prove something wrong', 'repeat', 'record'], 0),
        mc('IELTS Section 4 is…', ['a monologue', 'a dialogue', 'a song'], 0),
        fill('Review your notes ___ twenty-four hours. (within)', 'within'),
        order('Para empezar, definamos el término.', 'To begin with, let us define the term.'),
        hear(['in contrast', 'in context', 'in control'], 0, 'Se oía «contrast».')
      ]
    },

    {
      id: 'x08', track: 'exam', level: 'C1', title: 'Habla avanzada: discurso extendido y especulación', en: 'Advanced speaking: extended discourse and speculation',
      explain:
        '<p>En C1 el examen premia <b>respuestas largas, organizadas y matizadas</b>. Ya no basta con una razón y un ejemplo.</p>' +
        '<table><tr><th>Función</th><th>Frases</th></tr>' +
        '<tr><td>Matizar</td><td><i lang="en">It depends on… / To a certain extent, … / In some cases, …</i></td></tr>' +
        '<tr><td>Comparar</td><td><i lang="en">Compared with the past, … / Whereas in the past, people used to…</i></td></tr>' +
        '<tr><td>Especular</td><td><i lang="en">I would imagine that… / It is likely that… / In the future, people might well…</i></td></tr>' +
        '<tr><td>Evaluar causas</td><td><i lang="en">One of the main reasons is… / This is largely due to…</i></td></tr>' +
        '<tr><td>Reformular</td><td><i lang="en">What I mean is… / In other words…</i></td></tr></table>' +
        '<p><b>Estructura de una respuesta de 1 minuto:</b> posición → razón principal → ejemplo personal → contraargumento o matiz → conclusión corta.</p>' +
        '<p><b>Qué evalúan:</b> fluidez y coherencia, vocabulario, gramática y <b>pronunciación (ritmo, acento de la frase y entonación)</b>. Los errores pequeños no te hunden; la <b>autocorrección natural</b> (<i lang="en">I mean…</i>) suma, no resta.</p>' +
        '<p><b>Evita:</b> respuestas memorizadas, decir «I don\'t know» sin más, hablar muy rápido sin pausas, y repetir siempre las mismas palabras.</p>',
      vocab: [
        ['it depends on', 'depende de', 'It depends on the situation.'],
        ['to a certain extent', 'hasta cierto punto', 'To a certain extent, I agree.'],
        ['compared with', 'comparado con', 'Compared with the past, life is faster.'],
        ['I would imagine', 'me imagino que', 'I would imagine that costs will rise.'],
        ['largely due to', 'debido en gran parte a', 'This is largely due to technology.'],
        ['what I mean is', 'lo que quiero decir es', 'What I mean is that it is complicated.'],
        ['likely', 'probable', 'It is likely that prices will rise.'],
        ['might well', 'muy posiblemente', 'People might well work from home.'],
        ['self-correct', 'autocorregirse', 'Good speakers self-correct naturally.'],
        ['coherent', 'coherente', 'Give a coherent and organised answer.']
      ],
      ex: [
        mc('Which phrase shows nuance?', ['It depends on the situation.', 'Yes.', 'No idea.'], 0),
        mc('A strong one-minute answer includes…', ['position, reason, example and a counterpoint', 'only one word', 'a memorised speech'], 0),
        mc('To speculate about the future you can say…', ['In the future, people might well work from home.', 'I like pizza.', 'Yesterday I went out.'], 0),
        fill('To a certain ___ , I agree with that. (extent)', 'extent'),
        mc('Self-correcting naturally (I mean…) is…', ['seen as a positive skill', 'always penalised', 'forbidden'], 0),
        order('Comparado con el pasado, la vida es más rápida.', 'Compared with the past, life is faster.')
      ],
      read: {
        t: "Question: Do you think technology will make people less sociable in the future? Sample answer: To a certain extent, yes. It depends on how people use it. Compared with the past, many of us spend hours on our phones, and this is largely due to apps designed to keep us online. For example, I often see friends at a café who barely talk to each other. However, technology also helps people stay in touch with relatives abroad. In my own case, video calls let me speak with my cousins every week. So, I would imagine that technology itself is neutral, and it is our habits that determine the result.",
        tr: 'Pregunta: ¿Crees que la tecnología hará a las personas menos sociables en el futuro? Respuesta modelo: Hasta cierto punto, sí. Depende de cómo la use la gente. Comparados con el pasado, muchos pasamos horas en el celular, y esto se debe en gran parte a aplicaciones diseñadas para mantenernos conectados. Por ejemplo, a menudo veo amigos en un café que apenas hablan entre ellos. Sin embargo, la tecnología también ayuda a mantener contacto con familiares en el extranjero. En mi caso, las videollamadas me permiten hablar cada semana con mis primos. Así que me imagino que la tecnología en sí es neutral, y que son nuestros hábitos los que determinan el resultado.',
        q: [mc('What is the speaker\'s opinion?', ['It depends on how people use technology', 'Technology is always bad', 'Technology is always good'], 0), mc('What example supports the negative side?', ['Friends barely talking at a café', 'Video calls', 'Online shopping'], 0), mc('What conclusion does the speaker reach?', ['Technology is neutral; habits determine the result', 'Phones should be banned', 'People never change'], 0)]
      },
      write: { p: 'Escribe y luego di en voz alta una respuesta de 6 frases a: "Will people read fewer books in the future?" Incluye posición, razón, ejemplo, matiz (It depends on…) y especulación.', m: 'To a certain extent, yes. It depends on whether schools encourage reading. Compared with the past, people have more entertainment options. For example, many teenagers prefer videos. However, audiobooks are growing. I would imagine that reading will change shape rather than disappear.' },
      q: 'IELTS speaking part 3 band 8 extended answers speculating comparing',
      listen: { d: [['Examiner', 'Do you think people will work from home more in the future?'], ['Candidate', 'To a certain extent, yes. It depends on the industry. Compared with the past, technology makes remote work much easier.'], ['Examiner', 'What might be the downsides?'], ['Candidate', 'I would imagine that isolation is the biggest one. What I mean is that people may miss casual contact with colleagues.'], ['Examiner', 'Thank you. Do you think companies will change their offices?'], ['Candidate', 'Quite possibly. They might well design them for collaboration rather than for individual desks.']],
        q: [mc('¿Cuál es la postura del candidato?', ['To a certain extent, yes', 'Absolutely not', 'No opinion'], 0), mc('¿Cuál cree que es la principal desventaja?', ['Isolation', 'Cost', 'Noise'], 0), mc('¿Qué predice sobre las oficinas?', ['They will be designed for collaboration', 'They will disappear', 'They will get smaller desks'], 0)] },
      quiz: [
        mc('"I would imagine that…" is used to…', ['speculate politely', 'give an order', 'end the answer'], 0),
        mc('Which phrase rephrases an idea?', ['What I mean is…', 'By the way…', 'Good morning…'], 0),
        mc('"Largely due to" introduces…', ['a main cause', 'a joke', 'a question'], 0),
        mc('Which is better in Part 3?', ['A developed answer with nuance', 'One-word answers', 'A memorised story'], 0),
        mc('If you cannot remember a word, the best strategy is…', ['paraphrase and keep going', 'stop speaking', 'say sorry five times'], 0),
        fill('It ___ on the situation. (depends)', 'depends'),
        order('Muy posiblemente, la gente trabajará más desde casa.', 'People might well work more from home.'),
        hear(['It is likely to rise.', 'It is lightly to rise.', 'It is like to rise.'], 0, 'Se oía «likely».')
      ]
    }

  );
})();
