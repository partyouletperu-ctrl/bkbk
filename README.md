# Presentación — Nena Mejía, Alcaldesa por Baños 2027–2030

Fuente editable del documento de campaña (4 páginas, A4) en `document/index.html`,
reconstruido a partir del PDF original para poder aplicar las correcciones pedidas.

## Correcciones aplicadas

1. **Portada.** Se mantiene la foto de la candidata. Junto a ella, entre el panel
   azul marino y la foto, se agregó una franja ilustrada con pozas de aguas
   termales en terrazas (motivo de los baños termales del distrito), para que
   la portada no se vea "toda azul".
2. **Proyecto Jaqsha** (sección "Agua frente a la sequía"): se cambió
   "Gestionar el destrabe del proyecto de Jaqsha" por **"Continuar con la
   gestión del proyecto de Jaqsha"**.
3. **Vía a Agojirca** (sección "Caminos y conectividad"): se quitó la mención a
   "Río" — queda **"Apertura y mejora de la vía a Agojirca"**.
4. **Descripción de la candidata**: se amplió el párrafo "Emprendedora y de
   trato con la gente" para contar, en tono cercano, que se involucró a fondo
   en el tema lácteo y que mantiene hasta hoy un vínculo comercial de trabajo
   conjunto y cooperativo con los ganaderos del distrito.
5. **Tipografía**: tamaños de letra aumentados en todo el documento para mayor
   legibilidad.
6. **Logo del partido**: agrandado en la portada y en el cierre (página 4).

## Regenerar el PDF

Requiere Node.js con el paquete `playwright` y Chromium instalado.

```bash
cd document
node render.js pdf     # genera dist/Presentacion_Nena_Mejia_Alcaldesa_Banos_2027-2030.pdf
node render.js shots   # genera capturas PNG de cada página en dist/ (para revisión)
```

## Estructura

```
document/
  index.html        # fuente del documento (HTML + CSS, 4 páginas tamaño A4)
  render.js          # script de exportación a PDF/PNG vía Playwright
  assets/            # foto de la candidata, paisaje y tipografías
dist/
  Presentacion_Nena_Mejia_Alcaldesa_Banos_2027-2030.pdf   # PDF final
```
