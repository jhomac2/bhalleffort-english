/* Inglés general, nivel C1 (parte 2): g40 a g42. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 'g40', track: 'general', level: 'C1', title: 'Nominalización y oraciones con participio', en: 'Nominalisation and participle clauses',
      explain:
        '<p>El inglés avanzado condensa la información: convierte <b>verbos en sustantivos</b> (nominalización) y usa <b>participios</b> para unir ideas sin conjunciones.</p>' +
        '<table><tr><th>Verbo / frase</th><th>Nominalización</th></tr>' +
        '<tr><td><i lang="en">Prices increased sharply.</i></td><td><i lang="en">There was a sharp <b>increase in</b> prices.</i></td></tr>' +
        '<tr><td><i lang="en">They introduced a new law.</i></td><td><i lang="en">The <b>introduction of</b> a new law…</i></td></tr>' +
        '<tr><td><i lang="en">People decided quickly.</i></td><td><i lang="en">The <b>speed of</b> their decision…</i></td></tr></table>' +
        '<p><b>Participios (misma persona hace las dos acciones):</b></p>' +
        '<ul><li><i lang="en">Having finished the report, she went home.</i> (= después de terminar)</li>' +
        '<li><i lang="en">Walking along the street, I saw an accident.</i> (= mientras caminaba)</li>' +
        '<li><i lang="en">Written in 1990, the book is still popular.</i> (pasivo: «escrito en…»)</li>' +
        '<li><i lang="en">Not knowing the answer, he stayed silent.</i> (negativo)</li></ul>' +
        '<p><b>Atención:</b> el sujeto del participio debe ser el mismo de la oración principal. Error típico: <i lang="en">Walking down the street, the rain started.</i> (¿quién caminaba?).</p>',
      vocab: [
        ['increase in', 'aumento de', 'There was an increase in sales.'],
        ['decline in', 'descenso de', 'A decline in prices followed.'],
        ['introduction of', 'introducción de', 'The introduction of the app helped.'],
        ['development', 'desarrollo', 'The development of the plan took months.'],
        ['implementation', 'implementación', 'The implementation was fast.'],
        ['having finished', 'habiendo terminado', 'Having finished, she left early.'],
        ['not knowing', 'sin saber', 'Not knowing the way, we asked.'],
        ['widely', 'ampliamente', 'The book is widely read.'],
        ['sharp', 'brusco, marcado', 'There was a sharp rise in costs.'],
        ['reputation', 'reputación', 'The firm has a strong reputation.']
      ],
      ex: [
        mc('Prices increased sharply = There was a sharp ___ prices.', ['increase in', 'increase of in', 'increasing'], 0),
        mc('___ the report, she went home.', ['Having finished', 'Finishing have', 'To have finishing'], 0),
        mc('Which sentence is correct?', ['Walking down the street, I saw an accident.', 'Walking down the street, the accident was seen.', 'Walk down the street, I saw.'], 0),
        fill('___ in 1990, the book is still popular. (Written)', 'Written'),
        mc('"Not knowing the answer, he stayed silent" means…', ['Because he did not know, he stayed silent', 'He knew and stayed silent', 'He did not stay'], 0),
        order('La introducción de la nueva ley causó debate.', 'The introduction of the new law caused debate.')
      ],
      read: {
        t: "Founded in 1985, the company quickly built a strong reputation. Having identified a gap in the market, its founders focused on affordable software for small businesses. The introduction of a cloud service in 2010 led to a sharp increase in sales, and the decline in production costs allowed the firm to lower its prices. Not wanting to lose customers, the managers invested heavily in support. Widely regarded as an industry leader today, the company still faces challenges, especially the rapid development of new competitors. Having learned from past mistakes, its current team prefers careful implementation of every new idea.",
        tr: 'Fundada en 1985, la empresa construyó rápidamente una sólida reputación. Habiendo identificado un hueco en el mercado, sus fundadores se enfocaron en software asequible para pequeños negocios. La introducción de un servicio en la nube en 2010 llevó a un fuerte aumento de las ventas, y la disminución de los costos de producción permitió a la firma bajar sus precios. Como no querían perder clientes, los gerentes invirtieron mucho en soporte. Considerada hoy ampliamente como líder del sector, la empresa aún enfrenta desafíos, sobre todo el rápido desarrollo de nuevos competidores. Habiendo aprendido de errores pasados, su equipo actual prefiere una implementación cuidadosa de cada idea nueva.',
        q: [mc('What led to a sharp increase in sales?', ['The introduction of a cloud service', 'A new logo', 'A merger'], 0), mc('Why did managers invest in support?', ['They did not want to lose customers', 'They wanted to close', 'They had no clients'], 0), mc('What does the current team prefer?', ['Careful implementation', 'Fast, risky changes', 'No changes'], 0)]
      },
      write: { p: 'Escribe 4 frases con participios y nominalizaciones sobre tu carrera o tu historia de estudio (Having…, Written…, There was an increase in…, The introduction of…).', m: 'Having finished school, I started university. Motivated by technology, I chose cybersecurity. There was an increase in my interest. The introduction of new tools changed my plans.' },
      q: 'participle clauses nominalisation advanced English C1 grammar',
      listen: { d: [['Analyst', 'Having reviewed the figures, I noticed a sharp increase in complaints.'], ['Manager', 'What caused it?'], ['Analyst', 'The introduction of the new system, probably. Not knowing how to use it, many customers called support.'], ['Manager', 'Is there a plan to reduce the number of calls?'], ['Analyst', 'Yes. Written in simple language, a short guide should help. The implementation starts next week.']],
        q: [mc('¿Qué notó el analista?', ['A sharp increase in complaints', 'A decline in sales', 'A new competitor'], 0), mc('¿Qué lo causó probablemente?', ['The introduction of a new system', 'A price rise', 'A holiday'], 0), mc('¿Cuándo empieza la implementación?', ['Next week', 'Tomorrow', 'Next year'], 0)] },
      quiz: [
        mc('Which sentence is grammatically correct?', ['Having eaten, we left the restaurant.', 'Having eat, we left the restaurant.', 'Have eaten, leaving we.'], 0),
        mc('"There was a decline in prices" = Prices…', ['fell', 'rose', 'stayed'], 0),
        mc('The participle clause must have the same ___ as the main clause.', ['subject', 'verb', 'tense'], 0),
        mc('"Not wanting to lose clients, they offered a discount" means…', ['Because they did not want to lose clients, they offered a discount', 'They wanted to lose clients', 'They did not offer a discount'], 0),
        mc('Which is a nominalisation of "develop"?', ['development', 'developing quickly', 'developer'], 0),
        fill('Having ___ the report, I sent it. (finished)', 'finished'),
        order('Habiendo revisado las cifras, noté un aumento brusco.', 'Having reviewed the figures, I noticed a sharp increase.'),
        hear(['Having finished, she left.', 'Having finished, we left.', 'Having finished, she lost.'], 0, 'Se oía «she left».')
      ]
    },

    {
      id: 'g41', track: 'general', level: 'C1', title: 'Modismos, colocaciones y matices de significado', en: 'Idioms, collocations and nuance',
      explain:
        '<p>En C1 ya no basta con «entender»: hay que sonar <b>natural</b>. Eso se logra con <b>colocaciones</b> (palabras que van juntas) y algunos <b>modismos</b> de uso real.</p>' +
        '<table><tr><th>Colocación</th><th>Incorrecto</th></tr>' +
        '<tr><td><i lang="en">heavy rain / strong coffee</i></td><td><i lang="en">strong rain / heavy coffee</i></td></tr>' +
        '<tr><td><i lang="en">make a decision / do homework</i></td><td><i lang="en">do a decision / make homework</i></td></tr>' +
        '<tr><td><i lang="en">raise a concern / reach an agreement</i></td><td><i lang="en">lift a concern / get an agreement</i></td></tr></table>' +
        '<p><b>Modismos frecuentes:</b></p>' +
        '<ul><li><i lang="en">bite the bullet</i> — aceptar algo difícil y hacerlo</li>' +
        '<li><i lang="en">on the same page</i> — de acuerdo, con la misma idea</li>' +
        '<li><i lang="en">cut corners</i> — hacer algo mal por ahorrar tiempo o dinero</li>' +
        '<li><i lang="en">a blessing in disguise</i> — algo malo que resultó bueno</li>' +
        '<li><i lang="en">the tip of the iceberg</i> — solo una parte pequeña del problema</li>' +
        '<li><i lang="en">back to square one</i> — volver a empezar</li></ul>' +
        '<p><b>Matices:</b> <i lang="en">slim</i> (positivo) vs <i lang="en">skinny</i> (negativo); <i lang="en">determined</i> (positivo) vs <i lang="en">stubborn</i> (negativo); <i lang="en">cheap</i> vs <i lang="en">inexpensive</i>. Las palabras con la misma traducción pueden cambiar el tono.</p>',
      vocab: [
        ['bite the bullet', 'aceptar lo difícil y hacerlo', 'I had to bite the bullet and apologise.'],
        ['on the same page', 'estar de acuerdo, alineados', 'Let us make sure we are on the same page.'],
        ['cut corners', 'ahorrar esfuerzo haciendo algo mal', 'Never cut corners with security.'],
        ['a blessing in disguise', 'algo malo que resulta bueno', 'Losing that job was a blessing in disguise.'],
        ['tip of the iceberg', 'solo una parte del problema', 'This bug is just the tip of the iceberg.'],
        ['back to square one', 'volver a empezar', 'The test failed, so we are back to square one.'],
        ['heavy rain', 'lluvia fuerte', 'There was heavy rain all night.'],
        ['reach an agreement', 'llegar a un acuerdo', 'We reached an agreement yesterday.'],
        ['stubborn', 'terco', 'He is too stubborn to listen.'],
        ['determined', 'decidido, perseverante', 'She is determined to succeed.']
      ],
      ex: [
        mc('Which collocation is correct?', ['heavy rain', 'strong rain', 'big rain'], 0),
        mc('We need to ___ a decision today.', ['make', 'do', 'take out'], 0),
        mc('"Bite the bullet" means…', ['accept something difficult and do it', 'eat metal', 'refuse to act'], 0),
        mc('"The tip of the iceberg" means…', ['a small visible part of a bigger problem', 'a cold drink', 'the best part'], 0),
        fill('If the plan fails, we are back to ___ one. (square)', 'square'),
        order('Asegurémonos de que estamos en la misma página.', 'Let us make sure we are on the same page.')
      ],
      read: {
        t: "When the software team found a serious bug in the payment system, the manager decided to bite the bullet and delay the launch. Some developers wanted to cut corners and release a quick patch, but the manager insisted that everyone be on the same page about the risks. The delay was a blessing in disguise, because the team discovered that the first bug was only the tip of the iceberg: several hidden errors were found during further testing. It was frustrating to be back to square one, but the company avoided a costly disaster and reached an agreement with its clients to launch two weeks later.",
        tr: 'Cuando el equipo de software encontró un error grave en el sistema de pagos, el gerente decidió afrontar lo difícil y retrasar el lanzamiento. Algunos desarrolladores querían tomar atajos y lanzar un parche rápido, pero el gerente insistió en que todos estuvieran de acuerdo sobre los riesgos. El retraso fue una bendición disfrazada, porque el equipo descubrió que el primer error era solo la punta del iceberg: durante nuevas pruebas se encontraron varios errores ocultos. Fue frustrante volver a empezar, pero la empresa evitó un desastre costoso y llegó a un acuerdo con sus clientes para lanzar dos semanas después.',
        q: [mc('What did the manager decide to do?', ['Delay the launch', 'Release a quick patch', 'Cancel the project'], 0), mc('Why was the delay "a blessing in disguise"?', ['More hidden errors were found', 'The clients were angry', 'The bug disappeared'], 0), mc('How did the company reach the new launch date?', ['By agreement with its clients', 'By ignoring them', 'By changing the product'], 0)]
      },
      write: { p: 'Escribe 4 frases con un modismo cada una (bite the bullet, on the same page, a blessing in disguise, tip of the iceberg) sobre situaciones reales de estudio o trabajo.', m: 'I had to bite the bullet and ask for help. We need to be on the same page. Failing that exam was a blessing in disguise. This error is just the tip of the iceberg.' },
      q: 'English idioms collocations C1 bite the bullet on the same page',
      listen: { d: [['Lead', 'We found another error. I think this is just the tip of the iceberg.'], ['Dev', 'So we are back to square one?'], ['Lead', 'Not exactly, but we should not cut corners. Are we on the same page?'], ['Dev', 'Yes. I will bite the bullet and review the whole module tonight.'], ['Lead', 'Thank you. Finding it now is a blessing in disguise.']],
        q: [mc('¿Qué encontraron?', ['Another error', 'A new client', 'A free tool'], 0), mc('¿Qué hará el desarrollador esta noche?', ['Review the whole module', 'Go home', 'Call the client'], 0), mc('¿Por qué es «a blessing in disguise»?', ['Finding the problem early is good', 'The project is cancelled', 'They won a prize'], 0)] },
      quiz: [
        mc('"Cut corners" means to…', ['do something with less effort or quality', 'turn a corner', 'cut paper'], 0),
        mc('Which sentence is correct?', ['He made a decision.', 'He did a decision.', 'He took a decision of.'], 0),
        mc('"On the same page" means…', ['in agreement', 'reading together', 'on paper'], 0),
        mc('"Stubborn" has a ___ tone than "determined".', ['more negative', 'more positive', 'neutral'], 0),
        mc('"A blessing in disguise" is…', ['a bad thing that turns out good', 'a religious gift', 'a secret'], 0),
        fill('We should ___ the bullet and tell the truth. (bite)', 'bite'),
        order('Llegamos a un acuerdo ayer.', 'We reached an agreement yesterday.'),
        hear(['We are on the same page.', 'We are on the same stage.', 'We are in the same cage.'], 0, 'Se oía «page».')
      ]
    },

    {
      id: 'g42', track: 'general', level: 'C1', title: 'Concesión y contraste avanzados', en: 'Advanced concession and contrast',
      explain:
        '<p>Para argumentar bien en C1 hay que <b>reconocer el otro lado</b> y luego mantener tu punto. Esa es la <b>concesión</b>.</p>' +
        '<table><tr><th>Función</th><th>Conectores</th></tr>' +
        '<tr><td>Conceder</td><td><i lang="en">Admittedly, … / Granted, … / It is true that … but…</i></td></tr>' +
        '<tr><td>Contrastar</td><td><i lang="en">Nevertheless, … / Nonetheless, … / Be that as it may, …</i></td></tr>' +
        '<tr><td>Oponer</td><td><i lang="en">Whereas … / While … / Whilst …</i></td></tr>' +
        '<tr><td>A pesar de</td><td><i lang="en">Despite / In spite of + sustantivo o -ing; Notwithstanding + sustantivo</i></td></tr>' +
        '<tr><td>Consecuencia</td><td><i lang="en">Consequently, … / Hence … / thereby + -ing</i></td></tr></table>' +
        '<p><b>Ejemplos:</b></p><ul><li><i lang="en">Granted, the plan is expensive; nevertheless, it will save money.</i></li>' +
        '<li><i lang="en">While it is true that remote work reduces costs, it can also weaken team spirit.</i></li>' +
        '<li><i lang="en">Despite having little experience, she got the job.</i></li>' +
        '<li><i lang="en">The company cut prices, thereby attracting more customers.</i></li></ul>' +
        '<p><b>Estructura útil:</b> <i lang="en">Although/Though/Even though + oración, … / However + adjetivo + sujeto + verbo:</i> <i lang="en">However hard he tried, he failed.</i></p>',
      vocab: [
        ['admittedly', 'es cierto que', 'Admittedly, the cost is high.'],
        ['granted', 'de acuerdo, concedo', 'Granted, it is not perfect.'],
        ['nonetheless', 'no obstante', 'The test was hard; nonetheless, I passed.'],
        ['be that as it may', 'sea como fuere', 'Be that as it may, we must continue.'],
        ['whereas', 'mientras que', 'He likes tea, whereas she prefers coffee.'],
        ['notwithstanding', 'a pesar de', 'Notwithstanding the delay, we finished.'],
        ['consequently', 'en consecuencia', 'Consequently, the project was cancelled.'],
        ['hence', 'por lo tanto', 'Costs rose, hence the higher prices.'],
        ['thereby', 'con lo cual', 'He saved time, thereby reducing costs.'],
        ['however hard', 'por mucho que', 'However hard he tried, he failed.']
      ],
      ex: [
        mc('___ , the plan is expensive; nevertheless, it will save money.', ['Granted', 'Whereas', 'Hence'], 0),
        mc('He likes tea, ___ she prefers coffee.', ['whereas', 'thereby', 'hence'], 0),
        mc('___ having little experience, she got the job.', ['Despite', 'Although', 'Whereas'], 0),
        fill('The company cut prices, ___ attracting more customers. (thereby)', 'thereby'),
        mc('"Be that as it may" is used to…', ['accept a point and move on', 'start a story', 'ask a question'], 0),
        order('Por mucho que se esforzó, fracasó.', 'However hard he tried, he failed.')
      ],
      read: {
        t: "Remote work has divided opinion among managers. Admittedly, it reduces office costs, and many employees report higher productivity at home. Nonetheless, some leaders argue that creativity suffers when teams rarely meet in person. Whereas younger workers often prefer flexibility, senior staff sometimes miss daily contact with colleagues. Granted, technology allows video meetings; be that as it may, informal conversations are hard to recreate online. Notwithstanding these doubts, most companies plan to keep a hybrid model, thereby combining the benefits of both systems. Consequently, new offices are being designed for collaboration rather than for individual desks.",
        tr: 'El trabajo remoto ha dividido las opiniones entre los gerentes. Es cierto que reduce los costos de oficina y que muchos empleados dicen ser más productivos en casa. Sin embargo, algunos líderes sostienen que la creatividad se resiente cuando los equipos rara vez se reúnen en persona. Mientras que los trabajadores jóvenes suelen preferir la flexibilidad, el personal veterano a veces extraña el contacto diario con colegas. De acuerdo, la tecnología permite videorreuniones; sea como fuere, las conversaciones informales son difíciles de recrear en línea. A pesar de estas dudas, la mayoría de las empresas planea mantener un modelo híbrido, combinando así los beneficios de ambos sistemas. En consecuencia, las nuevas oficinas se diseñan para la colaboración y no para escritorios individuales.',
        q: [mc('What do most companies plan to keep?', ['A hybrid model', 'Only remote work', 'Only office work'], 0), mc('What do some leaders say suffers?', ['Creativity', 'Salaries', 'Technology'], 0), mc('How are new offices designed?', ['For collaboration', 'For individual desks', 'For storage'], 0)]
      },
      write: { p: 'Escribe un párrafo corto (4 frases) sobre una ventaja y una desventaja de estudiar en línea usando Admittedly, Nevertheless, Whereas y Consequently.', m: 'Admittedly, online study is flexible. Nevertheless, it requires discipline. Whereas classes give structure, online courses depend on you. Consequently, I plan my time carefully.' },
      q: 'English concession contrast nevertheless nonetheless whereas despite C1',
      listen: { d: [['Chair', 'Remote work saves money. Admittedly, some staff feel isolated.'], ['Member', 'Granted, but whereas managers see productivity, workers see loneliness.'], ['Chair', 'Be that as it may, we need a decision today.'], ['Member', 'Then I propose a hybrid model, thereby combining flexibility and contact.'], ['Chair', 'Agreed. Consequently, offices will be redesigned for teamwork.']],
        q: [mc('¿Qué problema reconoce la presidenta?', ['Some staff feel isolated', 'Offices are too small', 'Salaries are low'], 0), mc('¿Qué propone el miembro?', ['A hybrid model', 'Only remote work', 'Closing the office'], 0), mc('¿Qué ocurrirá con las oficinas?', ['They will be redesigned for teamwork', 'They will close', 'They will be sold'], 0)] },
      quiz: [
        mc('Which connector means "mientras que"?', ['Whereas', 'Hence', 'Thereby'], 0),
        mc('"Nonetheless" is similar to…', ['nevertheless', 'therefore', 'for example'], 0),
        mc('"Consequently" introduces a…', ['result', 'concession', 'question'], 0),
        mc('___ the delay, we finished on time.', ['Notwithstanding', 'Whereas', 'Consequently'], 0),
        mc('Which sentence is correct?', ['However hard he tried, he failed.', 'However hardly he tried, he failed.', 'However he tried hard, failed.'], 0),
        fill('___ , the cost is high, but the benefits are greater. (Admittedly)', 'Admittedly'),
        order('Los costos subieron, por lo tanto los precios también.', 'Costs rose, hence prices rose too.'),
        hear(['Nonetheless, we continued.', 'Nonetheless, we continue.', 'Nevertheless, we continued.'], 0, 'Se oía «Nonetheless».')
      ]
    }

  );
})();
