// Diagramas por carriles de los grupos G1–G6 del instructivo.
// Cada nodo aparece como fragmento de reveal.js; las conexiones se dibujan al aparecer su destino.

// Carriles: d = dependencia (color del hilo); 'sol' = personal solicitante (neutro).
const L = {
  dgDigebi:   { d: 'digebi',   t: 'Director General de DIGEBI' },
  dirDid:     { d: 'dideduc',  t: 'Director Departamental (DIDEDUC)' },
  enlace:     { d: 'dideduc',  t: 'Enlace departamental' },
  subplice:   { d: 'digebi',   t: 'SUBPLICE (DIGEBI)' },
  materiales: { d: 'digebi',   t: 'Materiales educativos (DIGEBI)' },
  dicoms:     { d: 'dicoms',   t: 'DICOMS' },
  sol:        { d: 'sol',      t: 'Personal solicitante' },
  digeduca:   { d: 'digeduca', t: 'DIGEDUCA' },
  digemoca:   { d: 'digemoca', t: 'DIGEMOCA (acompaña)' },
  direh:      { d: 'direh',    t: 'DIREH' },
};

// n: número de actividad; tipo: inicio | paso | decision | fin | nota
export const FLUJOS = {
  g1: {
    carriles: ['dgDigebi', 'dirDid', 'enlace'],
    nodos: [
      { id: 'i', tipo: 'inicio', c: 'dgDigebi', col: 0 },
      { id: '1', n: 1, c: 'dgDigebi', col: 1, t: 'Solicitar designación del enlace', s: 'Oficio a cada DIDEDUC' },
      { id: '2', n: 2, c: 'dirDid', col: 2, t: 'Designar al enlace', s: 'Remite el oficio de designación a DIGEBI' },
      { id: '3', n: 3, c: 'dgDigebi', col: 3, t: 'Remitir lineamientos', s: 'Instrucciones de ejecución a cada enlace' },
      { id: '4', n: 4, c: 'enlace', col: 4, t: 'Solicitar usuario', s: 'Formulario DES-FOR 05 para la plataforma' },
      { id: 'f', tipo: 'fin', c: 'enlace', col: 5, t: 'Sigue G2' },
    ],
    aristas: [['i', '1'], ['1', '2'], ['2', '3'], ['3', '4'], ['4', 'f']],
  },
  g2: {
    carriles: ['subplice', 'materiales', 'dicoms'],
    nodos: [
      { id: 'i', tipo: 'inicio', c: 'subplice', col: 0 },
      { id: '5', n: 5, c: 'subplice', col: 1, t: 'Solicitar materiales', s: 'Afiches y comunicados con fechas, requisitos y canales de consulta' },
      { id: '6', n: 6, c: 'materiales', col: 2, t: 'Elaborar materiales', s: 'Diseña y traslada para revisión' },
      { id: 'd', tipo: 'decision', c: 'subplice', col: 3, t: '¿Aprobados?' },
      { id: 'a', tipo: 'nota', c: 'materiales', col: 3, t: 'Ajustar materiales', s: 'Incorpora observaciones' },
      { id: '7', n: 7, c: 'subplice', col: 4, t: 'Solicitar divulgación', s: 'A DICOMS, un mes antes de la convocatoria' },
      { id: 'p', tipo: 'nota', c: 'dicoms', col: 5, t: 'Publicar y socializar', s: 'DICOMS y comunicación de cada DIDEDUC' },
      { id: 'f', tipo: 'fin', c: 'dicoms', col: 6, t: 'Sigue G3' },
    ],
    aristas: [['i', '5'], ['5', '6'], ['6', 'd'], ['d', 'a', 'No'], ['a', 'd', '', 'regreso'], ['d', '7', 'Sí'], ['7', 'p'], ['p', 'f']],
  },
  g3: {
    carriles: ['subplice', 'sol', 'enlace'],
    nodos: [
      { id: '8', n: 8, c: 'subplice', col: 0, t: 'Enviar convocatoria', s: 'Fechas, requisitos y proceso a las DIDEDUC' },
      { id: '9', n: 9, c: 'subplice', col: 1, t: 'Informar y capacitar', s: 'Instructivo, formularios y plataforma' },
      { id: '10', n: 10, c: 'subplice', col: 2, t: 'Abrir la plataforma', s: 'Habilitada durante el período oficial' },
      { id: '11', n: 11, c: 'sol', col: 3, t: 'Enviar solicitud', s: 'Firma con lapicero azul y adjunta en PDF' },
      { id: '12', n: 12, c: 'enlace', col: 4, t: 'Revisar documentos', s: 'Existencia, legibilidad, integridad y correspondencia' },
      { id: 'd', tipo: 'decision', c: 'enlace', col: 5, t: '¿Completo?' },
      { id: 's', tipo: 'nota', c: 'sol', col: 5, t: 'Subsanar', s: 'Hasta 2 correcciones; si no, se declina' },
      { id: 'f', tipo: 'fin', c: 'enlace', col: 6, t: 'Sigue G4' },
    ],
    aristas: [['8', '9'], ['9', '10'], ['10', '11'], ['11', '12'], ['12', 'd'], ['d', 's', 'No'], ['s', '12', '', 'regreso'], ['d', 'f', 'Sí']],
  },
  g4a: {
    carriles: ['subplice', 'digeduca'],
    nodos: [
      { id: '13', n: 13, c: 'subplice', col: 0, t: 'Trasladar nómina', s: 'Personal con expediente completo' },
      { id: '14', n: 14, c: 'digeduca', col: 1, t: 'Programar evaluación', s: 'Fechas, horarios y condiciones' },
      { id: '15', n: 15, c: 'digeduca', col: 2, t: 'Informar al personal', s: 'Por correo y por medio de los enlaces' },
      { id: '16', n: 16, c: 'digeduca', col: 3, t: 'Aplicar evaluación', s: 'Comprensión lectora en idioma maya, xinka o garífuna' },
      { id: '17', n: 17, c: 'digeduca', col: 4, t: 'Analizar resultados', s: 'Identifica a quienes alcanzan el mínimo' },
      { id: '18', n: 18, c: 'digeduca', col: 5, t: 'Trasladar resultados', s: 'Resultados oficiales a DIGEBI' },
      { id: 'd', tipo: 'decision', c: 'subplice', col: 6, t: '¿70 o más?' },
      { id: 'no', tipo: 'nota', c: 'digeduca', col: 6, t: 'No continúa', s: 'Se registra y comunica el resultado' },
      { id: 'f', tipo: 'fin', c: 'subplice', col: 7, t: 'Sigue 19 a 21' },
    ],
    aristas: [['13', '14'], ['14', '15'], ['15', '16'], ['16', '17'], ['17', '18'], ['18', 'd'], ['d', 'no', 'No'], ['d', 'f', 'Sí']],
  },
  g4b: {
    carriles: ['subplice', 'enlace'],
    nodos: [
      { id: '19', n: 19, c: 'subplice', col: 0, t: 'Trasladar aprobados', s: 'Nómina de aprobados a cada DIDEDUC' },
      { id: '20', n: 20, c: 'enlace', col: 1, t: 'Cargar resultados', s: 'Asocia cada resultado a su expediente' },
      { id: '21', n: 21, c: 'subplice', col: 2, t: 'Verificar la carga', s: 'Coteja la plataforma con las nóminas' },
      { id: 'd', tipo: 'decision', c: 'subplice', col: 3, t: '¿Coinciden?' },
      { id: 'r', tipo: 'nota', c: 'enlace', col: 3, t: 'Solicitar rectificación', s: 'Se corrige antes de validar' },
      { id: 'f', tipo: 'fin', c: 'subplice', col: 4, t: 'Sigue G5' },
    ],
    aristas: [['19', '20'], ['20', '21'], ['21', 'd'], ['d', 'r', 'No'], ['r', '20', '', 'regreso'], ['d', 'f', 'Sí']],
  },
  g5: {
    carriles: ['subplice', 'enlace', 'digemoca'],
    nodos: [
      { id: '22', n: 22, c: 'subplice', col: 0, t: 'Aprobar herramientas', s: 'Instrumentos oficiales de verificación' },
      { id: '23', n: 23, c: 'enlace', col: 1, t: 'Programar verificación', s: 'Fechas, establecimientos y logística' },
      { id: 'm', tipo: 'nota', c: 'digemoca', col: 1, t: 'Coordina y acompaña', s: 'Garantiza confiabilidad y validez' },
      { id: '24', n: 24, c: 'enlace', col: 2, t: 'Verificar EBI', s: 'Presencial; aprueba con 70 puntos o más' },
      { id: '25', n: 25, c: 'enlace', col: 3, t: 'Cargar instrumento', s: 'Resultado e instrumento completo y legible' },
      { id: '26', n: 26, c: 'subplice', col: 4, t: 'Validar resultados', s: 'Comprensión lectora y EBI registrados' },
      { id: 'd', tipo: 'decision', c: 'subplice', col: 5, t: '¿Acreditada?' },
      { id: 'o', tipo: 'nota', c: 'enlace', col: 5, t: 'Aclarar observaciones', s: 'O notificar el resultado' },
      { id: 'f', tipo: 'fin', c: 'subplice', col: 6, t: 'Sigue G6' },
    ],
    aristas: [['22', '23'], ['23', 'm', '', 'abajo'], ['23', '24'], ['24', '25'], ['25', '26'], ['26', 'd'], ['d', 'o', 'No'], ['d', 'f', 'Sí']],
  },
  g6: {
    carriles: ['subplice', 'direh'],
    nodos: [
      { id: '27', n: 27, c: 'subplice', col: 0, t: 'Consolidar nómina', s: 'Solo expedientes con cumplimiento validado' },
      { id: '28', n: 28, c: 'subplice', col: 1, t: 'Trasladar a DIREH', s: 'Mediante oficio, con respaldos' },
      { id: 'd', tipo: 'decision', c: 'direh', col: 2, t: '¿Conforme?' },
      { id: 'o', tipo: 'nota', c: 'direh', col: 3, t: 'Devolver observaciones', s: 'Inconsistencias por subsanar' },
      { id: 'a', tipo: 'nota', c: 'subplice', col: 3, t: 'Atender observaciones', s: 'Corrige y remite de nuevo' },
      { id: '29', n: 29, c: 'direh', col: 4, t: 'Gestionar y pagar', s: 'Conforme a la normativa' },
      { id: 'cc', tipo: 'nota', c: 'direh', col: 5, t: 'Comunicar conclusión', s: 'Estado y cierre a DIGEBI' },
      { id: 'f', tipo: 'fin', c: 'direh', col: 6, t: 'Fin' },
    ],
    aristas: [['27', '28'], ['28', 'd'], ['d', 'o', 'No'], ['o', 'a'], ['a', '28', '', 'regreso'], ['d', '29', 'Sí'], ['29', 'cc'], ['cc', 'f']],
  },
};

const ANCHO = 1836, ETIQ = 258;

// Tabla de cortes silábicos en español con guion suave (&shy; / \u00AD)
// para evitar recortes en navegadores sin diccionario hyphens:auto.
const CORTES_ES = {
  observaciones:  'ob\u00ADser\u00ADva\u00ADcio\u00ADnes',
  herramientas:   'he\u00ADrra\u00ADmien\u00ADtas',
  verificación:   've\u00ADri\u00ADfi\u00ADca\u00ADción',
  convocatoria:   'con\u00ADvo\u00ADca\u00ADto\u00ADria',
  rectificación:  'rec\u00ADti\u00ADfi\u00ADca\u00ADción',
  lineamientos:   'li\u00ADnea\u00ADmien\u00ADtos',
  designación:    'de\u00ADsig\u00ADna\u00ADción',
  divulgación:    'di\u00ADvul\u00ADga\u00ADción',
  documentos:     'do\u00ADcu\u00ADmen\u00ADtos',
  plataforma:     'pla\u00ADta\u00ADfor\u00ADma',
  resultados:     're\u00ADsul\u00ADta\u00ADdos',
  evaluación:     'eva\u00ADlua\u00ADción',
  instrumento:    'ins\u00ADtru\u00ADmen\u00ADto',
  conclusión:     'con\u00ADclu\u00ADsión',
  materiales:     'ma\u00ADte\u00ADria\u00ADles',
  departamental:  'de\u00ADpar\u00ADta\u00ADmen\u00ADtal',
};

// Inserta guiones suaves en palabras largas conservando mayúsculas originales
function insertarGuiones(texto) {
  return texto.replace(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g, palabra => {
    const clave = palabra.toLowerCase();
    const cortada = CORTES_ES[clave];
    if (cortada) {
      let idx = 0;
      return cortada.replace(/[^-\u00AD]/g, () => palabra[idx++] || '');
    }
    if (palabra.length >= 11) {
      return palabra.slice(0, 6) + '\u00AD' + palabra.slice(6);
    }
    return palabra;
  });
}

// Ajuste automático tras el render visible: si un título aún desborda su tarjeta,
// reduce font-size de 1 en 1 px hasta 28 px; si todavía desborda, ensancha la tarjeta.
export function ajustarFlujo(slide) {
  const nodos = slide.querySelectorAll('.nodo.paso, .nodo.nota');
  for (const el of nodos) {
    const b = el.querySelector('b');
    if (!b || el.clientWidth === 0) continue;

    // Restaurar ancho/posición base antes de medir de nuevo
    if (!el.dataset.wBase) {
      el.dataset.wBase = el.style.width;
      el.dataset.xBase = el.style.left;
    } else {
      el.style.width = el.dataset.wBase;
      el.style.left = el.dataset.xBase;
    }

    let tam = 34;
    const num = b.querySelector('.num');
    b.style.fontSize = tam + 'px';
    if (num) num.style.fontSize = tam + 'px';

    while (tam > 28 && (el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1)) {
      tam -= 1;
      b.style.fontSize = tam + 'px';
      if (num) num.style.fontSize = tam + 'px';
    }

    if (el.scrollWidth > el.clientWidth + 1) {
      const extra = Math.ceil(el.scrollWidth - el.clientWidth) + 8;
      const wAct = parseFloat(el.style.width) || el.offsetWidth;
      const xAct = parseFloat(el.style.left) || el.offsetLeft;
      el.style.width = (wAct + extra) + 'px';
      el.style.left = Math.max(ETIQ + 4, xAct - extra / 2) + 'px';
    }
  }
}

// Anchos proporcionales por columna para que las tarjetas tengan máximo espacio
// (y las columnas de inicio/fin no desperdicien ancho), además de despejar «No» en G6.
function calcularColumnas(clave, f, ncol, anchoUtil) {
  if (clave === 'g6') {
    // col 2 («¿Conforme?») lleva holgura a su derecha para que «No» no toque «Devolver observaciones»
    const pesos = [234, 234, 258, 246, 234, 240, 120];
    const suma = pesos.reduce((a, b) => a + b, 0);
    return pesos.map(p => (p / suma) * anchoUtil);
  }
  if (clave === 'g4a') {
    const pesos = [340, 340, 340, 340, 206];
    const suma = pesos.reduce((a, b) => a + b, 0);
    return pesos.map(p => (p / suma) * anchoUtil);
  }
  // Para el resto: columnas que solo contienen inicio/fin ocupan menos ancho
  const tiposPorCol = Array.from({ length: ncol }, () => new Set());
  for (const n of f.nodos) tiposPorCol[n.col].add(n.tipo || 'paso');
  const pesos = tiposPorCol.map(ts => {
    if (ts.size === 1 && ts.has('inicio')) return 0.62;
    if (ts.size === 1 && ts.has('fin')) return 0.72;
    return 1;
  });
  const suma = pesos.reduce((a, b) => a + b, 0);
  return pesos.map(p => (p / suma) * anchoUtil);
}

export function renderizarFlujo(contenedor, clave) {
  const f = FLUJOS[clave];
  const esG4a = clave === 'g4a';
  const ncol = esG4a ? 5 : Math.max(...f.nodos.map(n => n.col)) + 1;
  const anchoUtil = ANCHO - ETIQ - 12;
  const anchosCol = calcularColumnas(clave, f, ncol, anchoUtil);
  const centrosCol = [];
  let accX = ETIQ + 8;
  for (const w of anchosCol) { centrosCol.push(accX + w / 2); accX += w; }

  // Altos por carril adaptados para llenar todo el espacio útil (hasta y ≈ 890 px) sin tocar la banda
  const altosPorClave = {
    g1:  [196, 196, 196],
    g2:  [222, 222, 222],
    g3:  [222, 222, 222],
    g4a: [216, 444],
    g4b: [290, 290],
    g5:  [196, 196, 196],
    g6:  [270, 270],
  };
  const altosCarril = altosPorClave[clave] || f.carriles.map(() => (f.carriles.length === 2 ? 270 : 204));
  const topsCarril = [];
  let accY = 0;
  for (const h of altosCarril) { topsCarril.push(accY); accY += h; }
  // En G6 reservamos 42 px extra abajo para la flecha «Sí» que rodea «Devolver observaciones»
  const alto = accY + (clave === 'g6' ? 42 : 0);

  const nhPorClave = { g1: 162, g2: 178, g3: 178, g4a: 176, g4b: 204, g5: 162, g6: 192 };
  const nh = nhPorClave[clave] || 170;

  contenedor.style.width = ANCHO + 'px'; contenedor.style.height = alto + 'px';
  contenedor.classList.add('flujo');

  // Mapa de ubicación en dos sub-filas para G4a (sin modificar los datos de FLUJOS)
  const mapaG4a = {
    '13': { col: 0, sub: 0 },
    '14': { col: 0, sub: 0 },
    '15': { col: 1, sub: 0 },
    '16': { col: 2, sub: 0 },
    '17': { col: 1, sub: 1 },
    '18': { col: 2, sub: 1 },
    'd':  { col: 3, sub: 0 },
    'no': { col: 3, sub: 0 },
    'f':  { col: 4, sub: 0 },
  };

  // Posición y tamaño de cada nodo
  const pos = {};
  const fila = Object.fromEntries(f.carriles.map((c, i) => [c, i]));
  for (const n of f.nodos) {
    const tipo = n.tipo || 'paso';
    const fIdx = fila[n.c];
    let col = n.col;
    let cy = topsCarril[fIdx] + altosCarril[fIdx] / 2;
    if (esG4a && mapaG4a[n.id]) {
      col = mapaG4a[n.id].col;
      if (fIdx === 1) {
        const subH = altosCarril[1] / 2;
        cy = topsCarril[1] + mapaG4a[n.id].sub * subH + subH / 2;
      }
    }
    const wCol = anchosCol[col];
    const w = tipo === 'inicio'
      ? Math.min(144, Math.floor(wCol - 12))
      : tipo === 'fin'
        ? Math.min(188, Math.floor(wCol - 10))
        : tipo === 'decision'
          ? 214
          : Math.min(316, Math.floor(wCol - 16));
    const h = tipo === 'inicio' || tipo === 'fin' ? 72 : tipo === 'decision' ? 158 : nh;
    // En G6 desplazamos ligeramente a la izquierda el rombo «¿Conforme?» para abrir un pasillo ancho a «No»
    const ajusteX = (clave === 'g6' && n.id === 'd') ? -14 : 0;
    const cx = centrosCol[col] + ajusteX;
    pos[n.id] = { cx, cy, w, h, x: cx - w / 2, y: cy - h / 2, tipo, col, fIdx };
  }

  // Carriles
  f.carriles.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = `carril dep-${L[c].d}`;
    el.style.top = topsCarril[i] + 'px'; el.style.height = altosCarril[i] + 'px';
    el.innerHTML = `<span>${L[c].t}</span>`;
    contenedor.appendChild(el);
  });

  // Orden de aparición: el de los nodos
  const orden = Object.fromEntries(f.nodos.map((n, i) => [n.id, i]));

  // Conexiones (SVG): flechas en azul-icono; «Sí» en verde y «No» en rojo sin encimarse
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', `0 0 ${ANCHO} ${alto}`); svg.setAttribute('class', 'conexiones');
  svg.innerHTML = `<defs>` +
    `<marker id="pt-${clave}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#4281B7"/></marker>` +
    `<marker id="pt-si-${clave}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#176B4B"/></marker>` +
    `<marker id="pt-no-${clave}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#E8434A"/></marker>` +
    `</defs>`;
  for (const [a, b, etiqueta = '', modo = ''] of f.aristas) {
    const A = pos[a], B = pos[b];
    let d, lx, ly, ancla = 'start';
    const saltaNodo = Math.abs(A.cy - B.cy) < 2 && B.col - A.col > 1 && modo !== 'regreso';

    if (esG4a && a === '16' && b === '17') {
      // Conector en escalón limpio entre la sub-fila superior y la inferior de DIGEDUCA
      const ym = topsCarril[1] + altosCarril[1] / 2;
      d = `M${A.cx},${A.y + A.h} V${ym} H${B.cx} V${B.y}`;
    } else if (esG4a && a === '18' && b === 'd') {
      // Sube holgado por el pasillo entre col 2 y col 3 sin rozar «No continúa»
      const xm = A.x + A.w + 20;
      d = `M${A.x + A.w},${A.cy} H${xm} V${B.cy} H${B.x}`;
    } else if (saltaNodo) {
      // Caso G6 («¿Conforme?» → «29 Gestionar y pagar»): rodea por debajo sin tocar «No» ni el rombo
      const yBot = Math.max(A.y + A.h, B.y + B.h) + 30;
      d = `M${A.cx},${A.y + A.h} V${yBot} H${B.cx} V${B.y + B.h}`;
      lx = (A.cx + B.cx) / 2; ly = yBot + 30; ancla = 'middle';
    } else if (modo === 'regreso') {      // flecha de retorno (punteada)
      if (Math.abs(A.cx - B.cx) < 2) {    // misma columna: vertical desplazada a la derecha
        const baja = B.cy > A.cy, x = A.cx + 22;
        d = `M${x},${baja ? A.y + A.h : A.y} V${baja ? B.y : B.y + B.h}`;
      } else if (Math.abs(A.cy - B.cy) < 2) { // mismo carril: rodea por debajo
        const yb = A.y + A.h + 20;
        d = `M${A.cx},${A.y + A.h} V${yb} H${B.cx} V${B.y + B.h}`;
      } else {                            // otro carril: hacia la izquierda y luego vertical
        d = `M${A.x},${A.cy} H${B.cx + 16} V${B.cy > A.cy ? B.y : B.y + B.h}`;
      }
    } else if (Math.abs(A.cx - B.cx) < 2 || modo === 'abajo') { // misma columna: vertical
      const tieneRegreso = f.aristas.some(e => e[0] === b && e[1] === a);
      const baja = B.cy > A.cy, x = A.cx - (tieneRegreso ? 18 : 0);
      d = `M${x},${baja ? A.y + A.h : A.y} V${baja ? B.y : B.y + B.h}`;
      if (tieneRegreso) {
        lx = x - 14; ancla = 'end';
      } else {
        lx = x + 14; ancla = 'start';
      }
      ly = (A.cy + B.cy) / 2 + 10;
    } else {                              // hacia la derecha en codo
      const x1 = A.x + A.w, x2 = B.x, xm = (x1 + x2) / 2;
      d = A.cy === B.cy ? `M${x1},${A.cy} H${x2}` : `M${x1},${A.cy} H${xm} V${B.cy} H${x2}`;
      if (clave === 'g6' && a === 'd' && b === 'o') {
        // En G6 colocamos «No» centrado en el amplio hueco libre por encima de la flecha
        lx = xm - 10; ly = A.cy - 22; ancla = 'middle';
      } else {
        lx = xm; ly = A.cy - 18; ancla = 'middle';
      }
    }
    const claseEtiq = etiqueta === 'Sí' ? ' si' : etiqueta === 'No' ? ' no' : '';
    const marcador = etiqueta === 'Sí' ? `pt-si-${clave}` : etiqueta === 'No' ? `pt-no-${clave}` : `pt-${clave}`;
    const g = document.createElementNS(ns, 'g');
    g.setAttribute('class', `fragment arista${claseEtiq}`);
    g.setAttribute('data-fragment-index', String(orden[modo === 'regreso' ? a : b]));
    g.innerHTML = `<path d="${d}" marker-end="url(#${marcador})" ${modo === 'regreso' ? 'stroke-dasharray="6 6" class="punteada"' : ''}/>` +
      (etiqueta ? `<text x="${lx}" y="${ly}" text-anchor="${ancla}">${etiqueta}</text>` : '');
    svg.appendChild(g);
  }
  contenedor.appendChild(svg);

  // Nodos (HTML): solo número y título visibles (34 px); descripción movida a title y aria-label
  for (const n of f.nodos) {
    const p = pos[n.id], el = document.createElement('div');
    el.className = `fragment nodo ${p.tipo} dep-${L[n.c].d}`;
    el.dataset.fragmentIndex = String(orden[n.id]);
    el.dataset.dep = L[n.c].d;
    if (n.n) el.dataset.n = String(n.n);
    if (n.s) {
      const desc = `${n.n ? n.n + '. ' : ''}${n.t}: ${n.s}`;
      el.title = desc;
      el.setAttribute('aria-label', desc);
    }
    Object.assign(el.style, { left: p.x + 'px', top: p.y + 'px', width: p.w + 'px', height: p.h + 'px' });
    if (p.tipo === 'inicio') el.innerHTML = '<b>Inicio</b>';
    else if (p.tipo === 'fin') el.innerHTML = `<b>${n.t}</b>`;
    else if (p.tipo === 'decision') {
      el.innerHTML = `<svg class="rombo-svg" viewBox="0 0 214 158" aria-hidden="true"><polygon points="107,4 210,79 107,154 4,79"/></svg><b>${n.t}</b>`;
    } else {
      el.innerHTML = `<b>${n.n ? `<span class="num">${n.n}</span> ` : ''}${insertarGuiones(n.t)}</b>`;
    }
    contenedor.appendChild(el);
  }
}
