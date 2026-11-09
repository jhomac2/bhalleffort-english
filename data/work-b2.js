/* Trabajo y pronunciación, nivel B2: w06, w07, p09. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 'w06', track: 'work', level: 'B2', title: 'Negociar y persuadir', en: 'Negotiating and persuading',
      explain:
        '<p>Negociar no es discutir: es <b>buscar un acuerdo</b> que funcione para las dos partes. En inglés profesional se usa un lenguaje <b>suave pero claro</b>.</p>' +
        '<table><tr><th>Función</th><th>Frases</th></tr>' +
        '<tr><td>Proponer</td><td><i lang="en">What if we extended the deadline by a week?</i><br><i lang="en">I would suggest starting with a pilot.</i></td></tr>' +
        '<tr><td>Condicionar</td><td><i lang="en">If you could lower the price, we would sign today.</i><br><i lang="en">We can do that, provided that you pay upfront.</i></td></tr>' +
        '<tr><td>Ceder algo</td><td><i lang="en">I am willing to be flexible on the timeline.</i></td></tr>' +
        '<tr><td>Rechazar con tacto</td><td><i lang="en">I am afraid that would be difficult for us.</i></td></tr>' +
        '<tr><td>Buscar acuerdo</td><td><i lang="en">Let us meet halfway.</i> / <i lang="en">Can we find a compromise?</i></td></tr>' +
        '<tr><td>Cerrar</td><td><i lang="en">So, to summarise, we agree on…</i></td></tr></table>' +
        '<p>El <b>condicional</b> (<i lang="en">would, could</i>) suena más educado que lo directo: <i lang="en">Could you lower the price?</i> mejor que <i lang="en">Lower the price.</i></p>',
      vocab: [
        ['negotiate', 'negociar', 'We need to negotiate the contract.'],
        ['compromise', 'compromiso, punto medio', 'Let us find a compromise.'],
        ['meet halfway', 'ceder ambos, encontrarse a medio camino', 'We can meet halfway on the price.'],
        ['provided that', 'siempre que, con la condición de que', 'We agree, provided that you pay upfront.'],
        ['willing', 'dispuesto', 'I am willing to be flexible.'],
        ['deadline', 'fecha límite', 'Can we extend the deadline?'],
        ['upfront', 'por adelantado', 'The payment is due upfront.'],
        ['concession', 'concesión', 'We made one concession on the price.'],
        ['propose', 'proponer', 'I propose a three-month pilot.'],
        ['terms', 'condiciones (de un contrato)', 'Both sides accepted the terms.']
      ],
      ex: [
        mc('Which request is the most polite?', ['Could you lower the price?', 'Lower the price.', 'You must lower the price.'], 0),
        mc('We agree, ___ you pay upfront.', ['provided that', 'in spite of', 'instead of'], 0),
        fill('I am ___ to be flexible on the deadline. (willing)', 'willing'),
        mc('"Let us meet halfway" means…', ['both sides give something', 'we stop the meeting', 'we meet in the middle of the road'], 0),
        mc('To say no politely you can say…', ['I am afraid that would be difficult.', 'No way.', 'That is stupid.'], 0),
        order('¿Y si ampliáramos el plazo una semana?', 'What if we extended the deadline by a week?')
      ],
      read: {
        t: "Lucía is negotiating a contract with a new supplier. The supplier wants full payment upfront. Lucía says, \"I am afraid that would be difficult for us. We could pay half now and half on delivery, provided that the goods arrive on time.\" The supplier hesitates, then proposes a discount of five percent if the first order is larger. Lucía replies that she is willing to increase the order, but only if the delivery date does not change. In the end, both sides meet halfway: the order is larger, the supplier gives the discount, and the payment is split in two.",
        tr: 'Lucía negocia un contrato con un proveedor nuevo. El proveedor quiere el pago completo por adelantado. Lucía dice: «Me temo que eso sería difícil para nosotros. Podríamos pagar la mitad ahora y la mitad en la entrega, siempre que la mercancía llegue a tiempo». El proveedor duda y luego propone un descuento del cinco por ciento si el primer pedido es mayor. Lucía responde que está dispuesta a aumentar el pedido, pero solo si la fecha de entrega no cambia. Al final ambas partes ceden: el pedido es mayor, el proveedor da el descuento y el pago se divide en dos.',
        q: [mc('What does the supplier want at first?', ['Full payment upfront', 'A discount', 'A smaller order'], 0), mc('What does Lucía offer?', ['Half now, half on delivery', 'Nothing', 'Full payment in a year'], 0), mc('How does the negotiation end?', ['Both sides meet halfway', 'Lucía leaves', 'The supplier refuses'], 0)]
      },
      write: { p: 'Escribe 4 frases para negociar algo (precio, plazo, horario o tarea): una propuesta con What if…, una condición con provided that, una cesión con willing y un rechazo amable con I am afraid.', m: 'What if we started next week? We can agree, provided that you send the files today. I am willing to work on Saturday. I am afraid that price would be difficult.' },
      q: 'negotiation English phrases business meeting polite compromise',
      listen: { d: [['Buyer', 'We like your product, but the price is too high for our budget.'], ['Seller', 'I understand. What if we offered a five percent discount for a larger order?'], ['Buyer', 'That is interesting. We would consider it, provided that delivery is within two weeks.'], ['Seller', 'I am afraid two weeks would be difficult. Could we meet halfway at three weeks?'], ['Buyer', 'Three weeks is acceptable. Let us summarise the terms and sign today.']],
        q: [mc('¿Qué ofrece el vendedor?', ['A five percent discount', 'A free product', 'A longer contract'], 0), mc('¿Qué plazo propone el vendedor al final?', ['Three weeks', 'Two weeks', 'One week'], 0), mc('¿Cómo termina?', ['They agree and sign', 'They cancel', 'They postpone a year'], 0)] },
      quiz: [
        mc('"Provided that" introduces a…', ['condition', 'result', 'question'], 0),
        mc('Which sentence is a polite refusal?', ['I am afraid we cannot do that.', 'We will never do that.', 'That is not my problem.'], 0),
        mc('"Willing" means…', ['ready to do something', 'unable', 'angry'], 0),
        mc('A "concession" is something you…', ['give up to reach an agreement', 'steal', 'forget'], 0),
        mc('If you could lower the price, we ___ sign today.', ['would', 'will', 'did'], 0),
        fill('Let us meet ___ on the price. (halfway)', 'halfway'),
        order('Podemos aceptar, siempre que el pago sea por adelantado.', 'We can accept, provided that the payment is upfront.'),
        hear(['I would suggest a pilot.', 'I would suggest a pirate.', 'I would suggest a pillow.'], 0, 'Se oía «pilot».')
      ]
    },

    {
      id: 'w07', track: 'work', level: 'B2', title: 'Correos profesionales y conversaciones difíciles', en: 'Professional emails and difficult conversations',
      explain:
        '<p>Los correos y las conversaciones difíciles (retrasos, errores, quejas, malas noticias) piden <b>tono diplomático</b>: claro con los hechos, amable con la persona.</p>' +
        '<table><tr><th>Situación</th><th>Frases</th></tr>' +
        '<tr><td>Dar una mala noticia</td><td><i lang="en">Unfortunately, we will not be able to deliver on Friday.</i><br><i lang="en">I regret to inform you that…</i></td></tr>' +
        '<tr><td>Reconocer un error</td><td><i lang="en">I apologise for the confusion. This was our mistake.</i></td></tr>' +
        '<tr><td>Proponer solución</td><td><i lang="en">To make up for this, we would like to offer…</i></td></tr>' +
        '<tr><td>Quejarse con educación</td><td><i lang="en">I am writing to express my concern about…</i></td></tr>' +
        '<tr><td>Pedir acción</td><td><i lang="en">I would appreciate it if you could reply by Monday.</i></td></tr>' +
        '<tr><td>Cierre</td><td><i lang="en">Thank you for your understanding. / Kind regards,</i></td></tr></table>' +
        '<p><b>Regla:</b> hechos primero, disculpa breve, solución concreta, siguiente paso con fecha. Evita culpar: <i lang="en">There was a delay</i> suena mejor que <i lang="en">You were late</i>.</p>',
      vocab: [
        ['unfortunately', 'lamentablemente', 'Unfortunately, the meeting was cancelled.'],
        ['regret to inform', 'lamento informar', 'I regret to inform you of a delay.'],
        ['apologise', 'disculparse (UK)', 'I apologise for the confusion.'],
        ['make up for', 'compensar', 'We would like to make up for the delay.'],
        ['concern', 'preocupación, inquietud', 'I am writing to express my concern.'],
        ['appreciate', 'agradecer, apreciar', 'I would appreciate your reply.'],
        ['misunderstanding', 'malentendido', 'It was a misunderstanding.'],
        ['resolve', 'resolver', 'We will resolve the issue today.'],
        ['follow up', 'dar seguimiento', 'I am following up on my last email.'],
        ['in the meantime', 'mientras tanto', 'In the meantime, please use the old link.']
      ],
      ex: [
        mc('Which opening is best for bad news?', ['Unfortunately, we will not be able to deliver on Friday.', 'You are wrong about Friday.', 'Friday is impossible, deal with it.'], 0),
        mc('"To make up for" means…', ['to compensate', 'to invent', 'to forget'], 0),
        fill('I would ___ it if you could reply by Monday. (appreciate)', 'appreciate'),
        mc('Which sentence avoids blaming?', ['There was a delay in the shipment.', 'You were late with the shipment.', 'Your fault, as always.'], 0),
        mc('"In the meantime" means…', ['while we wait', 'after a year', 'never'], 0),
        order('Lamento informarle sobre el retraso.', 'I regret to inform you about the delay.')
      ],
      read: {
        t: "Subject: Delay in your order. Dear Mr Ruiz, I am writing to inform you that your order, which was due on Friday, will be delayed by three days. Unfortunately, one of our suppliers sent the parts late. I apologise for the inconvenience this may cause. To make up for the delay, we would like to offer you a ten percent discount on your next purchase. In the meantime, our team will send you a tracking number tomorrow morning. I would appreciate it if you could confirm that the new date works for you. Thank you for your understanding. Kind regards, Marta Vega.",
        tr: 'Asunto: Retraso de su pedido. Estimado Sr. Ruiz: Le escribo para informarle de que su pedido, que debía llegar el viernes, se retrasará tres días. Lamentablemente, uno de nuestros proveedores envió las piezas tarde. Me disculpo por las molestias que esto pueda causar. Para compensar el retraso, queremos ofrecerle un descuento del diez por ciento en su próxima compra. Mientras tanto, nuestro equipo le enviará mañana por la mañana un número de seguimiento. Le agradecería que confirmara si la nueva fecha le conviene. Gracias por su comprensión. Atentamente, Marta Vega.',
        q: [mc('How long is the delay?', ['Three days', 'One week', 'One day'], 0), mc('What does the company offer?', ['A ten percent discount', 'A free product', 'A refund of everything'], 0), mc('What will the team send tomorrow?', ['A tracking number', 'The parts', 'An invoice'], 0)]
      },
      write: { p: 'Escribe un correo corto (4 a 5 frases) dando una mala noticia: hecho, disculpa, solución, siguiente paso con fecha. Puede ser real o imaginario.', m: 'Dear Ana, unfortunately the report will be late. I apologise for the delay. To make up for it, I will send a summary today. I would appreciate it if you could review it by Monday. Kind regards, Luis.' },
      q: 'professional email English bad news apology difficult conversation phrases',
      listen: { d: [['Client', 'Hello, I am calling about my order. It has not arrived.'], ['Agent', 'I apologise for the delay. Unfortunately, a supplier sent the parts late.'], ['Client', 'This is the second time. I am concerned about your service.'], ['Agent', 'I understand your concern. To make up for it, we would like to offer you a discount on your next purchase.'], ['Client', 'That is kind, but I need the order first.'], ['Agent', 'Of course. I will follow up today and send you a tracking number by tomorrow morning.']],
        q: [mc('¿Por qué se retrasó el pedido?', ['A supplier sent the parts late', 'The client moved', 'The agent was on holiday'], 0), mc('¿Qué ofrece la agente?', ['A discount on the next purchase', 'A free trip', 'Nothing'], 0), mc('¿Qué enviará mañana?', ['A tracking number', 'The money', 'A new product'], 0)] },
      quiz: [
        mc('"I regret to inform you…" is used to…', ['give bad news politely', 'invite someone', 'say goodbye'], 0),
        mc('The best way to ask for a reply is…', ['I would appreciate it if you could reply by Monday.', 'Reply Monday or else.', 'Why have you not replied?'], 0),
        mc('"Follow up" means to…', ['check progress after a first contact', 'start a fight', 'cancel a contact'], 0),
        mc('"Unfortunately" shows that the news is…', ['negative', 'positive', 'a question'], 0),
        mc('After the apology you should offer a…', ['concrete solution', 'new excuse', 'long story'], 0),
        fill('I am writing to express my ___ about the delay. (concern)', 'concern'),
        order('Mientras tanto, por favor usa el enlace antiguo.', 'In the meantime, please use the old link.'),
        hear(['I apologise for the confusion.', 'I apologise for the conclusion.', 'I apologise for the conversion.'], 0, 'Se oía «confusion».')
      ]
    },

    {
      id: 'p09', track: 'pron', level: 'B2', title: 'Acento de la frase y ritmo', en: 'Sentence stress and rhythm',
      speak: ['I can SEE the PROblem in the CODE.', 'She wants to GO to the STORE.', 'What do you THINK about the PLAN?', 'We have to FINISH the REport by FRIday.'],
      explain:
        '<p>El inglés tiene un ritmo marcado por el <b>acento de la frase</b>: no todas las palabras suenan igual de fuerte.</p>' +
        '<ul><li><b>Palabras de contenido</b> (sustantivos, verbos, adjetivos, adverbios, negaciones) se dicen <b>fuertes, largas y claras</b>.</li>' +
        '<li><b>Palabras de función</b> (<i lang="en">a, the, to, of, and, can, was</i>) se dicen <b>débiles y cortas</b>, con la vocal <b>«schwa» /ə/</b>.</li></ul>' +
        '<table><tr><th>Escrito</th><th>Suena así</th></tr>' +
        '<tr><td><i lang="en">I can see the problem.</i></td><td>«ai kən SI də PRO-bləm» (<i lang="en">can</i> es débil)</td></tr>' +
        '<tr><td><i lang="en">I can\'t see it.</i></td><td>«ai CANT SI it» (la negación se fuerza)</td></tr>' +
        '<tr><td><i lang="en">She wants to go to the store.</i></td><td>«shi WANTS tə GO tə də STORE»</td></tr></table>' +
        '<p>El inglés es una lengua de <b>ritmo por acentos</b>: el tiempo entre sílabas fuertes es casi igual, aunque haya muchas sílabas débiles en medio. En español cada sílaba dura casi lo mismo; por eso al principio cuesta <b>acortar las palabras pequeñas</b>. Practica marcando con la mano un golpe en cada palabra fuerte.</p>',
      vocab: [
        ['stress', 'acento, énfasis', 'Put the stress on the important words.'],
        ['rhythm', 'ritmo', 'English has a strong rhythm.'],
        ['content word', 'palabra de contenido', 'Nouns and verbs are content words.'],
        ['function word', 'palabra de función', 'Articles are function words.'],
        ['weak form', 'forma débil', 'The word "to" has a weak form.'],
        ['schwa', 'schwa (vocal débil /ə/)', 'The schwa is the most common vowel sound.'],
        ['emphasis', 'énfasis', 'Add emphasis to the key word.'],
        ['unstressed', 'sin acento', 'The word "the" is usually unstressed.'],
        ['pace', 'ritmo, velocidad', 'Slow your pace a little.'],
        ['natural', 'natural', 'Your speech sounds more natural now.']
      ],
      ex: [
        mc('¿Cuáles se dicen más fuertes?', ['Las palabras de contenido', 'Las palabras de función', 'Todas igual'], 0),
        mc('En «I can see it», la palabra «can» se dice…', ['débil (kən)', 'muy fuerte', 'en español'], 0),
        mc('En «I can\'t see it», la negación se dice…', ['fuerte', 'muy débil', 'no se dice'], 0),
        mc('El «schwa» /ə/ es una vocal…', ['débil y corta', 'larga y fuerte', 'que no existe'], 0),
        mc('Es una palabra de función:', ['the', 'problem', 'finish'], 0),
        hear(['I can see it.', 'I can\'t see it.', 'I can seat it.'], 0, 'Se oía la forma débil de «can».')
      ],
      read: {
        t: 'Natural English is not spoken syllable by syllable. Native speakers stress the important words and say the small words quickly and weakly. For example, in the sentence "I want to go to the store", the words "want", "go" and "store" are clear, but "to" and "the" almost disappear. If you stress every word equally, your speech can sound slow and unnatural, and listeners may find it harder to understand you. A good way to improve is to listen to a short sentence, mark the strong words, and repeat it with a steady beat.',
        tr: 'El inglés natural no se habla sílaba por sílaba. Los hablantes nativos acentúan las palabras importantes y dicen rápido y débil las palabras pequeñas. Por ejemplo, en la frase «I want to go to the store», las palabras «want», «go» y «store» son claras, pero «to» y «the» casi desaparecen. Si acentúas todas las palabras por igual, tu habla puede sonar lenta y poco natural, y a los oyentes les puede costar más entenderte. Una buena forma de mejorar es escuchar una frase corta, marcar las palabras fuertes y repetirla con un ritmo constante.',
        q: [mc('Which words are clear in "I want to go to the store"?', ['want, go, store', 'to, the', 'all of them equally'], 0), mc('What happens if you stress every word equally?', ['It can sound slow and unnatural', 'It sounds perfect', 'Nothing changes'], 0), mc('What is a good way to improve?', ['Mark the strong words and repeat with a steady beat', 'Speak louder', 'Avoid short sentences'], 0)]
      },
      write: { p: 'Escribe 4 frases de trabajo o estudio y subraya (con MAYÚSCULAS) las palabras fuertes. Léelas en voz alta con ritmo.', m: 'I NEED to SEND the REport. She CAN\'T FINish it TODAY. We MEET at NINE. They WANT to TALK.' },
      q: 'English sentence stress rhythm content words function words schwa Spanish speakers',
      listen: { d: [['Coach', 'Listen to this sentence: I want to go to the store.'], ['Student', 'I WANT to GO to the STORE.'], ['Coach', 'Good. The small words are weak: to, the. Now say: I can see the problem.'], ['Student', 'I can SEE the PROblem.'], ['Coach', 'Very natural. Keep a steady beat and do not stress every word.']],
        q: [mc('¿Qué debe hacer con las palabras pequeñas?', ['Say them weakly', 'Say them louder', 'Skip every sentence'], 0), mc('¿Qué frase repite primero?', ['I want to go to the store', 'I can see the problem', 'We have a report'], 0), mc('¿Qué consejo final da?', ['Keep a steady beat', 'Speak faster', 'Stop practising'], 0)] },
      quiz: [
        mc('Which word is usually unstressed?', ['of', 'problem', 'finish'], 0),
        mc('In «She wants to GO», the stress falls on…', ['go and wants', 'to', 'only she'], 0),
        mc('The schwa /ə/ is…', ['the most common vowel sound in English', 'a rare sound', 'a consonant'], 0),
        mc('English rhythm depends on…', ['stressed syllables', 'every syllable being equal', 'silence'], 0),
        mc('Negatives like «can\'t» are usually…', ['stressed', 'unstressed', 'silent'], 0),
        hear(['She can swim.', 'She can\'t swim.', 'She cans swim.'], 1, 'Se oía «can\'t» fuerte.'),
        fill('Content words are ___ in a sentence. (stressed)', 'stressed'),
        order('Pon el énfasis en las palabras importantes.', 'Put the stress on the important words.')
      ]
    }

  );
})();
