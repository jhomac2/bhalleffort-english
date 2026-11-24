/* Orden de la ruta: se intercalan inglés general (g), viajes (v), técnico (t), trabajo (w), pronunciación (p) y estrategias de examen (x).
   Bloques por nivel: A1 (18 lecciones), A2 (19), B1 (26), B2 (20), C1 (16).
   Al final de cada nivel hay un examen por secciones; para abrir el nivel siguiente hay que aprobarlo. */
EL.PATH = [
  /* A1 */
  'g01', 'g02', 'g03', 't01', 'g04', 'g05', 'v01', 'g06', 'p01',
  'g07', 'v02', 't02', 'g08', 'g09', 'p02', 'g10', 'v03', 't03',
  /* A2 */
  'g11', 'g12', 'v04', 't04', 'g13', 'p03', 'g14', 'v05', 't05', 'g15',
  'g16', 'w01', 'v06', 't06', 'g17', 'p04', 'g18', 'v07', 't07',
  /* B1 */
  'g19', 'g20', 'v08', 't08', 'g21', 'g22', 'p05', 't09', 'g23', 't10',
  'w02', 'g24', 't11', 'g25', 'p06', 't12', 'w03', 'g26', 't13', 'w04',
  'g27', 'p07', 't14', 'w05', 't15', 'p08',
  /* B2 */
  'g28', 'g29', 't16', 'g30', 'x01', 'g31', 'w06', 'g32', 'p09', 't17',
  'g33', 'x02', 'g34', 't18', 'g35', 'w07', 'x03', 'g36', 't19', 'x04',
  /* C1 */
  'g37', 't20', 'g38', 'x05', 'g39', 'w08', 'g40', 't21', 'p10', 'g41',
  'x06', 'w09', 'g42', 't22', 'x07', 'x08'
];
EL.LEVELS = [
  { id: 'A1', from: 0, to: 17, name: 'Básico' },
  { id: 'A2', from: 18, to: 36, name: 'Elemental' },
  { id: 'B1', from: 37, to: 62, name: 'Intermedio' },
  { id: 'B2', from: 63, to: 82, name: 'Intermedio alto' },
  { id: 'C1', from: 83, to: 98, name: 'Avanzado' }
];
EL.TRACKS = { general: 'General', travel: 'Viajes', tech: 'Técnico', work: 'Trabajo', pron: 'Pronunciación', exam: 'Examen' };
