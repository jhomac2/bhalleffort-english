/* Escucha y prueba de dominio, nivel A1 (lecciones existentes).
   listen.d = diálogo [hablante, texto]; listen.q = preguntas de comprensión; quiz = banco de 8 ítems para la prueba de dominio. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;

  EL.extend('g01', {
    listen: { d: [['Ana', 'Hello! I am Ana. What is your name?'], ['Ben', 'Hi Ana. My name is Ben. I am from Peru.'], ['Ana', 'Nice to meet you, Ben. I am from Ecuador.'], ['Ben', 'Are you a student?'], ['Ana', 'Yes, I am. And you?'], ['Ben', 'I am a teacher. My friend is here too. She is a student.']],
      q: [mc('¿De dónde es Ben?', ['Peru', 'Ecuador', 'Chile'], 0), mc('¿Qué es Ana?', ['Teacher', 'Student', 'Engineer'], 1), mc('¿Qué es la amiga de Ben?', ['Teacher', 'Student', 'Doctor'], 1)] },
    quiz: [
      mc('We ___ in class now.', ['am', 'is', 'are'], 2, 'We + are.'),
      mc('My brother ___ tired.', ['am', 'is', 'are'], 1, 'My brother = he → is.'),
      fill('I ___ not late.', 'am', 'I + am.'),
      fill('___ she a teacher?', 'Is', 'En preguntas el verbo va antes: Is she…?'),
      order('Ellos están aquí.', 'They are here.'),
      mc('¿Cuál es correcta?', ['You is my friend.', 'You are my friend.', 'You am my friend.'], 1, 'You + are.'),
      mc('¿Qué significa «He\'s tired»?', ['Él está cansado', 'Él estaba cansado', 'Él tiene un cansancio'], 0, 'He\'s = He is.'),
      hear(['Is she ready?', 'Is he ready?', 'Are you ready?'], 2, 'Se oía «Are you ready?».')
    ]
  });

  EL.extend('g02', {
    listen: { d: [['Maria', 'Hi! What is your name?'], ['Daniel', 'I am Daniel. Nice to meet you.'], ['Maria', 'Nice to meet you too. How old are you?'], ['Daniel', 'I am twenty-two years old. And you?'], ['Maria', 'I am twenty-five. I live in Quito.'], ['Daniel', 'What do you do?'], ['Maria', 'I am an engineer. I work in a hospital.']],
      q: [mc('¿Cuántos años tiene Daniel?', ['20', '22', '25'], 1), mc('¿Dónde vive María?', ['Quito', 'Lima', 'Cuenca'], 0), mc('¿Qué es María?', ['Teacher', 'Engineer', 'Student'], 1)] },
    quiz: [
      mc('___ old are you?', ['What', 'How', 'Who'], 1, 'Para la edad: How old…?'),
      mc('I ___ in Cuenca.', ['live', 'lives', 'living'], 0, 'Con I se usa la forma base: live.'),
      fill('I ___ English and a little French.', 'speak', 'I + speak.'),
      mc('¿Cómo preguntas a qué se dedica alguien?', ['What do you do?', 'Where do you do?', 'Who do you do?'], 0),
      order('Tengo veinte años.', 'I am twenty years old.', 'En inglés la edad se dice con to be.'),
      mc('¿Qué dices al conocer a alguien?', ['Nice to meet you.', 'See you later.', 'Thank you.'], 0),
      fill('My name ___ Ana.', 'is'),
      hear(['I live here.', 'I leave here.', 'I love here.'], 0, 'Se oía «live».')
    ]
  });

  EL.extend('g03', {
    listen: { d: [['Tom', 'Excuse me, is this your bag?'], ['Lena', 'No, it is not my bag. My bag is that one.'], ['Tom', 'Oh, sorry. What is in your bag?'], ['Lena', 'I have a laptop, two books and an umbrella.'], ['Tom', 'And these keys? Are they yours?'], ['Lena', 'Yes, they are. Thank you!']],
      q: [mc('¿Cuántos libros tiene Lena?', ['One', 'Two', 'Three'], 1), mc('¿Qué más tiene en la bolsa?', ['An umbrella', 'An apple', 'A phone'], 0), mc('¿De quién son las llaves?', ['Tom', 'Lena', 'Nobody'], 1)] },
    quiz: [
      mc('It is ___ apple.', ['a', 'an', 'two'], 1, 'Antes de vocal (a, e, i, o, u) se usa an.'),
      mc('I have two ___.', ['book', 'books', 'bookes'], 1, 'Plural: books.'),
      mc('___ are my keys. (aquí, varias)', ['This', 'These', 'That'], 1),
      fill('That is ___ umbrella.', 'an'),
      mc('One person, two ___.', ['persons', 'people', 'peoples'], 1, 'El plural de person es people.'),
      order('Estas son mis llaves.', 'These are my keys.'),
      mc('¿Cuál es correcta?', ['She has a laptop.', 'She has an laptop.', 'She has laptops a.'], 0),
      hear(['These are my keys.', 'This is my key.', 'That is my key.'], 0, 'Se oía «These are» (plural).')
    ]
  });

  EL.extend('t01', {
    listen: { d: [['Tech', 'IT help desk. How can I help you?'], ['Ana', 'Hello. My laptop does not turn on.'], ['Tech', 'Is the charger connected?'], ['Ana', 'Yes, the cable is connected, but the battery is empty.'], ['Tech', 'Wait ten minutes and then press the power button.'], ['Ana', 'OK. Thank you.']],
      q: [mc('¿Qué problema tiene Ana?', ['The laptop does not turn on', 'The printer is broken', 'The mouse does not work'], 0), mc('¿Cómo está la batería?', ['Empty', 'Full', 'New'], 0), mc('¿Cuánto tiempo debe esperar?', ['2 minutes', '10 minutes', '20 minutes'], 1)] },
    quiz: [
      mc('You type with the ___.', ['keyboard', 'screen', 'printer'], 0),
      mc('The ___ stores your files.', ['hard drive', 'charger', 'mouse'], 0),
      fill('Please ___ off the computer.', 'turn', 'turn off = apagar.'),
      mc('The printer needs a ___ to connect to the computer.', ['cable', 'battery', 'screen'], 0),
      fill('The ___ is empty. I need the charger.', 'battery'),
      order('Enciende la computadora.', 'Turn on the computer.'),
      mc('«Memory» en una computadora es…', ['memoria', 'pantalla', 'teclado'], 0),
      hear(['cable', 'table', 'cabin'], 0, 'Se oía «cable».')
    ]
  });

  EL.extend('g04', {
    listen: { d: [['Ana', 'What time do you get up?'], ['Leo', 'I usually get up at six. I have breakfast at seven.'], ['Ana', 'Do you go to class every day?'], ['Leo', 'Yes, I do. But on Saturday I never get up early.'], ['Ana', 'Me too! I always go to bed late on Friday.'], ['Leo', 'I sometimes watch a movie on Friday night.']],
      q: [mc('¿A qué hora se levanta Leo normalmente?', ['5:00', '6:00', '7:00'], 1), mc('¿Qué día no se levanta temprano Leo?', ['Monday', 'Saturday', 'Friday'], 1), mc('¿Qué hace Ana el viernes?', ['She goes to bed late', 'She goes to class', 'She watches a movie'], 0)] },
    quiz: [
      mc('He ___ up at six.', ['get', 'gets', 'getting'], 1, 'Con he/she/it el verbo lleva -s.'),
      mc('I ___ eat breakfast. (nunca)', ['always', 'never', 'usually'], 1),
      fill('She ___ to class every day. (go)', 'goes', 'go → goes con she.'),
      mc('¿Cuál es correcta?', ['I always drink water.', 'I drink always water.', 'I am drink always water.'], 0, 'Always va antes del verbo.'),
      fill('They ___ breakfast at seven. (have)', 'have'),
      order('Me acuesto a las diez.', ['I go to bed at ten.', 'At ten I go to bed.']),
      mc('Mary ___ TV on Sundays.', ['watch', 'watchs', 'watches'], 2, 'watch → watches.'),
      hear(['I wake up at six.', 'I wake up at seven.', 'I wake up at eleven.'], 0, 'Se oía «six».')
    ]
  });

  EL.extend('g05', {
    listen: { d: [['Tom', 'Do you speak English?'], ['Lena', 'Yes, I do, but I do not understand everything.'], ['Tom', 'Does your friend speak English too?'], ['Lena', 'No, he does not. He needs a course.'], ['Tom', 'Why does he want to learn?'], ['Lena', 'Because he wants a better job.']],
      q: [mc('¿Lena entiende todo?', ['Yes', 'No', 'She does not speak English'], 1), mc('¿El amigo de Lena habla inglés?', ['Yes', 'No', 'A little'], 1), mc('¿Por qué quiere aprender?', ['For travel', 'For a better job', 'For a friend'], 1)] },
    quiz: [
      mc('___ she like coffee?', ['Do', 'Does', 'Is'], 1),
      mc('They ___ not know the answer.', ['do', 'does', 'are'], 0),
      fill('He ___ not work here.', 'does'),
      fill('___ you need help?', 'Do'),
      mc('¿Cuál es correcta?', ['She does not likes it.', 'She does not like it.', 'She not likes it.'], 1, 'Después de does / do el verbo va sin -s.'),
      order('No entiendo.', 'I do not understand.'),
      mc('— Why are you late? — ___ the bus is slow.', ['Because', 'Why', 'So'], 0),
      hear(['Do you know?', 'Does he know?', 'Do they know?'], 1, 'Se oía «Does he know?».')
    ]
  });

  EL.extend('v01', {
    listen: { d: [['Agent', 'Good morning. Passport, please.'], ['Traveler', 'Here you are.'], ['Agent', 'Do you have luggage to check?'], ['Traveler', 'Yes, one suitcase. And this carry-on bag.'], ['Agent', 'Here is your boarding pass. Your gate is B12. The flight is delayed by thirty minutes.'], ['Traveler', 'Thank you. Could I have a window seat?'], ['Agent', 'I am sorry, only an aisle seat is available.']],
      q: [mc('¿Cuántas maletas despacha?', ['One', 'Two', 'None'], 0), mc('¿Cuál es la puerta de embarque?', ['B2', 'B12', 'D12'], 1), mc('¿Qué asiento le dan?', ['Window', 'Aisle', 'Middle'], 1)] },
    quiz: [
      mc('You show your ___ at the airport.', ['passport', 'menu', 'bill'], 0),
      mc('Your seat number is on the ___.', ['boarding pass', 'suitcase', 'gate'], 0),
      fill('The flight is ___ . It leaves one hour late.', 'delayed'),
      mc('A «carry-on» is…', ['equipaje de mano', 'maleta grande', 'asiento'], 0),
      fill('Where is ___ B12? (puerta)', 'gate'),
      order('Tengo una maleta pequeña.', 'I have a small suitcase.'),
      mc('«Aisle seat» es un asiento…', ['de pasillo', 'de ventana', 'delantero'], 0),
      hear(['flight', 'fly', 'fight'], 0, 'Se oía «flight».')
    ]
  });

  EL.extend('g06', {
    listen: { d: [['Ana', 'Welcome to my house! There is a kitchen on the left.'], ['Ben', 'Nice! Is there a bathroom?'], ['Ana', 'Yes, there is one near the kitchen. There are two bedrooms upstairs.'], ['Ben', 'Do you have a big family?'], ['Ana', 'I have one brother and two sisters. They live here too.'], ['Ben', 'Wow, it is a big family!']],
      q: [mc('¿Cuántos dormitorios hay?', ['One', 'Two', 'Three'], 1), mc('¿Dónde está el baño?', ['Near the kitchen', 'Upstairs', 'Outside'], 0), mc('¿Cuántas hermanas tiene Ana?', ['One', 'Two', 'Three'], 1)] },
    quiz: [
      mc('___ a pen on the table.', ['There is', 'There are', 'They are'], 0),
      mc('There ___ three books here.', ['is', 'are', 'be'], 1),
      fill('I ___ two sisters.', 'have'),
      fill('___ there a bathroom here?', 'Is'),
      mc('She ___ a brother.', ['have', 'has', 'haves'], 1, 'Con she: has.'),
      order('Hay un bolígrafo en la mesa.', ['There is a pen on the table.', 'On the table there is a pen.']),
      mc('¿Cuál es correcta?', ['There is two chairs.', 'There are two chairs.', 'There have two chairs.'], 1),
      hear(['There is a pen.', 'There are pens.', 'They are pens.'], 1, 'Se oía «There are pens».')
    ]
  });

  EL.extend('g07', {
    listen: { d: [['Clerk', 'Good morning. Can I help you?'], ['Sam', 'Yes, please. Could you speak slowly? My English is not good.'], ['Clerk', 'Of course. How can I help you?'], ['Sam', 'I cannot hear well. Could you repeat that, please?'], ['Clerk', 'Sure. I said: you can pay at the desk.'], ['Sam', 'Thank you very much. Sorry for the trouble.']],
      q: [mc('¿Qué pide Sam al principio?', ['Speak slowly', 'Close the door', 'Call someone'], 0), mc('¿Qué no puede hacer bien Sam?', ['See', 'Hear', 'Swim'], 1), mc('¿Dónde se paga?', ['At the desk', 'Online', 'At the door'], 0)] },
    quiz: [
      mc('I ___ swim.', ['can', 'cans', 'am can'], 0),
      mc('___ you help me, please?', ['Can', 'Does', 'Are'], 0),
      fill('She ___ drive. (no puede)', ["can't", 'cannot', 'can not']),
      mc('Para pedir algo con cortesía:', ['Could you open the window?', 'You open the window.', 'Open window you?'], 0),
      fill('Excuse me, ___ you repeat that, please?', ['could', 'can']),
      order('No puedo oírte.', "I can't hear you."),
      mc('«Sorry» sirve para…', ['pedir perdón', 'despedirse', 'preguntar la hora'], 0),
      hear(['Can you help?', 'Can you hear?', 'Can you swim?'], 1, 'Se oía «hear».')
    ]
  });

  EL.extend('v02', {
    listen: { d: [['Officer', 'Good afternoon. What is the purpose of your visit?'], ['Traveler', 'I am here for tourism.'], ['Officer', 'How long will you stay?'], ['Traveler', 'Two weeks. I have a return ticket.'], ['Officer', 'Where will you stay?'], ['Traveler', 'At a hotel downtown. Here is the address.'], ['Officer', 'Do you have anything to declare?'], ['Traveler', 'No, nothing.']],
      q: [mc('¿Por qué viaja?', ['Business', 'Tourism', 'Study'], 1), mc('¿Cuánto tiempo se queda?', ['Two weeks', 'Two days', 'Two months'], 0), mc('¿Dónde se queda?', ['With a friend', 'At a hotel', 'At a hostel'], 1)] },
    quiz: [
      mc('«Purpose of your visit» significa…', ['motivo de tu visita', 'duración de tu visita', 'fecha de tu visita'], 0),
      mc('I am here ___ business.', ['for', 'in', 'at'], 0),
      fill('I will ___ for ten days.', 'stay'),
      mc('You need a ___ to enter some countries.', ['visa', 'receipt', 'towel'], 0),
      fill('Do you have anything to ___ ? (declarar)', 'declare'),
      order('Tengo un boleto de regreso.', 'I have a return ticket.'),
      mc('«Customs» es…', ['la aduana', 'la costumbre', 'el equipaje'], 0),
      hear(['visit', 'visa', 'vision'], 1, 'Se oía «visa».')
    ]
  });

  EL.extend('t02', {
    listen: { d: [['Mia', 'Oh no. I see an error. It says: access denied.'], ['Dan', 'Did you type the correct password?'], ['Mia', 'Yes. Wait, there is another message: invalid username.'], ['Dan', 'Then try again, but check the username.'], ['Mia', 'It works now. Thank you!']],
      q: [mc('¿Qué dice el primer mensaje?', ['Access denied', 'File not found', 'Low battery'], 0), mc('¿Qué estaba mal?', ['The username', 'The printer', 'The screen'], 0), mc('¿Funciona al final?', ['Yes', 'No', 'Not sure'], 0)] },
    quiz: [
      mc('«File not found» significa…', ['No se encontró el archivo', 'Archivo guardado', 'Archivo muy grande'], 0),
      mc('A ___ tells you to be careful.', ['warning', 'cable', 'screen'], 0),
      fill('The upload ___ . (falló)', 'failed'),
      mc('«Invalid password» significa que la contraseña…', ['no es válida', 'es nueva', 'está guardada'], 0),
      fill('You ___ delete this file. (no puedes)', ['cannot', "can't", 'can not']),
      order('Guarda el archivo.', 'Save the file.'),
      mc('«Loading…» significa…', ['cargando', 'guardado', 'error'], 0),
      hear(['failed', 'filled', 'field'], 0, 'Se oía «failed».')
    ]
  });

  EL.extend('g08', {
    listen: { d: [['Ana', 'What time is the class?'], ['Leo', 'It is at half past eight.'], ['Ana', 'Is it today?'], ['Leo', 'No, it is tomorrow, on Tuesday. Today is Monday.'], ['Ana', 'And the exam?'], ['Leo', 'The exam is on the thirtieth of next month, at a quarter to ten.']],
      q: [mc('¿A qué hora es la clase?', ['8:00', '8:30', '9:30'], 1), mc('¿Qué día es hoy?', ['Monday', 'Tuesday', 'Friday'], 0), mc('¿A qué hora es el examen?', ['9:15', '9:45', '10:15'], 1)] },
    quiz: [
      mc('7:00 is seven ___.', ["o'clock", 'half past', 'quarter'], 0),
      mc('3:30 se dice…', ['half past three', 'quarter to three', "three o'clock"], 0),
      fill('4:45 is a ___ to five.', 'quarter'),
      mc('The day after Monday is ___.', ['Sunday', 'Tuesday', 'Friday'], 1),
      mc('Saturday and Sunday are the ___.', ['weekend', 'week', 'month'], 0),
      order('¿Qué día es hoy?', 'What day is today?'),
      mc('«Thirty» es…', ['13', '30', '3'], 1),
      hear(['thirteen', 'thirty', 'three'], 1, 'Se oía «thirty».')
    ]
  });

  EL.extend('g09', {
    listen: { d: [['Mom', 'Hello Tom, what are you doing?'], ['Tom', 'I am studying English right now. My sister is cooking.'], ['Mom', 'Is your brother at home?'], ['Tom', 'Yes, he is watching a movie. It is raining outside, so he is not running today.'], ['Mom', 'OK. Please wait, I am coming home soon.']],
      q: [mc('¿Qué hace Tom?', ['Studies English', 'Cooks', 'Watches a movie'], 0), mc('¿Qué hace su hermana?', ['Cooking', 'Reading', 'Running'], 0), mc('¿Por qué su hermano no corre?', ['It is raining', 'He is tired', 'He is late'], 0)] },
    quiz: [
      mc('She ___ a book now.', ['reads', 'is reading', 'read'], 1),
      mc('They ___ running.', ['is', 'are', 'am'], 1),
      fill('I am ___ an email. (write)', 'writing', 'write → writing (se quita la e).'),
      fill('He is not ___ to music. (listen)', 'listening'),
      mc('Para un hábito: I ___ coffee every morning.', ['am drinking', 'drink', 'drinking'], 1),
      order('Está lloviendo ahora.', ['It is raining now.', 'Now it is raining.']),
      mc('Are you ___ for the bus?', ['wait', 'waiting', 'waits'], 1),
      hear(['He is running.', 'He is reading.', 'He is writing.'], 2, 'Se oía «writing».')
    ]
  });

  EL.extend('t03', {
    listen: { d: [['Leo', 'The internet is very slow today.'], ['Sara', 'Is the Wi-Fi signal strong?'], ['Leo', 'No, it is weak in my room. The router is in the kitchen.'], ['Sara', 'Move closer to the router, or restart it.'], ['Leo', 'OK, I am restarting it now.'], ['Sara', 'Great. Now check the speed on a website.'], ['Leo', 'It is better! Now I can download the file.']],
      q: [mc('¿Dónde está el router?', ['In the kitchen', 'In the room', 'Outside'], 0), mc('¿Cómo es la señal en el cuarto de Leo?', ['Weak', 'Strong', 'Perfect'], 0), mc('¿Qué hace Leo?', ['Restarts the router', 'Buys a router', 'Calls the company'], 0)] },
    quiz: [
      mc('The ___ sends Wi-Fi to your phone.', ['router', 'printer', 'keyboard'], 0),
      mc('You ___ a file to get it from the internet.', ['download', 'upload', 'delete'], 0),
      fill('My computer is not connected. It is ___ . (sin conexión)', 'offline'),
      mc('«Server» es…', ['servidor', 'señal', 'velocidad'], 0),
      fill('The Wi-Fi ___ is weak here. (señal)', 'signal'),
      order('La velocidad es baja.', 'The speed is low.'),
      mc('An IP address identifies a ___ on a network.', ['device', 'keyboard', 'page'], 0),
      hear(['upload', 'download', 'offline'], 1, 'Se oía «download».')
    ]
  });

  EL.extend('g10', {
    listen: { d: [['Tourist', 'Excuse me, where is the pharmacy?'], ['Local', 'Go straight for two blocks. Then turn left at the corner.'], ['Tourist', 'Is it far?'], ['Local', 'No, it is five minutes on foot. It is between the bank and the bakery.'], ['Tourist', 'Thank you!'], ['Local', 'You are welcome. It is opposite the park.']],
      q: [mc('¿Cuántas cuadras hay que seguir recto?', ['One', 'Two', 'Five'], 1), mc('¿Dónde está la farmacia?', ['Between the bank and the bakery', 'Behind the park', 'Next to the school'], 0), mc('¿Está lejos?', ['Yes', 'No', 'Very far'], 1)] },
    quiz: [
      mc('The class is ___ Monday.', ['in', 'on', 'at'], 1),
      mc('The meeting is ___ 3 pm.', ['in', 'on', 'at'], 2),
      mc('We travel ___ July.', ['in', 'on', 'at'], 0),
      fill('Turn ___ at the corner. (derecha)', 'right'),
      mc('The bank is ___ the school and the park.', ['between', 'behind', 'opposite'], 0),
      order('Sigue recto dos cuadras.', ['Go straight for two blocks.', 'For two blocks go straight.']),
      mc('«Far» significa…', ['lejos', 'cerca', 'al lado'], 0),
      hear(['Turn left.', 'Turn right.', 'Turn light.'], 1, 'Se oía «right».')
    ]
  });

  EL.extend('v03', {
    listen: { d: [['Receptionist', 'Good evening. Do you have a reservation?'], ['Guest', 'Yes. My name is Rivera. A single room for three nights.'], ['Receptionist', 'Yes, I see it. Breakfast is included. Here is your key card.'], ['Guest', 'Thank you. What time is check-out?'], ['Receptionist', 'Check-out is at eleven. Your room is on the fourth floor.'], ['Guest', 'And what is the Wi-Fi password?'], ['Receptionist', 'It is on the card. Enjoy your stay.']],
      q: [mc('¿Cuántas noches se queda?', ['Two', 'Three', 'Four'], 1), mc('¿Qué está incluido?', ['Breakfast', 'Dinner', 'Taxi'], 0), mc('¿A qué hora es el check-out?', ['9:00', '10:00', '11:00'], 2)] },
    quiz: [
      mc('I have a ___ for two nights.', ['reservation', 'receipt', 'passport'], 0),
      mc('A ___ room is for one person.', ['single', 'double', 'free'], 0),
      fill('Check-___ is at eleven. (salida)', 'out'),
      mc('«Included» significa…', ['incluido', 'invitado', 'ocupado'], 0),
      fill('Can I have a ___ card, please? (tarjeta llave)', 'key'),
      order('¿A qué hora es el desayuno?', 'What time is breakfast?'),
      mc('Para reservar una habitación dices…', ['I would like to book a room.', 'I am booking you a room.', 'I book room yesterday.'], 0),
      hear(['night', 'light', 'right'], 0, 'Se oía «night».')
    ]
  });
})();
