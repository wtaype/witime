import $ from 'jquery';
import { autoTiempo } from './main/tiempos.js';
import { Juego } from './main/recursos.js';
import { wiSmart } from './widev.js'; 

// Renderizar HTML
$('#app').html(autoTiempo()); 
window.juego = new Juego();
// Cargar recursos
wiSmart({
  css: [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css',
  ],
  js: [() => import('./maindev.js')  ]
});