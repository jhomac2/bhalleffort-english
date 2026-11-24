/* Inglés general, nivel B1 (g19 a g22). */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order;
  EL.lessons.push(

    {
      id: 'g19', track: 'general', level: 'B1', title: 'Pasado simple o presente perfecto', en: 'Past simple vs present perfect',
      explain:
        '<p><b>Pasado simple:</b> acción terminada en un momento concreto del pasado: <i lang="en">I visited Lima in 2022. Did you call him yesterday?</i></p>' +
        '<p><b>Presente perfecto:</b> experiencia o resultado sin tiempo concreto, o algo que continúa hasta hoy: <i lang="en">I have visited Lima. I have lived here for three years.</i></p>' +
        '<p><b>for</b> = duración (<i lang="en">for two years</i>). <b>since</b> = punto de inicio (<i lang="en">since 2023, since January</i>).</p>' +
        '<p><b>Regla práctica:</b> si dices <i>cuándo</i> (yesterday, in 2022, last week) → pasado simple. Si no → presente perfecto.</p>',
      vocab: [
        ['for', 'durante (duración)', 'I have lived here for three years.'],
        ['since', 'desde (inicio)', 'I have studied since January.'],
        ['recently', 'recientemente', 'I have recently started a course.'],
        ['so far', 'hasta ahora', 'I have learned a lot so far.'],
        ['experience', 'experiencia', 'I have experience with computers.'],
        ['lately', 'últimamente', 'I have been busy lately.'],
        ['improve', 'mejorar', 'I want to improve my English.'],
        ['learned', 'aprendí, he aprendido', 'I learned a lot yesterday.'],
        ['started', 'empecé, he empezado', 'I started English last year.'],
        ['lived', 'viví, he vivido', 'I lived in Loja in 2020.']
      ],
      ex: [
        mc('I ___ to Lima in 2022.', ['have been', 'went', 'have gone'], 1, 'Hay fecha (2022) → pasado simple.'),
        mc('I ___ here for three years.', ['lived', 'live', 'have lived'], 2, 'Dura hasta hoy → presente perfecto.'),
        mc('She has studied English ___ January.', ['for', 'since', 'during'], 1, 'January es un punto de inicio → since.'),
        fill('We have worked here ___ two years. (for / since)', 'for', 'Una duración → for.'),
        mc('¿Cuál oración tiene un tiempo concreto?', ['I have seen it.', 'I saw it yesterday.', 'I have seen it twice.'], 1),
        order('He estudiado inglés desde enero.', ['I have studied English since January.', 'Since January I have studied English.'])
      ],
      read: {
        t: 'Mateo has worked as a technician for three years. He started in 2023, and since then he has learned a lot. Last year he fixed more than a hundred computers. Recently he has started an English course because he wants to work abroad. So far he has finished two units.',
        tr: 'Mateo ha trabajado como técnico durante tres años. Empezó en 2023 y desde entonces ha aprendido mucho. El año pasado arregló más de cien computadoras. Recientemente empezó un curso de inglés porque quiere trabajar en el extranjero. Hasta ahora ha terminado dos unidades.',
        q: [
          mc('How long has Mateo worked as a technician?', ['Since last year', 'For three years', 'For two months'], 1),
          mc('Why did he start English?', ['To work abroad', 'To fix computers', 'To live in Loja'], 0)
        ]
      },
      write: { p: 'Escribe 4 frases: algo que hiciste en una fecha concreta (pasado) y algo que llevas haciendo (for / since).', m: 'I started this course in October. I have studied English for two weeks. I have lived in Quito since 2020. Last year I bought a laptop.' },
      q: 'present perfect vs past simple'
    },

    {
      id: 'g20', track: 'general', level: 'B1', title: 'Condicionales: si pasa A, pasa B', en: 'Conditionals',
      explain:
        '<p><b>Primer condicional</b> (posible en el futuro): <b>If + presente, will + verbo</b>. <i lang="en">If it rains, we will stay home. If you study, you will pass.</i></p>' +
        '<p><b>Segundo condicional</b> (situación imaginaria): <b>If + pasado, would + verbo</b>. <i lang="en">If I had more time, I would learn Italian.</i> Con <i lang="en">be</i> se usa <i lang="en">were</i> para todos: <i lang="en">If I were you, I would…</i> (consejo).</p>' +
        '<p><b>when</b> = cuando (seguro que pasará) · <b>if</b> = si (puede o no pasar) · <b>unless</b> = a menos que.</p>',
      vocab: [
        ['if', 'si (condición)', 'If you study, you will pass.'],
        ['unless', 'a menos que', 'Unless you hurry, you will be late.'],
        ['would', 'haría (condicional)', 'I would travel more.'],
        ['pass', 'aprobar', 'I will pass the test.'],
        ['fail', 'reprobar, fallar', "If I don't study, I will fail."],
        ['hurry', 'apurarse', 'Hurry up, please.'],
        ['miss', 'perder (bus, vuelo), extrañar', 'We will miss the bus.'],
        ['lose', 'perder', "Don't lose your phone."],
        ['win', 'ganar', 'If I win, I will celebrate.'],
        ['probably', 'probablemente', 'I will probably go.']
      ],
      ex: [
        mc('If it rains, we ___ at home.', ['stay', 'will stay', 'stayed'], 1, 'If + presente, will + verbo.'),
        mc('If I ___ you, I would study more.', ['am', 'were', 'will be'], 1, 'Consejo imaginario → <i lang="en">were</i>.'),
        mc('If I had more time, I ___ learn Italian.', ['will', 'would', 'can'], 1, 'If + pasado, would + verbo.'),
        fill('Unless you hurry, you ___ be late. (will / would)', 'will', 'Situación real → will.'),
        order('Si estudias, aprobarás.', ['If you study, you will pass.', 'You will pass if you study.']),
        mc('¿Cuál es imaginaria?', ['If I win, I will celebrate.', 'If I won, I would travel the world.', 'If it rains, I will stay.'], 1)
      ],
      read: {
        t: 'If I pass the exam, I will start a new course. If I fail, I will study again, because I never give up. Unless I get a good score, I won\'t apply for the scholarship. Sometimes I imagine: if I had a scholarship, I would study abroad.',
        tr: 'Si apruebo el examen, empezaré un curso nuevo. Si repruebo, estudiaré de nuevo, porque nunca me rindo. A menos que obtenga una buena nota, no postularé a la beca. A veces imagino: si tuviera una beca, estudiaría en el extranjero.',
        q: [
          mc('What will the writer do if they fail?', ['Study again', 'Stop studying', 'Travel'], 0),
          mc('What would the writer do with a scholarship?', ['Buy a house', 'Study abroad', 'Work more'], 1)
        ]
      },
      write: { p: 'Escribe 2 condicionales reales (if + will) y 2 imaginarios (if + would) sobre tu futuro.', m: 'If I practice every day, I will improve. If I pass this level, I will start the next one. If I had more time, I would study three hours a day. If I lived in the USA, I would speak English every day.' },
      q: 'first second conditional English'
    },

    {
      id: 'g21', track: 'general', level: 'B1', title: 'La voz pasiva (muy usada en lo técnico)', en: 'Passive voice',
      explain:
        '<p>La voz pasiva pone el foco en <b>lo que se hizo</b>, no en quién lo hizo. Se forma con <b>be + participio pasado</b>.</p>' +
        '<ul><li>Presente: <i lang="en">The server is updated every night.</i></li>' +
        '<li>Pasado: <i lang="en">The files were deleted.</i></li>' +
        '<li>Futuro: <i lang="en">The system will be restarted.</i></li></ul>' +
        '<p>Si quieres decir quién lo hizo, usa <b>by</b>: <i lang="en">The code was written by Ana.</i></p>' +
        '<p>Es muy común en reportes, documentación y noticias de seguridad: <i lang="en">The password was stolen. Access is granted to admins only.</i></p>',
      vocab: [
        ['update', 'actualizar', 'The server is updated every night.'],
        ['delete', 'borrar', 'The files were deleted.'],
        ['steal', 'robar', 'The data was stolen.'],
        ['send', 'enviar', 'The email was sent at noon.'],
        ['build', 'construir', 'The bridge was built in 1990.'],
        ['fix', 'arreglar', 'The problem was fixed quickly.'],
        ['restart', 'reiniciar', 'The system will be restarted.'],
        ['require', 'requerir, exigir', 'A password is required.'],
        ['allow', 'permitir', 'Access is allowed.'],
        ['report', 'reportar, informe', 'The incident was reported.']
      ],
      ex: [
        mc('The files ___ deleted yesterday.', ['was', 'were', 'are'], 1, 'Plural + pasado → were.'),
        mc('The server ___ updated every night.', ['is', 'are', 'does'], 0, 'Presente + singular → is.'),
        fill('The system will be ___ (restart) tonight.', 'restarted', 'will be + participio.'),
        fill('The email was ___ (send) at noon.', 'sent', 'send → sent.'),
        mc('Pasiva de "Ana wrote the code":', ['The code is written by Ana.', 'The code was written by Ana.', 'The code wrote by Ana.'], 1),
        order('La contraseña fue robada.', 'The password was stolen.')
      ],
      read: {
        t: 'Yesterday a security problem was reported at a small company. Some passwords were stolen, and the website was blocked for two hours. The problem was fixed by the IT team, and all passwords were changed. Now a new security system will be installed next week.',
        tr: 'Ayer se reportó un problema de seguridad en una empresa pequeña. Se robaron algunas contraseñas y el sitio web estuvo bloqueado dos horas. El problema fue arreglado por el equipo de TI y se cambiaron todas las contraseñas. Ahora se instalará un nuevo sistema de seguridad la próxima semana.',
        q: [
          mc('What was stolen?', ['Computers', 'Passwords', 'Money'], 1),
          mc('Who fixed the problem?', ['The IT team', 'The manager', 'A customer'], 0)
        ]
      },
      write: { p: 'Describe 3 cosas que se hacen en tu universidad o trabajo usando la voz pasiva.', m: 'Classes are given in the morning. Homework is sent by email. The labs are cleaned every day.' },
      q: 'passive voice English lesson'
    },

    {
      id: 'g22', track: 'general', level: 'B1', title: 'Dar más información: who, which, that y lo que alguien dijo', en: 'Relative clauses and reported speech',
      explain:
        '<p><b>who</b> (personas), <b>which</b> (cosas) y <b>that</b> (personas o cosas) añaden información: <i lang="en">The man who called you is my teacher. The laptop that I bought is fast. This is the app which saves my notes.</i></p>' +
        '<p><b>Estilo indirecto</b> (contar lo que alguien dijo): el verbo retrocede un tiempo.</p>' +
        '<ul><li><i lang="en">"I am tired." → She said that she was tired.</i></li>' +
        '<li><i lang="en">"I will call." → He said that he would call.</i></li></ul>' +
        '<p><b>said</b> no lleva persona; <b>told</b> sí: <i lang="en">She told me that she was busy.</i></p>',
      vocab: [
        ['who', 'quien, que (personas)', 'She is the teacher who helped me.'],
        ['which', 'que, el cual (cosas)', 'This is the app which I use.'],
        ['that', 'que', 'The laptop that I bought is fast.'],
        ['said', 'dijo', 'He said that he was busy.'],
        ['told', 'dijo (a alguien)', 'She told me the news.'],
        ['explain', 'explicar', 'Can you explain this word?'],
        ['suggest', 'sugerir', 'I suggest a different plan.'],
        ['mention', 'mencionar', 'She mentioned a new course.'],
        ['agree', 'estar de acuerdo', 'I agree with you.'],
        ['disagree', 'no estar de acuerdo', 'I disagree with this idea.']
      ],
      ex: [
        mc('The man ___ called you is my teacher.', ['who', 'which', 'what'], 0, 'Personas → who.'),
        mc('This is the app ___ saves my notes.', ['who', 'which', 'whose'], 1, 'Cosas → which.'),
        mc('"I am tired." → She said she ___ tired.', ['is', 'was', 'will be'], 1, 'Retrocede un tiempo: am → was.'),
        fill('He told ___ the news. (me / I)', 'me', 'told + persona (me).'),
        order('La laptop que compré es rápida.', 'The laptop that I bought is fast.'),
        mc('¿Qué verbo necesita una persona después?', ['said', 'told', 'suggested'], 1)
      ],
      read: {
        t: 'My teacher said that I was improving fast. She told me that I should practice every day. She mentioned a new course which teaches technical English. I asked if it was online and she said that it was. The student who recommended it is my classmate Ana.',
        tr: 'Mi profesora dijo que yo estaba mejorando rápido. Me dijo que debería practicar todos los días. Mencionó un curso nuevo que enseña inglés técnico. Pregunté si era en línea y dijo que sí. La estudiante que lo recomendó es mi compañera Ana.',
        q: [
          mc('What did the teacher say about the writer?', ['They were improving fast', 'They were late', 'They should stop'], 0),
          mc('Is the course online?', ['Yes', 'No', 'We do not know'], 0)
        ]
      },
      write: { p: 'Cuenta en 3 frases qué te dijo alguien hoy (said / told) y describe a una persona con who.', m: 'My friend said that he was tired. My teacher told me that I should practice. Ana is the person who helped me.' },
      q: 'relative clauses reported speech English'
    }

  );
})();
