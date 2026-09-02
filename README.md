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

1. Portada rediseñada con foto grande + collage de ilustraciones (paisaje,
   termas, textil, ganadería). Se revirtió en la tercera ronda — ver abajo.
2. Se reescribió la descripción de la candidata para poner en primer plano
   que trabaja desde siempre —y hasta hoy— de la mano con los ganaderos:
   compra y venta de lácteos, llevándolos a mercados de Huánuco y otros
   lugares para ir ampliando el mercado del queso de Baños; y se subrayó la
   cercanía, la confianza que se ha ganado y que conoce a los vecinos del
   pueblo por su nombre.
3. Letras un poco más grandes otra vez, y el logo del partido (portada y
   "Marca la R" del cierre) agrandado aún más.

**Tercera ronda**

1. **Portada**: se volvió a la versión original (foto de la candidata + franja
   lateral con motivo de aguas termales), a pedido explícito — sin usar
   ilustraciones "de relleno" a falta de fotos reales de Baños, ya que este
   entorno de trabajo no tiene salida a internet para descargarlas (Wikimedia,
   bancos de imágenes, etc. están bloqueados por política de red de la
   sesión). Si se envían fotos propias del distrito, se pueden incorporar
   directamente.
2. **Verificación del dato de centros poblados**: se confirmó por varias
   fuentes independientes (deperu.com / directorio de centros poblados) que
   el distrito de Baños tiene **159 centros poblados** (no una cifra vaga de
   "más de 150") — el dato de la versión anterior era correcto pero
   impreciso, así que se ajustó a la cifra exacta. De paso, se intentó
   verificar la superficie del distrito en km²: las búsquedas devolvieron
   cifras contradictorias (183, 449.9 y 82.66 km², estas últimas dos
   pertenecientes a otros distritos vecinos según fuentes cruzadas) sin
   poder confirmar cuál es la correcta, así que **se retiró esa cifra** del
   documento en lugar de arriesgar un dato incorrecto en material de
   campaña. Se confirmaron sí como correctos: la altitud (3 409 m s.n.m.),
   el río Nupe y la distancia a Huánuco (112 km).

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
