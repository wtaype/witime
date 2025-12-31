import $ from 'jquery';

// === 🌍 LÓGICA DE TIEMPO ===
export const getHoraLima = () => {
  const ahora = new Date();
  const utc = ahora.getTime() + ahora.getTimezoneOffset() * 60000;
  const lima = new Date(utc + 3600000 * -5);
  return lima.getHours();
};

export const getPeriodoDia = () => {
  const h = getHoraLima();
  if (h >= 5 && h < 7) return 'amanecer';
  if (h >= 7 && h < 18) return 'dia';
  if (h >= 18 && h < 19) return 'atardecer';
  return 'noche';
};

// === 🌧️ CANVAS DE EFECTOS (LLUVIA/ESTRELLAS) ===
class CanvasEffect {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.active = false;
    this.elements = [];
    if (this.canvas) {
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }
  }
  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  start() {
    this.active = true;
    this.animate();
  }
  stop() {
    this.active = false;
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

export class Lluvia extends CanvasEffect {
  init() {
    if (!this.canvas) return;
    this.elements = Array(120)
      .fill()
      .map(() => ({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        l: Math.random() * 25 + 10,
        v: Math.random() * 12 + 18,
      }));
    this.start();
  }
  animate() {
    if (!this.active || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.elements.forEach((e) => {
      this.ctx.moveTo(e.x, e.y);
      this.ctx.lineTo(e.x, e.y + e.l);
      e.y += e.v;
      if (e.y > this.canvas.height) {
        e.y = -e.l;
        e.x = Math.random() * this.canvas.width;
      }
    });
    this.ctx.stroke();
    requestAnimationFrame(() => this.animate());
  }
}

export class Estrellas extends CanvasEffect {
  init() {
    if (!this.canvas) return;
    this.elements = Array(160)
      .fill()
      .map(() => ({
        x: Math.random() * this.canvas.width,
        y: Math.random() * (this.canvas.height * 0.6),
        s: Math.random() * 2 + 0.5,
      }));
    this.start();
  }
  animate() {
    if (!this.active || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#fff';
    this.elements.forEach((e) => {
      this.ctx.beginPath();
      this.ctx.arc(e.x, e.y, e.s, 0, Math.PI * 2);
      this.ctx.fill();
    });
    requestAnimationFrame(() => this.animate());
  }
}

// === 🎮 CONTROLADOR DEL JUEGO ===
// Tiempos en ms (mantén estos nombres para control rápido)
const mensajeSaludo = 60000;          // dura 1 min
const sinMensaje = 500;            // 500 s sin mensajes
const proximoMensaje = 1000;          // pequeña espera antes del siguiente
const duracionMensajes = 60000;       // cada mensaje dura 1 min
const espacioSinMensajes = 500;    // 500 s sin mensajes (usamos igual que sinMensaje)
const ANIM_DIAMANTE_MS = 3000;        // (reservado, no se usa ahora)
const MENSAJE_VISIBLE_MS = duracionMensajes;

export class Juego {
  constructor() {
    this.lluvia = new Lluvia('lluvia-canvas');
    this.estrellas = new Estrellas('estrellas-canvas');
    this.audio = document.getElementById('motor-audio');
    this.mensajes = [
      '¡Feliz Año Nuevo! Dios te bendiga y te guíe. 🎉🙏',
      'Dios va contigo, ánimo y fe. ✨',
      'Dios renueva tus fuerzas cada día. 🕊️',
      'Confía, Dios tiene el control. 🙏',
      'La paz de Dios te acompaña siempre. ❤️',
      '2026 será un año de bendición. 🏆',
    ];
    this.indiceMensaje = 0;
    this.init();
  }

  init() {
    // Ajusta el periodo según la hora real
    this.setPeriodo(getPeriodoDia());
    this.setupEvents();
    this.startAudio();
    this.enableAudioOnGesture();
    this.iniciarSecuenciaMensajes();
    setInterval(() => {
      const base = parseInt($('.vel-num').text(), 10);
      const variacion = Math.floor(Math.random() * 3) - 1;
      $('.vel-num').text(base + variacion);
    }, 500);
  }

  // --- SECUENCIA DE MENSAJES ---
  iniciarSecuenciaMensajes() {
    this.mostrarSaludo();
  }

  getSaludoPorPeriodo() {
    const p = getPeriodoDia(); // siempre según la hora actual
    if (p === 'noche') return '¡Que tengas buena noche! 🌙';
    if (p === 'amanecer') return '¡Buen amanecer! 🌄';
    if (p === 'atardecer') return '¡Que tengas una excelente tarde! 🌆';
    return '¡Que tengas un excelente año! ☀️';
  }

  mostrarSaludo() {
    const saludo = this.getSaludoPorPeriodo();
    this.mostrarOverlay(saludo, mensajeSaludo, () => {
      this.ocultarMensaje();
      // silencio antes del siguiente mensaje del array
      setTimeout(() => this.mostrarMensajeArray(), sinMensaje + proximoMensaje);
    });
  }

  mostrarMensajeArray() {
    const msg = this.mensajes[this.indiceMensaje];
    this.indiceMensaje = (this.indiceMensaje + 1) % this.mensajes.length;
    this.mostrarOverlay(msg, MENSAJE_VISIBLE_MS, () => {
      this.ocultarMensaje();
      // silencio antes de volver al saludo
      setTimeout(() => this.mostrarSaludo(), espacioSinMensajes + proximoMensaje);
    });
  }

  mostrarOverlay(texto, duracion, onFinish) {
    const overlay = $('#mensaje-overlay');
    const textoEl = $('#texto-bonito');
    const progreso = $('.barra-progreso');

    textoEl.text(texto);
    overlay.removeClass('oculto');

    // barra animada
    progreso.css('animation', 'none');
    void progreso[0].offsetWidth;
    progreso.css('animation', `progreso-mensaje ${duracion}ms linear forwards`);

    // al terminar, callback
    setTimeout(() => onFinish && onFinish(), duracion);
  }

  ocultarMensaje() {
    $('#mensaje-overlay').addClass('oculto');
  }

  // --- AUDIO ---
  startAudio() {
    if (this.audio) {
      this.audio.loop = true;
      this.audio.volume = 0.4;
      this.audio.play().catch(() => {});
    }
  }

  enableAudioOnGesture() {
    if (!this.audio) return;
    const handler = () => {
      this.audio.muted = false;
      this.audio.play().catch(() => {});
      document.removeEventListener('click', handler);
      document.removeEventListener('keydown', handler);
    };
    document.addEventListener('click', handler, { once: true });
    document.addEventListener('keydown', handler, { once: true });
  }

  // --- UI & CONTROLES ---
  setupEvents() {
    $('.btn-gear').on('click', () => $('.panel-control').toggleClass('activo'));

    $('.periodo-selector button').on('click', (e) => {
      const p = $(e.currentTarget).data('p');
      this.setPeriodo(p);
    });

    $('.slider-vel').on('input', (e) => {
      const val = $(e.target).val();
      const speeds = ['2s', '1s', '0.4s'];
      const kmh = [60, 120, 240];

      $('.grid-suelo, .lineas-carril').css('animation-duration', speeds[val - 1]);
      $('.vel-num').text(kmh[val - 1]);

      if (val == 3) {
        $('.hero-car').css('filter', 'drop-shadow(0 0 10px #0ff)');
        $('.fuego').css('animation-duration', '0.5s');
      } else {
        $('.hero-car').css('filter', 'none');
        $('.fuego').css('animation-duration', '3s');
      }
    });
  }

  // --- PERÍODO / AMBIENTE ---
  setPeriodo(p) {
    $('.autowil-game').attr('data-periodo', p);

    this.lluvia.stop();
    this.estrellas.stop();

    if (p === 'noche') {
      this.lluvia.init();
      this.estrellas.init();
      $('.luces-freno').css('box-shadow', '0 0 30px #ff0000');
    } else if (p === 'atardecer') {
      this.estrellas.init();
      $('.luces-freno').css('box-shadow', '0 0 18px #ff4d4d');
    } else {
      $('.luces-freno').css('box-shadow', 'none');
    }
  }
}