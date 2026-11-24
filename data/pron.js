/* Pronunciación (p01 a p08): sonidos difíciles para hispanohablantes. Cada lección incluye frases para repetir (speak). */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 'p01', track: 'pron', level: 'A1', title: 'Vocal corta y larga: ship / sheep', en: 'Short and long i',
      speak: ['The ship is very big.', 'The sheep eat green grass.', 'Please sit on this seat.', 'I feel good when I leave.'],
      explain:
        '<p>En español la «i» siempre suena igual. En inglés hay <b>dos</b> sonidos, y cambian el significado:</p>' +
        '<table><tr><th>Corta /ɪ/</th><th>Larga /iː/</th></tr>' +
        '<tr><td><i lang="en">ship</i></td><td><i lang="en">sheep</i></td></tr><tr><td><i lang="en">sit</i></td><td><i lang="en">seat</i></td></tr>' +
        '<tr><td><i lang="en">live</i></td><td><i lang="en">leave</i></td></tr><tr><td><i lang="en">fill</i></td><td><i lang="en">feel</i></td></tr></table>' +
        '<p><b>Cómo hacerlas:</b> la larga se <b>alarga</b> y se sonríe un poco (como una «i» española estirada). La corta es <b>rápida y relajada</b>, a medio camino entre «i» y «e».</p>' +
        '<p><b>Truco:</b> mide la duración con tu dedo. «Sheep» dura casi el doble que «ship».</p>',
      vocab: [
        ['ship', 'barco (vocal corta)', 'The ship is very big.'],
        ['sheep', 'oveja (vocal larga)', 'The sheep eat green grass.'],
        ['sit', 'sentarse (corta)', 'Please sit down here.'],
        ['seat', 'asiento (larga)', 'This is my seat.'],
        ['live', 'vivir (corta)', 'I live near the park.'],
        ['leave', 'irse, salir (larga)', 'I leave home at six.'],
        ['fill', 'llenar (corta)', 'Fill the glass with water.'],
        ['feel', 'sentir(se) (larga)', 'I feel very good today.'],
        ['hill', 'colina (corta)', 'The hill is not high.'],
        ['heel', 'talón, tacón (larga)', 'My heel hurts a little.']
      ],
      ex: [
        hear(['ship', 'sheep', 'sip'], 1, 'Se oía «sheep» (vocal larga).'),
        hear(['sit', 'seat', 'set'], 0, 'Se oía «sit» (vocal corta).'),
        hear(['live', 'leave', 'love'], 1, 'Se oía «leave» (vocal larga).'),
        mc('¿Cuál palabra tiene la vocal LARGA /iː/?', ['ship', 'sheep', 'sit'], 1),
        mc('«fill» y «feel» ¿suenan igual?', ['No: fill es corta y feel es larga', 'Sí, son idénticas', 'Solo en Inglaterra'], 0),
        mc('Para la vocal larga debes…', ['alargarla y sonreír un poco', 'hacerla muy corta', 'pronunciar una «e» española'], 0)
      ],
      read: {
        t: 'The ship is big. The sheep live on a green hill. Please sit on this seat. I feel good when I leave the city. Fill your glass and sit with me.',
        tr: 'El barco es grande. Las ovejas viven en una colina verde. Por favor, siéntate en este asiento. Me siento bien cuando salgo de la ciudad. Llena tu vaso y siéntate conmigo.',
        q: [mc('Where do the sheep live?', ['On a green hill', 'On a ship', 'In the city'], 0), mc('How does the writer feel when leaving the city?', ['Good', 'Tired', 'Sad'], 0)]
      },
      write: { p: 'Escribe 4 frases, una con cada par: ship/sheep, sit/seat, live/leave, fill/feel. Luego léelas en voz alta.', m: 'The ship is near the hill. The sheep sit on the grass. I live here, but I leave at six. Fill the glass and feel better.' },
      q: 'ship sheep pronunciation short long i English',
      listen: { d: [['Ana', 'Where do you live?'], ['Leo', 'I live near a hill. And you?'], ['Ana', 'I live in the city. Please sit here. This is my seat.'], ['Leo', 'Thank you. I feel tired. I leave work at six every day.'], ['Ana', 'Fill your glass with water. You will feel better.']],
        q: [mc('¿Dónde vive Leo?', ['Near a hill', 'In the city', 'On a ship'], 0), mc('¿Cómo se siente Leo?', ['Tired', 'Happy', 'Sick'], 0), mc('¿Qué le dice Ana que llene?', ['His glass', 'His bag', 'The seat'], 0)] },
      quiz: [
        hear(['ship', 'sheep', 'sip'], 0, 'Se oía «ship» (corta).'),
        hear(['feel', 'fill', 'fell'], 0, 'Se oía «feel» (larga).'),
        hear(['sit', 'seat', 'sat'], 1, 'Se oía «seat» (larga).'),
        mc('¿Cuál palabra tiene la vocal CORTA?', ['leave', 'live', 'sheep'], 1),
        mc('«hill» y «heel» se diferencian por…', ['la duración de la vocal', 'la consonante final', 'nada'], 0),
        fill('The ___ eat grass. (oveja)', 'sheep'),
        fill('Please ___ down. (sentarse)', 'sit'),
        order('Siéntate en este asiento.', 'Sit on this seat.')
      ]
    },

    {
      id: 'p02', track: 'pron', level: 'A1', title: 'El sonido th y la diferencia entre v y b', en: 'The th sound and v vs b',
      speak: ['Thank you very much.', 'I think this is the best boat.', 'Three brothers vote for me.', 'This berry is very sweet.'],
      explain:
        '<p><b>TH tiene dos sonidos que no existen en español.</b> Pon la punta de la lengua <b>entre los dientes</b>:</p>' +
        '<ul><li><b>Sin voz</b> /θ/: <i lang="en">think, thank, three</i> (solo sale aire; no digas «t» ni «s»).</li>' +
        '<li><b>Con voz</b> /ð/: <i lang="en">this, that, the</i> (igual, pero la garganta vibra; no digas «d»).</li></ul>' +
        '<p><b>V y B son distintas en inglés</b> (en español suenan casi igual):</p>' +
        '<table><tr><th>/v/ — labio y dientes</th><th>/b/ — los dos labios</th></tr><tr><td><i lang="en">very, vote</i></td><td><i lang="en">berry, boat</i></td></tr></table>' +
        '<p>Para /v/ muerde suave el labio de abajo y deja salir el sonido: debes sentir cosquillas.</p>',
      vocab: [
        ['think', 'pensar (th sin voz)', 'I think it is true.'],
        ['thank', 'agradecer', 'Thank you very much.'],
        ['three', 'tres', 'I have three brothers.'],
        ['this', 'esto (th con voz)', 'This is my phone.'],
        ['that', 'eso', 'That is a good idea.'],
        ['very', 'muy (v)', 'It is very important.'],
        ['berry', 'baya, mora (b)', 'This berry is sweet.'],
        ['vote', 'votar (v)', 'Please vote for me.'],
        ['boat', 'bote (b)', 'The boat is small.'],
        ['best', 'el mejor', 'You are my best friend.']
      ],
      ex: [
        hear(['think', 'sink', 'thing'], 0, 'Se oía «think».'),
        hear(['three', 'tree', 'free'], 0, 'Se oía «three».'),
        hear(['very', 'berry', 'merry'], 0, 'Se oía «very» (v).'),
        hear(['vote', 'boat', 'boot'], 0, 'Se oía «vote» (v).'),
        mc('Para el sonido th la lengua va…', ['entre los dientes', 'detrás de los dientes', 'en el paladar'], 0),
        mc('«this» empieza con…', ['th con voz (la garganta vibra)', 'una d española', 'una s'], 0)
      ],
      read: {
        t: 'I think this boat is the best. My three brothers vote for it. It is very big, and the berry juice on the boat is very sweet. Thank you for the ride!',
        tr: 'Creo que este bote es el mejor. Mis tres hermanos votan por él. Es muy grande, y el jugo de mora del bote es muy dulce. ¡Gracias por el paseo!',
        q: [mc('How many brothers vote for the boat?', ['Three', 'Two', 'Four'], 0), mc('What is sweet?', ['The berry juice', 'The boat', 'The ride'], 0)]
      },
      write: { p: 'Escribe 4 frases con palabras con th, v y b (think, three, very, boat…). Léelas en voz alta cuidando la lengua y los labios.', m: 'I think this is a very good boat. My three brothers like the berries. Thank you for the best day.' },
      q: 'English th sound pronunciation for Spanish speakers',
      listen: { d: [['Mia', 'Do you think this boat is the best?'], ['Sam', 'Yes, it is very good. My three brothers vote for it.'], ['Mia', 'Thank you for the idea. Do you want some berry juice?'], ['Sam', 'Yes, please. That sounds great.']],
        q: [mc('¿Qué piensa Sam del bote?', ['It is very good', 'It is too small', 'It is old'], 0), mc('¿Cuántos hermanos votan?', ['Three', 'Two', 'Five'], 0), mc('¿Qué ofrece Mia?', ['Berry juice', 'Coffee', 'Tea'], 0)] },
      quiz: [
        hear(['think', 'sink', 'tink'], 0, 'Se oía «think».'),
        hear(['berry', 'very', 'bury'], 0, 'Se oía «berry» (b).'),
        hear(['best', 'vest', 'rest'], 0, 'Se oía «best» (b).'),
        mc('Para la v inglesa se usa…', ['labio inferior y dientes superiores', 'los dos labios juntos', 'la lengua entre los dientes'], 0),
        mc('Para la b inglesa se usan…', ['los dos labios', 'labio y dientes', 'la lengua'], 0),
        mc('«that» empieza con un th…', ['con voz (vibra)', 'sin voz', 'como una t'], 0),
        fill('I have ___ brothers. (tres)', 'three'),
        order('Gracias por todo.', 'Thank you for everything.')
      ]
    },

    {
      id: 'p03', track: 'pron', level: 'A2', title: 'Terminaciones -ed y -s', en: '-ed and -s endings',
      speak: ['She walked and played all day.', 'He wanted to wash the bags.', 'The buses stopped at the hotel.', 'I needed the books yesterday.'],
      explain:
        '<p>Las terminaciones <b>-ed</b> y <b>-s</b> tienen <b>tres sonidos</b> cada una. No se leen como se escriben.</p>' +
        '<table><tr><th>-ed (pasado)</th><th>Se dice</th><th>Ejemplo</th></tr>' +
        '<tr><td>después de sonido sin voz (k, p, s, sh, ch)</td><td>/t/</td><td><i lang="en">walked, stopped, washed</i></td></tr>' +
        '<tr><td>después de sonido con voz (l, n, v, vocal…)</td><td>/d/</td><td><i lang="en">played, called, lived</i></td></tr>' +
        '<tr><td>después de t o d</td><td>/ɪd/ (sílaba extra)</td><td><i lang="en">wanted, needed</i></td></tr></table>' +
        '<table><tr><th>-s (plural / él-ella)</th><th>Se dice</th><th>Ejemplo</th></tr>' +
        '<tr><td>después de sin voz</td><td>/s/</td><td><i lang="en">books, stops</i></td></tr>' +
        '<tr><td>después de con voz</td><td>/z/</td><td><i lang="en">bags, plays</i></td></tr>' +
        '<tr><td>después de s, z, sh, ch</td><td>/ɪz/ (sílaba extra)</td><td><i lang="en">buses, washes</i></td></tr></table>' +
        '<p><b>Lo más importante:</b> «wanted» y «needed» tienen <b>dos sílabas</b>; «walked» tiene una sola (no digas «walk-ed»).</p>',
      vocab: [
        ['walked', 'caminó (suena /t/)', 'She walked to school.'],
        ['played', 'jugó (suena /d/)', 'They played football yesterday.'],
        ['wanted', 'quiso (sílaba extra /ɪd/)', 'He wanted a new phone.'],
        ['needed', 'necesitó (sílaba extra /ɪd/)', 'I needed some help.'],
        ['liked', 'le gustó (suena /t/)', 'We liked the movie.'],
        ['stopped', 'se detuvo (suena /t/)', 'The bus stopped here.'],
        ['books', 'libros (suena /s/)', 'I bought two books.'],
        ['bags', 'bolsas (suena /z/)', 'The bags are heavy.'],
        ['buses', 'buses (sílaba extra /ɪz/)', 'The buses are late.'],
        ['washes', 'lava (sílaba extra /ɪz/)', 'She washes the dishes.']
      ],
      ex: [
        mc('«walked» termina en el sonido…', ['/t/', '/d/', '/ɪd/'], 0),
        mc('«played» termina en el sonido…', ['/t/', '/d/', '/ɪd/'], 1),
        mc('¿Cuántas sílabas tiene «wanted»?', ['2', '1', '3'], 0),
        mc('«buses» se pronuncia con…', ['una sílaba extra /ɪz/', 'solo /s/', 'solo /z/'], 0),
        hear(['He wanted it.', 'He wants it.', 'He want it.'], 0, 'Se oía «wanted».'),
        hear(['two books', 'two bags', 'two buses'], 2, 'Se oía «buses».')
      ],
      read: {
        t: 'Yesterday we walked to the market. We needed some bags, and we wanted fresh fruit. The seller washes the fruit every morning. We liked the apples, so we bought two bags. Then the buses stopped, and we went home.',
        tr: 'Ayer caminamos al mercado. Necesitábamos bolsas y queríamos fruta fresca. El vendedor lava la fruta cada mañana. Nos gustaron las manzanas, así que compramos dos bolsas. Luego se detuvieron los buses y nos fuimos a casa.',
        q: [mc('What did they need?', ['Some bags', 'A bus', 'A phone'], 0), mc('What did they buy?', ['Two bags of apples', 'Two buses', 'Some books'], 0)]
      },
      write: { p: 'Escribe 4 frases en pasado sobre ayer, con verbos que terminen en -ed (walked, wanted, played, needed). Léelas marcando /t/, /d/ y la sílaba extra.', m: 'I walked to class. I wanted a coffee. I played football with friends. I needed some sleep.' },
      q: 'ed endings pronunciation t d id English',
      listen: { d: [['Ana', 'What did you do yesterday?'], ['Leo', 'I walked to the market and washed my bags. I needed some fruit.'], ['Ana', 'Did you like it?'], ['Leo', 'Yes, I liked the apples. Then the buses stopped, so I walked home.'], ['Ana', 'You wanted exercise!']],
        q: [mc('¿A dónde caminó Leo?', ['To the market', 'To school', 'To the park'], 0), mc('¿Qué necesitaba?', ['Some fruit', 'A phone', 'A book'], 0), mc('¿Por qué caminó a casa?', ['The buses stopped', 'It was sunny', 'He liked it'], 0)] },
      quiz: [
        mc('«liked» termina en…', ['/t/', '/d/', '/ɪd/'], 0),
        mc('«called» termina en…', ['/t/', '/d/', '/ɪd/'], 1),
        mc('«needed» tiene…', ['dos sílabas', 'una sílaba', 'tres sílabas'], 0),
        mc('«books» termina en…', ['/s/', '/z/', '/ɪz/'], 0),
        mc('«bags» termina en…', ['/s/', '/z/', '/ɪz/'], 1),
        hear(['I needed it.', 'I need it.', 'I knee did it.'], 0, 'Se oía «needed».'),
        hear(['wash it', 'washes it', 'washed it'], 2, 'Se oía «washed».'),
        fill('«washes» tiene ___ sílabas.', ['2', 'two', 'dos'])
      ]
    },

    {
      id: 'p04', track: 'pron', level: 'A2', title: 'El acento de las palabras (word stress)', en: 'Word stress',
      speak: ['The hotel is important.', 'I need the information.', 'My computer has a password.', 'Complete the security form.'],
      explain:
        '<p>En inglés cada palabra de varias sílabas tiene <b>una sílaba fuerte</b> (más larga, más alta) y las demás se debilitan. Si pones el acento en otro lugar, <b>no te entienden</b>, aunque pronuncies bien los sonidos.</p>' +
        '<table><tr><th>Regla útil</th><th>Ejemplos (MAYÚSCULA = fuerte)</th></tr>' +
        '<tr><td>Sustantivos de 2 sílabas: casi siempre la 1.ª</td><td><i lang="en">STUdent, PASSword, TAble</i></td></tr>' +
        '<tr><td>Verbos de 2 sílabas: casi siempre la 2.ª</td><td><i lang="en">comPLETE, deLETE, deVELop</i></td></tr>' +
        '<tr><td>Terminan en -tion / -sion: la sílaba <b>anterior</b></td><td><i lang="en">inforMAtion, soLUtion</i></td></tr>' +
        '<tr><td>Terminan en -ee, -eer, -ese: esa misma sílaba</td><td><i lang="en">engiNEER, emploYEE</i></td></tr>' +
        '<tr><td>Palabras parecidas al español: ¡cuidado!</td><td><i lang="en">hoTEL</i> (no «HOtel»), <i lang="en">comPUter</i></td></tr></table>' +
        '<p>Escucha la palabra y <b>golpea la mesa</b> en la sílaba fuerte: así la sientes.</p>',
      vocab: [
        ['hotel', 'hotel (ho-TEL)', 'We booked a hotel in Quito.'],
        ['student', 'estudiante (STU-dent)', 'The student has a laptop.'],
        ['computer', 'computadora (com-PU-ter)', 'My computer is very fast.'],
        ['banana', 'banano (ba-NA-na)', 'I eat a banana every day.'],
        ['important', 'importante (im-POR-tant)', 'This is very important.'],
        ['technology', 'tecnología (tech-NO-lo-gy)', 'I love new technology.'],
        ['information', 'información (in-for-MA-tion)', 'I need more information.'],
        ['complete', 'completar (com-PLETE)', 'Complete the form, please.'],
        ['security', 'seguridad (se-CU-ri-ty)', 'Security is very important.'],
        ['password', 'contraseña (PASS-word)', 'Do not share your password.']
      ],
      ex: [
        mc('¿Dónde está el acento de «hotel»?', ['ho-TEL', 'HO-tel'], 0),
        mc('¿Dónde está el acento de «student»?', ['STU-dent', 'stu-DENT'], 0),
        mc('¿Dónde está el acento de «computer»?', ['COM-pu-ter', 'com-PU-ter', 'com-pu-TER'], 1),
        mc('En palabras que terminan en -tion, el acento está en la sílaba…', ['anterior a -tion', 'última', 'primera siempre'], 0),
        fill('«technology»: tech-NO-lo-gy. La sílaba fuerte es la número ___ .', ['2', 'two', 'dos']),
        mc('Si cambias el acento de una palabra…', ['pueden no entenderte', 'no pasa nada', 'se vuelve un verbo siempre'], 0)
      ],
      read: {
        t: 'The student booked a hotel for the security conference. The information on the website was important, so he wrote his password on a card. Then he completed the form and ate a banana before the technology talk.',
        tr: 'El estudiante reservó un hotel para la conferencia de seguridad. La información del sitio web era importante, así que escribió su contraseña en una tarjeta. Luego completó el formulario y se comió un banano antes de la charla de tecnología.',
        q: [mc('What did the student book?', ['A hotel', 'A flight', 'A taxi'], 0), mc('What did he eat?', ['A banana', 'An apple', 'Rice'], 0)]
      },
      write: { p: 'Elige 4 palabras de la lección y escribe una frase con cada una. Dilas en voz alta golpeando la mesa en la sílaba fuerte.', m: 'The hotel is important. The student needs information. My computer has a strong password. Security is very important.' },
      q: 'English word stress rules for Spanish speakers',
      listen: { d: [['Guest', 'Hello. I need some information about the hotel, please.'], ['Clerk', 'Of course. Please complete this form. It is important for security.'], ['Guest', 'Do I need a password for the Wi-Fi?'], ['Clerk', 'Yes. The password is on this card. We also have a banana in your room as a welcome gift.']],
        q: [mc('¿Qué necesita el huésped?', ['Information about the hotel', 'A taxi', 'A ticket'], 0), mc('¿Por qué es importante el formulario?', ['For security', 'For breakfast', 'For parking'], 0), mc('¿Qué hay en la habitación?', ['A banana', 'An apple', 'Chocolate'], 0)] },
      quiz: [
        mc('¿Dónde está el acento de «important»?', ['im-POR-tant', 'IM-por-tant', 'im-por-TANT'], 0),
        mc('¿Dónde está el acento de «information»?', ['in-for-MA-tion', 'IN-for-ma-tion', 'in-FOR-ma-tion'], 0),
        mc('¿Dónde está el acento de «complete»?', ['com-PLETE', 'COM-plete'], 0),
        mc('¿Dónde está el acento de «password»?', ['PASS-word', 'pass-WORD'], 0),
        mc('¿Dónde está el acento de «banana»?', ['ba-NA-na', 'BA-na-na', 'ba-na-NA'], 0),
        mc('Los sustantivos de 2 sílabas suelen acentuarse en la…', ['1.ª sílaba', '2.ª sílaba', 'última siempre'], 0),
        fill('«se-CU-ri-ty»: la sílaba fuerte es la número ___ .', ['2', 'two', 'dos']),
        order('La contraseña es importante.', 'The password is important.')
      ]
    },

    {
      id: 'p05', track: 'pron', level: 'B1', title: 'La schwa y las palabras débiles', en: 'The schwa and weak forms',
      speak: ['Tell me about the problem.', 'The teacher can help you today.', 'A cup of tea and a banana.', 'I want to ask the doctor again.'],
      explain:
        '<p>El sonido más común del inglés es la <b>schwa /ə/</b>: una vocal <b>débil, corta y relajada</b>, sin color (ni «a» ni «e» ni «o»). Aparece en las sílabas <b>sin acento</b>:</p>' +
        '<table><tr><th>Palabra</th><th>Cómo suena</th></tr><tr><td><i lang="en">about</i></td><td>ə-BOUT</td></tr><tr><td><i lang="en">banana</i></td><td>bə-NA-nə</td></tr>' +
        '<tr><td><i lang="en">teacher, doctor</i></td><td>TEA-chə, DOC-tə</td></tr><tr><td><i lang="en">problem</i></td><td>PROB-ləm</td></tr></table>' +
        '<p><b>Las palabras pequeñas también se debilitan</b> cuando no son importantes: <i lang="en">to</i> → /tə/, <i lang="en">for</i> → /fə/, <i lang="en">of</i> → /əv/, <i lang="en">and</i> → /ən/, <i lang="en">can</i> → /kən/, <i lang="en">a, the</i> → /ə/, /ðə/.</p>' +
        '<p>Por eso <i lang="en">I can swim</i> suena casi «ai kən suim», pero <i lang="en">I can\'t swim</i> mantiene la vocal fuerte «kænt». <b>Relajar</b> las sílabas sin acento te hará sonar mucho más natural.</p>',
      vocab: [
        ['about', 'sobre, acerca de', 'Tell me about your day.'],
        ['banana', 'banano', 'A banana and a cup of tea.'],
        ['system', 'sistema', 'The system is very simple.'],
        ['problem', 'problema', 'I have a small problem.'],
        ['teacher', 'profesor', 'My teacher is very kind.'],
        ['doctor', 'doctor', 'I need to see a doctor.'],
        ['support', 'apoyo, soporte', 'Thanks for your support.'],
        ['today', 'hoy', 'I am busy today.'],
        ['again', 'otra vez', 'Please say it again.'],
        ['police', 'policía', 'Call the police, please.']
      ],
      ex: [
        mc('La vocal más común en inglés es…', ['la schwa /ə/ (débil y relajada)', 'la «a» fuerte', 'la «o» clara'], 0),
        mc('En «banana» las dos «a» sin acento suenan como…', ['schwa /ə/', '«a» española', '«o»'], 0),
        mc('En «I can swim», la palabra «can» suena…', ['débil /kən/', 'larga y fuerte /kæn/', 'como «cannot»'], 0),
        mc('La palabra «to» en «I want to go» suena…', ['/tə/ (débil)', '/tuː/ (fuerte, larga)', 'como «two» siempre'], 0),
        hear(['about', 'a boat', 'a bout'], 0, 'Se oía «about».'),
        hear(['He is a teacher.', 'He is a doctor.', 'He is a driver.'], 1, 'Se oía «doctor».')
      ],
      read: {
        t: 'Today I had a problem with the system at work. I asked the teacher for support, and she told me about a simple solution. Then I called the doctor, because I needed a banana and a break. Please say it again, I said, and she laughed.',
        tr: 'Hoy tuve un problema con el sistema en el trabajo. Le pedí apoyo a la profesora y ella me habló de una solución simple. Luego llamé al doctor, porque necesitaba un banano y un descanso. «Por favor, dilo otra vez», dije, y ella se rio.',
        q: [mc('Who gave support?', ['The teacher', 'The doctor', 'The police'], 0), mc('What did the writer need?', ['A banana and a break', 'A new system', 'A taxi'], 0)]
      },
      write: { p: 'Escribe 4 frases con about, problem, teacher, today y again. Léelas relajando las sílabas sin acento.', m: 'Tell me about your problem. My teacher helps me today. Please say it again. I need support with the system.' },
      q: 'schwa sound weak forms English pronunciation',
      listen: { d: [['Ana', 'Hi, I have a problem with the system.'], ['Tech', 'Tell me about it. Can you say it again, please?'], ['Ana', 'The system is slow today, and I need support.'], ['Tech', 'OK. I can help you. A teacher called about the same problem this morning.']],
        q: [mc('¿Qué tiene Ana?', ['A problem with the system', 'A broken phone', 'A job offer'], 0), mc('¿Cómo está el sistema?', ['Slow today', 'Fast', 'Off'], 0), mc('¿Quién llamó por lo mismo?', ['A teacher', 'A doctor', 'The police'], 0)] },
      quiz: [
        mc('La schwa aparece en sílabas…', ['sin acento', 'con acento', 'solo al final'], 0),
        mc('En «problem» la vocal débil es…', ['la segunda sílaba', 'la primera', 'ninguna'], 0),
        mc('Para sonar natural, las palabras como «of», «for», «and» deben…', ['debilitarse', 'decirse muy fuertes', 'omitirse siempre'], 0),
        mc('«a cup of tea» suena parecido a…', ['«a cuppa tea»', '«a cop off tea»', '«a cap or tea»'], 0),
        hear(['police', 'please', 'peace'], 0, 'Se oía «police».'),
        hear(['teacher', 'tiger', 'ticket'], 0, 'Se oía «teacher».'),
        fill('Please say it ___ . (otra vez)', 'again'),
        order('Cuéntame sobre el problema.', 'Tell me about the problem.')
      ]
    },

    {
      id: 'p06', track: 'pron', level: 'B1', title: 'Unir palabras al hablar (linking)', en: 'Linking and connected speech',
      speak: ['Pick it up and turn it off.', 'What do you want to do?', 'I have an apple and an orange.', 'Come on, check it out.'],
      explain:
        '<p>Los nativos <b>no separan las palabras</b>: las unen en un solo flujo. Si no lo sabes, no los entiendes aunque conozcas todas las palabras. Tres enlaces básicos:</p>' +
        '<table><tr><th>Tipo</th><th>Se escribe</th><th>Suena</th></tr>' +
        '<tr><td>consonante + vocal</td><td><i lang="en">pick it up</i></td><td>pi-ki-tup</td></tr>' +
        '<tr><td>consonante + vocal</td><td><i lang="en">an apple</i></td><td>a-napple</td></tr>' +
        '<tr><td>vocal + vocal (se añade /j/ o /w/)</td><td><i lang="en">I am / go on</i></td><td>ai-yam / go-won</td></tr>' +
        '<tr><td>t o d + you</td><td><i lang="en">did you / what do you</i></td><td>didja / whaddya</td></tr></table>' +
        '<p><b>Para escuchar mejor:</b> no busques palabras sueltas; busca grupos de ritmo. <b>Para hablar mejor:</b> une la consonante final con la vocal siguiente: «turn it off» = «tur-ni-toff».</p>',
      vocab: [
        ['pick it up', 'recógelo (pi-ki-tup)', 'Pick it up from the floor.'],
        ['turn it off', 'apágalo (tur-ni-toff)', 'Please turn it off now.'],
        ['an apple', 'una manzana (a-napple)', 'I eat an apple every day.'],
        ['what do you', 'qué (whaddya)', 'What do you think about it?'],
        ['give me', 'dame (gimme)', 'Give me a minute, please.'],
        ['check it out', 'míralo, échale un vistazo', 'Check it out, it is great.'],
        ['not at all', 'para nada (no-ta-tall)', 'It is not at all difficult.'],
        ['look at it', 'míralo (loo-ka-tit)', 'Look at it carefully.'],
        ['come on', 'vamos, anda (co-mon)', 'Come on, we are late.'],
        ['ask a question', 'hacer una pregunta', 'Can I ask a question?']
      ],
      ex: [
        hear(['Turn it off.', 'Turn it on.', 'Turn it up.'], 0, 'Se oía «Turn it off».'),
        hear(['Pick it up.', 'Pick it out.', 'Pick it in.'], 0, 'Se oía «Pick it up».'),
        hear(['What do you do?', 'What did you do?', 'What are you doing?'], 0, 'Se oía «What do you do?».'),
        mc('«an apple» se oye como…', ['a-napple', 'an … apple (separadas)', 'a nap-ple'], 0),
        mc('«Check it out» se une así…', ['che-ki-tout', 'check … it … out (separadas)', 'chek-eet-owt'], 0),
        mc('Aprender el linking ayuda sobre todo a…', ['entender el inglés hablado', 'escribir mejor', 'leer más rápido'], 0)
      ],
      read: {
        t: 'Come on, check it out! I have an apple in my bag. Pick it up and give me a minute. Look at it carefully. What do you think about the news? It is not at all difficult to understand when you listen for groups of words, not for single words.',
        tr: '¡Vamos, échale un vistazo! Tengo una manzana en mi bolsa. Recógela y dame un minuto. Mírala con cuidado. ¿Qué piensas de las noticias? No es nada difícil de entender cuando escuchas grupos de palabras y no palabras sueltas.',
        q: [mc('What is in the bag?', ['An apple', 'A phone', 'A book'], 0), mc('What should you listen for?', ['Groups of words', 'Single words only', 'Only numbers'], 0)]
      },
      write: { p: 'Escribe 4 frases con enlaces (pick it up, turn it off, an apple, what do you…). Léelas uniendo las palabras como si fueran una sola.', m: 'Pick it up, please. Turn it off now. I have an apple. What do you want to do?' },
      q: 'linking connected speech English listening',
      listen: { d: [['Ana', 'What do you want to do tonight?'], ['Leo', 'Not at all sure. Give me a minute. Do you have an idea?'], ['Ana', 'Come on, check it out. There is a free movie at the park.'], ['Leo', 'Great. Pick it up, I mean the tickets, and I will turn it off, I mean my phone.']],
        q: [mc('¿Qué propone Ana?', ['A free movie at the park', 'A trip', 'Dinner at home'], 0), mc('¿Qué le pide Leo?', ['A minute to think', 'Money', 'A taxi'], 0), mc('¿Qué va a apagar Leo?', ['His phone', 'The TV', 'The lights'], 0)] },
      quiz: [
        hear(['Come on, hurry up.', 'Come in, hurry up.', 'Come on, hurry on.'], 0, 'Se oía «Come on, hurry up».'),
        hear(['Check it out.', 'Check it in.', 'Check it up.'], 0, 'Se oía «Check it out».'),
        hear(['What do you want?', 'What did you want?', 'Where do you want?'], 0, 'Se oía «What do you want?».'),
        mc('«Pick it up» suena como…', ['pi-ki-tup', 'pic … it … up', 'pi-kit-ap'], 0),
        mc('«Did you» suele sonar como…', ['didja', 'did-yu separadas', 'dide-you'], 0),
        mc('En «go on», entre las dos vocales se añade un sonido…', ['/w/ (go-won)', '/s/', '/k/'], 0),
        fill('Can I ___ a question? (hacer)', 'ask'),
        order('Míralo con cuidado.', 'Look at it carefully.')
      ]
    },

    {
      id: 'p07', track: 'pron', level: 'B1', title: 'Entonación: subir y bajar la voz', en: 'Intonation',
      speak: ['Are you ready?', 'Where do you live?', 'I need apples, oranges, and bananas.', 'Really? That is great!'],
      explain:
        '<p>La <b>entonación</b> es la melodía de la frase. En inglés cambia el significado y la cortesía. Reglas básicas:</p>' +
        '<table><tr><th>Tipo de frase</th><th>Melodía</th><th>Ejemplo</th></tr>' +
        '<tr><td>Pregunta de sí / no</td><td>sube al final ↗</td><td><i lang="en">Are you ready?</i></td></tr>' +
        '<tr><td>Pregunta con Wh- (what, where…)</td><td>baja al final ↘</td><td><i lang="en">Where do you live?</i></td></tr>' +
        '<tr><td>Afirmación</td><td>baja al final ↘</td><td><i lang="en">I live in Quito.</i></td></tr>' +
        '<tr><td>Lista</td><td>sube, sube… y baja en el último ↗ ↗ ↘</td><td><i lang="en">apples, oranges, and bananas</i></td></tr>' +
        '<tr><td>Sorpresa o duda</td><td>sube ↗</td><td><i lang="en">Really?</i></td></tr></table>' +
        '<p><b>Énfasis:</b> la palabra más importante sube más y es más larga: <i lang="en">I said TWO, not three.</i> Una voz plana en inglés suena <b>aburrida o enojada</b> aunque digas las palabras bien.</p>',
      vocab: [
        ['rising', 'ascendente, que sube', 'Use rising intonation here.'],
        ['falling', 'descendente, que baja', 'Statements use falling intonation.'],
        ['pitch', 'tono (agudo o grave)', 'Raise your pitch a little.'],
        ['emphasis', 'énfasis', 'Put emphasis on the key word.'],
        ['polite', 'educado, cortés', 'A soft voice sounds polite.'],
        ['surprised', 'sorprendido', 'She sounds very surprised.'],
        ['question', 'pregunta', 'This question goes up at the end.'],
        ['statement', 'afirmación', 'A statement goes down at the end.'],
        ['sure', 'seguro', 'I am sure about this.'],
        ['unsure', 'inseguro, con dudas', 'He sounds unsure about it.']
      ],
      ex: [
        mc('«Are you ready?» termina…', ['subiendo ↗', 'bajando ↘'], 0),
        mc('«Where do you live?» termina…', ['bajando ↘', 'subiendo ↗'], 0),
        mc('En una lista (apples, oranges, and bananas), la voz…', ['sube en los primeros y baja al final', 'siempre baja', 'siempre sube'], 0),
        mc('«Really?» con sorpresa se dice…', ['subiendo ↗', 'bajando ↘'], 0),
        mc('El énfasis se pone en…', ['la palabra más importante', 'todas las palabras por igual', 'la última sílaba siempre'], 0),
        mc('Una voz completamente plana en inglés suele sonar…', ['aburrida o enojada', 'muy educada', 'muy segura'], 0)
      ],
      read: {
        t: 'Ana asks, "Are you ready?" with a rising voice. Leo answers, "Yes, I am." with a falling voice. Then Ana asks, "Where do you live?" and her voice goes down at the end. When Leo hears surprising news, he says, "Really?" and his voice goes up.',
        tr: 'Ana pregunta: "¿Estás listo?" con la voz ascendente. Leo responde: "Sí, lo estoy." con la voz descendente. Luego Ana pregunta: "¿Dónde vives?" y su voz baja al final. Cuando Leo escucha una noticia sorprendente, dice: "¿De verdad?" y su voz sube.',
        q: [mc('How does Ana say "Are you ready?"', ['With a rising voice', 'With a falling voice', 'In a whisper'], 0), mc('What does Leo say when he is surprised?', ['Really?', 'Where?', 'Goodbye'], 0)]
      },
      write: { p: 'Escribe 4 frases: una pregunta de sí/no, una pregunta con Wh-, una lista de 3 cosas y una frase de sorpresa. Marca con ↗ o ↘ cómo terminaría tu voz y léelas en voz alta.', m: 'Are you ready? ↗ Where do you work? ↘ I need a laptop, a mouse, and a cable. Really? ↗' },
      q: 'English intonation rising falling for beginners',
      listen: { d: [['Ana', 'Are you ready?'], ['Leo', 'Yes, I am. Where do we meet?'], ['Ana', 'At the park. I need apples, oranges, and bananas for the picnic.'], ['Leo', 'Really? That is a lot of fruit!'], ['Ana', 'It is for ten people.']],
        q: [mc('¿Dónde se encuentran?', ['At the park', 'At school', 'At home'], 0), mc('¿Qué necesita Ana?', ['Apples, oranges and bananas', 'Bread and cheese', 'Water only'], 0), mc('¿Para cuántas personas es?', ['Ten', 'Two', 'Twenty'], 0)] },
      quiz: [
        mc('«Do you like coffee?» termina…', ['subiendo ↗', 'bajando ↘'], 0),
        mc('«What time is it?» termina…', ['bajando ↘', 'subiendo ↗'], 0),
        mc('«I live in Quito.» termina…', ['bajando ↘', 'subiendo ↗'], 0),
        mc('Para mostrar que dudas dices «Maybe?» con…', ['voz que sube', 'voz que baja', 'voz muy grave'], 0),
        mc('«Emphasis» significa…', ['énfasis', 'emoción', 'enfermedad'], 0),
        mc('«Pitch» se refiere a…', ['qué tan agudo o grave es el tono', 'la velocidad', 'el volumen'], 0),
        fill('Use ___ intonation at the end of a yes/no question. (ascendente)', 'rising'),
        order('¿Dónde vives?', 'Where do you live?')
      ]
    },

    {
      id: 'p08', track: 'pron', level: 'B1', title: 'Cómo se dicen los términos técnicos', en: 'Pronouncing technical terms',
      speak: ['Clear the cache and restart the daemon.', 'The jobs are in the queue.', 'I use Linux and SQL.', 'The kernel stores the hash.'],
      explain:
        '<p>Muchas palabras de TI <b>no se leen como se escriben</b>. Pronunciarlas bien en reuniones y entrevistas te da mucha credibilidad. Las más famosas:</p>' +
        '<table><tr><th>Palabra</th><th>Se dice</th></tr>' +
        '<tr><td><i lang="en">cache</i></td><td>«cash» (como dinero), no «ca-che»</td></tr>' +
        '<tr><td><i lang="en">queue</i></td><td>«kiú» (como la letra Q)</td></tr>' +
        '<tr><td><i lang="en">Linux</i></td><td>«LI-nuks»</td></tr>' +
        '<tr><td><i lang="en">SQL</i></td><td>«es-kiu-él» o «sí-kuel» (las dos son comunes)</td></tr>' +
        '<tr><td><i lang="en">GUI</i></td><td>«gúi» (como «gooey»)</td></tr>' +
        '<tr><td><i lang="en">daemon</i></td><td>«dí-mon» (igual que demon)</td></tr>' +
        '<tr><td><i lang="en">kernel</i></td><td>«KER-nel»</td></tr>' +
        '<tr><td><i lang="en">char</i> / <i lang="en">character</i></td><td>«car» / «KA-rak-ter»</td></tr></table>' +
        '<p>Las siglas se deletrean por letras: <i lang="en">CPU, USB, DNS, VPN</i>. Escucha cómo las dicen en videos técnicos reales y repite.</p>',
      vocab: [
        ['cache', 'memoria caché (se dice «cash»)', 'Clear the cache and try again.'],
        ['queue', 'cola de tareas (se dice «kiú»)', 'The jobs are in the queue.'],
        ['Linux', 'sistema Linux (se dice «LI-nuks»)', 'I use Linux at work.'],
        ['SQL', 'lenguaje de bases de datos («es-kiu-él»)', 'I know basic SQL.'],
        ['GUI', 'interfaz gráfica (se dice «gúi»)', 'This tool has a simple GUI.'],
        ['daemon', 'proceso en segundo plano («dí-mon»)', 'The daemon starts at boot.'],
        ['kernel', 'núcleo del sistema («KER-nel»)', 'The kernel starts first.'],
        ['hash', 'valor hash («hash»)', 'Store the hash, not the password.'],
        ['character', 'carácter («KA-rak-ter»)', 'Use one special character.'],
        ['data', 'datos («DEI-ta» o «DA-ta»)', 'The data is safe.']
      ],
      ex: [
        mc('¿Cómo se pronuncia «cache»?', ['«cash»', '«ca-che»', '«cach-ay»'], 0),
        mc('¿Cómo se pronuncia «queue»?', ['«kiú»', '«ke-ue»', '«cuí»'], 0),
        mc('«SQL» se puede decir…', ['«es-kiu-él» o «sí-kuel»', '«esquel» solamente', '«sol»'], 0),
        mc('¿Cómo se pronuncia «GUI»?', ['«gúi» (como gooey)', '«yu-ai»', '«ge-u-i»'], 0),
        hear(['hash', 'hush', 'harsh'], 0, 'Se oía «hash».'),
        hear(['data', 'date', 'dead'], 0, 'Se oía «data».')
      ],
      read: {
        t: 'Our team had a performance problem. First, I cleared the cache. Then I checked the queue and found many old jobs. A background daemon was using too much memory, so I restarted it. Finally, I documented the steps in a short guide with a simple GUI screenshot.',
        tr: 'Nuestro equipo tuvo un problema de rendimiento. Primero, limpié la caché. Luego revisé la cola y encontré muchas tareas viejas. Un daemon en segundo plano estaba usando demasiada memoria, así que lo reinicié. Finalmente, documenté los pasos en una guía corta con una captura de una GUI sencilla.',
        q: [mc('What did the writer clear first?', ['The cache', 'The queue', 'The screen'], 0), mc('What used too much memory?', ['A background daemon', 'The GUI', 'The guide'], 0)]
      },
      write: { p: 'Escribe 4 frases técnicas usando cache, queue, Linux o SQL. Léelas en voz alta con la pronunciación correcta.', m: 'I clear the cache every week. The tasks are in the queue. I use Linux on my laptop. I am learning basic SQL.' },
      q: 'how to pronounce tech words cache queue SQL Linux',
      listen: { d: [['Lead', 'The website is slow. Did you clear the cache?'], ['Dev', 'Yes, I did. The jobs are still in the queue.'], ['Lead', 'Check the daemon on the Linux server.'], ['Dev', 'It uses too much memory. I will restart it and run a quick SQL query.']],
        q: [mc('¿Qué problema tienen?', ['The website is slow', 'The screen is broken', 'The Wi-Fi is off'], 0), mc('¿Dónde están las tareas?', ['In the queue', 'On the desk', 'In the cache'], 0), mc('¿Qué hará el desarrollador?', ['Restart the daemon', 'Format the server', 'Call the police'], 0)] },
      quiz: [
        mc('«cache» se dice…', ['«cash»', '«ca-che»', '«cach»'], 0),
        mc('«queue» se dice…', ['«kiú»', '«cue-ue»', '«ke-ue»'], 0),
        mc('«daemon» se dice igual que…', ['demon', 'diamond', 'domain'], 0),
        mc('Las siglas como CPU o DNS se dicen…', ['letra por letra', 'como una palabra normal', 'solo en español'], 0),
        hear(['Linux', 'Lyrics', 'Links'], 0, 'Se oía «Linux».'),
        hear(['character', 'carrier', 'career'], 0, 'Se oía «character».'),
        fill('The jobs are in the ___ . (cola)', 'queue'),
        order('Limpia la caché.', 'Clear the cache.')
      ]
    }
  );
})();
