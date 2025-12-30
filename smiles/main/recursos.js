import $ from 'jquery';

// === 🌍 LÓGICA DE TIEMPO ===
export const getHoraLima = () => {
  const ahora = new Date();
  const utc = ahora.getTime() + (ahora.getTimezoneOffset() * 60000);
  const lima = new Date(utc + (3600000 * -5));
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
    if(this.canvas) this.resize();
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start() { this.active = true; this.animate(); }
  stop() { this.active = false; if(this.ctx) this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height); }
}

export class Lluvia extends CanvasEffect {
  init() {
    this.elements = Array(100).fill().map(() => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      l: Math.random() * 20 + 10,
      v: Math.random() * 10 + 20
    }));
    this.start();
  }
  
  animate() {
    if(!this.active) return;
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.elements.forEach(e => {
      this.ctx.moveTo(e.x, e.y);
      this.ctx.lineTo(e.x, e.y + e.l);
      e.y += e.v;
      if(e.y > this.canvas.height) { e.y = -e.l; e.x = Math.random() * this.canvas.width; }
    });
    this.ctx.stroke();
    requestAnimationFrame(() => this.animate());
  }
}

export class Estrellas extends CanvasEffect {
  init() {
    this.elements = Array(150).fill().map(() => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * (this.canvas.height * 0.6),
      s: Math.random() * 2
    }));
    this.start();
  }
  
  animate() {
    if(!this.active) return;
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.ctx.fillStyle = '#fff';
    this.elements.forEach(e => {
      this.ctx.beginPath();
      this.ctx.arc(e.x, e.y, e.s, 0, Math.PI*2);
      this.ctx.fill();
    });
    requestAnimationFrame(() => this.animate());
  }
}

// === 🎮 CONTROLADOR DEL JUEGO ===
export class Juego {
  constructor() {
    this.lluvia = new Lluvia('lluvia-canvas');
    this.estrellas = new Estrellas('estrellas-canvas');
    this.audio = document.getElementById('motor-audio');
    this.init();
  }

  init() {
    this.setPeriodo(getPeriodoDia());
    this.setupEvents();
    this.startAudio();
    
    // Loop de velocidad simulada
    setInterval(() => {
      const base = parseInt($('.vel-num').text());
      const variacion = Math.floor(Math.random() * 3) - 1;
      $('.vel-num').text(base + variacion);
    }, 500);
  }

  startAudio() {
    if(this.audio) {
        this.audio.volume = 0.4;
        const playPromise = this.audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                $(document).one('click', () => this.audio.play());
            });
        }
    }
  }

  setupEvents() {
    $('.btn-gear').on('click', () => $('.panel-control').toggleClass('activo'));
    
    $('.periodo-selector button').on('click', (e) => {
      const p = $(e.currentTarget).data('p');
      this.setPeriodo(p);
    });

    $('.slider-vel').on('input', (e) => {
      const val = $(e.target).val();
      const speeds = ['2s', '1s', '0.4s']; // Lento, Medio, Rápido
      const kmh = [60, 120, 240];
      
      $('.grid-suelo, .lineas-carril').css('animation-duration', speeds[val-1]);
      $('.vel-num').text(kmh[val-1]);
      
      // Efecto visual de velocidad en el coche
      if(val == 3) {
        $('.hero-car').css('filter', 'drop-shadow(0 0 10px #0ff)');
        $('.fuego').css('animation-duration', '0.5s');
      } else {
        $('.hero-car').css('filter', 'none');
        $('.fuego').css('animation-duration', '3s');
      }
    });
  }

  setPeriodo(p) {
    $('.autowil-game').attr('data-periodo', p);
    
    // Reset efectos
    this.lluvia.stop();
    this.estrellas.stop();

    if(p === 'noche') {
      this.lluvia.init();
      this.estrellas.init();
      $('.luces-freno').css('box-shadow', '0 0 30px #ff0000');
    } else if (p === 'atardecer') {
      this.estrellas.init();
    } else {
      // Dia
      $('.luces-freno').css('box-shadow', 'none');
    }
  }
}