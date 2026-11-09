/* Inglés general, nivel C1 (parte 1): g37 a g39. */
(function () {
  var mc = EL.mc, fill = EL.fill, order = EL.order, hear = EL.hear;
  EL.lessons.push(

    {
      id: 'g37', track: 'general', level: 'C1', title: 'Inversión y énfasis', en: 'Inversion and emphasis',
      explain:
        '<p>En inglés formal y literario se pone un adverbio negativo al principio y se <b>invierte el orden</b> (auxiliar + sujeto). Da <b>énfasis</b> y suena avanzado.</p>' +
        '<table><tr><th>Estructura</th><th>Ejemplo</th></tr>' +
        '<tr><td><i lang="en">Never / Rarely / Seldom + auxiliar + sujeto</i></td><td><i lang="en">Never have I seen such a mess.</i></td></tr>' +
        '<tr><td><i lang="en">Not only + auxiliar + sujeto … but also</i></td><td><i lang="en">Not only did she win, but she also broke the record.</i></td></tr>' +
        '<tr><td><i lang="en">Hardly / No sooner … when / than</i></td><td><i lang="en">Hardly had we arrived when it started to rain.</i></td></tr>' +
        '<tr><td><i lang="en">Only after / Only when + auxiliar + sujeto</i></td><td><i lang="en">Only after the test did I understand it.</i></td></tr>' +
        '<tr><td><i lang="en">Under no circumstances + auxiliar + sujeto</i></td><td><i lang="en">Under no circumstances should you share your password.</i></td></tr></table>' +
        '<p>Si no hay auxiliar, se añade <i lang="en">do / does / did</i>: <i lang="en">Rarely does he complain.</i></p>' +
        '<p><b>Oraciones enfáticas (cleft):</b> <i lang="en">It was the cost that worried me.</i> / <i lang="en">What I need is a rest.</i> / <i lang="en">The reason why I left was the noise.</i></p>' +
        '<p>Úsalas con moderación: una o dos en un texto son suficientes.</p>',
      vocab: [
        ['seldom', 'rara vez', 'Seldom do we see such talent.'],
        ['hardly', 'apenas', 'Hardly anyone noticed the mistake.'],
        ['no sooner', 'apenas… (cuando)', 'No sooner had he left than it rained.'],
        ['circumstances', 'circunstancias', 'Under no circumstances should you open it.'],
        ['emphasis', 'énfasis', 'Inversion adds emphasis to a sentence.'],
        ['break a record', 'batir un récord', 'She broke the world record.'],
        ['complain', 'quejarse', 'Rarely does he complain about work.'],
        ['reveal', 'revelar', 'Only then did he reveal the truth.'],
        ['mess', 'desorden, lío', 'Never have I seen such a mess.'],
        ['stand out', 'destacar', 'Her essay stood out from the rest.']
      ],
      ex: [
        mc('Which sentence is correct?', ['Never have I seen such a mess.', 'Never I have seen such a mess.', 'Never I saw have such a mess.'], 0),
        mc('Not only ___ she win, but she also broke the record.', ['did', 'does', 'was'], 0),
        mc('Hardly ___ we arrived when it started to rain.', ['had', 'have', 'did'], 0),
        fill('Under no circumstances ___ you share your password. (should)', 'should'),
        mc('Which is a cleft (emphatic) sentence?', ['What I need is a rest.', 'I need a rest.', 'A rest I need not.'], 0),
        order('Rara vez se queja de su trabajo.', 'Rarely does he complain about his work.')
      ],
      read: {
        t: "Few companies have changed an industry as quickly as this start-up. Not only did it launch a product in just six months, but it also won three international awards in its first year. Seldom does a young team receive so much attention. Hardly had the founders celebrated their first sale when new orders began to arrive from abroad. It was their focus on customer service that made the difference. Under no circumstances would they compromise on quality, even when competitors offered cheaper alternatives. What impressed investors most was the team's honesty about its mistakes.",
        tr: 'Pocas empresas han cambiado una industria tan rápido como esta start-up. No solo lanzó un producto en apenas seis meses, sino que además ganó tres premios internacionales en su primer año. Rara vez un equipo joven recibe tanta atención. Apenas habían celebrado los fundadores su primera venta cuando empezaron a llegar pedidos del extranjero. Fue su enfoque en la atención al cliente lo que marcó la diferencia. Bajo ninguna circunstancia aceptaban sacrificar la calidad, aunque los competidores ofrecieran alternativas más baratas. Lo que más impresionó a los inversores fue la honestidad del equipo sobre sus errores.',
        q: [mc('What did the start-up do in its first year?', ['Won three international awards', 'Closed two offices', 'Changed its name'], 0), mc('What made the difference?', ['Its focus on customer service', 'Its low prices', 'Its advertising'], 0), mc('What impressed investors most?', ['The team\'s honesty about mistakes', 'The office location', 'The founders\' age'], 0)]
      },
      write: { p: 'Escribe 4 frases con inversión sobre tu vida de estudiante: una con Never have I, una con Not only… but also, una con Hardly… when y una con Rarely.', m: 'Never have I studied so hard. Not only did I pass, but I also improved my English. Hardly had I finished when the next task arrived. Rarely do I sleep before midnight.' },
      q: 'English inversion negative adverbs advanced grammar never have I',
      listen: { d: [['Host', 'Your company grew very fast. What was the secret?'], ['Founder', 'Not only did we have a good product, but we also listened to our customers.'], ['Host', 'Was it always easy?'], ['Founder', 'Hardly. No sooner had we solved one problem than another appeared.'], ['Host', 'Would you change anything?'], ['Founder', 'Under no circumstances would I give up our values. Never have I regretted that decision.']],
        q: [mc('¿Cuál fue el secreto según el fundador?', ['A good product and listening to customers', 'Cheap prices', 'Luck'], 0), mc('¿Fue siempre fácil?', ['No, problems kept appearing', 'Yes, always', 'He did not answer'], 0), mc('¿Qué nunca lamentó?', ['Keeping his values', 'Starting the company', 'Hiring a team'], 0)] },
      quiz: [
        mc('Choose the correct sentence.', ['Rarely does he arrive late.', 'Rarely he arrives late.', 'Rarely arrives he late.'], 0),
        mc('No sooner had she left ___ the phone rang.', ['than', 'when', 'that'], 0),
        mc('Only after the exam ___ I relax.', ['did', 'do', 'was'], 0),
        mc('Which sentence is an emphatic cleft sentence?', ['It was the noise that annoyed me.', 'The noise annoyed me.', 'Annoyed me the noise.'], 0),
        mc('After "Seldom" the next word is usually…', ['an auxiliary verb', 'a noun', 'a comma'], 0),
        fill('Never ___ I seen such a view. (have)', 'have'),
        order('Bajo ninguna circunstancia deberías abrir ese archivo.', 'Under no circumstances should you open that file.'),
        hear(['Hardly had we arrived.', 'Hardly have we arrived.', 'Hardly had she arrived.'], 0, 'Se oía «had we arrived».')
      ]
    },

    {
      id: 'g38', track: 'general', level: 'C1', title: 'Subjuntivo, hipótesis y modales avanzados', en: 'Subjunctive and advanced modals',
      explain:
        '<p>En el inglés formal existe el <b>subjuntivo</b>: después de verbos y adjetivos de <b>recomendación, necesidad o exigencia</b> el verbo va en <b>forma base</b>, sin -s.</p>' +
        '<table><tr><th>Estructura</th><th>Ejemplo</th></tr>' +
        '<tr><td><i lang="en">suggest / insist / recommend / demand that + sujeto + base</i></td><td><i lang="en">I suggest that he <b>go</b> home.</i></td></tr>' +
        '<tr><td><i lang="en">It is essential / vital / important that + base</i></td><td><i lang="en">It is vital that she <b>be</b> informed.</i></td></tr>' +
        '<tr><td><i lang="en">Were I / Had I / Should you (inversión condicional)</i></td><td><i lang="en">Were I you, I would accept. / Had I known, I would have called. / Should you need help, call me.</i></td></tr>' +
        '<tr><td><i lang="en">If it were not for / But for</i></td><td><i lang="en">But for your help, we would have failed.</i></td></tr></table>' +
        '<p><b>Modales con matiz:</b> <i lang="en">may well</i> (es muy probable), <i lang="en">might as well</i> (más vale), <i lang="en">be bound to</i> (seguro que), <i lang="en">be liable to</i> (tiende a, puede), <i lang="en">would rather + sujeto + pasado</i> (<i lang="en">I would rather you stayed.</i>), <i lang="en">had better</i> (más te vale).</p>',
      vocab: [
        ['insist', 'insistir', 'She insisted that he be present.'],
        ['essential', 'esencial', 'It is essential that we act now.'],
        ['demand', 'exigir', 'They demanded that the fee be refunded.'],
        ['may well', 'es muy probable que', 'She may well win the prize.'],
        ['might as well', 'más vale (hacer algo)', 'We might as well start now.'],
        ['bound to', 'seguro que (va a ocurrir)', 'He is bound to be late.'],
        ['liable to', 'propenso a', 'The old bridge is liable to collapse.'],
        ['but for', 'de no ser por', 'But for you, I would have failed.'],
        ['had better', 'más te vale', 'You had better check it twice.'],
        ['refund', 'reembolso', 'They offered a full refund.']
      ],
      ex: [
        mc('I suggest that he ___ home.', ['go', 'goes', 'went'], 0),
        mc('It is vital that she ___ informed.', ['be', 'is', 'was'], 0),
        mc('___ I you, I would accept the offer.', ['Were', 'Was', 'Am'], 0),
        fill('___ I known, I would have called you. (Had)', 'Had'),
        mc('"But for your help, we would have failed" means…', ['Without your help, we would have failed', 'Besides your help, we failed', 'You helped us fail'], 0),
        order('Preferiría que te quedaras.', 'I would rather you stayed.')
      ],
      read: {
        t: "The board of a small school received a difficult request last month. Parents demanded that the cafeteria be closed until it had been inspected. The director insisted that every student be informed immediately. Had the problem been found earlier, the school might have avoided the complaint. Were the inspection to confirm any danger, the school would have to pay a refund to the families. An expert advised that the school hire an independent company. It is essential that the report be published, he said, because the community may well lose its trust otherwise. In the end, the board agreed that it had better act without delay.",
        tr: 'La junta de un colegio pequeño recibió el mes pasado una solicitud difícil. Los padres exigieron que se cerrara la cafetería hasta que fuera inspeccionada. El director insistió en que todos los estudiantes fueran informados de inmediato. Si el problema se hubiera detectado antes, el colegio podría haber evitado la queja. Si la inspección confirmara algún peligro, el colegio tendría que reembolsar dinero a las familias. Un experto aconsejó que el colegio contratara una empresa independiente. Es esencial que se publique el informe, dijo, porque la comunidad podría perder la confianza de lo contrario. Al final, la junta acordó que más valía actuar sin demora.',
        q: [mc('What did the parents demand?', ['That the cafeteria be closed', 'That the school be sold', 'That the director resign'], 0), mc('What did the expert advise?', ['Hiring an independent company', 'Ignoring the report', 'Closing the school'], 0), mc('What did the board decide?', ['To act without delay', 'To wait a month', 'To ask for another opinion'], 0)]
      },
      write: { p: 'Escribe 4 frases formales de recomendación: una con suggest that, una con It is essential that, una con Were I… y una con Had I…', m: 'I suggest that you read the instructions. It is essential that everyone be present. Were I in your position, I would apply now. Had I known, I would have prepared more.' },
      q: 'English subjunctive suggest that he go formal advanced grammar',
      listen: { d: [['Manager', 'The client demanded that the system be tested again.'], ['Engineer', 'I would rather we tested it tomorrow. We are tired.'], ['Manager', 'It is essential that the report be ready today.'], ['Engineer', 'Understood. Had we started earlier, we would not be in this situation.'], ['Manager', 'We might as well finish it now. Should you need help, call me.'], ['Engineer', 'Thank you. I suggest that we split the work in two.']],
        q: [mc('¿Qué exigió el cliente?', ['That the system be tested again', 'A refund', 'A new engineer'], 0), mc('¿Qué prefiere el ingeniero?', ['Test tomorrow', 'Test tonight', 'Cancel the test'], 0), mc('¿Qué sugiere al final?', ['Split the work in two', 'Stop working', 'Ask the client'], 0)] },
      quiz: [
        mc('She insisted that he ___ present.', ['be', 'is', 'was'], 0),
        mc('___ you need help, call me.', ['Should', 'Would', 'Could'], 0),
        mc('"He is bound to be late" means…', ['he will certainly be late', 'he is tied', 'he cannot be late'], 0),
        mc('I would rather you ___ here.', ['stayed', 'stay', 'to stay'], 0),
        mc('"Liable to" is closest in meaning to…', ['likely to (often negative)', 'responsible for paying', 'unable to'], 0),
        fill('We ___ as well start now. (might)', 'might'),
        order('Más te vale revisar el informe dos veces.', 'You had better check the report twice.'),
        hear(['It is vital that she be informed.', 'It is vital that she is informed.', 'It is vital that he be informed.'], 0, 'Se oía «she be informed».')
      ]
    },

    {
      id: 'g39', track: 'general', level: 'C1', title: 'Atenuar (hedging) y registro académico', en: 'Hedging and academic register',
      explain:
        '<p>En textos académicos y profesionales <b>no se afirma todo de forma absoluta</b>. Se usa <b>hedging</b> (atenuación) para mostrar prudencia y precisión.</p>' +
        '<table><tr><th>Absoluto (evitar)</th><th>Atenuado (mejor)</th></tr>' +
        '<tr><td><i lang="en">Social media causes depression.</i></td><td><i lang="en">Social media <b>may</b> contribute to depression.</i></td></tr>' +
        '<tr><td><i lang="en">This proves that…</i></td><td><i lang="en">This <b>suggests</b> / <b>indicates</b> that…</i></td></tr>' +
        '<tr><td><i lang="en">Everyone agrees…</i></td><td><i lang="en">It is <b>widely</b> believed that… / <b>Many</b> researchers argue…</i></td></tr>' +
        '<tr><td><i lang="en">It is always true.</i></td><td><i lang="en">It <b>tends to</b> be true. / It is <b>largely</b> true.</i></td></tr></table>' +
        '<p><b>Recursos:</b> verbos (<i lang="en">appear, seem, tend, suggest</i>), modales (<i lang="en">may, might, could</i>), adverbios (<i lang="en">arguably, presumably, generally, to some extent</i>), estructuras (<i lang="en">It appears that…, There is evidence that…, It could be argued that…</i>).</p>' +
        '<p><b>Registro:</b> en formal se evitan contracciones (<i lang="en">do not</i>), phrasal verbs muy coloquiales (<i lang="en">find out → determine</i>, <i lang="en">look into → investigate</i>) y expresiones vagas como <i lang="en">a lot of</i> (mejor: <i lang="en">a considerable number of</i>).</p>',
      vocab: [
        ['arguably', 'se podría argumentar que', 'This is arguably the best solution.'],
        ['tend to', 'tender a', 'Students tend to forget quickly.'],
        ['suggest', 'sugerir, indicar (datos)', 'The results suggest a strong link.'],
        ['presumably', 'presumiblemente', 'Presumably, the data are accurate.'],
        ['to some extent', 'hasta cierto punto', 'This is true to some extent.'],
        ['largely', 'en gran medida', 'The study was largely successful.'],
        ['evidence', 'evidencia', 'There is evidence that sleep helps memory.'],
        ['considerable', 'considerable', 'A considerable number of users left.'],
        ['investigate', 'investigar', 'We need to investigate the cause.'],
        ['contribute to', 'contribuir a', 'Stress may contribute to illness.']
      ],
      ex: [
        mc('Which sentence is more cautious?', ['Stress may contribute to illness.', 'Stress causes illness.', 'Stress is illness.'], 0),
        mc('The results ___ that sleep improves memory.', ['suggest', 'prove forever', 'shout'], 0),
        fill('This is ___ the best solution. (arguably)', 'arguably'),
        mc('More formal than "find out" is…', ['determine', 'get to know', 'dig out'], 0),
        mc('"To some extent" means…', ['partly', 'completely', 'never'], 0),
        order('Parece que los resultados son confiables.', 'It appears that the results are reliable.')
      ],
      read: {
        t: "Recent studies suggest that students who sleep eight hours tend to perform better in exams. However, it would be misleading to claim that sleep alone determines success. Presumably, other factors such as motivation and study habits also play a role. The researchers acknowledge that their sample was relatively small and largely limited to one university, so the findings may not apply to every context. It could be argued that the effect is stronger for complex tasks than for simple ones, but further research is needed to confirm this. To some extent, the results support what many teachers have long believed.",
        tr: 'Estudios recientes sugieren que los estudiantes que duermen ocho horas tienden a rendir mejor en los exámenes. Sin embargo, sería engañoso afirmar que el sueño por sí solo determina el éxito. Presumiblemente, otros factores como la motivación y los hábitos de estudio también influyen. Los investigadores reconocen que su muestra fue relativamente pequeña y limitada en gran parte a una universidad, así que los hallazgos podrían no aplicarse a todos los contextos. Podría argumentarse que el efecto es más fuerte en tareas complejas que en las simples, pero se necesita más investigación para confirmarlo. Hasta cierto punto, los resultados respaldan lo que muchos profesores han creído desde hace tiempo.',
        q: [mc('What do the studies suggest?', ['Students who sleep eight hours tend to do better', 'Sleep has no effect', 'Exams are unfair'], 0), mc('What limitation is mentioned?', ['The sample was small', 'The exam was easy', 'The study was too long'], 0), mc('What is needed to confirm the effect?', ['Further research', 'More exams', 'A new teacher'], 0)]
      },
      write: { p: 'Reescribe con atenuación (hedging) esta frase absoluta: "Video games make teenagers violent." Escribe 3 versiones más prudentes.', m: 'Video games may contribute to aggression in some teenagers. It could be argued that the link is weak. Research suggests that the effect tends to be small.' },
      q: 'academic hedging language English may suggest tend to arguably',
      listen: { d: [['Professor', 'Your essay says that technology destroys creativity. That is a very strong claim.'], ['Student', 'Do you mean I should be more cautious?'], ['Professor', 'Yes. You could write that technology may reduce creativity in some cases.'], ['Student', 'Or that it tends to limit it, to some extent?'], ['Professor', 'Exactly. And add evidence: the data suggest a link, but they do not prove it.']],
        q: [mc('¿Qué problema tiene el ensayo?', ['The claim is too absolute', 'It is too short', 'It has no title'], 0), mc('¿Qué frase propone el profesor?', ['Technology may reduce creativity', 'Technology always destroys creativity', 'Technology is good'], 0), mc('¿Qué debe agregar?', ['Evidence', 'Pictures', 'A joke'], 0)] },
      quiz: [
        mc('"The data suggest…" is…', ['cautious language', 'a certainty', 'a question'], 0),
        mc('Which phrase hedges a claim?', ['It could be argued that', 'Everyone knows that', 'Without doubt'], 0),
        mc('Better in formal writing:', ['a considerable number of', 'a bunch of', 'loads of'], 0),
        mc('"Presumably" means…', ['it is reasonable to assume', 'for sure', 'never'], 0),
        mc('In academic writing it is better to avoid…', ['contractions like don\'t', 'evidence', 'linking words'], 0),
        fill('Students ___ to forget quickly without practice. (tend)', 'tend'),
        order('Parece que el efecto es pequeño.', 'It appears that the effect is small.'),
        hear(['It is largely true.', 'It is rarely true.', 'It is largely through.'], 0, 'Se oía «largely true».')
      ]
    }

  );
})();
