/* Inglés técnico, nivel B2: t16 a t19 (incidentes, arquitectura de red, reportes de errores, amenazas y controles). */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 't16', track: 'tech', level: 'B2', title: 'Respuesta a incidentes: cronología e informe', en: 'Incident response',
      explain:
        '<p>Cuando ocurre un incidente de seguridad, el equipo sigue fases y <b>comunica en inglés claro</b>:</p>' +
        '<table><tr><th>Fase</th><th>Verbos</th><th>Ejemplo</th></tr>' +
        '<tr><td>Detectar</td><td>detect, trigger, notice</td><td><i lang="en">The alert was triggered at 14:05.</i></td></tr>' +
        '<tr><td>Contener</td><td>isolate, block, disable</td><td><i lang="en">We isolated the infected laptop.</i></td></tr>' +
        '<tr><td>Erradicar</td><td>remove, patch, reset</td><td><i lang="en">The malware was removed.</i></td></tr>' +
        '<tr><td>Recuperar</td><td>restore, verify, resume</td><td><i lang="en">Services were restored by 16:30.</i></td></tr>' +
        '<tr><td>Aprender</td><td>review, document</td><td><i lang="en">A post-incident review was held.</i></td></tr></table>' +
        '<p>En la <b>cronología</b> se usa la <b>pasiva</b> y la hora: <i lang="en">At 14:05 the alert was triggered. At 14:20 the account was disabled.</i></p>' +
        '<p>Palabras clave: <i lang="en">root cause</i> (causa raíz), <i lang="en">impact</i> (impacto), <i lang="en">escalate</i> (escalar), <i lang="en">mitigate</i> (reducir el daño).</p>',
      vocab: [
        ['incident', 'incidente', 'We opened an incident ticket.'],
        ['root cause', 'causa raíz', 'The root cause was an unpatched server.'],
        ['isolate', 'aislar', 'Isolate the device from the network.'],
        ['contain', 'contener', 'The attack was contained quickly.'],
        ['mitigate', 'mitigar, reducir el impacto', 'We mitigated the risk with a firewall rule.'],
        ['escalate', 'escalar (a un superior)', 'We escalated the issue to the manager.'],
        ['impact', 'impacto', 'The impact was limited to one department.'],
        ['timeline', 'cronología', 'Please write the timeline of events.'],
        ['restore', 'restaurar', 'Services were restored by midnight.'],
        ['post-incident review', 'revisión posterior al incidente', 'A post-incident review was held on Monday.']
      ],
      ex: [
        mc('The first step is to ___ the infected device from the network.', ['isolate', 'ignore', 'upgrade'], 0),
        mc('We ___ the incident to the security manager.', ['escalated', 'escaped', 'estimated'], 0),
        fill('The ___ cause was an unpatched server. (root)', 'root'),
        mc('Which sentence describes the timeline correctly?', ['At 14:05 the alert was triggered.', 'At 14:05 the alert triggered by.', 'At 14:05 triggered the alert was.'], 0),
        mc('To "mitigate" a risk means to…', ['reduce its impact', 'increase it', 'ignore it'], 0),
        order('El ataque fue contenido en menos de una hora.', 'The attack was contained within an hour.')
      ],
      read: {
        t: "Incident summary. At 09:12 the monitoring system detected unusual traffic from a finance laptop. At 09:20 the device was isolated and the user's account was disabled. The analysis showed that the laptop had been infected by a malicious attachment. At 10:05 the malware was removed and all passwords were reset. Customer data was not affected, so the impact was limited to one department. The root cause was a lack of email filtering. To mitigate the risk, the team has enabled attachment scanning and scheduled a short training session for all staff.",
        tr: 'Resumen del incidente. A las 09:12 el sistema de monitoreo detectó tráfico inusual desde un portátil de finanzas. A las 09:20 el dispositivo fue aislado y se deshabilitó la cuenta del usuario. El análisis mostró que el portátil había sido infectado por un adjunto malicioso. A las 10:05 se eliminó el malware y se restablecieron todas las contraseñas. Los datos de los clientes no fueron afectados, así que el impacto se limitó a un departamento. La causa raíz fue la falta de filtrado de correo. Para mitigar el riesgo, el equipo activó el análisis de adjuntos y programó una breve capacitación para todo el personal.',
        q: [mc('What was infected?', ['A finance laptop', 'A customer database', 'A server room'], 0), mc('What was the root cause?', ['A lack of email filtering', 'A stolen password', 'A broken router'], 0), mc('What did the team do to mitigate the risk?', ['Enabled attachment scanning', 'Closed the department', 'Changed the customers'], 0)]
      },
      write: { p: 'Escribe una mini cronología de 4 frases en pasiva con horas (por ejemplo: At 10:00 the alert was triggered…) sobre un incidente real o imaginado.', m: 'At 10:00 the alert was triggered. At 10:10 the server was isolated. At 11:00 the malware was removed. At 12:00 the service was restored.' },
      q: 'incident response phases English vocabulary cybersecurity',
      listen: { d: [['Lead', 'What is the status of the incident?'], ['Analyst', 'The infected laptop was isolated at nine twenty, and the account was disabled.'], ['Lead', 'Do we know the root cause?'], ['Analyst', 'Yes. A malicious attachment got through because email filtering was not enabled.'], ['Lead', 'Was any customer data affected?'], ['Analyst', 'No. The impact was limited to the finance department. We will hold a post-incident review on Monday.']],
        q: [mc('¿Qué se hizo a las nueve veinte?', ['The laptop was isolated', 'The server was restored', 'A training session'], 0), mc('¿Cuál fue la causa raíz?', ['Email filtering was not enabled', 'A stolen laptop', 'A broken firewall'], 0), mc('¿Cuándo es la revisión?', ['On Monday', 'Tomorrow', 'Next year'], 0)] },
      quiz: [
        mc('"Contain" an attack means to…', ['stop it from spreading', 'start it', 'forget it'], 0),
        mc('The report ___ to the manager yesterday.', ['was escalated', 'escalated', 'is escalating'], 0),
        mc('Service ___ by 16:30.', ['was restored', 'restored', 'was restoring'], 0),
        mc('The ___ of the incident was limited to one team.', ['impact', 'impulse', 'import'], 0),
        mc('A post-incident review is held…', ['after the incident', 'before it', 'during a holiday'], 0),
        fill('We need to ___ the risk with a new rule. (mitigate)', 'mitigate'),
        order('Se deshabilitó la cuenta a las nueve y veinte.', 'The account was disabled at nine twenty.'),
        hear(['The device was isolated.', 'The device was insulated.', 'The device was isolating.'], 0, 'Se oía «isolated».')
      ]
    },

    {
      id: 't17', track: 'tech', level: 'B2', title: 'Describir una arquitectura de red', en: 'Describing network architecture',
      explain:
        '<p>En entrevistas y documentos debes poder <b>describir un diagrama de red</b> con precisión.</p>' +
        '<table><tr><th>Componente</th><th>Qué hace</th></tr>' +
        '<tr><td><i lang="en">firewall</i></td><td>filtra el tráfico según reglas</td></tr>' +
        '<tr><td><i lang="en">load balancer</i></td><td>reparte el tráfico entre varios servidores</td></tr>' +
        '<tr><td><i lang="en">DMZ</i></td><td>zona separada para servidores públicos</td></tr>' +
        '<tr><td><i lang="en">gateway / router</i></td><td>conecta redes distintas</td></tr>' +
        '<tr><td><i lang="en">subnet / segment</i></td><td>parte aislada de una red</td></tr></table>' +
        '<p><b>Frases útiles:</b></p><ul><li><i lang="en">The network is divided into three segments.</i></li>' +
        '<li><i lang="en">All traffic is routed through the firewall.</i></li>' +
        '<li><i lang="en">In case of failure, the backup link takes over.</i></li>' +
        '<li><i lang="en">We use two servers so that the service stays available.</i></li></ul>' +
        '<p>Medidas: <i lang="en">latency</i> (retraso), <i lang="en">bandwidth</i> (ancho de banda), <i lang="en">throughput</i> (rendimiento real).</p>',
      vocab: [
        ['load balancer', 'balanceador de carga', 'A load balancer spreads the traffic.'],
        ['DMZ', 'zona desmilitarizada (red para servidores públicos)', 'The web server is placed in the DMZ.'],
        ['segment', 'segmento de red', 'The network is divided into segments.'],
        ['latency', 'latencia, retraso', 'Latency is higher on mobile networks.'],
        ['bandwidth', 'ancho de banda', 'We need more bandwidth.'],
        ['redundancy', 'redundancia', 'Redundancy keeps the service available.'],
        ['failover', 'conmutación por error', 'Failover happens automatically.'],
        ['gateway', 'puerta de enlace', 'The gateway connects the two networks.'],
        ['route', 'enrutar, ruta', 'Traffic is routed through the firewall.'],
        ['bottleneck', 'cuello de botella', 'The database is the bottleneck.']
      ],
      ex: [
        mc('A ___ distributes traffic across several servers.', ['load balancer', 'keyboard', 'printer'], 0),
        mc('The network is ___ into three segments.', ['divided', 'divide', 'dividing'], 0),
        fill('Redundancy keeps the system working ___ case of failure. (in)', 'in'),
        mc('"Latency" is…', ['the delay before data arrives', 'the amount of data you can send', 'a type of cable'], 0),
        mc('Public-facing servers are usually placed in the ___ .', ['DMZ', 'BIOS', 'GUI'], 0),
        order('Todo el tráfico se enruta a través del firewall.', 'All traffic is routed through the firewall.')
      ],
      read: {
        t: "Our company network is divided into three segments: the public zone, the internal zone, and the management zone. The web servers are placed in the DMZ, so that visitors can reach them without entering the internal network. All traffic is routed through two firewalls, and a load balancer distributes the requests between four servers. For redundancy, each component has a backup, and in case of failure the traffic is redirected automatically. The main bottleneck is currently the database, so we plan to increase its bandwidth and add a second copy in another city.",
        tr: 'La red de nuestra empresa está dividida en tres segmentos: la zona pública, la zona interna y la zona de administración. Los servidores web están ubicados en la DMZ, de modo que los visitantes pueden llegar a ellos sin entrar a la red interna. Todo el tráfico se enruta a través de dos firewalls y un balanceador de carga reparte las solicitudes entre cuatro servidores. Por redundancia, cada componente tiene un respaldo y, en caso de falla, el tráfico se redirige automáticamente. El principal cuello de botella es actualmente la base de datos, así que planeamos aumentar su ancho de banda y agregar una segunda copia en otra ciudad.',
        q: [mc('Where are the web servers placed?', ['In the DMZ', 'In the management zone', 'In the database'], 0), mc('What distributes the requests?', ['A load balancer', 'A router', 'A printer'], 0), mc('What is the main bottleneck?', ['The database', 'The firewall', 'The DMZ'], 0)]
      },
      write: { p: 'Describe en 4 frases la red de tu casa, tu universidad o una empresa (segmentos, firewall, cómo se conecta, qué pasa si algo falla).', m: 'The network is divided into two segments. All traffic is routed through the router. The Wi-Fi is separate from the lab network. In case of failure, we use a mobile hotspot.' },
      q: 'network architecture firewall DMZ load balancer explained English',
      listen: { d: [['Interviewer', 'Can you describe the network you managed in your last job?'], ['Candidate', 'Sure. It was divided into three segments, and all traffic was routed through two firewalls.'], ['Interviewer', 'How did you handle failures?'], ['Candidate', 'We built redundancy into every critical component, so that the service stayed available in case of failure.'], ['Interviewer', 'And performance?'], ['Candidate', 'We used a load balancer. Latency dropped by thirty percent after we removed the main bottleneck.']],
        q: [mc('¿En cuántos segmentos estaba dividida la red?', ['Three', 'Two', 'Five'], 0), mc('¿Para qué usaron redundancia?', ['To keep the service available', 'To save money', 'To reduce staff'], 0), mc('¿Cuánto bajó la latencia?', ['Thirty percent', 'Ten percent', 'Fifty percent'], 0)] },
      quiz: [
        mc('A firewall ___ traffic according to rules.', ['filters', 'prints', 'stores'], 0),
        mc('Which one connects two different networks?', ['gateway', 'keyboard', 'monitor'], 0),
        mc('If the main server fails, the backup ___ over.', ['takes', 'makes', 'puts'], 0),
        mc('"Bandwidth" refers to…', ['the capacity to send data', 'the colour of a cable', 'the size of a room'], 0),
        mc('The slowest part of a system is the…', ['bottleneck', 'gateway', 'segment'], 0),
        fill('The traffic is ___ through the firewall. (route)', 'routed'),
        order('La red está dividida en tres segmentos.', 'The network is divided into three segments.'),
        hear(['The latency is high.', 'The lately is high.', 'The late see is high.'], 0, 'Se oía «latency».')
      ]
    },

    {
      id: 't18', track: 'tech', level: 'B2', title: 'Reportes de errores y documentación técnica', en: 'Bug reports and documentation',
      explain:
        '<p>Un buen reporte de error permite que otra persona <b>reproduzca el problema</b> sin preguntarte nada. Estructura básica:</p>' +
        '<table><tr><th>Sección</th><th>Qué escribir</th></tr>' +
        '<tr><td><i lang="en">Title</i></td><td>corto y específico: <i lang="en">Login fails with special characters</i></td></tr>' +
        '<tr><td><i lang="en">Environment</i></td><td>sistema, versión, navegador</td></tr>' +
        '<tr><td><i lang="en">Steps to reproduce</i></td><td>pasos numerados, con <b>imperativos</b>: <i lang="en">1. Open the login page. 2. Enter a password with “&amp;”.</i></td></tr>' +
        '<tr><td><i lang="en">Expected result</i></td><td>lo que debería pasar</td></tr>' +
        '<tr><td><i lang="en">Actual result</i></td><td>lo que pasa en realidad</td></tr>' +
        '<tr><td><i lang="en">Severity / workaround</i></td><td>gravedad y solución temporal</td></tr></table>' +
        '<p>Palabras útiles: <i lang="en">reproducible</i>, <i lang="en">intermittent</i> (a veces), <i lang="en">regression</i> (algo que antes funcionaba), <i lang="en">attach</i> (adjuntar).</p>',
      vocab: [
        ['steps to reproduce', 'pasos para reproducir', 'List the steps to reproduce the bug.'],
        ['expected result', 'resultado esperado', 'The expected result is a successful login.'],
        ['actual result', 'resultado real', 'The actual result is an error message.'],
        ['environment', 'entorno', 'Describe your environment and version.'],
        ['severity', 'gravedad', 'The severity of this bug is high.'],
        ['workaround', 'solución temporal', 'There is a workaround for now.'],
        ['intermittent', 'intermitente', 'The error is intermittent.'],
        ['regression', 'regresión (algo que ya funcionaba)', 'This bug is a regression from version 2.'],
        ['attach', 'adjuntar', 'Attach the logs to the ticket.'],
        ['reproducible', 'reproducible', 'The bug is reproducible every time.']
      ],
      ex: [
        mc('In a bug report, "expected result" describes…', ['what should happen', 'what happened', 'who found it'], 0),
        mc('A bug that appears only sometimes is…', ['intermittent', 'permanent', 'obsolete'], 0),
        fill('A temporary solution is called a ___ . (workaround)', 'workaround'),
        mc('Which step is written correctly?', ['Click the Save button.', 'Clicking the Save button.', 'You are clicking the Save button.'], 0, 'Los pasos usan el imperativo.'),
        mc('"Regression" means…', ['something that worked before is now broken', 'a new feature', 'a deleted file'], 0),
        order('Adjunta los registros al ticket.', 'Attach the logs to the ticket.')
      ],
      read: {
        t: "Title: Export fails for files larger than 50 MB. Environment: Version 4.2, Windows 11, Chrome 120. Steps to reproduce: 1. Open any project. 2. Add a video larger than 50 MB. 3. Click Export. Expected result: The file is exported as a ZIP. Actual result: The progress bar stops at 80% and an unknown error appears. Severity: High. The bug is reproducible every time and it is a regression from version 4.1. Workaround: Split the video into smaller files. Logs are attached.",
        tr: 'Título: La exportación falla con archivos de más de 50 MB. Entorno: versión 4.2, Windows 11, Chrome 120. Pasos para reproducir: 1. Abre cualquier proyecto. 2. Agrega un video de más de 50 MB. 3. Haz clic en Exportar. Resultado esperado: el archivo se exporta como ZIP. Resultado real: la barra de progreso se detiene en 80 % y aparece un error desconocido. Gravedad: alta. El error es reproducible siempre y es una regresión de la versión 4.1. Solución temporal: dividir el video en archivos más pequeños. Se adjuntan los registros.',
        q: [mc('What happens when the user clicks Export?', ['The progress bar stops at 80%', 'The file exports correctly', 'The app closes'], 0), mc('Is the bug intermittent?', ['No, it is reproducible every time', 'Yes, it is random', 'It is not a bug'], 0), mc('What is the workaround?', ['Split the video into smaller files', 'Reinstall Windows', 'Use another browser'], 0)]
      },
      write: { p: 'Escribe un mini reporte de un error que hayas visto (de una app, una web o un juego): título, 3 pasos para reproducirlo, resultado esperado y resultado real.', m: 'Title: App closes when I open settings. Steps: 1. Open the app. 2. Tap Settings. 3. Scroll down. Expected: The settings page stays open. Actual: The app closes.' },
      q: 'how to write a good bug report steps to reproduce expected actual result',
      listen: { d: [['QA', 'I found a bug in the export function.'], ['Dev', 'Is it reproducible?'], ['QA', 'Yes, every time. Open a project, add a video larger than fifty megabytes, and click Export.'], ['Dev', 'What is the actual result?'], ['QA', 'The progress bar stops at eighty percent and shows an unknown error. It is a regression from the previous version.'], ['Dev', 'OK. Please attach the logs to the ticket. In the meantime, the workaround is to split the video.']],
        q: [mc('¿Con qué frecuencia ocurre el error?', ['Every time', 'Sometimes', 'Never'], 0), mc('¿Qué muestra la app?', ['An unknown error', 'A success message', 'A blank page'], 0), mc('¿Qué debe adjuntar QA?', ['The logs', 'The video', 'A screenshot of the desktop'], 0)] },
      quiz: [
        mc('"Actual result" is…', ['what really happens', 'what should happen', 'the title'], 0),
        mc('Which is a good bug title?', ['Login fails with special characters', 'It does not work', 'Help!!!'], 0),
        mc('Steps to reproduce are usually written in the…', ['imperative', 'past perfect', 'future'], 0),
        mc('A "regression" is a bug that…', ['appears in something that worked before', 'is very small', 'is not reproducible'], 0),
        mc('If you cannot fix a bug right now, you can offer a…', ['workaround', 'regression', 'severity'], 0),
        fill('Please ___ the log file. (attach)', 'attach'),
        order('El error ocurre cada vez que haces clic en Exportar.', 'The error happens every time you click Export.'),
        hear(['It is reproducible.', 'It is reproducing.', 'It is a reproduction.'], 0, 'Se oía «reproducible».')
      ]
    },

    {
      id: 't19', track: 'tech', level: 'B2', title: 'Amenazas y controles de ciberseguridad', en: 'Threats and security controls',
      explain:
        '<p>Para hablar de seguridad con precisión necesitas distinguir <b>amenaza</b>, <b>vulnerabilidad</b> y <b>control</b>.</p>' +
        '<table><tr><th>Término</th><th>Significado</th></tr>' +
        '<tr><td><i lang="en">threat</i></td><td>algo que puede causar daño (un atacante, un malware)</td></tr>' +
        '<tr><td><i lang="en">vulnerability</i></td><td>una debilidad (software sin parche)</td></tr>' +
        '<tr><td><i lang="en">exploit</i></td><td>código o método que aprovecha una vulnerabilidad</td></tr>' +
        '<tr><td><i lang="en">zero-day</i></td><td>vulnerabilidad aún desconocida para el fabricante</td></tr>' +
        '<tr><td><i lang="en">control</i></td><td>medida que reduce el riesgo (MFA, cifrado, parches)</td></tr></table>' +
        '<p><b>Controles frecuentes:</b> <i lang="en">multi-factor authentication (MFA)</i>, <i lang="en">encryption</i>, <i lang="en">least privilege</i> (cada usuario solo tiene el acceso que necesita), <i lang="en">patch management</i>, <i lang="en">backups</i>.</p>' +
        '<p>Estructuras útiles: <i lang="en">can lead to</i>, <i lang="en">prevent someone from + -ing</i>, <i lang="en">in order to + verbo</i>: <i lang="en">Encryption prevents attackers from reading the data.</i></p>',
      vocab: [
        ['threat', 'amenaza', 'Ransomware is a serious threat.'],
        ['vulnerability', 'vulnerabilidad', 'The scan found a critical vulnerability.'],
        ['exploit', 'aprovechar una vulnerabilidad; exploit', 'Attackers exploit unpatched systems.'],
        ['zero-day', 'vulnerabilidad desconocida para el fabricante', 'A zero-day has no patch yet.'],
        ['ransomware', 'malware que cifra archivos y pide rescate', 'Ransomware encrypts files and demands payment.'],
        ['encryption', 'cifrado', 'Encryption protects data in transit.'],
        ['multi-factor authentication', 'autenticación multifactor', 'Enable multi-factor authentication.'],
        ['least privilege', 'mínimo privilegio', 'Least privilege limits what users can do.'],
        ['patch', 'parche; aplicar un parche', 'Apply the patch as soon as possible.'],
        ['prevent from', 'impedir que', 'Encryption prevents attackers from reading data.']
      ],
      ex: [
        mc('MFA stands for multi-factor ___ .', ['authentication', 'automation', 'application'], 0),
        mc('A ___ is a vulnerability unknown to the vendor.', ['zero-day', 'backup', 'patch'], 0),
        mc('The principle of least ___ limits what each user can do.', ['privilege', 'privacy', 'price'], 0),
        fill('Encryption prevents attackers ___ reading the data. (from)', 'from'),
        mc('Ransomware…', ['encrypts files and demands payment', 'speeds up the internet', 'deletes ads'], 0),
        order('Los parches deben aplicarse lo antes posible.', 'Patches should be applied as soon as possible.')
      ],
      read: {
        t: "Last year a small hospital was hit by ransomware. Attackers exploited an old vulnerability in a server that had not been patched for months. As a result, patient records were encrypted and the staff could not access them. The hospital had backups, but they were stored on the same network, so they were encrypted too. Experts say that three simple controls could have prevented most of the damage: applying patches regularly, using multi-factor authentication for remote access, and keeping offline backups. The lesson is clear: basic security measures are often more effective than expensive tools.",
        tr: 'El año pasado un hospital pequeño fue atacado con ransomware. Los atacantes aprovecharon una vieja vulnerabilidad de un servidor que no se había actualizado en meses. Como resultado, los registros de los pacientes quedaron cifrados y el personal no pudo acceder a ellos. El hospital tenía copias de seguridad, pero estaban en la misma red, así que también se cifraron. Los expertos dicen que tres controles simples habrían evitado la mayor parte del daño: aplicar parches con regularidad, usar autenticación multifactor para el acceso remoto y mantener copias de seguridad fuera de línea. La lección es clara: las medidas básicas suelen ser más eficaces que las herramientas costosas.',
        q: [mc('How did the attackers get in?', ['They exploited an unpatched server', 'They stole a laptop', 'They called the staff'], 0), mc('Why were the backups useless?', ['They were on the same network', 'They were too old', 'They were deleted by staff'], 0), mc('What is the lesson?', ['Basic measures are often more effective than expensive tools', 'Expensive tools are always better', 'Backups are not necessary'], 0)]
      },
      write: { p: 'Escribe 4 frases sobre cómo proteger una cuenta o una red: una con prevent… from, una con in order to, una con can lead to y una con should.', m: 'MFA prevents attackers from entering your account. Use strong passwords in order to reduce the risk. Old software can lead to attacks. You should apply updates quickly.' },
      q: 'cybersecurity threats vulnerabilities controls MFA encryption least privilege explained',
      listen: { d: [['Manager', 'Why did the attack succeed?'], ['Analyst', 'The attackers exploited a vulnerability in a server that had not been patched.'], ['Manager', 'Did we have multi-factor authentication?'], ['Analyst', 'Only for email, not for remote access. That can lead to serious problems.'], ['Manager', 'What do you recommend?'], ['Analyst', 'Apply patches regularly, enable MFA everywhere, and follow the principle of least privilege in order to limit the damage.']],
        q: [mc('¿Qué aprovecharon los atacantes?', ['An unpatched vulnerability', 'A stolen badge', 'A phone call'], 0), mc('¿Dónde existía MFA?', ['Only for email', 'Everywhere', 'Nowhere'], 0), mc('¿Qué recomienda el analista?', ['Patches, MFA and least privilege', 'Buy more laptops', 'Change the manager'], 0)] },
      quiz: [
        mc('An exploit takes advantage of a…', ['vulnerability', 'backup', 'password manager'], 0),
        mc('Which control adds a second proof of identity?', ['MFA', 'Wallpaper', 'Spam'], 0),
        mc('Offline backups protect against…', ['ransomware', 'slow Wi-Fi', 'low battery'], 0),
        mc('Encryption makes data…', ['unreadable without a key', 'faster', 'public'], 0),
        mc('Patch management means…', ['keeping software updated', 'deleting old files', 'buying new phones'], 0),
        fill('Weak passwords can ___ to a breach. (lead)', 'lead'),
        order('El cifrado impide que los atacantes lean los datos.', 'Encryption prevents attackers from reading the data.'),
        hear(['A zero-day has no patch.', 'A zero day has no match.', 'A zero-day has no path.'], 0, 'Se oía «patch».')
      ]
    }

  );
})();
