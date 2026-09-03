// Genera rotulos/build/index.html a partir de rotulos/pedidos.json
// Uso: node generar.js
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const data = JSON.parse(fs.readFileSync(path.join(DIR, 'pedidos.json'), 'utf8'));

function esc(s) {
  if (s === null || s === undefined) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Permite **negrita** dentro de un texto ya escapado.
function rich(s) {
  return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
}

function pillEstado(estado) {
  const e = (estado || '').toUpperCase();
  const cls = e === 'PAGADO' ? 'green' : 'amber';
  const marca = e === 'PAGADO' ? ' ✓' : '';
  return `<span class="pill ${cls}">${esc(estado)}${marca}</span>`;
}

function pageDetallado(p) {
  const filas = (p.productos || []).map(prod => `
        <tr>
          <td class="chk"><span class="checkbox"></span></td>
          <td>${esc(prod.nombre)}</td>
          <td class="cant">${esc(prod.cantidad)}${prod.detalle ? `<br>(${esc(prod.detalle)})` : ''}</td>
        </tr>`).join('');

  return `
  <div class="page page-detallado">
    <div class="card">
      <div class="card-inner">
        <div class="det-top">
          <div class="det-logo"><img src="../assets/party-outlet-logo.png" alt="Party Outlet Perú"></div>
          <div class="det-code">
            <span class="label">Código temporal</span>
            <div class="code-val">${esc(p.codigo)}</div>
            ${p.pedidoFecha ? `<div class="pedido-fecha">Pedido: ${esc(p.pedidoFecha)}</div>` : ''}
          </div>
        </div>
        <div class="det-rule"></div>
        <div class="det-cliente">${esc(p.cliente)}</div>
        <div class="det-fields">
          <div class="field">
            <span class="label">DNI</span>
            <div class="val ${p.dni ? 'purple' : 'dark'}">${p.dni ? esc(p.dni) : 'No especificado'}</div>
          </div>
          <div class="field">
            <span class="label">Celular</span>
            <div class="val dark">${esc(p.celular)}</div>
          </div>
        </div>
        ${p.tematica ? `<div class="det-tematica">Temática: <b>${esc(p.tematica)}</b></div>` : ''}
        <div class="det-destino">
          <span class="label">Destino</span>
          <div class="ciudad">${esc(p.destinoCiudad)}</div>
          ${p.destinoLinea ? `<div class="linea">${rich(p.destinoLinea)}</div>` : ''}
          <div class="enviar">${rich(p.enviarFecha)}</div>
        </div>
      </div>
    </div>

    <div class="cutline"><span>✂</span><span class="dash"></span><span>Cortar y pegar en la caja</span><span class="dash"></span></div>

    <div class="alist">
      <div class="alist-head">
        <span class="titulo">Lista de alistamiento (uso interno)</span>
        <span class="meta">${esc(p.codigo)}${p.tematica ? ' · ' + esc(p.tematica) : ''}</span>
      </div>
      <div class="estado-pago">Estado de pago: ${pillEstado(p.estadoPago)}</div>
      <table class="prod">
        <thead><tr><th></th><th>Producto</th><th class="cant">Cant.</th></tr></thead>
        <tbody>${filas}</tbody>
      </table>
      ${p.nota ? `<div class="alist-nota"><b>Nota:</b> ${esc(p.nota)}</div>` : ''}
    </div>
  </div>`;
}

function pageSimple(p) {
  const esRecojo = p.modalidad === 'recojo';
  const tituloSeccion = esRecojo ? 'Modalidad' : 'Destino';
  return `
  <div class="page page-simple">
    <div class="blob blob-pink"></div>
    <div class="blob blob-gold"></div>
    <div class="sim-code">
      <span class="label">Código temporal</span>
      <div class="code-val">${esc(p.codigo)}</div>
    </div>
    <div class="card">
      <div class="card-inner">
        <div class="sim-logo"><img src="../assets/party-outlet-logo.png" alt="Party Outlet Perú"></div>
        <div class="sim-subtitulo">Rótulo de envío</div>
        <div class="sim-rule"></div>

        <div class="sim-cliente-row">
          <div>
            <span class="label">Cliente</span>
            <div class="nombre">${esc(p.cliente)}</div>
          </div>
          <div class="cel">
            <span class="label">Cel.</span>
            <div class="val">${esc(p.celular)}</div>
          </div>
        </div>

        <div class="sim-dni">
          <div>
            <span class="label">${esc(p.dniLabel || 'DNI / CE')}</span>
            <div class="val">🪪 ${p.dni ? esc(p.dni) : 'No especificado'}</div>
          </div>
        </div>

        <div class="sim-destino">
          <span class="label">${esRecojo ? '🏠' : '📍'} ${tituloSeccion}</span>
          <div class="heading heading">${esc(p.destinoHeading)}</div>
          ${p.chipTexto ? `<div class="chip">${esc(p.chipIcon || '')} ${esc(p.chipTexto)}</div>` : ''}
          ${p.direccion ? `<div class="direccion">${rich(p.direccion)}</div>` : ''}
          <div class="nota-fecha">${rich(p.notaFecha)}</div>
        </div>

        <div class="sim-footer">
          <div class="brand">Party Outlet Perú</div>
          <div class="sub">Productos originales · Envíos a todo el Perú · WhatsApp ${esc(data.whatsapp || '944 751 287')}</div>
        </div>
      </div>
    </div>
    ${p.warning ? `<div class="warning-box">⚠ ${esc(p.warning)}</div>` : ''}
  </div>`;
}

const paginas = data.pedidos.map(p => p.tipo === 'detallado' ? pageDetallado(p) : pageSimple(p)).join('\n');

const plantilla = fs.readFileSync(path.join(DIR, 'plantilla.html'), 'utf8');
const html = plantilla.replace('<!--PAGES-->', paginas);

fs.mkdirSync(path.join(DIR, 'build'), { recursive: true });
fs.writeFileSync(path.join(DIR, 'build', 'index.html'), html);
console.log(`OK: ${data.pedidos.length} rótulo(s) generado(s) en rotulos/build/index.html`);
