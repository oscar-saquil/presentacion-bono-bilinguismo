import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes';
import { gsap } from 'gsap';
import { crearEscena } from './rombos.js';
import { renderizarFlujo, ajustarFlujo } from './flujos.js';
import { renderizarGrafica, animarGrafica } from './graficas.js';

const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const TOTAL_ACTIVIDADES = 29;

// 1. Diagramas de flujo (G1–G6) y gráficas SVG
document.querySelectorAll('[data-flujo]').forEach(el => renderizarFlujo(el, el.dataset.flujo));
document.querySelectorAll('[data-grafica]').forEach(el => renderizarGrafica(el, el.dataset.grafica));

// 2. Contador discreto de actividad («Actividad N de 29»)
const contador = document.getElementById('contador');
function actualizarContador(escena, { hechas, actual }) {
  if (escena !== 'banda' || (!actual && hechas <= 0)) {
    contador.hidden = true;
    return;
  }
  const numero = actual || hechas;
  contador.textContent = `Actividad ${numero} de ${TOTAL_ACTIVIDADES}`;
  contador.hidden = false;
}

// 3. Escena 3D de los 29 rombos
let rombos = { ir() {} };
try {
  rombos = crearEscena(document.getElementById('rombos'));
} catch (e) {
  document.body.classList.add('sin-3d');
  console.warn('WebGL no disponible', e);
}

function parsearFoco(texto) {
  if (!texto) return null;
  const partes = texto.split('-').map(Number);
  return partes.length === 2 && partes[0] > 0 && partes[1] > 0 ? partes : null;
}

// Calcula qué actividades están tejidas y cuál está en curso según los fragmentos visibles
function calcularProgreso(slide) {
  const baseHechas = Number(slide.dataset.hechas || 0);
  const visibles = [...slide.querySelectorAll('.fragment.visible[data-n]')]
    .map(el => Number(el.dataset.n))
    .filter(n => n > 0);

  if (!visibles.length) {
    return { hechas: baseHechas, actual: null };
  }
  const actual = Math.max(...visibles);
  const hechas = Math.max(baseHechas, actual - 1);
  return { hechas, actual };
}

function aplicarEstado(slide) {
  const escena = slide.dataset.escena || 'banda';
  const foco = parsearFoco(slide.dataset.foco);
  const progreso = calcularProgreso(slide);
  document.body.dataset.escena = escena;
  rombos.ir(escena, { ...progreso, foco });
  actualizarContador(escena, progreso);
}

// 4. Entrada de cada diapositiva, ajuste de tarjetas y animación única de gráficas
function entrar(slide) {
  ajustarFlujo(slide);
  slide.querySelectorAll('[data-grafica]').forEach(el => animarGrafica(el, reducido));
  if (reducido) return;
  const titulo = slide.querySelector('.t-entra');
  const cuerpo = slide.querySelectorAll('.c-entra');
  const tl = gsap.timeline();
  if (titulo) {
    tl.fromTo(
      titulo,
      { y: 24, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
      { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.75, ease: 'power3.out' }
    );
  }
  if (cuerpo.length) {
    tl.fromTo(
      cuerpo,
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, ease: 'power2.out' },
      '-=0.32'
    );
  }
}

// 5. Temporizador por bloque, según la agenda (tecla T reinicia)
const reloj = document.getElementById('reloj');
const inicioBloque = {};
let bloqueActual = null;
let minutosBloque = 0;

function fmt(s) {
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

function pintarReloj() {
  if (!bloqueActual) {
    reloj.hidden = true;
    return;
  }
  reloj.hidden = false;
  const s = (Date.now() - inicioBloque[bloqueActual]) / 1000;
  const lim = minutosBloque * 60;
  reloj.querySelector('.t').textContent = `${fmt(s)} de ${minutosBloque}:00`;
  reloj.querySelector('.b').style.width = `${(Math.min(s / lim, 1) * 100).toFixed(2)}%`;
  reloj.classList.toggle('aviso', s > lim * 0.85);
}

setInterval(pintarReloj, 1000);

function actualizarBloque(slide) {
  const sec = slide.closest('[data-bloque]') || slide;
  const b = sec.dataset.bloque;
  if (!b) {
    bloqueActual = null;
    pintarReloj();
    return;
  }
  bloqueActual = b;
  minutosBloque = Number(sec.dataset.min);
  reloj.querySelector('.n').textContent = sec.dataset.nombreBloque;
  if (!inicioBloque[b]) inicioBloque[b] = Date.now();
  pintarReloj();
}

document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 't' && bloqueActual) {
    inicioBloque[bloqueActual] = Date.now();
    pintarReloj();
  }
});

// 6. Reveal.js
const deck = new Reveal({
  width: 1920,
  height: 1080,
  margin: 0,
  minScale: 0.2,
  maxScale: 2,
  hash: true,
  controls: true,
  controlsTutorial: false,
  progress: true,
  center: false,
  transition: reducido ? 'none' : 'fade',
  transitionSpeed: 'default',
  backgroundTransition: 'none',
  plugins: [Notes],
});

deck.initialize().then(() => {
  const s = deck.getCurrentSlide();
  aplicarEstado(s);
  actualizarBloque(s);
  entrar(s);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ajustarFlujo(deck.getCurrentSlide()));
  }
});

deck.on('slidechanged', e => {
  aplicarEstado(e.currentSlide);
  actualizarBloque(e.currentSlide);
  entrar(e.currentSlide);
});

// Al aparecer cada fragmento: actualiza el rombo en curso y dibuja las flechas SVG
deck.on('fragmentshown', e => {
  aplicarEstado(deck.getCurrentSlide());
  for (const f of e.fragments) {
    const p = f.querySelector && f.querySelector('path');
    if (p && !reducido) {
      const L = p.getTotalLength();
      gsap.fromTo(
        p,
        { strokeDasharray: L, strokeDashoffset: L },
        {
          strokeDashoffset: 0,
          duration: 0.45,
          ease: 'power2.out',
          onComplete: () => {
            p.style.strokeDasharray = p.classList.contains('punteada') ? '6 6' : '';
          },
        }
      );
    }
  }
});

deck.on('fragmenthidden', () => aplicarEstado(deck.getCurrentSlide()));
