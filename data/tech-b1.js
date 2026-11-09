/* Inglés técnico, nivel B1 (parte 2): t11 a t15. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 't11', track: 'tech', level: 'B1', title: 'Phrasal verbs de TI', en: 'IT phrasal verbs',
      explain:
        '<p>En TI se usan muchos phrasal verbs. Mira que a veces hay <b>verbo</b> (dos palabras) y <b>sustantivo</b> (una palabra):</p>' +
        '<table><tr><th>Verbo (2 palabras)</th><th>Sustantivo / adjetivo (1 palabra)</th></tr>' +
        '<tr><td><i lang="en">log in</i> — iniciar sesión</td><td><i lang="en">login</i> — inicio de sesión</td></tr>' +
        '<tr><td><i lang="en">back up</i> — respaldar</td><td><i lang="en">backup</i> — copia de seguridad</td></tr>' +
        '<tr><td><i lang="en">set up</i> — configurar</td><td><i lang="en">setup</i> — configuración</td></tr></table>' +
        '<p><i lang="en">Please log in. Check the login page. Back up your files. Keep a backup.</i></p>' +
        '<p>Otros muy usados: <i lang="en">shut down</i> (apagar), <i lang="en">plug in</i> (conectar), <i lang="en">look into</i> (investigar), <i lang="en">roll back</i> (volver a una versión anterior), <i lang="en">rule out</i> (descartar).</p>',
      vocab: [
        ['log in', 'iniciar sesión', 'Please log in with your account.'],
        ['log out', 'cerrar sesión', 'Do not forget to log out.'],
        ['sign up', 'registrarse', 'You need to sign up first.'],
        ['back up', 'respaldar', 'Back up your files every week.'],
        ['shut down', 'apagar (el sistema)', 'The server will shut down at night.'],
        ['plug in', 'conectar', 'Plug in the charger, please.'],
        ['set up', 'configurar', 'I will set up the new router.'],
        ['look into', 'investigar', 'We are looking into the problem.'],
        ['roll back', 'revertir a una versión anterior', 'We had to roll back the update.'],
        ['rule out', 'descartar', 'We ruled out a network failure.']
      ],
      ex: [
        mc('You need to ___ with your username and password.', ['log in', 'login', 'logging in'], 0, 'Verbo = dos palabras: <i lang="en">log in</i>.'),
        mc('Remember to ___ your files every week.', ['back up', 'backup', 'back on'], 0),
        fill('The system will ___ down at midnight. (apagar)', 'shut'),
        mc('We are ___ the problem. (investigando)', ['looking into', 'looking up', 'looking for'], 0),
        order('Conecta el cable.', ['Plug in the cable.', 'Plug the cable in.']),
        mc('If the update fails, we must ___ .', ['roll back', 'roll up', 'roll on'], 0)
      ],
      read: {
        t: 'Maria is the IT admin of a small company. This morning, a user could not log in. Maria looked into the problem and ruled out a network failure. The cause was a new update. She rolled back the update, and the user was able to log in again. After that, she backed up the server and set up an alert for future problems.',
        tr: 'María es la administradora de TI de una empresa pequeña. Esta mañana, un usuario no podía iniciar sesión. María investigó el problema y descartó una falla de red. La causa fue una actualización nueva. Ella revirtió la actualización y el usuario pudo iniciar sesión otra vez. Después, respaldó el servidor y configuró una alerta para problemas futuros.',
        q: [mc('What did Maria rule out?', ['A network failure', 'A virus', 'A stolen laptop'], 0), mc('How did she fix the problem?', ['She rolled back the update', 'She bought a router', 'She changed the user'], 0)]
      },
      write: { p: 'Escribe 4 frases con phrasal verbs de TI sobre tu computadora, tu clase o tu trabajo.', m: 'I log in to the portal every morning. I back up my files every Friday. Yesterday I set up a new router. We are looking into a Wi-Fi problem.' },
      q: 'IT phrasal verbs log in back up shut down',
      listen: { d: [['Boss', 'The system is down. Can you look into it?'], ['Tech', 'Sure. I will shut it down and set it up again.'], ['Boss', 'Did you back up the data first?'], ['Tech', 'Yes, I backed it up this morning. If it fails, I will roll back the update.'], ['Boss', 'Good. Please log in and send me a status update.']],
        q: [mc('¿Qué pide el jefe?', ['Look into the problem', 'Buy a new server', 'Go home'], 0), mc('¿Cuándo se hizo el respaldo?', ['This morning', 'Last week', 'Last night'], 0), mc('¿Qué hará el técnico si falla?', ['Roll back the update', 'Call the manager', 'Format the disk'], 0)] },
      quiz: [
        mc('Please ___ before you leave. (cerrar sesión)', ['log out', 'logout', 'log on'], 0),
        mc('Keep a ___ of your database.', ['backup', 'back up', 'back on'], 0),
        mc('We need to ___ the server before the update.', ['shut down', 'shutdown it', 'shut it'], 0),
        fill('Please ___ in the cable before you start. (conecta)', 'plug'),
        fill('We ruled ___ a virus. (descartamos)', 'out'),
        order('Registrarse es gratis.', 'It is free to sign up.'),
        mc('«Roll back» significa…', ['volver a una versión anterior', 'rodar hacia atrás', 'borrar todo'], 0),
        hear(['log in', 'log on', 'look in'], 0, 'Se oía «log in».')
      ]
    },

    {
      id: 't12', track: 'tech', level: 'B1', title: 'Línea de comandos: leer y dar instrucciones', en: 'The command line',
      explain:
        '<p>En Linux y en la terminal las instrucciones se dan con el <b>imperativo</b> (<i lang="en">Open… Type… Press…</i>). Aprende los comandos más comunes y cómo se dicen en inglés:</p>' +
        '<table><tr><th>Comando</th><th>Significa</th><th>En inglés</th></tr>' +
        '<tr><td><code>ls</code></td><td>listar archivos</td><td><i lang="en">list</i></td></tr>' +
        '<tr><td><code>cd</code></td><td>cambiar de carpeta</td><td><i lang="en">change directory</i></td></tr>' +
        '<tr><td><code>cp</code> / <code>mv</code> / <code>rm</code></td><td>copiar / mover / eliminar</td><td><i lang="en">copy / move / remove</i></td></tr>' +
        '<tr><td><code>mkdir</code></td><td>crear carpeta</td><td><i lang="en">make directory</i></td></tr>' +
        '<tr><td><code>sudo</code></td><td>ejecutar como administrador</td><td><i lang="en">superuser do</i></td></tr></table>' +
        '<p>Mensajes comunes: <i lang="en">Permission denied</i> (no tienes permiso), <i lang="en">No such file or directory</i> (no existe).</p>' +
        '<p><b>Cuidado:</b> <code>rm</code> elimina sin papelera. Y <code>sudo</code> da poder total: úsalo solo cuando entiendas el comando.</p>',
      vocab: [
        ['command', 'comando', 'Type the command and press Enter.'],
        ['directory', 'directorio, carpeta', 'Go to the home directory.'],
        ['permission', 'permiso', 'You need permission to do that.'],
        ['list', 'listar', 'List all the files here.'],
        ['create', 'crear', 'Create a new folder.'],
        ['move', 'mover', 'Move the file to the backup folder.'],
        ['remove', 'eliminar', 'Remove the old files.'],
        ['path', 'ruta', 'What is the full path?'],
        ['root', 'administrador (root)', 'Run it as root.'],
        ['output', 'salida, resultado', 'Read the output carefully.']
      ],
      ex: [
        mc('Which command shows the files in a directory?', ['ls', 'cd', 'mv'], 0),
        mc('To copy a file you use…', ['cp', 'rm', 'pwd'], 0),
        mc('«Permission denied» significa…', ['No tienes permiso', 'Archivo copiado', 'Comando nuevo'], 0),
        fill('To go to another directory, type ___ . (change directory)', 'cd'),
        order('Escribe el comando.', 'Type the command.'),
        mc('Be careful: the command rm ___ files.', ['removes', 'copies', 'lists'], 0)
      ],
      read: {
        t: 'To create a backup folder, open the terminal. Type mkdir backup and press Enter. Then copy your file with the command cp notes.txt backup. To see the result, type ls backup. If you see "Permission denied", you do not have permission. You can use sudo, but be careful: sudo runs the command as root.',
        tr: 'Para crear una carpeta de respaldo, abre la terminal. Escribe mkdir backup y presiona Enter. Luego copia tu archivo con el comando cp notes.txt backup. Para ver el resultado, escribe ls backup. Si ves "Permission denied", no tienes permiso. Puedes usar sudo, pero ten cuidado: sudo ejecuta el comando como root.',
        q: [mc('Which command creates a folder?', ['mkdir', 'cp', 'ls'], 0), mc('What does sudo do?', ['Runs a command as root', 'Deletes a file', 'Lists the files'], 0)]
      },
      write: { p: 'Escribe 4 instrucciones en inglés para otra persona, como en un tutorial (Open… Type… Press…).', m: 'Open the terminal. Type ls and press Enter. Copy the file to the backup folder. Do not remove the original file.' },
      q: 'Linux command line basics for beginners ls cd cp',
      listen: { d: [['Teacher', 'Open the terminal and type ls to list the files.'], ['Student', 'I see three files. How can I copy one?'], ['Teacher', 'Use cp, then the file name, then the folder. For example: cp report.txt backup.'], ['Student', 'It says permission denied.'], ['Teacher', 'You do not have permission. Use sudo, but be careful. It runs the command as root.']],
        q: [mc('¿Qué comando lista los archivos?', ['ls', 'cp', 'cd'], 0), mc('¿Qué error ve el estudiante?', ['Permission denied', 'File not found', 'Disk full'], 0), mc('¿Qué hace sudo?', ['Runs a command as root', 'Copies files', 'Deletes files'], 0)] },
      quiz: [
        mc('Which command moves a file?', ['mv', 'ls', 'cd'], 0),
        mc('Which command removes a file?', ['rm', 'cp', 'pwd'], 0),
        mc('«No such file or directory» significa…', ['No existe ese archivo o carpeta', 'Archivo muy grande', 'Carpeta vacía'], 0),
        fill('Type the ___ and press Enter. (comando)', 'command'),
        fill('The ___ of the file is /home/ana/notes.txt. (ruta)', 'path'),
        order('Crea una carpeta nueva.', 'Create a new folder.'),
        mc('Run the command as ___ to get full access.', ['root', 'output', 'path'], 0),
        hear(['list', 'least', 'lost'], 0, 'Se oía «list».')
      ]
    },

    {
      id: 't13', track: 'tech', level: 'B1', title: 'Ataques web e ingeniería social', en: 'Web attacks and social engineering',
      explain:
        '<p>Para explicar <b>cómo funciona un ataque</b> se usan el presente simple (cómo ocurre en general) y el pasivo (qué le pasó a los datos):</p>' +
        '<ul><li><i lang="en">The attacker sends a fake email.</i></li><li><i lang="en">The credentials are stolen.</i></li><li><i lang="en">The website was flooded with traffic.</i></li></ul>' +
        '<table><tr><th>Ataque</th><th>Idea en una frase</th></tr>' +
        '<tr><td><i lang="en">social engineering</i></td><td>engañar a personas para obtener acceso</td></tr>' +
        '<tr><td><i lang="en">brute-force attack</i></td><td>probar miles de contraseñas hasta acertar</td></tr>' +
        '<tr><td><i lang="en">DDoS attack</i></td><td>saturar un sitio con tráfico para tumbarlo</td></tr>' +
        '<tr><td><i lang="en">SQL injection</i></td><td>meter código en un formulario para leer la base de datos</td></tr></table>' +
        '<p>Para el <b>propósito</b> usa <i lang="en">to + verbo</i>: <i lang="en">Attackers use phishing to steal credentials.</i></p>',
      vocab: [
        ['social engineering', 'ingeniería social', 'Social engineering tricks people, not computers.'],
        ['impersonate', 'hacerse pasar por', 'The caller impersonated an IT technician.'],
        ['credentials', 'credenciales', 'The attacker stole my credentials.'],
        ['brute-force attack', 'ataque de fuerza bruta', 'A brute-force attack tries many passwords.'],
        ['DDoS attack', 'ataque de denegación de servicio', 'The DDoS attack stopped the website.'],
        ['SQL injection', 'inyección SQL', 'SQL injection targets the database.'],
        ['spoofing', 'suplantación', 'Email spoofing hides the real sender.'],
        ['exploit', 'aprovechar (una falla) / exploit', 'Attackers exploit old vulnerabilities.'],
        ['zero-day', 'vulnerabilidad aún sin parche', 'A zero-day has no patch yet.'],
        ['insider threat', 'amenaza interna', 'An insider threat comes from an employee.']
      ],
      ex: [
        mc('Attackers try many passwords in a ___ attack.', ['brute-force', 'firewall', 'offline'], 0),
        mc('A ___ attack floods a website with traffic.', ['DDoS', 'spoofing', 'insider'], 0),
        mc('Social engineering tricks ___ .', ['people', 'routers', 'cables'], 0),
        fill('The attacker ___ a manager to get access. (hacerse pasar por, pasado)', 'impersonated'),
        order('Las credenciales fueron robadas.', 'The credentials were stolen.'),
        mc('A ___ is a vulnerability without a patch yet.', ['zero-day', 'backup', 'ticket'], 0)
      ],
      read: {
        t: 'Last month, a company suffered a social engineering attack. A caller impersonated an IT technician and asked an employee for his credentials. The employee gave the password, and the attacker logged in to the system. Later, the company found a second problem: someone tried a brute-force attack on the VPN. To reduce the risk, the company trains its staff and uses two-factor authentication.',
        tr: 'El mes pasado, una empresa sufrió un ataque de ingeniería social. Una persona que llamó se hizo pasar por técnico de TI y pidió sus credenciales a un empleado. El empleado dio la contraseña y el atacante entró al sistema. Después, la empresa encontró un segundo problema: alguien intentó un ataque de fuerza bruta contra la VPN. Para reducir el riesgo, la empresa capacita a su personal y usa autenticación de dos factores.',
        q: [mc('What did the caller pretend to be?', ['An IT technician', 'A manager', 'A customer'], 0), mc('How does the company reduce the risk?', ['It trains staff and uses 2FA', 'It buys new laptops', 'It closes the office'], 0)]
      },
      write: { p: 'Explica en 4 frases cómo funciona UN ataque (phishing, fuerza bruta o ingeniería social) y cómo protegerse.', m: 'In a phishing attack, the attacker sends a fake email. The user clicks a link and enters a password. The credentials are stolen. To protect yourself, never click unknown links and use two-factor authentication.' },
      q: 'social engineering attacks explained brute force DDoS',
      listen: { d: [['Trainer', 'Today we talk about social engineering. An attacker calls you and impersonates a technician.'], ['Employee', 'What does the attacker want?'], ['Trainer', 'Usually your credentials. Never give your password by phone or by email.'], ['Employee', 'What about brute-force attacks?'], ['Trainer', 'Those try thousands of passwords. That is why we use long passwords and two-factor authentication.']],
        q: [mc('¿Qué hace el atacante en la llamada?', ['Pretends to be a technician', 'Sells a product', 'Asks for a ticket'], 0), mc('¿Qué quiere normalmente?', ['Your credentials', 'Your photos', 'Your address'], 0), mc('¿Cómo se defienden de la fuerza bruta?', ['Long passwords and 2FA', 'Turning off the router', 'Deleting emails'], 0)] },
      quiz: [
        mc('A caller who pretends to be IT is using social ___ .', ['engineering', 'network', 'backup'], 0),
        mc('A ___ attack makes a website unavailable.', ['DDoS', 'zero', 'login'], 0),
        mc('Email ___ hides the real sender.', ['spoofing', 'encryption', 'download'], 0),
        fill('The attacker tried to ___ a vulnerability. (aprovechar)', 'exploit'),
        fill('Never share your ___ with anyone. (credenciales)', 'credentials'),
        order('El ataque fue detectado.', 'The attack was detected.'),
        mc('«Insider threat» significa…', ['amenaza interna', 'amenaza externa', 'amenaza de internet'], 0),
        hear(['attack', 'a tack', 'attach'], 0, 'Se oía «attack».')
      ]
    },

    {
      id: 't14', track: 'tech', level: 'B1', title: 'Leer un aviso de seguridad (advisory / CVE)', en: 'Reading a security advisory',
      explain:
        '<p>Los fabricantes publican <b>avisos de seguridad</b> (<i lang="en">security advisories</i>) cuando encuentran una vulnerabilidad. Casi todos tienen la misma estructura:</p>' +
        '<table><tr><th>Sección</th><th>Qué dice</th></tr>' +
        '<tr><td><i lang="en">Summary</i></td><td>qué falla hay</td></tr><tr><td><i lang="en">Affected versions</i></td><td>qué versiones tienen el problema</td></tr>' +
        '<tr><td><i lang="en">Severity</i></td><td>gravedad: <i lang="en">Low, Medium, High, Critical</i></td></tr>' +
        '<tr><td><i lang="en">Solution / Mitigation</i></td><td>cómo arreglarlo (parche) o reducir el riesgo</td></tr></table>' +
        '<p>Frases típicas: <i lang="en">is affected by…, allows an attacker to…, has been fixed in version…, users are advised to update, if you cannot update…</i></p>' +
        '<p>Un <b>CVE</b> (<i lang="en">Common Vulnerabilities and Exposures</i>) es un número público que identifica cada vulnerabilidad conocida.</p>',
      vocab: [
        ['advisory', 'aviso (de seguridad)', 'Read the security advisory first.'],
        ['affected version', 'versión afectada', 'Check if your version is affected.'],
        ['severity', 'gravedad', 'The severity is critical.'],
        ['critical', 'crítico', 'This is a critical vulnerability.'],
        ['remote code execution', 'ejecución remota de código', 'Remote code execution is very dangerous.'],
        ['mitigation', 'mitigación (reducción del riesgo)', 'The advisory explains a mitigation.'],
        ['patch available', 'parche disponible', 'A patch is available for this bug.'],
        ['recommended', 'recomendado', 'The recommended action is to update.'],
        ['fixed in', 'corregido en (versión)', 'It was fixed in version 2.5.'],
        ['allows an attacker to', 'permite a un atacante', 'It allows an attacker to read files.']
      ],
      ex: [
        mc('«Severity: Critical» means the problem is…', ['very serious', 'not important', 'already solved'], 0),
        mc('«Affected versions: 2.0 to 2.4». Which version is affected?', ['2.3', '2.5', '3.0'], 0),
        fill('A patch is ___ in version 2.5. (disponible)', 'available'),
        mc('«Users are advised to update» means…', ['Se recomienda actualizar', 'Se prohíbe actualizar', 'Se actualizó solo'], 0),
        order('Actualiza lo antes posible.', 'Update as soon as possible.'),
        mc('A CVE is…', ['a public ID for a vulnerability', 'a type of firewall', 'a kind of malware'], 0)
      ],
      read: {
        t: 'Security advisory. Summary: A vulnerability was found in ExampleApp. It allows an attacker to run code on the server without a password. Severity: Critical. Affected versions: 2.0 to 2.4. Solution: A patch is available in version 2.5. Users are advised to update immediately. Workaround: If you cannot update, disable the remote access feature.',
        tr: 'Aviso de seguridad. Resumen: Se encontró una vulnerabilidad en ExampleApp. Permite a un atacante ejecutar código en el servidor sin contraseña. Gravedad: Crítica. Versiones afectadas: 2.0 a 2.4. Solución: Hay un parche disponible en la versión 2.5. Se recomienda actualizar de inmediato. Solución alternativa: si no puedes actualizar, desactiva la función de acceso remoto.',
        q: [mc('Which versions are affected?', ['2.0 to 2.4', '2.5 and later', 'All versions'], 0), mc('What can users do if they cannot update?', ['Disable remote access', 'Delete the app', 'Wait for a year'], 0)]
      },
      write: { p: 'Escribe un aviso breve (4 frases) sobre una falla inventada: resumen, gravedad, versiones afectadas y solución.', m: 'Summary: A bug in MyTool allows an attacker to read private files. Severity: High. Affected versions: 1.0 to 1.3. Solution: Update to version 1.4.' },
      q: 'how to read a security advisory CVE explained',
      listen: { d: [['Lead', 'We received a new security advisory about our web server.'], ['Analyst', 'How serious is it?'], ['Lead', 'The severity is high. It allows an attacker to read private files.'], ['Analyst', 'Is our version affected?'], ['Lead', 'Yes, we use version 3.2, and the fix is in version 3.4. Please update tonight.']],
        q: [mc('¿Qué recibió el equipo?', ['A security advisory', 'A bill', 'A job offer'], 0), mc('¿Qué puede hacer el atacante?', ['Read private files', 'Break the screen', 'Send emails'], 0), mc('¿Qué versión corrige el problema?', ['3.4', '3.2', '2.0'], 0)] },
      quiz: [
        mc('The advisory says: «It allows an attacker to…». It describes the…', ['impact', 'price', 'author'], 0),
        mc('«Fixed in version 4.1» significa…', ['corregido en la versión 4.1', 'roto en la versión 4.1', 'instalado en 4.1'], 0),
        mc('If the severity is critical, you should…', ['update immediately', 'ignore it', 'wait a year'], 0),
        fill('Apply the ___ as soon as possible. (parche)', 'patch'),
        fill('The ___ is high: the risk is serious. (gravedad)', 'severity'),
        order('Hay un parche disponible.', 'A patch is available.'),
        mc('«Mitigation» es…', ['una forma de reducir el riesgo', 'un tipo de virus', 'una contraseña'], 0),
        hear(['severity', 'sincerity', 'security'], 0, 'Se oía «severity».')
      ]
    },

    {
      id: 't15', track: 'tech', level: 'B1', title: 'Escribir un informe breve de vulnerabilidad o incidente', en: 'Writing a short security report',
      explain:
        '<p>Un buen informe es <b>corto, claro y ordenado</b>. Usa estas secciones y frases:</p>' +
        '<table><tr><th>Sección</th><th>Frase modelo</th></tr>' +
        '<tr><td><i lang="en">Summary</i></td><td><i lang="en">On Monday at 9:00, we detected suspicious activity on the server.</i></td></tr>' +
        '<tr><td><i lang="en">Impact</i></td><td><i lang="en">Fifty users were affected.</i></td></tr>' +
        '<tr><td><i lang="en">Evidence</i></td><td><i lang="en">The logs show many failed logins.</i></td></tr>' +
        '<tr><td><i lang="en">Action taken</i></td><td><i lang="en">We isolated the server and reset the passwords.</i></td></tr>' +
        '<tr><td><i lang="en">Recommendation</i></td><td><i lang="en">We recommend enabling two-factor authentication.</i></td></tr></table>' +
        '<p><b>Tips:</b> usa pasado simple y pasivo para lo que pasó (<i lang="en">was detected</i>), presente para el estado actual (<i lang="en">The risk is low</i>) y <i lang="en">We recommend + -ing</i> para sugerir. Pon <b>horas y cifras</b>; evita opiniones sin evidencia.</p>',
      vocab: [
        ['summary', 'resumen', 'Start the report with a summary.'],
        ['scope', 'alcance', 'The scope was limited to one server.'],
        ['finding', 'hallazgo', 'The main finding is a weak password.'],
        ['evidence', 'evidencia', 'The logs are the evidence.'],
        ['risk rating', 'nivel de riesgo', 'The risk rating is medium.'],
        ['action taken', 'acción realizada', 'List the action taken.'],
        ['recommendation', 'recomendación', 'My recommendation is to update.'],
        ['remediation', 'corrección, remediación', 'Remediation took two hours.'],
        ['confirmed', 'confirmado', 'The breach was confirmed at noon.'],
        ['follow-up', 'seguimiento', 'We plan a follow-up next week.']
      ],
      ex: [
        mc('Which section says what happened?', ['Summary', 'Recommendation', 'Follow-up'], 0),
        mc('«Fifty users were affected» is part of the…', ['impact', 'recommendation', 'evidence request'], 0),
        fill('The logs show many failed logins. This is the ___ . (evidencia)', 'evidence'),
        mc('Para recomendar: «We recommend ___ two-factor authentication.»', ['enabling', 'to enable', 'enable'], 0),
        order('Aislamos el servidor.', 'We isolated the server.'),
        mc('¿Qué frase es mejor en un informe?', ['The server was isolated at 9:20.', 'I think the server was maybe isolated.', 'The server is bad.'], 0, 'Un informe usa hechos, horas y pasivo claro.')
      ],
      read: {
        t: 'Incident report. Summary: On Monday at 9:00, suspicious activity was detected on the file server. Impact: Fifty users could not access their files for two hours. Evidence: The logs show 3,000 failed logins from one IP address. Action taken: We blocked the address and reset the passwords. Recommendation: We recommend enabling two-factor authentication and limiting login attempts.',
        tr: 'Informe de incidente. Resumen: El lunes a las 9:00 se detectó actividad sospechosa en el servidor de archivos. Impacto: Cincuenta usuarios no pudieron acceder a sus archivos durante dos horas. Evidencia: Los registros muestran 3.000 inicios de sesión fallidos desde una dirección IP. Acción realizada: Bloqueamos la dirección y restablecimos las contraseñas. Recomendación: Recomendamos activar la autenticación de dos factores y limitar los intentos de inicio de sesión.',
        q: [mc('How long could users not access their files?', ['Two hours', 'Two days', 'Ten minutes'], 0), mc('What do the logs show?', ['Many failed logins', 'A broken cable', 'A new update'], 0)]
      },
      write: { p: 'Escribe un informe de incidente inventado en 5 frases: resumen, impacto, evidencia, acción y recomendación.', m: 'Summary: At 14:00, we detected malware on one laptop. Impact: One user lost access for one hour. Evidence: The antivirus found a suspicious file. Action taken: We isolated the laptop and removed the file. Recommendation: We recommend updating all laptops.' },
      q: 'how to write an incident report in English cybersecurity',
      listen: { d: [['Manager', 'Can you give me the summary of the incident?'], ['Analyst', 'Yes. Yesterday at three, we detected malware on one laptop. The impact was low: one user lost access for an hour.'], ['Manager', 'What was the evidence?'], ['Analyst', 'The antivirus alert and the logs. We isolated the laptop and removed the file.'], ['Manager', 'And your recommendation?'], ['Analyst', 'I recommend updating all laptops this week.']],
        q: [mc('¿Qué se detectó?', ['Malware on a laptop', 'A broken router', 'A stolen phone'], 0), mc('¿Cuál fue el impacto?', ['Low: one user for an hour', 'High: all users', 'None'], 0), mc('¿Qué recomienda el analista?', ['Update all laptops', 'Buy new laptops', 'Turn off the network'], 0)] },
      quiz: [
        mc('The ___ is the first part of a report.', ['summary', 'recommendation', 'follow-up'], 0),
        mc('«Scope» en un informe es…', ['el alcance', 'el costo', 'el autor'], 0),
        mc('We ___ enabling two-factor authentication.', ['recommend', 'recommended to', 'recommends'], 0),
        fill('The main ___ is a weak password. (hallazgo)', 'finding'),
        fill('The breach was ___ at noon. (confirmado)', 'confirmed'),
        order('El riesgo es bajo.', 'The risk is low.'),
        mc('«Remediation» significa…', ['corrección del problema', 'resumen', 'evidencia'], 0),
        hear(['report', 'resort', 'support'], 0, 'Se oía «report».')
      ]
    }
  );
})();
