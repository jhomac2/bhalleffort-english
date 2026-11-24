/* Escucha y prueba de dominio, nivel B1 (lecciones existentes). */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;

  EL.extend('g19', {
    listen: { d: [['Interviewer', 'How long have you worked as a technician?'], ['Mateo', 'I have worked here for three years. I started in 2023.'], ['Interviewer', 'What have you learned so far?'], ['Mateo', 'I have learned a lot about networks. Recently, I have improved my English too.'], ['Interviewer', 'Did you live in another city before?'], ['Mateo', 'Yes, I lived in Guayaquil until 2022. I have lived here since then.']],
      q: [mc('¿Cuánto tiempo lleva trabajando Mateo?', ['Three years', 'Five years', 'One year'], 0), mc('¿Qué ha mejorado recientemente?', ['His English', 'His salary', 'His office'], 0), mc('¿Dónde vivía antes?', ['Guayaquil', 'Cuenca', 'Quito'], 0)] },
    quiz: [
      mc('I have lived here ___ 2020.', ['for', 'since', 'ago'], 1, 'since + punto de inicio.'),
      mc('She has worked here ___ five years.', ['for', 'since', 'ago'], 0, 'for + duración.'),
      mc('I ___ to Spain in 2019.', ['went', 'have gone', 'have been going'], 0, 'Con un año terminado se usa pasado simple.'),
      mc('I have ___ my English lately.', ['improved', 'improve', 'improving'], 0),
      fill('They have ___ in Lima for two years. (live)', 'lived'),
      fill('He ___ the course last month. (finish)', 'finished'),
      order('Trabajo aquí desde 2022.', ['I have worked here since 2022.', 'Since 2022 I have worked here.']),
      hear(['I have lived here.', 'I lived here.', 'I will live here.'], 0, 'Se oía «I have lived here».')
    ]
  });

  EL.extend('g20', {
    listen: { d: [['Ana', 'If I pass the exam, I will start a new course.'], ['Leo', 'And if you fail?'], ['Ana', 'If I fail, I will study more and try again.'], ['Leo', 'If I were you, I would not worry so much.'], ['Ana', 'You are right. Unless I am sick, I will go to the exam tomorrow.'], ['Leo', 'Hurry up, or you will miss the bus!']],
      q: [mc('¿Qué hará Ana si aprueba?', ['Start a new course', 'Travel', 'Rest'], 0), mc('¿Qué hará si reprueba?', ['Study more and try again', 'Quit', 'Change career'], 0), mc('¿Qué dice Leo al final?', ['Hurry up or you will miss the bus', 'Stay home', 'Take a taxi'], 0)] },
    quiz: [
      mc('If it rains, we ___ at home.', ['will stay', 'would stay', 'stayed'], 0),
      mc('If I ___ rich, I would buy a house.', ['am', 'were', 'will be'], 1),
      mc('We will not go ___ it stops raining.', ['unless', 'if', 'because'], 0),
      fill('If you hurry, you ___ miss the train. (no)', ["won't", 'will not']),
      fill('I ___ help you if I could. (condicional)', 'would'),
      order('Si llueve, me quedaré en casa.', ['If it rains, I will stay at home.', 'I will stay at home if it rains.']),
      mc('¿Cuál es correcta?', ['If I will see him, I tell him.', 'If I see him, I will tell him.', 'If I see him, I would tell him.'], 1),
      hear(['I will go.', 'I would go.', 'I will not go.'], 1, 'Se oía «would».')
    ]
  });

  EL.extend('g21', {
    listen: { d: [['Boss', 'What happened to the server?'], ['Tech', 'It was restarted at nine. The update was installed last night.'], ['Boss', 'Was any data deleted?'], ['Tech', 'No. All files were saved first. The problem was fixed in ten minutes.'], ['Boss', 'Good. Please send a report.'], ['Tech', 'The report will be sent today.']],
      q: [mc('¿Cuándo se reinició el servidor?', ['At nine', 'At ten', 'At noon'], 0), mc('¿Se borraron datos?', ['No', 'Yes', 'Some files'], 0), mc('¿Cuándo se enviará el reporte?', ['Today', 'Tomorrow', 'Next week'], 0)] },
    quiz: [
      mc('The file ___ deleted yesterday.', ['was', 'were', 'be'], 0),
      mc('The passwords ___ stolen.', ['was', 'were', 'be'], 1),
      mc('The report ___ sent tomorrow.', ['is', 'will be', 'was'], 1),
      fill('The server was ___ at night. (restart)', 'restarted'),
      fill('All users ___ required to change their passwords. (are)', 'are'),
      order('El error fue arreglado.', 'The bug was fixed.'),
      mc('«The bug was fixed» significa…', ['El error fue arreglado', 'El error arregló', 'El error se escribió'], 0),
      hear(['It was sent.', 'It was cent.', 'It was spent.'], 0, 'Se oía «sent».')
    ]
  });

  EL.extend('g22', {
    listen: { d: [['Ana', 'My teacher said that I was improving fast.'], ['Leo', 'Nice! Who is your teacher?'], ['Ana', 'She is the woman who works at the language center.'], ['Leo', 'And she told you to practice listening?'], ['Ana', 'Yes. She suggested that I listen to a podcast every day, which is a good idea.'], ['Leo', 'I agree.']],
      q: [mc('¿Qué dijo la profesora?', ['That Ana was improving fast', 'That Ana failed', 'That Ana is late'], 0), mc('¿Dónde trabaja la profesora?', ['At the language center', 'At a bank', 'At a hospital'], 0), mc('¿Qué sugirió?', ['Listen to a podcast every day', 'Read a book', 'Travel abroad'], 0)] },
    quiz: [
      mc('The man ___ called you is my boss.', ['who', 'which', 'what'], 0),
      mc('The laptop ___ I bought is fast.', ['who', 'that', 'where'], 1),
      mc('She said that she ___ tired.', ['is', 'was', 'will be'], 1),
      fill('He ___ me that the meeting was cancelled.', 'told'),
      fill('She ___ that I should rest. (suggest, pasado)', 'suggested'),
      order('La mujer que trabaja aquí es mi tía.', 'The woman who works here is my aunt.'),
      mc('«I disagree» significa…', ['no estoy de acuerdo', 'estoy de acuerdo', 'no entiendo'], 0),
      hear(['She said that.', 'She sat that.', 'She set that.'], 0, 'Se oía «said».')
    ]
  });

  EL.extend('v08', {
    listen: { d: [['Sofia', 'Hi! Is this your first time here?'], ['Jake', 'Yes, it is. I arrived yesterday. What brings you here?'], ['Sofia', 'I am studying English for three months. How about you?'], ['Jake', 'I am traveling around South America. The weather here is great!'], ['Sofia', 'Sounds great! By the way, do you want to join us for dinner tonight?'], ['Jake', 'Sure! Thanks.']],
      q: [mc('¿Cuándo llegó Jake?', ['Yesterday', 'Today', 'Last week'], 0), mc('¿Qué hace Sofia ahí?', ['Studying English', 'Working', 'Visiting family'], 0), mc('¿A qué invita Sofia a Jake?', ['Dinner', 'A tour', 'A movie'], 0)] },
    quiz: [
      mc('— What brings you here? — ___', ['I am here for work.', 'I am fine, thanks.', 'Yes, I do.'], 0),
      mc('«Sounds great!» significa…', ['¡Suena genial!', '¡Suena fuerte!', '¡Qué ruido!'], 0),
      fill('Nice talking to you. Let us keep in ___ . (en contacto)', 'touch'),
      fill('By the ___ , are you free tonight? (a propósito)', 'way'),
      mc('Para despedirte de forma amable:', ['Take care!', 'Take it!', 'Make care!'], 0),
      order('¿Y tú?', 'How about you?'),
      mc('«Small talk» es…', ['conversación informal', 'discusión', 'entrevista'], 0),
      hear(['really', 'rarely', 'rally'], 0, 'Se oía «really».')
    ]
  });

  EL.extend('t08', {
    listen: { d: [['Analyst', 'At nine fifteen, an alert was triggered on the main server.'], ['Manager', 'What was the impact?'], ['Analyst', 'Fifty users were affected. We isolated the server and detected malware.'], ['Manager', 'Did you escalate the incident?'], ['Analyst', 'Yes, we did. The issue was resolved at eleven. The root cause was a weak password.']],
      q: [mc('¿A qué hora se activó la alerta?', ['9:15', '9:50', '11:00'], 0), mc('¿Cuántos usuarios se afectaron?', ['Fifteen', 'Fifty', 'Five hundred'], 1), mc('¿Cuál fue la causa raíz?', ['A weak password', 'A broken cable', 'A power cut'], 0)] },
    quiz: [
      mc('The ___ is the main reason for the problem.', ['root cause', 'alert', 'timeline'], 0),
      mc('An ___ tells you something is wrong.', ['alert', 'timeline', 'ticket'], 0),
      fill('We ___ the server from the network. (aislamos)', 'isolated'),
      fill('The attack was ___ at ten. (detectado)', 'detected'),
      mc('«Impact» significa…', ['impacto', 'importe', 'imagen'], 0),
      order('Escalamos el incidente.', 'We escalated the incident.'),
      mc('«Affected users» son…', ['usuarios afectados', 'usuarios nuevos', 'usuarios ausentes'], 0),
      hear(['fifty', 'fifteen', 'sixty'], 0, 'Se oía «fifty».')
    ]
  });

  EL.extend('t09', {
    listen: { d: [['Sam', 'I found a bug in the login page.'], ['Mia', 'Did you create a branch?'], ['Sam', 'Yes. I fixed it and made a commit. Now I am opening a pull request.'], ['Mia', 'Great. I will review it this afternoon. Then we can merge and deploy.'], ['Sam', 'Please run the tests first.'], ['Mia', 'Of course.']],
      q: [mc('¿Qué encontró Sam?', ['A bug', 'A virus', 'A new feature'], 0), mc('¿Qué abre Sam ahora?', ['A pull request', 'A ticket', 'A new repository'], 0), mc('¿Qué hará Mia por la tarde?', ['Review the code', 'Deploy', 'Fix the bug'], 0)] },
    quiz: [
      mc('Save your changes with a ___ .', ['commit', 'release', 'repository'], 0),
      mc('Create a new ___ to work without breaking the main code.', ['branch', 'bug', 'test'], 0),
      fill('Please ___ my code. (revisa)', 'review'),
      fill('Run the ___ before the release. (pruebas)', 'tests'),
      mc('«Merge» significa…', ['fusionar', 'borrar', 'descargar'], 0),
      order('Encontré un error aquí.', 'I found a bug here.'),
      mc('A ___ is a place where a project is stored.', ['repository', 'pull request', 'feature'], 0),
      hear(['commit', 'comment', 'comet'], 0, 'Se oía «commit».')
    ]
  });

  EL.extend('t10', {
    listen: { d: [['Lead', 'Good morning, team. Quick update, please.'], ['Dev', 'Yesterday I finished the login page. Today I will work on the reports.'], ['Lead', 'Any blockers?'], ['Dev', 'Yes, I am blocked by a bug in the database. I need help.'], ['Lead', 'OK. Let us schedule a short meeting after this. What is the deadline?'], ['Dev', 'Friday.']],
      q: [mc('¿Qué terminó ayer el desarrollador?', ['The login page', 'The reports', 'The database'], 0), mc('¿Qué lo bloquea?', ['A database bug', 'A meeting', 'A holiday'], 0), mc('¿Cuál es la fecha límite?', ['Friday', 'Monday', 'Next month'], 0)] },
    quiz: [
      mc('Email: «I am ___ to ask about the deadline.»', ['writing', 'wrote', 'write'], 0),
      mc('Please see the ___ file.', ['attached', 'attach', 'attaching'], 0),
      fill('Best ___ , Ana. (cierre de correo)', 'regards'),
      fill('I am ___ by a bug. I cannot continue. (bloqueado)', 'blocked'),
      mc('«Deadline» significa…', ['fecha límite', 'reunión', 'informe'], 0),
      order('Quisiera dar seguimiento.', 'I would like to follow up.'),
      mc('What is the project ___ ? (estado)', ['status', 'deadline', 'ticket'], 0),
      hear(['schedule', 'shed', 'scale'], 0, 'Se oía «schedule».')
    ]
  });
})();
