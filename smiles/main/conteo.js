import $ from 'jquery';
import { wiFlag, infoCiudad } from '../widev.js';

// 🌍 20 PAÍSES ORDENADOS POR ZONA HORARIA (Primero → Último en recibir año nuevo)
export const paisesAnoNuevo = [
  { nombre: 'Kiribati', pais: 'Kiribati', codigo: 'KI', zona: 'Pacific/Kiritimati', orden: 1 },
  { nombre: 'Auckland', pais: 'Nueva Zelanda', codigo: 'NZ', zona: 'Pacific/Auckland', orden: 2 },
  { nombre: 'Sídney', pais: 'Australia', codigo: 'AU', zona: 'Australia/Sydney', orden: 3 },
  { nombre: 'Tokio', pais: 'Japón', codigo: 'JP', zona: 'Asia/Tokyo', orden: 4 },
  { nombre: 'Seúl', pais: 'Corea del Sur', codigo: 'KR', zona: 'Asia/Seoul', orden: 5 },
  { nombre: 'Pekín', pais: 'China', codigo: 'CN', zona: 'Asia/Shanghai', orden: 6 },
  { nombre: 'Bangkok', pais: 'Tailandia', codigo: 'TH', zona: 'Asia/Bangkok', orden: 7 },
  { nombre: 'Moscú', pais: 'Rusia', codigo: 'RU', zona: 'Europe/Moscow', orden: 8 },
  { nombre: 'París', pais: 'Francia', codigo: 'FR', zona: 'Europe/Paris', orden: 9 },
  { nombre: 'Londres', pais: 'Reino Unido', codigo: 'GB', zona: 'Europe/London', orden: 10 },
  { nombre: 'Madrid', pais: 'España', codigo: 'ES', zona: 'Europe/Madrid', orden: 11 },
  { nombre: 'Brasília', pais: 'Brasil', codigo: 'BR', zona: 'America/Sao_Paulo', orden: 12 },
  { nombre: 'Santiago', pais: 'Chile', codigo: 'CL', zona: 'America/Santiago', orden: 13 },
  { nombre: 'Buenos Aires', pais: 'Argentina', codigo: 'AR', zona: 'America/Argentina/Buenos_Aires', orden: 14 },
  { nombre: 'Lima', pais: 'Perú', codigo: 'PE', zona: 'America/Lima', orden: 15 },
  { nombre: 'Bogotá', pais: 'Colombia', codigo: 'CO', zona: 'America/Bogota', orden: 16 },
  { nombre: 'Nueva York', pais: 'Estados Unidos', codigo: 'US', zona: 'America/New_York', orden: 17 },
  { nombre: 'Los Ángeles', pais: 'Estados Unidos', codigo: 'US', zona: 'America/Los_Angeles', orden: 18 },
  { nombre: 'Honolulu', pais: 'Estados Unidos', codigo: 'US', zona: 'Pacific/Honolulu', orden: 19 },
  { nombre: 'Pago Pago', pais: 'Samoa Americana', codigo: 'AS', zona: 'Pacific/Pago_Pago', orden: 20 }
];

// 🎯 GENERAR HTML
export const conteo = () => {
  const paisDefault = paisesAnoNuevo.find(p => p.codigo === 'PE') || paisesAnoNuevo[14];
  
  return `
    <div class="conteo-ano-nuevo">
      <!-- Fondo atardecer -->
      <div class="fondo-atardecer"></div>
      
      <!-- Título -->
      <h1 class="titulo-principal">Felizzz año. Dios te bendiga siempre</h1>
      
      <!-- Box Principal -->
      <div class="box-principal">
        <div class="pais-info">
          <img src="${wiFlag(paisDefault.codigo)}" alt="${paisDefault.pais}" class="bandera-principal">
          <span class="nombre-pais">${paisDefault.nombre} - ${paisDefault.pais}</span>
        </div>
        <div class="contador-grande" id="contadorPrincipal">
          <span class="tiempo-numero">00</span>
          <span class="separador">:</span>
          <span class="tiempo-numero">00</span>
          <span class="separador">:</span>
          <span class="tiempo-numero">00</span>
        </div>
        <div class="fecha-actual" id="fechaPrincipal">--</div>
      </div>
      
      <!-- Tabla de países -->
      <div class="tabla-paises">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ciudad - País</th>
              <th>Faltan</th>
              <th>Fecha Actual</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody id="tablaPaises">
            ${paisesAnoNuevo.map((p, i) => `
              <tr data-zona="${p.zona}" data-codigo="${p.codigo}" data-nombre="${p.nombre}" data-pais="${p.pais}" class="${p.codigo === 'PE' ? 'seleccionado' : ''}">
                <td>${i + 1}</td>
                <td>
                  <img src="${wiFlag(p.codigo)}" alt="${p.pais}" class="bandera-tabla">
                  ${p.nombre} - ${p.pais}
                </td>
                <td class="contador-tabla" data-contador="${p.zona}">--:--:--</td>
                <td class="fecha-tabla" data-fecha="${p.zona}">--</td>
                <td><button class="btn-seleccionar">Seleccionar</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      
      <!-- Canvas para confeti (ya existe en HTML) -->
    </div>
  `;
};

// ⏱️ CALCULAR TIEMPO RESTANTE HASTA AÑO NUEVO
const calcularTiempoRestante = (zona) => {
  try {
    const ahora = new Date();
    const anoNuevo = new Date(new Date().toLocaleString('en-US', { timeZone: zona }));
    anoNuevo.setFullYear(2026, 0, 1);
    anoNuevo.setHours(0, 0, 0, 0);
    
    const diff = anoNuevo - new Date(ahora.toLocaleString('en-US', { timeZone: zona }));
    
    if (diff <= 0) return { horas: 0, minutos: 0, segundos: 0, yaPaso: true };
    
    return {
      horas: Math.floor(diff / 3600000),
      minutos: Math.floor((diff % 3600000) / 60000),
      segundos: Math.floor((diff % 60000) / 1000),
      yaPaso: false
    };
  } catch (e) {
    console.error('Error calcularTiempoRestante:', e);
    return { horas: 0, minutos: 0, segundos: 0, yaPaso: false };
  }
};

// 🎆 ANIMACIÓN DE CONFETI
const lanzarConfeti = () => {
  const canvas = document.querySelector('canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particulas = [];
  const colores = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  
  for (let i = 0; i < 150; i++) {
    particulas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      color: colores[Math.floor(Math.random() * colores.length)],
      size: Math.random() * 8 + 3
    });
  }
  
  const animar = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particulas.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;
      
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      
      if (p.y > canvas.height) particulas.splice(index, 1);
    });
    
    if (particulas.length > 0) requestAnimationFrame(animar);
  };
  
  animar();
};

// 🔄 ACTUALIZAR CONTADORES
const actualizarContadores = () => {
  const zonaActual = $('.box-principal').data('zona') || 'America/Lima';
  
  // Actualizar contador principal
  const tiempoPrincipal = calcularTiempoRestante(zonaActual);
  const $principal = $('#contadorPrincipal');
  
  if (tiempoPrincipal.yaPaso) {
    $principal.html('<span class="ya-paso">🎉 ¡Feliz 2026! 🎉</span>');
    lanzarConfeti();
  } else {
    const nums = $principal.find('.tiempo-numero');
    nums.eq(0).text(String(tiempoPrincipal.horas).padStart(2, '0'));
    nums.eq(1).text(String(tiempoPrincipal.minutos).padStart(2, '0'));
    nums.eq(2).text(String(tiempoPrincipal.segundos).padStart(2, '0'));
  }
  
  // Actualizar fecha principal
  const infoPrincipal = infoCiudad(zonaActual);
  if (infoPrincipal) {
    $('#fechaPrincipal').text(infoPrincipal.fecha);
  }
  
  // Actualizar tabla
  paisesAnoNuevo.forEach(pais => {
    const tiempo = calcularTiempoRestante(pais.zona);
    const info = infoCiudad(pais.zona);
    
    const $contador = $(`.contador-tabla[data-contador="${pais.zona}"]`);
    const $fecha = $(`.fecha-tabla[data-fecha="${pais.zona}"]`);
    
    if (tiempo.yaPaso) {
      $contador.html('🎉 ¡Feliz 2026!');
    } else {
      $contador.text(`${String(tiempo.horas).padStart(2, '0')}:${String(tiempo.minutos).padStart(2, '0')}:${String(tiempo.segundos).padStart(2, '0')}`);
    }
    
    if (info) $fecha.text(info.fecha);
  });
};

// 🎯 INICIALIZAR EVENTOS
export const iniciarConteo = () => {
  // Evento: Seleccionar país
  $(document).on('click', '.btn-seleccionar', function() {
    const $fila = $(this).closest('tr');
    const zona = $fila.data('zona');
    const codigo = $fila.data('codigo');
    const nombre = $fila.data('nombre');
    const pais = $fila.data('pais');
    
    // Actualizar box principal
    $('.box-principal').data('zona', zona);
    $('.bandera-principal').attr('src', wiFlag(codigo)).attr('alt', pais);
    $('.nombre-pais').text(`${nombre} - ${pais}`);
    
    // Marcar fila seleccionada
    $('#tablaPaises tr').removeClass('seleccionado');
    $fila.addClass('seleccionado');
    
    // Actualizar inmediatamente
    actualizarContadores();
  });
  
  // Actualizar cada segundo
  setInterval(actualizarContadores, 1000);
  
  // Primera actualización
  actualizarContadores();
  
  // Guardar zona por defecto
  $('.box-principal').data('zona', 'America/Lima');
};