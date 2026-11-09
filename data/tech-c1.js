/* Inglés técnico, nivel C1: t20 a t22 (riesgo y arquitectura de seguridad, propuestas y post-mortems, explicar a no expertos). */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 't20', track: 'tech', level: 'C1', title: 'Lenguaje de riesgo y arquitectura de seguridad', en: 'Risk and security architecture language',
      explain:
        '<p>A nivel profesional hablas de <b>riesgo</b>, no solo de amenazas. La estructura básica es: <b>probabilidad × impacto</b>.</p>' +
        '<table><tr><th>Término</th><th>Significado</th></tr>' +
        '<tr><td><i lang="en">likelihood</i></td><td>probabilidad de que ocurra</td></tr>' +
        '<tr><td><i lang="en">impact / consequence</i></td><td>daño si ocurre</td></tr>' +
        '<tr><td><i lang="en">risk appetite</i></td><td>cuánto riesgo acepta la organización</td></tr>' +
        '<tr><td><i lang="en">residual risk</i></td><td>riesgo que queda después de los controles</td></tr>' +
        '<tr><td><i lang="en">attack surface</i></td><td>todos los puntos por donde pueden atacar</td></tr>' +
        '<tr><td><i lang="en">defence in depth</i></td><td>varias capas de protección</td></tr>' +
        '<tr><td><i lang="en">zero trust</i></td><td>no confiar en nadie por defecto; verificar siempre</td></tr></table>' +
        '<p><b>Cuatro respuestas al riesgo:</b> <i lang="en">mitigate</i> (reducir), <i lang="en">accept</i> (aceptar), <i lang="en">transfer</i> (transferir, por ejemplo con un seguro) y <i lang="en">avoid</i> (evitar).</p>' +
        '<p><b>Frases con matiz:</b> <i lang="en">The likelihood is low, but the impact would be severe.</i> / <i lang="en">We have reduced the attack surface by disabling unused services.</i> / <i lang="en">The residual risk is within our appetite.</i></p>',
      vocab: [
        ['likelihood', 'probabilidad', 'The likelihood of an attack is high.'],
        ['risk appetite', 'apetito de riesgo', 'Our risk appetite is low.'],
        ['residual risk', 'riesgo residual', 'The residual risk is acceptable.'],
        ['attack surface', 'superficie de ataque', 'We reduced the attack surface.'],
        ['defence in depth', 'defensa en profundidad', 'Defence in depth uses several layers.'],
        ['zero trust', 'confianza cero', 'Zero trust verifies every request.'],
        ['transfer the risk', 'transferir el riesgo', 'Insurance can transfer the risk.'],
        ['compliance', 'cumplimiento normativo', 'Compliance is a legal requirement.'],
        ['safeguard', 'salvaguarda, medida de protección', 'Each safeguard has a cost.'],
        ['tolerance', 'tolerancia', 'Our tolerance for downtime is low.']
      ],
      ex: [
        mc('Risk is often calculated as…', ['likelihood × impact', 'cost + time', 'speed × size'], 0),
        mc('The risk that remains after controls is the ___ risk.', ['residual', 'initial', 'external'], 0),
        mc('"Zero trust" means…', ['verify every request', 'trust all users', 'remove passwords'], 0),
        fill('We disabled unused services to reduce the attack ___ . (surface)', 'surface'),
        mc('Buying insurance is an example of…', ['transferring the risk', 'avoiding the risk', 'ignoring the risk'], 0),
        order('La probabilidad es baja pero el impacto sería grave.', 'The likelihood is low but the impact would be severe.')
      ],
      read: {
        t: "A security assessment evaluated the company's customer portal. The likelihood of a successful attack was rated medium, but the impact would be severe, since the portal stores personal data. The report recommended defence in depth: a web application firewall, strict access control based on zero trust, and encrypted backups. After the changes, the attack surface was reduced by closing three unused ports. The residual risk was judged to be within the company's appetite, although management accepted that it could never be eliminated completely. The final recommendation was to transfer part of the financial risk by purchasing cyber insurance.",
        tr: 'Una evaluación de seguridad analizó el portal de clientes de la empresa. La probabilidad de un ataque exitoso se calificó como media, pero el impacto sería grave, ya que el portal guarda datos personales. El informe recomendó defensa en profundidad: un firewall de aplicaciones web, un control de acceso estricto basado en confianza cero y copias de seguridad cifradas. Tras los cambios, se redujo la superficie de ataque al cerrar tres puertos sin uso. El riesgo residual se consideró dentro del apetito de la empresa, aunque la gerencia aceptó que nunca podría eliminarse del todo. La recomendación final fue transferir parte del riesgo financiero contratando un ciberseguro.',
        q: [mc('Why is the impact severe?', ['The portal stores personal data', 'The portal is old', 'The portal is free'], 0), mc('How was the attack surface reduced?', ['By closing three unused ports', 'By adding more ports', 'By removing the firewall'], 0), mc('How can part of the financial risk be transferred?', ['By buying cyber insurance', 'By ignoring it', 'By closing the portal'], 0)]
      },
      write: { p: 'Escribe 4 frases evaluando un riesgo de tu elección (por ejemplo: perder tu celular): probabilidad, impacto, un control y el riesgo residual.', m: 'The likelihood of losing my phone is medium. The impact would be high because of my data. A screen lock and backups reduce the risk. The residual risk is acceptable.' },
      q: 'risk assessment likelihood impact residual risk attack surface zero trust explained',
      listen: { d: [['CISO', 'What is the main risk to the customer portal?'], ['Analyst', 'The likelihood of an attack is medium, but the impact would be severe.'], ['CISO', 'What controls do you recommend?'], ['Analyst', 'Defence in depth, zero trust access, and encrypted backups. That reduces the attack surface.'], ['CISO', 'And the residual risk?'], ['Analyst', 'It is within our risk appetite. We can also transfer part of the cost with cyber insurance.']],
        q: [mc('¿Cómo califica el analista la probabilidad?', ['Medium', 'Very low', 'Certain'], 0), mc('¿Qué controles recomienda?', ['Defence in depth and zero trust', 'Only a new password', 'No controls'], 0), mc('¿Cómo se transfiere parte del costo?', ['Cyber insurance', 'A new laptop', 'A holiday'], 0)] },
      quiz: [
        mc('"Risk appetite" is…', ['how much risk an organisation accepts', 'the speed of an attack', 'a type of malware'], 0),
        mc('"Defence in depth" means…', ['several layers of protection', 'one strong firewall', 'no protection'], 0),
        mc('Reducing the attack surface means…', ['removing unnecessary entry points', 'adding more users', 'buying more servers'], 0),
        mc('Which is NOT a way to respond to risk?', ['Multiply it', 'Mitigate it', 'Accept it'], 0),
        mc('Compliance relates to…', ['laws and standards', 'colours', 'office size'], 0),
        fill('The ___ risk is within our appetite. (residual)', 'residual'),
        order('Redujimos la superficie de ataque cerrando puertos sin uso.', 'We reduced the attack surface by closing unused ports.'),
        hear(['The impact would be severe.', 'The impact would be sincere.', 'The impact would be several.'], 0, 'Se oía «severe».')
      ]
    },

    {
      id: 't21', track: 'tech', level: 'C1', title: 'Propuestas técnicas y análisis posterior sin culpar', en: 'Technical proposals and blameless post-mortems',
      explain:
        '<p>Un ingeniero senior escribe <b>propuestas</b> (para decidir qué construir) y <b>post-mortems</b> (para aprender de un fallo). Ambos son documentos formales y persuasivos.</p>' +
        '<table><tr><th>Sección de la propuesta</th><th>Contenido</th></tr>' +
        '<tr><td><i lang="en">Problem statement</i></td><td>qué problema resolvemos y por qué importa</td></tr>' +
        '<tr><td><i lang="en">Proposed solution</i></td><td>qué haremos, con detalle</td></tr>' +
        '<tr><td><i lang="en">Alternatives considered</i></td><td>otras opciones y por qué se descartaron</td></tr>' +
        '<tr><td><i lang="en">Risks and trade-offs</i></td><td>qué ganamos y qué cedemos</td></tr>' +
        '<tr><td><i lang="en">Next steps</i></td><td>acciones, responsables y fechas</td></tr></table>' +
        '<p><b>Post-mortem sin culpa (<i lang="en">blameless</i>):</b> se centra en el <b>sistema</b>, no en la persona. En lugar de <i lang="en">John deployed a bad change</i>, escribe <i lang="en">The change was deployed without an automated check.</i></p>' +
        '<p>Frases clave: <i lang="en">The primary contributing factor was…</i> / <i lang="en">Had the alert been configured, the issue would have been detected earlier.</i> / <i lang="en">To prevent recurrence, we will…</i> / <i lang="en">The trade-off is that…</i></p>',
      vocab: [
        ['proposal', 'propuesta', 'The proposal was approved by the board.'],
        ['trade-off', 'compromiso (ganar algo, ceder otra cosa)', 'The trade-off is higher cost.'],
        ['alternative', 'alternativa', 'We considered three alternatives.'],
        ['contributing factor', 'factor que contribuyó', 'The main contributing factor was missing alerts.'],
        ['recurrence', 'repetición (de un incidente)', 'We want to prevent recurrence.'],
        ['blameless', 'sin culpar', 'The review was blameless.'],
        ['rollback', 'revertir un cambio', 'We performed a rollback.'],
        ['action item', 'tarea de seguimiento', 'Each action item has an owner.'],
        ['justify', 'justificar', 'We must justify the extra cost.'],
        ['scalable', 'escalable', 'The design is scalable.']
      ],
      ex: [
        mc('The "trade-off" section describes…', ['what we gain and what we give up', 'who is to blame', 'the weather'], 0),
        mc('Which sentence is blameless?', ['The change was deployed without an automated check.', 'John deployed a bad change.', 'Somebody was careless.'], 0),
        fill('To prevent ___ , we will add an alert. (recurrence)', 'recurrence'),
        mc('"Alternatives considered" explains…', ['other options and why they were rejected', 'a list of staff', 'the budget only'], 0),
        mc('"Rollback" means…', ['reverting a change', 'advancing a release', 'deleting the team'], 0),
        order('Cada tarea de seguimiento tiene un responsable.', 'Each action item has an owner.')
      ],
      read: {
        t: "Post-mortem summary. On Tuesday the payment service was unavailable for forty minutes. The primary contributing factor was a configuration change that was deployed without an automated check. Had a validation test been in place, the error would have been detected before release. The team performed a rollback and service was restored. This review is blameless: its goal is to improve the system, not to find a culprit. To prevent recurrence, three action items were agreed: add automated validation, create an alert for failed payments, and require peer review for configuration changes. The trade-off is that releases will take slightly longer, but the team considers the added safety worth the cost.",
        tr: 'Resumen del post-mortem. El martes el servicio de pagos estuvo caído durante cuarenta minutos. El principal factor contribuyente fue un cambio de configuración que se desplegó sin una revisión automática. De haber existido una prueba de validación, el error se habría detectado antes del lanzamiento. El equipo hizo un rollback y se restableció el servicio. Esta revisión es sin culpar: su objetivo es mejorar el sistema, no encontrar un culpable. Para evitar que se repita, se acordaron tres tareas: agregar validación automática, crear una alerta para pagos fallidos y exigir revisión por pares en los cambios de configuración. El compromiso es que los lanzamientos tardarán un poco más, pero el equipo considera que la seguridad adicional vale el costo.',
        q: [mc('How long was the service unavailable?', ['Forty minutes', 'Four hours', 'Four days'], 0), mc('What was the primary contributing factor?', ['A change deployed without an automated check', 'A stolen password', 'A power cut'], 0), mc('What is the trade-off?', ['Releases will take slightly longer', 'Prices will rise', 'The team will shrink'], 0)]
      },
      write: { p: 'Escribe un mini post-mortem de 4 frases sobre un fallo (real o imaginario): qué pasó, factor principal (sin culpar), cómo se arregló y una acción para evitar repetirlo.', m: 'The website was down for an hour. The main factor was an expired certificate. We renewed it and restored the service. To prevent recurrence, we will create an expiry alert.' },
      q: 'blameless post-mortem template engineering technical proposal design doc',
      listen: { d: [['Lead', 'Let us start the review. Remember, it is blameless.'], ['Engineer', 'The primary contributing factor was a configuration change deployed without validation.'], ['Lead', 'Had we had an automated check, would we have caught it?'], ['Engineer', 'Yes. To prevent recurrence, I propose three action items.'], ['Lead', 'What is the trade-off?'], ['Engineer', 'Releases will take longer, but we reduce the risk of another outage.']],
        q: [mc('¿Qué significa «blameless»?', ['Not blaming a person', 'Without a meeting', 'Without engineers'], 0), mc('¿Cuál fue el factor principal?', ['A change without validation', 'A hardware fault', 'A holiday'], 0), mc('¿Qué compromiso se acepta?', ['Releases take longer', 'Costs fall', 'The team grows'], 0)] },
      quiz: [
        mc('A "contributing factor" is…', ['a cause that helped the incident happen', 'the person to blame', 'a type of server'], 0),
        mc('The alternative section should include…', ['options that were rejected and why', 'only the winning option', 'jokes'], 0),
        mc('Which phrase starts a blameless sentence?', ['The check was not configured, so…', 'He forgot to…', 'She failed to…'], 0),
        mc('"Scalable" means…', ['it can grow to handle more load', 'it is very small', 'it is old'], 0),
        mc('Next steps should include…', ['owners and dates', 'only ideas', 'nothing'], 0),
        fill('Had the alert been configured, we ___ have detected it earlier. (would)', 'would'),
        order('El compromiso es que los lanzamientos tardarán más.', 'The trade-off is that releases will take longer.'),
        hear(['We performed a rollback.', 'We performed a roll call.', 'We performed a rock back.'], 0, 'Se oía «rollback».')
      ]
    },

    {
      id: 't22', track: 'tech', level: 'C1', title: 'Explicar tecnología a personas no técnicas', en: 'Explaining technology to non-experts',
      explain:
        '<p>Un profesional avanzado no solo sabe: <b>hace que otros entiendan</b>. Con directivos, clientes o usuarios hay que traducir lo técnico a <b>impacto y decisiones</b>.</p>' +
        '<ol><li><b>Empieza por el resultado</b>, no por el detalle: <i lang="en">In short, our data is safe, but we need to act this week.</i></li>' +
        '<li><b>Usa analogías</b>: <i lang="en">A firewall is like a security guard at the door.</i></li>' +
        '<li><b>Evita jerga</b> o explícala: <i lang="en">Multi-factor authentication, which means a second proof of identity…</i></li>' +
        '<li><b>Una idea por frase</b> y números concretos: <i lang="en">This takes ten minutes and prevents most attacks.</i></li>' +
        '<li><b>Termina con la acción</b>: <i lang="en">What we need from you is approval by Friday.</i></li></ol>' +
        '<p>Frases útiles: <i lang="en">Put simply, … / In other words, … / Think of it as… / The key point is… / What this means for you is…</i></p>',
      vocab: [
        ['put simply', 'dicho de forma simple', 'Put simply, it protects your data.'],
        ['in other words', 'es decir', 'In other words, it adds a second check.'],
        ['analogy', 'analogía', 'An analogy makes it easier to understand.'],
        ['jargon', 'jerga', 'Avoid jargon with clients.'],
        ['the key point', 'el punto clave', 'The key point is the deadline.'],
        ['implication', 'consecuencia, implicación', 'The implication is a higher cost.'],
        ['oversimplify', 'simplificar demasiado', 'Do not oversimplify the risk.'],
        ['stakeholder', 'parte interesada', 'Each stakeholder needs a clear summary.'],
        ['clarify', 'aclarar', 'Let me clarify one point.'],
        ['takeaway', 'idea principal para llevarse', 'The main takeaway is simple.']
      ],
      ex: [
        mc('When you talk to non-experts, you should start with…', ['the result or main point', 'technical detail', 'a long history'], 0),
        mc('An analogy is…', ['a comparison that makes something easier to understand', 'a type of error', 'a command'], 0),
        mc('"Put simply" introduces…', ['a simple explanation', 'a complaint', 'a technical command'], 0),
        fill('Avoid ___ with clients. (jargon)', 'jargon'),
        mc('"Stakeholder" means…', ['a person with an interest in the project', 'a wooden stick', 'a database'], 0),
        order('Dicho de forma simple, esto protege tus datos.', 'Put simply, this protects your data.')
      ],
      read: {
        t: "When explaining a security update to managers, start with the main point: the update protects customer data, and it must be installed this week. Then give a short analogy. For example, think of the update as a new lock for a door that has an old, weak lock. Avoid jargon such as zero-day or patch cadence, or explain it in plain words. Finally, close with the action you need: approval for a two-hour maintenance window on Saturday night. Good communicators do not oversimplify the risk, but they also do not overwhelm the audience with details they will not use to make a decision.",
        tr: 'Al explicar una actualización de seguridad a gerentes, comienza con el punto principal: la actualización protege los datos de los clientes y debe instalarse esta semana. Luego da una analogía breve. Por ejemplo, piensa en la actualización como una cerradura nueva para una puerta que tiene una cerradura vieja y débil. Evita jerga como zero-day o cadencia de parches, o explícala con palabras simples. Por último, cierra con la acción que necesitas: aprobación para una ventana de mantenimiento de dos horas el sábado por la noche. Los buenos comunicadores no simplifican en exceso el riesgo, pero tampoco abruman al público con detalles que no usará para tomar una decisión.',
        q: [mc('What should you start with?', ['The main point', 'A long history', 'Technical logs'], 0), mc('What analogy is used?', ['A new lock for an old door', 'A fast car', 'A river'], 0), mc('What action is requested?', ['Approval for a maintenance window', 'A new budget', 'More staff'], 0)]
      },
      write: { p: 'Explica en 4 frases a una persona no técnica qué es una contraseña segura o el cifrado. Usa una analogía y Put simply.', m: 'Put simply, encryption locks your data. Think of it as a box that only you can open. Without the key, nobody can read your files. The key point is to keep your key private.' },
      q: 'explain technical concepts to non technical audience analogy communication English',
      listen: { d: [['CEO', 'I am not technical. Can you explain the update in simple terms?'], ['Engineer', 'Put simply, it closes a weak point in our system, like replacing an old lock on the door.'], ['CEO', 'What happens if we do not install it?'], ['Engineer', 'The implication is a higher risk of data theft. The key point is that we need to install it this week.'], ['CEO', 'What do you need from me?'], ['Engineer', 'Approval for a two-hour maintenance window on Saturday night.']],
        q: [mc('¿Con qué analogía lo explica?', ['Replacing an old lock', 'Painting a wall', 'Buying a car'], 0), mc('¿Cuál es la consecuencia de no instalarlo?', ['A higher risk of data theft', 'Nothing', 'A lower price'], 0), mc('¿Qué necesita del CEO?', ['Approval for maintenance', 'More money', 'A new office'], 0)] },
      quiz: [
        mc('"In other words" is used to…', ['rephrase something simply', 'end the meeting', 'ask a question'], 0),
        mc('A good ending for a non-technical explanation is…', ['the action you need', 'a long list of commands', 'a joke'], 0),
        mc('"Jargon" is…', ['specialist words that outsiders may not understand', 'a type of music', 'a password'], 0),
        mc('"Oversimplify" means to…', ['make something so simple that it becomes inaccurate', 'make it perfect', 'translate it'], 0),
        mc('The "main takeaway" is…', ['the most important idea to remember', 'the last line of code', 'a food order'], 0),
        fill('Let me ___ one point before we continue. (clarify)', 'clarify'),
        order('Piensa en el firewall como un guardia en la puerta.', 'Think of the firewall as a guard at the door.'),
        hear(['Put simply, it is safe.', 'Put simply, it is late.', 'Put simply, it is sane.'], 0, 'Se oía «safe».')
      ]
    }

  );
})();
