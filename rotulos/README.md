# Rótulos — Party Outlet Perú

Plantilla reconstruida a partir del PDF base `Rotulos_01Sep.pdf` (6 rótulos,
1 por página A4) para generar los rótulos de envío/alistamiento del día.

Hay dos formatos de rótulo, igual que en el PDF base:

- **`detallado`**: tarjeta de envío + "Lista de alistamiento (uso interno)"
  con línea de corte, para pedidos que llevan armado de productos (ej. cajas
  temáticas).
- **`simple`**: "Rótulo de envío" solo, para despacho por agencia (Shalom),
  delivery local (InDrive, etc.) o recojo en tienda.

## Uso

1. Editar `pedidos.json` con los rótulos del día (reemplazar el array
   `pedidos`; ver el ejemplo ya cargado —tomado del PDF base— como
   referencia de los campos).
2. Generar el HTML:
   ```bash
   cd rotulos
   node generar.js
   ```
3. Exportar a PDF (o capturas PNG para revisar antes de imprimir):
   ```bash
   node render.js pdf     # genera dist/Rotulos_<fecha>.pdf
   node render.js shots   # genera dist/rotulo-N.png de cada rótulo (revisión)
   ```

## Campos de `pedidos.json`

Comunes: `tipo` (`"detallado"` | `"simple"`), `codigo`, `cliente`, `dni`
(o `null` → "No especificado"), `celular`.

`detallado`: `pedidoFecha`, `tematica`, `destinoCiudad`, `destinoLinea`
(admite `**negrita**`), `enviarFecha`, `estadoPago` (`"PAGADO"` → pastilla
verde; cualquier otro valor → pastilla ámbar), `nota`, `productos: [{nombre,
cantidad, detalle}]`.

`simple`: `modalidad` (`"envio"` | `"recojo"`, cambia el título de la
sección y el ícono), `destinoHeading`, `chipIcon`, `chipTexto` (agencia/
transporte, o dirección corta si es recojo), `direccion`, `notaFecha`
(admite `**negrita**`), `warning` (opcional, nota ámbar bajo la tarjeta para
datos faltantes a confirmar).

## Estructura

```
rotulos/
  plantilla.html     # estilos + estructura de las dos tarjetas (fuente editable)
  pedidos.json        # datos del día (editar antes de cada tanda)
  generar.js          # arma rotulos/build/index.html desde pedidos.json
  render.js            # exporta a dist/Rotulos_<fecha>.pdf (o PNG con "shots")
  assets/
    party-outlet-logo.png      # logo recortado del PDF base (fondo transparente)
    fonts/Baloo2-Variable.woff2, Inter-Variable.woff2
dist/
  Rotulos_<fecha>.pdf  # PDF final
```
