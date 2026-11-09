/* Simulacros tipo IELTS Academic y TOEFL iBT (formato 2026). Todo el contenido es ORIGINAL de Bhalleffort:
   no son preguntas oficiales ni de exámenes anteriores. Son versiones cortas que siguen el formato y la dificultad aproximada.
   Cada sección: l (escucha), r (lectura), w (escritura), s (habla). */
(function () {
  var mc = EL.mc, fill = EL.fill;
  var TFNG = ['True', 'False', 'Not Given'], YNNG = ['Yes', 'No', 'Not Given'];
  function tf(q, a) { return mc(q, TFNG, a); }
  function yn(q, a) { return mc(q, YNNG, a); }
  /* Frase para armar: el estudiante recibe las palabras desordenadas y escribe la frase. a = frase correcta (y variantes). */
  function build(a, more) { return { t: 'build', s: a, a: [a].concat(more || []) }; }

  EL.SIMS = {

    /* =============================== IELTS ACADEMIC =============================== */
    ielts: {
      name: 'IELTS Academic', short: 'IELTS',
      info: 'Versión corta del examen: Escucha 4 partes (20 preguntas), Lectura 3 textos (15 preguntas), Escritura Task 1 + Task 2 y Habla en 3 partes. El examen real tiene 40 preguntas en Escucha y Lectura; aquí se escalan a 40 para estimar la banda.',
      secs: {

        l: {
          name: 'Listening', desc: '4 partes · 20 preguntas · el audio suena una sola vez',
          parts: [
            { title: 'Parte 1 · Una llamada para inscribirse al gimnasio', intro: 'Completa las frases con UNA palabra o UN número.',
              say: [['Receptionist', 'Good morning, Riverside Fitness. How can I help you?'], ['Customer', 'Hello. I would like to join the gym. Do you have any special offers?'],
                ['Receptionist', 'Yes. If you are a student, you can get the student membership. It is twenty-five pounds a month instead of forty.'],
                ['Customer', 'That sounds great. I am a student at the university, so I will take it.'],
                ['Receptionist', 'Perfect. Your first induction class is on Thursday evening. It starts at half past six.'],
                ['Customer', 'Is there anything I need to bring?'],
                ['Receptionist', 'Just a towel and a bottle of water. Everything else is provided.'],
                ['Customer', 'Thank you. I will see you on Thursday.']],
              q: [fill('Normal price per month: £ ____', ['40', 'forty']), fill('Student price per month: £ ____', ['25', 'twenty five', 'twenty-five']),
                fill('First class: ____ evening', ['thursday']), fill('The class starts at ____ (time)', ['6 30', '6:30', 'six thirty', 'half past six', '630', '18 30']),
                fill('Bring a towel and a bottle of ____', ['water'])] },

            { title: 'Parte 2 · Introducción a una visita guiada', intro: 'Elige la respuesta correcta: A, B o C.',
              say: [['Guide', 'Welcome to the Maritime Museum. Before we begin, a few practical points.'],
                ['Guide', 'The tour will last about ninety minutes, and we will start in the Navigation Gallery on the ground floor.'],
                ['Guide', 'Photography is allowed everywhere except in the Documents Room, where the light can damage old maps.'],
                ['Guide', 'If you need a break, the café is on the second floor, and it closes at four o\'clock.'],
                ['Guide', 'Lockers are free, but they are only available near the main entrance, so please leave large bags there.'],
                ['Guide', 'After the tour, you can visit the special exhibition about Arctic expeditions, which finishes next month. Tickets for it must be bought at the gift shop, not at the entrance.']],
              q: [mc('How long will the tour last?', ['About 60 minutes', 'About 90 minutes', 'About 120 minutes'], 1),
                mc('Where is photography NOT allowed?', ['In the Navigation Gallery', 'In the café', 'In the Documents Room'], 2),
                mc('What time does the café close?', ['3 p.m.', '4 p.m.', '5 p.m.'], 1),
                mc('Where are the lockers?', ['Near the main entrance', 'On the second floor', 'In the gift shop'], 0),
                mc('Where must tickets for the special exhibition be bought?', ['At the entrance', 'At the café', 'At the gift shop'], 2)] },

            { title: 'Parte 3 · Una estudiante y su tutor', intro: 'Elige la respuesta correcta: A, B o C.',
              say: [['Tutor', 'Maya, how is your research project on student sleep going?'],
                ['Maya', 'Fairly well, Dr Patel. I have finished the questionnaire and I have collected answers from eighty students.'],
                ['Tutor', 'That is a good sample. What have you found so far?'],
                ['Maya', 'Most of them sleep less than seven hours on weekdays, mainly because they study late. Surprisingly, phone use was not as important as I expected.'],
                ['Tutor', 'Interesting. Have you thought about how to present the results?'],
                ['Maya', 'I was thinking of using a long table, but I think charts would be clearer.'],
                ['Tutor', 'I agree. But remember that your sample came from only one department, so you should mention that limitation.'],
                ['Maya', 'That is a good point. Should I also add interviews?'],
                ['Tutor', 'Not at this stage. The deadline is in three weeks, so I would concentrate on the analysis and write the first draft by next Friday.'],
                ['Maya', 'OK. I will send you the draft on Friday.']],
              q: [mc('How many students answered the questionnaire?', ['18', '80', '800'], 1),
                mc('What is the main reason students sleep less?', ['They study late', 'They use their phones', 'They live in noisy places'], 0),
                mc('How will Maya present her results?', ['In a long table', 'In charts', 'In a video'], 1),
                mc('Which limitation should Maya mention?', ['The questionnaire was too short', 'The sample came from one department', 'The students were too young'], 1),
                mc('What will Maya do by next Friday?', ['Send a first draft', 'Interview students', 'Collect more questionnaires'], 0)] },

            { title: 'Parte 4 · Una clase sobre techos verdes', intro: 'Completa las frases con UNA palabra o UN número.',
              say: [['Lecturer', 'Today I would like to talk about green roofs, which are roofs covered with plants. They have become popular in many cities over the last thirty years.'],
                ['Lecturer', 'The first benefit is temperature. On a hot day, a green roof can be up to twenty degrees cooler than a normal roof, so buildings need less air conditioning.'],
                ['Lecturer', 'The second benefit is water. Plants absorb rainwater, which reduces the risk of flooding after heavy storms.'],
                ['Lecturer', 'Green roofs also support wildlife. Several studies have found that insects and birds use them, especially bees.'],
                ['Lecturer', 'However, there are some difficulties. The structure of the building must be strong enough, because wet soil is very heavy.'],
                ['Lecturer', 'In addition, the cost of installation is higher than for ordinary roofs, although it is usually repaid through lower energy bills.']],
              q: [fill('Green roofs became popular over the last ____ years.', ['30', 'thirty']), fill('Green roofs can be up to ____ degrees cooler than normal roofs.', ['20', 'twenty']),
                fill('Plants absorb rainwater, which reduces the risk of ____.', ['flooding', 'floods', 'flood']), fill('Insects and birds use green roofs, especially ____.', ['bees']),
                fill('The building structure must be strong because wet soil is very ____.', ['heavy'])] }
          ]
        },

        r: {
          name: 'Reading', minutes: 30, desc: '3 textos · 15 preguntas · 30 minutos',
          parts: [
            { title: 'Texto 1 · El auge del ciclismo urbano', intro: 'Escribe en cada pregunta: True (el texto lo dice), False (dice lo contrario) o Not Given (no lo menciona).',
              t: ['Over the past two decades, cycling has moved from the edge of city transport planning to its centre. In 1990, fewer than two percent of journeys in Greater Brook City were made by bicycle. Today the figure is nearly fourteen percent. Planners credit this change mainly to protected bike lanes, which separate cyclists from cars and make cycling feel safer for beginners. Surveys show that people who would never ride in mixed traffic are willing to ride on protected lanes.',
                'The benefits go beyond transport. Cyclists tend to spend less on commuting, and local shops report that customers who arrive by bike visit more often than those who drive, although they spend less on each visit. Public health researchers also point out that cycling to work reduces the risk of heart disease.',
                'However, the shift has not been universal. Some residents argue that removing parking spaces to build bike lanes has harmed small businesses on the busiest streets. The city council has promised to review these complaints next year, but it insists that the long-term plan will continue.'],
              q: [tf('Fewer than two percent of journeys were made by bicycle in 1990.', 0), tf('Protected bike lanes are the only reason for the increase in cycling.', 1),
                tf('Customers who arrive by bike spend more on each visit than drivers do.', 1), tf('Researchers say cycling to work can lower the risk of heart disease.', 0),
                tf('Most residents of the busiest streets own a bicycle.', 2)] },

            { title: 'Texto 2 · Microplásticos', intro: 'Preguntas 6 a 8: elige el título que mejor encaja con cada párrafo. Preguntas 9 y 10: completa con UNA palabra del texto.',
              t: ['A  Microplastics are tiny pieces of plastic, usually smaller than five millimetres. Some are produced deliberately, for example the small beads once used in cosmetic products. Others form when larger objects, such as bottles and fishing nets, slowly break into fragments under the sun and waves.',
                'B  Scientists first noticed the problem in the 1970s, but serious research began only in the 2000s, when improved microscopes made it possible to count particles in samples of sea water. Today, microplastics have been found in places as distant as polar ice and the deepest ocean trenches.',
                'C  The effects on living things are still being studied. Small fish and shellfish can swallow the particles, and there is concern that harmful chemicals may pass along the food chain to humans. However, researchers stress that the evidence is still limited, and they warn against exaggerating the risk. At the same time, many governments have already banned microbeads in cosmetics, and some are now looking at the way clothes release fibres when they are washed.'],
              q: [mc('Choose the best heading for paragraph A.', ['i. Early warnings and better tools', 'ii. Where the particles come from', 'iii. Uncertain risks and political reaction', 'iv. A solution found in nature', 'v. The cost of cleaning the oceans'], 1),
                mc('Choose the best heading for paragraph B.', ['i. Early warnings and better tools', 'ii. Where the particles come from', 'iii. Uncertain risks and political reaction', 'iv. A solution found in nature', 'v. The cost of cleaning the oceans'], 0),
                mc('Choose the best heading for paragraph C.', ['i. Early warnings and better tools', 'ii. Where the particles come from', 'iii. Uncertain risks and political reaction', 'iv. A solution found in nature', 'v. The cost of cleaning the oceans'], 2),
                fill('Microplastics are usually smaller than five ____.', ['millimetres', 'millimeters', 'mm']), fill('Improved ____ made it possible to count particles in sea water.', ['microscopes'])] },

            { title: 'Texto 3 · Trabajo remoto y creatividad', intro: 'Preguntas 11 a 13: elige A, B o C. Preguntas 14 y 15: Yes (coincide con la opinión del autor), No (la contradice) o Not Given.',
              t: ['Few changes in working life have been discussed as much as the rise of remote work. Supporters point to savings in commuting time and to employees\' greater control over their schedules. Studies from several large companies suggest that, for routine tasks, people working from home are at least as productive as those in offices.',
                'Creative work, however, may be different. A recent experiment compared teams that brainstormed ideas in the same room with teams that did so by video call. The face-to-face groups produced slightly more ideas, but the ideas from the video-call groups were rated as equally original. The researchers concluded that the format matters less than how the meeting is run: clear goals and a short time limit improved results in both settings.',
                'It would be unwise, therefore, to treat remote work as either a miracle or a threat. Companies that approach it with open minds and test different arrangements are likely to find the combination that suits their own staff. What is certain is that the old assumption, that good work can only happen in an office, no longer holds.'],
              q: [mc('According to the first paragraph, supporters like remote work because…', ['it lowers salaries', 'employees save commuting time and control their schedules', 'it replaces all meetings'], 1),
                mc('In the experiment, the face-to-face groups…', ['produced slightly more ideas', 'produced more original ideas', 'finished faster'], 0),
                mc('The researchers concluded that results improved when…', ['meetings were longer', 'goals were clear and time was limited', 'teams were smaller'], 1),
                yn('The writer believes remote work is always better than office work.', 1), yn('The writer thinks companies should try different working arrangements.', 0)] }
          ]
        },

        w: {
          name: 'Writing', desc: 'Task 1 (20 min, 150 palabras) + Task 2 (40 min, 250 palabras)',
          tasks: [
            { title: 'Task 1 · Describir una tabla', minutes: 20, min: 150,
              p: 'The table shows the percentage of adults who used online banking in four age groups in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
              table: { cap: 'Adults who use online banking (%)', head: ['Age group', '2010', '2020'], rows: [['18–29', '38', '86'], ['30–44', '31', '81'], ['45–59', '17', '64'], ['60+', '5', '37']] },
              rubric: ['Escribí un overview claro con las tendencias generales (no solo listé números) y cubrí los datos principales.',
                'Agrupé los datos de forma lógica (por edad o por año) y usé comparaciones y conectores (whereas, by contrast).',
                'Usé vocabulario de tendencias y cifras variado (rose, increased sharply, roughly, just over…) sin repetir siempre el mismo verbo.',
                'Mis frases son correctas y variadas (tiempos, comparativos, subordinadas) con pocos errores.'] },
            { title: 'Task 2 · Ensayo de opinión', minutes: 40, min: 250,
              p: 'Some people believe that governments should spend more money on public transport than on building new roads. To what extent do you agree or disagree? Give reasons for your answer and include relevant examples from your own knowledge or experience.',
              rubric: ['Respondí todas las partes de la pregunta con una postura clara y la mantuve en todo el ensayo.',
                'Organicé el ensayo en párrafos con una idea principal cada uno y conectores naturales (no solo First, Second).',
                'Usé vocabulario preciso y variado sobre transporte y gobierno, con algunas palabras menos comunes bien usadas.',
                'Usé estructuras variadas (condicionales, pasivas, relativas) y casi no tuve errores que dificulten la lectura.'] }
          ]
        },

        s: {
          name: 'Speaking', desc: '3 partes · 11–14 minutos · se graba tu voz',
          steps: [
            { title: 'Parte 1 · Preguntas personales', say: 'Let us talk about your hometown. Where are you from, and what do you like about it?', prompt: 'Where are you from, and what do you like about your hometown?', max: 40 },
            { title: 'Parte 1 · Preguntas personales', say: 'Now let us talk about your studies. What are you studying, and why did you choose it?', prompt: 'What are you studying, and why did you choose it?', max: 40 },
            { title: 'Parte 1 · Preguntas personales', say: 'Now let us talk about technology. How often do you use your phone, and what do you use it for?', prompt: 'How often do you use your phone, and what do you use it for?', max: 40 },
            { title: 'Parte 2 · Tarjeta de tema', prompt: 'Describe a website or an app that you use often.', bullets: ['what it is', 'how often you use it', 'what you use it for', 'and explain why it is useful to you'], prep: 60, max: 120 },
            { title: 'Parte 3 · Discusión', say: 'Do you think people spend too much time on their phones? Why, or why not?', prompt: 'Do you think people spend too much time on their phones? Why, or why not?', max: 60 },
            { title: 'Parte 3 · Discusión', say: 'How might apps and websites change education in the future?', prompt: 'How might apps and websites change education in the future?', max: 60 },
            { title: 'Parte 3 · Discusión', say: 'Some people say that technology makes us less sociable. To what extent do you agree?', prompt: 'Some people say that technology makes us less sociable. To what extent do you agree?', max: 60 }
          ],
          rubric: ['Fluidez: hablé sin pausas largas, pude seguir aunque dudé y no memoricé ni leí.',
            'Vocabulario: usé palabras variadas y, cuando me faltó una, expliqué la idea con otras palabras.',
            'Gramática: combiné frases simples y complejas (because, although, if) con pocos errores que no impidieron entender.',
            'Pronunciación: se me entiende bien; el acento de la frase, la entonación y los sonidos son claros.']
        }
      }
    },

    /* =============================== TOEFL iBT (2026) =============================== */
    toefl: {
      name: 'TOEFL iBT', short: 'TOEFL',
      info: 'Versión corta que sigue las tareas del TOEFL iBT 2026: Lectura (completar palabras, lectura cotidiana, pasaje académico), Escucha (elegir respuesta, conversación, anuncio, charla), Escritura (armar frase, correo, discusión académica) y Habla (escuchar y repetir, entrevista). El examen real es adaptativo; aquí es de dificultad fija.',
      secs: {

        r: {
          name: 'Reading', minutes: 20, desc: '3 tareas · 16 preguntas · 20 minutos',
          parts: [
            { title: 'Tarea 1 · Complete the Words', kind: 'cloze', intro: 'Escribe las letras que faltan para completar cada palabra.',
              t: 'The city library has [[chan|ged]] a great deal in recent years. Today it offers not only books but also [[com|puters]], quiet rooms, and free classes. Many visitors come to [[stu|dy]] for exams, while others [[att|end]] workshops on writing and job skills. The staff say the main [[rea|son]] for this change is that people need a safe place to learn. As a [[res|ult]], the number of visitors has [[incre|ased]] by almost a third, and the library plans to [[ext|end]] its opening hours.' },
            { title: 'Tarea 2 · Read in Daily Life', intro: 'Lee el aviso y responde.',
              t: ['Subject: Change to the lab schedule',
                'Dear students, because of maintenance work, the computer lab will be closed on Tuesday and Wednesday. It will reopen on Thursday at 9 a.m., with extended hours until 9 p.m. during exam week.',
                'If you need to submit an assignment that requires lab software, please contact Ms. Reyes by Monday so that she can arrange access to the smaller lab in the library. Printing services will remain available in the main building.'],
              q: [mc('Why will the computer lab be closed?', ['Because of maintenance work', 'Because of exam week', 'Because of a software error'], 0),
                mc('What should students do if they need lab software on Tuesday?', ['Wait until Thursday', 'Contact Ms. Reyes by Monday', 'Use the printing service'], 1),
                mc('What will stay available while the lab is closed?', ['The smaller lab in the library', 'Extended hours', 'Printing services in the main building'], 2)] },
            { title: 'Tarea 3 · Read an Academic Passage', intro: 'Lee el pasaje y responde.',
              t: ['Octopuses can change the colour and texture of their skin in less than a second, a skill that has fascinated biologists for centuries. The mechanism depends on thousands of tiny organs called chromatophores, each containing a sac of pigment surrounded by muscles. When the muscles contract, the sac stretches into a flat disc and the colour becomes visible; when they relax, the pigment shrinks to a tiny dot.',
                'Surprisingly, octopuses appear to be colour-blind, since their eyes contain only one type of light-sensitive cell. Researchers therefore wonder how the animals match their surroundings so accurately. One hypothesis is that the skin itself contains light-sensitive proteins that help detect colour. Another suggests that the unusual shape of the octopus pupil allows it to compare light from different angles.',
                'Camouflage is not the only purpose of colour change. Octopuses also use sudden flashes of pattern to startle predators, and males sometimes display dark stripes to warn rivals. Because the animals are solitary and live only a few years, scientists believe these rapid signals evolved as a form of communication that does not require long social learning.'],
              q: [mc('The word "contract" in paragraph 1 is closest in meaning to…', ['tighten', 'expand', 'disappear'], 0),
                mc('According to paragraph 1, what makes the colour visible?', ['The muscles contract and the sac becomes a flat disc', 'The pigment shrinks to a tiny dot', 'New pigment is produced'], 0),
                mc('Why do researchers find the octopus\'s accuracy puzzling?', ['The animal moves very slowly', 'The animal seems unable to see colour', 'The skin has very few organs'], 1),
                mc('What can be inferred about the light-sensitive proteins idea?', ['It has been proven', 'It is one proposed explanation', 'It has been rejected'], 1),
                mc('Why does the author mention that octopuses are solitary and short-lived?', ['To suggest that their signals evolved without long social learning', 'To show that they are unintelligent', 'To argue that they are rare'], 0)] }
          ]
        },

        l: {
          name: 'Listening', desc: '4 tareas · 15 preguntas · el audio suena una sola vez',
          parts: [
            { title: 'Tarea 1 · Choose a Response', kind: 'multi', intro: 'Escucha cada frase una sola vez y elige la mejor respuesta.',
              items: [
                { say: 'Excuse me, do you know if the library is open on Sundays?', q: mc('Choose the best response.', ['Yes, it opens at noon on weekends.', 'I borrowed three books yesterday.', 'It is next to the cafeteria, I think.'], 0) },
                { say: 'I heard you got the internship. Congratulations!', q: mc('Choose the best response.', ['No, I do not have a computer.', 'The internship is very expensive.', 'Thanks! I was really nervous about the interview.'], 2) },
                { say: 'Would you mind if I opened the window? It is getting really warm in here.', q: mc('Choose the best response.', ['Yes, I would like some water.', 'Not at all, go ahead.', 'It was warm yesterday, too.'], 1) },
                { say: 'I am having trouble understanding this homework. Could you explain it?', q: mc('Choose the best response.', ['Sure, which part is confusing you?', 'I finished the homework last week.', 'The professor is very tall.'], 0) }
              ] },
            { title: 'Tarea 2 · Conversación', intro: 'Escucha la conversación y responde.',
              say: [['Advisor', 'Hi, Daniel. What can I do for you?'], ['Daniel', 'I wanted to ask about changing my major. I started in biology, but I am more interested in computer science now.'],
                ['Advisor', 'That is a big decision. Have you taken any computer science courses yet?'], ['Daniel', 'Just one introductory course last semester, and I enjoyed it a lot.'],
                ['Advisor', 'Then you could switch, but there is a deadline. Applications to change majors must be submitted by October thirty-first.'],
                ['Daniel', 'That is only two weeks away. Do I need a recommendation?'],
                ['Advisor', 'Yes, one letter from a computer science professor. If you ask your instructor this week, she will have time to write it.'],
                ['Daniel', 'OK. I will email her today. Thank you.']],
              q: [mc('What does the student want to do?', ['Take a biology course', 'Change his major', 'Apply for a scholarship'], 1),
                mc('Why does he want to do it?', ['He is more interested in computer science now', 'He failed a course', 'He wants to graduate early'], 0),
                mc('What is the deadline?', ['October 13', 'October 31', 'November 1'], 1),
                mc('What will the student do next?', ['Email his instructor', 'Visit the library', 'Call his parents'], 0)] },
            { title: 'Tarea 3 · Anuncio', intro: 'Escucha el anuncio y responde.',
              say: [['Announcer', 'Attention students. The university\'s annual book sale will take place this Saturday in the main hall, from ten a.m. to four p.m.'],
                ['Announcer', 'All paperbacks are two dollars, and hardcover books are five. This year, the money collected will go to a scholarship fund for first-year students.'],
                ['Announcer', 'Volunteers are still needed to help set up tables on Friday afternoon, and anyone who helps will receive a free tote bag.'],
                ['Announcer', 'If you want to donate books, you can leave them at the front desk of the library until Thursday.']],
              q: [mc('When will the book sale take place?', ['On Friday', 'On Saturday', 'On Thursday'], 1),
                mc('What will the money be used for?', ['A scholarship fund for first-year students', 'New library furniture', 'A student party'], 0),
                mc('What do volunteers receive?', ['A free book', 'A tote bag', 'Two dollars'], 1)] },
            { title: 'Tarea 4 · Charla académica', intro: 'Escucha la charla y responde.',
              say: [['Professor', 'Today we are going to talk about seed dormancy, which is a period when a living seed does not grow even though conditions seem suitable.'],
                ['Professor', 'At first, this might look like a disadvantage, but dormancy is actually a survival strategy. Imagine a seed that falls from a plant in autumn. If it started to grow immediately, the young plant would face winter and probably die.'],
                ['Professor', 'Dormancy prevents this by keeping the seed inactive until the right signals appear. In many plants, the signal is a long period of cold, followed by warmth.'],
                ['Professor', 'Other seeds wait for fire; their hard shells crack only when a forest fire passes, so they grow in open, nutrient-rich soil.'],
                ['Professor', 'Some species even spread their risk: a single plant may produce seeds that wake up at different times, so that a bad year does not destroy the whole population. Next week, we will see how farmers use this knowledge to improve crop yields.']],
              q: [mc('What is the main topic of the talk?', ['Why plants need sunlight', 'Dormancy as a survival strategy for seeds', 'How forest fires start'], 1),
                mc('Why would a seed that grows in autumn be at risk?', ['The young plant would face winter', 'The soil would be too wet', 'Animals would eat it'], 0),
                mc('Why might one plant produce seeds that wake up at different times?', ['To use less soil', 'To spread the risk of a bad year', 'To attract more insects'], 1),
                mc('What will the class discuss next week?', ['How farmers use this knowledge', 'The history of agriculture', 'Different types of fire'], 0)] }
          ]
        },

        w: {
          name: 'Writing', desc: '3 tareas · armar frases, correo y discusión académica',
          build: [
            build('Could you tell me where the library is?'),
            build('The professor asked us to submit the report by Friday.'),
            build('I have never seen such a beautiful campus.'),
            build('She said that she would call me after the meeting.')
          ],
          tasks: [
            { title: 'Write an Email', minutes: 7, min: 60,
              p: 'You missed a class because you were sick. Write an email to your professor. Explain why you were absent, ask what you missed, and ask whether you can submit the homework late.',
              rubric: ['Cubrí las tres partes: por qué falté, qué me perdí y si puedo entregar tarde.',
                'El tono es cortés y apropiado para un profesor (saludo, petición amable, despedida).',
                'Mis ideas están organizadas y conectadas (because, also, so, therefore).',
                'Mis frases son correctas y claras, con pocos errores.'] },
            { title: 'Write for an Academic Discussion', minutes: 10, min: 100,
              disc: [['Professor', 'This week we are discussing whether universities should require all students to take a course in personal finance, such as budgeting and saving. Please post your opinion and explain your reasons.'],
                ['Kai', 'I think it should be required. Many graduates start their jobs with debt and no idea how to manage money.'],
                ['Lena', 'I disagree. Students already have a full schedule, and money habits are better learned from family and experience.']],
              p: 'Write a response that contributes to the discussion. Give your own opinion and explain it, and respond to at least one of the other students.',
              rubric: ['Di una opinión clara y la apoyé con al menos dos razones o un ejemplo.',
                'Respondí a lo que dijo Kai o Lena (por ejemplo: I see Lena\'s point, but…).',
                'Mi texto tiene orden y conectores naturales, sin repetir ideas.',
                'Usé vocabulario y gramática variados con pocos errores.'] }
          ]
        },

        s: {
          name: 'Speaking', desc: 'Escuchar y repetir + entrevista · se graba tu voz',
          steps: [
            { title: 'Listen and Repeat', say: 'The registration office opens at nine o\'clock every morning.', prompt: 'Repite la frase exactamente como la oíste.', ref: 'The registration office opens at nine o\'clock every morning.', max: 12 },
            { title: 'Listen and Repeat', say: 'Please remember to bring your student card to the exam.', prompt: 'Repite la frase exactamente como la oíste.', ref: 'Please remember to bring your student card to the exam.', max: 12 },
            { title: 'Listen and Repeat', say: 'The new science building has a quiet study area on every floor.', prompt: 'Repite la frase exactamente como la oíste.', ref: 'The new science building has a quiet study area on every floor.', max: 12 },
            { title: 'Listen and Repeat', say: 'If you need help with your schedule, visit the advising centre.', prompt: 'Repite la frase exactamente como la oíste.', ref: 'If you need help with your schedule, visit the advising centre.', max: 12 },
            { title: 'Take an Interview', say: 'Thanks for joining this interview. Let us start with your studies. What is the most interesting subject you have studied recently, and why?', prompt: 'What is the most interesting subject you have studied recently, and why?', max: 45 },
            { title: 'Take an Interview', say: 'How do you usually prepare for an important exam or presentation?', prompt: 'How do you usually prepare for an important exam or presentation?', max: 45 },
            { title: 'Take an Interview', say: 'Some people prefer studying alone, while others prefer studying in groups. Which do you prefer, and why?', prompt: 'Which do you prefer: studying alone or in groups? Why?', max: 45 }
          ],
          rubric: ['Listen and Repeat: repetí las frases casi palabra por palabra.',
            'Entrevista: respondí cada pregunta con una idea clara y una razón o un ejemplo.',
            'Hablé con fluidez y orden, sin pausas largas ni pasar al español.',
            'Mi pronunciación y entonación se entienden con claridad.']
        }
      }
    }
  };
})();
