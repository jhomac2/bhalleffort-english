/* Trabajo y pronunciación, nivel C1: w08, w09, p10. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 'w08', track: 'work', level: 'C1', title: 'Dirigir reuniones y dar retroalimentación', en: 'Leading meetings and giving feedback',
      explain:
        '<p>Quien dirige una reunión <b>controla el tiempo, el foco y las decisiones</b>. En inglés profesional se usan frases claras y neutrales.</p>' +
        '<table><tr><th>Función</th><th>Frases</th></tr>' +
        '<tr><td>Abrir</td><td><i lang="en">Let us get started. The purpose of today\'s meeting is to…</i></td></tr>' +
        '<tr><td>Dar la palabra</td><td><i lang="en">Maria, would you like to take us through the figures?</i></td></tr>' +
        '<tr><td>Mantener el tema</td><td><i lang="en">Let us park that for now and come back to it later.</i></td></tr>' +
        '<tr><td>Interrumpir con tacto</td><td><i lang="en">Sorry to interrupt, but could I just add…?</i></td></tr>' +
        '<tr><td>Resumir y cerrar</td><td><i lang="en">To sum up, we have agreed that… Action items: …</i></td></tr></table>' +
        '<p><b>Feedback constructivo (modelo SBI):</b> <b>S</b>ituation → <b>B</b>ehaviour → <b>I</b>mpact.</p>' +
        '<ul><li><i lang="en">In yesterday\'s presentation (situation), you read directly from the slides (behaviour), which made it harder for the audience to engage (impact).</i></li>' +
        '<li>Termina con un <b>pedido</b>: <i lang="en">Next time, could you try speaking more freely?</i></li></ul>' +
        '<p>Para <b>recibir</b> feedback: <i lang="en">Thank you, that is helpful. Could you give me an example?</i></p>',
      vocab: [
        ['agenda', 'orden del día', 'Let us review the agenda.'],
        ['take us through', 'explicarnos paso a paso', 'Please take us through the plan.'],
        ['park', 'dejar un tema para después', 'Let us park that issue for now.'],
        ['action item', 'tarea acordada', 'We have three action items.'],
        ['to sum up', 'para resumir', 'To sum up, we agreed on the date.'],
        ['constructive', 'constructivo', 'I appreciate your constructive feedback.'],
        ['behaviour', 'comportamiento', 'Describe the behaviour, not the person.'],
        ['impact', 'impacto', 'The impact on the team was positive.'],
        ['engage', 'involucrar, captar', 'The talk did not engage the audience.'],
        ['facilitate', 'facilitar, moderar', 'She facilitates our weekly meeting.']
      ],
      ex: [
        mc('Which phrase opens a meeting?', ['Let us get started.', 'See you later.', 'That is all for today.'], 0),
        mc('"Let us park that for now" means…', ['discuss it later', 'cancel the topic forever', 'drive a car'], 0),
        fill('To ___ up, we agreed on the new deadline. (sum)', 'sum'),
        mc('In the SBI model, the second step is…', ['Behaviour', 'Situation', 'Impact'], 0),
        mc('Which is better feedback?', ['Your report had several errors, which delayed the review.', 'You are careless.', 'This is terrible.'], 0),
        order('¿Puedes explicarnos las cifras paso a paso?', 'Could you take us through the figures?')
      ],
      read: {
        t: "Marta leads the weekly project meeting. She opens by stating the purpose and reviewing the agenda. When a long discussion about the budget begins, she says, \"Let us park that for now and come back to it at the end.\" Later, she gives feedback to a colleague: \"In yesterday's presentation, you read directly from the slides. That made it harder for the audience to engage. Next time, could you try speaking more freely?\" The colleague answers, \"Thank you, that is helpful. Could you give me an example?\" At the end, Marta summarises the decisions and assigns three action items with owners and dates.",
        tr: 'Marta dirige la reunión semanal del proyecto. Abre indicando el propósito y revisando la agenda. Cuando empieza una discusión larga sobre el presupuesto, dice: «Dejemos eso por ahora y volvamos al final». Más tarde da retroalimentación a un colega: «En la presentación de ayer leíste directamente de las diapositivas. Eso hizo más difícil que el público se involucrara. La próxima vez, ¿podrías intentar hablar con más libertad?» El colega responde: «Gracias, eso es útil. ¿Podrías darme un ejemplo?» Al final, Marta resume las decisiones y asigna tres tareas con responsables y fechas.',
        q: [mc('What does Marta do when the budget discussion gets long?', ['She parks it for later', 'She ends the meeting', 'She cancels the budget'], 0), mc('What was the problem in the presentation?', ['He read from the slides', 'He arrived late', 'He forgot the slides'], 0), mc('What does Marta assign at the end?', ['Three action items', 'A new budget', 'A holiday'], 0)]
      },
      write: { p: 'Escribe un feedback de 3 frases con el modelo SBI (situación, comportamiento, impacto) y un pedido final para la próxima vez.', m: 'In last week\'s meeting, you interrupted several colleagues. This made it difficult for them to finish their ideas. Next time, could you wait until they finish?' },
      q: 'how to lead a meeting English phrases feedback SBI model',
      listen: { d: [['Chair', 'Let us get started. The purpose of today is to decide on the launch date.'], ['Member', 'Sorry to interrupt, but could I add something about the budget?'], ['Chair', 'Let us park that for now and come back to it later. Anna, could you take us through the schedule?'], ['Member', 'Of course. The final tests finish on Thursday, so we can launch on Monday.'], ['Chair', 'To sum up, we launch on Monday. Action items: you send the plan, and I will check the budget.']],
        q: [mc('¿Cuál es el propósito de la reunión?', ['Decide the launch date', 'Hire a new manager', 'Plan a party'], 0), mc('¿Qué hace la presidenta con el tema del presupuesto?', ['Parks it for later', 'Rejects it', 'Approves it'], 0), mc('¿Cuándo es el lanzamiento?', ['Monday', 'Thursday', 'Friday'], 0)] },
      quiz: [
        mc('"Take us through" means to…', ['explain step by step', 'walk away', 'drive us'], 0),
        mc('An "action item" is…', ['a task someone agrees to do', 'a type of film', 'a chair'], 0),
        mc('Which phrase interrupts politely?', ['Sorry to interrupt, but could I add…?', 'Stop talking.', 'That is wrong.'], 0),
        mc('Constructive feedback focuses on…', ['specific behaviour and its impact', 'personal character', 'rumours'], 0),
        mc('When you receive feedback, a good reply is…', ['Thank you, that is helpful.', 'You are wrong.', 'I do not care.'], 0),
        fill('Let us ___ that for now and come back later. (park)', 'park'),
        order('Para resumir, lanzamos el lunes.', 'To sum up, we launch on Monday.'),
        hear(['Let us review the agenda.', 'Let us review the agent.', 'Let us renew the agenda.'], 0, 'Se oía «agenda».')
      ]
    },

    {
      id: 'w09', track: 'work', level: 'C1', title: 'Presentaciones y preguntas del público', en: 'Presentations and Q&A',
      explain:
        '<p>Una buena presentación tiene <b>estructura visible</b> y un lenguaje que guía al público.</p>' +
        '<table><tr><th>Momento</th><th>Frases</th></tr>' +
        '<tr><td>Abrir</td><td><i lang="en">Good morning, everyone. Today I would like to talk about…</i></td></tr>' +
        '<tr><td>Anunciar estructura</td><td><i lang="en">I will cover three points: first… second… finally…</i></td></tr>' +
        '<tr><td>Pasar de punto</td><td><i lang="en">Let us move on to… / That brings me to…</i></td></tr>' +
        '<tr><td>Describir datos</td><td><i lang="en">As you can see, sales rose by 20 percent. / This chart shows…</i></td></tr>' +
        '<tr><td>Cerrar</td><td><i lang="en">To conclude, … / The key takeaway is…</i></td></tr>' +
        '<tr><td>Invitar preguntas</td><td><i lang="en">I would be happy to take any questions.</i></td></tr></table>' +
        '<p><b>Responder preguntas difíciles:</b></p>' +
        '<ul><li>Ganar tiempo: <i lang="en">That is a good question. Let me think for a moment.</i></li>' +
        '<li>Aclarar: <i lang="en">If I understand correctly, you are asking whether…?</i></li>' +
        '<li>No saber: <i lang="en">I do not have the exact figure with me, but I will get back to you by Friday.</i></li>' +
        '<li>Redirigir: <i lang="en">That is outside the scope of today\'s talk, but I am happy to discuss it afterwards.</i></li></ul>',
      vocab: [
        ['cover', 'abarcar, tratar (un tema)', 'I will cover three main points.'],
        ['that brings me to', 'eso me lleva a', 'That brings me to my next point.'],
        ['as you can see', 'como pueden ver', 'As you can see, sales have risen.'],
        ['key takeaway', 'idea clave', 'The key takeaway is simple.'],
        ['take questions', 'responder preguntas', 'I am happy to take questions.'],
        ['get back to you', 'responderte más tarde', 'I will get back to you tomorrow.'],
        ['outside the scope', 'fuera del alcance', 'That is outside the scope of this talk.'],
        ['if I understand correctly', 'si entiendo bien', 'If I understand correctly, you want a refund.'],
        ['audience', 'público, audiencia', 'The audience asked many questions.'],
        ['rehearse', 'ensayar', 'We rehearsed the talk twice.']
      ],
      ex: [
        mc('Which phrase announces the structure?', ['I will cover three points.', 'I am tired.', 'The end.'], 0),
        mc('"That brings me to…" is used to…', ['move to the next point', 'end the call', 'ask for money'], 0),
        mc('When you do not know the answer, you can say…', ['I will get back to you by Friday.', 'I never know anything.', 'Next question.'], 0),
        fill('If I ___ correctly, you are asking about cost. (understand)', 'understand'),
        mc('"Outside the scope" means…', ['not part of the topic', 'inside the room', 'very important'], 0),
        order('Con gusto responderé preguntas.', 'I would be happy to take questions.')
      ],
      read: {
        t: "Good morning, everyone. Today I would like to talk about our new customer support system. I will cover three points: the problem, the solution, and the results. First, as you can see on this chart, waiting times had risen by thirty percent last year. That brings me to the solution: an automated assistant that answers simple questions in seconds. Finally, the results: customer satisfaction has increased and the team now has more time for complex cases. To conclude, the key takeaway is that technology works best when it supports people, not when it replaces them. I would be happy to take any questions.",
        tr: 'Buenos días a todos. Hoy quiero hablar de nuestro nuevo sistema de atención al cliente. Cubriré tres puntos: el problema, la solución y los resultados. Primero, como pueden ver en este gráfico, los tiempos de espera habían subido un treinta por ciento el año pasado. Eso me lleva a la solución: un asistente automático que responde preguntas simples en segundos. Por último, los resultados: la satisfacción de los clientes ha aumentado y el equipo ahora tiene más tiempo para casos complejos. Para concluir, la idea clave es que la tecnología funciona mejor cuando apoya a las personas, no cuando las reemplaza. Con gusto responderé preguntas.',
        q: [mc('How many points will the speaker cover?', ['Three', 'Five', 'One'], 0), mc('What does the chart show?', ['Waiting times rose by thirty percent', 'Sales fell', 'Prices doubled'], 0), mc('What is the key takeaway?', ['Technology works best when it supports people', 'Technology should replace people', 'Customers do not matter'], 0)]
      },
      write: { p: 'Escribe la introducción de una presentación de 4 frases sobre un tema que conozcas: saludo, tema, estructura (three points) y una frase final invitando a preguntas.', m: 'Good morning, everyone. Today I would like to talk about online security. I will cover three points: risks, tools, and habits. I would be happy to take questions at the end.' },
      q: 'English presentation phrases structure Q&A questions answering difficult questions',
      listen: { d: [['Speaker', 'To conclude, the key takeaway is to update your systems regularly. I would be happy to take any questions.'], ['Listener', 'If I understand correctly, you recommend weekly updates. What is the cost?'], ['Speaker', 'That is a good question. I do not have the exact figure with me, but I will get back to you by Friday.'], ['Listener', 'Thank you. And does this include mobile devices?'], ['Speaker', 'That is outside the scope of today\'s talk, but I am happy to discuss it afterwards.']],
        q: [mc('¿Qué pregunta hace el oyente primero?', ['What is the cost', 'Where is the exit', 'Who is the speaker'], 0), mc('¿Cuándo responderá el ponente sobre el costo?', ['By Friday', 'Today', 'Never'], 0), mc('¿Qué dice sobre los dispositivos móviles?', ['It is outside the scope', 'They are not safe', 'They are free'], 0)] },
      quiz: [
        mc('"As you can see" is used when…', ['you point to data or a slide', 'you end the talk', 'you ask for water'], 0),
        mc('To clarify a question, say…', ['If I understand correctly, you are asking…', 'Be quiet.', 'No.'], 0),
        mc('"Rehearse" means to…', ['practise before the real event', 'cancel', 'forget'], 0),
        mc('Which phrase concludes a talk?', ['To conclude, …', 'First, …', 'By the way, …'], 0),
        mc('You do not have the exact number. Best reply:', ['I will get back to you with the exact figure.', 'I made it up.', 'It is a secret.'], 0),
        fill('That is a good question. Let me ___ for a moment. (think)', 'think'),
        order('Eso me lleva a mi siguiente punto.', 'That brings me to my next point.'),
        hear(['I will cover three points.', 'I will clover three points.', 'I will collar three points.'], 0, 'Se oía «cover».')
      ]
    },

    {
      id: 'p10', track: 'pron', level: 'C1', title: 'Entonación para actitud y matices', en: 'Intonation for attitude',
      speak: ['Really? That is great news!', 'Well, I suppose we could try it.', 'You did WHAT with the server?', 'Could you send me the file, please?'],
      explain:
        '<p>La <b>entonación</b> (subir y bajar la voz) comunica <b>actitud</b>: interés, duda, sorpresa, cortesía o enojo. Dos personas pueden decir las mismas palabras y expresar cosas muy distintas.</p>' +
        '<table><tr><th>Patrón</th><th>Significado</th><th>Ejemplo</th></tr>' +
        '<tr><td>Baja al final ↘</td><td>afirmación segura, preguntas con wh-</td><td><i lang="en">I am sure. / Where do you live?</i></td></tr>' +
        '<tr><td>Sube al final ↗</td><td>preguntas de sí/no, duda, cortesía</td><td><i lang="en">Is it ready? / Could you help me?</i></td></tr>' +
        '<tr><td>Baja y sube ↘↗</td><td>reserva, «pero…»</td><td><i lang="en">It is OK… (pero no me convence)</i></td></tr>' +
        '<tr><td>Sube y baja ↗↘</td><td>entusiasmo, énfasis</td><td><i lang="en">That is amazing!</i></td></tr></table>' +
        '<p>La <b>palabra enfatizada</b> cambia el sentido: <i lang="en">I didn\'t say HE stole it</i> (otra persona lo dijo) vs <i lang="en">I didn\'t say he STOLE it</i> (dije otra cosa). Un tono plano suena <b>desinteresado o frío</b>, aunque lo que digas sea amable.</p>' +
        '<p>Práctica: di <i lang="en">Thank you</i> como entusiasmo, como cortesía formal y como sarcasmo. Grábate y compara.</p>',
      vocab: [
        ['intonation', 'entonación', 'Intonation shows your attitude.'],
        ['rising', 'ascendente', 'Yes-no questions often have rising intonation.'],
        ['falling', 'descendente', 'Statements usually have falling intonation.'],
        ['attitude', 'actitud', 'Your voice shows your attitude.'],
        ['sarcasm', 'sarcasmo', 'Sarcasm depends on tone of voice.'],
        ['enthusiasm', 'entusiasmo', 'Show enthusiasm with a wider pitch.'],
        ['pitch', 'tono (agudo/grave)', 'Raise your pitch on the key word.'],
        ['flat', 'plano, monótono', 'A flat voice can sound bored.'],
        ['polite', 'cortés', 'Rising intonation sounds polite.'],
        ['surprise', 'sorpresa', 'Her voice showed surprise.']
      ],
      ex: [
        mc('Yes/no questions usually end with…', ['rising intonation', 'falling intonation', 'no intonation'], 0),
        mc('Wh- questions ("Where do you live?") usually end with…', ['falling intonation', 'rising intonation', 'silence'], 0),
        mc('A flat, monotone voice can sound…', ['bored or cold', 'excited', 'polite and warm'], 0),
        mc('Which element changes the meaning of "I didn\'t say HE stole it"?', ['The stressed word', 'The spelling', 'The font'], 0),
        mc('Enthusiasm is usually shown with…', ['a wider pitch range', 'a whisper', 'no change'], 0),
        hear(['Really?', 'Rarely?', 'Reality?'], 0, 'Se oía «Really».')
      ],
      read: {
        t: 'Tone of voice is a powerful part of communication. When you say "Thank you" with a wide pitch range and a smile, it sounds warm and sincere. The same words with a flat tone can sound cold or even rude. In English, rising intonation at the end of a request ("Could you help me?") sounds polite, while a falling pitch at the end of a statement shows confidence. Stress can also change meaning: "I did not say she was late" suggests someone else said it, but "I did not say she was LATE" means I said something different. Recording yourself and listening carefully is a good way to improve.',
        tr: 'El tono de voz es una parte poderosa de la comunicación. Cuando dices «Thank you» con un rango de tono amplio y una sonrisa, suena cálido y sincero. Las mismas palabras con tono plano pueden sonar frías o incluso groseras. En inglés, la entonación ascendente al final de una petición («Could you help me?») suena cortés, mientras que un tono descendente al final de una afirmación muestra seguridad. El énfasis también puede cambiar el significado: «I did not say she was late» sugiere que otra persona lo dijo, pero «I did not say she was LATE» significa que dije algo diferente. Grabarte y escucharte con atención es una buena forma de mejorar.',
        q: [mc('What does a flat tone sound like?', ['Cold or even rude', 'Warm', 'Excited'], 0), mc('Which intonation is polite at the end of a request?', ['Rising', 'Falling', 'None'], 0), mc('How can you improve?', ['Record yourself and listen', 'Speak faster', 'Avoid questions'], 0)]
      },
      write: { p: 'Escribe 4 frases cortas y marca con una flecha (↗ o ↘) cómo terminarías cada una. Luego léelas en voz alta. Incluye una pregunta de sí/no y una con Where/What.', m: 'Could you help me? ↗ Where is the office? ↘ I am sure it is ready. ↘ Is it ready? ↗' },
      q: 'English intonation attitude rising falling pitch meaning',
      listen: { d: [['Coach', 'Say thank you as if you are really excited. Use a high, wide pitch.'], ['Student', 'Thank you!'], ['Coach', 'Now say it politely, in a formal meeting. Use a calm, falling tone.'], ['Student', 'Thank you very much.'], ['Coach', 'Good. Your pitch changes the attitude, even though the words are the same.']],
        q: [mc('¿Qué cambia con el tono?', ['The attitude', 'The spelling', 'The grammar'], 0), mc('¿Cómo suena el entusiasmo?', ['High and wide pitch', 'Very low', 'No sound'], 0), mc('¿Qué dice el coach al final?', ['The pitch changes attitude', 'The words are wrong', 'Stop practising'], 0)] },
      quiz: [
        mc('Falling intonation at the end of a statement shows…', ['confidence', 'doubt', 'a question'], 0),
        mc('"Could you help me?" sounds polite with…', ['a rising ending', 'a flat ending', 'a falling ending only'], 0),
        mc('Sarcasm depends mainly on…', ['tone of voice', 'spelling', 'punctuation only'], 0),
        mc('"Pitch" refers to how…', ['high or low the voice is', 'loud the voice is', 'fast the voice is'], 0),
        hear(['You did what?', 'You hid what?', 'You did it?'], 0, 'Se oía «You did what».'),
        hear(['I am sure.', 'I am late.', 'I am sick.'], 0, 'Se oía «sure».'),
        fill('Statements usually have ___ intonation. (falling)', 'falling'),
        order('¿Podrías enviarme el archivo, por favor?', 'Could you send me the file please?')
      ]
    }

  );
})();
