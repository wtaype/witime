const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/maindev-BRo240YE.js","assets/vendor-B0WPN1gq.js"])))=>i.map(i=>d[i]);
import{r as M,g as j}from"./vendor-B0WPN1gq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const E="modulepreload",k=function(t){return"/witime/"+t},g={},P=function(e,r,n){let a=Promise.resolve();if(r&&r.length>0){let o=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));a=o(r.map(l=>{if(l=k(l),l in g)return;g[l]=!0;const h=l.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":E,h||(u.as="script"),u.crossOrigin="",u.href=l,d&&u.setAttribute("nonce",d),document.head.appendChild(u),h)return new Promise((x,S)=>{u.addEventListener("load",x),u.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return a.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var z=M();const s=j(z),A=()=>`
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
    `,C=()=>{const t=new Date,e=t.getTime()+t.getTimezoneOffset()*6e4;return new Date(e+36e5*-5).getHours()},y=()=>{const t=C();return t>=5&&t<7?"amanecer":t>=7&&t<18?"dia":t>=18&&t<19?"atardecer":"noche"};class w{constructor(e){this.canvas=document.getElementById(e),this.ctx=this.canvas?this.canvas.getContext("2d"):null,this.active=!1,this.elements=[],this.canvas&&(this.resize(),window.addEventListener("resize",()=>this.resize()))}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}start(){this.active=!0,this.animate()}stop(){this.active=!1,this.ctx&&this.canvas&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}class D extends w{init(){this.canvas&&(this.elements=Array(120).fill().map(()=>({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,l:Math.random()*25+10,v:Math.random()*12+18})),this.start())}animate(){!this.active||!this.ctx||(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.strokeStyle="rgba(174,194,224,0.5)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.elements.forEach(e=>{this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(e.x,e.y+e.l),e.y+=e.v,e.y>this.canvas.height&&(e.y=-e.l,e.x=Math.random()*this.canvas.width)}),this.ctx.stroke(),requestAnimationFrame(()=>this.animate()))}}class L extends w{init(){this.canvas&&(this.elements=Array(160).fill().map(()=>({x:Math.random()*this.canvas.width,y:Math.random()*(this.canvas.height*.6),s:Math.random()*2+.5})),this.start())}animate(){!this.active||!this.ctx||(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#fff",this.elements.forEach(e=>{this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.s,0,Math.PI*2),this.ctx.fill()}),requestAnimationFrame(()=>this.animate()))}}const q=6e4,O=500,b=1e3,T=6e4,$=500,I=T;class _{constructor(){this.lluvia=new D("lluvia-canvas"),this.estrellas=new L("estrellas-canvas"),this.audio=document.getElementById("motor-audio"),this.mensajes=["¡Feliz Año Nuevo! Dios te bendiga y te guíe. 🎉🙏","Dios va contigo, ánimo y fe. ✨","Dios renueva tus fuerzas cada día. 🕊️","Confía, Dios tiene el control. 🙏","La paz de Dios te acompaña siempre. ❤️","2026 será un año de bendición. 🏆","Que el amor de Dios te llene de esperanza este nuevo año. 💫","Que este 2026 esté lleno de milagros y bendiciones. 🙌","Dios tiene un propósito maravilloso para ti en este nuevo año. 🌟","Con Dios en tu corazón, nada es imposible. 💖","Este nuevo año, que cada día esté lleno de su luz y amor. 🌞","Que el Señor te guíe hacia nuevas oportunidades en 2026. 🚀","Que el Espíritu Santo te llene de sabiduría este año. 📖","Cada amanecer es una bendición de Dios, ¡disfrútalo! 🌅","Que la gracia de Dios te acompañe en cada paso que tomes este año. 🙏"],this.indiceMensaje=0,this.init()}init(){this.setPeriodo(y()),this.setupEvents(),this.startAudio(),this.enableAudioOnGesture(),this.iniciarSecuenciaMensajes(),setInterval(()=>{const e=parseInt(s(".vel-num").text(),10),r=Math.floor(Math.random()*3)-1;s(".vel-num").text(e+r)},500)}iniciarSecuenciaMensajes(){this.mostrarSaludo()}getSaludoPorPeriodo(){const e=y();return e==="noche"?"¡Que tengas buena noche! 🌙":e==="amanecer"?"¡Buen amanecer! 🌄":e==="atardecer"?"¡Que tengas una excelente tarde! 🌆":"¡Que tengas un excelente Año 2026! ☀️"}mostrarSaludo(){const e=this.getSaludoPorPeriodo();this.mostrarOverlay(e,q,()=>{this.ocultarMensaje(),setTimeout(()=>this.mostrarMensajeArray(),O+b)})}mostrarMensajeArray(){const e=this.mensajes[this.indiceMensaje];this.indiceMensaje=(this.indiceMensaje+1)%this.mensajes.length,this.mostrarOverlay(e,I,()=>{this.ocultarMensaje(),setTimeout(()=>this.mostrarSaludo(),$+b)})}mostrarOverlay(e,r,n){const a=s("#mensaje-overlay"),i=s("#texto-bonito"),o=s(".barra-progreso");i.text(e),a.removeClass("oculto"),o.css("animation","none"),o[0].offsetWidth,o.css("animation",`progreso-mensaje ${r}ms linear forwards`),setTimeout(()=>n&&n(),r)}ocultarMensaje(){s("#mensaje-overlay").addClass("oculto")}startAudio(){this.audio&&(this.audio.loop=!0,this.audio.volume=.4,this.audio.play().catch(()=>{}))}enableAudioOnGesture(){if(!this.audio)return;const e=()=>{this.audio.muted=!1,this.audio.play().catch(()=>{}),document.removeEventListener("click",e),document.removeEventListener("keydown",e)};document.addEventListener("click",e,{once:!0}),document.addEventListener("keydown",e,{once:!0})}setupEvents(){s(".btn-gear").on("click",()=>s(".panel-control").toggleClass("activo")),s(".periodo-selector button").on("click",e=>{const r=s(e.currentTarget).data("p");this.setPeriodo(r)}),s(".slider-vel").on("input",e=>{const r=s(e.target).val(),n=["2s","1s","0.4s"],a=[60,120,240];s(".grid-suelo, .lineas-carril").css("animation-duration",n[r-1]),s(".vel-num").text(a[r-1]),r==3?(s(".hero-car").css("filter","drop-shadow(0 0 10px #0ff)"),s(".fuego").css("animation-duration","0.5s")):(s(".hero-car").css("filter","none"),s(".fuego").css("animation-duration","3s"))})}setPeriodo(e){s(".autowil-game").attr("data-periodo",e),this.lluvia.stop(),this.estrellas.stop(),e==="noche"?(this.lluvia.init(),this.estrellas.init(),s(".luces-freno").css("box-shadow","0 0 30px #ff0000")):e==="atardecer"?(this.estrellas.init(),s(".luces-freno").css("box-shadow","0 0 18px #ff4d4d")):s(".luces-freno").css("box-shadow","none")}}const B=(()=>{const t=new Set,e=f("wiSmart"),r=(a,i)=>{var c,d;const o=`${a}:${i}`;if(!t.has(o))if(t.add(o),a==="css"){const l=i;!s(`link[href="${l}"]`).length&&s("<link>",{rel:"stylesheet",href:l}).appendTo("head")}else typeof i=="function"&&((d=(c=i()).catch)==null||d.call(c,l=>console.error("wiSmart js error:",l)))},n=a=>{s.each(a,(i,o)=>s.each(s.isArray(o)?o:[o],(c,d)=>r(i,d))),p("wiSmart",1)};return a=>e?n(a):s(document).one("touchstart scroll click mousemove",()=>n(a))})();(()=>{const t=new Set,e=f("wiSmart"),r=(a,i)=>{var c,d;const o=`${a}:${i}`;if(!t.has(o))if(t.add(o),a==="css"){const l=i;!s(`link[href="${l}"]`).length&&s("<link>",{rel:"stylesheet",href:l}).appendTo("head")}else typeof i=="function"&&((d=(c=i()).catch)==null||d.call(c,l=>console.error("wiSmart js error:",l)))},n=a=>{s.each(a,(i,o)=>s.each(s.isArray(o)?o:[o],(c,d)=>r(i,d))),p("wiSmart",1)};return a=>e?n(a):s(document).one("touchstart scroll click mousemove",()=>n(a))})();(()=>{let t=f("wiClockFormat")||"24";return{get actual(){return t},convertir:n=>{if(t==="24")return n;const[a,i,o]=n.split(":").map(Number),c=a>=12?"PM":"AM";return`${(a%12||12).toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${c}`},cambiar:n=>["12","24"].includes(n)&&t!==n?(t=n,p("wiClockFormat",t,720),!0):!1,es12h:()=>t==="12",es24h:()=>t==="24"}})();function p(t,e,r=24){try{return!t||typeof t!="string"?!1:(localStorage.setItem(t,JSON.stringify({value:e,expiry:Date.now()+r*36e5})),!0)}catch(n){return console.error("esv:",n),!1}}function f(t){try{if(!t||typeof t!="string")return null;const e=localStorage.getItem(t);if(!e)return null;const r=JSON.parse(e);return!r||Date.now()>r.expiry?(localStorage.removeItem(t),null):r.value}catch(e){return console.error("egt:",e),localStorage.removeItem(t),null}}const v=()=>{s(".wiModal").removeClass("active"),s("body").removeClass("modal-open")};s(".wiModalCss").length?s(".wiModalCss").text(".wiModal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.wiModal.active{display:flex}@keyframes mf{from{opacity:0}to{opacity:1}}.wiModal{animation:mf .25s ease}body.modal-open{overflow:hidden}.modalBody{position:relative;background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mp .22s ease;z-index:10001}@keyframes mp{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.modalX{z-index:10002;background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15);position:absolute;top:12px;right:12px}.modalX:hover{transform:scale(1.08);opacity:.95}"):s("head").append('<style class="wiModalCss">.wiModal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.wiModal.active{display:flex}@keyframes mf{from{opacity:0}to{opacity:1}}.wiModal{animation:mf .25s ease}body.modal-open{overflow:hidden}.modalBody{position:relative;background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mp .22s ease;z-index:10001}@keyframes mp{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.modalX{z-index:10002;background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15);position:absolute;top:12px;right:12px}.modalX:hover{transform:scale(1.08);opacity:.95}</style>'),s(document).on("click",".modalX",v).on("click",".wiModal.active",function(t){t.target===this&&v()}).on("keydown",t=>{t.key==="Escape"&&s(".wiModal.active").length&&v()});s("#app").html(A());window.juego=new _;B({css:["https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap","https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap","https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"],js:[()=>P(()=>import("./maindev-BRo240YE.js"),__vite__mapDeps([0,1]))]});export{s as $};
