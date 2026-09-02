# Presentación — Nena Mejía, Alcaldesa por Baños 2027–2030

Fuente editable del documento de campaña (4 páginas, A4) en `document/index.html`,
reconstruido a partir del PDF original para poder aplicar las correcciones pedidas.

## Correcciones aplicadas

**Primera ronda**

1. Portada: franja lateral con motivo de aguas termales junto a la foto.
2. "Proyecto Jaqsha": "Gestionar el destrabe..." → **"Continuar con la gestión
   del proyecto de Jaqsha"**.
3. "Vía a Agojirca": se quitó la mención a "Río".
4. Se amplió la descripción de la candidata (vínculo con los ganaderos).
5. Letras más grandes.
6. Logo del partido más grande.

**Segunda ronda**

1. **Portada rediseñada**: la foto de la candidata ahora ocupa una columna
   grande y nítida; al lado, la otra mitad de la portada se llenó con un
   colage de piezas sobre atractivos turísticos y costumbres del distrito —
   la campiña y la Cordillera Huayhuash (foto real, ya usada en la página 3),
   una ilustración de las pozas termales de El Batán, una franja con un
   patrón textil andino, y una ilustración de ganadería/quesería.
   ⚠️ Nota: este entorno de trabajo no tiene salida a internet para descargar
   fotos (Wikimedia, bancos de imágenes, etc. están bloqueados por política de
   red), así que solo pudo reutilizarse la foto real que ya traía el PDF
   original (con su crédito). El resto del collage son ilustraciones propias
   con la temática pedida. Si envías fotos propias de los baños termales,
   paisajes o costumbres del distrito (como hiciste con el PDF original), se
   pueden reemplazar directamente por fotos reales.
2. Se reescribió la descripción de la candidata para poner en primer plano
   que trabaja desde siempre —y hasta hoy— de la mano con los ganaderos:
   compra y venta de lácteos, llevándolos a mercados de Huánuco y otros
   lugares para ir ampliando el mercado del queso de Baños; y se subrayó la
   cercanía, la confianza que se ha ganado y que conoce a los vecinos del
   pueblo por su nombre.
3. Letras un poco más grandes otra vez, y el logo del partido (portada y
   "Marca la R" del cierre) agrandado aún más.

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
