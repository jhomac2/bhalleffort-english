/* Inglés general, nivel B2 (parte 2): g33 a g36. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 'g33', track: 'general', level: 'B2', title: 'Conectores: contraste, causa y resultado', en: 'Linking words',
      explain:
        '<p>Los conectores hacen que tu texto fluya y son clave en <b>escritura y habla</b> de B2.</p>' +
        '<table><tr><th>Función</th><th>Conectores</th><th>Ejemplo</th></tr>' +
        '<tr><td>Contraste</td><td><i lang="en">although / even though / while / whereas</i> + frase</td><td><i lang="en">Although it rained, we went out.</i></td></tr>' +
        '<tr><td>Contraste</td><td><i lang="en">despite / in spite of</i> + sustantivo o -ing</td><td><i lang="en">Despite the rain, we went out.</i></td></tr>' +
        '<tr><td>Contraste (frase nueva)</td><td><i lang="en">however, nevertheless</i> + coma</td><td><i lang="en">Sales fell. However, profits grew.</i></td></tr>' +
        '<tr><td>Causa</td><td><i lang="en">because of / due to / owing to</i> + sustantivo</td><td><i lang="en">The delay was due to a lack of staff.</i></td></tr>' +
        '<tr><td>Resultado</td><td><i lang="en">therefore, consequently, as a result</i></td><td><i lang="en">He overslept. As a result, he was late.</i></td></tr>' +
        '<tr><td>Adición</td><td><i lang="en">moreover, furthermore, in addition</i></td><td><i lang="en">It is cheap. Moreover, it is fast.</i></td></tr></table>' +
        '<p><b>Ojo:</b> <i lang="en">despite</i> nunca lleva «of» (<i lang="en">in spite of</i> sí) y no se usa con una frase completa.</p>',
      vocab: [
        ['although', 'aunque', 'Although it was late, he kept working.'],
        ['despite', 'a pesar de', 'Despite the delay, we finished on time.'],
        ['however', 'sin embargo', 'It is cheap; however, it is slow.'],
        ['nevertheless', 'no obstante', 'It was hard; nevertheless, we won.'],
        ['whereas', 'mientras que (contraste)', 'He likes cities, whereas I prefer villages.'],
        ['therefore', 'por lo tanto', 'The data is wrong; therefore, we stopped.'],
        ['consequently', 'en consecuencia', 'He ignored the rules; consequently, he was fined.'],
        ['due to', 'debido a', 'The delay was due to bad weather.'],
        ['moreover', 'además', 'It is fast; moreover, it is cheap.'],
        ['in spite of', 'a pesar de', 'In spite of the rain, we went out.']
      ],
      ex: [
        mc('___ the rain, we went out.', ['Despite', 'Although', 'However'], 0, '<i lang="en">Despite</i> va con un sustantivo.'),
        mc('Sales fell. ___, the company stayed profitable.', ['Nevertheless', 'Because', 'Despite'], 0),
        mc('The project was delayed ___ a lack of staff.', ['due to', 'although', 'whereas'], 0),
        fill('___ he was tired, he kept working. (Although)', ['Although', 'Even though', 'Though']),
        mc('Some people prefer cities, ___ others prefer the countryside.', ['whereas', 'therefore', 'despite'], 0),
        order('A pesar del retraso, terminamos a tiempo.', 'In spite of the delay, we finished on time.')
      ],
      read: {
        t: "Remote work has clear advantages. Employees save time because they do not commute; moreover, many of them say they feel more focused at home. However, working alone also has drawbacks. Although video calls are convenient, some people feel isolated, and communication problems are more frequent. Despite these difficulties, many companies are keeping flexible schedules, whereas others have asked staff to return to the office. Consequently, the best solution may be a mix of both models, since each one solves problems that the other cannot.",
        tr: 'El trabajo remoto tiene ventajas claras. Los empleados ahorran tiempo porque no se desplazan; además, muchos dicen que se sienten más concentrados en casa. Sin embargo, trabajar solo también tiene desventajas. Aunque las videollamadas son cómodas, algunas personas se sienten aisladas y los problemas de comunicación son más frecuentes. A pesar de estas dificultades, muchas empresas mantienen horarios flexibles, mientras que otras han pedido al personal volver a la oficina. En consecuencia, la mejor solución puede ser una mezcla de ambos modelos, ya que cada uno resuelve problemas que el otro no puede.',
        q: [mc('What is one advantage of remote work?', ['No commuting', 'Better video quality', 'Cheaper computers'], 0), mc('What is one drawback?', ['Some people feel isolated', 'Salaries are lower', 'Offices are noisy'], 0), mc('What solution does the text suggest?', ['A mix of both models', 'Only remote work', 'Only office work'], 0)]
      },
      write: { p: 'Escribe 4 frases sobre estudiar en línea vs. estudiar en un aula, usando: although, despite, however y therefore (o consequently).', m: 'Although online classes are convenient, they can be isolating. Despite the distance, I learn a lot. Classes are flexible; however, I need more discipline. I save travel time; therefore, I study more.' },
      q: 'linking words however nevertheless despite although English B2',
      listen: { d: [['Ana', 'Did you finish the report?'], ['Leo', 'Not yet. The delay was due to a server problem; as a result, I lost two hours.'], ['Ana', 'However, the client expects it today.'], ['Leo', 'I know. Although I am tired, I will finish it tonight. Moreover, I will send it before nine.'], ['Ana', 'Great. Despite the problems, the team did a good job.'], ['Leo', 'Thanks. Consequently, I think we deserve a day off!']],
        q: [mc('¿Por qué se retrasó el informe?', ['A server problem', 'A lack of staff', 'A holiday'], 0), mc('¿Cuándo lo enviará Leo?', ['Before nine tonight', 'Tomorrow', 'Next week'], 0), mc('¿Qué opina Ana del equipo?', ['They did a good job', 'They were lazy', 'They need training'], 0)] },
      quiz: [
        mc('___ he was ill, he went to work.', ['Although', 'Despite', 'However'], 0),
        mc('He went to work ___ his illness.', ['despite', 'although', 'whereas'], 0),
        mc('The flight was cancelled ___ the storm.', ['because of', 'because', 'although'], 0),
        mc('He did not study. ___, he failed the exam.', ['As a result', 'Despite', 'Whereas'], 0),
        mc('I love tea, ___ my brother prefers coffee.', ['whereas', 'consequently', 'due to'], 0),
        fill('It is cheap; ___, it is very reliable. (moreover)', ['moreover', 'furthermore', 'in addition']),
        order('Aunque estaba cansado, siguió trabajando.', 'Although he was tired, he kept working.'),
        hear(['Despite the delay, we finished.', 'Because of the delay, we finished.', 'Although the delay, we finished.'], 0, 'Se oía «Despite the delay».')
      ]
    },

    {
      id: 'g34', track: 'general', level: 'B2', title: 'Deducciones y críticas en el pasado', en: 'Past modals: must have, should have',
      explain:
        '<p>Los modales con <b>have + participio</b> hablan del pasado:</p>' +
        '<table><tr><th>Significado</th><th>Estructura</th><th>Ejemplo</th></tr>' +
        '<tr><td>Casi seguro</td><td><i lang="en">must have + pp</i></td><td><i lang="en">He must have forgotten.</i></td></tr>' +
        '<tr><td>Posible</td><td><i lang="en">might / may / could have + pp</i></td><td><i lang="en">She might have missed the bus.</i></td></tr>' +
        '<tr><td>Imposible</td><td><i lang="en">can\'t / couldn\'t have + pp</i></td><td><i lang="en">He can\'t have stolen it; he was abroad.</i></td></tr>' +
        '<tr><td>Crítica / consejo tardío</td><td><i lang="en">should(n\'t) have + pp</i></td><td><i lang="en">You should have told me.</i></td></tr>' +
        '<tr><td>No era necesario</td><td><i lang="en">needn\'t have + pp</i></td><td><i lang="en">You needn\'t have come.</i></td></tr></table>' +
        '<p>Pronunciación: <i lang="en">must have</i> suena «mustav» y <i lang="en">should have</i> suena «shuddav».</p>',
      vocab: [
        ['must have', 'debe de haber (casi seguro)', 'He must have forgotten the password.'],
        ['might have', 'podría haber (posible)', 'She might have missed the bus.'],
        ["can't have", 'no puede haber (imposible)', "He can't have done it."],
        ['should have', 'debería haber (crítica)', 'You should have told me.'],
        ["shouldn't have", 'no debería haber', "I shouldn't have said that."],
        ["needn't have", 'no hacía falta que', "You needn't have waited."],
        ['evidence', 'evidencia', 'There is no evidence of an attack.'],
        ['assume', 'suponer', 'I assume he forgot.'],
        ['obvious', 'obvio', 'It is obvious that he was nervous.'],
        ['mistake', 'error', 'It was a big mistake.']
      ],
      ex: [
        mc('The lights are off. They ___ gone to bed.', ['must have', 'should', "can't"], 0),
        mc('He ___ have stolen it; he was abroad.', ["can't", 'must', 'might'], 0, 'Algo imposible: <i lang="en">can\'t have + pp</i>.'),
        mc("You ___ told me earlier! Now it's too late.", ['should have', 'must have', 'might have'], 0),
        fill("She didn't answer. She ___ have seen my message. (might)", ['might', 'may', 'could']),
        mc("We took a taxi, but it wasn't necessary: we ___ taken a taxi.", ["needn't have", "mustn't have", "can't have"], 0),
        order('Debe de haber olvidado la contraseña.', 'He must have forgotten the password.')
      ],
      read: {
        t: "Last night the website went down for two hours. The first engineer said it must have been a hardware failure, but the logs show that the servers were working normally, so it can't have been the hardware. A colleague thinks someone might have changed a setting by mistake. Another believes a script could have overloaded the database. Whatever the cause, we should have set up an alert earlier, and we shouldn't have waited so long to call the support team. Next time we need to react faster.",
        tr: 'Anoche el sitio web se cayó durante dos horas. El primer ingeniero dijo que debió de ser una falla de hardware, pero los registros muestran que los servidores funcionaban con normalidad, así que no puede haber sido el hardware. Un colega piensa que alguien pudo haber cambiado una configuración por error. Otro cree que un script pudo haber sobrecargado la base de datos. Sea cual sea la causa, deberíamos haber configurado una alerta antes y no deberíamos haber esperado tanto para llamar al soporte. La próxima vez debemos reaccionar más rápido.',
        q: [mc('Why can\'t it have been the hardware?', ['The servers worked normally', 'The hardware was new', 'The support team said so'], 0), mc('What does one colleague think?', ['Someone might have changed a setting', 'A virus must have entered', 'The router broke'], 0), mc('What should they have done earlier?', ['Set up an alert', 'Buy new servers', 'Close the site'], 0)]
      },
      write: { p: 'Piensa en algo que pasó (un retraso, un error, una pérdida). Escribe 4 frases: una con must have, una con might have, una con can\'t have y una con should have.', m: "He must have forgotten the meeting. She might have missed the bus. It can't have been a virus. We should have checked the backup." },
      q: 'modal verbs of deduction past must have might have should have English B2',
      listen: { d: [['Ana', "Leo isn't answering his phone. He must have gone out."], ['Sam', "He can't have gone far; his car is still here."], ['Ana', 'Then he might have gone for a walk, or he could have fallen asleep.'], ['Sam', "He should have told us. We needn't have waited so long for him."], ['Ana', "Wait, here he is! Leo, where were you?"], ['Sam', "He says he shouldn't have left his phone upstairs."]],
        q: [mc('¿Por qué Sam cree que Leo no fue lejos?', ['His car is still there', 'He is sick', 'He called'], 0), mc('¿Qué dice Sam que Leo debió hacer?', ['Tell them', 'Answer the call', 'Buy a car'], 0), mc('¿Dónde dejó Leo su teléfono?', ['Upstairs', 'In the car', 'At work'], 0)] },
      quiz: [
        mc('The street is wet. It ___ rained.', ['must have', "can't have", 'needn\'t have'], 0),
        mc('She ___ have called; her phone was off all day.', ["can't", 'must', 'should'], 0),
        mc('I ___ eaten so much. I feel sick.', ["shouldn't have", 'must have', 'might have'], 0),
        mc('You ___ come early; the class started late.', ["needn't have", "can't have", 'must have'], 0),
        mc('He is not here. He ___ gone home.', ['might have', "couldn't have", 'needn\'t have'], 0),
        fill('You ___ have told me about the problem! (should)', 'should'),
        order('Deberías haberme llamado antes.', 'You should have called me earlier.'),
        hear(['He must have left.', 'He must leave.', 'He mustn\'t leave.'], 0, 'Se oía «must have left».')
      ]
    },

    {
      id: 'g35', track: 'general', level: 'B2', title: 'Phrasal verbs y colocaciones frecuentes', en: 'Phrasal verbs and collocations',
      explain:
        '<p>En B2 se espera que uses <b>phrasal verbs</b> y <b>colocaciones</b> (palabras que van juntas) con naturalidad.</p>' +
        '<table><tr><th>Phrasal verb</th><th>Significado</th><th>Ejemplo</th></tr>' +
        '<tr><td><i lang="en">come up with</i></td><td>idear</td><td><i lang="en">We came up with a solution.</i></td></tr>' +
        '<tr><td><i lang="en">put off</i></td><td>posponer</td><td><i lang="en">They put off the meeting.</i></td></tr>' +
        '<tr><td><i lang="en">turn out</i></td><td>resultar</td><td><i lang="en">It turned out to be a bug.</i></td></tr>' +
        '<tr><td><i lang="en">run out of</i></td><td>quedarse sin</td><td><i lang="en">We ran out of time.</i></td></tr>' +
        '<tr><td><i lang="en">set up</i></td><td>crear, configurar</td><td><i lang="en">She set up a company.</i></td></tr>' +
        '<tr><td><i lang="en">look into</i></td><td>investigar</td><td><i lang="en">We will look into it.</i></td></tr></table>' +
        '<p><b>Colocaciones:</b> <i lang="en">make progress</i> (no «do progress»), <i lang="en">meet a deadline</i>, <i lang="en">take responsibility</i>, <i lang="en">reach a conclusion</i>, <i lang="en">raise awareness</i>, <i lang="en">run a risk</i>.</p>',
      vocab: [
        ['come up with', 'idear, proponer', 'We came up with a great idea.'],
        ['put off', 'posponer', 'They put off the meeting.'],
        ['turn out', 'resultar', 'It turned out to be a simple bug.'],
        ['run out of', 'quedarse sin', 'We ran out of time.'],
        ['set up', 'crear, configurar', 'She set up a new company.'],
        ['look into', 'investigar', 'We will look into the problem.'],
        ['make progress', 'avanzar, progresar', 'We are making good progress.'],
        ['meet a deadline', 'cumplir una fecha límite', 'We must meet the deadline.'],
        ['take responsibility', 'asumir la responsabilidad', 'He took responsibility for the error.'],
        ['raise awareness', 'crear conciencia', 'The campaign raised awareness of phishing.']
      ],
      ex: [
        mc('We need to ___ a solution before Friday.', ['come up with', 'put up with', 'get away with'], 0),
        mc('The meeting was ___ until next week.', ['put off', 'put on', 'put out'], 0),
        mc('It ___ that the problem was a simple setting.', ['turned out', 'turned up', 'turned down'], 0),
        fill('We have run ___ of time. (out)', 'out'),
        mc('Which collocation is correct?', ['make progress', 'do progress', 'take progress'], 0),
        order('Crearon una nueva empresa el año pasado.', 'They set up a new company last year.')
      ],
      read: {
        t: "Our team was asked to come up with a plan to reduce phishing attacks. At first we put off the work because we ran out of time, but the number of incidents kept growing. We looked into the problem and it turned out that most victims had never received any training. So we set up a short course to raise awareness. After two months we were making real progress, and every employee had taken responsibility for reporting suspicious emails. We managed to meet our deadline, and the company now plans to repeat the course every year.",
        tr: 'Se le pidió a nuestro equipo idear un plan para reducir los ataques de phishing. Al principio pospusimos el trabajo porque nos quedamos sin tiempo, pero el número de incidentes seguía creciendo. Investigamos el problema y resultó que la mayoría de las víctimas nunca había recibido capacitación. Así que creamos un curso corto para crear conciencia. Después de dos meses estábamos avanzando de verdad y cada empleado había asumido la responsabilidad de reportar correos sospechosos. Logramos cumplir nuestra fecha límite y la empresa ahora planea repetir el curso cada año.',
        q: [mc('Why did the team first postpone the work?', ['They ran out of time', 'They had no budget', 'They disliked the plan'], 0), mc('What did they discover?', ['Most victims had no training', 'The servers were old', 'The emails were legal'], 0), mc('What will the company do every year?', ['Repeat the course', 'Hire new staff', 'Change the servers'], 0)]
      },
      write: { p: 'Escribe 4 frases sobre un proyecto o tarea tuya usando: come up with, put off, turn out, run out of (o look into / set up).', m: 'We came up with a new plan. I put off the homework. It turned out to be easy. We ran out of time.' },
      q: 'phrasal verbs collocations English B2 come up with put off',
      listen: { d: [['Ana', 'How is the project going?'], ['Leo', 'We are making progress, but we ran out of budget last week.'], ['Ana', 'Did you put off the launch?'], ['Leo', 'Yes. We will look into other options and come up with a cheaper plan.'], ['Ana', 'Who takes responsibility for the deadline?'], ['Leo', 'I do. It turned out to be more complicated than I thought, but we will meet it.']],
        q: [mc('¿Qué pasó con el presupuesto?', ['They ran out of it', 'They doubled it', 'They saved it'], 0), mc('¿Qué hará el equipo?', ['Come up with a cheaper plan', 'Cancel the project', 'Hire more people'], 0), mc('¿Quién asume la responsabilidad?', ['Leo', 'Ana', 'The client'], 0)] },
      quiz: [
        mc('Can you ___ the cause of the error?', ['look into', 'look after', 'look up to'], 0),
        mc('We ___ coffee, so I bought more.', ['ran out of', 'ran into', 'ran over'], 0),
        mc('The match was ___ because of the rain.', ['put off', 'put in', 'put up'], 0),
        mc('Our team always ___ the deadline.', ['meets', 'makes', 'does'], 0),
        mc('She ___ the account in five minutes.', ['set up', 'set off', 'set down'], 0),
        fill('It ___ out to be a great idea. (turn, past)', 'turned'),
        order('Tuvimos que idear un plan nuevo.', 'We had to come up with a new plan.'),
        hear(['We ran out of time.', 'We ran out of tea.', 'We ran out of Tim.'], 0, 'Se oía «time».')
      ]
    },

    {
      id: 'g36', track: 'general', level: 'B2', title: 'Formación de palabras', en: 'Word formation',
      explain:
        '<p>Si conoces una palabra, puedes <b>crear otras</b> con prefijos y sufijos. Es muy útil en exámenes y para leer textos académicos.</p>' +
        '<table><tr><th>Tipo</th><th>Sufijos / prefijos</th><th>Ejemplo</th></tr>' +
        '<tr><td>Sustantivos</td><td>-tion, -ment, -ness, -ity, -ence/-ance</td><td><i lang="en">develop → development</i></td></tr>' +
        '<tr><td>Adjetivos</td><td>-ive, -able, -ful, -less, -ous, -al</td><td><i lang="en">rely → reliable</i></td></tr>' +
        '<tr><td>Adverbios</td><td>-ly</td><td><i lang="en">clear → clearly</i></td></tr>' +
        '<tr><td>Verbos</td><td>-en, -ify, -ise</td><td><i lang="en">strong → strengthen</i></td></tr>' +
        '<tr><td>Negación</td><td>un-, in-/im-/il-/ir-, dis-, non-</td><td><i lang="en">possible → impossible</i></td></tr>' +
        '<tr><td>Otros</td><td>mis- (mal), re- (otra vez), over-/under-</td><td><i lang="en">understand → misunderstand</i></td></tr></table>' +
        '<p><b>Truco:</b> mira el hueco en la frase. Si va después de <i lang="en">the</i>, necesitas un sustantivo; si va antes de un sustantivo, un adjetivo; si modifica un verbo, un adverbio.</p>',
      vocab: [
        ['development', 'desarrollo', 'The development took two years.'],
        ['reliable', 'confiable', 'This software is very reliable.'],
        ['impossible', 'imposible', 'It is impossible to open the file.'],
        ['strengthen', 'fortalecer', 'We need to strengthen security.'],
        ['misunderstand', 'entender mal', 'I think you misunderstood me.'],
        ['carelessly', 'descuidadamente', 'He carelessly deleted the file.'],
        ['effective', 'eficaz', 'The new method is very effective.'],
        ['awareness', 'conciencia, conocimiento', 'Awareness is the first step.'],
        ['unusual', 'inusual', 'We saw unusual activity in the logs.'],
        ['simplify', 'simplificar', 'We should simplify the process.']
      ],
      ex: [
        mc('The ___ of the new system took two years. (develop)', ['development', 'developing', 'developer'], 0),
        mc('It is ___ to open the file without a password. (possible)', ['impossible', 'unpossible', 'dispossible'], 0),
        fill('He explained the problem very ___ . (clear)', 'clearly'),
        mc('Which word is a verb?', ['strengthen', 'strength', 'strongly'], 0),
        mc('"Misunderstand" means to…', ['understand wrongly', 'understand again', 'not understand at all'], 0),
        order('El nuevo software es muy confiable.', 'The new software is very reliable.')
      ],
      read: {
        t: "Cybersecurity awareness is becoming more important every year. Many attacks are not technically complicated; they succeed because users act carelessly. An unusual email, a link that seems harmless, or an unprotected network can be enough. Effective training does not only explain the risks; it also changes habits. Companies that strengthen their policies, simplify their rules, and reward responsible behaviour usually see fewer incidents. The development of a security culture takes time, but the results are measurable and, in the long run, much cheaper than the damage of a single breach.",
        tr: 'La conciencia sobre ciberseguridad es cada año más importante. Muchos ataques no son técnicamente complicados; tienen éxito porque los usuarios actúan con descuido. Un correo inusual, un enlace que parece inofensivo o una red sin protección pueden ser suficientes. Una capacitación eficaz no solo explica los riesgos; también cambia hábitos. Las empresas que fortalecen sus políticas, simplifican sus reglas y premian el comportamiento responsable suelen ver menos incidentes. El desarrollo de una cultura de seguridad lleva tiempo, pero los resultados son medibles y, a la larga, mucho más baratos que el daño de una sola filtración.',
        q: [mc('Why do many attacks succeed?', ['Users act carelessly', 'The attacks are very complex', 'The networks are too fast'], 0), mc('What makes training effective?', ['It changes habits', 'It is very long', 'It is expensive'], 0), mc('What is cheaper in the long run?', ['Building a security culture', 'Suffering a breach', 'Ignoring the risks'], 0)]
      },
      write: { p: 'Escribe 4 frases usando palabras derivadas: una con un sustantivo en -ment o -tion, una con un adjetivo en -able o -ive, una con un adverbio en -ly y una con un verbo en -en o -ify.', m: 'The development of the app was fast. This tool is very reliable. He worked carefully. We need to strengthen our passwords.' },
      q: 'word formation prefixes suffixes English B2 use of English',
      listen: { d: [['Ana', 'The new tool is really effective.'], ['Leo', 'Yes, and it is very reliable. The development team worked carefully.'], ['Ana', 'Did you notice any unusual behaviour?'], ['Leo', 'No, but I misunderstood one setting at first. It was impossible to find it.'], ['Ana', 'We should simplify the menu to avoid mistakes.'], ['Leo', 'Agreed. That would strengthen the whole product.']],
        q: [mc('¿Cómo describe Leo la herramienta?', ['Reliable', 'Unreliable', 'Slow'], 0), mc('¿Qué malinterpretó Leo?', ['One setting', 'A password', 'A price'], 0), mc('¿Qué propone Ana?', ['Simplify the menu', 'Remove the tool', 'Hire a team'], 0)] },
      quiz: [
        mc('He was ___ to open the file. (able)', ['unable', 'inable', 'disable'], 0),
        mc('The ___ of the bridge took five years. (construct)', ['construction', 'constructive', 'constructing'], 0),
        mc('She is a very ___ employee. (rely)', ['reliable', 'reliance', 'relying'], 0),
        mc('They need to ___ the walls. (strong)', ['strengthen', 'strength', 'strongly'], 0),
        mc('"Rewrite" means to write…', ['again', 'wrongly', 'less'], 0),
        fill('He drives very ___ . (care)', 'carefully'),
        order('Necesitamos simplificar el proceso.', 'We need to simplify the process.'),
        hear(['reliable', 'relatable', 'reliant'], 0, 'Se oía «reliable».')
      ]
    }

  );
})();
