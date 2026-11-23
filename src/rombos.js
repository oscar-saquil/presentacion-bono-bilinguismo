// Escena 3D: «El brocado de 29 rombos» (sustituye a src/hilos.js).
// Cada una de las 29 actividades del instructivo es una ficha romboidal plana en 3D
// que se teje conforme avanza la presentación.
import * as THREE from 'three';
import { gsap } from 'gsap';

// Paleta muestreada del logo de DIGEBI (DISEÑO.md §2)
const COLOR = {
  marino:    0x113C6F,
  azulIcono: 0x4281B7,
  amarillo:  0xF8D965,
  rojo:      0xE8434A,
  verde:     0x67B38F,
  blanco:    0xFFFFFF,
};

// Seis grupos del instructivo: 4 + 3 + 5 + 9 + 5 + 3 = 29 actividades
const GRUPOS = [4, 3, 5, 9, 5, 3];
const TOTAL = 29;
const FILTROS = new Set([18, 24]); // Actividades con mínimo de 70 puntos

// Cámara teleobjetivo suave (FOV 20°, z = 25.8) → mismo encuadre 16:9 con inclinación ≤ 10°
const FOV = 20;
const CAM_Z_BASE = 25.8;
const AMP_BALANCEO = THREE.MathUtils.degToRad(12); // ±12° en el plano (eje Z)

// Crea la ficha romboidal plana (cuadrado girado 45°, profundidad 0.07, bisel proporcional)
function crearGeometriaRombo(radio = 0.24) {
  const forma = new THREE.Shape();
  forma.moveTo(0, radio);
  forma.lineTo(radio, 0);
  forma.lineTo(0, -radio);
  forma.lineTo(-radio, 0);
  forma.closePath();

  const geo = new THREE.ExtrudeGeometry(forma, {
    depth: 0.07,
    bevelEnabled: true,
    bevelThickness: 0.011,
    bevelSize: 0.009,
    bevelSegments: 2,
    curveSegments: 1,
  });
  geo.center();
  return geo;
}

// Crea una cara romboidal 2D plana (relleno para rombos pendientes sin aristas de profundidad)
function crearGeometriaPlano(radio = 0.242) {
  const forma = new THREE.Shape();
  forma.moveTo(0, radio);
  forma.lineTo(-radio, 0);
  forma.lineTo(0, -radio);
  forma.lineTo(radio, 0);
  forma.closePath();
  return new THREE.ShapeGeometry(forma);
}

// Crea un contorno romboidal 2D plano (anillo delgado solo en la cara frontal)
function crearGeometriaContorno(radioInt, radioExt) {
  const ext = new THREE.Shape();
  ext.moveTo(0, radioExt);
  ext.lineTo(-radioExt, 0);
  ext.lineTo(0, -radioExt);
  ext.lineTo(radioExt, 0);
  ext.closePath();

  const hueco = new THREE.Path();
  hueco.moveTo(0, radioInt);
  hueco.lineTo(radioInt, 0);
  hueco.lineTo(0, -radioInt);
  hueco.lineTo(-radioInt, 0);
  hueco.closePath();
  ext.holes.push(hueco);

  return new THREE.ShapeGeometry(ext);
}

// Posiciones de las 4 formaciones para los 29 rombos
function construirFormaciones() {
  // 1. PORTADA: motivo de brocado grande en zigzag (29 rombos en 9 filas simétricas)
  //    Colocado a la derecha de la pantalla para dejar libre el título a la izquierda.
  const rejillaPortada = [
    [-2,  4], [ 2,  4],
    [-3,  3], [-1,  3], [ 1,  3], [ 3,  3],
    [-2,  2], [ 0,  2], [ 2,  2],
    [-3,  1], [-1,  1], [ 1,  1], [ 3,  1],
    [-2,  0], [ 0,  0], [ 2,  0],
    [-3, -1], [-1, -1], [ 1, -1], [ 3, -1],
    [-2, -2], [ 0, -2], [ 2, -2],
    [-3, -3], [-1, -3], [ 1, -3], [ 3, -3],
    [-2, -4], [ 2, -4],
  ];
  const pasoP = 0.70, cxP = 4.80, cyP = 0.0;
  const portada = rejillaPortada.map(([c, r]) => ({
    x: cxP + c * pasoP,
    y: cyP + r * pasoP,
    z: (c === 0 && r === 0) ? 0.06 : 0,
    escala: (c === 0 && r === 0) ? 1.52 : 1.38,
    // Acentos cromáticos del brocado (evoca la «B» y la «I» del logo DIGEBI)
    acento: (c === 0 && r === 0) ? COLOR.amarillo
      : (c === 0 && Math.abs(r) === 2) ? COLOR.verde
      : (Math.abs(c) === 2 && r === 0) ? COLOR.rojo
      : (Math.abs(c) === 2 && Math.abs(r) === 4) ? COLOR.amarillo
      : COLOR.marino,
  }));

  // Helper para distribuir los 29 rombos en 6 grupos separados (4·3·5·9·5·3)
  function distribuirEnBanda(paso, huecoGrupo, cx, cy, escala) {
    const xs = [];
    let cursor = 0;
    GRUPOS.forEach((cant, gIdx) => {
      for (let k = 0; k < cant; k++) {
        xs.push(cursor);
        cursor += paso;
      }
      if (gIdx < GRUPOS.length - 1) cursor += huecoGrupo;
    });
    const anchoTotal = xs[xs.length - 1] - xs[0];
    const desplazamiento = cx - anchoTotal / 2;
    return xs.map(x => ({ x: x + desplazamiento, y: cy, z: 0, escala }));
  }

  // 2. BANDA: franja inferior (~10% inferior, despejando el contador a la izquierda)
  const banda = distribuirEnBanda(0.40, 0.28, 0.42, -3.96, 0.64);

  // 3. GRUPO: misma estructura en 6 grupos con holgura para escala 1.25 en foco
  const grupo = distribuirEnBanda(0.66, 0.54, 0, 0, 0.90);

  // 4. ROMBO MAYOR (cierre): 25 en retícula 5×5 girada 45° + 4 esquinas exteriores de color
  const pasoM = 0.45, cxM = 4.65, cyM = 0.0;
  const romboMayor = [];
  for (let u = -2; u <= 2; u++) {
    for (let v = -2; v <= 2; v++) {
      const esCentro = (u === 0 && v === 0);
      romboMayor.push({
        x: cxM + (u - v) * pasoM,
        y: cyM + (u + v) * pasoM,
        z: esCentro ? 0.04 : 0,
        escala: esCentro ? 1.46 : 1.38,
        esCentro,
        esEsquina: false,
        colorEsquina: COLOR.marino,
      });
    }
  }
  // Cuatro esquinas exteriores con los cuatro colores del brocado del logo
  const distEsquina = 2.68;
  const esquinas = [
    [0, distEsquina, COLOR.rojo],
    [distEsquina, 0, COLOR.amarillo],
    [0, -distEsquina, COLOR.verde],
    [-distEsquina, 0, COLOR.blanco],
  ];
  for (const [ex, ey, colorEsquina] of esquinas) {
    romboMayor.push({
      x: cxM + ex,
      y: cyM + ey,
      z: 0.04,
      escala: 1.50,
      esCentro: false,
      esEsquina: true,
      colorEsquina,
    });
  }

  return { portada, banda, grupo, 'rombo-mayor': romboMayor };
}

export function crearEscena(canvas) {
  const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Renderizador con fondo transparente (el color de fondo lo controla el CSS)
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const escena = new THREE.Scene();
  const camara = new THREE.PerspectiveCamera(FOV, 16 / 9, 0.1, 100);
  camara.position.set(0, 0, CAM_Z_BASE);

  // Iluminación frontal suave tipo fichas sobre mesa + sombra ligera
  const luzHemi = new THREE.HemisphereLight(0xffffff, 0x8bb4d9, 1.55);
  escena.add(luzHemi);

  const luzDir = new THREE.DirectionalLight(0xffffff, 0.95);
  luzDir.position.set(-2.5, 3.8, 14);
  luzDir.castShadow = true;
  luzDir.shadow.mapSize.set(1024, 1024);
  luzDir.shadow.radius = 4;
  luzDir.shadow.bias = -0.0005;
  luzDir.shadow.camera.left = -12;
  luzDir.shadow.camera.right = 12;
  luzDir.shadow.camera.top = 8;
  luzDir.shadow.camera.bottom = -8;
  luzDir.shadow.camera.near = 2;
  luzDir.shadow.camera.far = 28;
  escena.add(luzDir);
  escena.add(luzDir.target);

  // Plano invisible que recibe las sombras suaves de las fichas
  const planoSombra = new THREE.Mesh(
    new THREE.PlaneGeometry(70, 32),
    new THREE.ShadowMaterial({ opacity: 0.14, color: COLOR.marino })
  );
  planoSombra.position.set(0, 0, -0.22);
  planoSombra.receiveShadow = true;
  escena.add(planoSombra);

  // Geometrías compartidas (ficha extruida delgada + cara/contorno planos 2D)
  const geoRombo = crearGeometriaRombo(0.24);
  const geoPlano = crearGeometriaPlano(0.242);
  const geoContorno = crearGeometriaContorno(0.213, 0.248);     // grosor ~0.035 (banda)
  const geoContornoFino = crearGeometriaContorno(0.231, 0.249); // ~2.5 px aparentes (grupo y cierre)
  const geoAnillo = crearGeometriaContorno(0.280, 0.322);       // anillo rojo plano de filtro

  const formaciones = construirFormaciones();
  const raiz = new THREE.Group();
  escena.add(raiz);

  // Crear las 29 instancias (n = 1..29)
  const rombos = [];
  for (let i = 0; i < TOTAL; i++) {
    const n = i + 1;
    const grupo = new THREE.Group();

    // 1. Ficha sólida 3D (visible cuando está tejida, en curso, portada o cierre)
    const matRelleno = new THREE.MeshStandardMaterial({
      color: COLOR.marino,
      roughness: 0.72,
      metalness: 0.02,
      transparent: true,
      opacity: 1,
    });
    const malla = new THREE.Mesh(geoRombo, matRelleno);
    malla.castShadow = true;
    malla.receiveShadow = true;
    grupo.add(malla);

    // 2. Relleno plano 2D (solo para rombos pendientes; evita ver caras laterales)
    const matPlano = new THREE.MeshBasicMaterial({
      color: COLOR.blanco,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const rellenoPlano = new THREE.Mesh(geoPlano, matPlano);
    rellenoPlano.position.z = 0.0465;
    rellenoPlano.visible = false;
    grupo.add(rellenoPlano);

    // 3. Contorno plano 2D solo sobre la cara frontal (nunca EdgesGeometry de profundidad)
    const matContorno = new THREE.MeshBasicMaterial({
      color: COLOR.azulIcono,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const contorno = new THREE.Mesh(geoContorno, matContorno);
    contorno.position.z = 0.049;
    contorno.visible = false;
    grupo.add(contorno);

    // 4. Anillo rojo plano alrededor de las actividades filtro (18 y 24)
    let anillo = null;
    if (FILTROS.has(n)) {
      const matAnillo = new THREE.MeshBasicMaterial({
        color: COLOR.rojo,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });
      anillo = new THREE.Mesh(geoAnillo, matAnillo);
      anillo.position.z = 0.047;
      anillo.visible = false;
      grupo.add(anillo);
    }

    raiz.add(grupo);
    rombos.push({
      n,
      grupo,
      malla,
      rellenoPlano,
      contorno,
      anillo,
      enCurso: false,
    });
  }

  // Ajuste de tamaño responsivo
  function ajustar() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camara.aspect = w / h;
    camara.updateProjectionMatrix();
  }
  window.addEventListener('resize', ajustar);
  ajustar();

  // Estado de animación continua
  let primeraVez = true;
  let ultimoModo = null;
  const reloj = new THREE.Timer();
  const colorTmp = new THREE.Color();

  // Anima un color THREE.Color con GSAP (o instantáneo si reducido)
  function animarColor(matColor, hexDestino, dur, ease) {
    colorTmp.setHex(hexDestino);
    if (dur === 0) {
      matColor.copy(colorTmp);
    } else {
      gsap.to(matColor, { r: colorTmp.r, g: colorTmp.g, b: colorTmp.b, duration: dur, ease, overwrite: 'auto' });
    }
  }

  // Anima la opacidad y visibilidad de una malla sin dejar fantasmas al llegar a 0
  function animarOpacidad(mesh, destino, dur) {
    if (dur === 0) {
      mesh.material.opacity = destino;
      mesh.visible = destino > 0.01;
      return;
    }
    if (destino > 0.01) mesh.visible = true;
    gsap.to(mesh.material, {
      opacity: destino,
      duration: dur,
      ease: 'power2.out',
      overwrite: 'auto',
      onComplete: () => { mesh.visible = mesh.material.opacity > 0.01; },
    });
  }

  // Bucle de renderizado: balanceo plano en el eje Z (±12°) solo en el rombo en curso
  renderer.setAnimationLoop(() => {
    reloj.update();
    const t = reloj.getElapsed();
    if (!reducido) {
      for (const r of rombos) {
        if (r.enCurso) {
          r.grupo.rotation.set(0, 0, Math.sin(t * 2.0) * AMP_BALANCEO);
        }
      }
    }
    luzDir.position.x = camara.position.x - 2.5;
    luzDir.target.position.x = camara.position.x;
    renderer.render(escena, camara);
  });

  // Posiciona dispersos los rombos solo una vez para el ensamblado inicial de la portada
  function dispersarParaEntrada() {
    const base = formaciones.portada;
    rombos.forEach((r, i) => {
      const ang = (i / TOTAL) * Math.PI * 2 + 0.4;
      const radioDisp = 3.2 + (i % 5) * 0.85;
      r.grupo.position.set(
        base[i].x + Math.cos(ang) * radioDisp,
        base[i].y + Math.sin(ang) * radioDisp * 0.75,
        1.2 + (i % 3) * 0.4
      );
      r.grupo.rotation.set(0, 0, (i % 3 - 1) * 0.25);
      r.grupo.scale.setScalar(0.35);
    });
  }

  /**
   * Transiciona la escena 3D a la formación y progreso indicados.
   * @param {'portada'|'banda'|'grupo'|'rombo-mayor'} nombreEscena
   * @param {{ hechas?: number, actual?: number|null, foco?: [number, number]|null }} opciones
   */
  function ir(nombreEscena = 'banda', { hechas = 0, actual = null, foco = null } = {}) {
    const modo = formaciones[nombreEscena] ? nombreEscena : 'banda';
    const metas = formaciones[modo];

    const esEntradaPortada = primeraVez && modo === 'portada';
    const cargaDirecta = primeraVez && modo !== 'portada';
    if (esEntradaPortada && !reducido) {
      dispersarParaEntrada();
    }
    primeraVez = false;
    const mismoModo = (ultimoModo === modo);
    ultimoModo = modo;

    const dur = (reducido || cargaDirecta) ? 0 : (esEntradaPortada ? 1.25 : (mismoModo ? 0.65 : 1.35));
    const ease = esEntradaPortada ? 'power3.out' : (mismoModo ? 'power2.out' : 'power3.inOut');

    // 1. Destino de la cámara según formación
    let camX = 0, camY = 0, camZ = CAM_Z_BASE;
    if (modo === 'grupo' && Array.isArray(foco) && foco.length === 2) {
      const iIni = Math.max(0, Math.min(TOTAL - 1, foco[0] - 1));
      const iFin = Math.max(0, Math.min(TOTAL - 1, foco[1] - 1));
      const xMin = metas[iIni].x;
      const xMax = metas[iFin].x;
      camX = (xMin + xMax) / 2;

      const tanMitad = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
      const aspect = camara.aspect || (16 / 9);
      const anchoFoco = (xMax - xMin) + 1.1;
      // Encuadrar el bloque centrado horizontalmente sin recortar ningún rombo en foco
      const ocupacion = (iFin - iIni + 1) >= 10 ? 0.78 : 0.68;
      const anchoVisible = anchoFoco / ocupacion;
      camZ = THREE.MathUtils.clamp(anchoVisible / (2 * tanMitad * aspect), 15.2, 22.5);
      const mediaAlt = camZ * tanMitad;
      camY = -mediaAlt * 0.48;
    }

    if (dur === 0) {
      camara.position.set(camX, camY, camZ);
    } else {
      gsap.to(camara.position, { x: camX, y: camY, z: camZ, duration: dur, ease, overwrite: 'auto' });
    }

    // 2. Posición, escala y aspecto plano de cada uno de los 29 rombos
    const fondoCeleste = (modo === 'portada' || modo === 'grupo' || modo === 'rombo-mayor');
    const usaContornoFino = (modo === 'grupo' || modo === 'rombo-mayor' || modo === 'portada');

    rombos.forEach((r, i) => {
      const m = metas[i];
      const n = r.n;
      const enFoco = !foco || (n >= foco[0] && n <= foco[1]);
      const esActual = (modo === 'banda' && actual === n);
      const esTejido = (n <= hechas);
      const esFocoPendienteGrupo = (modo === 'grupo' && enFoco && !esTejido);
      const esRestoGrupo = (modo === 'grupo' && !enFoco && !esTejido);

      r.enCurso = esActual;
      r.contorno.geometry = usaContornoFino ? geoContornoFino : geoContorno;

      // Posición y escala destino
      let zExtra = 0;
      let yExtra = 0;
      let esc = m.escala;

      if (esActual) {
        zExtra = 0.65;
        yExtra = 0.14;
        esc = m.escala * 1.28;
      } else if (esFocoPendienteGrupo) {
        zExtra = 0.10;
        esc = m.escala * 1.25;
      } else if (esRestoGrupo) {
        zExtra = -0.12;
        esc = m.escala * 0.92;
      }

      const retraso = esEntradaPortada && !reducido ? i * 0.012 : 0;

      if (dur === 0) {
        r.grupo.position.set(m.x, m.y + yExtra, m.z + zExtra);
        r.grupo.scale.setScalar(esc);
        r.grupo.rotation.set(0, 0, 0);
      } else {
        gsap.to(r.grupo.position, {
          x: m.x, y: m.y + yExtra, z: m.z + zExtra,
          duration: dur, delay: retraso, ease, overwrite: 'auto',
        });
        gsap.to(r.grupo.scale, {
          x: esc, y: esc, z: esc,
          duration: dur, delay: retraso, ease, overwrite: 'auto',
        });
        if (!esActual) {
          gsap.to(r.grupo.rotation, {
            x: 0, y: 0, z: 0,
            duration: dur, delay: retraso, ease, overwrite: 'auto',
          });
        } else {
          gsap.to(r.grupo.rotation, { x: 0, y: 0, duration: dur * 0.6, ease, overwrite: 'auto' });
        }
      }

      // Colores, opacidades y visibilidad según formación y estado
      let colFicha = COLOR.marino;
      let opFicha = 0;
      let opPlano = 0;
      let colContorno = COLOR.azulIcono;
      let opContorno = 0;
      let sombra = false;

      if (modo === 'portada') {
        colFicha = m.acento;
        opFicha = 1;
        colContorno = COLOR.marino;
        opContorno = (m.acento === COLOR.amarillo) ? 1 : 0;
        sombra = true;
      } else if (modo === 'rombo-mayor') {
        // 25 piezas de la retícula en marino (centro amarillo) + 4 esquinas con los 4 colores del logo
        colFicha = m.esEsquina ? m.colorEsquina : (m.esCentro ? COLOR.amarillo : COLOR.marino);
        opFicha = 1;
        colContorno = COLOR.marino;
        opContorno = (m.esEsquina || m.esCentro) ? 1 : 0;
        sombra = true;
      } else if (esActual) {
        // Actividad en curso: ficha amarilla con contorno marino, elevada y balanceo en Z
        colFicha = COLOR.amarillo;
        opFicha = 1;
        colContorno = COLOR.marino;
        opContorno = 1;
        sombra = true;
      } else if (esTejido) {
        // Actividad ya tejida: maciza en marino (también en «grupo», sin atenuar)
        colFicha = COLOR.marino;
        opFicha = 1;
        opContorno = 0;
        sombra = true;
      } else if (esFocoPendienteGrupo) {
        // Grupo en foco pendiente: contorno marino nítido (~2.5 px) + relleno blanco 85%
        opFicha = 0;
        opPlano = 0.85;
        colContorno = COLOR.marino;
        opContorno = 1;
        sombra = false;
      } else if (esRestoGrupo) {
        // Resto de grupos futuros en «grupo»: 25% de opacidad
        opFicha = 0;
        opPlano = 0.09;
        colContorno = COLOR.marino;
        opContorno = 0.25;
        sombra = false;
      } else {
        // Pendiente plano: contorno frontal sin aristas de profundidad
        opFicha = 0;
        opPlano = fondoCeleste ? 0.35 : 0;
        colContorno = fondoCeleste ? COLOR.marino : COLOR.azulIcono;
        opContorno = fondoCeleste ? 0.70 : 1;
        sombra = false;
      }

      r.malla.castShadow = sombra;
      r.malla.material.depthWrite = opFicha > 0.5;
      const durColor = dur * 0.65;
      animarColor(r.malla.material.color, colFicha, durColor, 'power2.out');
      animarColor(r.contorno.material.color, colContorno, durColor, 'power2.out');

      animarOpacidad(r.malla, opFicha, durColor);
      animarOpacidad(r.rellenoPlano, opPlano, durColor);
      animarOpacidad(r.contorno, opContorno, durColor);

      // Anillo rojo solo en «banda» y «grupo» (oculto en «portada» y «rombo-mayor»)
      if (r.anillo) {
        const opAnillo = (modo === 'portada' || modo === 'rombo-mayor')
          ? 0
          : (esRestoGrupo ? 0.25 : 0.96);
        animarOpacidad(r.anillo, opAnillo, durColor);
      }
    });
  }

  return { ir };
}
