// Escena 3D: seis hilos, uno por dependencia, que se entrelazan.
// La ondulación se calcula en el shader (barato para laptops de proyección).
import * as THREE from 'three';
import { gsap } from 'gsap';

export const DEPENDENCIAS = [
  { clave: 'digebi',   nombre: 'DIGEBI',   color: '#3987e5' },
  { clave: 'dideduc',  nombre: 'DIDEDUC',  color: '#d95926' },
  { clave: 'dicoms',   nombre: 'DICOMS',   color: '#199e70' },
  { clave: 'digeduca', nombre: 'DIGEDUCA', color: '#c98500' },
  { clave: 'digemoca', nombre: 'DIGEMOCA', color: '#d55181' },
  { clave: 'direh',    nombre: 'DIREH',    color: '#0ca30c' },
];

// Estados de la escena: cada diapositiva declara uno con data-hilos.
const ESTADOS = {
  portada: { radio: 0.9,  onda: 0.4,  y: -2.5, x: 0,    z: 9.5, apagado: 0.0,  trenza: 0, rot: 0, gx: 0 },
  quieto:  { radio: 0.55, onda: 0.35, y: -3.1, x: 0,    z: 9.5, apagado: 0.55, trenza: 0, rot: 0, gx: 0 },
  lateral: { radio: 0.7,  onda: 0.3,  y: 0,    x: 0,    z: 9.5, apagado: 0.1,  trenza: 0, rot: Math.PI / 2, gx: 4.3 },
  foco:    { radio: 0.5,  onda: 0.3,  y: -3.55, x: 0,    z: 9.5, apagado: 0.75, trenza: 0, rot: 0, gx: 0 },
  trenza:  { radio: 0.32, onda: 0.25, y: -1.2, x: 0,    z: 7.5, apagado: 0.0,  trenza: 1, rot: 0, gx: 0 },
};

const vert = /* glsl */`
  uniform float uTiempo, uRadio, uOnda, uFase, uTrenza, uY;
  varying vec3 vNormal; varying float vX;
  void main() {
    vec3 p = position;
    float k = mix(0.55, 1.6, uTrenza);
    float a = k * p.x + uFase + uTiempo * 0.35;
    float r = uRadio * (1.0 + 0.25 * sin(0.21 * p.x + uFase * 1.7 + uTiempo * 0.2));
    vec3 c = vec3(0.0, r * sin(a), r * cos(a) * 0.85);
    c.y += uOnda * sin(0.32 * p.x + uTiempo * 0.45) + uY;
    p += c;
    vNormal = normalize(normalMatrix * normal);
    vX = p.x;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`;
const frag = /* glsl */`
  uniform vec3 uColor; uniform float uBrillo, uAlfa;
  varying vec3 vNormal; varying float vX;
  void main() {
    vec3 l = normalize(vec3(0.3, 0.8, 0.6));
    float d = max(dot(vNormal, l), 0.0);
    float borde = pow(1.0 - abs(vNormal.z), 2.0);
    vec3 col = uColor * (0.35 + 0.75 * d) * uBrillo + borde * 0.25 * uBrillo;
    float bordeX = smoothstep(12.0, 8.0, abs(vX));
    gl_FragColor = vec4(col, uAlfa * bordeX);
  }`;

export function crearHilos(canvas) {
  const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  const escena = new THREE.Scene();
  const camara = new THREE.PerspectiveCamera(38, 16 / 9, 0.1, 100);
  camara.position.set(0, 0, 9.5);

  const geoHilo = new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(-12, 0, 0), new THREE.Vector3(12, 0, 0)), 420, 0.05, 10, false);
  const geoHalo = new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(-12, 0, 0), new THREE.Vector3(12, 0, 0)), 420, 0.16, 8, false);

  const param = { radio: 0.9, onda: 0.4, y: -2.5, trenza: 0 };
  const grupo = new THREE.Group(); escena.add(grupo);
  const hilos = DEPENDENCIAS.map((d, i) => {
    const u = {
      uTiempo: { value: 0 }, uRadio: { value: param.radio }, uOnda: { value: param.onda },
      uFase: { value: (i / DEPENDENCIAS.length) * Math.PI * 2 }, uTrenza: { value: 0 }, uY: { value: param.y },
      uColor: { value: new THREE.Color(d.color) }, uBrillo: { value: 1 }, uAlfa: { value: 1 },
    };
    const malla = new THREE.Mesh(geoHilo, new THREE.ShaderMaterial({ uniforms: u, vertexShader: vert, fragmentShader: frag, transparent: true }));
    const uh = { ...u, uBrillo: { value: 1.4 }, uAlfa: { value: 0 } };
    const halo = new THREE.Mesh(geoHalo, new THREE.ShaderMaterial({ uniforms: uh, vertexShader: vert, fragmentShader: frag,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    grupo.add(malla, halo);
    return { d, u, uh, foco: { valor: 0 }, brillo: { valor: 1 } };
  });

  function ajustar() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camara.aspect = w / h; camara.updateProjectionMatrix();
  }
  window.addEventListener('resize', ajustar); ajustar();

  const reloj = new THREE.Timer();
  renderer.setAnimationLoop(() => {
    reloj.update(); const t = reducido ? 0 : reloj.getElapsed();
    for (const h of hilos) {
      for (const u of [h.u, h.uh]) {
        u.uTiempo.value = t; u.uRadio.value = param.radio; u.uOnda.value = param.onda;
        u.uY.value = param.y; u.uTrenza.value = param.trenza;
      }
      h.u.uBrillo.value = h.brillo.valor;
      h.uh.uAlfa.value = h.foco.valor * 0.28;
    }
    renderer.render(escena, camara);
  });

  // Cambia de estado. focos: lista de claves de dependencias a iluminar.
  function ir(nombre = 'quieto', focos = []) {
    const e = ESTADOS[nombre] || ESTADOS.quieto;
    const dur = reducido ? 0 : 1.6, ease = 'power3.inOut';
    gsap.to(param, { radio: e.radio, onda: e.onda, y: e.y, trenza: e.trenza, duration: dur, ease });
    gsap.to(camara.position, { x: e.x, z: e.z, duration: dur, ease });
    gsap.to(grupo.rotation, { z: e.rot, duration: dur, ease });
    gsap.to(grupo.position, { x: e.gx, duration: dur, ease });
    for (const h of hilos) {
      const enFoco = focos.includes(h.d.clave);
      const brillo = focos.length ? (enFoco ? 1.35 : 0.18) : 1 - e.apagado;
      gsap.to(h.brillo, { valor: brillo, duration: dur * 0.7, ease: 'power2.out' });
      gsap.to(h.foco, { valor: enFoco ? 1 : 0, duration: dur * 0.7, ease: 'power2.out' });
    }
  }
  return { ir };
}
