import{$ as e,n as c,p as m,t as u,u as w,v as h,k as d,h as M,q as _,j as E,i as F,x as j,l as x,y as D,z as S,A as T,B as V,C as Y,M as l,s as f,e as q,D as $,E as B,F as O}from"./widev-CXcJYUDt.js";function W(){e(`
<style class="wiAuthCss">
.authModals .modal-content{max-width:430px;position:relative;border-radius:1vh;box-shadow:var(--bsh);background:var(--F);overflow:hidden;padding:0;border:none;animation:slideUpModal 0.4s ease;}@keyframes slideUpModal{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}.authModals .modal-header{border:none;padding:15px;background:transparent;text-align:right;position:absolute;right:0;z-index:10;}.authModals .close-modal{color:var(--mco);font-size:1.5rem;background:transparent;border:none;cursor:pointer;transition:all 0.2s ease;text-shadow:0 1px 2px rgba(0,0,0,0.2);}.authModals .close-modal:hover{transform:scale(1.1);}.auth-form{padding:0 40px 40px;display:flex;flex-direction:column;align-items:center;}.auth-logo{width:80px;height:80px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:10px;margin-top:40px;box-shadow:0 4px 15px rgba(255,232,0,0.3);}.auth-logo img{width:100%;height:auto;}.auth-title{font-family:var(--ff_P);font-size:1.8rem;font-weight:700;color:var(--mco);margin-bottom:25px;text-align:center;}.auth-title span{color:#FFE800;}.auth-text{color:var(--tx);font-size:0.9rem;margin:15px 0 5px;align-self:flex-start;}#loginForm,#registroForm,#recuperarForm{width:100%;gap:16px;position:relative;z-index:5;}.form-group{width:100%;margin-bottom:5px;position:relative;}.input-icon{position:relative;display:flex;align-items:center;}.input-icon i{position:absolute;left:15px;color:var(--mco);opacity:0.7;transition:all 0.3s;}.input-icon .togglePass{position:absolute;left:90%;cursor:pointer;color:#bbb;}.input-icon input{width:100%;padding:15px 15px 15px 45px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);font-size:1rem;color:var(--tx);transition:all 0.3s;}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:none;}.input-icon input:focus + i{color:var(--hv);opacity:1;}.input-icon input::placeholder{color:var(--txe);opacity:0.6;}.datepicker{cursor:pointer;}.form-check{display:flex;align-items:center;margin:5px 0;}.form-check input[type="checkbox"]{display:inline-block;width:16px;height:16px;margin-right:8px;cursor:pointer;accent-color:var(--mco);}.form-check label{color:var(--tx);cursor:pointer;font-size:0.9rem;}.btn-auth{width:100%;padding:15px;background:var(--mco);color:var(--txa);border:none;border-radius:10px;font-size:1rem;font-weight:600;cursor:pointer;transition:all 0.3s ease;margin-top:15px;box-shadow:0 4px 12px var(--bxs);}.btn-auth:hover{background:var(--hva);transform:translateY(-2px);box-shadow:0 6px 15px var(--bxs);}.inactivo{opacity:.7;}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:20px;flex-wrap:wrap;}.auth-links span{color:var(--mco);text-decoration:none;font-size:0.9rem;cursor:pointer;transition:all 0.2s ease;padding:5px 0;}.auth-links span:hover{color:var(--hv);text-decoration:underline;}.auth-links .volverLogin{display:flex;align-items:center;gap:5px;margin:10px auto;}.auth-links .volverLogin i{font-size:0.8rem;color:inherit;}.auth-form .form-group{animation:fadeIn 0.5s ease backwards;}.auth-form .form-group:nth-child(1){animation-delay:0.1s}.auth-form .form-group:nth-child(2){animation-delay:0.2s;}.auth-form .form-group:nth-child(3){animation-delay:0.3s;}.auth-form .form-group:nth-child(4){animation-delay:0.4s;}.auth-form .form-group:nth-child(5){animation-delay:0.5s;}.auth-form .form-group:nth-child(6){animation-delay:0.6s;}.auth-form .form-group:nth-child(7){animation-delay:0.7s;}.auth-form .form-group:nth-child(8){animation-delay:0.8s;}@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;}#registroModal .modal-content{max-width:568px;}@media (max-width:770px){:root{--fz_s1:1.12vw;--fz_s2:1.27vw;--fz_s3:1.32vw;--fz_s4:1.47vw;--fz_m:1.5vw;--fz_m1:1.55vw;--fz_m2:1.60vw;--fz_m3:1.65vw;--fz_l:1.70vw;--fz_l1:1.75vw;--fz_l2:1.80vw;--fz_l3:1.85vw;--fz_t1:2.30vw;--fz_t2:3.30vw;}}@media (max-width:576px){:root{--fz_s1:2.12vw;--fz_s2:2.27vw;--fz_s3:2.32vw;--fz_s4:2.47vw;--fz_m:2.50vw;--fz_m1:2.55vw;--fz_m2:2.6vw;--fz_m3:2.65vw;--fz_l:2.70vw;--fz_l1:2.75vw;--fz_l2:2.80vw;--fz_l3:2.85vw;--fz_t1:3.30vw;--fz_t2:4.30vw;}.auth-form{padding:0 20px 30px;}.auth-title{font-size:1.5rem;}.auth-form::before{height:100px;}.auth-logo{width:70px;height:70px;margin-top:25px;}.input-icon input{padding:12px 12px 12px 40px;font-size:0.9rem;}.btn-auth{padding:12px;}#registroModal #registroForm{display:flex;flex-direction:column;}}
</<style>`).appendTo("head");const P=`
<div id="loginModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Login <span>Beneficios</span></h2>
      
      <form id="loginForm" class="dfd">
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Recordar mis datos</label>
        </div>
        <button type="button" id="Login" class="inactivo btn-auth">Iniciar Sesión</button>
      </form>
      
      <div class="auth-links">
        <span class="olvidastePass">¿Olvidaste tu contraseña?</span>
        <span class="crearCuenta">Crear cuenta</span>
      </div>
    </div>
  </div>
</div>`,R=`
<div id="registroModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Crear <span>Cuenta</span></h2>
      
      <form id="registroForm" class="dfd">
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-envelope"></i>
            <input type="email" id="regEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user"></i>
            <input type="text" id="regUsuario" placeholder="Crear usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regNombre" placeholder="Nombre" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regApellidos" placeholder="Apellidos" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-phone"></i>
            <input type="text" id="regCelular" placeholder="Celular" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-cake-candles"></i>
            <input type="date" id="regFechaNacimiento" placeholder="Fecha de nacimiento" class="datepicker" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword1" placeholder="Confirmar Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <button type="button" id="Registrar" class="inactivo btn-auth">Registrarme</button>
      </form>
      
      <div class="auth-links">
        <span class="conCuenta">Ya tengo cuenta</span>
      </div>
    </div>
  </div>
</div>`,A=`
<div id="recuperarModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Restablecer <span>Contraseña</span></h2>
      
      <form id="recuperarForm" class="dfd">
        <p class="auth-text">Ingresa tu Correo o usuario:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="recEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <p class="auth-text">Valida tu fecha de nacimiento:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-cake-candles"></i>
            <input type="date" id="recFechaNacimiento" placeholder="Fecha Nacimiento" class="datepicker" required>
          </div>
        </div>
        <button type="button" id="Recuperar" class="inactivo btn-auth">Restablecer Contraseña</button>
      </form>
      
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;e(function(){let n="smiles",L=3e3,b="wiAuthIn",y="wiAuthRol",g="smile";e(".login").click(()=>c("loginModal")),e(".registrar").click(()=>c("registroModal")),e(".crearCuenta").click(()=>{c("registroModal"),m("loginModal")}),e(".conCuenta").click(()=>{c("loginModal"),m("registroModal")}),e(".olvidastePass").click(()=>{c("recuperarModal"),m("loginModal")}),e(".volverLogin").click(()=>{c("loginModal"),m("recuperarModal")}),e(".togglePass").click(function(){const a=e(this).siblings("input"),o=a.attr("type")==="password";a.attr("type",o?"text":"password"),e(this).toggleClass("fa-eye fa-eye-slash")}),e('.miauth input:not([type="checkbox"])').on("click",function(){u(this,e(this).attr("placeholder"))}),e("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){e(this).val(e(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recFechaNacimiento","#Recuperar"],["#recEmail","#Recuperar"]].forEach(([a,o])=>{e(a).on("input keyup",i=>{e(o).removeClass("inactivo"),i.key==="Enter"&&(e(o).click(),e(o).addClass("inactivo"))})});const k={regEmail:[a=>a.toLowerCase(),a=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(a)||"Correo inválido"],regUsuario:[a=>a.toLowerCase().replace(/[^a-z0-9_]/g,""),a=>a.length>=4||"Usuario 4-20 caracteres"],regNombre:[a=>a.trim(),a=>a.length>0||"Ingrese nombre"],regApellidos:[a=>a.trim(),a=>a.length>0||"Ingrese apellidos"],regCelular:[a=>a.replace(/\D/g,""),a=>a.length>=8||"Mínimo 8 dígitos"],regFechaNacimiento:[a=>a,a=>O(a)>=13||"Tienes que ser mayor de 13 años"],regPassword:[a=>a,a=>a.length>=6||"Mínimo 6 caracteres"],regPassword1:[a=>a,a=>a===e("#regPassword").val()||"Contraseñas no coinciden"]};e.each(k,function(a,[o,i]){e(`#${a}`).on("blur",function(){const s=o(e(this).val());e(this).val(s);const t=i(s);t!==!0&&u(this,t,"error")})});let z=!1;e("#regUsuario").on("blur focus",async function(){const a=e(this).val();if(a.length>=3)try{const i=(await w(h(d,n,a))).exists();z=!i,u(this,`Usuario ${i?"no disponible":"disponible ✅"}`,i?"error":"success","top",7e3)}catch(o){console.error(o)}});let C=!1;e("#regEmail").on("blur focus",async function(){const a=e(this).val();if(a.length>=3)try{const i=!(await M(_(E(d,n),F("email","==",a)))).empty;C=!i,u(this,`Email ${i?"no disponible":"disponible ✅"}`,i?"error":"success","top",7e3)}catch(o){console.error(o)}}),e("#Registrar").click(async function(){const a=[[z,e("#regUsuario")[0],"Usuario no disponible"],[C,e("#regEmail")[0],"Email no disponible"],...Object.entries(k).map(([o,[i,s]])=>{const t=e(`#${o}`),r=i(t.val()),p=s(r);return[p===!0,t[0],p!==!0?p:""]})];for(const[o,i,s]of a)if(!o&&s&&(u(i,s,"error"),i.focus(),!0))return;try{const o=["regEmail","regUsuario","regNombre","regApellidos","regCelular","regPassword"],[i,s,t,r,p,N]=o.map(I=>e("#"+I).val().trim()),{user:v}=await j(x,i,N);await Promise.all([D(v,{displayName:s}),S(v)]),console.log("Registro completo en Auth ✅"+Date());const U=h(d,n,s);await T(U,{usuario:s,email:i,nombre:t,apellidos:r,celular:p,rol:g,fechaNacimiento:Y(e("#regFechaNacimiento").val()),creacion:V(),uid:v.uid}),console.log("Registro completo en Firestore ✅"+Date()),l("Registro completado! ✅")}catch(o){l({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[o.code]||o.message)||console.error(o)}finally{f(b,"wIn",450),f(y,g,450),setTimeout(()=>q(g),L)}}),e("#Login").click(async function(){try{const[a,o]=["#email","#password"].map(t=>e(t).val());let i=null,s=a;if(!a.includes("@"))try{i=await w(h(d,n,a)),s=i.exists()?i.data().email:null}catch(t){console.error("ebdUsuario",t),s=null}await $(x,s,o),f(b,"wIn",450),f(y,i.data().rol,450),q(i.data().rol)}catch(a){l({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[a.code]||a.message,"error"),console.error(a)}}),e("#Recuperar").click(async function(){try{const[a,o]=["#recEmail","#recFechaNacimiento"].map(r=>e(r).val()),i=a.includes("@")?a:await(async()=>{const r=await w(h(d,n,a));return r.exists()?r.data().email:null})();if(!i)return l("Usuario no registrado","error");const s=await M(_(E(d,n),F("email","==",i)));if(s.empty)return l("Email incorrecto o no existe","error");if(s.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==o)return l("Fecha de nacimiento incorrecta","error");await B(x,i),l("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(a){console.error(a)}})}),e(".miauth").html(P+R+A)}W();
