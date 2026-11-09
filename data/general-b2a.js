/* Inglés general, nivel B2 (parte 1): g28 a g32. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 'g28', track: 'general', level: 'B2', title: 'Condicionales mixtos y wish / if only', en: 'Third and mixed conditionals, wish',
      explain:
        '<p>Para hablar de cosas <b>imaginarias en el pasado</b> usa el <b>tercer condicional</b>:</p>' +
        '<p><i lang="en">If + past perfect, would have + participio.</i><br><i lang="en">If I had left earlier, I would have caught the train.</i></p>' +
        '<p>El <b>condicional mixto</b> mezcla tiempos: una causa en el pasado con un resultado en el presente.</p>' +
        '<p><i lang="en">If I had studied medicine, I would be a doctor now.</i></p>' +
        '<table><tr><th>Deseo</th><th>Estructura</th><th>Ejemplo</th></tr>' +
        '<tr><td>Presente (irreal)</td><td>wish + pasado simple</td><td><i lang="en">I wish I had more time.</i></td></tr>' +
        '<tr><td>Arrepentimiento</td><td>wish + past perfect</td><td><i lang="en">I wish I had accepted.</i></td></tr>' +
        '<tr><td>Queja por algo repetido</td><td>wish + would</td><td><i lang="en">I wish he would stop.</i></td></tr></table>' +
        '<p><i lang="en">If only</i> es más fuerte que <i lang="en">wish</i>: <i lang="en">If only I had listened!</i></p>',
      vocab: [
        ['regret', 'arrepentirse, arrepentimiento', 'I regret not studying more.'],
        ['hindsight', 'perspectiva con el tiempo', 'In hindsight, it was a mistake.'],
        ['outcome', 'resultado', 'The outcome could have been worse.'],
        ['if only', 'ojalá (más fuerte que wish)', 'If only I had listened to him!'],
        ['turn down', 'rechazar', 'She turned down the job offer.'],
        ['miss the chance', 'perder la oportunidad', 'I missed the chance to travel.'],
        ['as a result', 'como resultado', 'He overslept; as a result, he was late.'],
        ['unlikely', 'poco probable', 'It is unlikely that it will change.'],
        ['imaginary', 'imaginario', 'This is an imaginary situation.'],
        ['could have', 'habría podido', 'We could have won the game.']
      ],
      ex: [
        mc("If I ___ the alarm, I wouldn't have been late.", ['had heard', 'would hear', 'heard'], 0, 'Tercer condicional: <i lang="en">if + past perfect</i>.'),
        mc('If she had left earlier, she ___ the train.', ['would have caught', 'would catch', 'had caught'], 0),
        mc('If I had invested in that company, I ___ rich now.', ['would be', 'would have been', 'will be'], 0, 'Condicional mixto: causa en el pasado, resultado en el presente (<i lang="en">now</i>).'),
        fill('I wish I ___ more free time. (have)', 'had', '<i lang="en">Wish</i> + pasado simple para un deseo irreal del presente.'),
        mc('He regrets not studying. = He wishes he ___.', ['had studied', 'studied', 'would study'], 0),
        order('Si lo hubiera sabido, habría ayudado.', ['If I had known, I would have helped.', 'I would have helped if I had known.'])
      ],
      read: {
        t: "Last year I turned down a job offer in Berlin. At the time, staying in Ecuador felt safer. Now I sometimes wish I had accepted it. If I had moved, I would have improved my German, and I would probably be earning more today. Still, I don't regret everything. If I had left, I wouldn't have met my partner, and we wouldn't be planning our own company now. Hindsight is useful, but it can also be unfair: nobody could have known how things would turn out.",
        tr: 'El año pasado rechacé una oferta de trabajo en Berlín. En ese momento, quedarme en Ecuador parecía más seguro. Ahora a veces desearía haberla aceptado. Si me hubiera mudado, habría mejorado mi alemán y probablemente ganaría más hoy. Aun así, no me arrepiento de todo. Si me hubiera ido, no habría conocido a mi pareja y no estaríamos planeando nuestra propia empresa ahora. Mirar atrás es útil, pero también puede ser injusto: nadie podía saber cómo saldrían las cosas.',
        q: [mc('Why does the writer sometimes wish things were different?', ['He refused a job abroad', 'He lost his job', 'He failed an exam'], 0),
          mc('What would have happened if he had moved?', ['He would have improved his German', 'He would have met his partner', 'He would have started a company'], 0),
          mc("What is the writer's final opinion?", ['Hindsight can be unfair', 'He regrets everything', 'He plans to move now'], 0)]
      },
      write: { p: 'Escribe 4 frases sobre una decisión que tomaste: dos con tercer condicional (If I had… I would have…), una con condicional mixto y una con wish.', m: "If I had studied harder, I would have passed the exam. If I had taken the job, I would have moved abroad. If I had saved money, I would have a car now. I wish I had asked for help." },
      q: 'third conditional mixed conditional wish if only English B2',
      listen: { d: [['Ana', 'You look upset. What happened?'], ['Leo', 'I missed my flight to Madrid. If I had left home an hour earlier, I would have made it.'], ['Ana', 'Why were you late?'], ['Leo', "My phone didn't ring. I wish I had checked the alarm last night."], ['Ana', "Don't be so hard on yourself. If you had taken the earlier bus, you would have arrived on time, but nobody could have known about the traffic."], ['Leo', 'True. Now I have to pay for a new ticket. If only I had bought the flexible one!']],
        q: [mc('¿Por qué perdió Leo el vuelo?', ['He left home too late', 'The airport closed', 'He lost his passport'], 0), mc('¿Qué desearía haber hecho?', ['Checked the alarm', 'Taken a taxi', 'Called Ana'], 0), mc('¿Qué lamenta al final?', ['Not buying the flexible ticket', 'Not going to Madrid', 'Not calling the airline'], 0)] },
      quiz: [
        mc('If we ___ the map, we would not have got lost.', ['had checked', 'checked', 'would check'], 0),
        mc('She would have called you if she ___ your number.', ['had had', 'has had', 'would have'], 0),
        mc('If he had taken the medicine, he ___ better now.', ['would feel', 'would have felt', 'will feel'], 0, 'Causa pasada + resultado presente: condicional mixto.'),
        mc('I wish my neighbours ___ so much noise. (queja)', ['would not make', 'did not made', 'had not make'], 0),
        fill('If only I ___ listened to you! (had)', 'had'),
        fill('I wish I ___ taller. (be)', ['were', 'was'], 'En inglés formal se prefiere <i lang="en">were</i>, pero <i lang="en">was</i> se acepta.'),
        order('Ojalá hubiera aceptado el trabajo.', 'I wish I had accepted the job.'),
        hear(['If I had known, I would have helped.', 'If I knew, I would help.', 'If I know, I will help.'], 0, 'Se oía el tercer condicional.')
      ]
    },

    {
      id: 'g29', track: 'general', level: 'B2', title: 'Pasiva avanzada y "have something done"', en: 'Advanced passive and causative',
      explain:
        '<p>La pasiva también funciona con <b>modales</b>: <i lang="en">modal + be + participio</i>.</p>' +
        '<p><i lang="en">The server must be updated.</i> · <i lang="en">The bug can\'t be fixed today.</i></p>' +
        '<p>Con <b>verbos de opinión</b> (say, believe, think, report, expect) se usa la pasiva impersonal:</p>' +
        '<table><tr><th>Estructura</th><th>Ejemplo</th></tr>' +
        '<tr><td><i lang="en">It is said that + frase</i></td><td><i lang="en">It is believed that the attack began in May.</i></td></tr>' +
        '<tr><td><i lang="en">Sujeto + is said to + verbo</i></td><td><i lang="en">He is said to speak five languages.</i></td></tr>' +
        '<tr><td><i lang="en">is said to be + -ing / have + participio</i></td><td><i lang="en">The company is said to be losing money.</i></td></tr></table>' +
        '<p><b>Causativa:</b> <i lang="en">have / get + objeto + participio</i> = alguien hace algo por ti: <i lang="en">I had my laptop repaired.</i> / <i lang="en">I need to get my hair cut.</i></p>',
      vocab: [
        ['be said to', 'se dice que (él/ella)', 'The company is said to be growing.'],
        ['be believed to', 'se cree que', 'He is believed to be abroad.'],
        ['have it done', 'hacer que lo hagan (causativa)', 'I had my laptop repaired.'],
        ['carry out', 'llevar a cabo', 'The audit will be carried out in May.'],
        ['allegedly', 'supuestamente (sin pruebas)', 'He allegedly stole the data.'],
        ['suspect', 'sospechoso', 'The suspect was arrested yesterday.'],
        ['take place', 'tener lugar', 'The meeting will take place online.'],
        ['be held', 'celebrarse', 'The conference was held in Quito.'],
        ['report', 'informar', 'It is reported that prices will rise.'],
        ['expected', 'se espera', 'Growth is expected to continue.']
      ],
      ex: [
        mc('The server ___ before Friday.', ['must be updated', 'must update', 'must be updating'], 0),
        mc('He is said ___ five languages.', ['to speak', 'speaking', 'that he speaks'], 0),
        mc('I need to ___ my laptop repaired.', ['have', 'make', 'do'], 0, 'Causativa: <i lang="en">have + objeto + participio</i>.'),
        fill('It is believed ___ the attack began last month. (that)', 'that'),
        mc('"They say the company is losing money." =', ['The company is said to be losing money.', 'The company is said to lose money yesterday.', 'They are said the company loses money.'], 0),
        order('El informe tiene que terminarse hoy.', 'The report has to be finished today.')
      ],
      read: {
        t: "A large online store is believed to have suffered a data breach last week. The attack is thought to have started through an old employee account, and customer emails are said to have been exposed. The company has had its systems checked by an independent team, and the results are expected to be published next month. Meanwhile, all customers have been asked to change their passwords. The incident will be investigated, and further details can't be shared until the review has been completed.",
        tr: 'Se cree que una gran tienda en línea sufrió una filtración de datos la semana pasada. Se piensa que el ataque comenzó con la cuenta de un antiguo empleado y se dice que los correos de los clientes quedaron expuestos. La empresa hizo revisar sus sistemas por un equipo independiente y se espera que los resultados se publiquen el próximo mes. Mientras tanto, se pidió a todos los clientes que cambien su contraseña. El incidente será investigado y no se pueden dar más detalles hasta que termine la revisión.',
        q: [mc('How did the attack probably start?', ['Through an old employee account', 'Through a customer email', 'Through a new server'], 0), mc('What have customers been asked to do?', ['Change their passwords', 'Close their accounts', 'Send their emails'], 0), mc('When are the results expected?', ['Next month', 'Next week', 'Tomorrow'], 0)]
      },
      write: { p: 'Escribe 4 frases sobre una noticia o una empresa que conozcas: una con It is said that…, una con is believed to…, una con un modal en pasiva y una con have/get something done.', m: "It is said that the company will open a new office. The CEO is believed to be planning big changes. The new system must be installed this month. We had the network checked last week." },
      q: 'passive voice reporting verbs causative have something done B2',
      listen: { d: [['Reporter', 'The police are investigating a robbery at a computer shop.'], ['Witness', 'The suspect is believed to have entered through the back door.'], ['Reporter', 'And what was taken?'], ['Witness', 'Twenty laptops are said to have been stolen. The owner had the cameras installed last month, so the video will be checked today.'], ['Reporter', 'Will the shop reopen soon?'], ['Witness', 'It is expected to reopen on Monday, once the door has been repaired.']],
        q: [mc('¿Cómo entró el sospechoso?', ['Through the back door', 'Through a window', 'Through the roof'], 0), mc('¿Qué se robó?', ['Twenty laptops', 'Twenty phones', 'Money'], 0), mc('¿Cuándo se espera que reabra?', ['On Monday', 'Today', 'Next month'], 0)] },
      quiz: [
        mc('The new rules ___ next week.', ['will be announced', 'will announce', 'are announcing'], 0),
        mc('She is believed ___ the country last year.', ['to have left', 'to leave', 'leaving'], 0),
        mc('We ___ our website redesigned last spring.', ['had', 'made', 'were'], 0),
        mc('It ___ that the price will go up.', ['is expected', 'expects', 'is expecting'], 0),
        fill('The problem can\'t ___ solved today. (be)', 'be'),
        fill('I got my car ___ yesterday. (repair)', 'repaired'),
        order('Se cree que él ha dejado el país.', 'He is believed to have left the country.'),
        hear(['The system must be checked.', 'The system must check.', 'The system must be checking.'], 0, 'Se oía la pasiva con modal.')
      ]
    },

    {
      id: 'g30', track: 'general', level: 'B2', title: 'Estilo indirecto: verbos para reportar', en: 'Reporting verbs',
      explain:
        '<p>Además de <i lang="en">say</i> y <i lang="en">tell</i>, el inglés tiene muchos <b>verbos para reportar</b> y cada uno pide una estructura:</p>' +
        '<table><tr><th>Estructura</th><th>Verbos</th><th>Ejemplo</th></tr>' +
        '<tr><td>verbo + <b>-ing</b></td><td>admit, deny, suggest, recommend</td><td><i lang="en">He denied deleting the file.</i></td></tr>' +
        '<tr><td>verbo + <b>to</b> + verbo</td><td>promise, offer, refuse, threaten, agree</td><td><i lang="en">She promised to call me.</i></td></tr>' +
        '<tr><td>verbo + <b>objeto</b> + to</td><td>warn, advise, remind, tell, invite</td><td><i lang="en">He warned us not to click.</i></td></tr>' +
        '<tr><td>verbo + <b>objeto + preposición</b> + -ing</td><td>accuse sb of, blame sb for, thank sb for</td><td><i lang="en">They accused him of lying.</i></td></tr>' +
        '<tr><td>insist on + -ing / suggest + that</td><td>insist, suggest</td><td><i lang="en">She insisted on paying.</i></td></tr></table>' +
        '<p><b>Retroceso de tiempos:</b> "I am tired" → <i lang="en">He said he was tired.</i> Pero si lo dicho sigue siendo verdad, puedes mantener el presente: <i lang="en">She said the exam is on Friday.</i></p>',
      vocab: [
        ['admit', 'admitir', 'He admitted making a mistake.'],
        ['deny', 'negar', 'She denied stealing the data.'],
        ['suggest', 'sugerir', 'I suggest checking the logs.'],
        ['insist on', 'insistir en', 'He insisted on paying the bill.'],
        ['warn', 'advertir', 'They warned us not to open it.'],
        ['promise', 'prometer', 'She promised to send the report.'],
        ['accuse of', 'acusar de', 'They accused him of cheating.'],
        ['blame for', 'culpar por', 'Do not blame me for this.'],
        ['refuse', 'negarse a', 'He refused to answer.'],
        ['remind', 'recordar a alguien', 'She reminded me to call.']
      ],
      ex: [
        mc('He denied ___ the file.', ['deleting', 'to delete', 'delete'], 0),
        mc('She warned us ___ the link.', ['not to click', "don't click", 'to not clicking'], 0),
        mc('"I will call you," he said. → He promised ___ me.', ['to call', 'calling', 'that call'], 0),
        fill('The manager accused him ___ lying. (of)', 'of'),
        mc('"You should update your system," she said. → She ___ updating my system.', ['suggested', 'said', 'told'], 0),
        order('Admitió haber roto las reglas.', 'He admitted breaking the rules.')
      ],
      read: {
        t: "After the meeting, three colleagues gave different versions of what had happened. Marta admitted forgetting to back up the files, but she denied deleting the folder. Pablo insisted on checking the logs before anyone was blamed, and he suggested asking the IT team for help. The manager reminded everyone to report problems immediately and warned them not to share passwords. In the end, the logs showed that an automatic update had removed the folder, so nobody was accused of anything.",
        tr: 'Después de la reunión, tres colegas dieron versiones distintas de lo ocurrido. Marta admitió haber olvidado hacer la copia de seguridad, pero negó haber borrado la carpeta. Pablo insistió en revisar los registros antes de culpar a nadie y sugirió pedir ayuda al equipo de TI. El gerente recordó a todos que reporten los problemas de inmediato y les advirtió que no compartan contraseñas. Al final, los registros mostraron que una actualización automática había eliminado la carpeta, así que nadie fue acusado de nada.',
        q: [mc('What did Marta admit?', ['Forgetting to back up the files', 'Deleting the folder', 'Sharing a password'], 0), mc('What did Pablo suggest?', ['Asking the IT team for help', 'Deleting the logs', 'Cancelling the meeting'], 0), mc('What really removed the folder?', ['An automatic update', 'A colleague', 'A virus'], 0)]
      },
      write: { p: 'Escribe 4 frases reportando algo que alguien te dijo, usando 4 verbos distintos (admit, promise, warn, suggest, accuse, insist…).', m: 'My boss promised to send the report. He warned me not to be late. A colleague suggested using a new tool. Nobody admitted making the mistake.' },
      q: 'reporting verbs admit deny suggest promise warn English B2',
      listen: { d: [['Ana', 'Did you hear what the manager said at the meeting?'], ['Leo', 'Yes. He warned everyone not to share passwords, and he reminded us to lock our screens.'], ['Ana', 'And what about the lost files?'], ['Leo', 'Marta admitted forgetting the backup, but she denied deleting anything.'], ['Ana', 'Did anyone suggest a solution?'], ['Leo', 'Pablo suggested checking the logs. He insisted on doing it before blaming anyone.']],
        q: [mc('¿De qué advirtió el gerente?', ['Not to share passwords', 'Not to arrive late', 'Not to use phones'], 0), mc('¿Qué admitió Marta?', ['Forgetting the backup', 'Deleting the files', 'Losing her laptop'], 0), mc('¿Qué sugirió Pablo?', ['Checking the logs', 'Calling the police', 'Buying new servers'], 0)] },
      quiz: [
        mc('He admitted ___ the password.', ['sharing', 'to share', 'share'], 0),
        mc('She refused ___ the money.', ['to accept', 'accepting', 'accept'], 0),
        mc('They accused the employee ___ stealing data.', ['of', 'for', 'about'], 0),
        mc('The teacher reminded us ___ our homework.', ['to bring', 'bringing', 'that bring'], 0),
        mc('"I\'m busy," she said. → She said she ___ busy.', ['was', 'is', 'has been'], 0),
        fill('He insisted ___ paying for dinner. (on)', 'on'),
        fill('I suggest ___ the logs first. (check)', 'checking'),
        hear(['He denied deleting it.', 'He decided deleting it.', 'He denied to delete it.'], 0, 'Se oía «denied deleting».')
      ]
    },

    {
      id: 'g31', track: 'general', level: 'B2', title: 'Oraciones de relativo', en: 'Relative clauses',
      explain:
        '<p>Las oraciones de relativo dan información sobre un sustantivo.</p>' +
        '<table><tr><th>Tipo</th><th>Ejemplo</th><th>Coma</th></tr>' +
        '<tr><td><b>Definitiva</b> (necesaria)</td><td><i lang="en">The engineer who fixed it is here.</i></td><td>sin comas; se puede usar <i lang="en">that</i></td></tr>' +
        '<tr><td><b>No definitiva</b> (extra)</td><td><i lang="en">My brother, who lives in Spain, is a pilot.</i></td><td>entre comas; NO se usa <i lang="en">that</i></td></tr></table>' +
        '<ul><li><i lang="en">who</i> (personas), <i lang="en">which</i> (cosas), <i lang="en">whose</i> (posesión), <i lang="en">where</i> (lugares), <i lang="en">when</i> (tiempo).</li>' +
        '<li><b>Se puede omitir</b> el pronombre cuando es el objeto: <i lang="en">The book (that) I read was great.</i></li>' +
        '<li><b>Reducidas:</b> <i lang="en">The files stored here are old.</i> (= that are stored) · <i lang="en">The man standing there is my boss.</i></li>' +
        '<li><i lang="en">which</i> puede referirse a toda la frase: <i lang="en">He passed, which surprised everyone.</i></li></ul>',
      vocab: [
        ['whose', 'cuyo/a', 'The woman whose bag was stolen cried.'],
        ['which', 'el cual, lo que (cosas)', 'The tool, which is free, works well.'],
        ['where', 'donde', 'This is the city where I was born.'],
        ['defining clause', 'oración definitiva', 'A defining clause has no commas.'],
        ['non-defining clause', 'oración no definitiva', 'A non-defining clause adds extra information.'],
        ['stored', 'almacenado', 'The files stored here are old.'],
        ['standing', 'de pie', 'The man standing there is my boss.'],
        ['surprised', 'sorprendido', 'Everyone was surprised by the news.'],
        ['stolen', 'robado', 'The stolen laptop was found.'],
        ['employee', 'empleado', 'The employee who called is new.']
      ],
      ex: [
        mc('The engineer ___ laptop was stolen called the police.', ['whose', 'who', 'which'], 0),
        mc('My brother, ___ lives in Spain, is a pilot.', ['who', 'that', 'whom he'], 0, 'En oraciones entre comas no se usa <i lang="en">that</i>.'),
        mc('The files ___ in this folder are old.', ['stored', 'storing', 'are stored'], 0),
        fill('That is the city ___ I was born. (where)', 'where'),
        mc('He passed the exam, ___ surprised everyone.', ['which', 'what', 'who'], 0),
        order('El hombre que me llamó es mi jefe.', 'The man who called me is my boss.')
      ],
      read: {
        t: "The company, which was founded in 2012, hires people who enjoy solving problems. The office where I work is on the tenth floor, and the colleague whose desk is next to mine is an expert in networks. The project we are developing, which will launch in March, helps people who live far from banks. The users who tested it last month gave us feedback that improved the design, and the report written by our team was approved immediately.",
        tr: 'La empresa, que fue fundada en 2012, contrata personas a quienes les gusta resolver problemas. La oficina donde trabajo está en el piso diez y el colega cuyo escritorio está junto al mío es experto en redes. El proyecto que desarrollamos, que se lanzará en marzo, ayuda a personas que viven lejos de los bancos. Los usuarios que lo probaron el mes pasado nos dieron comentarios que mejoraron el diseño y el informe escrito por nuestro equipo fue aprobado de inmediato.',
        q: [mc('When was the company founded?', ['In 2012', 'In March', 'Last month'], 0), mc('What does the project help?', ['People who live far from banks', 'People who work at night', 'People who study networks'], 0), mc('What was approved immediately?', ['The report written by the team', 'The new office', 'The launch date'], 0)]
      },
      write: { p: 'Escribe 4 frases sobre tu trabajo, tu universidad o tu ciudad usando who, which, whose y where (al menos una con comas).', m: 'My university, which is in Latacunga, has a new lab. The teacher who teaches networks is very good. I have a friend whose father is an engineer. This is the room where we study.' },
      q: 'relative clauses defining non-defining reduced English B2',
      listen: { d: [['Ana', 'Who is the man standing next to the door?'], ['Leo', 'That is Carlos, who runs the network team. He is the one whose idea saved the project.'], ['Ana', 'Is he the engineer that fixed the server last week?'], ['Leo', 'Yes, and the report written by his team, which is on my desk, explains everything.'], ['Ana', 'Great. Can you introduce me? I want to ask about the course where he learned security.'], ['Leo', 'Sure. He loves talking about it.']],
        q: [mc('¿Quién es Carlos?', ['The head of the network team', 'A new student', 'A manager of sales'], 0), mc('¿Dónde está el informe?', ['On Leo\'s desk', 'In the server', 'On the door'], 0), mc('¿Qué quiere preguntar Ana?', ['About a security course', 'About a job', 'About a holiday'], 0)] },
      quiz: [
        mc('The woman ___ phone rang left the room.', ['whose', 'who', 'which'], 0),
        mc('This is the office ___ I work.', ['where', 'which', 'whose'], 0),
        mc('Quito, ___ is the capital, is very high.', ['which', 'that', 'what'], 0),
        mc('The students ___ passed the test were happy.', ['who', 'whose', 'where'], 0),
        mc('The email ___ yesterday was important.', ['sent', 'sending', 'sends'], 0),
        fill('The woman ___ car was stolen is angry. (whose)', 'whose'),
        order('El proyecto que desarrollamos es útil.', 'The project that we developed is useful.'),
        hear(['The man who called me is here.', 'The man who killed me is here.', 'The man who called me was here.'], 0, 'Se oía «called me is here».')
      ]
    },

    {
      id: 'g32', track: 'general', level: 'B2', title: 'Futuro continuo y futuro perfecto', en: 'Future continuous and future perfect',
      explain:
        '<p><b>Futuro continuo</b> (<i lang="en">will be + -ing</i>): una acción <b>en progreso</b> en un momento del futuro.</p>' +
        '<p><i lang="en">This time next week, I will be lying on a beach.</i></p>' +
        '<p><b>Futuro perfecto</b> (<i lang="en">will have + participio</i>): una acción <b>terminada antes</b> de un momento del futuro.</p>' +
        '<p><i lang="en">By 2030, they will have finished the project.</i></p>' +
        '<table><tr><th>Palabras clave</th></tr>' +
        '<tr><td><i lang="en">by + tiempo, by the time, before, already</i> → futuro perfecto</td></tr>' +
        '<tr><td><i lang="en">this time tomorrow, at 8 o\'clock tonight, in the next hour</i> → futuro continuo</td></tr></table>' +
        '<p>El futuro continuo también es una forma <b>cortés</b> de preguntar planes: <i lang="en">Will you be using the laptop tonight?</i></p>',
      vocab: [
        ['by the time', 'para cuando', 'By the time you arrive, we will have left.'],
        ['by then', 'para entonces', 'I will have finished by then.'],
        ['this time next week', 'a esta hora la próxima semana', 'This time next week I will be travelling.'],
        ['deadline', 'fecha límite', 'We will have met the deadline by Friday.'],
        ['complete', 'completar', 'They will have completed the project by May.'],
        ['launch', 'lanzar', 'We will launch the app in June.'],
        ['upgrade', 'actualizar, mejorar', 'The servers will have been upgraded by Monday.'],
        ['already', 'ya', 'I will already have left.'],
        ['in the middle of', 'en medio de', 'I will be in the middle of a meeting.'],
        ['retire', 'jubilarse', 'My father will have retired by 2030.']
      ],
      ex: [
        mc('This time next week, I ___ on a beach.', ['will be lying', 'will have lain', 'lie'], 0),
        mc('By 2030, they ___ the project.', ['will have finished', 'will be finishing', 'finish'], 0),
        mc("Don't call at 8. I ___ dinner.", ['will be having', 'will have', 'have had'], 0),
        fill('By the time you arrive, we ___ already left. (will have)', 'will have'),
        mc('Which sentence describes an action in progress at a future moment?', ['At noon I will be presenting.', 'By noon I will have presented.', 'I presented at noon.'], 0),
        order('Habré terminado al mediodía.', 'I will have finished by noon.')
      ],
      read: {
        t: "By the end of this year, our team will have launched three new apps. Right now we are testing the last one, and by next Friday we will have fixed the main bugs. This time next month, I will be presenting the results to the board, so I won't be answering emails that day. If everything goes well, by 2028 the company will have doubled its users, and I will probably be leading a bigger team. Of course, plans can change, but I like to imagine where I will be in a few years.",
        tr: 'Para fines de este año, nuestro equipo habrá lanzado tres aplicaciones nuevas. Ahora estamos probando la última y para el próximo viernes habremos corregido los errores principales. A esta hora el próximo mes, estaré presentando los resultados a la junta, así que ese día no estaré respondiendo correos. Si todo sale bien, para 2028 la empresa habrá duplicado sus usuarios y probablemente yo estaré dirigiendo un equipo más grande. Por supuesto, los planes pueden cambiar, pero me gusta imaginar dónde estaré en unos años.',
        q: [mc('How many apps will the team have launched by the end of the year?', ['Three', 'Two', 'Five'], 0), mc('What will the writer be doing this time next month?', ['Presenting results to the board', 'Testing the last app', 'Answering emails'], 0), mc('What will have happened by 2028 if all goes well?', ['The company will have doubled its users', 'The writer will have retired', 'The apps will have closed'], 0)]
      },
      write: { p: 'Escribe 4 frases sobre tu futuro: dos con futuro perfecto (By 2030 I will have…) y dos con futuro continuo (This time next year I will be…).', m: 'By 2030 I will have finished my degree. By then I will have learned fluent English. This time next year I will be studying at university. In five years I will be working in cybersecurity.' },
      q: 'future continuous future perfect English B2',
      listen: { d: [['Ana', 'Can we meet tomorrow afternoon?'], ['Leo', 'Not at three. I will be giving a presentation to the board then.'], ['Ana', 'What about five? Will you have finished by then?'], ['Leo', 'Yes, I will have finished by four thirty at the latest.'], ['Ana', 'Perfect. By then I will have sent you the final report, so we can review it together.'], ['Leo', "Great. And don't worry, I won't be checking my phone during the meeting."]],
        q: [mc('¿Qué hará Leo mañana a las tres?', ['A presentation', 'A meeting with Ana', 'A trip'], 0), mc('¿A qué hora habrá terminado como máximo?', ['At four thirty', 'At five', 'At three'], 0), mc('¿Qué habrá enviado Ana?', ['The final report', 'A new phone', 'An invitation'], 0)] },
      quiz: [
        mc('By next June, I ___ my course.', ['will have completed', 'will be completing', 'complete'], 0),
        mc('At 9 tonight, she ___ a film.', ['will be watching', 'will have watched', 'watches'], 0),
        mc('Will you ___ the car tonight? (pregunta cortés)', ['be using', 'have used', 'use to'], 0),
        mc('By the time we get there, the show ___.', ['will have started', 'will be starting', 'is started'], 0),
        fill('This time tomorrow, I ___ flying to Madrid. (will be)', 'will be'),
        fill('They ___ have finished by Friday. (will)', 'will'),
        order('A esta hora mañana estaré viajando.', 'This time tomorrow I will be travelling.'),
        hear(['I will have finished by noon.', 'I will be finishing by noon.', 'I have finished at noon.'], 0, 'Se oía el futuro perfecto.')
      ]
    }

  );
})();
