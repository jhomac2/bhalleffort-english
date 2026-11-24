/* Inglés general, nivel A1 (g01 a g10). */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order;
  EL.lessons.push(

    {
      id: 'g01', track: 'general', level: 'A1', title: 'Ser o estar: I am, you are, he is', en: 'The verb to be',
      explain:
        '<p>En inglés, <i lang="en">to be</i> sirve para <b>ser</b> y para <b>estar</b>. Siempre necesitas decir el sujeto (I, you, he…).</p>' +
        '<table><tr><th>Sujeto</th><th>Verbo</th><th>Forma corta</th></tr>' +
        '<tr><td>I</td><td>am</td><td>I\'m</td></tr>' +
        '<tr><td>you / we / they</td><td>are</td><td>you\'re, we\'re, they\'re</td></tr>' +
        '<tr><td>he / she / it</td><td>is</td><td>he\'s, she\'s, it\'s</td></tr></table>' +
        '<p><b>Negación:</b> agrega <i lang="en">not</i>: <i lang="en">He is not tired</i> (o <i lang="en">He isn\'t tired</i>).</p>' +
        '<p><b>Pregunta:</b> invierte el orden: <i lang="en">Are you ready? Is she here?</i></p>',
      vocab: [
        ['hello', 'hola', 'Hello, I am Sam.'],
        ['student', 'estudiante', 'I am a student.'],
        ['teacher', 'profesor/a', 'She is a teacher.'],
        ['happy', 'feliz, contento', 'We are happy today.'],
        ['tired', 'cansado', 'He is tired.'],
        ['ready', 'listo', 'Are you ready?'],
        ['late', 'tarde, retrasado', 'I am not late.'],
        ['from', 'de (origen)', 'They are from Ecuador.'],
        ['here', 'aquí', 'She is here.'],
        ['friend', 'amigo/a', 'He is my friend.']
      ],
      ex: [
        mc('I ___ a student.', ['am', 'is', 'are'], 0, 'Con <i lang="en">I</i> siempre se usa <i lang="en">am</i>.'),
        mc('She ___ from Ecuador.', ['am', 'is', 'are'], 1, 'Con <i lang="en">he / she / it</i> se usa <i lang="en">is</i>.'),
        fill('They ___ happy today.', 'are', 'Con <i lang="en">we / you / they</i> se usa <i lang="en">are</i>.'),
        fill('He ___ not tired.', 'is', 'He → is.'),
        order('¿Estás listo?', 'Are you ready?', 'En preguntas, el verbo va antes del sujeto.'),
        mc('¿Cuál oración es correcta?', ['He are my friend.', 'He is my friend.', 'He am my friend.'], 1, 'He + is.')
      ],
      read: {
        t: 'Hi! I am Sam. I am from Peru and I am a student. My friend Lucia is from Chile. She is a teacher. We are in Quito today. We are happy.',
        tr: '¡Hola! Soy Sam. Soy de Perú y soy estudiante. Mi amiga Lucía es de Chile. Ella es profesora. Hoy estamos en Quito. Estamos contentos.',
        q: [
          mc('Where is Sam from?', ['Chile', 'Peru', 'Quito'], 1),
          mc('What is Lucia?', ['A student', 'A teacher', 'A doctor'], 1)
        ]
      },
      write: { p: 'Escribe 3 frases: tu nombre, de dónde eres y qué eres (estudiante, técnico, etc.).', m: 'I am Ana. I am from Ecuador. I am a student.' },
      q: 'English for beginners verb to be'
    },

    {
      id: 'g02', track: 'general', level: 'A1', title: 'Presentarte: nombre, edad, ciudad, estudios', en: 'Introducing yourself',
      explain:
        '<p>Para presentarte usa frases fijas. Apréndelas completas:</p>' +
        '<ul><li><i lang="en">My name is…</i> — Me llamo…</li>' +
        '<li><i lang="en">I\'m from…</i> — Soy de…</li>' +
        '<li><i lang="en">I\'m 20 years old.</i> — Tengo 20 años. (En inglés se usa <i lang="en">to be</i>, no <i lang="en">have</i>.)</li>' +
        '<li><i lang="en">I live in… / I study… / I work…</i> — Vivo en… / Estudio… / Trabajo…</li></ul>' +
        '<p><b>Preguntas básicas:</b> <i lang="en">What\'s your name? Where are you from? How old are you? What do you do?</i> (¿a qué te dedicas?)</p>' +
        '<p>Al conocer a alguien: <i lang="en">Nice to meet you.</i> (Mucho gusto.)</p>',
      vocab: [
        ['name', 'nombre', 'My name is Alex.'],
        ['years old', 'años (de edad)', 'I am twenty years old.'],
        ['country', 'país', 'My country is Ecuador.'],
        ['nice to meet you', 'mucho gusto', 'Nice to meet you, Alex.'],
        ['what do you do?', '¿a qué te dedicas?', 'What do you do?'],
        ['engineer', 'ingeniero/a', 'He is an engineer.'],
        ['study', 'estudiar', 'I study cybersecurity.'],
        ['work', 'trabajar', 'I work in Quito.'],
        ['live', 'vivir', 'I live in Quito.'],
        ['speak', 'hablar (un idioma)', 'I speak Spanish and a little English.']
      ],
      ex: [
        mc('How ___ are you?', ['old', 'years', 'age'], 0, '<i lang="en">How old are you?</i> = ¿Cuántos años tienes?'),
        mc('I ___ 20 years old.', ['have', 'am', 'are'], 1, 'Para la edad se usa <i lang="en">to be</i>: <i lang="en">I am 20</i>.'),
        fill('My ___ is Ana. (nombre)', 'name', '<i lang="en">My name is…</i>'),
        order('¿De dónde eres?', 'Where are you from?'),
        order('Mucho gusto.', 'Nice to meet you.'),
        mc('Conoces a alguien. Dices:', ['Nice to meet you.', 'See you later.', 'How much is it?'], 0)
      ],
      read: {
        t: 'Maria: Hi! What is your name? Daniel: I am Daniel. Nice to meet you. Maria: Nice to meet you. Where are you from? Daniel: I am from Cuenca. And you? Maria: I am from Quito. I study engineering.',
        tr: 'María: ¡Hola! ¿Cómo te llamas? Daniel: Soy Daniel. Mucho gusto. María: Mucho gusto. ¿De dónde eres? Daniel: Soy de Cuenca. ¿Y tú? María: Soy de Quito. Estudio ingeniería.',
        q: [
          mc('Where is Daniel from?', ['Quito', 'Cuenca', 'Lima'], 1),
          mc('Where is Maria from?', ['Cuenca', 'Quito', 'Lima'], 1)
        ]
      },
      write: { p: 'Preséntate en 4 frases: nombre, edad, ciudad y qué estudias o a qué te dedicas.', m: 'My name is Ana. I am 20 years old. I live in Quito. I study engineering.' },
      q: 'introduce yourself in English beginner'
    },

    {
      id: 'g03', track: 'general', level: 'A1', title: 'Cosas y personas: a/an, plurales, this/that', en: 'Things and people',
      explain:
        '<p><b>a / an</b> = un/una. Usa <i lang="en">an</i> antes de <b>sonido</b> de vocal: <i lang="en">an apple, an engineer</i>. Usa <i lang="en">a</i> antes de consonante: <i lang="en">a laptop</i>.</p>' +
        '<p><b>Plural:</b> normalmente +s (<i lang="en">laptops</i>). Si termina en -s, -sh, -ch, -x: +es (<i lang="en">boxes</i>). Consonante + y → -ies (<i lang="en">city → cities</i>). Irregulares: <i lang="en">man → men, child → children, person → people</i>.</p>' +
        '<p><b>this / that</b>: <i lang="en">this</i> = esto/este (cerca), <i lang="en">that</i> = eso/ese (lejos). Plural: <i lang="en">these / those</i>.</p>' +
        '<p><i lang="en">This is my phone. Those are my keys.</i></p>',
      vocab: [
        ['laptop', 'computadora portátil', 'This is my laptop.'],
        ['phone', 'teléfono', 'That is my phone.'],
        ['key', 'llave', 'These are my keys.'],
        ['bag', 'mochila, bolso', 'Is this your bag?'],
        ['book', 'libro', 'Those are my books.'],
        ['apple', 'manzana', 'It is an apple.'],
        ['umbrella', 'paraguas', 'It is an umbrella.'],
        ['person', 'persona', 'He is a nice person.'],
        ['people', 'gente, personas', 'These people are my friends.'],
        ['city', 'ciudad', 'Quito is a big city.']
      ],
      ex: [
        mc('It is ___ umbrella.', ['a', 'an'], 1, '<i lang="en">umbrella</i> empieza con sonido de vocal → <i lang="en">an</i>.'),
        mc('It is ___ laptop.', ['a', 'an'], 0, '<i lang="en">laptop</i> empieza con consonante → <i lang="en">a</i>.'),
        mc('El plural de "box" es:', ['boxs', 'boxes', 'boxies'], 1, 'Termina en -x → +es.'),
        fill('One city, two ___.', 'cities', 'Consonante + y → -ies.'),
        mc('Those ___ my keys.', ['is', 'are'], 1, 'Plural (<i lang="en">those</i>) → <i lang="en">are</i>.'),
        order('Esto es mi teléfono.', 'This is my phone.')
      ],
      read: {
        t: 'This is my room. This is my laptop and these are my books. That is a window. Those are photos of my family. It is a small room, but it is a good room.',
        tr: 'Este es mi cuarto. Esta es mi laptop y estos son mis libros. Aquella es una ventana. Aquellas son fotos de mi familia. Es un cuarto pequeño, pero es un buen cuarto.',
        q: [
          mc('What are "these" in the text?', ['Books', 'Keys', 'Phones'], 0),
          mc('Is the room big?', ['Yes', 'No, it is small', 'We do not know'], 1)
        ]
      },
      write: { p: 'Describe 3 objetos de tu escritorio usando this / that / these / those.', m: 'This is my laptop. These are my books. That is a window.' },
      q: 'this that these those English lesson'
    },

    {
      id: 'g04', track: 'general', level: 'A1', title: 'Tu rutina diaria: presente simple', en: 'Daily routine',
      explain:
        '<p>El <b>presente simple</b> se usa para hábitos y rutinas. Usa el verbo base; con <b>he / she / it</b> agrega <b>-s</b>.</p>' +
        '<table><tr><th>Sujeto</th><th>Verbo</th></tr>' +
        '<tr><td>I / you / we / they</td><td>work</td></tr>' +
        '<tr><td>he / she / it</td><td>work<b>s</b></td></tr></table>' +
        '<p>Cambios: <i lang="en">go → goes, watch → watches, study → studies, have → has</i>.</p>' +
        '<p><b>Frecuencia</b> (van antes del verbo): <i lang="en">always</i> (siempre), <i lang="en">usually</i>, <i lang="en">often</i>, <i lang="en">sometimes</i> (a veces), <i lang="en">never</i> (nunca). <i lang="en">I usually study at night.</i></p>',
      vocab: [
        ['wake up', 'despertarse', 'I wake up at six.'],
        ['get up', 'levantarse', 'He gets up early.'],
        ['have breakfast', 'desayunar', 'We have breakfast at seven.'],
        ['go to class', 'ir a clases', 'I go to class by bus.'],
        ['usually', 'usualmente', 'I usually walk to school.'],
        ['always', 'siempre', 'He always drinks coffee.'],
        ['sometimes', 'a veces', 'Sometimes I cook dinner.'],
        ['never', 'nunca', 'They never miss class.'],
        ['go to bed', 'irse a dormir', 'I go to bed at eleven.'],
        ['every day', 'todos los días', 'She studies every day.']
      ],
      ex: [
        mc('She ___ at seven.', ['wake up', 'wakes up', 'waking up'], 1, 'she + verbo con -s.'),
        fill('He ___ (study) every night.', 'studies', 'study → studies (consonante + y).'),
        fill('We ___ (have) breakfast at eight.', 'have', 'Con <i lang="en">we</i> no lleva -s.'),
        mc('I ___ drink coffee at night. (0 %)', ['always', 'sometimes', 'never'], 2, '<i lang="en">never</i> = nunca.'),
        order('Ella siempre se levanta temprano.', 'She always gets up early.'),
        mc('¿Cuál es correcta?', ['He go to class.', 'He goes to class.', 'He gos to class.'], 1, 'go → goes.')
      ],
      read: {
        t: 'Maria wakes up at six every day. She has breakfast at seven and goes to class by bus. She studies in the library after class. She usually goes to bed at eleven. On Sundays she never studies.',
        tr: 'María se despierta a las seis todos los días. Desayuna a las siete y va a clases en bus. Estudia en la biblioteca después de clases. Normalmente se acuesta a las once. Los domingos nunca estudia.',
        q: [
          mc('Maria wakes up at ___.', ['six', 'seven', 'eleven'], 0),
          mc('Maria never studies on ___.', ['Mondays', 'Sundays', 'Fridays'], 1)
        ]
      },
      write: { p: 'Escribe 4 frases sobre tu rutina (levantarte, estudiar, dormir). Usa usually, always o sometimes.', m: 'I wake up at six. I usually study at night. Sometimes I watch videos. I go to bed at eleven.' },
      q: 'daily routine English present simple'
    },

    {
      id: 'g05', track: 'general', level: 'A1', title: 'Preguntas y negaciones: do / does', en: 'Questions and negatives',
      explain:
        '<p>En presente simple, para preguntar y negar usa el auxiliar <b>do / does</b>. El verbo principal queda en forma base (sin -s).</p>' +
        '<table><tr><th></th><th>Ejemplo</th></tr>' +
        '<tr><td>Pregunta</td><td><i lang="en">Do you work? / Does she work?</i></td></tr>' +
        '<tr><td>Negación</td><td><i lang="en">I don\'t work. / She doesn\'t work.</i></td></tr>' +
        '<tr><td>Respuesta corta</td><td><i lang="en">Yes, I do. / No, she doesn\'t.</i></td></tr></table>' +
        '<p><b>Preguntas con palabra:</b> What, Where, When, Why, Who, How + do/does + sujeto + verbo: <i lang="en">Where do you live? What time does the class start?</i></p>',
      vocab: [
        ['like', 'gustar, querer', 'Do you like music?'],
        ['want', 'querer', 'I want some water.'],
        ['need', 'necesitar', 'She needs a charger.'],
        ['know', 'saber, conocer', "I don't know."],
        ['understand', 'entender', "I don't understand."],
        ['start', 'empezar', 'When does the class start?'],
        ['why', 'por qué', 'Why do you study English?'],
        ['because', 'porque', 'Because I want to travel.'],
        ['answer', 'respuesta, responder', 'I know the answer.'],
        ['where', 'dónde', 'Where do you live?']
      ],
      ex: [
        mc('___ you speak English?', ['Do', 'Does', 'Are'], 0, 'Con <i lang="en">you</i> se usa <i lang="en">do</i>.'),
        mc('She ___ like coffee.', ["don't", "doesn't", "isn't"], 1, 'she → doesn\'t.'),
        fill('Where ___ he live? (do/does)', 'does', 'he → does.'),
        fill("I don't ___ the answer. (know)", 'know', 'Después de don\'t va el verbo base.'),
        order('¿Por qué estudias inglés?', 'Why do you study English?'),
        mc('Does she work here? Respuesta corta (sí):', ['Yes, she does.', 'Yes, she works.', 'Yes, she is.'], 0)
      ],
      read: {
        t: 'Tom: Do you speak English? Lena: Yes, I do, but I don\'t understand everything. Tom: Why do you study English? Lena: Because I want to travel and work in technology. Tom: Does your friend study English too? Lena: No, he doesn\'t. He speaks it very well!',
        tr: 'Tom: ¿Hablas inglés? Lena: Sí, pero no entiendo todo. Tom: ¿Por qué estudias inglés? Lena: Porque quiero viajar y trabajar en tecnología. Tom: ¿Tu amigo también estudia inglés? Lena: No. ¡Él lo habla muy bien!',
        q: [
          mc('Why does Lena study English?', ['To travel and work in technology', 'For her friend', 'For a test'], 0),
          mc("Does Lena's friend study English?", ['Yes, he does.', "No, he doesn't.", 'We do not know.'], 1)
        ]
      },
      write: { p: 'Escribe 3 preguntas para un compañero (con do / does) y 2 negaciones sobre ti.', m: "Do you like music? Where do you study? Does your friend speak English? I don't like loud places. I don't drink coffee." },
      q: 'do does questions English lesson'
    },

    {
      id: 'g06', track: 'general', level: 'A1', title: 'Hay y tengo: there is / there are y have', en: 'There is, there are, have',
      explain:
        '<p><b>There is</b> (singular) / <b>There are</b> (plural) = <i>hay</i>: <i lang="en">There is a bank near here. There are two bathrooms.</i></p>' +
        '<p>Negación: <i lang="en">There isn\'t… / There aren\'t…</i>. Pregunta: <i lang="en">Is there…? Are there…?</i></p>' +
        '<p><b>Have</b> = tener: <i lang="en">I have, you have, he/she <b>has</b></i>. Pregunta: <i lang="en">Do you have a pen?</i> Negación: <i lang="en">I don\'t have time.</i></p>',
      vocab: [
        ['there is', 'hay (singular)', 'There is a bank near here.'],
        ['there are', 'hay (plural)', 'There are two bathrooms.'],
        ['near', 'cerca de', 'The station is near here.'],
        ['bathroom', 'baño', 'Is there a bathroom here?'],
        ['pen', 'lapicero', 'Do you have a pen?'],
        ['time', 'tiempo, hora', "I don't have time."],
        ['brother', 'hermano', 'I have one brother.'],
        ['sister', 'hermana', 'She has two sisters.'],
        ['family', 'familia', 'I have a big family.'],
        ['kitchen', 'cocina', 'There is a table in the kitchen.']
      ],
      ex: [
        mc('There ___ a bank near here.', ['is', 'are', 'have'], 0, 'Singular → <i lang="en">is</i>.'),
        mc('There ___ two bathrooms.', ['is', 'are', 'has'], 1, 'Plural → <i lang="en">are</i>.'),
        fill('She ___ two brothers. (have)', 'has', 'she → has.'),
        fill('___ there a hotel near here?', ['Is', 'is'], 'Pregunta singular: <i lang="en">Is there…?</i>'),
        order('¿Tienes un lapicero?', 'Do you have a pen?'),
        mc("Yo no tengo tiempo hoy:", ["I don't have time today.", 'I not have time today.', 'I no have time today.'], 0)
      ],
      read: {
        t: 'I have a small family. I have one brother and one sister. My brother has a laptop and my sister has a phone. There are four people in my house. There is a big kitchen, but there isn\'t a garden.',
        tr: 'Tengo una familia pequeña. Tengo un hermano y una hermana. Mi hermano tiene una laptop y mi hermana tiene un teléfono. Hay cuatro personas en mi casa. Hay una cocina grande, pero no hay jardín.',
        q: [
          mc('How many people are in the house?', ['Two', 'Three', 'Four'], 2),
          mc('Is there a garden?', ['Yes', 'No', 'We do not know'], 1)
        ]
      },
      write: { p: 'Describe tu casa o tu cuarto con there is / there are (3 frases).', m: "There is a bed and a desk in my room. There are two windows. There isn't a TV." },
      q: 'there is there are English lesson'
    },

    {
      id: 'g07', track: 'general', level: 'A1', title: 'Poder y pedir con cortesía: can / could', en: 'Can, could, requests',
      explain:
        '<p><b>can</b> = poder, saber hacer algo. No cambia (<i lang="en">he can</i>) y el verbo siguiente va sin <i lang="en">to</i>: <i lang="en">I can swim.</i></p>' +
        '<p>Negación: <i lang="en">can\'t</i> (cannot). Pregunta: <i lang="en">Can you help me?</i></p>' +
        '<p><b>Pedir con cortesía:</b> <i lang="en">Can I have some water, please?</i> / <i lang="en">Could you repeat that, please?</i> (más formal) / <i lang="en">Could you speak more slowly?</i></p>' +
        '<p><b>Ofrecer ayuda:</b> <i lang="en">Can I help you?</i></p>',
      vocab: [
        ['can', 'poder, saber hacer', 'I can speak a little English.'],
        ["can't", 'no poder', "I can't hear you."],
        ['help', 'ayudar, ayuda', 'Can you help me, please?'],
        ['please', 'por favor', 'Could you repeat that, please?'],
        ['sorry', 'perdón, lo siento', 'Sorry, I am late.'],
        ['excuse me', 'disculpe, permiso', 'Excuse me, where is the bank?'],
        ['slowly', 'despacio', 'Could you speak more slowly?'],
        ['repeat', 'repetir', 'Could you repeat that?'],
        ['hear', 'oír', "Can you hear me?"],
        ['swim', 'nadar', 'I can swim.']
      ],
      ex: [
        mc('She ___ speak three languages.', ['can', 'cans', 'can to'], 0, '<i lang="en">can</i> no cambia con he/she.'),
        mc('He can ___ English.', ['speaks', 'speak', 'to speak'], 1, 'Después de <i lang="en">can</i> va el verbo base.'),
        fill("I ___ hear you. (negativo)", ["can't", 'cannot', 'can not'], 'Negativo de can: can\'t.'),
        mc('¿Cuál es más cortés?', ['Give me water.', 'Could I have some water, please?', 'I want water.'], 1, '<i lang="en">Could I…, please?</i> es cortés.'),
        order('¿Podría repetir eso, por favor?', ['Could you repeat that, please?', 'Please, could you repeat that?']),
        order('¿Puedes ayudarme, por favor?', ['Can you help me, please?', 'Please, can you help me?'])
      ],
      read: {
        t: 'Hello! I am a new student in this class. I can speak Spanish and a little English. I can\'t understand fast speakers, so I say: "Excuse me, could you speak more slowly, please?" Everyone is kind and helps me.',
        tr: '¡Hola! Soy un estudiante nuevo en esta clase. Puedo hablar español y un poco de inglés. No puedo entender a quienes hablan rápido, así que digo: "Disculpe, ¿podría hablar más despacio, por favor?" Todos son amables y me ayudan.',
        q: [
          mc('What can the student speak?', ['Only English', 'Spanish and a little English', 'Only Spanish'], 1),
          mc('What does the student say to fast speakers?', ['Could you speak more slowly, please?', "I can't help you.", 'Please speak faster.'], 0)
        ]
      },
      write: { p: 'Escribe 3 cosas que puedes hacer y 2 que todavía no puedes hacer en inglés.', m: "I can read simple texts. I can introduce myself. I can't understand fast speakers yet." },
      q: "can can't English beginners"
    },

    {
      id: 'g08', track: 'general', level: 'A1', title: 'Números, hora, días y fechas', en: 'Numbers, time, days, dates',
      explain:
        '<p><b>Números:</b> 20 twenty, 30 thirty, 40 forty, 50 fifty, 100 one hundred. Une decenas y unidades con guion: <i lang="en">twenty-one, forty-five</i>. Ojo: <i lang="en">13 thirteen</i> ≠ <i lang="en">30 thirty</i>; el acento cambia (thir<b>teen</b> / <b>thir</b>ty).</p>' +
        '<p><b>La hora:</b> <i lang="en">What time is it?</i> → <i lang="en">It\'s three o\'clock</i> (3:00) · <i lang="en">half past three</i> (3:30) · <i lang="en">quarter past three</i> (3:15) · <i lang="en">quarter to four</i> (3:45). Con la hora usa <b>at</b>: <i lang="en">at 8:00</i>.</p>' +
        '<p><b>Días:</b> Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Con días usa <b>on</b>: <i lang="en">on Monday</i>.</p>' +
        '<p><b>Meses:</b> January, February, March, April, May, June, July, August, September, October, November, December.</p>',
      vocab: [
        ["o'clock", 'en punto', "It is three o'clock."],
        ['half past', 'y media', 'It is half past two.'],
        ['quarter to', 'menos cuarto', 'It is quarter to five.'],
        ['Monday', 'lunes', 'The class is on Monday.'],
        ['weekend', 'fin de semana', 'I do not work on the weekend.'],
        ['today', 'hoy', 'Today is Friday.'],
        ['tomorrow', 'mañana (día siguiente)', 'Tomorrow is Saturday.'],
        ['week', 'semana', 'The week starts on Monday.'],
        ['month', 'mes', 'This month is October.'],
        ['thirty', 'treinta', 'It costs thirty dollars.']
      ],
      ex: [
        mc('It is half ___ three. (son las 3:30)', ['past', 'to', 'at'], 0, '3:30 = <i lang="en">half past three</i>.'),
        mc('"Quarter to five" es:', ['4:45', '5:15', '4:15'], 0, '<i lang="en">quarter to five</i> = faltan 15 minutos para las cinco.'),
        fill('The class is ___ Monday. (at / on / in)', 'on', 'Días → <i lang="en">on</i>.'),
        fill("The class starts ___ 8 o'clock. (at / on / in)", 'at', 'Horas → <i lang="en">at</i>.'),
        order('¿Qué hora es?', 'What time is it?'),
        mc('¿Cómo se dice 45?', ['forty-five', 'fourteen-five', 'forty-fifteen'], 0)
      ],
      read: {
        t: 'My week is busy. On Monday and Wednesday I have class at eight o\'clock. On Tuesday I work from nine to five. On Friday I study with my friends at half past six. On the weekend I rest. Today is Wednesday and it is quarter to eight. I am late!',
        tr: 'Mi semana es ocupada. Los lunes y miércoles tengo clase a las ocho en punto. El martes trabajo de nueve a cinco. El viernes estudio con mis amigos a las seis y media. El fin de semana descanso. Hoy es miércoles y son las ocho menos cuarto. ¡Estoy atrasado!',
        q: [
          mc('The writer works on ___.', ['Monday', 'Tuesday', 'Friday'], 1),
          mc('What time is it now?', ['7:45', '8:15', '6:30'], 0)
        ]
      },
      write: { p: 'Escribe tu horario: 3 frases con día y hora (on Monday at…).', m: "On Monday I have class at eight o'clock. On Friday I study at half past six. On Sunday I rest." },
      q: 'telling time English beginners'
    },

    {
      id: 'g09', track: 'general', level: 'A1', title: 'Lo que pasa ahora: presente continuo', en: 'Present continuous',
      explain:
        '<p>Para acciones que ocurren <b>ahora</b>: <b>am / is / are + verbo-ing</b>.</p>' +
        '<p><i lang="en">I am studying. She is working. They are waiting.</i></p>' +
        '<p><b>Escritura del -ing:</b> <i lang="en">write → writing</i> (quita la e), <i lang="en">run → running</i> (duplica la consonante), <i lang="en">study → studying</i>.</p>' +
        '<p>Pregunta: <i lang="en">Are you working?</i> Negación: <i lang="en">I\'m not working.</i></p>' +
        '<p><b>Diferencia:</b> <i lang="en">I study at night</i> (rutina) vs. <i lang="en">I am studying now</i> (ahora mismo). Señales: <i lang="en">now, right now, at the moment</i>.</p>',
      vocab: [
        ['now', 'ahora', 'I am studying now.'],
        ['right now', 'ahora mismo', 'She is working right now.'],
        ['wait', 'esperar', 'They are waiting for the bus.'],
        ['listen', 'escuchar', 'We are listening to music.'],
        ['watch', 'mirar, ver', 'He is watching a video.'],
        ['cook', 'cocinar', 'I am cooking dinner.'],
        ['read', 'leer', 'She is reading a book.'],
        ['run', 'correr', 'They are running in the park.'],
        ['write', 'escribir', 'I am writing an email.'],
        ['rain', 'llover', 'It is raining now.']
      ],
      ex: [
        mc('She ___ now.', ['works', 'is working', 'work'], 1, '"Ahora" → <i lang="en">is working</i>.'),
        fill('They ___ (wait) for the bus.', 'are waiting', 'are + verbo-ing.'),
        fill('I am ___ (write) an email.', 'writing', 'write → writing (quita la e).'),
        mc('___ you listening?', ['Are', 'Do', 'Is'], 0, 'Con <i lang="en">you</i> → <i lang="en">Are</i>.'),
        order('Estoy estudiando ahora.', ['I am studying now.', 'Now I am studying.']),
        mc('¿Cuál es una rutina?', ['I am cooking now.', 'I cook every day.', 'It is raining.'], 1)
      ],
      read: {
        t: 'It is Saturday morning and everybody is busy. My mother is cooking breakfast. My father is reading the news. My sister is watching a video and I am writing an email. It is raining outside, so nobody is running in the park.',
        tr: 'Es sábado por la mañana y todos están ocupados. Mi mamá está cocinando el desayuno. Mi papá está leyendo las noticias. Mi hermana está viendo un video y yo estoy escribiendo un correo. Está lloviendo afuera, así que nadie está corriendo en el parque.',
        q: [
          mc('What is the mother doing?', ['Cooking breakfast', 'Reading the news', 'Watching a video'], 0),
          mc('Why is nobody running in the park?', ['It is raining', 'They are tired', 'It is Sunday'], 0)
        ]
      },
      write: { p: 'Escribe 3 frases: qué está haciendo ahora mismo cada persona a tu alrededor.', m: 'I am writing English sentences. My mother is cooking. My brother is watching TV.' },
      q: 'present continuous English lesson'
    },

    {
      id: 'g10', track: 'general', level: 'A1', title: 'Dónde y cuándo: in / on / at y direcciones', en: 'Prepositions and directions',
      explain:
        '<p><b>Lugar:</b> <b>in</b> (dentro de: <i lang="en">in Quito, in the room</i>) · <b>on</b> (sobre una superficie: <i lang="en">on the table</i>) · <b>at</b> (un punto: <i lang="en">at the station, at home</i>).</p>' +
        '<p><b>Tiempo:</b> <b>in</b> (meses, años, partes del día: <i lang="en">in May, in 2026, in the morning</i>) · <b>on</b> (días y fechas: <i lang="en">on Monday</i>) · <b>at</b> (horas: <i lang="en">at 8:00, at night</i>).</p>' +
        '<p><b>Direcciones:</b> <i lang="en">Go straight. Turn left. Turn right.</i> / <i lang="en">It is next to the bank. It is opposite the park. It is between the bank and the school.</i></p>',
      vocab: [
        ['straight', 'derecho, recto', 'Go straight for two blocks.'],
        ['turn left', 'girar a la izquierda', 'Turn left at the corner.'],
        ['turn right', 'girar a la derecha', 'Turn right after the bank.'],
        ['next to', 'al lado de', 'The bank is next to the school.'],
        ['opposite', 'frente a', 'The park is opposite the hotel.'],
        ['between', 'entre', 'The shop is between two banks.'],
        ['corner', 'esquina', 'The hotel is on the corner.'],
        ['block', 'cuadra', 'It is two blocks from here.'],
        ['far', 'lejos', 'Is it far from here?'],
        ['behind', 'detrás de', 'The station is behind the market.']
      ],
      ex: [
        mc('The book is ___ the table.', ['in', 'on', 'at'], 1, 'Sobre una superficie → <i lang="en">on</i>.'),
        mc('I live ___ Quito.', ['in', 'on', 'at'], 0, 'Ciudades → <i lang="en">in</i>.'),
        mc('The class starts ___ 8:00.', ['in', 'on', 'at'], 2, 'Horas → <i lang="en">at</i>.'),
        fill('My birthday is ___ May. (in / on / at)', 'in', 'Meses → <i lang="en">in</i>.'),
        mc('"The bank is next to the school" significa:', ['El banco está al lado de la escuela.', 'El banco está lejos de la escuela.', 'El banco está dentro de la escuela.'], 0),
        order('Gira a la izquierda en la esquina.', ['Turn left at the corner.', 'At the corner turn left.'])
      ],
      read: {
        t: 'Excuse me, where is the bus station? Go straight for two blocks. Turn left at the corner. The station is on your right, next to a big bank. It is not far: only five minutes from here.',
        tr: 'Disculpe, ¿dónde está la estación de buses? Siga derecho dos cuadras. Gire a la izquierda en la esquina. La estación está a su derecha, al lado de un banco grande. No está lejos: solo cinco minutos desde aquí.',
        q: [
          mc('How many blocks straight?', ['One', 'Two', 'Five'], 1),
          mc('Where is the station?', ['Next to a bank', 'Opposite the park', 'Behind a hotel'], 0)
        ]
      },
      write: { p: 'Explica a un amigo cómo llegar de tu casa a una tienda (3 frases).', m: 'Go straight for two blocks. Turn right at the corner. The shop is next to the bank.' },
      q: 'giving directions in English'
    }

  );
})();
