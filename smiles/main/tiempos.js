import $ from 'jquery';

export const autoTiempo = () => {
    return `
    <div class="autowil-game" data-periodo="atardecer">
      <!-- 🌌 Capa de Efectos -->
      <canvas id="estrellas-canvas"></canvas>
      <canvas id="lluvia-canvas"></canvas>
      
      <!-- 🌍 Mundo 3D -->
      <div class="mundo">
        <div class="cielo">
            <div class="sol-luna"></div>
            <div class="montanas-fondo"></div>
        </div>

        <!-- 🛣️ Carretera y Paisaje -->
        <div class="pista-contenedor">
            <div class="bosque bosque-izq"></div>
            <div class="bosque bosque-der"></div>

            <div class="pista">
                <div class="grid-suelo"></div>
                <div class="borde-pista b-izq"></div>
                <div class="lineas-carril"></div>
                <div class="borde-pista b-der"></div>

                <!-- Diamante con mensaje -->
                <div id="diamante-item" class="diamante oculto">
                    <div class="diamante-shape">💎</div>
                </div>
            </div>
        </div>

        <!-- 🏎️ Superdeportivo -->
        <div class="hero-car">
            <div class="chasis">
                <div class="techo"></div>
                <div class="cristal-trasero"></div>
                <div class="aleron"></div>
                <div class="cuerpo-trasero">
                    <div class="luces-freno"></div>
                    <div class="placa-neon">AUTOWIL</div>
                    <div class="escapes">
                        <div class="fuego"></div>
                        <div class="fuego"></div>
                    </div>
                </div>
                <div class="difusor"></div>
            </div>
            <div class="llantas">
                <div class="llanta l-izq"></div>
                <div class="llanta l-der"></div>
            </div>
            <div class="sombra-suelo"></div>
        </div>
      </div>

      <!-- 📊 HUD -->
      <div class="hud">
        <div class="velocimetro">
            <span class="vel-num">120</span>
            <span class="vel-unit">KM/H</span>
        </div>
        <div class="marcha">W5</div>
      </div>

      <!-- ✨ Mensaje Bonito -->
      <div id="mensaje-overlay" class="mensaje-overlay oculto">
        <div class="mensaje-card">
          <span class="icono-mensaje">✨</span>
          <p id="texto-bonito">Aquí va el mensaje positivo...</p>
          <div class="barra-tiempo">
            <div class="barra-progreso"></div>
          </div>
        </div>
      </div>

      <!-- ⚙️ Controles -->
      <div class="btn-gear"><i class="fa-solid fa-gear"></i></div>
      
      <div class="panel-control">
        <h3>Configuración</h3>
        <div class="control-group">
            <label>Velocidad</label>
            <input type="range" class="slider-vel" min="1" max="3" step="1" value="2">
        </div>
        <div class="control-group">
            <label>Ambiente</label>
            <div class="periodo-selector">
                <button data-p="amanecer">🌄</button>
                <button data-p="dia">☀️</button>
                <button data-p="atardecer">🌆</button>
                <button data-p="noche">🌃</button>
            </div>
        </div>
      </div>

      <audio id="motor-audio" loop autoplay playsinline>
         <source src="https://raw.githubusercontent.com/geluksee/nice/main/paz.mp3" type="audio/mpeg">
      </audio>
    </div>
    `; 
};