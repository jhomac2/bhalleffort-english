/* Exámenes de nivel: partes de escritura (w) y habla (s), evaluadas con una rúbrica de 5 criterios.
   Cada criterio se califica 0–3 (No / Un poco / Bastante / Sí). Se aprueba con 60 % o más.
   Los criterios son concretos: puedes comprobarlos tú mismo releyendo tu texto o escuchando tu grabación. */
(function () {
  EL.EXAMS = {
    A1: {
      w: {
        min: 25,
        p: 'Preséntate a un nuevo compañero de clase. Escribe quién eres, de dónde eres, a qué te dedicas o qué estudias, qué te gusta hacer y qué haces cada día.',
        c: [
          'Mi texto responde a todo lo que pedía la tarea (quién soy, de dónde soy, qué estudio, qué me gusta, mi rutina).',
          'Escribí frases completas con sujeto y verbo (por ejemplo «I am…», «I live…», «I like…»).',
          'Usé bien «am / is / are» y la «-s» de he/she/it en presente (she lives, he works).',
          'Usé al menos 5 palabras de las lecciones (trabajo, familia, rutina, lugares…).',
          'Revisé las mayúsculas (I, nombres, ciudades) y los puntos al final de las frases.'
        ]
      },
      s: {
        p: 'Habla en inglés durante 20–30 segundos: di tu nombre, de dónde eres, a qué te dedicas y una cosa que haces cada día.',
        c: [
          'Dije todo lo que pedía la tarea (nombre, origen, ocupación y una actividad diaria).',
          'Mis frases estaban completas y en inglés, sin pasar al español.',
          'Casi no tuve pausas largas: pude seguir hablando.',
          'Pronuncié claramente al menos 5 palabras importantes, y no las leí letra por letra.',
          'Al escucharme, alguien que no me conoce entendería lo que dije.'
        ]
      }
    },

    A2: {
      w: {
        min: 50,
        p: 'Escribe un correo a un amigo de otro país. Cuéntale qué hiciste en tus últimas vacaciones o fin de semana (pasado), qué planeas hacer el próximo mes (futuro) y compara tu ciudad con la suya (comparativos).',
        c: [
          'Mi correo cubre las tres partes: lo que hice, lo que voy a hacer y una comparación.',
          'Usé bien el pasado simple (went, visited, ate, was) para contar lo que hice.',
          'Usé «going to» o «will» para hablar de planes, y al menos un comparativo (bigger than, more expensive than).',
          'Conecté mis ideas con palabras como «and», «but», «because», «then».',
          'Empecé con un saludo, terminé con una despedida y el tono fue amable.'
        ]
      },
      s: {
        p: 'Habla durante 30–40 segundos: cuenta qué hiciste ayer, qué vas a hacer este fin de semana y por qué te gusta (o no) tu ciudad.',
        c: [
          'Hablé de las tres cosas pedidas: ayer, el fin de semana y mi ciudad.',
          'Usé pasado simple para ayer y «going to / will» para el futuro.',
          'Di al menos una razón con «because».',
          'Hablé con ritmo bastante continuo, sin quedarme callado mucho tiempo.',
          'Pronuncié con claridad los finales «-ed» y las palabras importantes; se me entiende bien.'
        ]
      }
    },

    B1: {
      w: {
        min: 80,
        p: 'Escribe un texto sobre un problema de tecnología o seguridad que viviste (o imaginaste) en el trabajo o en clase: qué pasó, cómo lo resolviste, qué aprendiste y qué recomendarías hacer para evitarlo en el futuro (con «should» o «if»).',
        c: [
          'Mi texto explica con claridad qué pasó, cómo lo resolví, qué aprendí y mi recomendación.',
          'Mezclé tiempos verbales correctamente (pasado simple, present perfect y/o pasado continuo).',
          'Usé una recomendación con «should», «if… will/would» o una estructura condicional.',
          'Usé vocabulario técnico o de trabajo apropiado (por ejemplo: update, backup, password, attacker, server, report).',
          'Organicé el texto en párrafos con conectores (first, then, however, as a result, finally) y revisé ortografía y puntuación.'
        ]
      },
      s: {
        p: 'Habla durante 45–60 segundos: explica un problema técnico o de trabajo que tuviste, cómo lo resolviste y qué consejo darías a otra persona para evitarlo.',
        c: [
          'Expliqué el problema, la solución y un consejo, en un orden fácil de seguir.',
          'Usé pasado para contar lo que pasó y «should» o «if» para el consejo.',
          'Usé al menos tres conectores (first, then, so, because, however, finally).',
          'Hablé con fluidez: pocas pausas y sin pasar al español.',
          'Mi pronunciación y entonación se entienden bien, incluidos los términos técnicos (cache, queue, SQL, Linux).'
        ]
      }
    },

    B2: {
      w: {
        min: 120,
        p: 'Escribe un ensayo de opinión (mínimo 120 palabras): «Some people think that companies should be responsible for protecting their customers\' data, while others believe that users must protect themselves. Discuss both views and give your own opinion.»',
        c: [
          'Respondí toda la tarea: presenté las dos posturas y di mi propia opinión de forma clara.',
          'Organicé el texto en introducción, al menos dos párrafos de desarrollo y conclusión; cada párrafo tiene una idea principal.',
          'Apoyé mis ideas con razones y al menos un ejemplo concreto.',
          'Usé estructuras de nivel B2 con corrección: condicionales (if… would), pasivas, relativas o verbos de reporte.',
          'Usé conectores variados (however, although, as a result, for instance) y vocabulario de seguridad o tecnología; revisé ortografía y puntuación.'
        ]
      },
      s: {
        p: 'Habla durante 60–90 segundos: «Describe a time when technology failed you or a company you know. What happened, what was the impact, and what could have been done to avoid it?»',
        c: [
          'Respondí las tres partes: qué pasó, el impacto y qué se pudo haber hecho.',
          'Usé pasado y pasivas para contar lo ocurrido, y un modal pasado (should have / could have) o un condicional (if… had…) para lo que se pudo evitar.',
          'Organicé mi respuesta con ideas conectadas (first, as a result, however, in the end).',
          'Hablé de forma bastante continua, sin pasar al español y sin pausas largas.',
          'Acentué las palabras importantes y reduje las pequeñas; se me entiende sin esfuerzo.'
        ]
      }
    },

    C1: {
      w: {
        min: 180,
        p: 'Escribe un ensayo argumentativo (mínimo 180 palabras): «Governments should require all companies to publish how they protect personal data. To what extent do you agree or disagree?» Incluye una postura clara, un contraargumento con concesión y una conclusión.',
        c: [
          'Mi postura es clara de principio a fin y respondo a «to what extent» con matices (no es todo blanco o negro).',
          'Presenté un contraargumento y lo concedí con precisión (admittedly, granted, while it is true that…) antes de defender mi punto.',
          'Usé lenguaje atenuado cuando correspondía (may, tend to, arguably, it could be argued that) y evité afirmaciones absolutas.',
          'Mostré variedad gramatical avanzada con corrección: inversión, oraciones con participio, nominalización, subjuntivo o cleft sentences.',
          'Mi vocabulario es preciso (no repetitivo), el registro es formal, la cohesión es natural y revisé errores de ortografía y puntuación.'
        ]
      },
      s: {
        p: 'Habla durante 90–120 segundos: «Do you think artificial intelligence will make cybersecurity easier or harder in the future? Give reasons, compare with the present, and speculate about possible consequences.»',
        c: [
          'Respondí con una postura matizada (it depends…, to a certain extent…) y la mantuve durante toda la respuesta.',
          'Comparé con el presente o el pasado (compared with…, whereas…) y especulé sobre el futuro (might well, would imagine, is likely to).',
          'Desarrollé al menos dos razones con ejemplos y reconocí un contraargumento.',
          'Hablé con fluidez natural, con pausas cortas, autocorrección si fue necesario y sin memorizar.',
          'Mi ritmo, acento de la frase y entonación comunican actitud y se entienden con claridad.'
        ]
      }
    }
  };
})();
