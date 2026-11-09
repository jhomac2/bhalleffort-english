/* Inglés general, nivel A2 (g11 a g18). */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order;
  EL.lessons.push(

    {
      id: 'g11', track: 'general', level: 'A2', title: 'Contar lo que pasó: pasado simple', en: 'Past simple',
      explain:
        '<p><b>was / were</b> = era, fue, estuvo: <i lang="en">I / he / she / it <b>was</b></i>; <i lang="en">you / we / they <b>were</b></i>. <i lang="en">I was tired. They were at home.</i></p>' +
        '<p><b>Verbos regulares:</b> verbo + <b>-ed</b>: <i lang="en">work → worked, visit → visited, study → studied, stop → stopped</i>.</p>' +
        '<p><b>Verbos irregulares</b> (hay que memorizarlos): <i lang="en">go → went, have → had, see → saw, eat → ate, buy → bought, make → made, take → took</i>.</p>' +
        '<p><b>Señales de tiempo:</b> <i lang="en">yesterday, last night, last week, two days ago, in 2024</i>.</p>',
      vocab: [
        ['yesterday', 'ayer', 'I studied English yesterday.'],
        ['last week', 'la semana pasada', 'We traveled last week.'],
        ['ago', 'hace (tiempo)', 'I arrived two days ago.'],
        ['went', 'fui, fue (go)', 'She went to the market.'],
        ['had', 'tuve, tuvo (have)', 'We had dinner at eight.'],
        ['saw', 'vi, vio (see)', 'I saw a good movie.'],
        ['ate', 'comí, comió (eat)', 'He ate rice and chicken.'],
        ['bought', 'compré (buy)', 'I bought a new phone.'],
        ['made', 'hice (make)', 'She made a cake.'],
        ['took', 'tomé, llevé (take)', 'They took a taxi.'],
        ['visited', 'visité (visit)', 'We visited my aunt.']
      ],
      ex: [
        mc('I ___ tired yesterday.', ['was', 'were', 'am'], 0, 'I → was.'),
        mc('They ___ at home last night.', ['was', 'were', 'are'], 1, 'they → were.'),
        fill('Yesterday she ___ (go) to the market.', 'went', 'go es irregular: went.'),
        fill('We ___ (visit) my aunt last week.', 'visited', 'Regular: visit + ed.'),
        mc('El pasado de "buy" es:', ['buyed', 'bought', 'boughted'], 1),
        order('Ayer compré un teléfono nuevo.', ['Yesterday I bought a new phone.', 'I bought a new phone yesterday.'])
      ],
      read: {
        t: 'Last weekend I visited my aunt in Cuenca. We took a bus on Saturday morning and arrived at noon. We had lunch in a small restaurant and I ate rice and chicken. In the afternoon we went to the market and I bought a hat. I was very tired, but I was happy.',
        tr: 'El fin de semana pasado visité a mi tía en Cuenca. Tomamos un bus el sábado en la mañana y llegamos al mediodía. Almorzamos en un restaurante pequeño y yo comí arroz con pollo. En la tarde fuimos al mercado y compré un sombrero. Estaba muy cansado, pero feliz.',
        q: [
          mc('They traveled by ___.', ['bus', 'taxi', 'plane'], 0),
          mc('What did the writer buy?', ['A phone', 'A hat', 'A cake'], 1)
        ]
      },
      write: { p: 'Cuenta en 4 frases qué hiciste el fin de semana pasado.', m: 'Last weekend I visited my friend. We ate pizza. I saw a movie. I was tired on Sunday.' },
      q: 'past simple English lesson'
    },

    {
      id: 'g12', track: 'general', level: 'A2', title: 'Preguntar y negar en pasado: did / didn\'t', en: 'Past questions and negatives',
      explain:
        '<p>Para preguntar y negar en pasado usa <b>did / didn\'t</b> + verbo en <b>forma base</b> (sin -ed): <i lang="en">Did you go? I didn\'t go. She didn\'t eat.</i></p>' +
        '<p><b>Preguntas con palabra:</b> <i lang="en">Where did you go? What did he buy? When did they arrive?</i></p>' +
        '<p><b>Respuestas cortas:</b> <i lang="en">Yes, I did. / No, I didn\'t.</i></p>' +
        '<p>Con <b>was / were</b> no se usa <i lang="en">did</i>: <i lang="en">Was it good? It wasn\'t expensive.</i></p>',
      vocab: [
        ['sleep', 'dormir', 'Did you sleep well?'],
        ['arrive', 'llegar', 'When did they arrive?'],
        ['leave', 'salir, irse, dejar', 'What time did you leave?'],
        ['call', 'llamar', 'Did she call you?'],
        ['forget', 'olvidar', "I didn't forget my key."],
        ['finish', 'terminar', 'Did you finish the project?'],
        ['enjoy', 'disfrutar', 'We enjoyed the trip.'],
        ['ask', 'preguntar, pedir', 'I asked for help.'],
        ['meet', 'conocer, reunirse con', 'Did you meet her yesterday?'],
        ['happen', 'pasar, suceder', 'What happened?']
      ],
      ex: [
        mc('___ you go to the party?', ['Do', 'Did', 'Were'], 1, 'Pasado → <i lang="en">Did</i>.'),
        mc("She didn't ___ the email.", ['sent', 'send', 'sends'], 1, 'Después de <i lang="en">didn\'t</i> va el verbo base.'),
        fill('Where ___ you buy it? (do / did)', 'did', 'Pasado → did.'),
        fill("I didn't ___ my keys. (forget)", 'forget', 'Verbo base después de didn\'t.'),
        order('¿Qué pasó ayer?', 'What happened yesterday?'),
        mc('Respuesta corta: Did he call? (no)', ["No, he didn't.", "No, he doesn't.", "No, he wasn't."], 0)
      ],
      read: {
        t: 'Anna: Hi Leo! Did you finish the project? Leo: Not yet. I didn\'t have enough time yesterday. Anna: What happened? Leo: My laptop didn\'t work, so I called the technician. Anna: Did he fix it? Leo: Yes, he did. Now it works!',
        tr: 'Anna: ¡Hola Leo! ¿Terminaste el proyecto? Leo: Todavía no. Ayer no tuve suficiente tiempo. Anna: ¿Qué pasó? Leo: Mi laptop no funcionó, así que llamé al técnico. Anna: ¿Lo arregló? Leo: Sí. ¡Ahora funciona!',
        q: [
          mc('Did Leo finish the project?', ['Yes', 'No, not yet', 'We do not know'], 1),
          mc('Who fixed the laptop?', ['Anna', 'The technician', 'Leo'], 1)
        ]
      },
      write: { p: 'Escribe 3 preguntas sobre el día de ayer de un amigo (did) y 2 respuestas con didn\'t.', m: "Did you study yesterday? What did you eat? Where did you go? I didn't go out. I didn't watch TV." },
      q: 'did didn\'t questions English lesson'
    },

    {
      id: 'g13', track: 'general', level: 'A2', title: 'El futuro: going to y will', en: 'Future: going to and will',
      explain:
        '<p><b>be going to + verbo</b> = planes ya decididos y predicciones con evidencia: <i lang="en">I am going to study tonight. Look at the clouds: it is going to rain.</i></p>' +
        '<p><b>will + verbo</b> = decisiones en el momento, promesas, ofertas: <i lang="en">I\'ll help you. I will call you tomorrow.</i> Negación: <i lang="en">won\'t</i> (will not).</p>' +
        '<p><b>Señales de tiempo:</b> <i lang="en">tomorrow, next week, next year, soon, tonight, in two days</i>.</p>',
      vocab: [
        ['going to', 'ir a (plan)', 'I am going to travel next year.'],
        ['will', 'voy a (promesa, decisión)', 'I will help you.'],
        ["won't", 'no voy a, no habrá', "I won't be late."],
        ['next week', 'la próxima semana', 'We start next week.'],
        ['soon', 'pronto', 'See you soon.'],
        ['plan', 'plan, planear', 'What is your plan?'],
        ['tonight', 'esta noche', 'I am going to study tonight.'],
        ['maybe', 'quizás', 'Maybe I will go.'],
        ['promise', 'prometer, promesa', 'I promise I will call.'],
        ['later', 'más tarde', 'I will call you later.']
      ],
      ex: [
        mc('I ___ study tonight. (plan)', ['am going to', 'will going', 'going'], 0, 'Plan → <i lang="en">am going to</i>.'),
        mc("I promise I ___ be late.", ["won't", 'am not going', "don't"], 0, 'Promesa negativa → <i lang="en">won\'t</i>.'),
        fill('Look at the sky! It is ___ to rain.', 'going', 'Predicción con evidencia: going to.'),
        fill("Don't worry. I ___ help you. (will)", 'will', 'Ofrecer ayuda en el momento → <i lang="en">will</i>.'),
        order('Voy a viajar el próximo año.', ['I am going to travel next year.', 'Next year I am going to travel.']),
        mc('¿Cuál es un plan?', ['I will help you.', 'I am going to study tonight.', 'Maybe it will rain.'], 1)
      ],
      read: {
        t: 'Next year I am going to travel to Canada. I am going to study English there for two months. My brother says: "Don\'t worry, I will help you with the tickets." I promise I will send photos. Maybe I will learn to cook too!',
        tr: 'El próximo año voy a viajar a Canadá. Voy a estudiar inglés allá durante dos meses. Mi hermano dice: "No te preocupes, te ayudaré con los pasajes." Prometo que enviaré fotos. ¡Quizás también aprenda a cocinar!',
        q: [
          mc('How long is the writer going to study?', ['Two months', 'Two years', 'Two weeks'], 0),
          mc('Who will help with the tickets?', ['A friend', 'The brother', 'The teacher'], 1)
        ]
      },
      write: { p: 'Escribe 3 planes para el próximo año (going to) y 1 promesa (will).', m: 'Next year I am going to improve my English. I am going to travel. I am going to find a job. I will study every day.' },
      q: 'will vs going to English lesson'
    },

    {
      id: 'g14', track: 'general', level: 'A2', title: 'Comparar: comparativos y superlativos', en: 'Comparatives and superlatives',
      explain:
        '<p><b>Comparativo:</b> adjetivo corto + <b>-er than</b> (<i lang="en">cheaper than, faster than</i>). Adjetivo largo: <b>more … than</b> (<i lang="en">more expensive than</i>). Irregulares: <i lang="en">good → better, bad → worse</i>.</p>' +
        '<p><b>Superlativo:</b> <b>the + adj-est</b> o <b>the most + adj</b>: <i lang="en">the cheapest, the most expensive, the best</i>.</p>' +
        '<p><b>Igualdad:</b> <b>as … as</b>: <i lang="en">This laptop is as fast as that one.</i></p>',
      vocab: [
        ['cheap', 'barato', 'This hotel is cheap.'],
        ['expensive', 'caro', 'That phone is expensive.'],
        ['fast', 'rápido', 'This laptop is fast.'],
        ['slow', 'lento', 'The internet is slow today.'],
        ['big', 'grande', 'Quito is bigger than Cuenca.'],
        ['small', 'pequeño', 'My room is small.'],
        ['easy', 'fácil', 'English is easy for me.'],
        ['difficult', 'difícil', 'The test is difficult.'],
        ['better', 'mejor (comparativo)', 'This is better than that.'],
        ['worse', 'peor (comparativo)', 'The weather is worse today.'],
        ['the best', 'el mejor', 'This is the best pizza.']
      ],
      ex: [
        mc('A bus is ___ than a taxi.', ['cheaper', 'cheapest', 'more cheap'], 0, 'Corto + -er + than.'),
        mc('This is the ___ phone in the shop.', ['more expensive', 'most expensive', 'expensivest'], 1, 'Largo + superlativo → the most.'),
        fill('Today is ___ (good) than yesterday.', 'better', 'good → better.'),
        fill('She is as tall ___ her brother.', 'as', 'as … as.'),
        order('Este hotel es más barato que ese.', 'This hotel is cheaper than that one.'),
        mc('¿Cuál es correcta?', ['more fast', 'faster', 'fastest than'], 1)
      ],
      read: {
        t: 'I need a new laptop. Laptop A is cheaper than laptop B, but it is slower. Laptop B is the most expensive in the shop, and it is the fastest. Laptop C is as fast as laptop A, and it is lighter. I think laptop C is the best choice.',
        tr: 'Necesito una laptop nueva. La laptop A es más barata que la B, pero es más lenta. La laptop B es la más cara de la tienda y la más rápida. La laptop C es tan rápida como la A y es más liviana. Creo que la laptop C es la mejor opción.',
        q: [
          mc('Which laptop is the most expensive?', ['A', 'B', 'C'], 1),
          mc('Which laptop is the best choice for the writer?', ['A', 'B', 'C'], 2)
        ]
      },
      write: { p: 'Compara dos celulares o dos ciudades con 3 frases (usa comparativo y superlativo).', m: 'Quito is bigger than Cuenca. Cuenca is quieter than Quito. Guayaquil is the biggest city in Ecuador.' },
      q: 'comparatives superlatives English lesson'
    },

    {
      id: 'g15', track: 'general', level: 'A2', title: 'Comida y cantidades: some, any, much, many', en: 'Food and quantities',
      explain:
        '<p><b>Contables</b> (se cuentan: <i lang="en">egg, apple, bottle</i>) e <b>incontables</b> (no se cuentan: <i lang="en">water, rice, money, time, information</i>).</p>' +
        '<p><b>some</b> en afirmativas: <i lang="en">I have some water.</i> · <b>any</b> en negativas y preguntas: <i lang="en">I don\'t have any rice. Do you have any milk?</i></p>' +
        '<p><b>How many</b> + contable plural: <i lang="en">How many eggs?</i> · <b>How much</b> + incontable: <i lang="en">How much water?</i> (y el precio: <i lang="en">How much is it?</i>)</p>' +
        '<p><b>a lot of</b> = mucho/a/os/as. <b>a few</b> = unos pocos (contables). <b>a little</b> = un poco (incontables).</p>',
      vocab: [
        ['rice', 'arroz', 'I eat rice every day.'],
        ['water', 'agua', 'I need some water.'],
        ['egg', 'huevo', 'I have two eggs.'],
        ['milk', 'leche', 'Do you have any milk?'],
        ['bread', 'pan', 'There is some bread.'],
        ['chicken', 'pollo', 'I like chicken.'],
        ['vegetables', 'verduras', 'We eat many vegetables.'],
        ['fruit', 'fruta', 'Fruit is healthy.'],
        ['a lot of', 'mucho/a/os/as', 'I drink a lot of water.'],
        ['a few', 'unos pocos', 'I have a few friends here.'],
        ['a little', 'un poco', 'I have a little time.']
      ],
      ex: [
        mc("I don't have ___ money.", ['some', 'any', 'a few'], 1, 'Negativa → <i lang="en">any</i>.'),
        mc('How ___ eggs do you need?', ['much', 'many', 'some'], 1, '<i lang="en">eggs</i> es contable → many.'),
        mc('How ___ water do you drink?', ['much', 'many', 'few'], 0, '<i lang="en">water</i> es incontable → much.'),
        fill('There is ___ bread on the table. (some / any)', 'some', 'Afirmativa → some.'),
        order('¿Tienes algo de leche?', 'Do you have any milk?'),
        mc('¿Cuál es incontable?', ['egg', 'rice', 'apple'], 1)
      ],
      read: {
        t: 'At the market I bought some rice, a few eggs and a lot of vegetables. I didn\'t buy any milk because I have some at home. The vegetables were cheap, but the chicken was expensive. I spent a little money and I took a big bag home.',
        tr: 'En el mercado compré algo de arroz, unos pocos huevos y muchas verduras. No compré leche porque tengo en casa. Las verduras estaban baratas, pero el pollo estaba caro. Gasté poco dinero y llevé una bolsa grande a casa.',
        q: [
          mc('What did the writer NOT buy?', ['Rice', 'Milk', 'Eggs'], 1),
          mc('What was expensive?', ['Vegetables', 'Rice', 'Chicken'], 2)
        ]
      },
      write: { p: 'Escribe qué hay (y qué no hay) en tu refrigerador con some / any / a lot of.', m: "There is some milk. There are a few eggs. There isn't any chicken. I have a lot of fruit." },
      q: 'some any much many English lesson'
    },

    {
      id: 'g16', track: 'general', level: 'A2', title: 'Obligación y consejos: must, have to, should', en: 'Must, have to, should',
      explain:
        '<p><b>have to</b> = tener que (obligación externa): <i lang="en">I have to wake up early.</i> Con he/she: <i lang="en">has to</i>. Negativo: <i lang="en">don\'t have to</i> = no hace falta (no es obligatorio).</p>' +
        '<p><b>must</b> = deber (regla o obligación fuerte). <b>mustn\'t</b> = prohibido: <i lang="en">You mustn\'t park here.</i></p>' +
        '<p><b>should</b> = debería (consejo): <i lang="en">You should sleep more. You shouldn\'t drink coffee at night.</i></p>',
      vocab: [
        ['have to', 'tener que', 'I have to study tonight.'],
        ['must', 'deber (regla)', 'You must show your passport.'],
        ["mustn't", 'prohibido, no debes', "You mustn't smoke here."],
        ['should', 'debería', 'You should sleep more.'],
        ["shouldn't", 'no deberías', "You shouldn't be late."],
        ['advice', 'consejo(s)', 'I need some advice.'],
        ['rule', 'regla', 'This is the rule.'],
        ['wear', 'usar, llevar puesto', 'You must wear a helmet.'],
        ['smoke', 'fumar', 'Do not smoke here.'],
        ['homework', 'tarea', 'I have to do my homework.']
      ],
      ex: [
        mc('You ___ sleep more. (consejo)', ['should', 'must', 'have'], 0, 'Consejo → <i lang="en">should</i>.'),
        mc('Students ___ show their ID card. (regla)', ['must', 'should', "mustn't"], 0),
        mc('You ___ smoke here. (está prohibido)', ["mustn't", "don't have to", "shouldn't to"], 0, 'Prohibido → <i lang="en">mustn\'t</i>.'),
        fill('She ___ to work on Saturday. (have)', 'has', 'she → has to.'),
        mc("Tomorrow is a holiday. I ___ go to work.", ["don't have to", "mustn't", 'have to'], 0, 'No es obligatorio → <i lang="en">don\'t have to</i>.'),
        order('Debes mostrar tu pasaporte.', 'You must show your passport.')
      ],
      read: {
        t: 'My doctor gave me some advice. I should sleep eight hours and I shouldn\'t drink coffee at night. I have to do some exercise three times a week. I must take my medicine every morning. I don\'t have to go to the hospital again until next month.',
        tr: 'Mi doctor me dio algunos consejos. Debería dormir ocho horas y no debería tomar café en la noche. Tengo que hacer ejercicio tres veces por semana. Debo tomar mi medicina todas las mañanas. No tengo que volver al hospital hasta el próximo mes.',
        q: [
          mc("What shouldn't the writer drink at night?", ['Water', 'Coffee', 'Milk'], 1),
          mc('When must the writer take medicine?', ['Every morning', 'Every night', 'Once a month'], 0)
        ]
      },
      write: { p: 'Da 3 consejos (should) a un amigo que duerme poco y escribe 1 regla de tu casa (must).', m: "You should go to bed early. You should drink more water. You shouldn't use your phone in bed. We must keep the house clean." },
      q: 'must have to should English lesson'
    },

    {
      id: 'g17', track: 'general', level: 'A2', title: 'Experiencias: presente perfecto', en: 'Present perfect',
      explain:
        '<p><b>have / has + participio pasado</b>. Conecta el pasado con el presente. Sirve para <b>experiencias</b> (<i lang="en">I have visited Peru.</i>) y <b>resultados actuales</b> (<i lang="en">I have lost my key</i> = no la tengo ahora).</p>' +
        '<p>Participios regulares: -ed (<i lang="en">visited</i>). Irregulares: <i lang="en">be → been, see → seen, eat → eaten, do → done, write → written</i>.</p>' +
        '<p>Pregunta: <i lang="en">Have you ever eaten sushi?</i> Negación: <i lang="en">I haven\'t seen it.</i></p>' +
        '<p>Palabras clave: <b>ever</b> (alguna vez), <b>already</b> (ya), <b>yet</b> (todavía / ya, en preguntas y negativas), <b>just</b> (acabo de).</p>',
      vocab: [
        ['ever', 'alguna vez', 'Have you ever been to Peru?'],
        ['already', 'ya', 'I have already finished.'],
        ['yet', 'todavía, ya (preguntas)', "I haven't finished yet."],
        ['just', 'acabo de', 'I have just arrived.'],
        ['been', 'estado (be)', 'I have been to Colombia.'],
        ['seen', 'visto (see)', 'Have you seen this movie?'],
        ['eaten', 'comido (eat)', 'I have eaten here before.'],
        ['done', 'hecho (do)', 'I have done my homework.'],
        ['written', 'escrito (write)', 'She has written an email.'],
        ['before', 'antes', 'I have seen this before.']
      ],
      ex: [
        mc('I ___ to Peru.', ['have been', 'am been', 'was be'], 0, 'have + been.'),
        mc('She ___ her homework.', ['have done', 'has done', 'did done'], 1, 'she → has.'),
        fill('Have you ___ (eat) sushi?', 'eaten', 'eat → ate → eaten.'),
        fill("I haven't finished ___. (yet / already)", 'yet', 'Negativa → yet.'),
        order('Acabo de llegar.', 'I have just arrived.'),
        mc('¿Cuál es una experiencia de vida?', ['I went to Peru in 2020.', 'I have been to Peru.', 'I am going to Peru.'], 1, 'Sin fecha concreta → presente perfecto.')
      ],
      read: {
        t: 'I have never traveled by plane, but I have been to many cities by bus. I have visited Cuenca and Guayaquil. Have you ever seen the ocean? I have seen it twice. I haven\'t been abroad yet, but I have already started my English course. I am ready for the next trip!',
        tr: 'Nunca he viajado en avión, pero he estado en muchas ciudades en bus. He visitado Cuenca y Guayaquil. ¿Alguna vez has visto el océano? Yo lo he visto dos veces. Todavía no he estado en el extranjero, pero ya empecé mi curso de inglés. ¡Estoy listo para el próximo viaje!',
        q: [
          mc('Has the writer traveled by plane?', ['Yes', 'No', 'We do not know'], 1),
          mc('What has the writer already started?', ['A job', 'An English course', 'A trip'], 1)
        ]
      },
      write: { p: 'Escribe 4 frases: 2 cosas que has hecho y 2 que todavía no has hecho (yet).', m: "I have visited Cuenca. I have seen the ocean. I haven't been abroad yet. I haven't written a long email in English yet." },
      q: 'present perfect English lesson'
    },

    {
      id: 'g18', track: 'general', level: 'A2', title: 'Unir ideas: and, but, so, because, then', en: 'Linking words',
      explain:
        '<p>Los conectores unen ideas y hacen que hables con más fluidez:</p>' +
        '<ul><li><b>and</b> = y (suma) · <b>or</b> = o</li>' +
        '<li><b>but</b> = pero (contraste)</li>' +
        '<li><b>so</b> = así que (resultado) · <b>because</b> = porque (razón)</li>' +
        '<li><b>first, then, finally</b> = primero, luego, finalmente</li>' +
        '<li><b>however</b> = sin embargo (más formal) · <b>also</b> = también</li></ul>' +
        '<p><i lang="en">I was tired, <b>so</b> I went to bed.</i> = <i lang="en">I went to bed <b>because</b> I was tired.</i> (mismo sentido, distinto orden)</p>',
      vocab: [
        ['and', 'y', 'I study and I work.'],
        ['but', 'pero', 'I like it, but it is expensive.'],
        ['so', 'así que', 'I was tired, so I slept.'],
        ['or', 'o', 'Tea or coffee?'],
        ['then', 'luego, entonces', 'Then we went home.'],
        ['first', 'primero', 'First, turn on the computer.'],
        ['finally', 'finalmente', 'Finally, save the file.'],
        ['however', 'sin embargo', 'However, it is expensive.'],
        ['also', 'también', 'I also speak Spanish.']
      ],
      ex: [
        mc('I was tired, ___ I went to bed.', ['but', 'so', 'because'], 1, 'Resultado → <i lang="en">so</i>.'),
        mc('I like the phone, ___ it is very expensive.', ['and', 'but', 'so'], 1, 'Contraste → <i lang="en">but</i>.'),
        mc('I study English ___ I want to travel.', ['because', 'so', 'but'], 0, 'Razón → <i lang="en">because</i>.'),
        fill('___, turn on the computer. (primero)', ['First', 'first'], 'Primer paso: First.'),
        order('Primero, abre el archivo.', ['First, open the file.', 'Open the file first.']),
        mc('¿Qué palabra significa "sin embargo"?', ['also', 'however', 'then'], 1)
      ],
      read: {
        t: 'First, I wake up and have breakfast. Then I take the bus to class. I like English class because the teacher is kind, but the homework is difficult. After class I study in the library, so I get home late. Finally, I cook dinner and go to bed.',
        tr: 'Primero me despierto y desayuno. Luego tomo el bus a clases. Me gusta la clase de inglés porque la profesora es amable, pero la tarea es difícil. Después de clases estudio en la biblioteca, así que llego tarde a casa. Finalmente, cocino la cena y me voy a dormir.',
        q: [
          mc('Why does the writer like English class?', ['The class is short', 'The teacher is kind', 'The bus is fast'], 1),
          mc('Why does the writer get home late?', ['Studies in the library', 'Cooks dinner', 'Takes the bus'], 0)
        ]
      },
      write: { p: 'Escribe un párrafo de 4 frases sobre tu día con first, then, because, but y so.', m: 'First, I go to class. Then I study in the library because I have a test. I like math, but it is difficult. So I study every day.' },
      q: 'linking words because but so English'
    }

  );
})();
