/* Inglés general, nivel B1 (parte 2): g23 a g27. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 'g23', track: 'general', level: 'B1', title: 'Hábitos del pasado: used to y would', en: 'Past habits: used to and would',
      explain:
        '<p>Para hablar de cosas que <b>hacías antes y ya no haces</b>, usa <i lang="en">used to</i> + verbo. Sirve para <b>hábitos</b> y para <b>estados</b>.</p>' +
        '<table><tr><th>Forma</th><th>Ejemplo</th></tr>' +
        '<tr><td>Afirmativa</td><td><i lang="en">I used to play football.</i></td></tr>' +
        '<tr><td>Negativa</td><td><i lang="en">I didn\'t use to like fish.</i></td></tr>' +
        '<tr><td>Pregunta</td><td><i lang="en">Did you use to live here?</i></td></tr></table>' +
        '<p><b>Ojo:</b> con <i lang="en">did / didn\'t</i> se escribe <i lang="en">use</i> (sin -d).</p>' +
        '<p><b>Would</b> también cuenta hábitos pasados, pero solo <b>acciones repetidas</b>, no estados: <i lang="en">Every summer we would visit the beach.</i> (No: <i lang="en">I would have a dog.</i> → <i lang="en">I used to have a dog.</i>)</p>' +
        '<p><b>No lo confundas con</b> <i lang="en">get used to + -ing</i> = acostumbrarse: <i lang="en">I am getting used to the cold.</i></p>',
      vocab: [
        ['used to', 'solía (hábito del pasado)', 'I used to play football.'],
        ['would', 'solía (acción repetida)', 'Every summer we would visit the beach.'],
        ['childhood', 'infancia', 'I had a happy childhood.'],
        ['grow up', 'crecer', 'I grew up in a small town.'],
        ['move house', 'mudarse de casa', 'We moved house in 2015.'],
        ['no longer', 'ya no', 'I no longer play football.'],
        ['anymore', 'ya no (al final de la frase)', 'I do not live there anymore.'],
        ['when I was a child', 'cuando era niño/a', 'When I was a child, I was shy.'],
        ['every summer', 'cada verano', 'Every summer we went to the beach.'],
        ['get used to', 'acostumbrarse a', 'I am getting used to the cold.']
      ],
      ex: [
        mc('When I was a child, I ___ play football every day.', ['used to', 'use to', 'am used to'], 0, '<i lang="en">used to</i> + verbo = hábito del pasado.'),
        mc('She ___ live in Quito, but now she lives in Lima.', ['used to', 'is used to', 'uses to'], 0),
        fill("He didn't ___ to like coffee. (use)", 'use', 'Con <i lang="en">didn\'t</i> se escribe <i lang="en">use</i>, sin -d.'),
        mc('¿Cuál es correcta?', ['I use to walk to school.', 'I used to walk to school.', 'I used walk to school.'], 1),
        order('Antes vivíamos en Cuenca.', 'We used to live in Cuenca.'),
        mc('¿Cuál frase NO suena natural?', ['I used to have a dog.', 'I would have a dog when I was little.', 'Every summer we would visit the beach.'], 1, '<i lang="en">Would</i> no se usa con estados como <i lang="en">have</i> (tener); ahí se usa <i lang="en">used to</i>.')
      ],
      read: {
        t: 'When I was a child, I lived in a small town. Every summer we would visit my grandparents. My grandfather used to tell stories about the mountains. We used to play outside all day. Now I live in Quito and I no longer see them often, but I call them every Sunday.',
        tr: 'Cuando era niño, vivía en un pueblo pequeño. Cada verano visitábamos a mis abuelos. Mi abuelo solía contar historias sobre las montañas. Solíamos jugar afuera todo el día. Ahora vivo en Quito y ya no los veo seguido, pero los llamo cada domingo.',
        q: [mc('Where did the writer live as a child?', ['In a small town', 'In Quito', 'In Lima'], 0), mc('What does the writer do now?', ['Calls them every Sunday', 'Visits them every summer', 'Plays outside all day'], 0)]
      },
      write: { p: 'Escribe 4 frases sobre cómo eras de niño o niña: dos con used to, una con would y una con didn\'t use to.', m: "I used to live in Cuenca. I used to play football every day. Every summer we would visit my grandparents. I didn't use to like vegetables." },
      q: 'used to and would English past habits',
      listen: { d: [['Ana', 'Do you still play football?'], ['Leo', "No, I don't. I used to play every day when I was a teenager."], ['Ana', 'Why did you stop?'], ['Leo', 'I moved to another city, and I no longer have time. But every summer we would play on the beach with my cousins.'], ['Ana', 'That sounds fun. I used to be shy, but now I love meeting people.']],
        q: [mc('¿Con qué frecuencia jugaba Leo de adolescente?', ['Every day', 'Every weekend', 'Never'], 0), mc('¿Por qué dejó de jugar?', ['He moved and has no time', 'He got injured', 'He does not like it'], 0), mc('¿Cómo solía ser Ana?', ['Shy', 'Loud', 'Lazy'], 0)] },
      quiz: [
        mc('I ___ smoke, but I quit two years ago.', ['used to', 'am used to', 'would to'], 0),
        mc('Did you ___ live here?', ['used to', 'use to', 'using to'], 1),
        mc('They ___ to work late, but now they finish at five.', ['used', 'use', 'would'], 0),
        fill('She ___ to be afraid of dogs. (used)', 'used'),
        fill("We didn't ___ to have a car.", 'use'),
        mc('Every Sunday we ___ eat at my grandmother\'s house.', ['would', 'were', 'are'], 0, 'Acción repetida en el pasado: would.'),
        order('¿Solías jugar aquí?', 'Did you use to play here?'),
        hear(['I used to live here.', 'I used to leave here.', 'I used to love here.'], 0, 'Se oía «live».')
      ]
    },

    {
      id: 'g24', track: 'general', level: 'B1', title: 'Verbo + -ing o verbo + to', en: 'Gerunds and infinitives',
      explain:
        '<p>Cuando dos verbos van juntos, el segundo cambia de forma según el primero. Hay que <b>aprender cada grupo</b>:</p>' +
        '<table><tr><th>Verbo + -ing</th><th>Verbo + to + verbo</th></tr>' +
        '<tr><td>enjoy, avoid, finish, mind, keep</td><td>want, decide, hope, plan, need, try</td></tr>' +
        '<tr><td><i lang="en">I enjoy learning English.</i></td><td><i lang="en">I want to learn English.</i></td></tr></table>' +
        '<p><b>Después de una preposición</b> siempre -ing: <i lang="en">Thanks for helping me. I am interested in learning.</i> También: <i lang="en">look forward to seeing you</i>.</p>' +
        '<p><b>Cambian de significado:</b> <i lang="en">I stopped drinking coffee</i> (dejé el café) vs <i lang="en">I stopped to drink coffee</i> (paré para tomar café).</p>',
      vocab: [
        ['enjoy', 'disfrutar', 'I enjoy learning English.'],
        ['avoid', 'evitar', 'He avoids going out at night.'],
        ['finish', 'terminar', 'We finished writing the report.'],
        ['decide', 'decidir', 'She decided to change jobs.'],
        ['hope', 'esperar, tener la esperanza', 'I hope to see you soon.'],
        ['plan', 'planear', 'They plan to travel in July.'],
        ['mind', 'importar, molestar', 'I do not mind waiting.'],
        ['keep', 'seguir, continuar', 'Keep practicing every day.'],
        ['look forward to', 'tener ganas de, esperar con ilusión', 'I look forward to meeting you.'],
        ['be interested in', 'estar interesado en', 'I am interested in cybersecurity.']
      ],
      ex: [
        mc('I enjoy ___ English.', ['learn', 'to learn', 'learning'], 2, '<i lang="en">enjoy</i> + -ing.'),
        mc('She decided ___ a new job.', ['finding', 'to find', 'find'], 1, '<i lang="en">decide</i> + to + verbo.'),
        fill('We finished ___ the report at five. (write)', 'writing'),
        mc('I look forward to ___ you.', ['see', 'seeing', 'to see'], 1, 'Después de <i lang="en">to</i> preposición va -ing.'),
        order('Espero verte pronto.', 'I hope to see you soon.'),
        mc('¿Cuál es correcta?', ['I want going home.', 'I want to go home.', 'I want go home.'], 1)
      ],
      read: {
        t: 'Last year I decided to change my career. I wanted to work in cybersecurity, so I started studying every night. At first I avoided asking questions because I was shy, but then I stopped worrying about mistakes. Now I enjoy learning new tools and I hope to get a job next year. I am looking forward to starting my first project.',
        tr: 'El año pasado decidí cambiar de carrera. Quería trabajar en ciberseguridad, así que empecé a estudiar todas las noches. Al principio evitaba hacer preguntas porque era tímido, pero luego dejé de preocuparme por los errores. Ahora disfruto aprendiendo herramientas nuevas y espero conseguir un trabajo el próximo año. Tengo ganas de empezar mi primer proyecto.',
        q: [mc('Why did the writer avoid asking questions?', ['He was shy', 'He was busy', 'He knew everything'], 0), mc('What does the writer hope to do?', ['Get a job next year', 'Move abroad', 'Stop studying'], 0)]
      },
      write: { p: 'Escribe 4 frases: dos con enjoy / avoid + -ing y dos con want / hope / plan + to.', m: 'I enjoy listening to podcasts. I avoid studying late at night. I want to improve my English. I plan to travel next year.' },
      q: 'gerund or infinitive English grammar',
      listen: { d: [['Ana', 'What are your plans for this year?'], ['Leo', 'I want to improve my English. I enjoy listening to podcasts, so I plan to listen every day.'], ['Ana', 'Great. Do you mind studying on weekends?'], ['Leo', "No, I don't mind. But I try to avoid studying late at night."], ['Ana', 'Good idea. I look forward to hearing about your progress.']],
        q: [mc('¿Qué quiere mejorar Leo?', ['His English', 'His job', 'His health'], 0), mc('¿Qué disfruta hacer?', ['Listening to podcasts', 'Playing games', 'Cooking'], 0), mc('¿Qué evita?', ['Studying late at night', 'Studying in the morning', 'Listening to podcasts'], 0)] },
      quiz: [
        mc('He kept ___ the same mistake.', ['to make', 'making', 'make'], 1),
        mc('I hope ___ you next week.', ['seeing', 'to see', 'see'], 1),
        mc('Thanks for ___ me.', ['help', 'to help', 'helping'], 2),
        fill('They want ___ a new server. (buy)', 'to buy'),
        fill('I enjoy ___ code. (write)', 'writing'),
        mc('I stopped ___ coffee. (dejé el café)', ['drinking', 'to drink', 'drink'], 0),
        order('Disfruto aprender inglés.', 'I enjoy learning English.'),
        hear(['I enjoy reading.', 'I enjoy riding.', 'I enjoy writing.'], 0, 'Se oía «reading».')
      ]
    },

    {
      id: 'g25', track: 'general', level: 'B1', title: 'Deducir: must be, can\'t be, might be', en: 'Modals of deduction',
      explain:
        '<p>Para <b>deducir</b> algo según las pistas que ves, usa estos verbos. Dependen de qué tan seguro estás:</p>' +
        '<table><tr><th>Seguridad</th><th>Verbo</th><th>Ejemplo</th></tr>' +
        '<tr><td>Casi seguro (sí)</td><td>must be</td><td><i lang="en">He must be at work.</i></td></tr>' +
        '<tr><td>No estoy seguro</td><td>might / may / could be</td><td><i lang="en">It might be a virus.</i></td></tr>' +
        '<tr><td>Casi seguro (no)</td><td>can\'t be</td><td><i lang="en">That can\'t be right.</i></td></tr></table>' +
        '<p><b>Ojo:</b> para deducir <b>no</b> se usa <i lang="en">mustn\'t</i>; se usa <i lang="en">can\'t</i>. (<i lang="en">mustn\'t</i> es prohibición.)</p>' +
        '<p>Para el pasado: <i lang="en">must have + participio</i>: <i lang="en">She must have forgotten.</i></p>',
      vocab: [
        ['must be', 'debe de ser / estar', 'He must be at work.'],
        ["can't be", 'no puede ser / estar', "That can't be the right password."],
        ['might', 'quizás, podría', 'It might rain later.'],
        ['may', 'puede que', 'She may be late.'],
        ['could', 'podría (ser)', 'It could be a server problem.'],
        ['probably', 'probablemente', 'It is probably a bug.'],
        ['certain', 'seguro', 'I am certain about this.'],
        ['possible', 'posible', 'It is possible, but not likely.'],
        ['impossible', 'imposible', 'That is impossible.'],
        ['perhaps', 'quizás', 'Perhaps they are in a meeting.']
      ],
      ex: [
        mc('The light is on. He ___ be at home.', ['must', "can't", 'is'], 0),
        mc("That ___ be our server. It is way too fast. (imposible)", ['must', "can't", 'might'], 1),
        mc("I'm not sure. It ___ rain later.", ['must', 'might', "can't"], 1),
        fill('She ___ be tired. She worked all night. (casi seguro)', 'must'),
        fill("It ___ be a virus, but I am not sure. (quizás)", ['might', 'may', 'could']),
        order('Debe ser un error.', 'It must be a mistake.')
      ],
      read: {
        t: "The office is quiet. The lights are off and the door is closed. Nobody answered my call. They must be in a meeting, or they might be at lunch. They can't be on holiday, because I saw Ana yesterday. Maybe they are in the other building. Let us check there.",
        tr: 'La oficina está en silencio. Las luces están apagadas y la puerta cerrada. Nadie contestó mi llamada. Deben de estar en una reunión, o quizás estén almorzando. No pueden estar de vacaciones, porque vi a Ana ayer. Tal vez estén en el otro edificio. Vamos a revisar ahí.',
        q: [mc("Why can't they be on holiday?", ['The writer saw Ana yesterday', 'The door is open', 'They answered the call'], 0), mc('Where might they be?', ['At lunch', 'At home', 'Abroad'], 0)]
      },
      write: { p: "Mira tu entorno y escribe 4 deducciones con must be, might be y can't be.", m: "The neighbors must be at home. The lights are on. It might rain tonight. That can't be my phone; mine is black." },
      q: 'modals of deduction must be can\'t be might be',
      listen: { d: [['Sam', 'The website is not loading.'], ['Mia', 'It must be a server problem. Is the Wi-Fi working?'], ['Sam', "Yes, other pages work. It can't be the Wi-Fi."], ['Mia', 'Then the server might be down. It could also be a DNS error.'], ['Sam', 'Let me check the status page.']],
        q: [mc('¿Qué cree Mia que es?', ['A server problem', 'A broken screen', 'A weak password'], 0), mc('¿Puede ser el Wi-Fi?', ['No', 'Yes', 'Maybe'], 0), mc('¿Qué hará Sam?', ['Check the status page', 'Call the boss', 'Restart the router'], 0)] },
      quiz: [
        mc("He has been working for twelve hours. He ___ be exhausted.", ['must', "can't", 'might not'], 0),
        mc("She ___ be at home. I just saw her at work.", ['must', "can't", 'might'], 1),
        mc("I am not sure, but it ___ be a bug.", ['must', 'could', "can't"], 1),
        fill('This ___ be the right file. The size is correct. (seguro)', 'must'),
        fill("That ___ be true. It makes no sense. (imposible)", ["can't", 'cannot']),
        order('Podría ser un virus.', 'It could be a virus.'),
        mc('«Might» expresa…', ['posibilidad', 'obligación', 'permiso'], 0),
        hear(['It must be.', "It can't be.", 'It might be.'], 1, "Se oía «can't»." )
      ]
    },

    {
      id: 'g26', track: 'general', level: 'B1', title: 'Phrasal verbs de todos los días', en: 'Everyday phrasal verbs',
      explain:
        '<p>Un <b>phrasal verb</b> es un verbo + una partícula (<i lang="en">up, out, off, on…</i>). El significado muchas veces <b>no se deduce</b> de las palabras sueltas: hay que aprenderlos completos.</p>' +
        '<table><tr><th>Phrasal verb</th><th>Significado</th></tr>' +
        '<tr><td><i lang="en">look for</i></td><td>buscar</td></tr><tr><td><i lang="en">look up</i></td><td>buscar (en un diccionario o en internet)</td></tr>' +
        '<tr><td><i lang="en">find out</i></td><td>averiguar, enterarse</td></tr><tr><td><i lang="en">give up</i></td><td>rendirse</td></tr></table>' +
        '<p><b>Separables:</b> el objeto puede ir en medio: <i lang="en">pick up the box / pick the box up</i>. Si el objeto es un pronombre, <b>siempre en medio</b>: <i lang="en">pick it up</i> (no: <i lang="en">pick up it</i>).</p>' +
        '<p><b>Inseparables:</b> <i lang="en">look for, get along with, run out of</i> → no se separan: <i lang="en">I am looking for my keys.</i></p>',
      vocab: [
        ['look for', 'buscar', 'I am looking for my keys.'],
        ['look up', 'buscar (información)', 'Look up the word in the dictionary.'],
        ['give up', 'rendirse', 'Do not give up. You can do it.'],
        ['find out', 'averiguar', 'I need to find out the time.'],
        ['turn up', 'subir (volumen), aparecer', 'Please turn up the volume.'],
        ['pick up', 'recoger, levantar', 'Can you pick me up at six?'],
        ['set up', 'configurar, organizar', 'I set up my new laptop.'],
        ['carry on', 'continuar', 'Please carry on with your work.'],
        ['get along', 'llevarse bien', 'I get along with my coworkers.'],
        ['run out of', 'quedarse sin', 'We ran out of milk.']
      ],
      ex: [
        mc('I am ___ my keys. Have you seen them?', ['looking for', 'looking at', 'looking up'], 0),
        mc("Don't ___! You are almost there.", ['give up', 'take off', 'look for'], 0),
        fill('Can you ___ out what time the bus leaves? (averiguar)', 'find'),
        mc('We ran ___ of milk.', ['out', 'off', 'up'], 0),
        order('Recógelo, por favor.', 'Pick it up, please.'),
        mc('¿Cuál es correcta?', ['Turn off it.', 'Turn it off.', 'Off turn it.'], 1, 'Con pronombre (it), va en medio.')
      ],
      read: {
        t: 'Yesterday I set up my new laptop. First, I looked up the instructions online. Then I found out that I needed a driver, so I looked for it on the website. At the end, I ran out of battery and I had to plug in the charger. I almost gave up, but I carried on and it worked.',
        tr: 'Ayer configuré mi laptop nueva. Primero busqué las instrucciones en internet. Luego averigüé que necesitaba un controlador, así que lo busqué en el sitio web. Al final me quedé sin batería y tuve que conectar el cargador. Casi me rindo, pero seguí y funcionó.',
        q: [mc('What did the writer look up?', ['The instructions', 'A movie', 'A friend'], 0), mc('Why did he plug in the charger?', ['He ran out of battery', 'The screen broke', 'It was a gift'], 0)]
      },
      write: { p: 'Escribe 4 frases sobre tu día usando phrasal verbs (look for, find out, give up, pick up…).', m: 'I looked for my phone this morning. I found out that it was in my bag. A friend picked me up at seven. I never give up.' },
      q: 'everyday phrasal verbs English',
      listen: { d: [['Ana', 'Hi Leo, why are you late?'], ['Leo', 'I ran out of gas, so I had to walk. Then I looked for a bus stop.'], ['Ana', 'Did you find out the time of the next bus?'], ['Leo', 'Yes, but I almost gave up. Finally a friend picked me up.'], ['Ana', 'Oh good. We can carry on with the meeting now.']],
        q: [mc('¿Por qué llegó tarde Leo?', ['He ran out of gas', 'He lost his keys', 'He slept late'], 0), mc('¿Quién lo recogió?', ['A friend', 'A taxi', 'Ana'], 0), mc('¿Qué harán ahora?', ['Carry on with the meeting', 'Go home', 'Have lunch'], 0)] },
      quiz: [
        mc('Please ___ the light. It is too bright.', ['turn off', 'turn up', 'turn on'], 0),
        mc('I need to ___ this word in the dictionary.', ['look up', 'look after', 'look like'], 0),
        mc('Do not ___ . You are doing well.', ['give up', 'run out', 'pick up'], 0),
        fill('Can you ___ me up at six? (recoger)', 'pick'),
        fill("I can't ___ along with my neighbor. (llevarme bien)", 'get'),
        order('Averigua la hora.', 'Find out the time.'),
        mc('«Run out of» significa…', ['quedarse sin', 'salir corriendo', 'correr rápido'], 0),
        hear(['give up', 'live up', 'give it'], 0, 'Se oía «give up».')
      ]
    },

    {
      id: 'g27', track: 'general', level: 'B1', title: 'Opinar, estar de acuerdo y contrastar ideas', en: 'Opinions and contrast',
      explain:
        '<p>Para <b>dar tu opinión</b>: <i lang="en">I think… / I believe… / In my opinion,…</i></p>' +
        '<p>Para <b>estar de acuerdo o no</b>: <i lang="en">I agree (with you). / I disagree. / That is true, but…</i></p>' +
        '<table><tr><th>Conector</th><th>Cómo se usa</th></tr>' +
        '<tr><td><i lang="en">Although</i> + frase</td><td><i lang="en">Although it is expensive, I like it.</i></td></tr>' +
        '<tr><td><i lang="en">However,</i> (con coma)</td><td><i lang="en">It is cheap. However, it is not good.</i></td></tr>' +
        '<tr><td><i lang="en">On the other hand,</i></td><td>presenta el otro lado de un tema</td></tr>' +
        '<tr><td><i lang="en">For example,</i> / <i lang="en">In conclusion,</i></td><td>ejemplo / cierre</td></tr></table>' +
        '<p><b>Ojo:</b> <i lang="en">although</i> y <i lang="en">but</i> no van juntos en la misma frase.</p>',
      vocab: [
        ['in my opinion', 'en mi opinión', 'In my opinion, it is a good idea.'],
        ['I believe', 'creo que', 'I believe it is possible.'],
        ['I agree', 'estoy de acuerdo', 'I agree with you.'],
        ['I disagree', 'no estoy de acuerdo', 'I disagree with that point.'],
        ['although', 'aunque', 'Although it is cold, I like it.'],
        ['on the other hand', 'por otro lado', 'On the other hand, it is expensive.'],
        ['in fact', 'de hecho', 'In fact, I prefer to work at home.'],
        ['for example', 'por ejemplo', 'For example, Python is easy to learn.'],
        ['as a result', 'como resultado', 'As a result, we lost the data.'],
        ['in conclusion', 'en conclusión', 'In conclusion, the plan is good.']
      ],
      ex: [
        mc('___ it is expensive, I like it.', ['Although', 'However', 'Because'], 0),
        mc('It is cheap. ___ , it is not very good.', ['Although', 'However', 'Because of'], 1),
        fill('In my ___ , remote work is better. (opinión)', 'opinion'),
        mc('Para dar tu opinión:', ['I believe that it is useful.', 'I am believing it useful.', 'I believes it is useful.'], 0),
        order('Estoy de acuerdo contigo.', 'I agree with you.'),
        mc('«On the other hand» sirve para…', ['mostrar el otro lado', 'terminar el texto', 'dar un ejemplo'], 0)
      ],
      read: {
        t: 'Some people think working from home is better. In my opinion, it has advantages and disadvantages. You save time because you do not travel to the office. On the other hand, it can be lonely. Although many companies like remote work, others prefer an office. In conclusion, the best option depends on the person.',
        tr: 'Algunas personas piensan que trabajar desde casa es mejor. En mi opinión, tiene ventajas y desventajas. Ahorras tiempo porque no viajas a la oficina. Por otro lado, puede ser solitario. Aunque a muchas empresas les gusta el trabajo remoto, otras prefieren una oficina. En conclusión, la mejor opción depende de la persona.',
        q: [mc("What is the writer's main idea?", ['It has advantages and disadvantages', 'It is always better', 'It is always worse'], 0), mc('What is a disadvantage?', ['It can be lonely', 'You pay more', 'You travel more'], 0)]
      },
      write: { p: 'Escribe un párrafo corto (4 a 5 frases) con tu opinión sobre estudiar en línea. Usa although y however.', m: 'In my opinion, online classes are useful. Although they are less social, you can study anywhere. However, you need discipline. For example, I study at night after work. In conclusion, they are a good option.' },
      q: 'giving opinions in English although however',
      listen: { d: [['Sam', 'What do you think about online classes?'], ['Mia', 'In my opinion, they are very useful. Although they are less social, you can study anywhere.'], ['Sam', 'I disagree a little. I believe classroom lessons are better, because the teacher can help you directly.'], ['Mia', 'That is true. However, online classes are cheaper.'], ['Sam', 'Good point. For example, my course is half the price.']],
        q: [mc('¿Qué opina Mia de las clases en línea?', ['They are useful', 'They are useless', 'They are boring'], 0), mc('¿Por qué Sam prefiere las clases presenciales?', ['The teacher can help directly', 'They are cheaper', 'They are shorter'], 0), mc('¿Qué ventaja menciona Mia?', ['They are cheaper', 'They are easier', 'They are shorter'], 0)] },
      quiz: [
        mc('___ she is young, she is very experienced.', ['Although', 'But', 'So'], 0),
        mc('I like the design. ___ , the price is too high.', ['However', 'Although', 'Because'], 0),
        fill('For ___ , Python is a popular language. (ejemplo)', 'example'),
        fill('I ___ with you. (estoy de acuerdo)', 'agree'),
        mc('Para terminar un texto:', ['In conclusion,', 'By the way,', 'However,'], 0),
        order('En mi opinión, es una buena idea.', 'In my opinion, it is a good idea.'),
        mc('«As a result» significa…', ['como resultado', 'a propósito', 'por ejemplo'], 0),
        hear(['although', 'all though', 'altogether'], 0, 'Se oía «although».')
      ]
    }
  );
})();
