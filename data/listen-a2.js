/* Escucha y prueba de dominio, nivel A2 (lecciones existentes). */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;

  EL.extend('g11', {
    listen: { d: [['Ana', 'Hi Leo! How was your weekend?'], ['Leo', 'It was great. On Saturday I went to Cuenca and visited my aunt.'], ['Ana', 'Cool! I stayed home. I had a cold.'], ['Leo', 'Oh no! On Sunday I bought some fruit and made soup for you.'], ['Ana', 'Thank you! I saw my doctor yesterday and I feel better now.']],
      q: [mc('¿A dónde fue Leo el sábado?', ['Cuenca', 'Quito', 'Loja'], 0), mc('¿Qué tuvo Ana?', ['A cold', 'A fever', 'A headache'], 0), mc('¿Qué preparó Leo?', ['Soup', 'Rice', 'A cake'], 0)] },
    quiz: [
      mc('Yesterday I ___ to the market.', ['go', 'went', 'goed'], 1),
      mc('She ___ a new phone last week.', ['buyed', 'bought', 'buy'], 1),
      fill('We ___ lunch at noon yesterday. (eat)', 'ate'),
      fill('They ___ a movie last night. (see)', 'saw'),
      mc('Two days ___ I visited my aunt.', ['ago', 'before', 'last'], 0),
      order('Hice sopa ayer.', ['I made soup yesterday.', 'Yesterday I made soup.']),
      mc('¿Cuál es correcta?', ['He taked a bus.', 'He took a bus.', 'He take a bus yesterday.'], 1),
      hear(['He went home.', 'He want home.', 'He wet home.'], 0, 'Se oía «went».')
    ]
  });

  EL.extend('g12', {
    listen: { d: [['Anna', 'Hi Leo! Did you finish the project?'], ['Leo', 'Not yet. I did not have time yesterday. I arrived home very late.'], ['Anna', 'Why? What happened?'], ['Leo', 'My bus broke down, so I did not sleep much.'], ['Anna', 'Oh no. Did you call the teacher?'], ['Leo', 'Yes, I did. She said I can send it tomorrow.']],
      q: [mc('¿Terminó Leo el proyecto?', ['Yes', 'No, not yet', 'He forgot it'], 1), mc('¿Por qué llegó tarde?', ['His bus broke down', 'He was sick', 'He forgot'], 0), mc('¿Cuándo puede enviarlo?', ['Today', 'Tomorrow', 'Next week'], 1)] },
    quiz: [
      mc('___ you call her yesterday?', ['Do', 'Did', 'Does'], 1),
      mc('I ___ not forget my keys.', ['did', 'do', 'was'], 0),
      fill('She did not ___ the film. (enjoy)', 'enjoy'),
      fill('___ they arrive on time?', 'Did'),
      mc('¿Cuál es correcta?', ['He did not went home.', 'He did not go home.', 'He not did go home.'], 1, 'Después de did / didn\'t el verbo va en forma base.'),
      order('¿Cuándo llegaste?', 'When did you arrive?'),
      mc('— Did you sleep well? — ___', ['Yes, I did.', 'Yes, I slept did.', 'Yes, I do.'], 0),
      hear(['What happened?', 'What happens?', 'What is happening?'], 0, 'Se oía «What happened?».')
    ]
  });

  EL.extend('g13', {
    listen: { d: [['Mia', 'What are your plans for next week?'], ['Sam', 'I am going to visit my cousin in Loja. We are going to hike.'], ['Mia', 'Nice! Will you take a lot of photos?'], ['Sam', 'Maybe. I promise I will send you some. And you?'], ['Mia', 'Tonight I am going to study, and tomorrow I will call the company about the job.'], ['Sam', 'Good luck! I am sure you will get it.']],
      q: [mc('¿A dónde va Sam?', ['Loja', 'Cuenca', 'Quito'], 0), mc('¿Qué promete Sam?', ['To send photos', 'To call Mia', 'To buy a gift'], 0), mc('¿Qué hará Mia esta noche?', ['Study', 'Hike', 'Travel'], 0)] },
    quiz: [
      mc('I ___ visit my aunt next week. (plan)', ['am going to', 'will to', 'go to'], 0),
      mc('I promise I ___ be late.', ["won't", 'am going', 'do not'], 0),
      fill('We are ___ to travel in July.', 'going'),
      fill('I ___ help you. (promesa: te ayudaré)', 'will'),
      mc('¿Cuál es correcta?', ['She will goes.', 'She will go.', 'She wills go.'], 1),
      order('Voy a estudiar esta noche.', ['I am going to study tonight.', 'Tonight I am going to study.']),
      mc('«Maybe» significa…', ['quizás', 'mañana', 'pronto'], 0),
      hear(['I will go.', "I won't go.", 'I want to go.'], 1, 'Se oía «won\'t» (no iré).')
    ]
  });

  EL.extend('t04', {
    listen: { d: [['Ana', 'I received a suspicious email from my bank.'], ['Sam', 'Did you click the link?'], ['Ana', 'No, I did not. It asked for my password.'], ['Sam', 'Good. That is phishing. Delete it and report it to security.'], ['Ana', 'Could it install malware?'], ['Sam', 'Yes. Malware can infect your computer and steal data.']],
      q: [mc('¿Qué recibió Ana?', ['A suspicious email', 'A phone call', 'A virus'], 0), mc('¿Hizo clic en el enlace?', ['No', 'Yes', 'Not sure'], 0), mc('¿Qué puede hacer el malware?', ['Steal data', 'Make the internet faster', 'Print files'], 0)] },
    quiz: [
      mc('A fake email that asks for your password is ___ .', ['phishing', 'a firewall', 'a backup'], 0),
      mc('A ___ locks your files and asks for money.', ['ransomware', 'printer', 'router'], 0),
      fill('The computer is ___ with malware. (infectada)', 'infected'),
      fill('The ___ stole customer data. (atacante)', 'attacker'),
      mc('«Vulnerability» significa…', ['vulnerabilidad', 'virus', 'contraseña'], 0),
      order('Este correo es sospechoso.', 'This email is suspicious.'),
      mc('A ___ is when private data is exposed.', ['data breach', 'download', 'upload'], 0),
      hear(['threat', 'treat', 'tread'], 0, 'Se oía «threat».')
    ]
  });

  EL.extend('g14', {
    listen: { d: [['Seller', 'This laptop is cheaper than that one, but it is slower.'], ['Buyer', 'How much is the faster one?'], ['Seller', 'It is more expensive. It costs nine hundred dollars.'], ['Buyer', 'Hmm. Is it better for programming?'], ['Seller', 'Yes, it is the best laptop in the store for that.'], ['Buyer', 'OK, I will think about it.']],
      q: [mc('¿Cuánto cuesta la laptop más rápida?', ['$500', '$900', '$1,900'], 1), mc('¿Cuál es la más barata?', ['The slower one', 'The faster one', 'Both cost the same'], 0), mc('¿Para qué es mejor la más cara?', ['Programming', 'Games', 'Photos'], 0)] },
    quiz: [
      mc('My phone is ___ than yours.', ['cheaper', 'cheap', 'more cheap'], 0),
      mc('This is the ___ hotel in town.', ['best', 'better', 'good'], 0),
      mc('A laptop is ___ than a phone. (más caro)', ['more expensive', 'expensiver', 'most expensive'], 0),
      fill('She is ___ than me. (tall)', 'taller'),
      fill('This is the ___ phone in the store. (cheap)', 'cheapest'),
      order('Mi laptop es más rápida que tu laptop.', 'My laptop is faster than your laptop.'),
      mc('«Worse» significa…', ['peor', 'mejor', 'más pequeño'], 0),
      hear(['cheaper', 'cheapest', 'cheap'], 1, 'Se oía «cheapest» (el más barato).')
    ]
  });

  EL.extend('v04', {
    listen: { d: [['Waiter', 'Good evening. Are you ready to order?'], ['Customer', 'Yes. What do you recommend?'], ['Waiter', 'The grilled fish is very good. It is not spicy.'], ['Customer', 'Great. I am allergic to nuts. Does it have nuts?'], ['Waiter', 'No, it does not. Would you like a drink?'], ['Customer', 'Water, please. And later I would like dessert.'], ['Waiter', 'Of course.']],
      q: [mc('¿Qué recomienda el mesero?', ['Grilled fish', 'Chicken', 'Pasta'], 0), mc('¿A qué es alérgico el cliente?', ['Nuts', 'Fish', 'Milk'], 0), mc('¿Qué quiere beber?', ['Water', 'Juice', 'Coffee'], 0)] },
    quiz: [
      mc('Can I see the ___, please?', ['menu', 'tip', 'bill'], 0),
      mc('I am ___ to peanuts.', ['allergic', 'vegetarian', 'spicy'], 0),
      fill('Can we have the ___ , please? (la cuenta)', 'bill'),
      fill('I do not eat meat. I am ___ .', 'vegetarian'),
      mc('This soup is very ___ . I need water. (picante)', ['spicy', 'sweet', 'cold'], 0),
      order('Quisiera un café para llevar.', 'I would like a coffee to go.'),
      mc('«Tip» en un restaurante es…', ['la propina', 'la cuenta', 'el postre'], 0),
      hear(['order', 'offer', 'other'], 0, 'Se oía «order».')
    ]
  });

  EL.extend('t05', {
    listen: { d: [['Boss', 'What can we do to protect the company?'], ['Tech', 'First, enable two-factor authentication for everyone.'], ['Boss', 'Good. What else?'], ['Tech', 'We need a strong password policy and a firewall. Also, we must install the latest patch on all computers.'], ['Boss', 'And the data?'], ['Tech', 'We will make a backup every week and use encryption.']],
      q: [mc('¿Qué se activa primero?', ['Two-factor authentication', 'Antivirus', 'A new router'], 0), mc('¿Cada cuánto se hace backup?', ['Every week', 'Every day', 'Every month'], 0), mc('¿Qué se instala en todas las computadoras?', ['The latest patch', 'A game', 'A new screen'], 0)] },
    quiz: [
      mc('A ___ blocks unwanted network traffic.', ['firewall', 'backup', 'patch'], 0),
      mc('Use ___ so only you can read the file.', ['encryption', 'download', 'a ticket'], 0),
      fill('Please ___ two-factor authentication. (activa)', 'enable'),
      fill('Make a ___ of your files every week.', 'backup'),
      mc('A strong password has…', ['letters, numbers and symbols', 'only your name', 'only numbers'], 0),
      order('Instala el parche hoy.', ['Install the patch today.', 'Today install the patch.']),
      mc('«Protect» significa…', ['proteger', 'probar', 'publicar'], 0),
      hear(['patch', 'match', 'path'], 0, 'Se oía «patch».')
    ]
  });

  EL.extend('g15', {
    listen: { d: [['Waiter', 'Would you like some water?'], ['Ana', 'Yes, please. And do you have any soup?'], ['Waiter', 'Yes, we have chicken soup and vegetable soup.'], ['Ana', 'I will have the chicken soup with a little rice, please.'], ['Waiter', 'Anything to drink? We have a lot of fruit juice.'], ['Ana', 'Just water. Thank you!']],
      q: [mc('¿Qué sopa pide?', ['Chicken', 'Vegetable', 'Fish'], 0), mc('¿Cuánto arroz quiere?', ['A lot', 'A little', 'None'], 1), mc('¿Qué bebe?', ['Water', 'Juice', 'Milk'], 0)] },
    quiz: [
      mc('I do not have ___ milk.', ['some', 'any', 'a'], 1),
      mc('How ___ eggs do you need?', ['much', 'many', 'a little'], 1),
      mc('There is ___ rice in the pot. (un poco)', ['a few', 'a little', 'many'], 1),
      fill('Do you want ___ bread? (ofrecimiento)', 'some'),
      mc('«Vegetables» son…', ['verduras', 'frutas', 'carnes'], 0),
      order('Tengo un poco de agua.', 'I have a little water.'),
      mc('We have a ___ of fruit.', ['lot', 'much', 'many'], 0),
      hear(['rice', 'rise', 'race'], 0, 'Se oía «rice».')
    ]
  });

  EL.extend('g16', {
    listen: { d: [['Guard', "Sir, you mustn't smoke here. It is a rule."], ['Tom', 'Sorry, I did not know. Where can I smoke?'], ['Guard', 'Outside. And you have to wear your badge inside the building.'], ['Tom', 'OK. I should read the rules first.'], ['Guard', 'Yes, you should. They are on the wall.']],
      q: [mc('¿Qué no puede hacer Tom aquí?', ['Smoke', 'Eat', 'Talk'], 0), mc('¿Qué tiene que usar dentro?', ['A badge', 'A helmet', 'A coat'], 0), mc('¿Dónde están las reglas?', ['On the wall', 'On the door', 'Online'], 0)] },
    quiz: [
      mc('You ___ park here. It is prohibited.', ["mustn't", "don't have to", 'should'], 0),
      mc('I ___ finish my homework tonight. It is due tomorrow.', ['have to', "mustn't", 'am'], 0),
      mc('You are very tired. You ___ sleep more.', ['should', "shouldn't", 'must be'], 0),
      fill('She ___ to wear a uniform. (tiene que)', 'has'),
      fill('You ___ eat so much sugar. (es mala idea)', ["shouldn't", 'should not']),
      order('Debes usar tu credencial.', 'You must wear your badge.'),
      mc('«Advice» significa…', ['consejo', 'regla', 'tarea'], 0),
      hear(['You must stop.', "You mustn't stop.", 'You must start.'], 1, 'Se oía «mustn\'t».')
    ]
  });

  EL.extend('v05', {
    listen: { d: [['Tourist', 'Excuse me, which bus goes downtown?'], ['Driver', 'Number twelve. But this is not the right stop.'], ['Tourist', 'Oh, I am lost. Where is the right stop?'], ['Driver', 'Walk to the station. Then take bus twelve there.'], ['Tourist', 'How long does it take?'], ['Driver', 'About twenty minutes. The fare is one dollar.']],
      q: [mc('¿Qué bus va al centro?', ['Number 2', 'Number 12', 'Number 20'], 1), mc('¿Cuánto tarda?', ['10 minutes', '20 minutes', '30 minutes'], 1), mc('¿Cuánto cuesta?', ['One dollar', 'Two dollars', 'It is free'], 0)] },
    quiz: [
      mc('Where is the bus ___ ?', ['stop', 'tip', 'map'], 0),
      mc('How much is the ___ ? (tarifa)', ['fare', 'map', 'lost'], 0),
      fill('Excuse me, I am ___ . (perdido)', 'lost'),
      fill('How ___ does it take? (cuánto tiempo)', 'long'),
      mc('«Downtown» significa…', ['el centro', 'las afueras', 'la estación'], 0),
      order('¿Dónde está la estación?', 'Where is the station?'),
      mc('You change buses. It is a ___ .', ['transfer', 'fare', 'stop'], 0),
      hear(['bus', 'boss', 'bass'], 0, 'Se oía «bus».')
    ]
  });

  EL.extend('t06', {
    listen: { d: [['Guide', 'Step one: open the terminal. Step two: type the command to install the program.'], ['Learner', 'What if I get an error?'], ['Guide', 'Make sure you have the latest version. Then run the command again.'], ['Learner', 'Is this step required?'], ['Guide', 'No, it is optional. The default setting is fine.']],
      q: [mc('¿Qué se hace en el paso uno?', ['Open the terminal', 'Install the program', 'Copy a file'], 0), mc('¿Qué hacer si hay un error?', ['Check the version and run it again', 'Buy a new computer', 'Ignore it'], 0), mc('¿El último paso es obligatorio?', ['No, it is optional', 'Yes, it is required', 'Only on Mondays'], 0)] },
    quiz: [
      mc('Open the terminal and ___ the command.', ['type', 'sing', 'wear'], 0),
      mc('Click the button, then ___ the file.', ['select', 'smoke', 'sleep'], 0),
      fill('Make ___ you have the latest version.', 'sure'),
      fill('This step is not required. It is ___ . (opcional)', 'optional'),
      mc('«Default» en un programa es…', ['valor predeterminado', 'error', 'descarga'], 0),
      order('Copia el archivo.', 'Copy the file.'),
      mc('The ___ number tells you which release you have.', ['version', 'default', 'cable'], 0),
      hear(['run', 'ran', 'rain'], 0, 'Se oía «run».')
    ]
  });

  EL.extend('g17', {
    listen: { d: [['Ana', 'Have you ever been to Peru?'], ['Leo', 'Yes, I have. I have been there twice. And you?'], ['Ana', 'No, I have never traveled outside Ecuador.'], ['Leo', 'Really? Have you seen the Amazon?'], ['Ana', 'Yes, I have already seen it. I went last year.'], ['Leo', 'Oh nice! I have not eaten ceviche yet. Is it good?'], ['Ana', 'It is delicious. You must try it.']],
      q: [mc('¿Cuántas veces estuvo Leo en Perú?', ['Once', 'Twice', 'Never'], 1), mc('¿Ana ha viajado fuera de Ecuador?', ['No', 'Yes', 'Once'], 0), mc('¿Qué no ha comido todavía Leo?', ['Ceviche', 'Rice', 'Soup'], 0)] },
    quiz: [
      mc('I have ___ been to Canada. (nunca)', ['ever', 'never', 'yet'], 1),
      mc('She has ___ finished. (ya)', ['already', 'yet', 'ever'], 0),
      mc('Have you ___ the movie?', ['see', 'saw', 'seen'], 2),
      fill('We have ___ arrived. (acabamos de)', 'just'),
      fill('They have not called ___ . (todavía)', 'yet'),
      order('Nunca he comido sushi.', 'I have never eaten sushi.'),
      mc('He has ___ a long email.', ['wrote', 'written', 'write'], 1),
      hear(['He has gone.', 'He has done.', 'He has won.'], 1, 'Se oía «done».')
    ]
  });

  EL.extend('v06', {
    listen: { d: [['Shopper', 'Hi, how much are these shoes?'], ['Seller', 'They are sixty dollars, but today there is a discount. They are fifty.'], ['Shopper', 'Can I try them on? I wear size forty-two.'], ['Seller', 'Of course. Here you are.'], ['Shopper', 'They fit well. Do you accept credit cards?'], ['Seller', 'Yes, or cash. Do you want the receipt?'], ['Shopper', 'Yes, please.']],
      q: [mc('¿Cuánto cuestan con descuento?', ['$50', '$60', '$40'], 0), mc('¿Qué talla usa?', ['40', '41', '42'], 2), mc('¿Qué pregunta el comprador?', ['If they accept credit cards', 'If there is a refund', 'If there is a bag'], 0)] },
    quiz: [
      mc('How ___ is this shirt?', ['much', 'many', 'long'], 0),
      mc('Can I pay by ___ ?', ['credit card', 'receipt', 'size'], 0),
      fill('Can I ___ on these jeans? (probar)', 'try'),
      fill('Keep the ___ if you want a refund. (recibo)', 'receipt'),
      mc('«Discount» significa…', ['descuento', 'precio', 'cambio'], 0),
      order('¿Tiene esto en otra talla?', 'Do you have this in another size?'),
      mc('The shirt is too small. I want a ___ .', ['refund', 'tip', 'map'], 0),
      hear(['sale', 'sell', 'sail'], 0, 'Se oía «sale».')
    ]
  });

  EL.extend('t07', {
    listen: { d: [['Agent', 'IT support. How can I help you?'], ['Client', 'Hello. I have an issue with my email. It started this morning.'], ['Agent', 'What did you try?'], ['Client', 'I restarted the computer, but the problem is still there.'], ['Agent', 'Could you send a screenshot? I will open a ticket.'], ['Client', 'Yes. It is urgent, I have a meeting today.'], ['Agent', 'I will reply within one hour.']],
      q: [mc('¿Qué problema tiene?', ['Email', 'Wi-Fi', 'Printer'], 0), mc('¿Qué hizo ya?', ['Restarted the computer', 'Changed the password', 'Called the boss'], 0), mc('¿Cuánto tardará la respuesta?', ['One hour', 'One day', 'One week'], 0)] },
    quiz: [
      mc('I have an ___ with my account.', ['issue', 'answer', 'arrival'], 0),
      mc('Please open a ___ . (un caso de soporte)', ['ticket', 'menu', 'fare'], 0),
      fill('The problem ___ yesterday. (empezó)', 'started'),
      fill('Please send a ___ of the error. (captura)', 'screenshot'),
      mc('It is ___ ; I need help now.', ['urgent', 'optional', 'default'], 0),
      order('Todavía no funciona.', 'It still does not work.'),
      mc('A ___ is a temporary fix.', ['workaround', 'ticket', 'reply'], 0),
      hear(['issue', 'tissue', 'ashes'], 0, 'Se oía «issue».')
    ]
  });

  EL.extend('g18', {
    listen: { d: [['Ana', 'How was your day?'], ['Leo', 'First, I went to class. Then I had lunch, and finally I studied at the library.'], ['Ana', 'Did you finish your homework?'], ['Leo', 'I wanted to, but I was tired, so I went home early.'], ['Ana', 'However, tomorrow you have an exam. Do you want to study together or study alone?'], ['Leo', 'Together, please. I also need help with the grammar.']],
      q: [mc('¿Qué hizo primero Leo?', ['Went to class', 'Had lunch', 'Studied'], 0), mc('¿Por qué volvió temprano a casa?', ['He was tired', 'He was sick', 'He had class'], 0), mc('¿Con qué necesita ayuda?', ['Grammar', 'Vocabulary', 'Listening'], 0)] },
    quiz: [
      mc('I like tea ___ I do not like coffee.', ['but', 'so', 'or'], 0),
      mc('It was raining, ___ I took an umbrella.', ['but', 'so', 'or'], 1),
      mc('Do you want tea ___ coffee?', ['and', 'or', 'but'], 1),
      fill('___ , I wake up. Then I have breakfast. (primero)', 'First'),
      fill('I studied a lot. ___ , I passed the exam. (por fin)', 'Finally'),
      order('Primero, enciende la computadora.', ['First, turn on the computer.', 'Turn on the computer first.']),
      mc('«However» significa…', ['sin embargo', 'además', 'entonces'], 0),
      hear(['but', 'bat', 'bought'], 0, 'Se oía «but».')
    ]
  });

  EL.extend('v07', {
    listen: { d: [['Operator', 'Emergency services. What is your emergency?'], ['Caller', 'My friend is hurt. He fell from his bike.'], ['Operator', 'Is he awake? Where are you?'], ['Caller', 'Yes, he is awake, but his leg hurts. We are on Main Street, near the pharmacy.'], ['Operator', 'An ambulance is on the way. Please stay with him.']],
      q: [mc('¿Qué le pasó al amigo?', ['He fell from his bike', 'He lost his wallet', 'He has a fever'], 0), mc('¿Dónde están?', ['Main Street, near the pharmacy', 'At the hospital', 'At the airport'], 0), mc('¿Qué viene en camino?', ['An ambulance', 'A taxi', 'The police'], 0)] },
    quiz: [
      mc('Call the ___ ! Someone stole my bag.', ['police', 'pharmacy', 'menu'], 0),
      mc('I have a ___ . I need medicine.', ['headache', 'wallet', 'sale'], 0),
      fill('My wallet was ___ . (robada)', 'stolen'),
      fill('I need to see a ___ . (doctor)', 'doctor'),
      mc('Para pedir ayuda urgente dices…', ['Help! It is an emergency.', 'I have a emergency.', 'Please wait, I think.'], 0),
      order('Me duele la pierna.', 'My leg hurts.'),
      mc('«Fever» significa…', ['fiebre', 'dolor', 'alergia'], 0),
      hear(['ambulance', 'ambience', 'ambition'], 0, 'Se oía «ambulance».')
    ]
  });
})();
