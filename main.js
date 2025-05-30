// Core y utilidades
import $ from 'jquery'; // Para manipulación del DOM y AJAX de forma simple y compatible
import '@fortawesome/fontawesome-free/css/all.min.css'; // Iconos de Font Awesome
import * as topojson from "topojson-client"; //Para ubicaciones

// Gestión de fechas y tiempos
import moment from 'moment'; // Biblioteca versátil para manipulación de fechas
import 'moment/locale/es'; // Localización en español para moment
import SunCalc from 'suncalc'; // Para cálculos astronómicos (amanecer, atardecer, posiciones solares)
import { LunarPhase, Moon } from "lunarphase-js";

// Funciones específicas de date-fns
import { 
  format, // Formateo de fechas con patrones
  differenceInDays, // Calcular diferencia en días entre fechas
  addDays, // Añadir días a una fecha
  getDay, // Obtener día de la semana (0-6)
  differenceInHours, // Calcular diferencia en horas
  differenceInMinutes, // Calcular diferencia en minutos
  parseISO, // Convertir string ISO a objeto Date
  isValid // Verificar si una fecha es válida
} from 'date-fns';
import { es } from 'date-fns/locale'; // Localización española para date-fns

// Visualización y gráficos
import Chart from 'chart.js/auto'; // Para crear gráficos y visualizaciones de datos
import L from 'leaflet'; // Para mapas interactivos 2D
import 'leaflet/dist/leaflet.css'; // Estilos necesarios para Leaflet

import Globe from 'globe.gl'; // Para visualizaciones de globo terráqueo interactivo 3D
import { Calendar } from '@fullcalendar/core'; // Calendario interactivo avanzado
import dayGridPlugin from '@fullcalendar/daygrid'; // Plugin de vista mensual para FullCalendar
import timeGridPlugin from '@fullcalendar/timegrid'; // Plugin de vista semanal/diaria para FullCalendar
import interactionPlugin from '@fullcalendar/interaction'; // Plugin para eventos y arrastrar-soltar
import * as d3 from 'd3-geo'; // Para proyecciones geográficas y cálculos geoespaciales
import Swiper from 'swiper'; // Para crear carruseles y sliders touch
import 'swiper/css';// Para crear carruseles y sliders touch

// Utilidades personalizadas (widev.js)
import { 
  adrm, flagUrl, hasFlag, // Función para añadir/remover elementos del DOM
  Saludar, // Función para mostrar saludos/mensajes
  Notificacion, // Sistema de notificaciones
  Mensaje, // Sistema de mensajes
  savels, getls, removels, // Funciones para localStorage
  gosave, getsave, gosaves, getsaves, // Funciones avanzadas de almacenamiento
  initModalSystem, openModal // Sistema de ventanas modales
} from './widev.js';

 // FIREBASE INTEGRATION - Agregar después de los imports existentes
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, query, where, orderBy, limit } from "firebase/firestore"; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './firebase/init.js';

// $(document).click(async function(){
//   console.log('Generando consulta, espere... ');
//   try {
//     const docRef = doc(db, 'smiles', 'wilder');
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const data = docSnap.data();
//       console.log('📧 Mensaje desde base de datos:', data.text);

//     }else{console.log('Error en consulta, revisa el nombre')}
//   }catch(e){console.error(e)}
// });

// PROYECTO ACTUALIZADO 
$(document).ready(function() {
    // Variables globales
    window.WiTime = window.WiTime || {};
    const WT = window.WiTime;
    
    WT.activeSection = 'dashboard';
    WT.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    WT.days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    
    // Fecha y hora actual UTC
    WT.CURRENT_UTC_DATETIME = '2025-05-20 17:49:43';
    WT.userLocation = { city: "Cargando...", country: "Cargando...", timezone: "UTC" };
    WT.USERNAME = "wtaype";

    // Variables de notas
    WT.activeNoteId = 'note1';
    WT.notes = {
        'note1': {
            title: 'Reunión de proyecto',
            content: `<p>Puntos a tratar en la reunión del lunes:</p>
<ul>
    <li>Revisión de avances del proyecto</li>
    <li>Planificación para la siguiente fase</li>
    <li>Distribución de tareas</li>
    <li>Discusión sobre el presupuesto</li>
</ul>
<p>Recordar llevar la documentación actualizada y las estadísticas del mes anterior.</p>
<p>La reunión está programada para las <b>10:30</b> en la sala de conferencias.</p>`,
            date: '20 de mayo, 2025'
        },
        'note2': {
            title: 'Lista de tareas',
            content: `<p>1. Revisar documentación</p>
<p>2. Contactar al cliente para la reunión de seguimiento</p>
<p>3. Terminar el informe de progreso</p>
<p>4. Preparar la presentación para el jueves</p>
<p>5. Actualizar el cronograma del proyecto</p>`,
            date: '19 de mayo, 2025'
        },
        'note3': {
            title: 'Ideas para vacaciones',
            content: `<h2>Posibles destinos:</h2>
<ul>
    <li>Barcelona
        <ul>
            <li>Sagrada Familia</li>
            <li>Parque Güell</li>
            <li>Barrio Gótico</li>
        </ul>
    </li>
    <li>Tokyo
        <ul>
            <li>Shibuya</li>
            <li>Templo Senso-ji</li>
            <li>Tokyo Skytree</li>
        </ul>
    </li>
    <li>Nueva York
        <ul>
            <li>Central Park</li>
            <li>Times Square</li>
            <li>Empire State</li>
        </ul>
    </li>
</ul>
<p>Mejor época para viajar: <b>Septiembre-Octubre</b></p>`,
            date: '15 de mayo, 2025'
        }
    };
    
    // Variables para el Notepad rápido
    WT.quickNotes = [
        {
            text: "Reunión con el equipo a las 16:30 - No olvidar revisar el reporte mensual.",
            date: "Hoy - 15:45"
        },
        {
            text: "Llamar al proveedor para confirmar entrega del viernes.",
            date: "Ayer - 17:20"
        }
    ];
    
    // Inicialización
    initApp();
    
    // Función para inicializar la aplicación
    function initApp() {
        setupClock();
        updateActiveSection(getInitialSection());
        handleNavigation();
        initLocationData();
        initParallaxEffect();
        updateUserInfo();
        initUIInteractions();
        initThemes();
        preloadData();
        
        // Actualizar información avanzada del tiempo
        updateAdvancedTimeInfo();
        
        // Crear secciones con enlaces basados en ID
        updateSectionLinks();
    }
    
    // Inicialización de temas personalizados
    function initThemes() {
        // Crear selector de temas
        const mthemas = [
            {tnm:"Cielo", co:"#0EBEFF"},
            {tnm:"Dulce", co:"#FF5C69"},
            {tnm:"Paz", co:"#29C72E"},
            {tnm:"Mora", co:"#7000FF"},
            {tnm:"Futuro", co:"#21273B"}
        ];
        
        // Crear contenedor de temas
        const thcon = document.createElement('div');
        thcon.className = 'mthemes';
        
        // Crear los botones de temas
        mthemas.forEach(({tnm, co}) => {
            const tdv = document.createElement('div');
            tdv.className = 'tema';
            tdv.dataset.tema = `${tnm}|${co}`;
            tdv.style.background = co;
            tdv.onclick = () => mithm(tdv);
            thcon.appendChild(tdv);
        });
        
        document.body.appendChild(thcon);
        
        // Función para cambiar de tema
        window.mithm = function(e) {
            const [th, tco] = e.dataset.tema.split('|');
            document.documentElement.dataset.theme = th;
            
            // Actualizar color de tema en meta tag
            let metaTheme = document.querySelector('meta[name="theme-color"]');
            if (!metaTheme) {
                metaTheme = document.createElement('meta');
                metaTheme.name = 'theme-color';
                document.head.appendChild(metaTheme);
            }
            metaTheme.content = tco;
            
            // Guardar en localStorage
            localStorage.mtheme = e.dataset.tema;
            
            // Actualizar clase activa
            const activeTheme = document.querySelector('.mtha');
            if (activeTheme) activeTheme.classList.remove('mtha');
            e.classList.add('mtha');
            
            // Mostrar notificación
            Mensaje(`Tema ${th} activado`, 'success');
        };
        
        // Restaurar tema guardado o usar el predeterminado
        const thsved = document.querySelector(`[data-tema="${localStorage.mtheme}"]`) || thcon.firstChild;
        if (thsved) window.mithm(thsved);
    }
    
    // Obtener sección inicial desde el hash URL
    function getInitialSection() {
        const hash = window.location.hash.substr(1);
        if (hash && $(`#${hash}`).length > 0) {
            return hash;
        }
        return 'dashboard';
    }
    
    // Actualizar enlaces de sección basados en ID
    function updateSectionLinks() {
        $('.nav-links li').each(function() {
            const section = $(this).data('section');
            $(this).attr('data-href', `#${section}`);
        });
        
        // Manejar cambios de hash en URL
        $(window).on('hashchange', function() {
            const hash = window.location.hash.substr(1);
            if (hash && $(`#${hash}`).length > 0) {
                updateActiveSection(hash);
            }
        });
    }
    
    // Inicializar interacciones de UI
    function initUIInteractions() {
        // Toggle del menú en móvil
        $('.menu-toggle').on('click', function() {
            $('.sidebar').toggleClass('active');
        });
        
        // Tab buttons
        $('.tab-button').on('click', function() {
            $('.tab-button').removeClass('active');
            $(this).addClass('active');
        });
        
        // Botón de actualizar
        $('.refresh-btn').on('click', function() {
            $(this).addClass('loading');
            
            // Simular carga
            setTimeout(() => {
                $(this).removeClass('loading');
                updateClock(true);
                updateAdvancedTimeInfo();
                showToast('Datos actualizados correctamente', 'success');
            }, 1200);
        });
        
        // Activar tooltips
        initTooltips();
        
        // Cerrar sidebar al hacer click fuera en móvil
        $(document).on('click', function(e) {
            if ($(window).width() < 992) {
                if (!$(e.target).closest('.sidebar').length && 
                    !$(e.target).closest('.menu-toggle').length && 
                    $('.sidebar').hasClass('active')) {
                    $('.sidebar').removeClass('active');
                }
            }
        });
        
        // Focus en la barra de búsqueda con shortcut
        $(document).on('keydown', function(e) {
            // Ctrl/Cmd + K
            if ((e.ctrlKey || e.metaKey) && e.which === 75) {
                e.preventDefault();
                $('.search-container input').focus();
            }
            
            // Ctrl/Cmd + S para guardar nota (en la sección de notepad)
            if ((e.ctrlKey || e.metaKey) && e.which === 83 && WT.activeSection === 'notepad') {
                e.preventDefault();
                saveCurrentNote();
                showToast('Nota guardada correctamente', 'success');
            }
        });
        
        // Doble click en logo para colapsar/expandir sidebar
        $('#logo').on('dblclick', function() {
            $('.sidebar').toggleClass('collapsed');
            
            // Guardar preferencia
            const isCollapsed = $('.sidebar').hasClass('collapsed');
            localStorage.setItem('sidebarCollapsed', isCollapsed);
            
            // Mostrar notificación
            showToast(isCollapsed ? 'Menú compactado' : 'Menú expandido', 'info');
        });
        
        // Click simple en logo para ir al dashboard
        $('#logo').on('click', function(e) {
            // Verificar que no sea parte de un doble click
            const clickDelay = 300; 
            if (!$(this).data('doubleClicked')) {
                $(this).data('doubleClicked', true);
                
                setTimeout(() => {
                    if ($(this).data('doubleClicked')) {
                        $(this).data('doubleClicked', false);
                        
                        // Ir al dashboard solo si fue un click simple
                        if (WT.activeSection !== 'dashboard') {
                            updateActiveSection('dashboard');
                            updatePageTitle('dashboard');
                            window.location.hash = 'dashboard';
                        }
                    }
                }, clickDelay);
            }
        });
        
        // Restaurar el estado del sidebar al cargar
        if (localStorage.getItem('sidebarCollapsed') === 'true') {
            $('.sidebar').addClass('collapsed');
        }
    }
    
    // Precarga de datos
    function preloadData() {
        // Configurar fecha actual para calculadoras
        const now = new Date();
        const formattedDate = now.toISOString().substring(0, 10);  // YYYY-MM-DD
        
        // Precargar todas las calculadoras con la fecha actual
        $('input[name="end-date"]').val(formattedDate);
        
        // Configurar fecha de inicio por defecto (1 año antes)
        const lastYear = new Date();
        lastYear.setFullYear(lastYear.getFullYear() - 1);
        const formattedLastYear = lastYear.toISOString().substring(0, 10);
        
        $('input[name="start-date"]').val(formattedLastYear);
        
        // Inicializar calculadoras con valores predeterminados
        setTimeout(initializeCalculators, 500);
    }
    
    // Inicializar calculadoras con valores predeterminados
    function initializeCalculators() {
        $('.calc-button').each(function() {
            const calcType = $(this).data('calc');
            if (calcType) {
                performCalculation(calcType, $(this));
            }
        });
    }
    
    // Actualizar información del usuario
    function updateUserInfo() {
        $('.user-name').text(WT.USERNAME);
        $('.user-avatar span').text(WT.USERNAME.substring(0, 2).toUpperCase());
    }
    
    // Configuración inicial del reloj
    function setupClock() {
        // Crear marcas del reloj
        createClockMarkings();
        
        // Inicializar con la hora actual
        updateClock();
        
        // Actualizar cada segundo
        setInterval(updateClock, 1000);
    }
    
    // Crear marcas del reloj
    function createClockMarkings() {
        const clockMarkings = $('.clock-markings');
        
        // Crear las marcas de horas
        for (let i = 1; i <= 12; i++) {
            const angle = i * 30; // 360 / 12 = 30 grados por hora
            const marker = $('<div class="hour-marker"></div>');
            marker.css({
                'position': 'absolute',
                'width': '4px',
                'height': '15px',
                'background': 'currentColor',
                'border-radius': '2px',
                'transform': `rotate(${angle}deg)`,
                'transform-origin': 'center 140px', // Ajustado para posicionar correctamente
                'left': 'calc(50% - 2px)',
                'top': '0'
            });
            clockMarkings.append(marker);
            
            // Añadir número de hora
            const hourNumber = $('<div class="hour-number"></div>');
            const numberAngle = i * 30; // 360 / 12 = 30 grados por hora
            const numberRadius = 113; // Distancia desde el centro
            const x = Math.sin(numberAngle * Math.PI / 180) * numberRadius;
            const y = -Math.cos(numberAngle * Math.PI / 180) * numberRadius;
            
            hourNumber.text(i);
            hourNumber.css({
                'position': 'absolute',
                'font-size': '14px',
                'font-weight': '600',
                'transform': 'translate(-50%, -50%)',
                'left': `calc(50% + ${x}px)`,
                'top': `calc(50% + ${y}px)`,
                'color': 'currentColor'
            });
            
            clockMarkings.append(hourNumber);
        }
        
        // Crear las marcas de minutos
        for (let i = 1; i <= 60; i++) {
            if (i % 5 !== 0) { // Excluimos las posiciones donde ya hay marcas de hora
                const angle = i * 6; // 360 / 60 = 6 grados por minuto
                const marker = $('<div class="minute-marker"></div>');
                marker.css({
                    'position': 'absolute',
                    'width': '2px',
                    'height': '8px',
                    'background': 'rgba(var(--tx-rgb, 0, 0, 0), 0.5)',
                    'border-radius': '1px',
                    'transform': `rotate(${angle}deg)`,
                    'transform-origin': 'center 140px', // Ajustado para posicionar correctamente
                    'left': 'calc(50% - 1px)',
                    'top': '0'
                });
                clockMarkings.append(marker);
            }
        }
    }
    
    // Actualizar el reloj
    function updateClock(forceUpdate = false) {
        // Usar la hora local del cliente para una experiencia más realista
        const now = new Date();
        
        // Obtener componentes de la fecha local
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const day = WT.days[now.getDay()];
        const date = now.getDate();
        const month = WT.months[now.getMonth()];
        const year = now.getFullYear();
        
        // Actualizar la hora digital
        $('.digital-time').text(`${hours}:${minutes}`).addClass('time-update');
        $('.digital-seconds').text(seconds);
        $('.date-display').text(`${day}, ${date} de ${month} de ${year}`);
        
        // Quitar la clase después de la animación
        setTimeout(() => {
            $('.digital-time').removeClass('time-update');
        }, 500);
        
        // Actualizar el reloj analógico
        const secondDegrees = (now.getSeconds() / 60) * 360;
        const minuteDegrees = ((now.getMinutes() + now.getSeconds() / 60) / 60) * 360;
        const hourDegrees = ((now.getHours() % 12 + now.getMinutes() / 60) / 12) * 360;
        
        // Aplicar las rotaciones a las manecillas
        $('.second-hand').css('transform', `translateX(-50%) rotate(${secondDegrees}deg)`);
        $('.minute-hand').css('transform', `translateX(-50%) rotate(${minuteDegrees}deg)`);
        $('.hour-hand').css('transform', `translateX(-50%) rotate(${hourDegrees}deg)`);
        
        // Obtener fecha y hora UTC (para mostrar en el panel de información)
        const utcDate = new Date(WT.CURRENT_UTC_DATETIME);
        
        // Añadir segundos para simular el paso del tiempo desde la carga
        if (!forceUpdate) {
            const secondsSinceLoad = Math.floor((now - window.performance.timing.navigationStart) / 1000);
            utcDate.setSeconds(utcDate.getSeconds() + secondsSinceLoad);
        }
        
        // Actualizar UTC actual
        $('#utc-time').text(formatUTCDateTime(utcDate));
        
        // Actualizar horarios de ciudades
        updateWorldTimes(utcDate);
    }
    
    // Actualizar horarios mundiales
    function updateWorldTimes(utcDate) {
        // Definir zonas horarias
        const timeZones = [
            { city: "Madrid", offset: 2, day: "Martes" },
            { city: "Lima", offset: -5, day: "Martes" },
            { city: "Tokyo", offset: 9, day: "Miércoles" },
            { city: "New York", offset: -4, day: "Martes" }
        ];
        
        // Actualizar cada elemento de zona horaria
        $('.world-time-item').each(function(index) {
            if (index < timeZones.length) {
                const tz = timeZones[index];
                const localTime = new Date(utcDate);
                localTime.setHours(localTime.getHours() + tz.offset);
                
                const hours = String(localTime.getHours()).padStart(2, '0');
                const minutes = String(localTime.getMinutes()).padStart(2, '0');
                
                $(this).find('.time-value').text(`${hours}:${minutes}`);
                $(this).find('.time-offset').text(`UTC${tz.offset >= 0 ? '+' : ''}${tz.offset}:00`);
            }
        });
        
        // También actualizar las zonas horarias en la sección de globo
        $('.timezone-item').each(function(index) {
            if (index < timeZones.length - 1) { // -1 porque hay un botón de añadir
                const tz = timeZones[index];
                const localTime = new Date(utcDate);
                localTime.setHours(localTime.getHours() + tz.offset);
                
                const hours = String(localTime.getHours()).padStart(2, '0');
                const minutes = String(localTime.getMinutes()).padStart(2, '0');
                
                $(this).find('.timezone-time').text(`${hours}:${minutes}`);
            }
        });
    }
    
    // Formatear fecha y hora UTC
    function formatUTCDateTime(date) {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    }
    
    // Inicializar datos de ubicación (usando ipinfo.io)
    function initLocationData() {
        // Simular carga de datos desde ipinfo.io con la fecha actual
        $('.location-text, .timezone-text').html('<span class="loading-spinner"></span>');
        
        setTimeout(() => {
            // Simulación de respuesta
            WT.userLocation = {
                city: "Lima",
                country: "PE",
                timezone: "America/Lima",
                loc: "-12.0464,-77.0428", // Coordenadas de Lima
                region: "Lima"
            };
            updateLocationInfo();
        }, 1500);
    }
    
    // Actualizar información de ubicación
    function updateLocationInfo() {
        // Actualizar texto de ubicación
        $('.location-text').text(`${WT.userLocation.city}, ${WT.userLocation.country}`);
        
        // Actualizar zona horaria
        const timezoneOffset = getTimezoneOffset(WT.userLocation.timezone);
        $('.timezone-text').text(timezoneOffset);
        
        // Animar la actualización
        $('.location-info, .timezone').css('opacity', '0');
        setTimeout(() => {
            $('.location-info, .timezone').css({
                'opacity': '1',
                'transform': 'translateX(0)',
                'transition': 'all 0.5s ease'
            });
        }, 100);
        
        // Resaltar la zona horaria actual en la lista mundial
        highlightCurrentTimezone();
    }
    
    // Resaltar zona horaria actual
    function highlightCurrentTimezone() {
        const currentCity = WT.userLocation.city;
        
        $('.world-time-item').removeClass('active');
        $('.world-time-item').each(function() {
            const cityText = $(this).find('.time-city').text();
            if (cityText === currentCity) {
                $(this).addClass('active');
            }
        });
    }
    
    // Obtener offset de zona horaria
    function getTimezoneOffset(timezone) {
        // En una implementación real, esto se calcularía de forma precisa
        // Aquí usamos un mapeo simple para simular
        const timezoneMap = {
            'America/Lima': 'UTC-05:00',
            'Europe/Madrid': 'UTC+02:00',
            'America/New_York': 'UTC-04:00',
            'Asia/Tokyo': 'UTC+09:00'
        };
        
        return timezoneMap[timezone] || 'UTC';
    }
    
    // Navegación entre secciones
    function handleNavigation() {
        // Navegación desde el sidebar
        $('.nav-links li').on('click', function() {
            const section = $(this).data('section');
            updateActiveSection(section);
            updatePageTitle(section);
            
            // Actualizar URL para navegación directa
            window.location.hash = section;
            
            // En móvil, cerrar el sidebar
            if ($(window).width() < 992) {
                $('.sidebar').removeClass('active');
            }
        });
        
        // Navegación desde widgets
        $('.widget').on('click', function() {
            const section = $(this).data('section');
            updateActiveSection(section);
            updatePageTitle(section);
            window.location.hash = section;
        });
    }
    
    // Actualizar título de la página según sección
    function updatePageTitle(section) {
        const titles = {
            'dashboard': 'Dashboard',
            'calculators': 'Calculadoras Laborales',
            'globe': 'Globo Terráqueo',
            'notepad': 'Bloc de Notas',
            'time-calc': 'Calculadora de Tiempo',
            'converters': 'Conversores de Tiempo',
            'epoch': 'Epoch & UTC Center',
            'calendar': 'Calendario Inteligente',
            'timer': 'Sistema de Temporizador',
            'stopwatch': 'Cronómetros Avanzados',
            'movies': 'Películas de Viajes en el Tiempo',
            'dimensions': 'Tiempo en otras Dimensiones',
            'settings': 'Ajustes y Personalización'
        };
        
        const subtitles = {
            'dashboard': 'Bienvenido a tu centro de control del tiempo',
            'calculators': 'Herramientas para calcular períodos laborales',
            'globe': 'Zonas horarias alrededor del mundo',
            'notepad': 'Gestiona tus notas y apuntes',
            'time-calc': 'Calcula diferencias temporales precisas',
            'converters': 'Convierte entre formatos temporales',
            'epoch': 'Centro de timestamps y UTC',
            'calendar': 'Gestión avanzada de eventos',
            'timer': 'Temporizadores configurables',
            'stopwatch': 'Cronómetros de alta precisión',
            'movies': 'Explorando los viajes en el tiempo en el cine',
            'dimensions': 'El tiempo a través del universo',
            'settings': 'Personaliza tu experiencia WiTime'
        };
        
        $('.page-title h1').text(titles[section] || 'WiTime');
        $('.page-title p').text(subtitles[section] || '');
    }
    
    // Actualizar sección activa
    function updateActiveSection(section) {
        // Actualizar navegación
        $('.nav-links li').removeClass('active');
        $(`.nav-links li[data-section="${section}"]`).addClass('active');
        
        // Actualizar contenido con animación
        $('.section').fadeOut(300);
        setTimeout(() => {
            $('.section').removeClass('active');
            $(`#${section}`).addClass('active').fadeIn(300);
            
            // Animar entrada de tarjetas
            animateCards(section);
            
            // Si cambiamos a la sección de notepad, cargar la nota activa
            if (section === 'notepad') {
                loadNote(WT.activeNoteId);
            }
        }, 300);
        
        // Actualizar variable global
        WT.activeSection = section;
    }
    
    // Animación de tarjetas
    function animateCards(section) {
        $(`#${section} .glass-card`).each(function(index) {
            $(this).css({
                'opacity': 0,
                'transform': 'translateY(20px)'
            });
            
            setTimeout(() => {
                $(this).css({
                    'opacity': 1,
                    'transform': 'translateY(0)',
                    'transition': `all 0.5s ease ${index * 0.1}s`
                });
            }, 100);
        });
    }
    
    // Tooltips
    function initTooltips() {
        $('[data-tooltip]').each(function() {
            const tooltip = $('<div class="tooltip"></div>');
            tooltip.text($(this).data('tooltip'));
            
            $(this).on('mouseenter', function() {
                $('body').append(tooltip);
                const rect = this.getBoundingClientRect();
                
                tooltip.css({
                    position: 'fixed',
                    top: rect.bottom + 10 + 'px',
                    left: rect.left + (rect.width / 2) + 'px',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--mco)',
                    color: 'var(--txa)',
                    padding: '6px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    zIndex: 9999,
                    opacity: 0,
                    transition: 'opacity 0.2s ease'
                });
                
                // Aplicar animación de entrada
                setTimeout(() => tooltip.css('opacity', 1), 10);
            }).on('mouseleave', function() {
                tooltip.css('opacity', 0);
                setTimeout(() => tooltip.remove(), 200);
            });
        });
    }
    
    // Efecto de parallax
    function initParallaxEffect() {
        $(document).on('mousemove', function(e) {
            const moveX = (e.pageX - $(window).width() / 2) / 50;
            const moveY = (e.pageY - $(window).height() / 2) / 50;
            
            // Efecto en elementos específicos con clase parallax-bg
            $('.parallax-bg').each(function() {
                const depth = $(this).data('depth') || 1;
                $(this).css('transform', `translate(${moveX * depth}px, ${moveY * depth}px)`);
            });
            
            // Efecto en reloj analógico
            $('.analog-clock').css('transform', `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`);
            
            // Efecto en globo terráqueo
            $('.globe-placeholder').css('transform', `translate(${moveX * 2}px, ${moveY * 2}px) rotate(${moveX * 5}deg)`);
        });
    }
    
    // Mostrar toast (notificación)
    window.showToast = function(message, type = 'info', duration = 3000) {
        // Obtener icono según tipo
        let icon = 'fas fa-info-circle';
        let typeClass = 'info';
        
        switch (type) {
            case 'success':
                icon = 'fas fa-check-circle';
                typeClass = 'success';
                break;
            case 'warning':
                icon = 'fas fa-exclamation-triangle';
                typeClass = 'warning';
                break;
            case 'error':
                icon = 'fas fa-times-circle';
                typeClass = 'error';
                break;
        }
        
        // Crear elemento toast
        const toast = $(`
            <div class="toast ${typeClass}">
                <i class="${icon}"></i>
                <span>${message}</span>
                <span class="toast-close">&times;</span>
            </div>
        `);
        
        // Crear contenedor si no existe
        if ($('.toast-container').length === 0) {
            $('body').append('<div class="toast-container"></div>');
        }
        
        // Añadir toast al contenedor
        $('.toast-container').append(toast);
        
        // Auto-eliminar después de la duración
        const timeout = setTimeout(() => {
            removeToast(toast);
        }, duration);
        
        // Evento de cierre manual
        toast.find('.toast-close').on('click', () => {
            clearTimeout(timeout);
            removeToast(toast);
        });
        
        // Función para eliminar toast
        function removeToast(toast) {
            toast.addClass('closing');
            toast.css({
                'opacity': 0,
                'transform': 'translateX(20px)',
                'transition': 'all 0.3s ease'
            });
            
            setTimeout(() => {
                toast.remove();
                
                // Eliminar contenedor si está vacío
                if ($('.toast-container').children().length === 0) {
                    $('.toast-container').remove();
                }
            }, 300);
        }
    };
    
    // Exportar funciones globales
    window.WiTime.updateActiveSection = updateActiveSection;
    window.WiTime.updateClock = updateClock;
    window.WiTime.updateAdvancedTimeInfo = updateAdvancedTimeInfo;
    window.WiTime.performCalculation = performCalculation;
    window.WiTime.showToast = showToast;
});

// Función para realizar cálculos
function performCalculation(calcType, button) {
    const form = button.closest('.calc-form');
    
    // Mostrar animación de cálculo
    button.addClass('calculating').html('<i class="fas fa-spinner fa-spin"></i> <span>Calculando...</span>');
    
    // Simular tiempo de cálculo
    setTimeout(() => {
        let result;
        
        switch(calcType) {
            case 'company-time':
                result = calculateCompanyTime(form);
                break;
            case 'company-years':
                result = calculateCompanyYears(form);
                break;
            case 'company-months':
                result = calculateCompanyMonths(form);
                break;
            case 'company-periods':
                result = calculateCompanyPeriods(form);
                break;
            case 'company-weeks':
                result = calculateCompanyWeeks(form);
                break;
            case 'hours':
                result = calculateWorkHours(form);
                break;
            default:
                result = "Tipo de cálculo no reconocido";
        }
        
        // Restaurar botón
        button.removeClass('calculating').html('<i class="fas fa-calculator"></i> <span>Calcular</span>');
        
        // Mostrar notificación
        if (result) {
            Notificacion('Cálculo completado');
        }
        
    }, 800);
}
/**
 * WiTime - Sistema de Control de Tiempo
 * main2.js - Funciones adicionales y cálculos
 * Fecha última actualización: 2025-05-20 17:56:42
 * Usuario: wtaype
 */

$(document).ready(function() {
    const WT = window.WiTime;
    
    // Inicializar funciones adicionales
    initCalculators();
    initNotepad();
    initQuickNotepad();
    updateAdvancedTimeInfo(); // Actualizamos desde el inicio
});

// Actualizar información de tiempo avanzada
function updateAdvancedTimeInfo() {
    const now = new Date();
    
    // Actualizar día del año
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now - startOfYear;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const daysInYear = isLeapYear(now.getFullYear()) ? 366 : 365;
    $('#day-of-year').text(`${dayOfYear} / ${daysInYear}`);
    
    // Fecha ISO
    $('#iso-date').text(now.toISOString().split('T')[0]);
    
    // GMT actual
    const gmtOffset = -now.getTimezoneOffset() / 60;
    const gmtSign = gmtOffset >= 0 ? '+' : '';
    $('#gmt-time').text(`GMT${gmtSign}${gmtOffset}:00`);
    
    // Fase lunar (aproximada)
    updateMoonPhase(now);
    
    // Estación
    updateSeason(now);
    
    // Semana del año
    const weekOfYear = getWeekNumber(now);
    $('#week-of-year').text(weekOfYear);
    
    // Trimestre
    const quarter = Math.floor(now.getMonth() / 3) + 1;
    $('#quarter').text(`Q${quarter}`);
    
    // Timestamp Unix
    const unixTimestamp = Math.floor(now.getTime() / 1000);
    $('#unix-timestamp').text(unixTimestamp);
    
    // Milisegundos
    $('#milliseconds').text(now.getTime());
    
    // Días en el mes
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    $('#days-in-month').text(daysInMonth);
    
    // Duración del día (aproximada según la época del año)
    updateDayDuration(now);
    
    // Año bisiesto
    $('#leap-year').text(isLeapYear(now.getFullYear()) ? 'Sí' : 'No');
}

// Calcular número de semana del año
function getWeekNumber(d) {
    // Copiar la fecha para no modificar la original
    const date = new Date(d.getTime());
    
    // Obtener el primer día del año
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    
    // Obtener el primer jueves del año
    const week1 = new Date(date.getFullYear(), 0, 4);
    
    // Calcular ajuste para semana 1
    const adjustedDate = new Date(week1.getTime());
    adjustedDate.setDate(week1.getDate() + 3 - (week1.getDay() + 6) % 7);
    
    // Calcular semanas
    return 1 + Math.round(((date.getTime() - adjustedDate.getTime()) / 86400000 - 3 + (adjustedDate.getDay() + 6) % 7) / 7);
}

// Actualizar fase lunar (aproximada)
function updateMoonPhase(date) {
    // Algoritmo simplificado para calcular la fase lunar
    const moonPhases = [
        "Luna nueva",
        "Luna creciente",
        "Cuarto creciente",
        "Luna gibosa creciente",
        "Luna llena",
        "Luna gibosa menguante",
        "Cuarto menguante",
        "Luna menguante"
    ];
    
    // Calcular días desde la luna nueva de referencia
    const newMoonRef = new Date(2023, 0, 21); // Luna nueva el 21 de enero de 2023
    const daysSinceNewMoon = Math.floor((date - newMoonRef) / (1000 * 60 * 60 * 24));
    const dayInCycle = daysSinceNewMoon % 29.53; // 29.53 días es un ciclo lunar completo
    
    // Determinar fase lunar basado en el día del ciclo
    const phaseIndex = Math.floor((dayInCycle / 29.53) * 8) % 8;
    $('#moon-phase').text(moonPhases[phaseIndex]);
}

// Actualizar estación del año
function updateSeason(date) {
    const month = date.getMonth() + 1; // 1-12
    const day = date.getDate();
    
    let season;
    
    // Hemisferio norte
    if ((month === 3 && day >= 20) || month === 4 || month === 5 || (month === 6 && day < 21)) {
        season = "Primavera";
    } else if ((month === 6 && day >= 21) || month === 7 || month === 8 || (month === 9 && day < 22)) {
        season = "Verano";
    } else if ((month === 9 && day >= 22) || month === 10 || month === 11 || (month === 12 && day < 21)) {
        season = "Otoño";
    } else {
        season = "Invierno";
    }
    
    $('#season').text(season);
}

// Actualizar duración del día (aproximada)
function updateDayDuration(date) {
    const month = date.getMonth() + 1; // 1-12
    
    // Valores aproximados para latitud media (horas:minutos)
    let dayLength;
    
    // Hemisferio norte
    if (month === 12 || month === 1) {
        dayLength = "9h 15m"; // Solsticio de invierno
    } else if (month === 2 || month === 10) {
        dayLength = "10h 30m";
    } else if (month === 3 || month === 9) {
        dayLength = "12h 00m"; // Equinoccios
    } else if (month === 4 || month === 8) {
        dayLength = "13h 30m";
    } else if (month === 5 || month === 7) {
        dayLength = "14h 45m";
    } else if (month === 6) {
        dayLength = "15h 30m"; // Solsticio de verano
    } else {
        dayLength = "12h 00m"; // Valor por defecto
    }
    
    $('#day-duration').text(dayLength);
}

// Comprobar si es año bisiesto
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Inicializar calculadoras
function initCalculators() {
    // Eventos para todos los botones de cálculo
    $('.calc-button').on('click', function() {
        const calcType = $(this).data('calc');
        window.WiTime.performCalculation(calcType, $(this));
    });
    
    // Evento de cambio de fechas para actualización automática
    $('input[name="start-date"], input[name="end-date"]').on('change', function() {
        // Encontrar el botón de cálculo más cercano y simular clic
        const calcButton = $(this).closest('.calc-form').find('.calc-button');
        const calcType = calcButton.data('calc');
        window.WiTime.performCalculation(calcType, calcButton);
    });
}

// Cálculo de tiempo completo en empresa
function calculateCompanyTime(form) {
    const startDate = new Date(form.find('input[name="start-date"]').val());
    const endDate = new Date(form.find('input[name="end-date"]').val());
    
    // Validar fechas
    if (isNaN(startDate) || isNaN(endDate)) {
        form.find('#company-time-result .result-value').text('Error de fechas');
        form.find('#company-time-result .result-detail').text('Por favor ingrese fechas válidas');
        return false;
    }
    
    // Calcular diferencia
    const timeDiff = calculateTimeDifference(startDate, endDate);
    
    // Formatear resultado
    let resultText = "Total: ";
    let detailText = "";
    
    if (timeDiff.years > 0) {
        resultText += `${timeDiff.years} año${timeDiff.years !== 1 ? 's' : ''}`;
        if (timeDiff.months > 0 || timeDiff.days > 0) resultText += ", ";
    }
    
    if (timeDiff.months > 0) {
        resultText += `${timeDiff.months} mes${timeDiff.months !== 1 ? 'es' : ''}`;
        if (timeDiff.days > 0) resultText += " y ";
    }
    
    if (timeDiff.days > 0 || (timeDiff.years === 0 && timeDiff.months === 0)) {
        resultText += `${timeDiff.days} día${timeDiff.days !== 1 ? 's' : ''}`;
    }
    
    // Detalle en días totales
    const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    detailText = `${totalDays} día${totalDays !== 1 ? 's' : ''} en total`;
    
    // Actualizar resultado
    form.find('#company-time-result .result-value').addClass('updated').text(resultText);
    form.find('#company-time-result .result-detail').text(detailText);
    
    setTimeout(() => {
        form.find('#company-time-result .result-value').removeClass('updated');
    }, 600);
    
    return true;
}

// Cálculo de años en empresa
function calculateCompanyYears(form) {
    const startDate = new Date(form.find('input[name="start-date"]').val());
    const endDate = new Date(form.find('input[name="end-date"]').val());
    
    // Validar fechas
    if (isNaN(startDate) || isNaN(endDate)) {
        form.find('#company-years-result .result-value').text('Error de fechas');
        form.find('#company-years-result .result-detail').text('Por favor ingrese fechas válidas');
        return false;
    }
    
    // Calcular años completos
    const timeDiff = calculateTimeDifference(startDate, endDate);
    const years = timeDiff.years;
    
    // Formatear resultado
    let resultText = `Total: ${years} año${years !== 1 ? 's' : ''}`;
    
    // Detalle sobre meses adicionales
    let detailText = "";
    if (timeDiff.months > 0 || timeDiff.days > 0) {
        detailText += "(";
        if (timeDiff.months > 0) {
            detailText += `${timeDiff.months} mes${timeDiff.months !== 1 ? 'es' : ''}`;
            if (timeDiff.days > 0) detailText += " y ";
        }
        
        if (timeDiff.days > 0) {
            detailText += `${timeDiff.days} día${timeDiff.days !== 1 ? 's' : ''}`;
        }
        detailText += " adicionales)";
    }
    
    // Actualizar resultado
    form.find('#company-years-result .result-value').addClass('updated').text(resultText);
    form.find('#company-years-result .result-detail').text(detailText);
    
    setTimeout(() => {
        form.find('#company-years-result .result-value').removeClass('updated');
    }, 600);
    
    return true;
}

// Cálculo de meses en empresa
function calculateCompanyMonths(form) {
    const startDate = new Date(form.find('input[name="start-date"]').val());
    const endDate = new Date(form.find('input[name="end-date"]').val());
    
    // Validar fechas
    if (isNaN(startDate) || isNaN(endDate)) {
        form.find('#company-months-result .result-value').text('Error de fechas');
        form.find('#company-months-result .result-detail').text('Por favor ingrese fechas válidas');
        return false;
    }
    
    // Calcular meses totales
    const timeDiff = calculateTimeDifference(startDate, endDate);
    const totalMonths = timeDiff.years * 12 + timeDiff.months;
    
    // Formatear resultado
    let resultText = `Total: ${totalMonths} mes${totalMonths !== 1 ? 'es' : ''}`;
    
    // Detalle sobre días adicionales
    let detailText = "";
    if (timeDiff.days > 0) {
        detailText = `(${timeDiff.days} día${timeDiff.days !== 1 ? 's' : ''} adicionales)`;
    }
    
    // Actualizar resultado
    form.find('#company-months-result .result-value').addClass('updated').text(resultText);
    form.find('#company-months-result .result-detail').text(detailText);
    
    setTimeout(() => {
        form.find('#company-months-result .result-value').removeClass('updated');
    }, 600);
    
    return true;
}

// Cálculo de periodos en empresa (trimestres, cuatrimestres, semestres)
function calculateCompanyPeriods(form) {
    const startDate = new Date(form.find('input[name="start-date"]').val());
    const endDate = new Date(form.find('input[name="end-date"]').val());
    
    // Validar fechas
    if (isNaN(startDate) || isNaN(endDate)) {
        form.find('#company-periods-result .period-value').text('-');
        return false;
    }
    
    // Calcular meses totales
    const timeDiff = calculateTimeDifference(startDate, endDate);
    const totalMonths = timeDiff.years * 12 + timeDiff.months;
    
    // Calcular periodos
    const trimestres = Math.floor(totalMonths / 3);
    const cuatrimestres = Math.floor(totalMonths / 4);
    const semestres = Math.floor(totalMonths / 6);
    
    // Actualizar resultados
    form.find('#company-periods-result .period-value').each(function(index) {
        $(this).addClass('updated');
        switch(index) {
            case 0: // Trimestres
                $(this).text(trimestres);
                break;
            case 1: // Cuatrimestres
                $(this).text(cuatrimestres);
                break;
            case 2: // Semestres
                $(this).text(semestres);
                break;
        }
        
        setTimeout(() => {
            $(this).removeClass('updated');
        }, 600);
    });
    
    return true;
}

// Cálculo de semanas en empresa
function calculateCompanyWeeks(form) {
    const startDate = new Date(form.find('input[name="start-date"]').val());
    const endDate = new Date(form.find('input[name="end-date"]').val());
    
    // Validar fechas
    if (isNaN(startDate) || isNaN(endDate)) {
        form.find('#company-weeks-result .result-value').text('Error de fechas');
        form.find('#company-weeks-result .result-detail').text('Por favor ingrese fechas válidas');
        return false;
    }
    
    // Calcular semanas
    const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;
    
    // Formatear resultado
    let resultText = `Total: ${weeks} semana${weeks !== 1 ? 's' : ''}`;
    let detailText = "";
    if (remainingDays > 0) {
        detailText = `(${remainingDays} día${remainingDays !== 1 ? 's' : ''} adicionales)`;
    }
    
    // Actualizar resultado
    form.find('#company-weeks-result .result-value').addClass('updated').text(resultText);
    form.find('#company-weeks-result .result-detail').text(detailText);
    
    setTimeout(() => {
        form.find('#company-weeks-result .result-value').removeClass('updated');
    }, 600);
    
    return true;
}

// Calcular horas laborales
function calculateWorkHours(form) {
    // Obtener valores del formulario
    const startTime = form.find('input[name="start-time"]').val();
    const endTime = form.find('input[name="end-time"]').val();
    const breakTime = parseInt(form.find('input[name="break-time"]').val()) || 0;
    
    if (!startTime || !endTime) {
        form.find('#hours-result').text("Por favor ingresa horas válidas");
        return false;
    }
    
    // Convertir a minutos desde medianoche
    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);
    
    const startMinutes = startHour * 60 + startMin;
    const endMinutes = endHour * 60 + endMin;
    
    // Calcular diferencia en minutos
    let diffMinutes = endMinutes - startMinutes;
    if (diffMinutes < 0) {
        diffMinutes += 24 * 60; // Añadir un día si el fin es antes del inicio
    }
    
    // Restar tiempo de descanso
    diffMinutes -= breakTime;
    
    // Convertir a horas y minutos
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
    
    // Actualizar resultado
    const result = `Total: ${hours} hora${hours !== 1 ? 's' : ''}${minutes > 0 ? ` y ${minutes} minuto${minutes !== 1 ? 's' : ''}` : ''}`;
    form.find('#hours-result').addClass('updated').text(result);
    
    setTimeout(() => {
        form.find('#hours-result').removeClass('updated');
    }, 600);
    
    return true;
}

// Calcular diferencia de tiempo con años, meses, días
function calculateTimeDifference(startDate, endDate) {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();
    
    // Ajustar días
    if (days < 0) {
        // Días del mes anterior
        const prevMonthDate = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += prevMonthDate.getDate();
        months -= 1;
    }
    
    // Ajustar meses
    if (months < 0) {
        months += 12;
        years -= 1;
    }
    
    return {
        years: years,
        months: months,
        days: days
    };
}

// Inicializar bloc de notas
function initNotepad() {
    // Cargar la nota activa inicialmente
    loadNote(window.WiTime.activeNoteId);
    
    // Evento para cambiar entre notas
    $('.note-item').on('click', function() {
        const noteId = $(this).data('id');
        
        // Guardar la nota actual antes de cambiar
        saveCurrentNote();
        
        // Cargar la nueva nota
        loadNote(noteId);
    });
    
    // Evento para crear una nueva nota
    $('.new-note-btn').on('click', function() {
        // Crear un nuevo ID único
        const newNoteId = 'note' + Date.now();
        
        // Crear una nueva nota con fecha actual
        const now = new Date();
        const day = now.getDate();
        const month = window.WiTime.months[now.getMonth()].toLowerCase();
        const year = now.getFullYear();
        const dateStr = `${day} de ${month}, ${year}`;
        
        // Añadir la nueva nota al objeto
        window.WiTime.notes[newNoteId] = {
            title: 'Nueva nota',
            content: '<p>Escribe aquí tu contenido...</p>',
            date: dateStr
        };
        
        // Crear elemento HTML para la nueva nota
        const newNoteItem = $(`
            <div class="note-item note-add" data-id="${newNoteId}">
                <div class="note-title">Nueva nota</div>
                <div class="note-preview">Escribe aquí tu contenido...</div>
                <div class="note-date">${dateStr}</div>
            </div>
        `);
        
        // Añadir al DOM
        $('.notes-list').prepend(newNoteItem);
        
        // Guardar la nota actual antes de cambiar
        saveCurrentNote();
        
        // Cargar la nueva nota
        loadNote(newNoteId);
        
        // Añadir evento a la nueva nota
        $(`.note-item[data-id="${newNoteId}"]`).on('click', function() {
            const noteId = $(this).data('id');
            saveCurrentNote();
            loadNote(noteId);
        });
        
        // Mostrar notificación
        window.showToast('Nueva nota creada', 'success');
        
        // Quitar clase de animación
        setTimeout(() => {
            newNoteItem.removeClass('note-add');
        }, 1000);
    });
    
    // Eventos para los botones de la barra de herramientas
    $('.editor-tool').on('click', function() {
        const command = $(this).data('command');
        
        if (command === 'createLink') {
            const url = prompt('Introduce la URL del enlace:');
            if (url) {
                document.execCommand(command, false, url);
            }
        } else {
            document.execCommand(command, false, null);
        }
        
        // Actualizar la vista previa después de editar
        updateNotePreview();
    });
    
    // Evento para el selector de formatos
    $('.editor-select').on('change', function() {
        const format = $(this).val();
        
        if (format === 'normal') {
            document.execCommand('formatBlock', false, 'p');
        } else {
            document.execCommand('formatBlock', false, format);
        }
        
        // Actualizar la vista previa después de editar
        updateNotePreview();
    });
    
    // Eventos para los botones de la nota
    $('.editor-actions .action-button').on('click', function() {
        const action = $(this).find('i').attr('class');
        
        if (action.includes('save')) {
            saveCurrentNote();
            window.showToast('Nota guardada correctamente', 'success');
        } else if (action.includes('trash')) {
            // Confirmar eliminación
            showModal({
                title: 'Eliminar nota',
                content: '<p>¿Estás seguro de que quieres eliminar esta nota? Esta acción no se puede deshacer.</p>',
                confirmText: 'Eliminar',
                cancelText: 'Cancelar',
                onConfirm: function() {
                    deleteCurrentNote();
                }
            });
        }
    });
    
    // Actualizar la vista previa al editar
    $('.editor-content').on('input', function() {
        updateNotePreview();
    });
    
    // Actualizar el título al editarlo
    $('.editor-title').on('input', function() {
        updateNoteTitle();
    });
    
    // Búsqueda de notas
    $('.notepad-search input').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        
        if (searchTerm === '') {
            $('.note-item').show();
            return;
        }
        
        $('.note-item').each(function() {
            const title = $(this).find('.note-title').text().toLowerCase();
            const preview = $(this).find('.note-preview').text().toLowerCase();
            
            if (title.includes(searchTerm) || preview.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
}

// Cargar una nota en el editor
function loadNote(noteId) {
    const note = window.WiTime.notes[noteId];
    
    if (!note) {
        window.showToast('Error al cargar la nota', 'error');
        return;
    }
    
    // Actualizar ID de nota activa
    window.WiTime.activeNoteId = noteId;
    
    // Actualizar el contenido del editor
    $('.editor-title').val(note.title);
    $('.editor-content').html(note.content);
    
    // Actualizar UI para mostrar la nota activa
    $('.note-item').removeClass('active');
    $(`.note-item[data-id="${noteId}"]`).addClass('active');
}

// Guardar la nota actual
function saveCurrentNote() {
    if (!window.WiTime.activeNoteId) return;
    
    const title = $('.editor-title').val();
    const content = $('.editor-content').html();
    
    // Actualizar objeto de notas
    if (window.WiTime.notes[window.WiTime.activeNoteId]) {
        window.WiTime.notes[window.WiTime.activeNoteId].title = title;
        window.WiTime.notes[window.WiTime.activeNoteId].content = content;
        
        // Actualizar UI
        const noteItem = $(`.note-item[data-id="${window.WiTime.activeNoteId}"]`);
        noteItem.find('.note-title').text(title);
        
        // Actualizar vista previa (primeras 50 caracteres de texto sin HTML)
        const tempDiv = $('<div>').html(content);
        const plainText = tempDiv.text();
        const preview = plainText.substring(0, 50) + (plainText.length > 50 ? '...' : '');
        noteItem.find('.note-preview').text(preview);
    }
}

// Actualizar la vista previa de la nota actual mientras se edita
function updateNotePreview() {
    if (!window.WiTime.activeNoteId) return;
    
    const content = $('.editor-content').html();
    
    // Actualizar vista previa (primeras 50 caracteres de texto sin HTML)
    const tempDiv = $('<div>').html(content);
    const plainText = tempDiv.text();
    const preview = plainText.substring(0, 50) + (plainText.length > 50 ? '...' : '');
    
    $(`.note-item[data-id="${window.WiTime.activeNoteId}"] .note-preview`).text(preview);
}

// Actualizar el título de la nota actual mientras se edita
function updateNoteTitle() {
    if (!window.WiTime.activeNoteId) return;
    
    const title = $('.editor-title').val();
    $(`.note-item[data-id="${window.WiTime.activeNoteId}"] .note-title`).text(title);
}

// Eliminar la nota actual
function deleteCurrentNote() {
    if (!window.WiTime.activeNoteId || Object.keys(window.WiTime.notes).length <= 1) {
        window.showToast('No se puede eliminar la última nota', 'warning');
        return;
    }
    
    // Eliminar del DOM
    $(`.note-item[data-id="${window.WiTime.activeNoteId}"]`).remove();
    
    // Eliminar del objeto
    delete window.WiTime.notes[window.WiTime.activeNoteId];
    
    // Seleccionar la primera nota disponible
    const firstNoteId = Object.keys(window.WiTime.notes)[0];
    window.WiTime.activeNoteId = firstNoteId;
    loadNote(firstNoteId);
    
    // Mostrar notificación
    window.showToast('Nota eliminada', 'success');
}

// Inicializar bloc de notas rápido
function initQuickNotepad() {
    // Cargar notas existentes
    renderQuickNotes();
    
    // Evento para guardar nota rápida
    $('.notepad-quick-save').on('click', function() {
        const noteText = $('.notepad-quick-textarea').val();
        
        if (noteText.trim() === '') {
            window.showToast('Ingrese texto para la nota', 'warning');
            return;
        }
        
        // Obtener hora actual
        const now = new Date();
        const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        // Añadir nueva nota
        window.WiTime.quickNotes.unshift({
            text: noteText,
            date: `Hoy - ${timeString}`
        });
        
        // Limpiar textarea
        $('.notepad-quick-textarea').val('');
        
        // Actualizar lista
        renderQuickNotes();
        
        // Mostrar notificación
        window.showToast('Nota rápida guardada', 'success');
    });
    
    // Evento para ver todas las notas
    $('.notepad-quick-view').on('click', function() {
        // Cambiar a la sección de notepad
        window.WiTime.updateActiveSection('notepad');
        updatePageTitle('notepad');
        window.location.hash = 'notepad';
    });
}

// Renderizar notas rápidas
function renderQuickNotes() {
    const container = $('.notepad-quick-list');
    container.empty();
    
    // Mostrar hasta 3 notas más recientes
    const notesToShow = window.WiTime.quickNotes.slice(0, 3);
    
    notesToShow.forEach(note => {
        const noteItem = $(`
            <div class="quick-note-item">
                <p>${note.text}</p>
                <span class="quick-note-date">${note.date}</span>
            </div>
        `);
        
        container.append(noteItem);
    });
}

// Actualizar título de la página según sección
function updatePageTitle(section) {
    const titles = {
        'dashboard': 'Dashboard',
        'calculators': 'Calculadoras Laborales',
        'globe': 'Globo Terráqueo',
        'notepad': 'Bloc de Notas',
        'time-calc': 'Calculadora de Tiempo',
        'converters': 'Conversores de Tiempo',
        'epoch': 'Epoch & UTC Center',
        'calendar': 'Calendario Inteligente',
        'timer': 'Sistema de Temporizador',
        'stopwatch': 'Cronómetros Avanzados',
        'movies': 'Películas de Viajes en el Tiempo',
        'dimensions': 'Tiempo en otras Dimensiones',
        'settings': 'Ajustes y Personalización'
    };
    
    const subtitles = {
        'dashboard': 'Bienvenido a tu centro de control del tiempo',
        'calculators': 'Herramientas para calcular períodos laborales',
        'globe': 'Zonas horarias alrededor del mundo',
        'notepad': 'Gestiona tus notas y apuntes',
        'time-calc': 'Calcula diferencias temporales precisas',
        'converters': 'Convierte entre formatos temporales',
        'epoch': 'Centro de timestamps y UTC',
        'calendar': 'Gestión avanzada de eventos',
        'timer': 'Temporizadores configurables',
        'stopwatch': 'Cronómetros de alta precisión',
        'movies': 'Explorando los viajes en el tiempo en el cine',
        'dimensions': 'El tiempo a través del universo',
        'settings': 'Personaliza tu experiencia WiTime'
    };
    
    $('.page-title h1').text(titles[section] || 'WiTime');
    $('.page-title p').text(subtitles[section] || '');
}

// Mostrar modal
function showModal(options) {
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
        closeModal(modal);
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
function closeModal(modal) {
    modal.css({
        'opacity': 0,
        'transition': 'opacity 0.3s ease'
    });
    
    setTimeout(() => {
        modal.remove();
    }, 300);
}
/**
 * WiTime - Sistema de Control de Tiempo
 * components.js - Componentes adicionales y características especiales
 * Fecha última actualización: 2025-05-20 18:02:44
 * Usuario: wtaype
 */

$(document).ready(function() {
    // Inicialización de componentes
    initComponents();
    
    // Función principal de inicialización
    function initComponents() {
        initAdvancedUIComponents();
        initGlobeInteraction();
        initQuickNotepad();
        initModalSystem();
        initAccessibilityFeatures();
        initAnimationEffects();
    }
    
    // Inicializar componentes UI avanzados
    function initAdvancedUIComponents() {
        // Activar tooltips
        $('[data-tooltip]').each(function() {
            const tooltip = $('<div class="tooltip"></div>');
            tooltip.text($(this).data('tooltip'));
            
            $(this).on('mouseenter', function() {
                $('body').append(tooltip);
                const rect = this.getBoundingClientRect();
                
                tooltip.css({
                    position: 'fixed',
                    top: rect.bottom + 10 + 'px',
                    left: rect.left + (rect.width / 2) + 'px',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--mco)',
                    color: 'var(--txa)',
                    padding: '6px 10px',
                    borderRadius: '4px',
                    fontSize: 'var(--fz_s3)',
                    zIndex: 9999,
                    opacity: 0,
                    transition: 'opacity 0.2s ease'
                });
                
                // Aplicar animación de entrada
                setTimeout(() => tooltip.css('opacity', 1), 10);
            }).on('mouseleave', function() {
                tooltip.css('opacity', 0);
                setTimeout(() => tooltip.remove(), 200);
            });
        });
        
        // Inicializar efectos hover para tarjetas
        $('.glass-card').each(function() {
            $(this).on('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calcular posición relativa (0-1)
                const posX = x / rect.width;
                const posY = y / rect.height;
                
                // Aplicar efecto de iluminación
                const baseOpacity = document.documentElement.dataset.theme === "Futuro" ? 0.05 : 0.1;
                const gradientOpacity = document.documentElement.dataset.theme === "Futuro" ? posX * 0.05 : posX * 0.1;
                
                $(this).css('background', `
                    linear-gradient(
                        135deg,
                        rgba(255, 255, 255, ${baseOpacity}) 0%,
                        rgba(255, 255, 255, ${baseOpacity + gradientOpacity}) ${30 + posY * 20}%,
                        rgba(255, 255, 255, ${baseOpacity}) 100%
                    )
                `);
            });
            
            $(this).on('mouseleave', function() {
                const baseOpacity = document.documentElement.dataset.theme === "Futuro" ? 0.1 : 0.2;
                $(this).css('background', `rgba(255, 255, 255, ${baseOpacity})`);
            });
        });
        
        // Efectos para widgets
        $('.widget').each(function() {
            // Crear efecto de onda al hacer clic
            $(this).on('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = $('<div class="ripple-effect"></div>');
                ripple.css({
                    position: 'absolute',
                    top: y + 'px',
                    left: x + 'px',
                    background: 'rgba(255, 255, 255, 0.4)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%) scale(0)',
                    width: '100%',
                    paddingTop: '100%',
                    opacity: '1',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none'
                });
                
                $(this).append(ripple);
                
                setTimeout(() => {
                    ripple.css({
                        transform: 'translate(-50%, -50%) scale(2.5)',
                        opacity: '0'
                    });
                    
                    setTimeout(() => ripple.remove(), 600);
                }, 10);
            });
        });
        
        // ScrollSpy para animar elementos al entrar en viewport
        initScrollSpy();
        
        // Tab control avanzado con animación
        $('.tab-button').on('click', function() {
            const $this = $(this);
            const $allTabs = $('.tab-button');
            const prevActiveIndex = $allTabs.index($allTabs.filter('.active'));
            const newActiveIndex = $allTabs.index($this);
            const direction = newActiveIndex > prevActiveIndex ? 'right' : 'left';
            
            $allTabs.removeClass('active');
            $this.addClass('active');
            
            // Animar contenido si existe
            const tabContents = $('.tab-content');
            if (tabContents.length) {
                const prevContent = tabContents.filter('.active');
                const nextContent = tabContents.eq(newActiveIndex);
                
                prevContent.removeClass('active').addClass('leaving-' + direction);
                nextContent.addClass('active entering-' + direction);
                
                setTimeout(() => {
                    prevContent.removeClass('leaving-' + direction);
                    nextContent.removeClass('entering-' + direction);
                }, 500);
            }
        });
    }
    
    // Inicializar ScrollSpy para animar elementos
    function initScrollSpy() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-viewport');
                }
            });
        }, {
            threshold: 0.1
        });
        
        $('.animate-on-scroll').each(function() {
            observer.observe(this);
        });
    }
    
    // Interacciones con el globo terráqueo
    function initGlobeInteraction() {
        $('.globe-3d').on('mousemove', function(e) {
            const el = $(this);
            const height = el.height();
            const width = el.width();
            
            // Calcular posición relativa del mouse
            const xVal = e.offsetX - width / 2;
            const yVal = e.offsetY - height / 2;
            
            // Rotación suave del globo
            const rotationY = (xVal / (width / 2)) * 20;
            const rotationX = (yVal / (height / 2)) * 20;
            
            $('.globe-placeholder').css('transform', `rotateY(${rotationY}deg) rotateX(${-rotationX}deg)`);
        });
        
        $('.globe-3d').on('mouseleave', function() {
            $('.globe-placeholder').css('transform', 'rotateY(0deg) rotateX(0deg)');
        });
        
        // Actualizar visualización del día y noche
        updateDayNightCycle();
        
        // Actualizar cada 30 minutos
        setInterval(updateDayNightCycle, 30 * 60 * 1000);
        
        // Añadir eventos de interacción para las zonas horarias
        $('.timezone-item').on('click', function() {
            if (!$(this).hasClass('add-timezone')) {
                $('.timezone-item').removeClass('active');
                $(this).addClass('active');
                
                // Mostrar información detallada sobre la zona horaria
                const cityName = $(this).find('.timezone-city').text();
                const timeOffset = $(this).find('.timezone-offset').text();
                
                showToast(`Zona horaria seleccionada: ${cityName} (${timeOffset})`, 'info');
            }
        });
        
        // Botón para añadir nueva zona horaria
        $('.add-timezone').on('click', function() {
            showCitiesModal();
        });
    }
    
    // Actualizar ciclo día/noche en el globo
    function updateDayNightCycle() {
        const now = new Date();
        const hour = now.getHours();
        
        // Obtener porcentaje del día (0-100)
        const dayPercent = (hour / 24) * 100;
        
        // Actualizar el indicador día/noche
        $('.day-night-indicator').css('background', `linear-gradient(to right, 
            rgba(252, 211, 77, 0.3) 0%, 
            rgba(252, 211, 77, 0.3) ${dayPercent}%, 
            rgba(30, 58, 138, 0.3) ${dayPercent}%, 
            rgba(30, 58, 138, 0.3) 100%)`);
        
        // Ajustar el texto del indicador
        if (hour >= 6 && hour < 18) {
            $('.day-side').css('font-weight', 'bold');
            $('.night-side').css('font-weight', 'normal');
        } else {
            $('.day-side').css('font-weight', 'normal');
            $('.night-side').css('font-weight', 'bold');
        }
    }
    
    // Mostrar modal con ciudades disponibles para zonas horarias
    function showCitiesModal() {
        // Lista de ciudades con sus timezones
        const cities = [
            { name: "Sydney", timezone: "Australia/Sydney", offset: 10 },
            { name: "Berlin", timezone: "Europe/Berlin", offset: 2 },
            { name: "Rio de Janeiro", timezone: "America/Sao_Paulo", offset: -3 },
            { name: "Chicago", timezone: "America/Chicago", offset: -5 },
            { name: "Los Angeles", timezone: "America/Los_Angeles", offset: -7 },
            { name: "Dubai", timezone: "Asia/Dubai", offset: 4 },
            { name: "Ciudad de México", timezone: "America/Mexico_City", offset: -6 },
            { name: "Bangkok", timezone: "Asia/Bangkok", offset: 7 },
            { name: "Delhi", timezone: "Asia/Kolkata", offset: 5.5 }
        ];
        
        // Generar HTML para la lista de ciudades
        let citiesHTML = '';
        cities.forEach(city => {
            citiesHTML += `
                <div class="city-item" data-name="${city.name}" data-timezone="${city.timezone}" data-offset="${city.offset}">
                    <div class="city-name">${city.name}</div>
                    <div class="city-timezone">UTC${city.offset >= 0 ? '+' : ''}${city.offset}:00</div>
                </div>
            `;
        });
        
        // Crear modal
        showModal({
            title: 'Añadir Zona Horaria',
            content: `
                <div class="search-container" style="margin-bottom: 20px;">
                    <input type="text" class="sky-input" id="city-search" placeholder="Buscar ciudad...">
                    <i class="fas fa-search"></i>
                </div>
                <div class="cities-list" style="max-height: 300px; overflow-y: auto;">
                    ${citiesHTML}
                </div>
            `,
            size: 'medium',
            onOpen: function(modal) {
                // Añadir evento de búsqueda
                modal.find('#city-search').on('input', function() {
                    const query = $(this).val().toLowerCase();
                    modal.find('.city-item').each(function() {
                        const cityName = $(this).data('name').toLowerCase();
                        if (cityName.includes(query)) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                });
                
                // Añadir evento de selección de ciudad
                modal.find('.city-item').on('click', function() {
                    const name = $(this).data('name');
                    const timezone = $(this).data('timezone');
                    const offset = $(this).data('offset');
                    
                    // Crear nueva zona horaria
                    addNewTimeZone(name, offset);
                    
                    // Cerrar modal
                    closeModal(modal);
                    
                    // Mostrar notificación
                    showToast(`Zona horaria ${name} añadida`, 'success');
                });
                
                // Aplicar estilos específicos de tema
                const theme = document.documentElement.dataset.theme || 'Cielo';
                modal.find('.city-item').css({
                    'padding': '12px 15px',
                    'border-radius': '8px',
                    'background': 'rgba(255, 255, 255, 0.05)',
                    'margin-bottom': '10px',
                    'cursor': 'pointer',
                    'transition': 'all 0.2s ease',
                    'border-left': '3px solid transparent'
                });
                
                modal.find('.city-item').hover(
                    function() {
                        $(this).css({
                            'background': 'var(--hv)',
                            'transform': 'translateX(5px)',
                            'color': 'var(--txa)',
                            'border-left-color': 'var(--mco)'
                        });
                    },
                    function() {
                        $(this).css({
                            'background': 'rgba(255, 255, 255, 0.05)',
                            'transform': 'none',
                            'color': '',
                            'border-left-color': 'transparent'
                        });
                    }
                );
                
                modal.find('.city-name').css({
                    'font-weight': '500',
                    'font-size': 'var(--fz_m1)',
                    'margin-bottom': '4px'
                });
                
                modal.find('.city-timezone').css({
                    'font-size': 'var(--fz_s3)',
                    'color': 'var(--txe)'
                });
            }
        });
    }
    
    // Añadir nueva zona horaria
    function addNewTimeZone(city, offset) {
        // Obtener fecha actual
        const now = new Date();
        
        // Aplicar offset
        const localTime = new Date(now.getTime() + (offset * 60 * 60 * 1000));
        
        // Formatear hora
        const hours = String(localTime.getHours()).padStart(2, '0');
        const minutes = String(localTime.getMinutes()).padStart(2, '0');
        
        // Crear elemento
        const newTimezone = $(`
            <div class="timezone-item" data-city="${city}">
                <div class="timezone-info">
                    <div class="timezone-city">${city}</div>
                    <div class="timezone-offset">UTC${offset >= 0 ? '+' : ''}${offset}:00</div>
                </div>
                <div class="timezone-time">${hours}:${minutes}</div>
            </div>
        `);
        
        // Insertar en la lista
        $('.add-timezone').before(newTimezone);
        
        // Animación de entrada
        newTimezone.css({
            'opacity': 0,
            'transform': 'translateX(-20px)'
        });
        
        setTimeout(() => {
            newTimezone.css({
                'opacity': 1,
                'transform': 'translateX(0)',
                'transition': 'all 0.3s ease'
            });
        }, 10);
        
        // Añadir evento de clic a la nueva zona horaria
        newTimezone.on('click', function() {
            // Resaltar la zona horaria seleccionada
            $('.timezone-item').removeClass('active');
            $(this).addClass('active');
            
            // Mostrar información detallada
            const cityName = $(this).data('city');
            showToast(`Zona horaria seleccionada: ${cityName}`, 'info');
        });
    }
    
    // Inicializar bloc de notas rápido
    function initQuickNotepad() {
        // Cargar notas existentes
        renderQuickNotes();
        
        // Evento para guardar nota rápida
        $('.notepad-quick-save').on('click', function() {
            const noteText = $('.notepad-quick-textarea').val();
            
            if (noteText.trim() === '') {
                showToast('Ingrese texto para la nota', 'warning');
                return;
            }
            
            // Obtener hora actual
            const now = new Date();
            const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
            
            // Añadir nueva nota
            window.WiTime.quickNotes.unshift({
                text: noteText,
                date: `Hoy - ${timeString}`
            });
            
            // Limpiar textarea
            $('.notepad-quick-textarea').val('');
            
            // Actualizar lista
            renderQuickNotes();
            
            // Mostrar notificación
            showToast('Nota guardada correctamente', 'success');
            
            // Animar botón de guardar
            $(this).addClass('success-bounce');
            setTimeout(() => {
                $(this).removeClass('success-bounce');
            }, 500);
        });
        
        // Evento para ver todas las notas
        $('.notepad-quick-view').on('click', function() {
            // Cambiar a la sección de notepad
            window.WiTime.updateActiveSection('notepad');
            window.location.hash = 'notepad';
        });
        
        // Efectos de autoexpansión
        $('.notepad-quick-textarea').on({
            focus: function() {
                $(this).animate({ height: '120px' }, 200);
                $('.notepad-quick-actions').slideDown(200);
            },
            blur: function() {
                if ($(this).val() === '') {
                    $(this).animate({ height: '80px' }, 200);
                    $('.notepad-quick-actions').slideUp(200);
                }
            }
        });
        
        // Ocultar botones al inicio si el textarea está vacío
        if ($('.notepad-quick-textarea').val() === '') {
            $('.notepad-quick-actions').hide();
        }
    }
    
    // Renderizar notas rápidas
    function renderQuickNotes() {
        const container = $('.notepad-quick-list');
        container.empty();
        
        // Obtener notas desde el objeto global
        const quickNotes = window.WiTime.quickNotes || [];
        
        // Mostrar hasta 3 notas más recientes
        const notesToShow = quickNotes.slice(0, 3);
        
        notesToShow.forEach((note, index) => {
            const noteItem = $(`
                <div class="quick-note-item" style="animation-delay: ${index * 0.1}s">
                    <p>${note.text}</p>
                    <span class="quick-note-date">${note.date}</span>
                </div>
            `);
            
            // Aplicar clase para animación
            noteItem.addClass('animate-fade-in');
            
            // Añadir efecto de hover
            noteItem.hover(
                function() {
                    $(this).css({
                        'background': 'var(--hv)',
                        'transform': 'translateX(5px)',
                        'color': 'var(--txa)'
                    });
                },
                function() {
                    $(this).css({
                        'background': 'rgba(255, 255, 255, 0.05)',
                        'transform': 'none',
                        'color': ''
                    });
                }
            );
            
            container.append(noteItem);
            
            // Acción para mostrar la nota completa al hacer clic
            noteItem.on('click', function() {
                showModal({
                    title: 'Nota',
                    content: `<div style="white-space: pre-wrap;">${note.text}</div>`,
                    footer: `<em>${note.date}</em>`,
                    size: 'small'
                });
            });
        });
        
        // Si no hay notas, mostrar mensaje
        if (notesToShow.length === 0) {
            container.append(`
                <div class="empty-notes-message">
                    <i class="fas fa-sticky-note" style="font-size: 24px; opacity: 0.5; margin-bottom: 10px;"></i>
                    <p>No hay notas guardadas.</p>
                </div>
            `);
        }
    }
    
    // Sistema de modales
    function initModalSystem() {
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
        
        // Asegurarnos de que el método global de modales está disponible
        window.showModal = showModal;
        window.closeModal = closeModal;
    }
    
    // Mostrar modal
    function showModal(options) {
        // Crear overlay y contenedor del modal
        const modal = $(`
            <div class="modal-overlay">
                <div class="modal-container ${options.size || 'medium'}">
                    <div class="modal-header">
                        <h3>${options.title}</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-content">
                        ${options.content}
                    </div>
                    ${options.footer ? `<div class="modal-footer">${options.footer}</div>` : ''}
                    ${!options.footer && (options.confirmText || options.cancelText) ? `
                        <div class="modal-footer">
                            ${options.cancelText ? `<button class="sky-button modal-cancel">${options.cancelText}</button>` : ''}
                            ${options.confirmText ? `<button class="sky-button primary-button modal-confirm">${options.confirmText}</button>` : ''}
                        </div>
                    ` : ''}
                </div>
            </div>
        `);
        
        // Añadir modal al DOM
        $('body').append(modal);
        
        // Animar entrada
        setTimeout(() => {
            modal.css('opacity', '1');
            modal.find('.modal-container').css('transform', 'translateY(0)');
        }, 10);
        
        // Eventos
        modal.find('.modal-close, .modal-cancel').on('click', function() {
            closeModal(modal);
            if (options.onCancel) {
                options.onCancel(modal);
            }
        });
        
        modal.find('.modal-confirm').on('click', function() {
            if (options.onConfirm) {
                options.onConfirm(modal);
            } else {
                closeModal(modal);
            }
        });
        
        // Aplicar callbacks
        if (options.onOpen) {
            options.onOpen(modal);
        }
        
        // Bloquear scroll del cuerpo
        $('body').css('overflow', 'hidden');
        
        return modal;
    }
    
    // Cerrar modal
    function closeModal(modal) {
        modal.css('opacity', '0');
        modal.find('.modal-container').css('transform', 'translateY(20px)');
        
        setTimeout(() => {
            modal.remove();
            
            // Verificar si hay más modales
            if ($('.modal-overlay').length === 0) {
                $('body').css('overflow', '');
            }
        }, 300);
    }
    
    // Características de accesibilidad
    function initAccessibilityFeatures() {
        // Enfoque mediante teclado para navegación
        $('.nav-links li, .widget, .action-button, .sky-button, .tab-button').attr('tabindex', '0');
        
        // Navegación con teclado para elementos interactivos
        $(document).on('keydown', function(e) {
            // Tecla Escape para cerrar modales
            if (e.key === 'Escape' && $('.modal-overlay').length) {
                closeModal($('.modal-overlay').eq(0));
            }
            
            // Tecla Enter para activar elementos enfocados
            if (e.key === 'Enter') {
                const focused = $(':focus');
                if (focused.is('.nav-links li, .widget, .action-button, .sky-button, .tab-button')) {
                    focused.click();
                }
            }
        });
        
        // Añadir etiquetas ARIA para mejorar accesibilidad
        $('.nav-links li').attr('role', 'button').attr('aria-label', function() {
            return $(this).find('.nav-title').text() + ' sección';
        });
        
        $('.widget').attr('role', 'button').attr('aria-label', function() {
            return $(this).text().trim() + ' widget';
        });
        
        $('.timezone-item').attr('role', 'button');
        
        $('.digital-time').attr('aria-live', 'polite');
        $('.date-display').attr('aria-live', 'polite');
    }
    
    // Efectos de animación especiales
    function initAnimationEffects() {
        // Efecto de hover para los items del menú
        $('.nav-links li').each(function() {
            const originalBg = $(this).css('background');
            
            $(this).on('mouseenter', function() {
                // Solo aplicar si no es el elemento activo
                if (!$(this).hasClass('active')) {
                    $(this).css('transform', 'translateX(5px)');
                }
            }).on('mouseleave', function() {
                // Restaurar al original solo si no es el activo
                if (!$(this).hasClass('active')) {
                    $(this).css('transform', '');
                }
            });
        });
        
        // Efecto de ondas para botones círculares
        $('.circular-button, .action-button').each(function() {
            $(this).on('click', function(e) {
                const button = $(this);
                
                // Crear elemento de onda
                const ripple = $('<span class="ripple"></span>');
                button.append(ripple);
                
                // Calcular tamaño basado en el botón
                const d = Math.max(button.outerWidth(), button.outerHeight());
                ripple.css({
                    height: d,
                    width: d
                });
                
                // Posicionar onda en el punto de clic
                const x = e.pageX - button.offset().left - ripple.width() / 2;
                const y = e.pageY - button.offset().top - ripple.height() / 2;
                ripple.css({
                    top: y + 'px',
                    left: x + 'px'
                });
                
                // Remover después de la animación
                setTimeout(function() {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Animación para botones de calculadora
        $('.calc-button').on('click', function() {
            $(this).addClass('pulse');
            setTimeout(() => {
                $(this).removeClass('pulse');
            }, 700);
        });
        
        // Estilizar especialmente los Scrollbars
        if ($('#custom-scrollbars').length === 0) {
            $('head').append(`
                <style id="custom-scrollbars">
                    ::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                    }
                    
                    ::-webkit-scrollbar-track {
                        background: rgba(0, 0, 0, 0.05);
                        border-radius: 4px;
                    }
                    
                    ::-webkit-scrollbar-thumb {
                        background: var(--mco);
                        border-radius: 4px;
                        opacity: 0.7;
                    }
                    
                    ::-webkit-scrollbar-thumb:hover {
                        background: var(--hv);
                    }
                </style>
            `);
        }
        
        // Añadir clase de animación para notas rápidas
        if ($('#quick-note-animations').length === 0) {
            $('head').append(`
                <style id="quick-note-animations">
                    .animate-fade-in {
                        animation: fadeInRight 0.5s ease forwards;
                    }
                    
                    @keyframes fadeInRight {
                        from {
                            opacity: 0;
                            transform: translateX(-20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                </style>
            `);
        }
    }
});