/* Prueba de nivel: hasta 40 preguntas (8 por nivel: 7 de lectura/gramática + 1 de escucha).
   Es adaptativa: si no pasas un nivel (75 %, 6 de 8), la prueba termina ahí. Las preguntas con "say" se leen en voz alta. */
(function () {
  EL.PLACEMENT = [
    /* ---------- A1 ---------- */
    { lv: 'A1', q: 'I ___ a student.', o: ['am', 'is', 'are'], a: 0 },
    { lv: 'A1', q: 'She ___ in Quito.', o: ['live', 'lives', 'living'], a: 1 },
    { lv: 'A1', q: 'It is ___ umbrella.', o: ['a', 'an', 'two'], a: 1 },
    { lv: 'A1', q: '___ you speak English?', o: ['Do', 'Does', 'Are'], a: 0 },
    { lv: 'A1', q: 'The bank is ___ the school. (al lado de)', o: ['next to', 'in', 'on'], a: 0 },
    { lv: 'A1', q: 'There ___ two books on the table.', o: ['is', 'are', 'am'], a: 1 },
    { lv: 'A1', q: 'My brother ___ a new car.', o: ['have', 'has', 'haves'], a: 1 },
    { lv: 'A1', say: 'My phone is on the table.', o: ['My phone is on the table.', 'My phone is under the chair.', 'My phone is in the bag.'], a: 0 },

    /* ---------- A2 ---------- */
    { lv: 'A2', q: 'Yesterday I ___ to the market.', o: ['go', 'went', 'goed'], a: 1 },
    { lv: 'A2', q: 'My phone is cheaper ___ your phone.', o: ['than', 'that', 'as'], a: 0 },
    { lv: 'A2', q: 'I ___ to travel next year. (plan)', o: ['am going', 'will going', 'go'], a: 0 },
    { lv: 'A2', q: 'You ___ smoke here. It is prohibited.', o: ["mustn't", "don't have to", 'should'], a: 0 },
    { lv: 'A2', q: 'How ___ water do you drink every day?', o: ['many', 'much', 'any'], a: 1 },
    { lv: 'A2', q: 'She is the ___ student in my class.', o: ['tallest', 'taller', 'most tall'], a: 0 },
    { lv: 'A2', q: 'I ___ TV when you called me.', o: ['watched', 'was watching', 'watch'], a: 1 },
    { lv: 'A2', say: 'Excuse me, how much is the room for two nights?', o: ['The price of a hotel room', 'The time of a bus', 'The menu of a restaurant'], a: 0 },

    /* ---------- B1 ---------- */
    { lv: 'B1', q: 'I ___ in this city for three years.', o: ['lived', 'live', 'have lived'], a: 2 },
    { lv: 'B1', q: 'If it rains tomorrow, we ___ at home.', o: ['stay', 'will stay', 'stayed'], a: 1 },
    { lv: 'B1', q: 'The files ___ deleted yesterday.', o: ['was', 'were', 'are'], a: 1 },
    { lv: 'B1', q: 'If I ___ you, I would study more.', o: ['am', 'were', 'will be'], a: 1 },
    { lv: 'B1', q: '"I am tired." → He said that he ___ tired.', o: ['is', 'was', 'will be'], a: 1 },
    { lv: 'B1', q: 'She suggested ___ the server before the update.', o: ['to restart', 'restarting', 'restart'], a: 1 },
    { lv: 'B1', q: 'His car is outside, so he ___ be at home.', o: ['must', "can't", "mustn't"], a: 0 },
    { lv: 'B1', say: 'If the password is weak, an attacker could guess it quickly.', o: ['A weak password is easy to guess.', 'A strong password is easy to guess.', 'An attacker needs a very long time.'], a: 0 },

    /* ---------- B2 ---------- */
    { lv: 'B2', q: 'If I ___ about the problem earlier, I would have fixed it.', o: ['knew', 'had known', 'would know'], a: 1 },
    { lv: 'B2', q: 'The report ___ by the time the client arrives.', o: ['will have been finished', 'will finish', 'is finishing'], a: 0 },
    { lv: 'B2', q: 'She denied ___ the file.', o: ['to delete', 'deleting', 'delete'], a: 1 },
    { lv: 'B2', q: 'The engineer ___ I met last week works at a bank.', o: ['whose', 'who', 'which'], a: 1 },
    { lv: 'B2', q: '___ the heavy rain, the match continued.', o: ['Despite', 'Although', 'However'], a: 0 },
    { lv: 'B2', q: 'He looks exhausted. He ___ all night.', o: ['must have been working', 'must work', 'should work'], a: 0 },
    { lv: 'B2', q: 'We need to have the laptop ___ before Monday.', o: ['repair', 'repaired', 'repairing'], a: 1 },
    { lv: 'B2', say: 'The attack was contained within an hour, but the root cause is still unknown.', o: ['The attack was stopped quickly, but the cause is not known.', 'The attack lasted all day and the cause is known.', 'The attack never happened.'], a: 0 },

    /* ---------- C1 ---------- */
    { lv: 'C1', q: 'Not only ___ the deadline, but she also improved the design.', o: ['she met', 'did she meet', 'she did meet'], a: 1 },
    { lv: 'C1', q: 'It is essential that every employee ___ the policy.', o: ['reads', 'read', 'will read'], a: 1 },
    { lv: 'C1', q: '___ in 1995, the library is still in use.', o: ['Built', 'Building', 'Having build'], a: 0 },
    { lv: 'C1', q: 'It could be ___ that the policy has failed, although the data are limited.', o: ['argued', 'argued for', 'arguing'], a: 0 },
    { lv: 'C1', q: 'Only after the audit ___ the real problem.', o: ['we discovered', 'did we discover', 'we did discover'], a: 1 },
    { lv: 'C1', q: 'Losing that client was a blessing in ___ .', o: ['disguise', 'secret', 'luck'], a: 0 },
    { lv: 'C1', q: '___ I known the risk, I would never have approved the plan.', o: ['Had', 'Have', 'Would'], a: 0 },
    { lv: 'C1', say: 'Granted, the cost is high; nonetheless, the benefits clearly outweigh it.', o: ['The writer admits the cost but thinks it is worth it.', 'The writer says the project is too expensive.', 'The writer says there are no benefits.'], a: 0 }
  ];
})();
