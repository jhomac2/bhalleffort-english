/* Inglés técnico: TI y ciberseguridad (t01 a t10). */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order;
  EL.lessons.push(

    {
      id: 't01', track: 'tech', level: 'A1', title: 'Hardware y términos básicos de TI', en: 'Computer basics',
      explain:
        '<p>Aprende el nombre en inglés de las partes del computador. Los verás en manuales, tiendas y soporte técnico.</p>' +
        '<ul><li><i lang="en">screen / monitor</i> · <i lang="en">keyboard</i> · <i lang="en">mouse</i> · <i lang="en">printer</i></li>' +
        '<li><i lang="en">hard drive / SSD</i> (almacenamiento) · <i lang="en">memory (RAM)</i> · <i lang="en">processor (CPU)</i></li>' +
        '<li><i lang="en">battery</i> · <i lang="en">charger</i> · <i lang="en">cable</i></li></ul>' +
        '<p><b>Patrones sencillos</b> para describir fallas (usa <i lang="en">is / isn\'t</i> y <i lang="en">doesn\'t</i>):</p>' +
        '<p><i lang="en">The screen is broken. My laptop is slow. The computer doesn\'t start. The battery is low.</i></p>',
      vocab: [
        ['screen', 'pantalla', 'The screen is broken.'],
        ['keyboard', 'teclado', 'The keyboard does not work.'],
        ['mouse', 'ratón (mouse)', 'The mouse is wireless.'],
        ['charger', 'cargador', 'I need a charger.'],
        ['battery', 'batería', 'The battery is low.'],
        ['hard drive', 'disco duro', 'The hard drive is full.'],
        ['memory', 'memoria (RAM)', 'The memory is full.'],
        ['processor', 'procesador', 'The processor is fast.'],
        ['cable', 'cable', 'This cable is short.'],
        ['printer', 'impresora', 'The printer is offline.'],
        ['turn on', 'encender', 'Turn on the computer.'],
        ['turn off', 'apagar', 'Turn off the printer.']
      ],
      ex: [
        mc('Escribes con el:', ['keyboard', 'screen', 'cable'], 0),
        mc('The ___ is full. (no hay espacio para guardar archivos)', ['hard drive', 'mouse', 'charger'], 0),
        mc('Lo contrario de "turn on" es:', ['turn off', 'turn up', 'turn in'], 0),
        fill('The ___ is low. (tiene poca carga)', 'battery'),
        order('La pantalla está rota.', 'The screen is broken.'),
        order('La computadora no enciende.', "The computer doesn't start.")
      ],
      read: {
        t: 'My laptop has a problem. The screen is fine, but the keyboard doesn\'t work. The battery is low, and the hard drive is almost full. I turn off the laptop and I connect the charger. Then I call the IT department. The technician says: "Don\'t worry. I can fix it today."',
        tr: 'Mi laptop tiene un problema. La pantalla está bien, pero el teclado no funciona. La batería está baja y el disco duro está casi lleno. Apago la laptop y conecto el cargador. Luego llamo al departamento de TI. El técnico dice: "No se preocupe. Puedo arreglarlo hoy."',
        q: [
          mc('What does not work?', ['The keyboard', 'The screen', 'The mouse'], 0),
          mc('Who does the writer call?', ['A friend', 'The IT department', 'A teacher'], 1)
        ]
      },
      write: { p: 'Describe 3 problemas de tu computador o celular con is / isn\'t / doesn\'t.', m: "The battery is low. The keyboard doesn't work. The screen isn't broken." },
      q: 'computer parts English vocabulary'
    },

    {
      id: 't02', track: 'tech', level: 'A1', title: 'Leer mensajes de error y avisos', en: 'Error messages',
      explain:
        '<p>Los mensajes de error siguen patrones. Si los entiendes, resuelves más rápido.</p>' +
        '<ul><li><i lang="en">File not found</i> — archivo no encontrado</li>' +
        '<li><i lang="en">Access denied</i> — acceso denegado (no tienes permiso)</li>' +
        '<li><i lang="en">Connection failed</i> — falló la conexión</li>' +
        '<li><i lang="en">Invalid password</i> — contraseña no válida</li>' +
        '<li><i lang="en">Cannot open file</i> — no se puede abrir el archivo</li>' +
        '<li><i lang="en">Please try again</i> — inténtalo de nuevo</li>' +
        '<li><i lang="en">An unexpected error occurred</i> — ocurrió un error inesperado</li></ul>' +
        '<p><b>Patrones:</b> <i lang="en">not + adjetivo</i> (not found, not available) · <i lang="en">cannot + verbo</i> (cannot connect) · <i lang="en">failed</i> (falló) · <i lang="en">invalid</i> (no válido) · <i lang="en">denied</i> (denegado).</p>',
      vocab: [
        ['error', 'error', 'An error occurred.'],
        ['warning', 'advertencia', 'The warning is yellow.'],
        ['not found', 'no encontrado', 'File not found.'],
        ['denied', 'denegado', 'Access denied.'],
        ['failed', 'falló', 'Connection failed.'],
        ['invalid', 'no válido', 'Invalid password.'],
        ['try again', 'intentar de nuevo', 'Please try again.'],
        ['available', 'disponible', 'Update available.'],
        ['cannot', 'no se puede', 'Cannot open file.'],
        ['unexpected', 'inesperado', 'An unexpected error occurred.'],
        ['loading', 'cargando', 'The page is loading.'],
        ['save', 'guardar', 'Save your work.']
      ],
      ex: [
        mc('"File not found" significa:', ['Archivo no encontrado', 'Archivo guardado', 'Archivo eliminado'], 0),
        mc('"Access denied" significa:', ['No tienes permiso para acceder', 'Tienes acceso total', 'El archivo es nuevo'], 0),
        mc('"Invalid password" significa que la contraseña:', ['no es válida', 'es nueva', 'es muy larga'], 0),
        fill('Connection ___. Please try again. (falló)', 'failed'),
        order('Por favor, inténtalo de nuevo.', ['Please try again.', 'Try again, please.']),
        order('Archivo no encontrado.', 'File not found.')
      ],
      read: {
        t: 'Mia tries to log in to her email. The screen shows: "Invalid password. Please try again." She types it again and the screen says: "Access denied." Then she sees a new message: "Too many attempts. Try again in 30 minutes." Mia calls the support team and asks for a new password.',
        tr: 'Mia intenta iniciar sesión en su correo. La pantalla muestra: "Contraseña no válida. Inténtalo de nuevo." Ella la escribe otra vez y la pantalla dice: "Acceso denegado." Luego ve un mensaje nuevo: "Demasiados intentos. Inténtalo en 30 minutos." Mia llama al equipo de soporte y pide una contraseña nueva.',
        q: [
          mc('What does the first message say?', ['Invalid password', 'File not found', 'Connection failed'], 0),
          mc('What does Mia do at the end?', ['Calls support', 'Buys a laptop', 'Writes a report'], 0)
        ]
      },
      write: { p: 'Escribe 3 mensajes de error que hayas visto y qué significan (en inglés simple).', m: 'File not found. Connection failed. Access denied.' },
      q: 'common error messages English meaning'
    },

    {
      id: 't03', track: 'tech', level: 'A1', title: 'Redes: términos básicos de internet', en: 'Networking basics',
      explain:
        '<p>Palabras clave para hablar de redes: <i lang="en">network</i> (red), <i lang="en">router</i>, <i lang="en">Wi-Fi</i>, <i lang="en">IP address</i> (dirección IP), <i lang="en">server</i> (servidor), <i lang="en">website</i>, <i lang="en">download / upload</i> (bajar / subir), <i lang="en">speed</i>, <i lang="en">signal</i> (señal).</p>' +
        '<p><b>Frases útiles:</b></p>' +
        '<ul><li><i lang="en">The internet is slow.</i></li>' +
        '<li><i lang="en">I can\'t connect to the Wi-Fi.</i></li>' +
        '<li><i lang="en">The signal is weak.</i> (señal débil)</li>' +
        '<li><i lang="en">The server is down.</i> (el servidor no funciona)</li></ul>',
      vocab: [
        ['network', 'red', 'The network is busy.'],
        ['router', 'router, enrutador', 'Restart the router.'],
        ['signal', 'señal', 'The signal is weak.'],
        ['IP address', 'dirección IP', 'What is your IP address?'],
        ['server', 'servidor', 'The server is down.'],
        ['website', 'sitio web', 'The website is slow.'],
        ['download', 'descargar', 'Download the file.'],
        ['upload', 'subir (archivos)', 'Upload your homework.'],
        ['speed', 'velocidad', 'The internet speed is low.'],
        ['connect', 'conectar', "I can't connect to Wi-Fi."],
        ['online', 'en línea', 'The system is online.'],
        ['offline', 'sin conexión', 'The printer is offline.']
      ],
      ex: [
        mc('The signal is ___. (débil)', ['weak', 'loud', 'tall'], 0),
        mc('"The server is down" significa:', ['El servidor no funciona', 'El servidor es nuevo', 'El servidor está lleno de datos'], 0),
        mc('Pones un archivo en internet:', ['upload', 'download', 'restart'], 0),
        fill("I can't ___ to the Wi-Fi. (conectar)", 'connect'),
        order('Reinicia el router.', 'Restart the router.'),
        order('La velocidad de internet es baja.', 'The internet speed is low.')
      ],
      read: {
        t: 'Leo is at home and the internet is slow. The Wi-Fi signal is weak in his room. He restarts the router and waits two minutes. Then he checks the speed. The download speed is better now, but the website is still down. It is not his problem: the server is offline.',
        tr: 'Leo está en casa y el internet está lento. La señal de Wi-Fi es débil en su cuarto. Reinicia el router y espera dos minutos. Luego revisa la velocidad. La velocidad de descarga es mejor ahora, pero el sitio web sigue caído. No es problema suyo: el servidor está desconectado.',
        q: [
          mc('What does Leo restart?', ['The router', 'The laptop', 'The server'], 0),
          mc('Why does the website not work?', ['The server is offline', "Leo's laptop is broken", 'The router is new'], 0)
        ]
      },
      write: { p: 'Escribe 3 frases sobre tu internet en casa (velocidad, señal y qué haces si falla).', m: 'My internet speed is good. The signal is weak in my room. I restart the router when it fails.' },
      q: 'networking basics English router IP address'
    },

    {
      id: 't04', track: 'tech', level: 'A2', title: 'Amenazas: vocabulario de ciberseguridad', en: 'Cybersecurity threats',
      explain:
        '<p><b>threat</b> = amenaza · <b>attack</b> = ataque · <b>attacker</b> = atacante · <b>vulnerability</b> = debilidad que se puede explotar · <b>risk</b> = riesgo.</p>' +
        '<ul><li><b>Malware:</b> software malicioso (virus, worm, trojan, ransomware).</li>' +
        '<li><b>Ransomware:</b> cifra tus archivos y pide un pago para devolverlos.</li>' +
        '<li><b>Phishing:</b> correo o mensaje falso para robar datos. <i lang="en">Never click suspicious links.</i></li>' +
        '<li><b>Data breach:</b> filtración de datos.</li></ul>' +
        '<p><b>Patrones útiles:</b> <i lang="en">The attacker stole the data. The system was infected. Don\'t open unknown attachments.</i></p>',
      vocab: [
        ['threat', 'amenaza', 'Phishing is a common threat.'],
        ['attack', 'ataque', 'The company suffered an attack.'],
        ['attacker', 'atacante', 'The attacker stole the data.'],
        ['vulnerability', 'vulnerabilidad', 'This software has a vulnerability.'],
        ['malware', 'software malicioso', 'The malware infected the laptop.'],
        ['ransomware', 'ransomware (secuestro de datos)', 'Ransomware locks your files.'],
        ['phishing', 'phishing (suplantación)', 'This email is phishing.'],
        ['data breach', 'filtración de datos', 'There was a data breach.'],
        ['suspicious', 'sospechoso', 'Do not open suspicious links.'],
        ['infected', 'infectado', 'The computer is infected.'],
        ['risk', 'riesgo', 'Weak passwords are a risk.']
      ],
      ex: [
        mc('Un correo falso que roba tu contraseña es:', ['phishing', 'a router', 'a download'], 0),
        mc('Software que bloquea tus archivos y pide dinero:', ['ransomware', 'a firewall', 'a cable'], 0),
        mc('Una debilidad que un atacante puede usar es una:', ['vulnerability', 'speed', 'battery'], 0),
        fill('Do not click ___ links. (sospechosos)', 'suspicious'),
        order('El atacante robó los datos.', 'The attacker stole the data.'),
        order('Este correo es phishing.', 'This email is phishing.')
      ],
      read: {
        t: 'Yesterday, an employee received a suspicious email. The email said: "Your account will be closed. Click this link now." The employee did not click it and reported it to the security team. The team said it was phishing. Two other employees clicked the link, so their passwords were stolen.',
        tr: 'Ayer, un empleado recibió un correo sospechoso. El correo decía: "Su cuenta será cerrada. Haga clic en este enlace ahora." El empleado no hizo clic y lo reportó al equipo de seguridad. El equipo dijo que era phishing. Otros dos empleados hicieron clic en el enlace, así que les robaron las contraseñas.',
        q: [
          mc('What did the first employee do?', ['Reported the email', 'Clicked the link', 'Deleted the computer'], 0),
          mc('Why were two passwords stolen?', ['They clicked the link', 'They lost their phones', 'They used the router'], 0)
        ]
      },
      write: { p: 'Escribe 3 consejos para no caer en phishing (Do not… / Never…).', m: "Do not click suspicious links. Never share your password. Check the sender's address." },
      q: 'cybersecurity vocabulary English phishing malware'
    },

    {
      id: 't05', track: 'tech', level: 'A2', title: 'Defensa: firewall, cifrado, contraseñas y MFA', en: 'Security controls',
      explain:
        '<p>Las <b>medidas de protección</b> (<i lang="en">security controls</i>):</p>' +
        '<ul><li><b>firewall</b> = cortafuegos (filtra el tráfico)</li>' +
        '<li><b>encryption</b> = cifrado (convierte los datos en un código secreto)</li>' +
        '<li><b>authentication</b> = autenticación (probar quién eres)</li>' +
        '<li><b>MFA / two-factor</b> = verificación en dos pasos</li>' +
        '<li><b>backup</b> = copia de seguridad · <b>patch</b> = parche · <b>access control</b> = control de acceso</li></ul>' +
        '<p><b>Consejos con should / must:</b> <i lang="en">You should use a strong password. You must enable two-factor authentication. Back up your files every week.</i></p>',
      vocab: [
        ['firewall', 'cortafuegos', 'The firewall blocks bad traffic.'],
        ['encryption', 'cifrado', 'Encryption protects your data.'],
        ['authentication', 'autenticación', 'Authentication proves who you are.'],
        ['two-factor', 'de dos factores', 'Enable two-factor authentication.'],
        ['backup', 'copia de seguridad', 'Make a backup every week.'],
        ['patch', 'parche de seguridad', 'Install the latest patch.'],
        ['antivirus', 'antivirus', 'The antivirus found a threat.'],
        ['strong password', 'contraseña segura', 'Use a strong password.'],
        ['access', 'acceso', 'Only admins have access.'],
        ['protect', 'proteger', 'Protect your data.'],
        ['enable', 'activar, habilitar', 'Enable the firewall.']
      ],
      ex: [
        mc('Algo que bloquea el tráfico de red no deseado:', ['firewall', 'backup', 'patch'], 0),
        mc('Una copia de tus archivos por si los pierdes:', ['backup', 'malware', 'router'], 0),
        mc('Convertir datos en un código secreto es:', ['encryption', 'download', 'login'], 0),
        fill('You ___ use a strong password. (deberías)', 'should'),
        order('Activa la autenticación de dos factores.', 'Enable two-factor authentication.'),
        order('Haz una copia de seguridad cada semana.', ['Make a backup every week.', 'Every week make a backup.'])
      ],
      read: {
        t: 'A small company improved its security. First, it installed a firewall. Then it asked all employees to use strong passwords and two-factor authentication. The IT team also makes a backup every night, and it installs patches every Friday. Now the company is safer, but employees still need to be careful with email.',
        tr: 'Una empresa pequeña mejoró su seguridad. Primero instaló un firewall. Luego pidió a todos los empleados usar contraseñas seguras y autenticación de dos factores. El equipo de TI también hace una copia de seguridad cada noche e instala parches todos los viernes. Ahora la empresa es más segura, pero los empleados todavía deben tener cuidado con el correo.',
        q: [
          mc('How often does the IT team make a backup?', ['Every night', 'Every Friday', 'Every month'], 0),
          mc('When does it install patches?', ['Every Friday', 'Every night', 'Every Monday'], 0)
        ]
      },
      write: { p: 'Escribe 4 reglas de seguridad para tu laptop o tu celular (should / must).', m: 'You should use a strong password. You must enable two-factor authentication. You should update your software. You must not share your password.' },
      q: 'cybersecurity vocabulary firewall encryption MFA'
    },

    {
      id: 't06', track: 'tech', level: 'A2', title: 'Leer documentación: instrucciones y comandos', en: 'Reading documentation',
      explain:
        '<p>La documentación técnica usa el <b>imperativo</b> (verbo en forma base, sin sujeto) para dar pasos: <i lang="en">Open the terminal. Run the command. Install the package. Click Save.</i></p>' +
        '<p><b>Negación:</b> <i lang="en">Do not delete this file. / Don\'t share your API key.</i></p>' +
        '<p><b>Avisos:</b> <i lang="en">Note: … / Warning: … / Tip: …</i></p>' +
        '<p><b>Palabras clave:</b> <i lang="en">make sure</i> (asegúrate de), <i lang="en">required</i> (obligatorio), <i lang="en">optional</i> (opcional), <i lang="en">default</i> (por defecto), <i lang="en">version</i>, <i lang="en">prerequisites</i> (requisitos previos).</p>' +
        '<p><b>Truco para leer rápido:</b> busca el verbo al inicio de cada línea; ahí está la acción.</p>',
      vocab: [
        ['run', 'ejecutar', 'Run the command.'],
        ['install', 'instalar', 'Install the package.'],
        ['open', 'abrir', 'Open the terminal.'],
        ['type', 'escribir (teclear)', 'Type your username.'],
        ['click', 'hacer clic', 'Click Save.'],
        ['select', 'seleccionar', 'Select the folder.'],
        ['copy', 'copiar', 'Copy the file.'],
        ['make sure', 'asegúrate de', 'Make sure you have internet.'],
        ['required', 'obligatorio', 'This field is required.'],
        ['optional', 'opcional', 'This step is optional.'],
        ['default', 'por defecto', 'Use the default settings.'],
        ['version', 'versión', 'Check the version.']
      ],
      ex: [
        mc('¿Cuál oración es una instrucción?', ['Open the terminal.', 'The terminal is open.', 'I opened the terminal.'], 0),
        mc('"This field is required" significa:', ['Este campo es obligatorio', 'Este campo es opcional', 'Este campo está vacío'], 0),
        mc('"Make sure you have internet" significa:', ['Asegúrate de tener internet', 'No tienes internet', 'Compra internet'], 0),
        fill('___ the command. (ejecuta)', ['Run', 'run'], 'Los pasos de una guía empiezan con un verbo: <i lang="en">Run…</i>'),
        order('No compartas tu contraseña.', 'Do not share your password.'),
        order('Haz clic en el botón Guardar.', 'Click the Save button.')
      ],
      read: {
        t: 'Quick start. Step 1: Open the terminal. Step 2: Type the command to install the package. Step 3: Run the program. Note: Make sure you have version 3 or higher. Warning: Do not share your API key. Tip: The default settings are fine for beginners.',
        tr: 'Inicio rápido. Paso 1: Abre la terminal. Paso 2: Escribe el comando para instalar el paquete. Paso 3: Ejecuta el programa. Nota: Asegúrate de tener la versión 3 o superior. Advertencia: No compartas tu clave de API. Consejo: La configuración por defecto está bien para principiantes.',
        q: [
          mc('What is Step 1?', ['Open the terminal', 'Install the package', 'Run the program'], 0),
          mc('What should you NOT share?', ['The API key', 'The terminal', 'The version'], 0)
        ]
      },
      write: { p: 'Escribe una guía de 3 pasos para algo que sepas hacer (empieza cada paso con un verbo).', m: 'Step 1: Open the app. Step 2: Select your file. Step 3: Click Save.' },
      q: 'reading technical documentation English imperative'
    },

    {
      id: 't07', track: 'tech', level: 'A2', title: 'Soporte técnico: describir problemas y pedir ayuda', en: 'Tech support',
      explain:
        '<p>Cuando pides ayuda, el equipo de soporte necesita 4 datos: <b>qué pasa</b>, <b>cuándo empezó</b>, <b>qué intentaste</b> y <b>qué mensaje aparece</b>.</p>' +
        '<p><b>Modelo de mensaje:</b></p>' +
        '<p><i lang="en">Hello, I have a problem with my laptop. It doesn\'t turn on. The problem started this morning. I tried a different charger, but it still doesn\'t work. Can you help me, please? Thank you.</i></p>' +
        '<p><b>Frases útiles:</b> <i lang="en">I have an issue with… / It started yesterday. / I tried restarting it. / The error says… / Is there a workaround?</i> (¿hay una solución alternativa?)</p>',
      vocab: [
        ['issue', 'problema, incidencia', 'I have an issue with my account.'],
        ['ticket', 'ticket (solicitud de soporte)', 'I opened a ticket yesterday.'],
        ['support', 'soporte', 'Please contact support.'],
        ['started', 'empezó', 'It started this morning.'],
        ['tried', 'intenté (try)', 'I tried restarting it.'],
        ['still', 'todavía, aún', 'It still does not work.'],
        ['screenshot', 'captura de pantalla', 'Please send a screenshot.'],
        ['solution', 'solución', 'Is there a solution?'],
        ['workaround', 'solución alternativa', 'Is there a workaround?'],
        ['urgent', 'urgente', 'This is urgent.'],
        ['reply', 'responder', 'Please reply to this email.']
      ],
      ex: [
        mc('Para decir qué pasa, escribes:', ['I have a problem with my account.', 'I like my account.', 'My account is blue.'], 0),
        mc('Soporte pide un "screenshot". Envías:', ['una imagen de tu pantalla', 'tu contraseña', 'una laptop nueva'], 0),
        mc('Reiniciaste y el problema sigue:', ["It still doesn't work.", 'It works now.', 'It will work yesterday.'], 0),
        fill('I ___ restarting the router. (intenté)', 'tried'),
        order('El problema empezó esta mañana.', ['The problem started this morning.', 'This morning the problem started.']),
        order('¿Hay una solución alternativa?', 'Is there a workaround?')
      ],
      read: {
        t: 'Subject: Problem with Wi-Fi. Hello, I have an issue with the office Wi-Fi. It started this morning and it still does not work. I tried restarting my laptop and the router. The error says "Connection failed." I attached a screenshot. Could you help me, please? Thank you. Carlos.',
        tr: 'Asunto: Problema con el Wi-Fi. Hola, tengo un problema con el Wi-Fi de la oficina. Empezó esta mañana y todavía no funciona. Intenté reiniciar mi laptop y el router. El error dice "Falló la conexión." Adjunté una captura de pantalla. ¿Podrían ayudarme, por favor? Gracias. Carlos.',
        q: [
          mc('When did the problem start?', ['This morning', 'Last year', 'Tomorrow'], 0),
          mc('What did Carlos send with the email?', ['A screenshot', 'A router', 'A password'], 0)
        ]
      },
      write: { p: 'Escribe un correo corto a soporte técnico: problema, cuándo empezó y qué intentaste.', m: "Hello, I have a problem with my laptop. It started yesterday. I tried restarting it, but it still doesn't work. Could you help me, please?" },
      q: 'writing a support ticket in English'
    },

    {
      id: 't08', track: 'tech', level: 'B1', title: 'Incidentes: reportar qué pasó', en: 'Incident reports',
      explain:
        '<p>Un <b>reporte de incidente</b> responde: <b>¿Qué pasó? ¿Cuándo? ¿Qué impacto tuvo? ¿Qué hicimos? ¿Qué sigue?</b></p>' +
        '<p>Se escribe en <b>pasado simple y voz pasiva</b>: <i lang="en">At 9:15 an alert was triggered. The server was isolated. The attacker was blocked. The issue was resolved at 11:00.</i></p>' +
        '<p><b>Conectores de tiempo:</b> <i lang="en">at 9:00, then, after that, by 11:00, within an hour.</i></p>' +
        '<p><b>Vocabulario:</b> <i lang="en">incident, alert, impact, root cause</i> (causa raíz), <i lang="en">timeline</i> (cronología), <i lang="en">mitigate</i> (mitigar), <i lang="en">resolve, affected, escalate</i> (escalar).</p>',
      vocab: [
        ['incident', 'incidente', 'The incident was reported at nine.'],
        ['alert', 'alerta', 'An alert was triggered.'],
        ['impact', 'impacto', 'The impact was low.'],
        ['root cause', 'causa raíz', 'The root cause was a weak password.'],
        ['timeline', 'cronología', 'Here is the timeline.'],
        ['affected', 'afectado', 'Three users were affected.'],
        ['isolate', 'aislar', 'The server was isolated.'],
        ['resolve', 'resolver', 'The issue was resolved at eleven.'],
        ['mitigate', 'mitigar', 'We mitigated the risk.'],
        ['escalate', 'escalar', 'Please escalate this issue.'],
        ['detect', 'detectar', 'The attack was detected quickly.']
      ],
      ex: [
        mc('The server ___ isolated at 9:20.', ['was', 'were', 'is'], 0, 'Singular + pasado → was.'),
        mc('The users ___ affected.', ['was', 'were', 'did'], 1, 'Plural + pasado → were.'),
        mc('La razón que originó el problema es la:', ['root cause', 'timeline', 'impact'], 0),
        fill('The attack was ___ (detect) quickly.', 'detected', 'was + participio.'),
        order('La alerta se activó a las nueve.', ['An alert was triggered at nine.', 'At nine an alert was triggered.']),
        order('El problema se resolvió a las once.', ['The issue was resolved at eleven.', 'At eleven the issue was resolved.'])
      ],
      read: {
        t: 'Incident report. At 9:15 an alert was triggered on the main server. The security team detected unusual traffic and isolated the server at 9:30. Three users were affected. The root cause was a weak password. The issue was resolved at 11:00, and all passwords were changed. Next step: enable two-factor authentication.',
        tr: 'Reporte de incidente. A las 9:15 se activó una alerta en el servidor principal. El equipo de seguridad detectó tráfico inusual y aisló el servidor a las 9:30. Tres usuarios fueron afectados. La causa raíz fue una contraseña débil. El problema se resolvió a las 11:00 y se cambiaron todas las contraseñas. Siguiente paso: activar la autenticación de dos factores.',
        q: [
          mc('What was the root cause?', ['A weak password', 'A broken router', 'A new update'], 0),
          mc('How many users were affected?', ['Three', 'Thirty', 'None'], 0)
        ]
      },
      write: { p: 'Escribe un mini reporte de 4 frases sobre un problema técnico (qué, cuándo y qué se hizo).', m: 'At nine the website stopped working. The problem was detected by an alert. The server was restarted. The issue was resolved at ten.' },
      q: 'incident report writing English IT'
    },

    {
      id: 't09', track: 'tech', level: 'B1', title: 'Desarrollo y GitHub: vocabulario de software', en: 'Software and GitHub',
      explain:
        '<p>Palabras que verás en proyectos, GitHub y documentación: <i lang="en">repository (repo), commit, branch, pull request, merge, issue, bug, feature, release, deploy, review</i>.</p>' +
        '<p>Muchas sirven como <b>sustantivo y verbo</b>: <i lang="en">a commit / to commit</i>, <i lang="en">a review / to review</i>.</p>' +
        '<p><b>Mensajes de commit</b> (se escriben como una orden, corta y clara): <i lang="en">Fix login bug. Add dark mode. Update README. Remove unused files.</i></p>' +
        '<p><b>En revisiones de código:</b> <i lang="en">Looks good to me. / Could you add a test? / I found a bug in this function.</i></p>',
      vocab: [
        ['repository', 'repositorio', 'I created a new repository.'],
        ['commit', 'confirmar cambios (commit)', 'Please commit your changes.'],
        ['branch', 'rama', 'Create a new branch.'],
        ['pull request', 'solicitud de cambios (PR)', 'I opened a pull request.'],
        ['merge', 'fusionar', 'We merged the changes.'],
        ['bug', 'error de software', 'I found a bug.'],
        ['feature', 'función, característica', 'This feature is new.'],
        ['release', 'lanzamiento, lanzar', 'The release is tomorrow.'],
        ['deploy', 'desplegar, publicar', 'We deploy on Fridays.'],
        ['review', 'revisar, revisión', 'Please review my code.'],
        ['test', 'prueba, probar', 'Add a test for this function.']
      ],
      ex: [
        mc('Un buen mensaje de commit:', ['Fix login bug.', 'I fixed the login bug yesterday for everybody in the whole team.', 'Things.'], 0),
        mc('Para unir una rama a la rama principal:', ['merge', 'delete', 'review'], 0),
        mc('Un error en el código es un:', ['bug', 'branch', 'release'], 0),
        fill('I opened a pull ___. (solicitud)', 'request'),
        order('Por favor, revisa mi código.', ['Please review my code.', 'Review my code, please.']),
        order('Encontré un error en esta función.', 'I found a bug in this function.')
      ],
      read: {
        t: 'Sam found a bug in the login page. He created a new branch and fixed the problem. Then he committed the changes and opened a pull request. Ana reviewed the code and wrote: "Looks good, but could you add a test?" Sam added the test, and the team merged the pull request. The new version will be deployed on Friday.',
        tr: 'Sam encontró un error en la página de inicio de sesión. Creó una rama nueva y arregló el problema. Luego hizo commit de los cambios y abrió un pull request. Ana revisó el código y escribió: "Se ve bien, pero ¿podrías agregar una prueba?" Sam agregó la prueba y el equipo fusionó el pull request. La nueva versión se publicará el viernes.',
        q: [
          mc('What did Ana ask Sam to add?', ['A test', 'A branch', 'A bug'], 0),
          mc('When will the new version be deployed?', ['On Friday', 'Tomorrow', 'Next month'], 0)
        ]
      },
      write: { p: 'Escribe 3 mensajes de commit en inglés para cambios en una página web.', m: 'Add dark mode. Fix menu bug. Update README.' },
      q: 'GitHub vocabulary English commit pull request'
    },

    {
      id: 't10', track: 'tech', level: 'B1', title: 'Correos profesionales y reuniones diarias', en: 'Emails and meetings',
      explain:
        '<p><b>Correo profesional:</b> saludo (<i lang="en">Hello Ana, / Dear Ms. Lopez,</i>) → motivo (<i lang="en">I\'m writing to…</i>) → petición (<i lang="en">Could you please…?</i>) → cierre (<i lang="en">Thank you for your help.</i>) → despedida (<i lang="en">Best regards, / Kind regards,</i>).</p>' +
        '<p><b>Reunión diaria (stand-up):</b> tres frases: <i lang="en">Yesterday I worked on… Today I am going to… I am blocked by…</i></p>' +
        '<p><b>En reuniones:</b> <i lang="en">Could you repeat that? / Let me check. / I agree. / Let\'s schedule a meeting. / Sorry, I didn\'t catch that.</i></p>',
      vocab: [
        ["I'm writing to", 'te escribo para', "I'm writing to ask about the project."],
        ['attached', 'adjunto', 'Please find the report attached.'],
        ['regards', 'saludos (despedida)', 'Best regards, Ana.'],
        ['deadline', 'fecha límite', 'The deadline is Friday.'],
        ['schedule', 'programar, horario', "Let's schedule a meeting."],
        ['meeting', 'reunión', 'The meeting starts at ten.'],
        ['blocked', 'bloqueado', 'I am blocked by a bug.'],
        ['follow up', 'dar seguimiento', 'I am following up on my email.'],
        ['catch', 'entender (lo que se oye)', "Sorry, I didn't catch that."],
        ['progress', 'avance', 'I made good progress today.'],
        ['status', 'estado, situación', 'What is the status of the project?']
      ],
      ex: [
        mc('Para empezar un correo a una persona que no conoces:', ['Dear Ms. Lopez,', 'Hey you,', 'What up,'], 0),
        mc('Para pedir algo con cortesía:', ['Could you please send me the file?', 'Send me the file now.', 'You must send me the file.'], 0),
        mc('Final de un correo profesional:', ['Best regards,', 'See you never,', 'Bye bye lol,'], 0),
        fill('Yesterday I ___ on the login page. (trabajé)', 'worked'),
        order('Estoy bloqueado por un error.', 'I am blocked by a bug.'),
        order('Disculpa, no entendí eso.', "Sorry, I didn't catch that.")
      ],
      read: {
        t: 'Subject: Project update. Dear Ms. Lopez, I\'m writing to share the status of the project. Yesterday we finished the login page. Today we are going to test it. We are blocked by one bug, but we expect to solve it by Friday. Please find the report attached. Could you please confirm the deadline? Best regards, Ana.',
        tr: 'Asunto: Avance del proyecto. Estimada Sra. López: Le escribo para compartir el estado del proyecto. Ayer terminamos la página de inicio de sesión. Hoy vamos a probarla. Estamos bloqueados por un error, pero esperamos resolverlo el viernes. Adjunto el informe. ¿Podría confirmar la fecha límite, por favor? Saludos cordiales, Ana.',
        q: [
          mc('What did the team finish yesterday?', ['The login page', 'The report', 'The meeting'], 0),
          mc('What does Ana ask Ms. Lopez to confirm?', ['The deadline', 'The password', 'The bug'], 0)
        ]
      },
      write: { p: 'Escribe un stand-up de 3 frases: ayer, hoy y bloqueos.', m: 'Yesterday I studied technical English. Today I am going to practice emails. I am not blocked.' },
      q: 'professional email English IT meeting stand-up'
    }

  );
})();
