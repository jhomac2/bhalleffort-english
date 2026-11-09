/* Inglés para viajar (v01 a v08). */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order;
  EL.lessons.push(

    {
      id: 'v01', track: 'travel', level: 'A1', title: 'Aeropuerto y check-in', en: 'Airport and check-in',
      explain:
        '<p>En el aeropuerto escucharás frases muy repetidas. Aprende a <b>reconocerlas</b> y a <b>responderlas</b>.</p>' +
        '<p><b>Lo que te dirán:</b></p>' +
        '<ul><li><i lang="en">Can I see your passport, please?</i></li>' +
        '<li><i lang="en">Do you have any luggage to check?</i> (¿tiene equipaje para despachar?)</li>' +
        '<li><i lang="en">Window or aisle?</i> (¿ventana o pasillo?)</li>' +
        '<li><i lang="en">Your gate is B12. Boarding starts at 10:30.</i></li></ul>' +
        '<p><b>Lo que tú puedes decir:</b> <i lang="en">I\'d like a window seat, please. / I have one suitcase. / Where is gate B12? / Is the flight on time?</i></p>',
      vocab: [
        ['passport', 'pasaporte', 'Here is my passport.'],
        ['boarding pass', 'pase de abordar', 'This is my boarding pass.'],
        ['luggage', 'equipaje', 'I have one piece of luggage.'],
        ['suitcase', 'maleta', 'My suitcase is heavy.'],
        ['carry-on', 'equipaje de mano', 'This is my carry-on bag.'],
        ['gate', 'puerta de embarque', 'Where is gate B12?'],
        ['flight', 'vuelo', 'My flight is at ten.'],
        ['delayed', 'retrasado', 'The flight is delayed.'],
        ['window seat', 'asiento de ventana', "I'd like a window seat."],
        ['aisle seat', 'asiento de pasillo', 'Do you want an aisle seat?']
      ],
      ex: [
        mc('"Where is gate B12?" significa:', ['¿Dónde está la puerta B12?', '¿A qué hora es el vuelo?', '¿Cuánto cuesta?'], 0),
        mc('El agente pregunta: "Window or aisle?" Respondes:', ['Window, please.', 'Yes, please.', 'Thank you, bye.'], 0),
        mc('Un vuelo que sale más tarde de lo planeado está:', ['delayed', 'boarding', 'carry-on'], 0),
        fill('Can I see your ___, please? (documento de viaje)', 'passport'),
        order('Tengo una maleta.', 'I have one suitcase.'),
        order('Quisiera un asiento de ventana, por favor.', ["I'd like a window seat, please.", "Please, I'd like a window seat."])
      ],
      read: {
        t: 'Agent: Good morning. Can I see your passport, please? Traveler: Here you are. Agent: Do you have any luggage to check? Traveler: Yes, one suitcase. Agent: Window or aisle? Traveler: Window, please. Agent: Here is your boarding pass. Your gate is B12, and boarding starts at 10:30.',
        tr: 'Agente: Buenos días. ¿Puedo ver su pasaporte, por favor? Viajero: Aquí tiene. Agente: ¿Tiene equipaje para despachar? Viajero: Sí, una maleta. Agente: ¿Ventana o pasillo? Viajero: Ventana, por favor. Agente: Aquí está su pase de abordar. Su puerta es la B12 y el embarque empieza a las 10:30.',
        q: [
          mc('How many suitcases does the traveler check?', ['One', 'Two', 'None'], 0),
          mc('What time does boarding start?', ['10:30', '12:30', '9:30'], 0)
        ]
      },
      write: { p: 'Escribe 3 frases que dirías tú en un check-in.', m: 'Here is my passport. I have one suitcase. I would like a window seat, please.' },
      q: 'airport check in English conversation'
    },

    {
      id: 'v02', track: 'travel', level: 'A1', title: 'Migración y aduana', en: 'Immigration and customs',
      explain:
        '<p>El oficial de migración hace preguntas cortas. Responde con frases simples, con calma y mirándolo a los ojos.</p>' +
        '<ul><li><i lang="en">What is the purpose of your visit?</i> → <i lang="en">Tourism. / Vacation. / Study. / Business.</i></li>' +
        '<li><i lang="en">How long are you going to stay?</i> → <i lang="en">For two weeks.</i></li>' +
        '<li><i lang="en">Where are you staying?</i> → <i lang="en">At the Central Hotel.</i></li>' +
        '<li><i lang="en">Do you have a return ticket?</i> → <i lang="en">Yes, here it is.</i></li>' +
        '<li>En aduana: <i lang="en">Do you have anything to declare?</i> → <i lang="en">No, nothing to declare.</i></li></ul>',
      vocab: [
        ['purpose', 'propósito, motivo', 'What is the purpose of your visit?'],
        ['visit', 'visita, visitar', 'This is my first visit.'],
        ['tourism', 'turismo', 'I am here for tourism.'],
        ['business', 'negocios', 'I am here for business.'],
        ['stay', 'quedarse, estadía', 'I will stay for two weeks.'],
        ['return ticket', 'boleto de regreso', 'I have a return ticket.'],
        ['declare', 'declarar', 'Nothing to declare.'],
        ['customs', 'aduana', 'Customs is over there.'],
        ['visa', 'visa', 'I do not need a visa.'],
        ['address', 'dirección', 'This is the hotel address.']
      ],
      ex: [
        mc('"What is the purpose of your visit?"', ['Tourism.', 'Two weeks.', 'At a hotel.'], 0),
        mc('"How long are you going to stay?"', ['For two weeks.', 'By plane.', 'In Quito.'], 0),
        mc('"Do you have anything to declare?"', ['No, nothing to declare.', 'Yes, I am a student.', 'At the gate.'], 0),
        fill('Do you have a ___ ticket? (de regreso)', 'return'),
        order('Estoy aquí por turismo.', 'I am here for tourism.'),
        order('Me quedaré dos semanas.', ['I will stay for two weeks.', 'For two weeks I will stay.'])
      ],
      read: {
        t: 'Officer: Good afternoon. What is the purpose of your visit? Traveler: Tourism. Officer: How long are you going to stay? Traveler: For ten days. Officer: Where are you staying? Traveler: At the Central Hotel in Miami. Officer: Do you have a return ticket? Traveler: Yes, here it is. Officer: Welcome. Enjoy your stay.',
        tr: 'Oficial: Buenas tardes. ¿Cuál es el motivo de su visita? Viajero: Turismo. Oficial: ¿Cuánto tiempo se va a quedar? Viajero: Diez días. Oficial: ¿Dónde se hospedará? Viajero: En el Hotel Central en Miami. Oficial: ¿Tiene boleto de regreso? Viajero: Sí, aquí está. Oficial: Bienvenido. Disfrute su estadía.',
        q: [
          mc('How long will the traveler stay?', ['Ten days', 'Two weeks', 'One month'], 0),
          mc('Where is the traveler staying?', ['At the Central Hotel', 'At the airport', 'At a friend\'s house'], 0)
        ]
      },
      write: { p: 'Responde por escrito: motivo del viaje, cuánto tiempo y dónde te quedas.', m: 'I am here for tourism. I will stay for ten days. I am staying at the Central Hotel.' },
      q: 'immigration questions English airport'
    },

    {
      id: 'v03', track: 'travel', level: 'A1', title: 'Hotel: reservar y registrarte', en: 'Hotel',
      explain:
        '<p><b>Al llegar:</b> <i lang="en">I have a reservation under the name Garcia.</i> / <i lang="en">I would like to book a room for two nights.</i></p>' +
        '<p><b>Preguntar:</b> <i lang="en">How much is it per night? Is breakfast included? What time is check-out? What is the Wi-Fi password?</i></p>' +
        '<p><b>Pedir algo:</b> <i lang="en">Could I have an extra towel, please?</i></p>' +
        '<p><b>Avisar un problema:</b> <i lang="en">The air conditioning doesn\'t work.</i></p>',
      vocab: [
        ['reservation', 'reserva', 'I have a reservation.'],
        ['book', 'reservar', 'I would like to book a room.'],
        ['night', 'noche', 'How much is it per night?'],
        ['single room', 'habitación individual', 'A single room, please.'],
        ['double room', 'habitación doble', 'Do you have a double room?'],
        ['check-in', 'registro de entrada', 'Check-in is at three.'],
        ['check-out', 'salida del hotel', 'What time is check-out?'],
        ['included', 'incluido', 'Is breakfast included?'],
        ['towel', 'toalla', 'Could I have a towel?'],
        ['key card', 'tarjeta de la habitación', 'Here is your key card.']
      ],
      ex: [
        mc('Llegas al hotel y dices:', ['I have a reservation.', 'I have a flight.', 'I am a tourist.'], 0),
        mc('"Is breakfast included?" significa:', ['¿El desayuno está incluido?', '¿A qué hora es el desayuno?', '¿Dónde está el desayuno?'], 0),
        fill('What time is check-___? (salida)', 'out'),
        mc('Necesitas más toallas. Dices:', ['Could I have an extra towel, please?', 'Give me towels.', 'Towels are bad.'], 0),
        order('¿Cuál es la contraseña del Wi-Fi?', 'What is the Wi-Fi password?'),
        order('Quisiera reservar una habitación para dos noches.', 'I would like to book a room for two nights.')
      ],
      read: {
        t: 'Receptionist: Welcome to Hotel Sol. How can I help you? Guest: Hello. I have a reservation under the name Garcia. Receptionist: Yes, a double room for two nights. Breakfast is included, from seven to ten. Check-out is at noon. Guest: Thank you. What is the Wi-Fi password? Receptionist: It is on your key card.',
        tr: 'Recepcionista: Bienvenido al Hotel Sol. ¿En qué puedo ayudarle? Huésped: Hola. Tengo una reserva a nombre de García. Recepcionista: Sí, una habitación doble por dos noches. El desayuno está incluido, de siete a diez. La salida es al mediodía. Huésped: Gracias. ¿Cuál es la contraseña del Wi-Fi? Recepcionista: Está en su tarjeta.',
        q: [
          mc('How many nights is the reservation?', ['Two', 'Three', 'One'], 0),
          mc('Where is the Wi-Fi password?', ['On the key card', 'At the bar', 'In the room phone'], 0)
        ]
      },
      write: { p: 'Escribe 3 frases para el recepcionista: tu reserva, una pregunta y un pedido.', m: 'I have a reservation under the name Garcia. What time is breakfast? Could I have an extra towel, please?' },
      q: 'hotel check in English conversation'
    },

    {
      id: 'v04', track: 'travel', level: 'A2', title: 'Restaurante: pedir y pagar', en: 'Restaurant',
      explain:
        '<p><b>Pedir:</b> <i lang="en">Can I have the menu, please? / I\'d like the chicken with rice. / I\'ll have the soup.</i></p>' +
        '<p><b>Preguntar:</b> <i lang="en">What do you recommend? Is it spicy? Does it have nuts?</i></p>' +
        '<p><b>Avisar de una alergia</b> (importante al viajar): <i lang="en">I\'m allergic to peanuts.</i></p>' +
        '<p><b>Pagar:</b> <i lang="en">Can we have the bill, please?</i> (en EE. UU. también <i lang="en">check</i>) / <i lang="en">Can I pay by card?</i> / <i lang="en">Is the tip included?</i></p>',
      vocab: [
        ['menu', 'carta, menú', 'Can I have the menu?'],
        ['order', 'pedir, pedido', 'Are you ready to order?'],
        ['recommend', 'recomendar', 'What do you recommend?'],
        ['spicy', 'picante', 'Is it spicy?'],
        ['allergic', 'alérgico', 'I am allergic to peanuts.'],
        ['bill', 'cuenta (a pagar)', 'Can we have the bill, please?'],
        ['tip', 'propina', 'Is the tip included?'],
        ['drink', 'bebida, beber', 'What would you like to drink?'],
        ['dessert', 'postre', 'We would like dessert.'],
        ['vegetarian', 'vegetariano', 'Do you have vegetarian dishes?'],
        ['to go', 'para llevar', 'Can I get this to go?']
      ],
      ex: [
        mc('"Are you ready to order?"', ["Yes, I'll have the soup.", 'Yes, I am ready for bed.', 'No, I am a student.'], 0),
        mc('Quieres saber si un plato tiene picante. Preguntas:', ['Is it spicy?', 'Is it sweet?', 'Is it open?'], 0),
        mc('Para pedir la cuenta:', ['Can we have the bill, please?', 'Can we have the menu, please?', 'Can we have a table?'], 0),
        fill('I am ___ to peanuts. (alérgico)', 'allergic'),
        order('¿Qué recomienda?', 'What do you recommend?'),
        order('Quisiera el pollo con arroz, por favor.', ["I'd like the chicken with rice, please.", "Please, I'd like the chicken with rice."])
      ],
      read: {
        t: 'Waiter: Good evening. Are you ready to order? Customer: Yes. What do you recommend? Waiter: The grilled fish is very good. Customer: Is it spicy? Waiter: No, it isn\'t. Customer: Great. I\'ll have the fish and a glass of water. Later: Customer: Can I have the bill, please? Waiter: Of course. Customer: Is the tip included? Waiter: No, it isn\'t.',
        tr: 'Mesero: Buenas noches. ¿Están listos para pedir? Cliente: Sí. ¿Qué recomienda? Mesero: El pescado a la parrilla es muy bueno. Cliente: ¿Es picante? Mesero: No. Cliente: Perfecto. Quiero el pescado y un vaso de agua. Después: Cliente: ¿Me trae la cuenta, por favor? Mesero: Claro. Cliente: ¿La propina está incluida? Mesero: No.',
        q: [
          mc('What does the customer order?', ['Fish and water', 'Soup and juice', 'Chicken and rice'], 0),
          mc('Is the tip included?', ['Yes', 'No', 'We do not know'], 1)
        ]
      },
      write: { p: 'Escribe lo que dirías en un restaurante: pedir un plato, preguntar si es picante y pedir la cuenta.', m: 'I would like the chicken, please. Is it spicy? Can I have the bill, please?' },
      q: 'restaurant English conversation ordering food'
    },

    {
      id: 'v05', track: 'travel', level: 'A2', title: 'Transporte: taxi, bus, metro y cómo llegar', en: 'Transport',
      explain:
        '<p><b>Taxi o app:</b> <i lang="en">To the airport, please. / How much is it to downtown? / Please stop here.</i></p>' +
        '<p><b>Transporte público:</b> <i lang="en">Which bus goes downtown? / Does this train stop at Central Station? / One ticket to Central Station, please. / Do I need to transfer?</i></p>' +
        '<p><b>Si estás perdido:</b> <i lang="en">Excuse me, I\'m lost. Could you show me on the map? How far is it? How long does it take?</i> (¿cuánto tarda?)</p>',
      vocab: [
        ['taxi', 'taxi', 'I need a taxi, please.'],
        ['ticket', 'boleto, pasaje', 'One ticket, please.'],
        ['downtown', 'centro de la ciudad', 'Which bus goes downtown?'],
        ['stop', 'parada, detenerse', 'Please stop here.'],
        ['station', 'estación', 'Does this train stop at Central Station?'],
        ['next', 'siguiente, próximo', 'What time is the next bus?'],
        ['lost', 'perdido', 'Excuse me, I am lost.'],
        ['map', 'mapa', 'Could you show me on the map?'],
        ['how long', 'cuánto tiempo', 'How long does it take?'],
        ['transfer', 'transbordo, hacer transbordo', 'Do I need to transfer?'],
        ['fare', 'tarifa, pasaje', 'How much is the fare?']
      ],
      ex: [
        mc('Para pedir al taxista que se detenga:', ['Please stop here.', 'Please go home.', 'Please wait never.'], 0),
        mc('"How long does it take?" significa:', ['¿Cuánto tiempo tarda?', '¿Cuánto cuesta?', '¿Dónde queda?'], 0),
        mc('Estás perdido. Dices:', ['Excuse me, I am lost. Could you help me?', 'Excuse me, you are lost.', 'Excuse me, it is lost.'], 0),
        fill('One ___ to Central Station, please.', 'ticket'),
        order('¿A qué hora pasa el próximo bus?', 'What time is the next bus?'),
        order('¿Puede mostrarme en el mapa?', 'Could you show me on the map?')
      ],
      read: {
        t: 'Tourist: Excuse me, which bus goes downtown? Driver: Number 12. Tourist: How much is the fare? Driver: Two dollars. Tourist: How long does it take? Driver: About twenty minutes. Tourist: Do I need to transfer? Driver: No, it is a direct bus. Tourist: Thank you!',
        tr: 'Turista: Disculpe, ¿qué bus va al centro? Conductor: El número 12. Turista: ¿Cuánto cuesta el pasaje? Conductor: Dos dólares. Turista: ¿Cuánto tarda? Conductor: Unos veinte minutos. Turista: ¿Necesito hacer transbordo? Conductor: No, es un bus directo. Turista: ¡Gracias!',
        q: [
          mc('How much is the fare?', ['One dollar', 'Two dollars', 'Twenty dollars'], 1),
          mc('Does the tourist need to transfer?', ['Yes', 'No', 'We do not know'], 1)
        ]
      },
      write: { p: 'Escribe 3 preguntas que harías para llegar al centro en transporte público.', m: 'Which bus goes downtown? How much is the fare? How long does it take?' },
      q: 'asking for directions public transport English'
    },

    {
      id: 'v06', track: 'travel', level: 'A2', title: 'Compras y dinero', en: 'Shopping and money',
      explain:
        '<p><b>Precios:</b> <i lang="en">How much is this?</i> (uno) / <i lang="en">How much are these shoes?</i> (varios). Respuesta: <i lang="en">It\'s twenty dollars. / They are thirty dollars.</i></p>' +
        '<p><b>En la tienda:</b> <i lang="en">I\'m just looking, thanks. / Do you have this in a larger size? / Can I try it on? / I\'ll take it.</i></p>' +
        '<p><b>Pagar:</b> <i lang="en">Do you accept credit cards? / Can I get a discount? / Can I have a receipt?</i></p>' +
        '<p><b>Tallas:</b> small, medium, large.</p>',
      vocab: [
        ['price', 'precio', 'What is the price?'],
        ['cost', 'costar', 'How much does it cost?'],
        ['discount', 'descuento', 'Is there a discount?'],
        ['cash', 'efectivo', 'Do you accept cash?'],
        ['credit card', 'tarjeta de crédito', 'Can I pay by credit card?'],
        ['receipt', 'recibo, comprobante', 'Can I have a receipt?'],
        ['size', 'talla, tamaño', 'Do you have a larger size?'],
        ['try on', 'probarse', 'Can I try it on?'],
        ['change', 'cambio, vuelto', 'Keep the change.'],
        ['refund', 'reembolso', 'I would like a refund.'],
        ['sale', 'oferta, rebaja', 'Everything is on sale.']
      ],
      ex: [
        mc('How ___ is this jacket?', ['much', 'many', 'long'], 0, 'Para precios: <i lang="en">How much…?</i>'),
        mc('How ___ are these shoes? (precio)', ['much', 'many', 'old'], 0),
        mc('Quieres ponerte la ropa antes de comprar. Preguntas:', ['Can I try it on?', 'Can I pay it on?', 'Can I cook it?'], 0),
        fill('Can I have a ___, please? (comprobante de pago)', 'receipt'),
        order('¿Aceptan tarjetas de crédito?', 'Do you accept credit cards?'),
        order('¿Tiene esto en una talla más grande?', 'Do you have this in a larger size?')
      ],
      read: {
        t: 'Shopper: Hi, how much are these shoes? Seller: They are sixty dollars, but there is a ten percent discount today. Shopper: Can I try them on? Seller: Of course. What size are you? Shopper: Size nine. Seller: Here you are. Shopper: They fit well. I\'ll take them. Do you accept credit cards? Seller: Yes, we do.',
        tr: 'Cliente: Hola, ¿cuánto cuestan estos zapatos? Vendedor: Sesenta dólares, pero hoy hay un diez por ciento de descuento. Cliente: ¿Puedo probármelos? Vendedor: Claro. ¿Qué talla usa? Cliente: Nueve. Vendedor: Aquí tiene. Cliente: Me quedan bien. Me los llevo. ¿Aceptan tarjetas de crédito? Vendedor: Sí.',
        q: [
          mc('How much is the discount?', ['10%', '20%', '60%'], 0),
          mc('Can the shopper pay by credit card?', ['Yes', 'No', 'We do not know'], 0)
        ]
      },
      write: { p: 'Escribe lo que dirías al comprar una chaqueta: precio, talla y forma de pago.', m: 'How much is this jacket? Do you have it in medium? Can I pay by credit card?' },
      q: 'shopping English conversation'
    },

    {
      id: 'v07', track: 'travel', level: 'A2', title: 'Emergencias, salud y problemas', en: 'Emergencies and health',
      explain:
        '<p><b>Pedir ayuda:</b> <i lang="en">Help! / I need help. / Call the police! / Call an ambulance! / It\'s an emergency.</i> El número de emergencias es 911 en EE. UU. y 112 en Europa.</p>' +
        '<p><b>Perdidas y robos:</b> <i lang="en">I lost my wallet. / My passport was stolen. / I missed my flight.</i></p>' +
        '<p><b>Salud:</b> <i lang="en">I don\'t feel well. / I have a headache. / I have a fever. / I need a doctor. / Where is the nearest pharmacy?</i></p>' +
        '<p><b>Hablar despacio y claro</b> ayuda: usa frases cortas con lo esencial.</p>',
      vocab: [
        ['emergency', 'emergencia', 'It is an emergency.'],
        ['police', 'policía', 'Call the police!'],
        ['ambulance', 'ambulancia', 'Call an ambulance!'],
        ['wallet', 'billetera', 'I lost my wallet.'],
        ['stolen', 'robado', 'My passport was stolen.'],
        ['doctor', 'doctor/a, médico/a', 'I need a doctor.'],
        ['pharmacy', 'farmacia', 'Where is the nearest pharmacy?'],
        ['headache', 'dolor de cabeza', 'I have a headache.'],
        ['fever', 'fiebre', 'I have a fever.'],
        ['hurt', 'doler, lastimar', 'My back hurts.'],
        ['missed', 'perdí (un vuelo, un bus)', 'I missed my flight.']
      ],
      ex: [
        mc('Te robaron el pasaporte. Dices:', ['My passport was stolen.', 'My passport is happy.', 'My passport is late.'], 0),
        mc('Tienes temperatura alta. Dices:', ['I have a fever.', 'I have a ticket.', 'I have a menu.'], 0),
        mc('Para buscar donde comprar medicinas:', ['Where is the nearest pharmacy?', 'Where is the nearest hotel?', 'Where is my fever?'], 0),
        fill("I don't feel ___. (bien)", 'well'),
        order('Perdí mi billetera.', 'I lost my wallet.'),
        order('Necesito un doctor.', 'I need a doctor.')
      ],
      read: {
        t: 'Last night I lost my wallet in a taxi. I went to the police station and said: "Hello, I lost my wallet. It was black, and it has my ID and some money." The officer asked: "Do you remember the taxi number?" I said no, but he wrote a report. He told me to call tomorrow. I also called my bank to block my card.',
        tr: 'Anoche perdí mi billetera en un taxi. Fui a la estación de policía y dije: "Hola, perdí mi billetera. Era negra y tiene mi cédula y algo de dinero." El oficial preguntó: "¿Recuerda el número del taxi?" Dije que no, pero él hizo un reporte. Me dijo que llamara mañana. También llamé a mi banco para bloquear mi tarjeta.',
        q: [
          mc('Where did the writer lose the wallet?', ['In a taxi', 'In a hotel', 'At a bank'], 0),
          mc('What did the writer do to protect the card?', ['Called the bank', 'Bought a new wallet', 'Called a taxi'], 0)
        ]
      },
      write: { p: 'Escribe 3 frases para pedir ayuda: perdiste algo, te sientes mal y necesitas llamar a alguien.', m: "I lost my passport. I don't feel well. Can you call a doctor, please?" },
      q: 'emergency English phrases travel'
    },

    {
      id: 'v08', track: 'travel', level: 'B1', title: 'Conversar con gente: small talk', en: 'Small talk',
      explain:
        '<p>El <b>small talk</b> es conversación ligera para romper el hielo: viaje, clima, comida, trabajo, planes. La clave es <b>preguntar y devolver la pregunta</b>: <i lang="en">And you? / How about you?</i></p>' +
        '<p><b>Abrir:</b> <i lang="en">Is this your first time here? / Where are you from? / What brings you here?</i></p>' +
        '<p><b>Reaccionar:</b> <i lang="en">Really? / That sounds great. / That sounds interesting. / I see. / Me too.</i></p>' +
        '<p><b>Cerrar:</b> <i lang="en">It was nice talking to you. / Let\'s keep in touch. / Take care!</i></p>',
      vocab: [
        ['small talk', 'conversación ligera', 'Small talk is easy with practice.'],
        ['what brings you here?', '¿qué te trae por aquí?', 'What brings you here?'],
        ['interesting', 'interesante', 'That sounds interesting.'],
        ['sounds great', 'suena genial', 'That sounds great.'],
        ['really?', '¿en serio?', "Really? I didn't know that."],
        ['how about you?', '¿y tú?', 'I love travel. How about you?'],
        ['by the way', 'a propósito', 'By the way, where are you staying?'],
        ['weather', 'clima', 'The weather is nice today.'],
        ['keep in touch', 'mantenernos en contacto', "Let's keep in touch."],
        ['take care', 'cuídate', 'It was nice talking to you. Take care!']
      ],
      ex: [
        mc('Alguien dice "I just arrived from Ecuador." Respondes:', ['Really? What brings you here?', 'Where is the toilet bill?', "I don't have a reservation."], 0),
        mc('Para mantener la conversación después de responder, preguntas:', ['How about you?', 'Never mind.', 'Not now.'], 0),
        mc('Para terminar una charla con educación:', ['It was nice talking to you.', "I don't care.", 'Stop talking.'], 0),
        fill("Let's keep in ___. (contacto)", 'touch'),
        order('¿Qué te trae por aquí?', 'What brings you here?'),
        order('Fue un gusto hablar contigo.', 'It was nice talking to you.')
      ],
      read: {
        t: 'At a hostel, Sofia meets Jake. Sofia: Hi! Is this your first time here? Jake: Yes, it is. I arrived yesterday. Sofia: Really? What brings you to Quito? Jake: I am here to learn Spanish and visit the mountains. How about you? Sofia: I live here. I study systems engineering. Jake: That sounds interesting! Sofia: It was nice talking to you. Let\'s keep in touch!',
        tr: 'En un hostal, Sofía conoce a Jake. Sofía: ¡Hola! ¿Es tu primera vez aquí? Jake: Sí. Llegué ayer. Sofía: ¿En serio? ¿Qué te trae a Quito? Jake: Estoy aquí para aprender español y visitar las montañas. ¿Y tú? Sofía: Yo vivo aquí. Estudio ingeniería en sistemas. Jake: ¡Suena interesante! Sofía: Fue un gusto hablar contigo. ¡Mantengámonos en contacto!',
        q: [
          mc('Why is Jake in Quito?', ['To learn Spanish and visit the mountains', 'To work in an office', 'To see his family'], 0),
          mc('What does Sofia study?', ['Systems engineering', 'Spanish', 'Tourism'], 0)
        ]
      },
      write: { p: 'Escribe un mini diálogo de 4 líneas conociendo a alguien en un viaje.', m: 'Hi! Is this your first time here? Yes. What brings you here? I am here for work. How about you?' },
      q: 'small talk English conversation travel'
    }

  );
})();
