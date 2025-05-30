import $ from 'jquery'; 

// UPDATE CLASSES 
export const adrm = (a, b) => {
    $(a).addClass(b).siblings().removeClass(b);
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

// RIGHT NOTIFICATIONS WITH X 
export function Notificacion(mensaje, tipo = 'error') {
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

    const $n = $(`
        <div class="notification" style="
            background: #fff;
            border-left: 4px solid ${colores[tipo]};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            border-radius: 8px;
        ">
            <div class="notification-content">
                <i class="fas ${iconos[tipo]}"></i>
                <span>${mensaje}</span>
            </div>
            <button class="notification-close">&times;</button>
        </div>
    `);

    $('#notificationsContainer').append($n);
    
    // Add showing animation
    setTimeout(() => $n.addClass('show'), 10);

    // Close button
    $n.find('.notification-close').on('click', () => {
        $n.removeClass('show');
        setTimeout(() => $n.remove(), 300);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        $n.removeClass('show');
        setTimeout(() => $n.remove(), 300);
    }, 5000);
}

// CENTER PERSONALIZED MESSAGE 
export const Mensaje = (mensaje, tipo = 'error') => {
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

// LOCAL STORAGE FOR SAVING 

// Save a value in localStorage with expiration (in hours)
export function savels(key, value, hours) {
  localStorage.setItem(
    key,
    JSON.stringify({
      value: value,
      expiry: Date.now() + hours * 3600000,
    })
  );
}

// Get a valid value from localStorage
export function getls(key) {
  const item = JSON.parse(localStorage.getItem(key));
  if (!item || Date.now() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

// Remove a key from localStorage
export function removels(key) {
  localStorage.removeItem(key);
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

// Primer letra mayusculas
export const Capi = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}; 

// FECHA LOCAL CON ZONA HORARIA ACTUALIZADO 
export const fechaLocal = (fecha) => {
  const [año, mes, dia] = fecha.split('-').map(Number);
  return new Date(año, mes - 1, dia); // mes - 1 porque JavaScript cuenta desde 0
};

export const showLoading = (show) => {
  $('#loading-style').length || $('head').append('<style id="loading-style">.loading{height:1vh;background:linear-gradient(to right,#fdd835,#43a047,#fdd835);background-size:200% 100%;animation:l 1.5s infinite;border-radius:3px;width:100%;position:fixed;top:0;left:0;z-index:9999}@keyframes l{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}</style>');
  $('.loading').length || $('body').append('<div class="loading" style="display:none"></div>');
  $('.loading').toggle(!!show);
};

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

export const wiTema = (() => {
  const setTema = el => {
    const [tema, color] = $(el).data('tema').split('|');
    $('html').attr('data-theme', tema);
    $('meta[name="theme-color"]').length ? $('meta[name="theme-color"]').attr('content', color) : $('<meta>').attr({name:'theme-color',content:color}).appendTo('head');
    savels('witema', $(el).data('tema'), 720); $('.mtha').removeClass('mtha'); $(el).addClass('mtha');
  };
  const wihoo = getls('witema') ? $(`[data-tema="${getls('witema')}"]`)[0] : $('.mtha')[0] || $('[data-tema]').first()[0]; wihoo && setTema(wihoo);
  $('[data-tema]').click(e => setTema(e.currentTarget));
  return { setTema };
})();
