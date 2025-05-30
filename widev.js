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
.modal-content{background-color:#fff;border-radius:var(--border-radius);box-shadow:var(--shadow);width:90%;max-width:600px;max-height:90vh;overflow-y:auto;animation:slideInModal 0.3s ease;}
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
