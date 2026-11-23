# Presentación: Bono Específico por Bilingüismo

Socialización del instructivo (G1 a G6) para la capacitación a enlaces departamentales del 24 al 26 de noviembre de 2026. Dirección visual «El brocado de 29 rombos». Funciona **sin internet**.

## Cómo abrirla
Doble clic en `index.html` (Chrome, Edge o Firefox) y pantalla completa con **F11**.

Para llevarla a otra computadora basta con copiar `index.html`, `dist/`, `fonts/` y `assets/` (unos 2 MB). `node_modules/` y `src/` solo se usan para editarla.

## Teclas
| Tecla | Acción |
|---|---|
| → / ← o espacio | Avanzar o retroceder (los diagramas aparecen paso a paso) |
| **S** | Abre la vista del presentador con notas y la siguiente diapositiva |
| **T** | Reinicia el temporizador del bloque actual |
| **Esc** | Vista general de todas las diapositivas |
| **F** | Pantalla completa |

El temporizador (arriba a la derecha) empieza solo al entrar a cada bloque de la agenda del 25 de noviembre: G1–G3 (60 min), G4 (75 min) y G5–G6 (70 min). Cambia a amarillo con borde marino al pasar el 85 % del tiempo. Abajo a la izquierda se muestra el contador de actividad («Actividad N de 29»).

## Logo oficial
`assets/logos/digebi.jpg` se muestra recortado sobre el fondo celeste (sin placa blanca) en la portada y en el cierre.

## Editar y volver a compilar
- Contenido y notas: `index.html`
- Escena 3D de 29 rombos: `src/rombos.js`
- Gráficas SVG (responsables, grupos y agenda): `src/graficas.js`
- Diagramas de flujo (G1–G6): `src/flujos.js`
- Estilos y tipografía: `src/estilos.css`
- Conexión con Reveal.js: `src/main.js`

Después de editar: `bash compilar.sh`.

## Créditos técnicos
three.js 0.187 (MIT), GSAP 3.15 (licencia estándar sin costo), reveal.js 6.0 (MIT). Fuentes Outfit y Atkinson Hyperlegible (SIL Open Font License).
