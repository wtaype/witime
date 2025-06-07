import $ from 'jquery'; 
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

import Globe from 'globe.gl'; // Para visualizaciones de tm terráqueo interactivo 3D
import * as d3 from 'd3-geo'; // Para proyecciones geográficas y cálculos geoespaciales
import Swiper from 'swiper'; // Para crear carruseles y sliders touch
import 'swiper/css';// Para crear carruseles y sliders touch
import { wiTema, adrm, showLoading, Saludar, Mensaje, Notificacion, accederRol, fechaLocal, flagUrl, hasFlag, Capi, savels, getls, removels, gosave, getsave, gosaves, getsaves, openModal, closeModal, closeAllModals, initModalSystem, witip, calcularEdad, mostrarModal, cerrarModal, wiip, calendario, Tiempo, adup, fechaLetra} from './widev.js';
// 🎯 En este recurso tenemos: Sistema de temas dinámico, utilidades de clases, almacenamiento local inteligente, modales avanzados, tooltips profesionales, notificaciones elegantes, validaciones de edad, manejo de fechas y todo lo necesario para construir WiTime épico

// ================================================
// FUNCIONES GENERAL DE SISTEMA UI USUARIO 
// ================================================
$(function(){

// 🎯 NAVEGACIÓN ULTRA COMPACTA
let lkactivo = window.location.hash; //Obtenemos el link actual 
$('.navlk').click(function(){
  lkactivo = $(this).attr('href');
  adrm(this,'active'); adrm(lkactivo, 'active'); 
});

// ACTUALIZANDO DE LINKS AL INICIO
adrm(`.navlk[href="${lkactivo}"]`,'active'); 
adrm(lkactivo,'active');

// MENU TOGGLE PHONE 
$(document).on('click', function(e) {
  const isToggle = $(e.target).closest('.menu-toggle').length;
  const isSidebar = $(e.target).closest('.sidebar').length;
  isToggle ? (e.stopPropagation(), $('.sidebar').toggleClass('active')) : !isSidebar && $('.sidebar').removeClass('active');
});


}); 

// ================================================
// 🏠 1. DASHBOARD
// - ⏰ Reloj analógico central + 4 ciudades: NYC, Madrid, Seúl, Sydney ->OK
// - 📅 Resumen temporal: Día del año, semana, trimestre automático -> Ok
// - 📝 Notas rápidas debajo del reloj digital con timestamps
// - ⚡ Acceso rápido a calculadoras más usadas
// - 🎂 Contador de vida animado: Años/meses/días/minutos desde 01/01/2000 (configurable)
// ================================================
$(function(){
// ⏰ RELOJ ANALÓGICO ULTRA COMPACTO
function relojAnalogico() {
  const tmp = Tiempo();
  const [h, m, s] = [tmp.hora % 12, tmp.minuto, tmp.segundo];
  if (!$('.clock-markings .hour-marker').length) {
    const cm = $('.clock-markings');
    [...Array(12)].map((_, i) => {const n = i + 1, a = n * 30, r = 113, [x, y] = [Math.sin(a * Math.PI / 180) * r, -Math.cos(a * Math.PI / 180) * r]; cm.append(`<div class="hour-marker" style="transform: rotate(${a}deg)"></div><div class="hour-number" style="left: calc(50% + ${x}px); top: calc(50% + ${y}px)">${n}</div>`);});
    [...Array(60)].map((_, i) => i + 1).filter(i => i % 5 !== 0).forEach(i => cm.append(`<div class="minute-marker" style="transform: rotate(${i * 6}deg)"></div>`));
  }
  Object.entries({second: s * 6, minute: m * 6 + s * 0.1, hour: h * 30 + m * 0.5}).forEach(([hand, angle]) => $(`.${hand}-hand`).css('transform', `translateX(-50%) rotate(${angle}deg)`));
}
// 🕰️ RELOJ DIGITAL MEGA SIMPLE
function relojDigital() {
    const tmp = Tiempo();
  $('.digital-time').text(tmp.horaCorta);
  $('.digital-seconds').text(tmp.segundo.toString().padStart(2, '0'));
  $('.date-display').text(tmp.fechaCompleta);
}
$('.estacion-text').text(Tiempo('estacion')); // Para estacion
$('.timezone-text').text(Tiempo('gmt')); //Para gmt del tiempo
$('.location-text').text(wiip('miciudad'));  // El region y pais 
calendario('.calendarioMain'); // Calendario principal 

// INFORMACION RAPIDA 
function infoRapida() {
  const itm = Tiempo();
  const estaticos = [
    ['day-of-year', `${itm.diaDelAño}/${itm.diasEnAño}`], ['iso-date', itm.iso], ['gmt-time', itm.gmt], ['moon-phase', itm.faseLunar], ['season', itm.estacion], ['week-of-year', itm.semana], ['quarter', `Q${itm.trimestre}`], ['days-in-month', itm.diasEnMes], ['day-duration', itm.duracionDia], ['leap-year', itm.bisiesto ? 'Sí' : 'No'],['hemisferio', Tiempo('hemisferio')]];
  const dinamicos = [['utc-time', itm.utc], ['unix-timestamp', itm.timestamp], ['milliseconds', itm.milisegundos]];
  estaticos.forEach(([id,val]) => {const $el = $(`#${id}`);if($el.length && $el.text() !== val) $el.text(val)});
  dinamicos.forEach(([id,val]) => {const $el = $(`#${id}`);if($el.length && $el.text() !== val) {adup($el, val)}});
}

// TIEMPOS EN OTRAS CIUDADES 
function principalesCiudades() {
  $('.world-time-item[data-tz]').each((i, el) => {
    const $item = $(el);
    const tz = $item.data('tz');
    const ahora = new Date();
    const horaCiudad = new Date(ahora.toLocaleString("en-US", {timeZone: tz}));
    const offsetHoras = Math.round((ahora.getTime() - horaCiudad.getTime()) / 3600000);
    adup($item.find('.time-value'), horaCiudad.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit', second: '2-digit'}));
    adup($item.find('.time-offset'), `UTC: ${offsetHoras >= 0 ? '+' : ''}${Math.abs(offsetHoras).toString().padStart(2, '0')}:00`);
    adup($item.find('.time-day'), horaCiudad.toLocaleDateString('es-ES', {weekday: 'long'}).replace(/^\w/, c => c.toUpperCase()));
    const pais = $item.find('.time-city').attr('id')?.split('_')[1]; if (pais && flagUrl(pais)) $item.find('.time-city').html(`<img src="${flagUrl(pais)}" class="flag-icon"> ${$item.find('.time-city').text().trim()}`); //Banderas
  });
}

// 🚀 INICIALIZAR RELOJES ANALÓGICO Y DIGITAL
setInterval(() => {relojAnalogico(); relojDigital(); infoRapida(); principalesCiudades();}, 1000);

// NOTAS RAPIDAS 
// 📝 NOTEPAD ULTRA COMPACTO CON TODOS LOS RECURSOS
$('.ntGuardar').click(function(){
  const texto = $('#ntRapida').val().trim();
  if (!texto) return Notificacion('Escribe algo primero','error', 1000);
  const nuevaNota = {
    id: Date.now(), texto, 
    fechaGuardado: new Date().toISOString()
  };
  savels('ntRapidas', [nuevaNota, ...(getls('ntRapidas') || [])], 720);
  $('#ntRapida').val(''); cargarNotas(); Notificacion('Nota guardada con exíto','success', 1000);
});

$('#ntRapida').on('keyup', e => e.key === 'Enter' && $('.ntGuardar').click());//Teclado

// 📋 CARGAR NOTAS - VERSIÓN LEGIBLE
function cargarNotas() {
  const notas = getls('ntRapidas');
  const html = notas 
  ? notas.map(n => `
    <div class="ntLista" data-id="${n.id}">
    <p>${n.texto}</p>
    <span class="ntTiempo">${fechaLetra(n.fechaGuardado)}</span>
    <span class="ntEliminar"><i class="fa-solid fa-trash"></i></span>
    </div>
  `).join('') : `<div class="ntLista" id="ntLista1"><p>Nota de ejemplo</p><span class="ntTiempo">${fechaLetra()}</span></div>`;
$('.ntListas').html(html);
} cargarNotas();

$('.ntCancelar').click(function(){$('#ntRapida').val('')}); //Limpiando
$(document).on('click', '.ntEliminar', function(){
  const id = $(this).closest('.ntLista').data('id');
  savels('ntRapidas', (getls('ntRapidas') || []).filter(n => n.id != id), 720);
  $(this).closest('.ntLista').fadeOut(300,() => cargarNotas()); Notificacion('Nota eliminada!','success', 1500);
}); //Eliminando nota     

}); 
// ================================================
// 🧮 2. CALCULADORAS LABORALES
// - 💼 Tiempo en Empresa (Completo): Años, meses, días exactos
// - 📅 Solo Años en Empresa: Resultado limpio
// - 📊 Solo Meses en Empresa: Total de meses
// - 📈 Períodos: Trimestres, Cuatrimestres, Semestres automáticos
// - 📆 Días en Empresa: Total de días trabajados
// - ⏰ Horas Laborales: Entrada/salida con pausas
// - ⚖ Diferencias Precisas: Calculadora universal de fechas
// ================================================
$(function(){
$('.fecha-actual').val(Tiempo('iso'));


// 🚀 CALCULADORA HÍBRIDA ULTRA COMPACTA
$('.wkcalc input').on('input', function(){
  const $calc = $(this).closest('.calc-card');
  const [ini, fin] = [$calc.find('.fecha-inicio').val(), $calc.find('.fecha-fin').val()];
  const formato = $calc.data('formato') || 'años meses días';
  
  $calc.find('.result-detail').text(ini && fin ? `Total: ${Tiempo(fin).diferencia(ini, formato)}` : '');
});

// 📊 PERÍODOS ACADÉMICOS/LABORALES
console.log(Tiempo('2023-01-01').diferencia('2025-06-07', 'trimestres')); // "10 trimestres"
console.log(Tiempo('2023-01-01').diferencia('2025-06-07', 'semestres'));  // "5 semestres"
console.log(Tiempo('2023-01-01').diferencia('2025-06-07', 'cuatrimestres')); // "6 cuatrimestres"
console.log(Tiempo('2023-01-01').diferencia('2025-06-07', 'periodos')); // "10 trimestres con 1 mes"

// 🕐 HORAS LABORALES CON input type="time"
console.log(Tiempo().diferencia('', 'horaswk', '09:00', '17:30')); // "8h 30min"
console.log(Tiempo().diferencia('', 'horaswork', '08:15', '16:45')); // "8 horas con 30 minutos"

// 📅 COMBINACIONES CON PERÍODOS
console.log(Tiempo('2023-01-01').diferencia('2025-06-07', 'años trimestres')); // "2 años con 1 trimestre"
console.log(Tiempo('2024-01-01').diferencia('2024-12-31', 'semestres meses')); // "1 semestre con 5 meses"

// 🎯 DATOS COMPLETOS
const datos = Tiempo('2024-01-01').diferencia('2025-06-07', 'completo');
console.log('Trimestres:', datos.trimestres); // 5
console.log('Cuatrimestres:', datos.cuatrimestres); // 3
console.log('Semestres:', datos.semestres); // 2

  

}); 
// ================================================
// 👨👩👧👦 3. FAMILIA (Nueva Sección)
// - 👨 Edad personal: En tiempo real con animación
// - 👩 Familia: Padres, hermanos, pareja con edades automáticas
// - 💕 Tiempo de relación: Aniversarios con cuenta regresiva
// - 🗑 Gestión: Añadir/eliminar personas
// - 📅 Calendario integrado: FullCalendar para eventos familiares
// ================================================
$(function(){
  

}); 
// ================================================
// 🎯 4. METAS (Nueva Sección)
// - 🏆 Metas temporales: Con fechas límite y progreso
// - 📝 Notas por meta: Descripción y seguimiento
// - ✅ Estado: Pendiente/En progreso/Completada
// - ⏰ Cuenta regresiva: Tiempo restante animado
// - 📅 Calendario de metas: Visualización temporal
// ================================================
$(function(){
  

}); 
// ================================================
// 🗺 5. MAPA MUNDIAL (Globo actualizado)
// - 🌍 Mapa plano TopoJSON: Con ciudades principales
// - 🌅 Día/Noche visual: Barra de visualización en tiempo real
// - 🏙 9 ciudades: Lima, NYC, Madrid, Barcelona, París, Pekín, Seúl, Tokio, Sydney
// - ✈ Calculadora Jet Lag: ¡Sorpresa! Cálculo de adaptación temporal
// - ☀ Datos solares: Tabla elegante de amanecer/atardecer
// ================================================
$(function(){
  

}); 
// ================================================
// ⏰ 6. CALC. TIEMPO
// - 📊 Calculadora universal: Entre cualquier fecha
// - 🎂 Contador de edad: Tiempo real con milisegundos
// - ⌛ Eventos importantes: Timeline visual hermoso
// - 🗓 Conversión calendarios: Gregoriano ↔ Juliano
// ================================================
$(function(){
  

}); 



// $(function(){

// function updatePageTitle(section) {
// const titles = {
// 'dashboard': 'Dashboard',
// 'calculators': 'Calculadoras Laborales',
// 'globe': 'Globo Terráqueo',
// 'notepad': 'Bloc de Notas',
// 'time-calc': 'Calculadora de Tiempo',
// 'converters': 'Conversores de Tiempo',
// 'epoch': 'Epoch & UTC Center',
// 'calendar': 'Calendario Inteligente',
// 'timer': 'Sistema de Temporizador',
// 'stopwatch': 'Cronómetros Avanzados',
// 'movies': 'Películas de Viajes en el Tiempo',
// 'dimensions': 'Tiempo en otras Dimensiones',
// 'settings': 'Ajustes y Personalización'
// };

// const subtitles = {
// 'dashboard': 'Bienvenido a tu centro de control del tiempo',
// 'calculators': 'Herramientas para calcular períodos laborales',
// 'globe': 'Zonas horarias alrededor del mundo',
// 'notepad': 'Gestiona tus notas y apuntes',
// 'time-calc': 'Calcula diferencias temporales precisas',
// 'converters': 'Convierte entre formatos temporales',
// 'epoch': 'Centro de timestamps y UTC',
// 'calendar': 'Gestión avanzada de eventos',
// 'timer': 'Temporizadores configurables',
// 'stopwatch': 'Cronómetros de alta precisión',
// 'movies': 'Explorando los viajes en el tiempo en el cine',
// 'dimensions': 'El tiempo a través del universo',
// 'settings': 'Personaliza tu experiencia WiTime'
// };

// $('.page-title h1').text(titles[section] || 'WiTime');
// $('.page-title p').text(subtitles[section] || '');
// }

// // Actualizar enlaces de sección basados en ID
// function updateSectionLinks() {
// $('.nav-links li').each(function() {
// const section = $(this).data('section');
// $(this).attr('data-href', `#${section}`);
// });

// // Manejar cambios de hash en URL
// $(window).on('hashchange', function() {
// const hash = window.location.hash.substr(1);
// if (hash && $(`#${hash}`).length > 0) {
// updateActiveSection(hash);
// }
// });
// }updateSectionLinks()

// // Inicializar interacciones de UI
// function initUIInteractions() {
// // Toggle del menú en móvil
// $('.menu-toggle').on('click', function() {
// $('.sidebar').toggleClass('active');
// });

// // Tab buttons
// $('.tab-button').on('click', function() {
// $('.tab-button').removeClass('active');
// $(this).addClass('active');
// });

// // Botón de actualizar
// $('.refresh-btn').on('click', function() {
// $(this).addClass('loading');

// // Simular carga
// setTimeout(() => {
// $(this).removeClass('loading');
// updateClock(true);
// updateAdvancedTimeInfo();
// showToast('Datos actualizados correctamente', 'success');
// }, 1200);
// });

// // Activar tooltips
// // initTooltips();

// // Cerrar sidebar al hacer click fuera en móvil
// $(document).on('click', function(e) {
// if ($(window).width() < 992) {
// if (!$(e.target).closest('.sidebar').length && 
// !$(e.target).closest('.menu-toggle').length && 
// $('.sidebar').hasClass('active')) {
// $('.sidebar').removeClass('active');
// }
// }
// });

// // Focus en la barra de búsqueda con shortcut
// $(document).on('keydown', function(e) {
// // Ctrl/Cmd + K
// if ((e.ctrlKey || e.metaKey) && e.which === 75) {
// e.preventDefault();
// $('.search-container input').focus();
// }

// // Ctrl/Cmd + S para guardar nota (en la sección de notepad)
// if ((e.ctrlKey || e.metaKey) && e.which === 83 && WT.activeSection === 'notepad') {
// e.preventDefault();
// saveCurrentNote();
// showToast('Nota guardada correctamente', 'success');
// }
// });

// // Doble click en logo para colapsar/expandir sidebar
// $('#logo').on('dblclick', function() {
// $('.sidebar').toggleClass('collapsed');

// // Guardar preferencia
// const isCollapsed = $('.sidebar').hasClass('collapsed');
// localStorage.setItem('sidebarCollapsed', isCollapsed);

// // Mostrar notificación
// showToast(isCollapsed ? 'Menú compactado' : 'Menú expandido', 'info');
// });

// // Click simple en logo para ir al dashboard
// $('#logo').on('click', function(e) {
// // Verificar que no sea parte de un doble click
// const clickDelay = 300; 
// if (!$(this).data('doubleClicked')) {
// $(this).data('doubleClicked', true);

// setTimeout(() => {
// if ($(this).data('doubleClicked')) {
// $(this).data('doubleClicked', false);

// // Ir al dashboard solo si fue un click simple
// if (WT.activeSection !== 'dashboard') {
// updateActiveSection('dashboard');
// updatePageTitle('dashboard');
// window.location.hash = 'dashboard';
// }
// }
// }, clickDelay);
// }
// });

// // Restaurar el estado del sidebar al cargar
// if (localStorage.getItem('sidebarCollapsed') === 'true') {
// $('.sidebar').addClass('collapsed');
// } 
// } initUIInteractions();


// // updatePageTitle('notepad');



// });
