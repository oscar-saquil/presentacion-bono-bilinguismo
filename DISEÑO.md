# Dirección de diseño v2 · «El brocado de 29 rombos»

Reemplaza por completo el concepto anterior de los «hilos» (src/hilos.js), que se descarta.

## 1. Idea central

El logo de DIGEBI combina letras macizas azul marino con **iconos de línea** (escuadra, lápiz, libro, robot) y **motivos de brocado** (rombos rojo, verde y amarillo; la espiga; la figura tejida). La presentación adopta ese lenguaje.

El proceso del bono tiene **29 actividades**. Cada actividad es **un rombo en 3D**. Los 29 rombos forman una banda de brocado que **se va tejiendo a medida que avanza la exposición**: los rombos de las actividades ya explicadas quedan macizos en marino, la actividad que se está explicando se levanta y se ilumina en amarillo, y las que faltan se ven solo como contorno. Al final, los 29 rombos se reúnen en un **rombo mayor**: cuatro esquinas que convergen en un centro, imagen del universo en la cosmovisión maya. Es el cierre: todas las dependencias en un solo proceso.

## 2. Tokens

### Color (muestreados del logo)
| Token | Hex | Uso |
|---|---|---|
| `--celeste` | `#5FAFE0` | Fondo de portada, separadores de bloque y cierre (como el logo) |
| `--marino` | `#113C6F` | Títulos, texto principal, rombos ya tejidos |
| `--azul-icono` | `#4281B7` | Iconos de línea, contornos de rombos pendientes, líneas de diagrama |
| `--papel` | `#EEF6FC` | Fondo de las diapositivas de contenido |
| `--texto-2` | `#2E4A70` | Texto secundario (8.2:1 sobre papel) |
| `--rojo` | `#E8434A` | Filtros de 70 puntos y respuestas «No» |
| `--verde` | `#67B38F` | Respuestas «Sí» y acentos |
| `--amarillo` | `#F8D965` | Actividad en curso. Siempre con borde marino (bajo contraste sobre papel) |
| `--blanco` | `#FFFFFF` | Tarjetas de los diagramas |

Reglas: nunca texto blanco sobre celeste (2.4:1). Marino sobre celeste solo en tamaños ≥ 40 px y peso ≥ 700 (4.6:1).

### Tipografía (archivos ya en `fonts/`)
- **Outfit** (`Outfit-VF.ttf`, variable 100–900): títulos. Peso 800, interlínea 0.95, tracking −0.01em. Evoca las letras macizas del logo.
- **Atkinson Hyperlegible** (`Regular` y `Bold`): todo el texto. Diseñada para máxima legibilidad, ideal para proyector.
- Escala sobre el lienzo de 1920×1080: portada 132 px · título de diapositiva 78 px · entrada 36 px · cuerpo 30 px · tarjetas de diagrama 21/17 px · notas 22 px.

### Iconos de línea (SVG en línea, dibujos originales, sin copiar el logo)
Trazo de 3 px, extremos redondeados, color `--azul-icono` sobre bloque marino (como dentro de las letras del logo). Uno por grupo:
G1 persona con credencial · G2 megáfono · G3 documento con marca de verificación · G4 libro abierto · G5 pizarrón · G6 nómina con moneda. Se usan en los separadores de bloque, en la cabecera de cada diagrama y en el mapa de 29 actividades.

## 3. Escena 3D (three.js): `src/rombos.js` sustituye a `src/hilos.js`

- **Geometría:** rombo extruido (cuadrado girado 45°, profundidad 0.18, bisel pequeño), 29 instancias. Material `MeshStandardMaterial` mate (roughness 0.7). Luz hemisférica suave y una direccional con **sombras suaves** sobre un plano `ShadowMaterial` invisible, para que se vea como papel o fichas sobre una mesa. Canvas transparente: el color de fondo lo pone el CSS.
- **Estados del rombo:** pendiente = solo contorno (`EdgesGeometry`, línea `--azul-icono`, relleno al 8 %) · tejido = macizo `--marino` · en curso = `--amarillo` con contorno marino, elevado y con un giro lento · filtro (actividades 18 y 24, donde se aplica el mínimo de 70 puntos) = anillo `--rojo` alrededor.
- **Formaciones** (cada diapositiva declara una con `data-escena`):
  - `portada`: los 29 rombos en un **motivo de brocado grande** (retícula de rombos en zigzag, como el motivo de la «B» del logo), a la derecha de la pantalla. Al cargar, entran desde posiciones dispersas y se ensamblan. Es el **único** momento orquestado de entrada.
  - `banda`: diapositivas de contenido. Banda baja de 29 rombos en 6 grupos separados (4·3·5·9·5·3), ocupando el 14 % inferior de la pantalla, sin tapar el texto. Indica el progreso.
  - `grupo`: separadores de bloque. La cámara se acerca al grupo del bloque; los demás quedan atenuados.
  - `rombo-mayor`: cierre. Los 29 rombos se reúnen en un rombo mayor: 25 en retícula de 5×5 girada 45° más 4 en las esquinas exteriores.
- **API pública:** `crearEscena(canvas)` devuelve `{ ir(escena, { hechas, actual, foco }) }`.
  - `hechas`: número de actividades ya tejidas.
  - `actual`: número de actividad en curso o `null`.
  - `foco`: rango del grupo, por ejemplo `[13, 21]`.
- **Movimiento:** transiciones con GSAP de 1.2 a 1.6 s, `power3.inOut`. Con `prefers-reduced-motion` todo es instantáneo y sin giro. Sin posprocesado ni bloom. `pixelRatio` ≤ 1.5.

## 4. Conexión con las diapositivas (`src/main.js`)

- Cada `<section>` declara `data-escena` y, si aplica, `data-hechas` y `data-foco="13-21"`.
- Cada nodo de diagrama ya tiene su número de actividad. Al aparecer como fragmento, ese rombo pasa a «en curso» y los anteriores del grupo, a «tejido».
- Se elimina la leyenda de dependencias (`#leyenda`). En su lugar, un contador discreto abajo a la izquierda: «Actividad 14 de 29».
- El temporizador por bloque se conserva tal como está (T reinicia).

## 5. Diapositivas (CSS, `src/estilos.css`, se reescribe)

- **Portada, separadores y cierre:** fondo `--celeste`. El logo `assets/logos/digebi.jpg` (fondo celeste incluido) se muestra recortado a las letras, sin placa blanca, arriba a la izquierda en la portada y en el cierre. Títulos marino en Outfit 800.
- **Contenido:** fondo `--papel`. Texto marino. Los títulos de grupo llevan a la izquierda un **bloque marino con el icono de línea del grupo** dentro, el mismo gesto del logo.
- **Diagramas:** carriles con la etiqueta en un bloque marino y el texto en blanco (el bloque marino da 11:1). Tarjetas blancas con borde superior de 6 px del color de la dependencia, sombra mínima (`0 1px 0 rgba(17,60,111,.15)`). Decisiones = rombo amarillo con borde marino y texto marino. Flechas `--azul-icono`; «Sí» en verde y «No» en rojo, siempre con la palabra escrita.
- Los colores de las dependencias en las tarjetas se ajustan a fondo claro: DIGEBI `#2F6FB5`, DIDEDUC `#C2541F`, DICOMS `#1E8A63`, DIGEDUCA `#B07800`, DIGEMOCA `#C2456F`, DIREH `#2E8B2E`; solicitante `#6B7A99`. Cada uno va siempre acompañado del nombre del carril.
- Prohibido: degradados decorativos, sombras grandes, mayúsculas sostenidas en etiquetas, emojis, tarjetas idénticas en rejilla como decoración, texto blanco sobre celeste.

## 6. Restricciones técnicas

- Funciona sin internet. Sin CDN. Se compila con `bash compilar.sh` (esbuild → `dist/app.js` IIFE). three 0.187, gsap 3.15, reveal.js 6.0.2 ya instalados.
- No cambiar el texto del contenido ni las notas del presentador, salvo los atributos `data-*` necesarios.
- No tocar `node_modules/`, `dist/` ni `compilar.sh`.

## 7. Criterios de aceptación (los revisa Claude con capturas a 1920×1080)

1. Ningún elemento 3D tapa texto en ninguna diapositiva.
2. Toda combinación de texto y fondo cumple al menos 4.5:1; en títulos grandes, 3:1.
3. La banda refleja el avance real: en G4, por ejemplo, 1–12 tejidos, el nodo visible en curso y 13–29 pendientes.
4. El cierre forma el rombo mayor y el logo se ve nítido sin placa blanca.
5. La consola queda sin errores, salvo los logos que falten.
6. Movimiento reducido: sin animaciones.
