import $ from 'jquery'; 
import { Calendar } from '@fullcalendar/core'; // Calendario interactivo avanzado
import dayGridPlugin from '@fullcalendar/daygrid'; // Plugin de vista mensual para FullCalendar
import timeGridPlugin from '@fullcalendar/timegrid'; // Plugin de vista semanal/diaria para FullCalendar
import interactionPlugin from '@fullcalendar/interaction'; // Plugin para eventos y arrastrar-soltar

// ==============================
// FUNCIONES DE TEMAS CON jQuery
// ==============================
// $('<div class="witemas"></div>').appendTo('body');

export const wiTema = (() => {
 const tms = [["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]], 
 set = el => {const [nm,co] = $(el).data('tema').split('|'); $('html').attr('data-theme',nm); 
 $('meta[name="theme-color"]').length ? $('meta[name="theme-color"]').attr('content',co) : $('<meta>',{name:'theme-color',content:co}).appendTo('head');
 savels('witema',`${nm}|${co}`,720); $('.mtha').removeClass('mtha'); $(el).addClass('mtha');};
 $('.witemas').html(tms.map(([n,c]) => `<div class="tema" data-tema="${n}|${c}" style="background:${c}"></div>`).join(''));
 const sav = getls('witema'), ini = $(`[data-tema="${sav}"]`)[0] || $('.mtha')[0] || $('[data-tema]').first()[0]; ini && set(ini);
 $(document).on('click', '[data-tema]', e => set(e.currentTarget));  return {set};
})();

// ==============================
// SISTEMA DE ACTUALIZACION DE CLASES
// ==============================
export const adrm = (a, b) => {
    $(a).addClass(b).siblings().removeClass(b);
}; 

export const adup = (x, y) => {
  $(x).addClass('updating').text(y);
  setTimeout(() => $(x).removeClass('updating'), 500);
};


export const showLoading = (show) => {
  $('#loading-style').length || $('head').append('<style id="loading-style">.loading{height:1vh;background:linear-gradient(to right,#fdd835,#43a047,#fdd835);background-size:200% 100%;animation:l 1.5s infinite;border-radius:3px;width:100%;position:fixed;top:0;left:0;z-index:9999}@keyframes l{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}</style>');
  $('.loading').length || $('body').append('<div class="loading" style="display:none"></div>');
  $('.loading').toggle(!!show);
};


// PERSONALIZED GREETING
export const Saludar = () => {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) {
        return "Buenos días, ";
    } else if (hora >= 12 && hora < 18) {
        return "Buenas tardes, ";
    } else {
        return "Buenas noches, ";
    }
}; 

// AccederRol
export const accederRol = (rol) => {
  window.location.href = { smiletop: '/smiletop.html' }[rol] || '/smile.html';
};

// RIGHT NOTIFICATIONS WITH X 
export function Notificacion(mensaje, tipo = 'error', tiempo= 3000) {
  const iconos = {
    success: 'fa-check-circle',
    error: 'fa-times-circle',
    warning: 'fa-exclamation-triangle',
    info: 'fa-info-circle'
  };

  const colores = {
    success: '#2E7D32',
    error: '#D32F2F',
    warning: '#F9A825',
    info: '#0288D1'
  };

  if (!$('#notificationsContainer').length) {
    $('body').append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');
  }

  const $n = $(`
    <div class="notification" style="background:#fff;border-left:4px solid ${colores[tipo]};box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;">
      <i class="fas ${iconos[tipo]}" style="color:${colores[tipo]};"></i>
      <span style="flex:1">${mensaje}</span>
      <button style="background:none;border:none;font-size:1.2rem;cursor:pointer;">&times;</button>
    </div>
  `);

  $('#notificationsContainer').append($n);

  // Mostrar con animación
  requestAnimationFrame(() => $n.css({ opacity: 1, transform: 'translateX(0)' }));

  // Cierre manual
  $n.find('button').on('click', () => {
    $n.css({ opacity: 0, transform: 'translateX(20px)' });
    setTimeout(() => $n.remove(), 300);
  });

  // Cierre automático
  setTimeout(() => {
    $n.css({ opacity: 0, transform: 'translateX(20px)' });
    setTimeout(() => $n.remove(), 300);
  }, tiempo);
}

// FECHA LOCAL CON ZONA HORARIA ACTUALIZADO 
export const fechaLocal = (fecha) => {
  const [año, mes, dia] = fecha.split('-').map(Number);
  return new Date(año, mes - 1, dia); // mes - 1 porque JavaScript cuenta desde 0
};


// CENTER PERSONALIZED MESSAGE 
export const Mensaje = (mensaje, tipo = 'success') => {
    $('.alert-box').remove(); // Remove existing ones

    const colores = {
        error: { bg: '#FFE8E6', txt: '#D32F2F', border: '#FFCDD2', icon: 'fa-circle-exclamation' },
        success: { bg: '#E8F5E9', txt: '#2E7D32', border: '#C8E6C9', icon: 'fa-circle-check' }
    };

    const { bg, txt, border, icon } = colores[tipo] || colores.error;

    const $alerta = $(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${bg};
            color: ${txt};
            border-left: 4px solid ${border};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
        ">
            <i class="fas ${icon}"></i>
            <span>${mensaje}</span>
        </div>
    `).appendTo('body').hide().fadeIn(300);

    setTimeout(() => $alerta.fadeOut(300, () => $alerta.remove()), 3000);
};

// BANDERAS 
export function flagUrl(countryCode) {
  if (!countryCode || countryCode.length !== 2) return null;
  return `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${countryCode.toLowerCase()}.svg`;
}

export function hasFlag(countryCode) {
  // Validación básica de códigos de país (2 letras)
  return countryCode && 
         countryCode.length === 2 && 
         /^[A-Za-z]{2}$/.test(countryCode);
}

// Primer letra mayusculas
export const Capi = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}; 

// GUARDANDO EN LOCAL STORAGE EN HORAS 
export function savels(clave, valor, horas) {
  try {
    localStorage.setItem(
      clave,
      JSON.stringify({
        value: valor, // ✅ Maneja automáticamente: strings, numbers, booleans, objects, arrays
        expiry: Date.now() + horas * 3600000, // 🔥 Actualiando en horas 
        type: typeof valor, // Para debugging si necesitas
        isArray: Array.isArray(valor)
      })
    );
  } catch(e){console.error('Error savels', e)}
}
// OBTENIENDO VALORES DEL LOCAL STORAGE
export function getls(clave) {
  try {
    const item = localStorage.getItem(clave);
    if (!item) return null;
    
    const parsed = JSON.parse(item);
    if (!parsed || Date.now() > parsed.expiry) {
      localStorage.removeItem(clave);
      return null;
    }
    
    return parsed.value;
  } catch(e){console.error('Error getls:', e); removels(clave); return null;}
}


// ✅ GUARDAR OBJECTS 
// const userData = {
//   nombre: 'Wilder',
//   rol: 'smile',
// };
// savels('userData', userData, 120);

// // 🔍 Consultar objeto (súper fácil)
// const user = getls('userData');
// if (user) {
//   console.log(user.nombre);              // "Wilder"
//   console.log(user.rol);                 // "smiletop"
// }
// 🎯 Usar en tu app directamente
// $('#welcome').text(`Hola ${user.nombre}!`);
// $('#email').text(user.email);

// ✅ GUARDAR ARRAYS 
// const acciones = ['login', 'updateProfile', 'logout'];
// savels('userActions', acciones, 45);

// // 🔍 Consultar array simple
// const actions = getls('userActions');
// if (actions) {
//   console.log(actions[0]);             // "login"
//   console.log(actions.includes('logout')); // true
//   console.log(actions.join(', '));     // "login, updateProfile, logout"
// }
// Remove a key from localStorage
export function removels(...claves) {
  claves.forEach(clave => {
    if (clave && typeof clave === 'string') {
      localStorage.removeItem(clave);
    }
  });
}

// Save a simple value before leaving the page
// Ex: gosave('fondo', $('html').attr('style'))
export function gosave(nm, vl) {
  $(window).on('beforeunload', () => savels(nm, vl, 168));
}

// Get a saved value and apply a function
// Ex: getsave('stema', (vl) => $('body').addClass(vl))
export function getsave(sv, fn) {
  const mvl = getls(sv);
  if (mvl) fn(mvl);
}

// Save multiple elements before leaving the page
// Ex: gosaves('input', 'id', ($e) => $e.val())
export function gosaves(selector, attr, fn) {
  $(window).on('beforeunload', function () {
    $(selector).each(function () {
      const $el = $(this);
      const key = $el.attr(attr);
      if (key) savels(key, fn($el), 168);
    });
  });
}

// Restore multiple values from localStorage
// Ex: getsaves('input', 'id', ($e, v) => $e.val(v))
export function getsaves(selector, attr, fn) {
  $(selector).each(function () {
    const $el = $(this);
    const key = $el.attr(attr);
    const val = getls(key);
    if (key && val != null) fn($el, val);
  });
}

 // ==============================
// INYECTAR CSS MINIFICADO PARA MODALES (usando jQuery)
// ==============================
$(`<style>
.modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);z-index:100;justify-content:center;align-items:center;animation:fadeInModal 0.3s ease;}
.modal.active{display:flex;}
@keyframes fadeInModal{from{opacity:0;}to{opacity:1;}}
.modal-content{background-color:#fff;border-radius:var(--border-radius);box-shadow:var(--shadow);width:90%;max-width:600px;max-height:90vh;overflow-y:auto;animation:slideInModal 0.3s ease;border-radius:1vh}
@keyframes slideInModal{from{transform:translateY(-30px);opacity:0;}to{transform:translateY(0);opacity:1;}}
.modal-header{padding:20px;border-bottom:1px solid #e0e0e0;display:flex;justify-content:space-between;align-items:center;}
.modal-title{color:var(--navy-blue);font-size:1.2rem;font-weight:600;}
.close-modal{background:none;border:none;font-size:1.5rem;cursor:pointer;color:#777;transition:color 0.2s;}
.close-modal:hover{color:var(--navy-blue);}
.modal-body{padding:20px;}
.modal-footer{padding:15px 20px;border-top:1px solid #e0e0e0;display:flex;justify-content:flex-end;gap:10px;}
</style>`).appendTo('head');

// ==============================
// FUNCIONES DE MODALES CON jQuery
// ==============================

export const openModal = (modalId) => {
  $(`#${modalId}`).addClass('active');
  $('body').addClass('modal-open');
};

export const closeModal = (modalId) => {
  $(`#${modalId}`).removeClass('active');
  $('body').removeClass('modal-open');
};

export const closeAllModals = () => {
  $('.modal').removeClass('active');
  $('body').removeClass('modal-open');
};

export const initModalSystem = () => {
  // Botón de cerrar
  $(document).on('click', '.close-modal', () => closeAllModals());

  // Click fuera del contenido del modal
  $(document).on('click', '.modal', (e) => {
    if ($(e.target).hasClass('modal')) {
      closeAllModals();
    }
  });

  // Tecla Escape
  $(document).on('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
};
// Inicializamos los modales automáticamente
initModalSystem();

/* ============================================================
   📌 EJEMPLO DE USO DEL MODAL - CÓDIGO HTML DE REFERENCIA
   (Este bloque es solo guía y no se renderiza en JS)
   ============================================================

<div id="miModal" class="modal">
  <div class="modal-content">
    <!-- Encabezado del modal con título y botón de cierre -->
    <div class="modal-header">
      <h2 class="modal-title">Título del Modal</h2>
      <button class="close-modal">&times;</button> <!-- Botón de cerrar (ícono ×) -->
    </div>
    <!-- Cuerpo del modal donde va el contenido principal -->
    <div class="modal-body">
      <p>Contenido del modal aquí.</p>
    </div>
    <!-- Pie del modal con botones de acción -->
    <div class="modal-footer">
      <button class="close-modal">Cerrar</button> <!-- Otro botón para cerrar -->
    </div>
  </div>
</div>

<!-- Botón de ejemplo para abrir el modal -->
<button onclick="openModal('miModal')">Abrir Modal</button>

============================================================ */

// ==============================
// TOOLTIPS PERSONALIZADOS - VERSIÓN MINIFICADA
// ==============================
/**
 * Sistema de tooltips con soporte para colores temáticos
 * @param {Element|jQuery|string} el - Elemento o selector
 * @param {string} texto - Texto del tooltip
 * @param {string} pos - Posición o tipo de mensaje (top|right|bottom|left|success|error|warning|info)
 * @param {number} tiempo - Tiempo en ms (0 para permanente)
 */
export function witip(el, texto, pos = 'top', tiempo = 1800) {
  // Mapa de tipos de mensaje a colores
  const tipoColor = {
    'success': '--success', 
    'error': '--error',
    'warning': '--warning',
    'info': '--info'
  };
  
  // Determinar si el tercer parámetro es un tipo de mensaje
  const tipo = tipoColor[pos] ? pos : null;
  const posicion = tipo ? 'top' : pos;
  
  // Inicializar estilos si no existen
  if (!$('#witip-styles').length) {
    $('<style id="witip-styles">' +
      '.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;' + 
      'padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);' + 
      'opacity:0;transition:opacity .2s;pointer-events:none}' +
      '.witip::after{content:"";position:absolute;border:6px solid transparent}' + 
      '.witip.show{opacity:1}' +
      '.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}' + 
      '.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}' + 
      '.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}' + 
      '.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}' +
      '.witip.success{background:var(--success);color:#fff}' +
      '.witip.error{background:var(--error);color:#fff}' +
      '.witip.warning{background:var(--warning);color:#000}' +
      '.witip.info{background:var(--info);color:#fff}' +
      '</style>').appendTo('head');
  }

  // Procesar selectores múltiples
  if (typeof el === 'string' && (el.includes(',') || el.match(/^[.#a-z]/i))) {
    $(el).each((i, item) => witip(item, texto, pos, tiempo));
    return $(el);
  }

  // Convertir a jQuery y verificar existencia
  const $el = $(el);
  if (!$el.length) return;
  
  // Limpiar tooltips anteriores
  clearTimeout($el.data('witip-timer'));
  $('.witip').remove();
  
  // Asignar ID único si es necesario
  const elId = $el.attr('id') || $el.attr('id', `wtip-${Date.now()}-${Math.floor(Math.random() * 1000)}`).attr('id');
  
  // Crear tooltip con clase de tipo si se especificó
  const $tip = $('<div>', {
    class: `witip ${posicion} ${tipo || ''}`,
    'data-for': elId,
    text: texto,
    css: { 'border-color': tipo ? `var(${tipoColor[tipo]})` : 'var(--mco)' }
  });
  
  // Si es tipo temático, establecer el color de la flecha
  if (tipo) {
    $tip.css('background-color', `var(${tipoColor[tipo]})`);
  }
  
  $('body').append($tip);
  
  // Posicionar tooltip usando rect (más preciso con modales)
  const { left, top, right, bottom, width, height } = $el[0].getBoundingClientRect();
  const tipW = $tip.outerWidth();
  const tipH = $tip.outerHeight();
  
  // Calcular posición con objeto de mapeo (más limpio que switch)
  const positions = {
    'top':    { x: left + width/2 - tipW/2, y: top - tipH - 8 },
    'bottom': { x: left + width/2 - tipW/2, y: bottom + 8 },
    'left':   { x: left - tipW - 8, y: top + height/2 - tipH/2 },
    'right':  { x: right + 8, y: top + height/2 - tipH/2 }
  };
  
  // Obtener coordenadas y ajustar a la ventana
  let { x, y } = positions[posicion];
  x = Math.max(8, Math.min(x, window.innerWidth - tipW - 8));
  y = Math.max(8, Math.min(y, window.innerHeight - tipH - 8));
  
  // Aplicar posición y mostrar con animación
  $tip.css({ left: x, top: y });
  
  $el.data('witip-timer', setTimeout(() => {
    $tip.addClass('show');
    
    if (tiempo > 0) {
      setTimeout(() => {
        $tip.removeClass('show');
        setTimeout(() => $tip.remove(), 200);
      }, tiempo);
    }
  }, 10));
  
  return $el;
}

// CALCULAR EDAD EXACTA 
export const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  
  if (nacimiento > hoy) return -1; // Fecha futura
  
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mesActual = hoy.getMonth();
  const diaActual = hoy.getDate();
  const mesNacimiento = nacimiento.getMonth();
  const diaNacimiento = nacimiento.getDate();
  
  // Ajustar si no ha cumplido años este año
  if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    edad--;
  }
  
  return edad;
};

// Mostrar modal
export function mostrarModal(options) {
// Crear overlay y contenedor del modal
const modal = $(`
<div class="modal-overlay">
<div class="modal-container">
<div class="modal-header">
<h3>${options.title}</h3>
<button class="modal-close">&times;</button>
</div>
<div class="modal-content">
${options.content}
</div>
<div class="modal-footer">
<button class="sky-button modal-cancel">${options.cancelText || 'Cancelar'}</button>
<button class="sky-button primary-button modal-confirm">${options.confirmText || 'Aceptar'}</button>
</div>
</div>
</div>
`);

// Añadir modal al DOM
$('body').append(modal);

// Animar entrada
modal.css('opacity', 0);
setTimeout(() => {
modal.css({
'opacity': 1,
'transition': 'opacity 0.3s ease'
});
}, 10);

// Eventos
modal.find('.modal-close, .modal-cancel').on('click', function() {
cerrarModal(modal);
if (options.onCancel) {
options.onCancel(modal);
}
});

modal.find('.modal-confirm').on('click', function() {
if (options.onConfirm) {
options.onConfirm(modal);
}
});

return modal;
}

// Cerrar modal
export function cerrarModal(modal) {
modal.css({
'opacity': 0,
'transition': 'opacity 0.3s ease'
});

setTimeout(() => {
modal.remove();
}, 300);
}
// Cargar nuestro modal 
function cargarModal() {
// Agregar estilos base para modales si no existen
if ($('#modal-styles').length === 0) {
$('head').append(`
<style id="modal-styles">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal-container {
  background: var(--wb);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-lg);
  border: 1px solid var(--bdr);
  overflow: hidden;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.modal-container.small {
  max-width: 400px;
}

.modal-container.large {
  max-width: 700px;
}

.modal-container.full {
  max-width: 90%;
  height: 90%;
}

.modal-header {
  padding: 15px 20px;
  border-bottom: 1px solid var(--bdr);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-header h3 {
  margin: 0;
  font-size: var(--fz_l1);
  color: var(--txh);
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--tx);
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--mco);
}

.modal-content {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
  color: var(--tx);
}

.modal-footer {
  padding: 15px 20px;
  border-top: 1px solid var(--bdr);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

@media (max-width: 768px) {
  .modal-container {
      width: 95%;
  }
}
</style>
`);
}
}cargarModal();

// ==============================
// SISTEMA IP ULTRA COMPACTO - 24H CACHÉ
// ==============================
export const wiip = (geo) => {
  const cached = getls('wiip');
  if (cached) return typeof geo === 'function' ? geo(cached) : geo === 'miciudad' ? `${cached.region}, ${cached.country}` : cached[geo];
  
  return $.getJSON(`https://ipinfo.io/json?token=3868948e170a74`, data => {
    const ua = navigator.userAgent;
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const [lat, lng] = (data.loc || '0,0').split(',').map(Number);
    
    const ipData = {
      // 🌍 GEOLOCALIZACIÓN (de la API)
      ip: data.ip,
      city: data.city,
      region: data.region, 
      country: data.country,
      postal: data.postal,
      lat, lng,
      
      // 💻 DISPOSITIVO Y NAVEGADOR
      browser: /Edg/i.test(ua) ? "Edge" : /Chrome/i.test(ua) ? "Chrome" : /Firefox/i.test(ua) ? "Firefox" : /Safari/i.test(ua) && !/Chrome/i.test(ua) ? "Safari" : /Opera|OPR/i.test(ua) ? "Opera" : "Otro",
      os: /Windows/i.test(ua) ? "Windows" : /Android/i.test(ua) ? "Android" : /iPhone|iPad/i.test(ua) ? "iOS" : /Mac/i.test(ua) ? "macOS" : /Linux/i.test(ua) ? "Linux" : "Otro",
      device: /Mobile|Android|iPhone|iPad/i.test(ua) ? "Móvil" : /Tablet|iPad/i.test(ua) ? "Tablet" : "Escritorio",
      platform: navigator.platform,
      
      // 📱 PANTALLA Y RESOLUCIÓN
      screen: `${screen.width}×${screen.height}`,
      viewport: `${outerWidth}×${outerHeight}`,
      resolution: `${screen.width}×${screen.height}`,
      
      // 🌐 IDIOMA Y CONFIGURACIÓN
      language: navigator.language,
      languages: navigator.languages?.join(', ') || navigator.language,
      charset: document.characterSet,
      
      // ⏰ TIEMPO Y ZONA
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      localTime: new Date().toLocaleString('es-ES'),
      utcOffset: new Date().getTimezoneOffset() / -60,
      isDST: new Date().getTimezoneOffset() < new Date(new Date().getFullYear(), 0, 1).getTimezoneOffset(),
      
      // 🔧 CARACTERÍSTICAS TÉCNICAS
      cookieEnabled: navigator.cookieEnabled,
      javaEnabled: navigator.javaEnabled?.() || false,
      onLine: navigator.onLine,
      userAgent: ua
    };
    
    savels('wiip', ipData, 24); // 🔥 Caché 24 horas
    return typeof geo === 'function' ? geo(ipData) : geo === 'miciudad' ? `${ipData.city}, ${ipData.country}` : ipData[geo];
  }).fail(() => {
    const cached = getls('wiip');
    if (cached && typeof geo === 'function') geo(cached);
    return cached?.[geo] || null;
  });
};

// ...existing code...

// ==============================
// CALENDARIO ULTRA COMPACTO CON FULLCALENDAR
// ==============================
export const calendario = (tipo = 'default', selector = '.calendarioMain') => {
  let calendar;
  
  const opciones = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: 'es',
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek',
      center: 'title',
      right: 'today prev,next'
    },
    buttonText: { today: 'Hoy', month: 'Mes', week: 'Semana' },
    height: 'auto',
    aspectRatio: 1.5,
    
    // 📝 MODO INTERACTIVO
    ...(tipo === 'interactivo' && {
      editable: true,
      selectable: true,
      events: getls('cal-eventos') || [],
      
      select: (info) => {
        const titulo = prompt('Título del evento:');
        if (titulo) {
          const evento = {
            id: Date.now(),
            title: titulo,
            start: info.start,
            end: info.end,
            allDay: info.allDay
          };
          calendar.addEvent(evento);
          guardarEventos();
        }
        calendar.unselect();
      },
      
      eventClick: (info) => {
        if (confirm(`¿Eliminar "${info.event.title}"?`)) {
          info.event.remove();
          guardarEventos();
        }
      },
      
      eventDrop: guardarEventos,
      eventResize: guardarEventos
    })
  };
  
  // 🚀 INICIALIZAR
  calendar = new Calendar($(selector)[0], opciones);
  calendar.render();
  
  // 💾 GUARDAR EVENTOS
  const guardarEventos = () => {
    const eventos = calendar.getEvents().map(e => ({
      id: e.id,
      title: e.title,
      start: e.start,
      end: e.end,
      allDay: e.allDay
    }));
    savels('cal-eventos', eventos, 8760); // 1 año
  };
  
  // 📊 API SIMPLE
  return {
    obtener: () => calendar,
    agregar: (evento) => { calendar.addEvent(evento); guardarEventos(); },
    ir: (fecha) => calendar.gotoDate(fecha),
    vista: (vista) => calendar.changeView(vista)
  };
};


// ==============================
// FUNCIÓN TIEMPO UNIVERSAL - SÚPER VERSÁTIL
// ==============================
const CONFIG = {
  paisesSur: ['PE','AR','CL','UY','PY','BO','EC','CO','VE','GY','SR','BR','AU','NZ','ZA'],
  estaciones: {n:['Invierno','Primavera','Verano','Otoño'], s:['Verano','Otoño','Invierno','Primavera']},
  fases: ['Luna nueva','Luna creciente','Cuarto creciente','Luna gibosa creciente','Luna llena','Luna gibosa menguante','Cuarto menguante','Luna menguante'],
  unidades: {años:'año|años', meses:'mes|meses', semanas:'semana|semanas', días:'día|días', horas:'hora|horas', minutos:'minuto|minutos', segundos:'segundo|segundos'}
};

// ...existing code...

export const Tiempo = (param = new Date()) => {
  const calcDatos = f => {
    const d = new Date(f), [año,mes,dia] = [d.getFullYear(),d.getMonth(),d.getDate()];
    const diaAño = Math.ceil((d - new Date(año,0,1))/86400000), diasAño = new Date(año,1,29).getDate()===29?366:365;
    const ip = getls('wiip'), esSur = ip && (CONFIG.paisesSur.includes(ip.country) || ip.lat<0);
    return {
      fecha:d, año, mes, dia, hora:d.getHours(), minuto:d.getMinutes(), segundo:d.getSeconds(),
      mesReal:mes+1, diaDelAño:diaAño, diasEnAño:diasAño, diasEnMes:new Date(año,mes+1,0).getDate(),
      semana:Math.ceil(diaAño/7), trimestre:Math.ceil((mes+1)/3), bisiesto:año%4===0&&(año%100!==0||año%400===0),
      faseLunar:CONFIG.fases[Math.floor(((d-new Date(2000,0,6))/86400000)%29.53/3.69)],
      estacion:(esSur?CONFIG.estaciones.s:CONFIG.estaciones.n)[Math.floor(((mes*30.44)+dia%365)/91.25)]
    };
  };

  const calcDif = (f1,f2,fmt='años meses días') => {
    const [d1,d2] = [new Date(f1),new Date(f2)], [desde,hasta] = d2>d1?[d1,d2]:[d2,d1];
    let años = hasta.getFullYear()-desde.getFullYear(), meses = hasta.getMonth()-desde.getMonth(), días = hasta.getDate()-desde.getDate();
    if(días<0) meses--, días += new Date(hasta.getFullYear(),hasta.getMonth(),0).getDate();
    if(meses<0) años--, meses += 12;
    const totalDias = Math.floor((hasta-desde)/86400000), datos = {
      años, meses, semanas:Math.floor(totalDias/7), días, 
      horas:Math.floor((hasta-desde)/3600000), minutos:Math.floor((hasta-desde)/60000), segundos:Math.floor((hasta-desde)/1000)
    };
    if(fmt==='completo') return datos;
    const unids = fmt.includes(',')?fmt.split(',').map(u=>u.trim()):fmt.split(' ');
    const partes = unids.map(u => {
      const val = datos[u.toLowerCase()];
      if(val>0) {
        const [sing,plur] = CONFIG.unidades[u.toLowerCase()]?.split('|')||[u,u+'s'];
        return `${val} ${val===1?sing:plur}`;
      }
    }).filter(Boolean);
    return partes.length ? partes.join(' con ') : 'Mismo momento';
  };

  const crearObjeto = (fecha) => {
    const dt = calcDatos(fecha), d = dt.fecha;
    return {
      ...dt, iso:d.toISOString().split('T')[0], isoCompleto:d.toISOString(), local:d.toLocaleString('es-ES'),
      utc:d.toISOString().replace('T',' ').slice(0,19), timestamp:Math.floor(d.getTime()/1000), milisegundos:d.getTime(),
      timezone:Intl.DateTimeFormat().resolvedOptions().timeZone, offsetUTC:d.getTimezoneOffset()/-60,
      gmt:`GMT${d.getTimezoneOffset()<=0?'+':'-'}${Math.abs(Math.floor(d.getTimezoneOffset()/60)).toString().padStart(2,'0')}:${Math.abs(d.getTimezoneOffset()%60).toString().padStart(2,'0')}`,
      duracionDia:`${12+Math.floor(Math.sin((dt.diaDelAño-80)*Math.PI/182.5)*2)}h ${32+Math.floor(Math.cos((dt.diaDelAño-80)*Math.PI/182.5)*28)}m`,
      fechaCompleta:d.toLocaleDateString('es-ES',{weekday:'long',year:'numeric',month:'long',day:'numeric'}),
      horaCompleta:d.toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit',second:'2-digit'}),
      fechaCorta:d.toLocaleDateString('es-ES'), horaCorta:d.toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'}),
      diaAño:`${dt.diaDelAño}/${dt.diasEnAño}`,
      diferencia:(f,fmt='años meses días')=>calcDif(d,f,fmt), edad:f=>calcDif(f,d,'años'),
      esHoy:()=>d.toDateString()===new Date().toDateString(), esAyer:()=>d.toDateString()===new Date(Date.now()-86400000).toDateString(),
      esMañana:()=>d.toDateString()===new Date(Date.now()+86400000).toDateString(), esIgual:f=>d.getTime()===new Date(f).getTime(),
      esMayorIgual:f=>d.getTime()>=new Date(f).getTime(), esMenorIgual:f=>d.getTime()<=new Date(f).getTime(),
      formato:fmt=>new Map([['dd/mm/yyyy',`${dt.dia.toString().padStart(2,'0')}/${dt.mesReal.toString().padStart(2,'0')}/${dt.año}`],
      ['mm/dd/yyyy',`${dt.mesReal.toString().padStart(2,'0')}/${dt.dia.toString().padStart(2,'0')}/${dt.año}`],
      ['yyyy-mm-dd',`${dt.año}-${dt.mesReal.toString().padStart(2,'0')}-${dt.dia.toString().padStart(2,'0')}`],
      ['texto',d.toLocaleDateString('es-ES',{weekday:'long',year:'numeric',month:'long',day:'numeric'})]]).get(fmt)||d.toLocaleDateString('es-ES')
    };
  };

  const esValida = str => !isNaN(new Date(str).getTime()) && str.includes('-');

  // 🚀 MODO STRING - ARREGLAR LÓGICA
  if(typeof param === 'string') {
    // Si es una fecha válida, devolver objeto completo con funciones
    if(esValida(param)) return crearObjeto(param);
    
    // Si es una propiedad, devolver solo el valor
    const dt = calcDatos(new Date()), d = dt.fecha, ip = getls('wiip');
    const acc = {
      ...Object.fromEntries(['hora','minuto','segundo','dia','año','diaDelAño','diasEnAño','diasEnMes','semana','trimestre','bisiesto'].map(k=>[k,dt[k]])),
      mes:dt.mesReal, year:dt.año, luna:dt.faseLunar, estacion:dt.estacion, faseLunar:dt.faseLunar,
      iso:d.toISOString().split('T')[0], local:d.toLocaleString('es-ES'), utc:d.toISOString().replace('T',' ').slice(0,19),
      timestamp:Math.floor(d.getTime()/1000), milisegundos:d.getTime(), timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,
      gmt:`GMT${d.getTimezoneOffset()<=0?'+':'-'}${Math.abs(Math.floor(d.getTimezoneOffset()/60)).toString().padStart(2,'0')}:${Math.abs(d.getTimezoneOffset()%60).toString().padStart(2,'0')}`,
      duracionDia:`${12+Math.floor(Math.sin((dt.diaDelAño-80)*Math.PI/182.5)*2)}h ${32+Math.floor(Math.cos((dt.diaDelAño-80)*Math.PI/182.5)*28)}m`,
      diaAño:`${dt.diaDelAño}/${dt.diasEnAño}`, fechaCompleta:d.toLocaleDateString('es-ES',{weekday:'long',year:'numeric',month:'long',day:'numeric'}),
      horaCompleta:d.toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit',second:'2-digit'}),
      fechaCorta:d.toLocaleDateString('es-ES'), horaCorta:d.toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'}),
      pais:()=>ip?.country||'XX', ciudad:()=>ip?.city||'Desconocida', hemisferio:()=>(ip&&(CONFIG.paisesSur.includes(ip.country)||ip.lat<0))?'Sur':'Norte'
    };
    return acc[param]??null;
  }

  // 🚀 MODO OBJETO - DEVOLVER OBJETO COMPLETO
  return crearObjeto(param);
};

  
// ==============================
// FECHA EN LETRAS - ULTRA COMPACTO (5 LÍNEAS)
// ==============================
export const fechaLetra = (fecha, formato) => {
  if (formato === 'letras' && fecha) {
    const d = new Date(fecha);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
  }
  if (!fecha) return 'Ahora';
  const dif = Math.abs(new Date() - new Date(fecha)), unidades = [[31536000000, 'año'], [2629746000, 'mes'], [604800000, 'sem'], [86400000, 'día'], [3600000, 'h'], [60000, 'min']];
  for (const [ms, unit] of unidades) { const cant = Math.floor(dif / ms); if (cant > 0) return new Date(fecha) < new Date() ? `Hace ${cant}${unit}` : `En ${cant}${unit}`; }
  return 'Ahora mismo';
};