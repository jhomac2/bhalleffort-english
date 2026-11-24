/* Inglés para el trabajo (w01 a w05): entrevistas, CV, reuniones y presentaciones. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 'w01', track: 'work', level: 'A2', title: 'Entrevista de trabajo: preséntate y responde', en: 'Job interview basics',
      explain:
        '<p>Las entrevistas repiten las mismas preguntas. Prepara tus respuestas con frases completas:</p>' +
        '<table><tr><th>Pregunta</th><th>Cómo responder</th></tr>' +
        '<tr><td><i lang="en">Tell me about yourself.</i></td><td><i lang="en">I am… I study… I have one year of experience in…</i></td></tr>' +
        '<tr><td><i lang="en">What are your strengths?</i></td><td><i lang="en">I learn fast. I am organized. I am good at…</i></td></tr>' +
        '<tr><td><i lang="en">What is your weakness?</i></td><td><i lang="en">Sometimes I am shy, but I am working on it.</i></td></tr>' +
        '<tr><td><i lang="en">Why do you want this job?</i></td><td><i lang="en">Because I want to learn and work with a good team.</i></td></tr>' +
        '<tr><td><i lang="en">Are you available…?</i></td><td><i lang="en">Yes, I am available from Monday.</i></td></tr></table>' +
        '<p><b>Consejos:</b> habla con calma, mira a la persona, no digas solo «yes/no»; agrega una frase más. Si no entiendes: <i lang="en">Sorry, could you repeat that, please?</i></p>',
      vocab: [
        ['interview', 'entrevista', 'I have a job interview tomorrow.'],
        ['experience', 'experiencia', 'I have one year of experience.'],
        ['skill', 'habilidad', 'Communication is an important skill.'],
        ['strength', 'fortaleza', 'My strength is that I learn fast.'],
        ['weakness', 'debilidad', 'My weakness is that I am shy.'],
        ['team', 'equipo', 'I like to work in a team.'],
        ['goal', 'meta, objetivo', 'My goal is to work in security.'],
        ['available', 'disponible', 'I am available from Monday.'],
        ['apply', 'postular, aplicar', 'I want to apply for this job.'],
        ['position', 'puesto', 'I am interested in this position.']
      ],
      ex: [
        mc('Para empezar, dices: «Tell me about ___ .»', ['yourself', 'you', 'your'], 0),
        mc('«I have two years of ___ in IT.»', ['experience', 'experiences', 'experient'], 0),
        fill('I am ___ from Monday. (disponible)', 'available'),
        mc('¿Qué respuesta es mejor a «Why do you want this job?»', ['Because I want to learn and grow.', 'Yes.', 'I do not know.'], 0),
        order('Quiero postular a este puesto.', 'I want to apply for this position.'),
        mc('Si no entiendes la pregunta, dices…', ['Sorry, could you repeat that, please?', 'What?', 'No.'], 0)
      ],
      read: {
        t: 'Interviewer: Good morning. Please tell me about yourself. Carlos: Good morning. I am Carlos. I study systems engineering and I have one year of experience as a support technician. Interviewer: What are your strengths? Carlos: I learn fast and I work well in a team. Interviewer: Why do you want this position? Carlos: Because I want to grow in cybersecurity.',
        tr: 'Entrevistadora: Buenos días. Por favor, cuénteme sobre usted. Carlos: Buenos días. Soy Carlos. Estudio ingeniería de sistemas y tengo un año de experiencia como técnico de soporte. Entrevistadora: ¿Cuáles son sus fortalezas? Carlos: Aprendo rápido y trabajo bien en equipo. Entrevistadora: ¿Por qué quiere este puesto? Carlos: Porque quiero crecer en ciberseguridad.',
        q: [mc('What does Carlos study?', ['Systems engineering', 'Medicine', 'Law'], 0), mc('What is one of his strengths?', ['He learns fast', 'He is very tall', 'He speaks French'], 0)]
      },
      write: { p: 'Escribe tu respuesta a «Tell me about yourself» en 4 frases (quién eres, qué estudias o haces, tu experiencia y tu meta).', m: 'I am Ana. I study systems engineering in Latacunga. I have one year of experience as a support technician. My goal is to work in cybersecurity.' },
      q: 'job interview English for beginners tell me about yourself',
      listen: { d: [['Interviewer', 'Thank you for coming. Are you available to start next month?'], ['Candidate', 'Yes, I am available from the first of the month.'], ['Interviewer', 'What are your strengths?'], ['Candidate', 'I am organized and I learn fast. My weakness is that I am sometimes shy, but I am working on it.'], ['Interviewer', 'Why do you want this position?'], ['Candidate', 'Because I want to work with a good team and improve my skills.']],
        q: [mc('¿Cuándo está disponible el candidato?', ['Next month', 'Tomorrow', 'In a year'], 0), mc('¿Cuál es su debilidad?', ['He is sometimes shy', 'He is late', 'He is slow'], 0), mc('¿Por qué quiere el puesto?', ['To work with a good team and improve', 'For the salary', 'For the location'], 0)] },
      quiz: [
        mc('I have a job ___ tomorrow at ten.', ['interview', 'ticket', 'menu'], 0),
        mc('My ___ is that I learn fast.', ['strength', 'weakness', 'position'], 0),
        mc('I am ___ in this position. (interesado)', ['interested', 'interesting', 'interest'], 0),
        fill('I want to ___ for this job. (postular)', 'apply'),
        fill('I like working in a ___ . (equipo)', 'team'),
        order('Tengo un año de experiencia.', 'I have one year of experience.'),
        mc('«Skill» significa…', ['habilidad', 'puesto', 'sueldo'], 0),
        hear(['available', 'valuable', 'avoidable'], 0, 'Se oía «available».')
      ]
    },

    {
      id: 'w02', track: 'work', level: 'B1', title: 'Entrevista: contar una experiencia con el método STAR', en: 'Behavioral interview answers (STAR)',
      explain:
        '<p>Las entrevistas de nivel intermedio piden <b>historias reales</b>: <i lang="en">Tell me about a time when you solved a problem.</i> El método <b>STAR</b> ordena tu respuesta:</p>' +
        '<table><tr><th>Letra</th><th>Qué dices</th><th>Frase modelo</th></tr>' +
        '<tr><td><b>S</b>ituation</td><td>el contexto</td><td><i lang="en">Last year, our website went down.</i></td></tr>' +
        '<tr><td><b>T</b>ask</td><td>tu responsabilidad</td><td><i lang="en">My task was to restore it quickly.</i></td></tr>' +
        '<tr><td><b>A</b>ction</td><td>qué hiciste tú</td><td><i lang="en">I checked the logs and fixed the error.</i></td></tr>' +
        '<tr><td><b>R</b>esult</td><td>qué pasó al final</td><td><i lang="en">As a result, we did not lose any sales.</i></td></tr></table>' +
        '<p>Usa <b>pasado simple</b> y la palabra <i lang="en">I</i> (lo que hiciste tú, no solo «we»). Incluye cifras si puedes: <i lang="en">in two hours, by 30%</i>.</p>',
      vocab: [
        ['challenge', 'desafío', 'The biggest challenge was the time.'],
        ['solve', 'resolver', 'I solved the problem in two hours.'],
        ['lead', 'liderar', 'I led a team of three people.'],
        ['conflict', 'conflicto', 'We had a conflict about the plan.'],
        ['feedback', 'retroalimentación', 'I asked my manager for feedback.'],
        ['achieve', 'lograr', 'We achieved our goal.'],
        ['under pressure', 'bajo presión', 'I work well under pressure.'],
        ['responsible for', 'responsable de', 'I was responsible for the network.'],
        ['result', 'resultado', 'The result was very good.'],
        ['outcome', 'desenlace, resultado final', 'The outcome was positive.']
      ],
      ex: [
        mc('«Situation» means…', ['el contexto', 'la solución', 'la pregunta'], 0),
        mc('Which sentence is the Action?', ['I checked the logs and fixed the error.', 'Last year our website went down.', 'We did not lose any sales.'], 0),
        mc('Which sentence is the Result?', ['As a result, we did not lose any sales.', 'My task was to restore the site.', 'I called my manager.'], 0),
        fill('I was ___ for the network. (responsable)', 'responsible'),
        order('Lideré un equipo de tres personas.', 'I led a team of three people.'),
        mc('En STAR, usas principalmente el…', ['pasado simple', 'futuro', 'imperativo'], 0)
      ],
      read: {
        t: 'Last year, our company website went down before a big sale. My task was to restore it quickly. I checked the logs, found a configuration error and fixed it in two hours. I also wrote a short guide for the team. As a result, the website worked again and we did not lose any sales.',
        tr: 'El año pasado, el sitio web de nuestra empresa se cayó antes de una gran venta. Mi tarea era restaurarlo rápido. Revisé los registros, encontré un error de configuración y lo arreglé en dos horas. También escribí una guía corta para el equipo. Como resultado, el sitio volvió a funcionar y no perdimos ninguna venta.',
        q: [mc('What was the problem?', ['The website went down', 'A laptop was stolen', 'A customer complained'], 0), mc('What was the result?', ['They did not lose any sales', 'They lost the sale', 'They changed the website'], 0)]
      },
      write: { p: 'Escribe una respuesta STAR de 5 frases a «Tell me about a time you solved a problem».', m: 'Last month, a classmate lost an important file. My task was to recover it before the deadline. I checked the backup folder and restored an older version. I also showed him how to back up automatically. As a result, he delivered the project on time.' },
      q: 'STAR method interview answers in English example',
      listen: { d: [['Interviewer', 'Tell me about a time when you worked under pressure.'], ['Candidate', 'Last semester, I had to finish a network project in three days. My task was to configure all the routers.'], ['Candidate', 'I made a plan, worked in the lab every night, and asked my teacher for feedback.'], ['Interviewer', 'And what was the result?'], ['Candidate', 'We finished one day early and got the highest grade in the class.']],
        q: [mc('¿Cuánto tiempo tenía para el proyecto?', ['Three days', 'Three weeks', 'One day'], 0), mc('¿Qué hizo para terminarlo?', ['Made a plan and asked for feedback', 'Quit the project', 'Used a template'], 0), mc('¿Cuál fue el resultado?', ['The highest grade in the class', 'A bad grade', 'No result'], 0)] },
      quiz: [
        mc('The ___ of my task was to restore the website.', ['goal', 'goalkeeper', 'gate'], 0),
        mc('I work well ___ pressure.', ['under', 'on', 'at'], 0),
        mc('«Feedback» es…', ['comentarios sobre tu trabajo', 'un descanso', 'una reunión'], 0),
        fill('We ___ our goal in June. (lograr, pasado)', 'achieved'),
        fill('I ___ the team during the project. (liderar, pasado)', 'led'),
        order('Resolví el problema en una hora.', 'I solved the problem in one hour.'),
        mc('Para el resultado dices…', ['As a result,', 'By the way,', 'For example,'], 0),
        hear(['challenge', 'change', 'chance'], 0, 'Se oía «challenge».')
      ]
    },

    {
      id: 'w03', track: 'work', level: 'B1', title: 'Tu CV y tu perfil de LinkedIn', en: 'CV and LinkedIn profile',
      explain:
        '<p>Un CV en inglés (<i lang="en">résumé</i>) es <b>corto y con acciones</b>. Cada punto empieza con un verbo en pasado (si ya terminó) o presente (si sigue):</p>' +
        '<ul><li><i lang="en">Developed a small website for a local business.</i></li><li><i lang="en">Managed the school computer lab (20 PCs).</i></li><li><i lang="en">Reduced support tickets by 30%.</i></li></ul>' +
        '<table><tr><th>Sección</th><th>Contenido</th></tr>' +
        '<tr><td><i lang="en">Profile / Summary</i></td><td>3 frases: quién eres y qué buscas</td></tr>' +
        '<tr><td><i lang="en">Education</i></td><td>estudios y fechas</td></tr><tr><td><i lang="en">Work experience</i></td><td>trabajos y logros</td></tr>' +
        '<tr><td><i lang="en">Skills / Certifications</i></td><td>herramientas y certificados</td></tr></table>' +
        '<p><b>LinkedIn:</b> el <i lang="en">headline</i> (titular) resume tu perfil: <i lang="en">Systems Engineering Student | Cybersecurity | Linux</i>.</p>',
      vocab: [
        ['résumé', 'currículum', 'Send your résumé by email.'],
        ['profile', 'perfil', 'Update your LinkedIn profile.'],
        ['headline', 'titular (en LinkedIn)', 'Write a clear headline.'],
        ['education', 'educación, estudios', 'List your education first.'],
        ['work experience', 'experiencia laboral', 'I have little work experience.'],
        ['certification', 'certificación', 'I have a Linux certification.'],
        ['achievement', 'logro', 'Write one achievement for each job.'],
        ['manage', 'administrar, gestionar', 'I managed the computer lab.'],
        ['develop', 'desarrollar', 'I developed a small website.'],
        ['reference', 'referencia', 'My teacher is my reference.']
      ],
      ex: [
        mc('Un punto del CV debe empezar con…', ['un verbo de acción', 'la palabra «I»', 'un artículo'], 0),
        mc('Which line is better for a résumé?', ['Reduced support tickets by 30%.', 'I was very good at support.', 'Support is nice.'], 0),
        fill('List your ___ and your work experience. (estudios)', 'education'),
        mc('El «headline» de LinkedIn es…', ['una frase corta que resume tu perfil', 'tu contraseña', 'tu foto'], 0),
        order('Administré el laboratorio de computación.', 'I managed the computer lab.'),
        mc('A ___ proves that you passed an official exam.', ['certification', 'reference', 'headline'], 0)
      ],
      read: {
        t: 'Profile: Systems engineering student with experience in technical support and basic Linux administration. Looking for an internship in cybersecurity. Experience: Support technician, school lab (2024 to 2025). Managed 20 computers and reduced support tickets by 30%. Developed a guide for new students. Certifications: Linux Essentials (in progress).',
        tr: 'Perfil: Estudiante de ingeniería de sistemas con experiencia en soporte técnico y administración básica de Linux. Busco una pasantía en ciberseguridad. Experiencia: Técnico de soporte, laboratorio del colegio (2024 a 2025). Administré 20 computadoras y reduje los tickets de soporte en un 30 %. Desarrollé una guía para estudiantes nuevos. Certificaciones: Linux Essentials (en curso).',
        q: [mc('What is the person looking for?', ['An internship in cybersecurity', 'A job as a teacher', 'A new laptop'], 0), mc('What did the person reduce?', ['Support tickets', 'Computers', 'Certifications'], 0)]
      },
      write: { p: 'Escribe tu «Profile» de CV en 3 frases y un headline de LinkedIn.', m: 'Systems engineering student with basic experience in technical support. I enjoy learning Linux and networks. Looking for an internship in cybersecurity. Headline: Systems Engineering Student | Cybersecurity | Linux' },
      q: 'how to write a CV in English for IT students LinkedIn headline',
      listen: { d: [['Mentor', 'Let us review your résumé. Your profile is clear, but your experience needs numbers.'], ['Student', 'I managed the school lab. Is that enough?'], ['Mentor', 'Add the result. For example: managed twenty computers and reduced tickets by thirty percent.'], ['Student', 'And my LinkedIn headline?'], ['Mentor', 'Make it short: systems engineering student, cybersecurity, Linux. Also add your certification.']],
        q: [mc('¿Qué le falta a la experiencia del estudiante?', ['Numbers and results', 'A photo', 'More colors'], 0), mc('¿Cuántas computadoras administró?', ['Twenty', 'Thirty', 'Two'], 0), mc('¿Cómo debe ser el headline?', ['Short', 'Very long', 'Empty'], 0)] },
      quiz: [
        mc('Write your ___ in reverse order: newest first.', ['work experience', 'weakness', 'headline'], 0),
        mc('«Reduced costs by 20%» is an…', ['achievement', 'interview', 'apology'], 0),
        mc('For a past job, start with a verb in the…', ['past tense', 'future tense', 'question form'], 0),
        fill('I ___ a small website for a local shop. (desarrollé)', 'developed'),
        fill('My teacher can be my ___ . (referencia)', 'reference'),
        order('Mi perfil de LinkedIn está actualizado.', 'My LinkedIn profile is updated.'),
        mc('«Certification» significa…', ['certificación', 'recomendación', 'conferencia'], 0),
        hear(['profile', 'prophet', 'profit'], 0, 'Se oía «profile».')
      ]
    },

    {
      id: 'w04', track: 'work', level: 'B1', title: 'Reuniones y stand-ups en inglés', en: 'Meetings and stand-ups',
      explain:
        '<p>En una reunión (presencial o por videollamada) se usan frases hechas. Apréndelas completas:</p>' +
        '<table><tr><th>Para…</th><th>Di…</th></tr>' +
        '<tr><td>Empezar</td><td><i lang="en">Let us get started. The agenda is…</i></td></tr>' +
        '<tr><td>Dar tu avance</td><td><i lang="en">Yesterday I finished… Today I will… I am blocked by…</i></td></tr>' +
        '<tr><td>Aclarar</td><td><i lang="en">Could you clarify that, please?</i></td></tr>' +
        '<tr><td>Interrumpir con cortesía</td><td><i lang="en">Sorry to interrupt, but…</i></td></tr>' +
        '<tr><td>Videollamada</td><td><i lang="en">Can everyone hear me? Let me share my screen. You are on mute.</i></td></tr>' +
        '<tr><td>Cerrar</td><td><i lang="en">Let us wrap up. The action items are…</i></td></tr></table>' +
        '<p>El <i lang="en">stand-up</i> es una reunión diaria de 5 a 10 minutos con tres cosas: ayer, hoy y bloqueos.</p>',
      vocab: [
        ['agenda', 'agenda, orden del día', 'The agenda has three points.'],
        ['action item', 'tarea pendiente (acordada)', 'Each person has one action item.'],
        ['clarify', 'aclarar', 'Could you clarify that point?'],
        ['raise a point', 'plantear un tema', 'I would like to raise a point.'],
        ['wrap up', 'cerrar, terminar', 'Let us wrap up the meeting.'],
        ['on track', 'según lo planeado', 'The project is on track.'],
        ['behind schedule', 'atrasado', 'We are two days behind schedule.'],
        ['take notes', 'tomar notas', 'Ana will take notes.'],
        ['share my screen', 'compartir mi pantalla', 'Let me share my screen.'],
        ['on mute', 'silenciado (micrófono)', 'Sorry, I was on mute.']
      ],
      ex: [
        mc('En un stand-up dices: «Yesterday I ___ the login page.»', ['finished', 'finish', 'finishing'], 0),
        mc('Para pedir que expliquen mejor:', ['Could you clarify that, please?', 'Explain now.', 'I do not like it.'], 0),
        fill('Sorry, I was on ___ . (silenciado)', 'mute'),
        mc('«The project is on track» significa…', ['va según lo planeado', 'está atrasado', 'está cancelado'], 0),
        order('Déjame compartir mi pantalla.', 'Let me share my screen.'),
        mc('Para cerrar la reunión:', ['Let us wrap up.', 'Let us wait up.', 'Let us wrap on.'], 0)
      ],
      read: {
        t: 'Lead: Good morning, team. Let us start the stand-up. Ana, you first. Ana: Yesterday I finished the login page. Today I will work on the reports. I am blocked by a database error. Lead: Thanks. Luis, could you help Ana after the meeting? Luis: Sure. Lead: Good. The project is on track. Let us wrap up. Luis will help Ana and I will send the notes.',
        tr: 'Líder: Buenos días, equipo. Empecemos el stand-up. Ana, tú primero. Ana: Ayer terminé la página de inicio de sesión. Hoy trabajaré en los reportes. Estoy bloqueada por un error en la base de datos. Líder: Gracias. Luis, ¿podrías ayudar a Ana después de la reunión? Luis: Claro. Líder: Bien. El proyecto va según lo planeado. Terminemos. Luis ayudará a Ana y yo enviaré las notas.',
        q: [mc('What is blocking Ana?', ['A database error', 'A meeting', 'A holiday'], 0), mc('Who will send the notes?', ['The lead', 'Luis', 'Ana'], 0)]
      },
      write: { p: 'Escribe tu stand-up de hoy en 4 frases: qué hiciste ayer, qué harás hoy y si tienes algún bloqueo.', m: 'Yesterday I finished my network homework. Today I will study for the exam and practice English. I am blocked by a Linux error, so I need help. Otherwise, everything is on track.' },
      q: 'English for meetings and daily stand-up phrases',
      listen: { d: [['Host', 'Can everyone hear me? Great, let us get started. The agenda has two points.'], ['Ana', 'Sorry to interrupt, but I think you are on mute, Luis.'], ['Luis', 'Thanks, Ana. Sorry. I was saying that we are behind schedule by two days.'], ['Host', 'Could you clarify why?'], ['Luis', 'The test server was down. Let me share my screen and show the error.'], ['Host', 'Thanks. Let us wrap up. Luis will fix it and send an update tomorrow.']],
        q: [mc('¿Cuántos puntos tiene la agenda?', ['Two', 'Three', 'Five'], 0), mc('¿Cuánto está atrasado el proyecto?', ['Two days', 'Two weeks', 'Two hours'], 0), mc('¿Qué hará Luis?', ['Fix it and send an update tomorrow', 'Cancel the project', 'Go on holiday'], 0)] },
      quiz: [
        mc('The meeting ___ has three points.', ['agenda', 'action', 'mute'], 0),
        mc('Every person has an action ___ .', ['item', 'track', 'note'], 0),
        mc('We are two days ___ schedule.', ['behind', 'under', 'between'], 0),
        fill('Could you ___ that point, please? (aclarar)', 'clarify'),
        fill('Ana will ___ notes during the meeting. (tomar)', 'take'),
        order('Estamos según lo planeado.', 'We are on track.'),
        mc('«Sorry to interrupt, but…» se usa para…', ['interrumpir con cortesía', 'despedirse', 'pedir comida'], 0),
        hear(['agenda', 'agent', 'again'], 0, 'Se oía «agenda».')
      ]
    },

    {
      id: 'w05', track: 'work', level: 'B1', title: 'Presentar un proyecto', en: 'Presenting a project',
      explain:
        '<p>Una presentación corta tiene siempre la misma estructura. Usa estas frases para guiar a tu audiencia:</p>' +
        '<table><tr><th>Parte</th><th>Frase</th></tr>' +
        '<tr><td>Saludo y tema</td><td><i lang="en">Good morning, everyone. Today I will present my project about…</i></td></tr>' +
        '<tr><td>Esquema</td><td><i lang="en">First, I will give an overview. Then I will show a demo. Finally, I will explain the next steps.</i></td></tr>' +
        '<tr><td>Pasar a otro punto</td><td><i lang="en">Let us move on to… / As you can see on this slide…</i></td></tr>' +
        '<tr><td>Resumen</td><td><i lang="en">In summary, the project…</i></td></tr>' +
        '<tr><td>Cierre y preguntas</td><td><i lang="en">Thank you for listening. Any questions?</i></td></tr></table>' +
        '<p><b>Consejos:</b> una idea por diapositiva, habla despacio, y ensaya en voz alta. Si no sabes responder: <i lang="en">That is a good question. I will check and get back to you.</i></p>',
      vocab: [
        ['audience', 'audiencia, público', 'The audience is very quiet.'],
        ['slide', 'diapositiva', 'This slide shows the results.'],
        ['overview', 'visión general', 'First, I will give an overview.'],
        ['outline', 'esquema', 'Here is the outline of my talk.'],
        ['demonstrate', 'demostrar', 'I will demonstrate the tool now.'],
        ['highlight', 'resaltar', 'I want to highlight three results.'],
        ['next steps', 'próximos pasos', 'Let me explain the next steps.'],
        ['in summary', 'en resumen', 'In summary, the project works.'],
        ['any questions?', '¿alguna pregunta?', 'Thank you. Any questions?'],
        ['get back to you', 'responderte después', 'I will get back to you tomorrow.']
      ],
      ex: [
        mc('Para empezar la presentación:', ['Today I will present my project about…', 'Now stop.', 'Look at the floor.'], 0),
        mc('«As you can see on this ___ …»', ['slide', 'agenda', 'item'], 0),
        fill('First, I will give an ___ of the project. (visión general)', 'overview'),
        mc('Para cerrar:', ['In summary, the project works. Any questions?', 'By the way, bye.', 'Next, the bill.'], 0),
        order('Gracias por escuchar.', 'Thank you for listening.'),
        mc('Si no sabes la respuesta, dices…', ['I will check and get back to you.', 'I do not care.', 'No question.'], 0)
      ],
      read: {
        t: 'Good morning, everyone. Today I will present my project: a small tool that checks weak passwords. First, I will give an overview. Then I will demonstrate the tool. Finally, I will explain the next steps. As you can see on this slide, the tool found twelve weak passwords in our test. In summary, the project is useful and easy to use. Thank you for listening. Any questions?',
        tr: 'Buenos días a todos. Hoy presentaré mi proyecto: una pequeña herramienta que revisa contraseñas débiles. Primero daré una visión general. Luego demostraré la herramienta. Finalmente explicaré los próximos pasos. Como pueden ver en esta diapositiva, la herramienta encontró doce contraseñas débiles en nuestra prueba. En resumen, el proyecto es útil y fácil de usar. Gracias por escuchar. ¿Alguna pregunta?',
        q: [mc('What does the tool check?', ['Weak passwords', 'Slow computers', 'Old emails'], 0), mc('How many weak passwords did it find?', ['Twelve', 'Two', 'Twenty'], 0)]
      },
      write: { p: 'Escribe la introducción de una presentación de 4 frases: saludo, tema, esquema (First… Then… Finally…).', m: 'Good morning, everyone. Today I will present my project about network security. First, I will give an overview. Then I will show a short demo. Finally, I will explain the next steps.' },
      q: 'how to give a presentation in English phrases',
      listen: { d: [['Speaker', 'Good afternoon, everyone. Today I will present our new backup system. First, an overview. Then a short demo.'], ['Speaker', 'As you can see on this slide, the system saves the files every night.'], ['Speaker', 'In summary, it is fast, safe and easy to use. Thank you for listening. Any questions?'], ['Listener', 'Yes. How much does it cost?'], ['Speaker', 'That is a good question. I will check and get back to you this afternoon.']],
        q: [mc('¿De qué trata el proyecto?', ['A backup system', 'A new website', 'A game'], 0), mc('¿Cuándo guarda los archivos?', ['Every night', 'Every year', 'Never'], 0), mc('¿Qué responde sobre el costo?', ['He will check and get back later', 'It is free', 'It is expensive'], 0)] },
      quiz: [
        mc('The ___ listens to your presentation.', ['audience', 'agenda', 'outline'], 0),
        mc('Put one idea on each ___ .', ['slide', 'mute', 'track'], 0),
        mc('«In summary» sirve para…', ['hacer un resumen final', 'saludar', 'interrumpir'], 0),
        fill('Let me ___ the tool now. (demostrar)', 'demonstrate'),
        fill('I want to ___ three results. (resaltar)', 'highlight'),
        order('Hablemos de los próximos pasos.', 'Let us talk about the next steps.'),
        mc('«Any questions?» significa…', ['¿Hay preguntas?', '¿Quién eres?', '¿Dónde está?'], 0),
        hear(['slide', 'slight', 'sight'], 0, 'Se oía «slide».')
      ]
    }
  );
})();
