const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/maindev-DtfzNSH2.js","assets/vendor-B0WPN1gq.js"])))=>i.map(i=>d[i]);
import{r as b,g as S}from"./vendor-B0WPN1gq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const k="modulepreload",E=function(e){return"/witime/v17/"+e},g={},M=function(t,r,c){let s=Promise.resolve();if(r&&r.length>0){let o=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),d=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));s=o(r.map(l=>{if(l=E(l),l in g)return;g[l]=!0;const h=l.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":k,h||(u.as="script"),u.crossOrigin="",u.href=l,d&&u.setAttribute("nonce",d),document.head.appendChild(u),h)return new Promise((w,x)=>{u.addEventListener("load",w),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return s.then(o=>{for(const n of o||[])n.status==="rejected"&&i(n.reason);return t().catch(i)})};var P=b();const a=S(P),C=()=>`
    <div class="autowil-game">
      <!-- 🌌 Capa de Efectos -->
      <canvas id="estrellas-canvas"></canvas>
      <canvas id="lluvia-canvas"></canvas>
      
      <!-- 🌍 Mundo 3D -->
      <div class="mundo">
        <div class="cielo">
            <div class="sol-luna"></div>
            <div class="montanas-fondo"></div> <!-- Nuevo: Silueta montañas -->
        </div>

        <!-- 🛣️ Carretera y Paisaje -->
        <div class="pista-contenedor">
            
            <!-- 🌲 NUEVO: Bosques Laterales (USA Style) -->
            <div class="bosque bosque-izq"></div>
            <div class="bosque bosque-der"></div>

            <div class="pista">
                <div class="grid-suelo"></div>
                <div class="borde-pista b-izq"></div>
                <div class="lineas-carril"></div>
                <div class="borde-pista b-der"></div>
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

      <audio id="motor-audio" loop>
         <source src="https://raw.githubusercontent.com/geluksee/nice/main/paz.mp3" type="audio/mpeg">
      </audio>
    </div>
    `,q=()=>{const e=new Date,t=e.getTime()+e.getTimezoneOffset()*6e4;return new Date(t+36e5*-5).getHours()},A=()=>{const e=q();return e>=5&&e<7?"amanecer":e>=7&&e<18?"dia":e>=18&&e<19?"atardecer":"noche"};class y{constructor(t){this.canvas=document.getElementById(t),this.ctx=this.canvas?this.canvas.getContext("2d"):null,this.active=!1,this.elements=[],this.canvas&&this.resize()}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}start(){this.active=!0,this.animate()}stop(){this.active=!1,this.ctx&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}class z extends y{init(){this.elements=Array(100).fill().map(()=>({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,l:Math.random()*20+10,v:Math.random()*10+20})),this.start()}animate(){this.active&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.strokeStyle="rgba(174,194,224,0.5)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.elements.forEach(t=>{this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(t.x,t.y+t.l),t.y+=t.v,t.y>this.canvas.height&&(t.y=-t.l,t.x=Math.random()*this.canvas.width)}),this.ctx.stroke(),requestAnimationFrame(()=>this.animate()))}}class $ extends y{init(){this.elements=Array(150).fill().map(()=>({x:Math.random()*this.canvas.width,y:Math.random()*(this.canvas.height*.6),s:Math.random()*2})),this.start()}animate(){this.active&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#fff",this.elements.forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.s,0,Math.PI*2),this.ctx.fill()}),requestAnimationFrame(()=>this.animate()))}}class L{constructor(){this.lluvia=new z("lluvia-canvas"),this.estrellas=new $("estrellas-canvas"),this.audio=document.getElementById("motor-audio"),this.init()}init(){this.setPeriodo(A()),this.setupEvents(),this.startAudio(),setInterval(()=>{const t=parseInt(a(".vel-num").text()),r=Math.floor(Math.random()*3)-1;a(".vel-num").text(t+r)},500)}startAudio(){if(this.audio){this.audio.volume=.4;const t=this.audio.play();t!==void 0&&t.catch(()=>{a(document).one("click",()=>this.audio.play())})}}setupEvents(){a(".btn-gear").on("click",()=>a(".panel-control").toggleClass("activo")),a(".periodo-selector button").on("click",t=>{const r=a(t.currentTarget).data("p");this.setPeriodo(r)}),a(".slider-vel").on("input",t=>{const r=a(t.target).val(),c=["2s","1s","0.4s"],s=[60,120,240];a(".grid-suelo, .lineas-carril").css("animation-duration",c[r-1]),a(".vel-num").text(s[r-1]),r==3?(a(".hero-car").css("filter","drop-shadow(0 0 10px #0ff)"),a(".fuego").css("animation-duration","0.5s")):(a(".hero-car").css("filter","none"),a(".fuego").css("animation-duration","3s"))})}setPeriodo(t){a(".autowil-game").attr("data-periodo",t),this.lluvia.stop(),this.estrellas.stop(),t==="noche"?(this.lluvia.init(),this.estrellas.init(),a(".luces-freno").css("box-shadow","0 0 30px #ff0000")):t==="atardecer"?this.estrellas.init():a(".luces-freno").css("box-shadow","none")}}const O=(()=>{const e=new Set,t=p("wiSmart"),r=(s,i)=>{var n,d;const o=`${s}:${i}`;if(!e.has(o))if(e.add(o),s==="css"){const l=i;!a(`link[href="${l}"]`).length&&a("<link>",{rel:"stylesheet",href:l}).appendTo("head")}else typeof i=="function"&&((d=(n=i()).catch)==null||d.call(n,l=>console.error("wiSmart js error:",l)))},c=s=>{a.each(s,(i,o)=>a.each(a.isArray(o)?o:[o],(n,d)=>r(i,d))),f("wiSmart",1)};return s=>t?c(s):a(document).one("touchstart scroll click mousemove",()=>c(s))})();(()=>{const e=new Set,t=p("wiSmart"),r=(s,i)=>{var n,d;const o=`${s}:${i}`;if(!e.has(o))if(e.add(o),s==="css"){const l=i;!a(`link[href="${l}"]`).length&&a("<link>",{rel:"stylesheet",href:l}).appendTo("head")}else typeof i=="function"&&((d=(n=i()).catch)==null||d.call(n,l=>console.error("wiSmart js error:",l)))},c=s=>{a.each(s,(i,o)=>a.each(a.isArray(o)?o:[o],(n,d)=>r(i,d))),f("wiSmart",1)};return s=>t?c(s):a(document).one("touchstart scroll click mousemove",()=>c(s))})();(()=>{let e=p("wiClockFormat")||"24";return{get actual(){return e},convertir:c=>{if(e==="24")return c;const[s,i,o]=c.split(":").map(Number),n=s>=12?"PM":"AM";return`${(s%12||12).toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")} ${n}`},cambiar:c=>["12","24"].includes(c)&&e!==c?(e=c,f("wiClockFormat",e,720),!0):!1,es12h:()=>e==="12",es24h:()=>e==="24"}})();function f(e,t,r=24){try{return!e||typeof e!="string"?!1:(localStorage.setItem(e,JSON.stringify({value:t,expiry:Date.now()+r*36e5})),!0)}catch(c){return console.error("esv:",c),!1}}function p(e){try{if(!e||typeof e!="string")return null;const t=localStorage.getItem(e);if(!t)return null;const r=JSON.parse(t);return!r||Date.now()>r.expiry?(localStorage.removeItem(e),null):r.value}catch(t){return console.error("egt:",t),localStorage.removeItem(e),null}}const v=()=>{a(".wiModal").removeClass("active"),a("body").removeClass("modal-open")};a(".wiModalCss").length?a(".wiModalCss").text(".wiModal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.wiModal.active{display:flex}@keyframes mf{from{opacity:0}to{opacity:1}}.wiModal{animation:mf .25s ease}body.modal-open{overflow:hidden}.modalBody{position:relative;background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mp .22s ease;z-index:10001}@keyframes mp{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.modalX{z-index:10002;background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15);position:absolute;top:12px;right:12px}.modalX:hover{transform:scale(1.08);opacity:.95}"):a("head").append('<style class="wiModalCss">.wiModal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.wiModal.active{display:flex}@keyframes mf{from{opacity:0}to{opacity:1}}.wiModal{animation:mf .25s ease}body.modal-open{overflow:hidden}.modalBody{position:relative;background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mp .22s ease;z-index:10001}@keyframes mp{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.modalX{z-index:10002;background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15);position:absolute;top:12px;right:12px}.modalX:hover{transform:scale(1.08);opacity:.95}</style>'),a(document).on("click",".modalX",v).on("click",".wiModal.active",function(e){e.target===this&&v()}).on("keydown",e=>{e.key==="Escape"&&a(".wiModal.active").length&&v()});a("#app").html(C());window.juego=new L;O({css:["https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap","https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"],js:[()=>M(()=>import("./maindev-DtfzNSH2.js"),__vite__mapDeps([0,1]))]});export{a as $};
