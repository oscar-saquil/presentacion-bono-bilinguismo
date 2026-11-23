// Gráficas SVG generadas en JS puro (sin librerías externas) para las diapositivas de resumen.
// Reglas: barras en --marino, barra destacada en --amarillo con borde marino de 3 px,
// etiquetas directas grandes, un solo eje, sin 3D/sombras/degradados, animación GSAP única (0.8 s).
import { gsap } from 'gsap';

const NS = 'http://www.w3.org/2000/svg';

const C = {
  marino:    '#113C6F',
  azulIcono: '#4281B7',
  texto2:    '#2E4A70',
  papel:     '#EEF6FC',
  amarillo:  '#F8D965',
  rojo:      '#E8434A',
  rojoTexto: '#B81D24',
  blanco:    '#FFFFFF',
  grisFondo: '#CBD5E1',
  grisBorde: '#475569',
  compFondo: '#D6E9F8',
};

const FUENTE_TITULO = "'Outfit', 'Segoe UI', Arial, sans-serif";
const FUENTE_CUERPO = "'Atkinson Hyperlegible', 'Segoe UI', Arial, sans-serif";

function elSvg(tag, attrs = {}, texto = '') {
  const n = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, String(v));
  if (texto !== '') n.textContent = texto;
  return n;
}

// ============================================================================
// 1. Gráfica de barras horizontales apiladas: «¿Quién realiza cada actividad?»
//    Barras de 56 px de grosor; etiquetas y cifras de 34 px; leyenda de 30 px.
// ============================================================================
const DATOS_RESPONSABLES = [
  { nombre: 'DIGEBI',                         propias: 15, compartidas: 3 },
  { nombre: 'DIDEDUC (6 a cargo del enlace)', propias: 6,  compartidas: 1, destacada: true },
  { nombre: 'DIGEDUCA',                       propias: 2,  compartidas: 3 },
  { nombre: 'DIGEMOCA',                       propias: 0,  compartidas: 1 },
  { nombre: 'Personal solicitante',           propias: 1,  compartidas: 0 },
  { nombre: 'DIREH',                          propias: 1,  compartidas: 0 },
  { nombre: 'DICOMS',                         propias: 0,  compartidas: 0, nota: 'participa en la actividad 7' },
];

function construirResponsables(contenedor) {
  const W = 1792, H = 564;
  const xBase = 594;         // eje vertical holgado para DIDEDUC en 34 px
  const anchoMax = 1008;     // 56 px por actividad (18 max)
  const maxVal = 18;
  const escala = anchoMax / maxVal;
  const yIni = 58, pasoY = 72, altoBarra = 56;

  const svg = elSvg('svg', {
    viewBox: `0 0 ${W} ${H}`,
    class: 'grafica-svg',
    role: 'img',
    'aria-label': 'Actividades por dependencia responsable: propias y compartidas',
  });

  // Patrones de rayado diagonal para actividades compartidas
  const defs = elSvg('defs');
  const patMarino = elSvg('pattern', {
    id: 'rayado-marino', width: 14, height: 14, patternUnits: 'userSpaceOnUse',
    patternTransform: 'rotate(45)',
  });
  patMarino.appendChild(elSvg('rect', { width: 14, height: 14, fill: C.compFondo }));
  patMarino.appendChild(elSvg('line', { x1: 0, y1: 0, x2: 0, y2: 14, stroke: C.marino, 'stroke-width': 4.5 }));
  defs.appendChild(patMarino);

  const patAmarillo = elSvg('pattern', {
    id: 'rayado-amarillo', width: 14, height: 14, patternUnits: 'userSpaceOnUse',
    patternTransform: 'rotate(45)',
  });
  patAmarillo.appendChild(elSvg('rect', { width: 14, height: 14, fill: C.amarillo }));
  patAmarillo.appendChild(elSvg('line', { x1: 0, y1: 0, x2: 0, y2: 14, stroke: C.marino, 'stroke-width': 4 }));
  defs.appendChild(patAmarillo);
  svg.appendChild(defs);

  // Leyenda escrita arriba (30 px)
  const ley = elSvg('g');
  ley.appendChild(elSvg('rect', { x: xBase, y: 8, width: 32, height: 26, rx: 3, fill: C.marino }));
  ley.appendChild(elSvg('text', {
    x: xBase + 42, y: 31, fill: C.marino, 'font-family': FUENTE_CUERPO,
    'font-size': 30, 'font-weight': 700,
  }, 'Propias (25)'));

  ley.appendChild(elSvg('rect', {
    x: xBase + 290, y: 8, width: 32, height: 26, rx: 3,
    fill: 'url(#rayado-marino)', stroke: C.marino, 'stroke-width': 2.5,
  }));
  ley.appendChild(elSvg('text', {
    x: xBase + 332, y: 31, fill: C.marino, 'font-family': FUENTE_CUERPO,
    'font-size': 30, 'font-weight': 700,
  }, 'Compartidas (4)'));
  svg.appendChild(ley);

  // Línea base única del eje vertical
  svg.appendChild(elSvg('line', {
    x1: xBase, y1: yIni - 8, x2: xBase, y2: yIni + (DATOS_RESPONSABLES.length - 1) * pasoY + altoBarra + 6,
    stroke: C.marino, 'stroke-width': 4,
  }));

  DATOS_RESPONSABLES.forEach((d, idx) => {
    const y = yIni + idx * pasoY;
    const cy = y + altoBarra / 2;

    // Etiqueta de dependencia a la izquierda (34 px)
    svg.appendChild(elSvg('text', {
      x: xBase - 20, y: cy + 12,
      'text-anchor': 'end',
      fill: C.marino,
      'font-family': FUENTE_CUERPO,
      'font-size': 34,
      'font-weight': 700,
    }, d.nombre));

    const wProp = d.propias * escala;
    const wComp = d.compartidas * escala;
    const wTotal = wProp + wComp;

    if (wProp > 0) {
      svg.appendChild(elSvg('rect', {
        x: xBase, y, width: wProp, height: altoBarra, rx: 4,
        fill: d.destacada ? C.amarillo : C.marino,
        stroke: d.destacada ? C.marino : 'none',
        'stroke-width': d.destacada ? 3 : 0,
        class: 'g-rect-h',
        'data-x': xBase,
        'data-w': wProp,
        'data-x0': xBase,
      }));
    }
    if (wComp > 0) {
      svg.appendChild(elSvg('rect', {
        x: xBase + wProp, y, width: wComp, height: altoBarra, rx: 4,
        fill: d.destacada ? 'url(#rayado-amarillo)' : 'url(#rayado-marino)',
        stroke: C.marino,
        'stroke-width': d.destacada ? 3 : 2.5,
        class: 'g-rect-h',
        'data-x': xBase + wProp,
        'data-w': wComp,
        'data-x0': xBase,
      }));
    }

    // Etiqueta directa al final de la barra (34 px en marino)
    const textoValor = d.nota
      ? `0 · ${d.nota}`
      : (d.compartidas > 0 ? `${d.propias} + ${d.compartidas}` : `${d.propias}`);
    svg.appendChild(elSvg('text', {
      x: xBase + wTotal + 20,
      y: cy + 12,
      fill: C.marino,
      'font-family': FUENTE_CUERPO,
      'font-size': 34,
      'font-weight': 700,
    }, textoValor));
  });

  contenedor.appendChild(svg);
}

// ============================================================================
// 2. Gráfica de columnas: «29 actividades en seis grupos»
//    Columnas altas (altoMax 424 px), cifras 60 px, nombres 32 px, marca roja 28 px.
// ============================================================================
const DATOS_GRUPOS = [
  { id: 'G1', ico: '#ico-g1', n: 4, l1: 'Nombramiento', l2: 'del enlace' },
  { id: 'G2', ico: '#ico-g2', n: 3, l1: 'Promoción y',  l2: 'divulgación' },
  { id: 'G3', ico: '#ico-g3', n: 5, l1: 'Convocatoria', l2: 'y solicitud' },
  { id: 'G4', ico: '#ico-g4', n: 9, l1: 'Comprensión',  l2: 'lectora', filtro: true },
  { id: 'G5', ico: '#ico-g5', n: 5, l1: 'Verificación', l2: 'de la EBI', filtro: true },
  { id: 'G6', ico: '#ico-g6', n: 3, l1: 'Nómina',       l2: 'y pago' },
];

function construirGrupos(contenedor) {
  const W = 1792, H = 602;
  const yBase = 464;         // deja 138 px debajo para iconos + nombres a 32 px
  const maxVal = 9;
  const altoMax = 394;       // ~43.8 px por actividad (G4 llega a y = 70; cifra 60 px en y = 54)
  const anchoCol = W / DATOS_GRUPOS.length;
  const anchoBarra = 176;

  const svg = elSvg('svg', {
    viewBox: `0 0 ${W} ${H}`,
    class: 'grafica-svg',
    role: 'img',
    'aria-label': 'Distribución de las 29 actividades en 6 grupos, con filtros de 70 puntos en G4 y G5',
  });

  DATOS_GRUPOS.forEach((g, idx) => {
    const cx = anchoCol * (idx + 0.5);
    const h = (g.n / maxVal) * altoMax;
    const xBar = cx - anchoBarra / 2;
    const yBar = yBase - h;

    // Columna apoyada directamente en yBase (animada vía atributos y/height)
    svg.appendChild(elSvg('rect', {
      x: xBar,
      y: yBar,
      width: anchoBarra,
      height: h,
      rx: 5,
      fill: C.marino,
      class: 'g-rect-v',
      'data-y': yBar,
      'data-h': h,
      'data-ybase': yBase,
    }));

    // Cifra encima de cada columna (60 px en marino)
    svg.appendChild(elSvg('text', {
      x: cx,
      y: yBar - 16,
      'text-anchor': 'middle',
      fill: C.marino,
      'font-family': FUENTE_TITULO,
      'font-size': 60,
      'font-weight': 800,
    }, String(g.n)));

    // Marca roja «filtro 70 puntos» (28 px) sobre G4 y G5 dentro del área de la gráfica
    if (g.filtro) {
      const bw = 236, bh = 46;
      const bx = cx - bw / 2;
      // En G4 se apoya limpiamente dentro de la parte alta de la columna; en G5, justo sobre la cifra
      const by = g.n >= 8 ? (yBar + 26) : (yBar - 122);
      svg.appendChild(elSvg('rect', {
        x: bx, y: by, width: bw, height: bh, rx: 7,
        fill: C.blanco, stroke: C.rojo, 'stroke-width': 3.5,
      }));
      svg.appendChild(elSvg('text', {
        x: cx, y: by + 32,
        'text-anchor': 'middle',
        fill: C.rojoTexto,
        'font-family': FUENTE_TITULO,
        'font-size': 28,
        'font-weight': 700,
      }, 'filtro 70 puntos'));
    }

    // Bloque marino con icono de línea del grupo + etiqueta G1–G6 debajo de la base
    const yIco = yBase + 14;
    const xPar = cx - 64;
    svg.appendChild(elSvg('rect', {
      x: xPar, y: yIco, width: 46, height: 46, rx: 6, fill: C.marino,
    }));
    const icoSvg = elSvg('svg', {
      x: xPar + 5, y: yIco + 5, width: 36, height: 36, viewBox: '0 0 48 48',
    });
    icoSvg.style.color = C.azulIcono;
    icoSvg.appendChild(elSvg('use', { href: g.ico }));
    svg.appendChild(icoSvg);

    svg.appendChild(elSvg('text', {
      x: xPar + 60, y: yIco + 36,
      fill: C.marino,
      'font-family': FUENTE_TITULO,
      'font-size': 38,
      'font-weight': 800,
    }, g.id));

    // Nombre corto debajo (32 px)
    svg.appendChild(elSvg('text', {
      x: cx, y: yIco + 86,
      'text-anchor': 'middle',
      fill: C.marino,
      'font-family': FUENTE_CUERPO,
      'font-size': 32,
      'font-weight': 700,
    }, g.l1));
    svg.appendChild(elSvg('text', {
      x: cx, y: yIco + 122,
      'text-anchor': 'middle',
      fill: C.marino,
      'font-family': FUENTE_CUERPO,
      'font-size': 32,
      'font-weight': 700,
    }, g.l2));
  });

  // Línea base horizontal común dibujada encima del pie de las columnas
  svg.appendChild(elSvg('line', {
    x1: 20, y1: yBase, x2: W - 20, y2: yBase,
    stroke: C.marino, 'stroke-width': 4,
  }));

  contenedor.appendChild(svg);
}

// ============================================================================
// 3. Línea de tiempo proporcional: «La mañana del 25 de noviembre» (8:15–12:00)
//    Escala 1.3× más grande: bloques de 212 px, minutos 56 px, títulos 48 px, horas 38 px.
// ============================================================================
const SEGMENTOS_AGENDA = [
  { titulo: 'Bloque 1',  sub: 'G1 a G3',       min: 60, hIni: '8:15',  hFin: '9:15',  tipo: 'bloque' },
  { titulo: 'Bloque 2',  sub: 'G4 · DIGEDUCA', min: 75, hIni: '9:15',  hFin: '10:30', tipo: 'destacado' },
  { titulo: 'Refacción', sub: '',              min: 20, hIni: '10:30', hFin: '10:50', tipo: 'pausa' },
  { titulo: 'Bloque 3',  sub: 'G5 y G6',       min: 70, hIni: '10:50', hFin: '12:00', tipo: 'bloque' },
];

function construirAgenda(contenedor) {
  const W = 1792, H = 562;
  const xIni = 28, xFin = W - 28;
  const anchoTotal = xFin - xIni;
  const totalMin = SEGMENTOS_AGENDA.reduce((acc, s) => acc + s.min, 0); // 225 min
  const yBase = 462;
  const altoBloque = 212;
  const altoPausa = 136;

  const svg = elSvg('svg', {
    viewBox: `0 0 ${W} ${H}`,
    class: 'grafica-svg',
    role: 'img',
    'aria-label': 'Agenda proporcional del 25 de noviembre de 8:15 a 12:00: Bloque 1 (60 min), Bloque 2 (75 min), Refacción (20 min) y Bloque 3 (70 min)',
  });

  let cursor = xIni;
  const marcasHora = [{ x: xIni, hora: '8:15', ancla: 'start' }];

  SEGMENTOS_AGENDA.forEach((seg, idx) => {
    const w = (seg.min / totalMin) * anchoTotal;
    const esPausa = seg.tipo === 'pausa';
    const esDest = seg.tipo === 'destacado';
    const h = esPausa ? altoPausa : altoBloque;
    const y = yBase - h;
    const cx = cursor + w / 2;

    if (esPausa) {
      // Etiqueta «Refacción» (44 px) por encima del borde superior de los bloques con línea guía vertical
      svg.appendChild(elSvg('text', {
        x: cx, y: 214,
        'text-anchor': 'middle',
        fill: C.marino,
        'font-family': FUENTE_TITULO,
        'font-size': 44,
        'font-weight': 800,
      }, seg.titulo));
      svg.appendChild(elSvg('line', {
        x1: cx, y1: 228, x2: cx, y2: y - 10,
        stroke: C.grisBorde, 'stroke-width': 3.5, 'stroke-dasharray': '6 6',
      }));
    } else {
      // Título (48 px) y subtítulo (36 px) sobre cada bloque
      svg.appendChild(elSvg('text', {
        x: cx, y: 66,
        'text-anchor': 'middle',
        fill: C.marino,
        'font-family': FUENTE_TITULO,
        'font-size': 48,
        'font-weight': 800,
      }, seg.titulo));

      if (seg.sub) {
        svg.appendChild(elSvg('text', {
          x: cx, y: 116,
          'text-anchor': 'middle',
          fill: C.texto2,
          'font-family': FUENTE_CUERPO,
          'font-size': 36,
          'font-weight': 700,
        }, seg.sub));
      }
    }

    // Segmento animado por atributo width desde su borde izquierdo
    svg.appendChild(elSvg('rect', {
      x: cursor + 2,
      y,
      width: w - 4,
      height: h,
      rx: 8,
      fill: esDest ? C.amarillo : (esPausa ? C.grisFondo : C.marino),
      stroke: esDest ? C.marino : (esPausa ? C.grisBorde : C.marino),
      'stroke-width': esDest ? 3.5 : 2.5,
      class: 'g-rect-h',
      'data-x': cursor + 2,
      'data-w': w - 4,
      'data-x0': cursor + 2,
    }));

    // Minutos dentro de cada segmento (56 px en bloques; 44 px en Refacción para caber en 150 px)
    svg.appendChild(elSvg('text', {
      x: cx,
      y: y + h / 2 + (esPausa ? 15 : 20),
      'text-anchor': 'middle',
      fill: (esDest || esPausa) ? C.marino : C.blanco,
      'font-family': FUENTE_TITULO,
      'font-size': esPausa ? 44 : 56,
      'font-weight': 800,
    }, `${seg.min} min`));

    cursor += w;
    marcasHora.push({
      x: cursor,
      hora: seg.hFin,
      ancla: idx === SEGMENTOS_AGENDA.length - 1 ? 'end' : 'middle',
    });
  });

  // Línea base única del eje de tiempo
  svg.appendChild(elSvg('line', {
    x1: xIni, y1: yBase, x2: xFin, y2: yBase,
    stroke: C.marino, 'stroke-width': 4,
  }));

  // Marcas y horas debajo (38 px)
  for (const m of marcasHora) {
    svg.appendChild(elSvg('line', {
      x1: m.x, y1: yBase, x2: m.x, y2: yBase + 20,
      stroke: C.marino, 'stroke-width': 3.5,
    }));
    svg.appendChild(elSvg('text', {
      x: m.x, y: yBase + 70,
      'text-anchor': m.ancla,
      fill: C.marino,
      'font-family': FUENTE_CUERPO,
      'font-size': 38,
      'font-weight': 700,
    }, m.hora));
  }

  contenedor.appendChild(svg);
}

// ============================================================================
// API pública
// ============================================================================
const CONSTRUCTORES = {
  responsables: construirResponsables,
  grupos: construirGrupos,
  agenda: construirAgenda,
};

export function renderizarGrafica(contenedor, clave) {
  const fn = CONSTRUCTORES[clave];
  if (!fn) return;
  contenedor.innerHTML = '';
  contenedor.classList.add('grafica');
  fn(contenedor);
}

// Anima el crecimiento de los rectángulos SVG desde la línea base una sola vez (0.8 s)
export function animarGrafica(contenedor, reducido) {
  if (contenedor.dataset.animada === '1') return;
  contenedor.dataset.animada = '1';
  if (reducido) return;

  const rectsH = contenedor.querySelectorAll('.g-rect-h');
  const rectsV = contenedor.querySelectorAll('.g-rect-v');

  rectsH.forEach((r, idx) => {
    const xDest = Number(r.dataset.x);
    const wDest = Number(r.dataset.w);
    const xIni = Number(r.dataset.x0);
    gsap.fromTo(
      r,
      { attr: { x: xIni, width: 0 } },
      { attr: { x: xDest, width: wDest }, duration: 0.8, delay: idx * 0.04, ease: 'power2.out' }
    );
  });

  rectsV.forEach((r, idx) => {
    const yDest = Number(r.dataset.y);
    const hDest = Number(r.dataset.h);
    const yBase = Number(r.dataset.ybase);
    gsap.fromTo(
      r,
      { attr: { y: yBase, height: 0 } },
      { attr: { y: yDest, height: hDest }, duration: 0.8, delay: idx * 0.05, ease: 'power2.out' }
    );
  });
}
