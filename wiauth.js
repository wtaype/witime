import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './firebase/init.js';

// Auth imports
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  updateProfile, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

// Firestore imports
import { getFirestore, setDoc, getDoc, deleteDoc, onSnapshot, 
  collection, doc, updateDoc, query, where, getDocs, serverTimestamp} from "firebase/firestore";

// widev imports
import { 
  witip, Capi, Mensaje, Notificacion, showLoading, fechaLocal,
  openModal, closeModal, closeAllModals, savels, getls, accederRol, calcularEdad
} from './widev.js';


export function wiAuth(){
const wiAuthCss = `
<style class="wiAuthCss">
.authModals .modal-content{max-width:430px;position:relative;border-radius:1vh;box-shadow:var(--bsh);background:var(--F);overflow:hidden;padding:0;border:none;animation:slideUpModal 0.4s ease;}@keyframes slideUpModal{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}.authModals .modal-header{border:none;padding:15px;background:transparent;text-align:right;position:absolute;right:0;z-index:10;}.authModals .close-modal{color:var(--mco);font-size:1.5rem;background:transparent;border:none;cursor:pointer;transition:all 0.2s ease;text-shadow:0 1px 2px rgba(0,0,0,0.2);}.authModals .close-modal:hover{transform:scale(1.1);}.auth-form{padding:0 40px 40px;display:flex;flex-direction:column;align-items:center;}.auth-logo{width:80px;height:80px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:10px;margin-top:40px;box-shadow:0 4px 15px rgba(255,232,0,0.3);}.auth-logo img{width:100%;height:auto;}.auth-title{font-family:var(--ff_P);font-size:1.8rem;font-weight:700;color:var(--mco);margin-bottom:25px;text-align:center;}.auth-title span{color:#FFE800;}.auth-text{color:var(--tx);font-size:0.9rem;margin:15px 0 5px;align-self:flex-start;}#loginForm,#registroForm,#recuperarForm{width:100%;gap:16px;position:relative;z-index:5;}.form-group{width:100%;margin-bottom:5px;position:relative;}.input-icon{position:relative;display:flex;align-items:center;}.input-icon i{position:absolute;left:15px;color:var(--mco);opacity:0.7;transition:all 0.3s;}.input-icon .togglePass{position:absolute;left:90%;cursor:pointer;color:#bbb;}.input-icon input{width:100%;padding:15px 15px 15px 45px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);font-size:1rem;color:var(--tx);transition:all 0.3s;}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:none;}.input-icon input:focus + i{color:var(--hv);opacity:1;}.input-icon input::placeholder{color:var(--txe);opacity:0.6;}.datepicker{cursor:pointer;}.form-check{display:flex;align-items:center;margin:5px 0;}.form-check input[type="checkbox"]{display:inline-block;width:16px;height:16px;margin-right:8px;cursor:pointer;accent-color:var(--mco);}.form-check label{color:var(--tx);cursor:pointer;font-size:0.9rem;}.btn-auth{width:100%;padding:15px;background:var(--mco);color:var(--txa);border:none;border-radius:10px;font-size:1rem;font-weight:600;cursor:pointer;transition:all 0.3s ease;margin-top:15px;box-shadow:0 4px 12px var(--bxs);}.btn-auth:hover{background:var(--hva);transform:translateY(-2px);box-shadow:0 6px 15px var(--bxs);}.inactivo{opacity:.7;}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:20px;flex-wrap:wrap;}.auth-links span{color:var(--mco);text-decoration:none;font-size:0.9rem;cursor:pointer;transition:all 0.2s ease;padding:5px 0;}.auth-links span:hover{color:var(--hv);text-decoration:underline;}.auth-links .volverLogin{display:flex;align-items:center;gap:5px;margin:10px auto;}.auth-links .volverLogin i{font-size:0.8rem;color:inherit;}.auth-form .form-group{animation:fadeIn 0.5s ease backwards;}.auth-form .form-group:nth-child(1){animation-delay:0.1s}.auth-form .form-group:nth-child(2){animation-delay:0.2s;}.auth-form .form-group:nth-child(3){animation-delay:0.3s;}.auth-form .form-group:nth-child(4){animation-delay:0.4s;}.auth-form .form-group:nth-child(5){animation-delay:0.5s;}.auth-form .form-group:nth-child(6){animation-delay:0.6s;}.auth-form .form-group:nth-child(7){animation-delay:0.7s;}.auth-form .form-group:nth-child(8){animation-delay:0.8s;}@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;}#registroModal .modal-content{max-width:568px;}@media (max-width:770px){:root{--fz_s1:1.12vw;--fz_s2:1.27vw;--fz_s3:1.32vw;--fz_s4:1.47vw;--fz_m:1.5vw;--fz_m1:1.55vw;--fz_m2:1.60vw;--fz_m3:1.65vw;--fz_l:1.70vw;--fz_l1:1.75vw;--fz_l2:1.80vw;--fz_l3:1.85vw;--fz_t1:2.30vw;--fz_t2:3.30vw;}}@media (max-width:576px){:root{--fz_s1:2.12vw;--fz_s2:2.27vw;--fz_s3:2.32vw;--fz_s4:2.47vw;--fz_m:2.50vw;--fz_m1:2.55vw;--fz_m2:2.6vw;--fz_m3:2.65vw;--fz_l:2.70vw;--fz_l1:2.75vw;--fz_l2:2.80vw;--fz_l3:2.85vw;--fz_t1:3.30vw;--fz_t2:4.30vw;}.auth-form{padding:0 20px 30px;}.auth-title{font-size:1.5rem;}.auth-form::before{height:100px;}.auth-logo{width:70px;height:70px;margin-top:25px;}.input-icon input{padding:12px 12px 12px 40px;font-size:0.9rem;}.btn-auth{padding:12px;}#registroModal #registroForm{display:flex;flex-direction:column;}}
</<style>`; $(wiAuthCss).appendTo('head');
const showLogin = `
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
</div>`;

const showRegistro = `
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
</div>`;

const showRestablecer = `
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
</div>`;


// PARA LOS EVENTOS 
$(function(){
  let midb = 'smiles';  //Para base de datos 
  let wiAuthTm = 3000;  //Tiempo para guardar en firestore
  let wiAuthIn = 'wiAuthIn';  //Para guardar auth en localstorage
  let wiAuthRol = 'wiAuthRol';  //Para guardar auth en localstorage
  let rol = 'smile' //Rol default


  // Navegación entre modales
  $('.login').click(() => openModal('loginModal'));
  $('.registrar').click(() => openModal('registroModal'));
  $('.crearCuenta').click(()=> {openModal('registroModal');closeModal('loginModal')});
  $('.conCuenta').click(()=> {openModal('loginModal');closeModal('registroModal')});
  $('.olvidastePass').click(()=> {openModal('recuperarModal');closeModal('loginModal')});
  $('.volverLogin').click(()=> {openModal('loginModal');closeModal('recuperarModal')});

  $('.togglePass').click(function() {
    const input = $(this).siblings('input');
    const isPassword = input.attr('type') === 'password';
    input.attr('type', isPassword ? 'text' : 'password');
    $(this).toggleClass('fa-eye fa-eye-slash');
  }); // Toggle password visibilidad

  $('.miauth input:not([type="checkbox"])').on('click', function() {
    witip(this, $(this).attr('placeholder'));
  }); //Tooltips validaciones 

  $('#regUsuario, #regEmail, #email, #recEmail').on('input', function() {
    $(this).val($(this).val().toLowerCase().trim());
  }); // Conversión a minúsculas

  [['#password','#Login'], ['#regPassword1','#Registrar'], ['#recFechaNacimiento','#Recuperar'], ['#recEmail','#Recuperar']].forEach(([input, btn]) => {
    $(input).on('input keyup', e => {
      $(btn).removeClass('inactivo'); // 🌟 BRILLAR COMO EL SOL
      e.key === 'Enter' && ($(btn).click(), $(btn).addClass('inactivo')); // Click + Procesando
    });
  }); // Tecla Enter para login y registro

  const validacionesRegistro = {
      regEmail: [v => v.toLowerCase(), v => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v) || 'Correo inválido'],
      regUsuario: [v => v.toLowerCase().replace(/[^a-z0-9_]/g, ''), v => v.length >= 4 || 'Usuario 4-20 caracteres'],
      regNombre: [v => v.trim(), v => v.length > 0 || 'Ingrese nombre'],
      regApellidos: [v => v.trim(), v => v.length > 0 || 'Ingrese apellidos'],
      regCelular: [v => v.replace(/\D/g, ''), v => v.length >= 8 || 'Mínimo 8 dígitos'],
      regFechaNacimiento: [v => v, v => calcularEdad(v) >= 13 || 'Tienes que ser mayor de 13 años'],
      regPassword: [v => v, v => v.length >= 6 || 'Mínimo 6 caracteres'],
      regPassword1: [v => v, v => v === $('#regPassword').val() || 'Contraseñas no coinciden']
  };
  $.each(validacionesRegistro, function(id, [tis, validado]) {
    $(`#${id}`).on('blur', function() {
      const vl = tis($(this).val());  $(this).val(vl);
      const result = validado(vl);
      if (result !== true) witip(this, result, 'error');
    });
  }); // Validaciones en tiempo real

  let usuarioListo = false;
  $('#regUsuario').on('blur focus', async function(){
  	const usuarioVL = $(this).val();
  	if(usuarioVL.length >= 3){
	  try{
	  	const busq = await getDoc(doc(db, midb, usuarioVL));
      const existe = busq.exists();  usuarioListo = !existe; //Para validar
      const mensaje = `Usuario ${existe ? 'no disponible' : 'disponible ✅'}`;
      witip(this, mensaje, existe ? 'error' : 'success','top',7000);
	  }catch(e){console.error(e)}
  	}
  }); // Validaciones para el usuario disponible con firestore

  let emailListo = false;
  $('#regEmail').on('blur focus', async function(){
    const emailVL = $(this).val();
    if(emailVL.length >= 3){
      try{
        const busq = await getDocs(query(collection(db, midb), where('email', '==', emailVL)));
        const existe = !busq.empty; emailListo = !existe; //Para validar
        const mensaje = `Email ${existe ? 'no disponible' : 'disponible ✅'}`;
        witip(this, mensaje, existe ? 'error' : 'success','top',7000);
      }catch(e){console.error(e)}
    }
  }); // Validación para email disponible con firestore

$('#Registrar').click(async function(){
  const todasValidaciones = [[usuarioListo, $('#regUsuario')[0], 'Usuario no disponible'], [emailListo, $('#regEmail')[0], 'Email no disponible'],
    ...Object.entries(validacionesRegistro).map(([id, [tis, validado]]) => {
      const campo = $(`#${id}`), vl = tis(campo.val()), result = validado(vl);
      return [result === true, campo[0], result !== true ? result : ''];
  })]; // Validando las entradas
  for (const [listo, campo, mensaje] of todasValidaciones) {
    if (!listo && mensaje && (witip(campo, mensaje, 'error'), campo.focus(), true)) return;
  } // Validando las entradas con mensaje para registrar

  try {
    //Trayendo valores listos y verificados
    const campos = ['regEmail', 'regUsuario', 'regNombre', 'regApellidos', 'regCelular', 'regPassword'];
    const [email, usuario, nombre, apellidos, celular, password] = campos.map(id=> $('#' + id).val().trim());
    
    // REGISTRANDO EN AUTH 
    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    await Promise.all([updateProfile(user, { displayName: usuario}), sendEmailVerification(user)]); 
    console.log('Registro completo en Auth ✅' + Date());
    
    // REGISTRANDO EN FIRESTORE 
    const wisave = doc(db, midb, usuario);
    await setDoc(wisave,{
      usuario,     
      email,         
      nombre,     
      apellidos,  
      celular,
      rol,    
      fechaNacimiento: fechaLocal($('#regFechaNacimiento').val()),
      creacion: serverTimestamp(),
      uid: user.uid
    });
    console.log('Registro completo en Firestore ✅' + Date());
    Mensaje('Registro completado! ✅');

  }catch(e){Mensaje({'auth/email-already-in-use': 'Email ya registrado', 'auth/weak-password': 'Contraseña muy débil'}[e.code] || e.message) || console.error(e);}
  finally{savels(wiAuthIn,'wIn',450); savels(wiAuthRol,rol,450); setTimeout(()=> (accederRol(rol)), wiAuthTm);}
});


// LOGIN CENTER APP 
$('#Login').click(async function() {
  try {
    const [usuario, password] = ['#email', '#password'].map(id => $(id).val());
    
    let busq = null;
    let email = usuario; //Para ingresar con usuario, actualizando a email 
    if (!usuario.includes('@')){
      try{
        busq = await getDoc(doc(db, midb, usuario));
        email = busq.exists() ? busq.data().email : null;
      }catch(e){console.error('ebdUsuario', e); email = null;}
    } // Convertir usuario a email si es necesario

    await signInWithEmailAndPassword(auth, email, password); // Iniciando
    savels(wiAuthIn,'wIn',450); savels(wiAuthRol, busq.data().rol, 450); accederRol(busq.data().rol);  //Actualizando seguridad
  }catch(e){
    const errores = {
      'auth/invalid-credential': 'Contraseña incorrecta',
      'auth/invalid-email': 'Falta registrar Email',
      'auth/missing-email': 'Email o usuario no registrado'
    }; Mensaje(errores[e.code] || e.message, 'error'); console.error(e);   
  }
});

// RECUPERAR CENTER APP 
$('#Recuperar').click(async function() {
  try {
    const [campo, fecha] = ['#recEmail', '#recFechaNacimiento'].map(id => $(id).val());
    
    // Convertir + validar usuario
    const email = campo.includes('@') ? campo : await (async () => {
      const b = await getDoc(doc(db, midb, campo));
      return b.exists() ? b.data().email : null;
    })();
    if (!email) return Mensaje('Usuario no registrado', 'error');
    
    // Buscar + validar email
    const busq = await getDocs(query(collection(db, midb), where('email', '==', email)));
    if (busq.empty) return Mensaje('Email incorrecto o no existe', 'error');
    
    // Validar fecha
    const fechabd = busq.docs[0].data().fechaNacimiento.toDate().toISOString().split('T')[0];
    if (fechabd !== fecha) return Mensaje('Fecha de nacimiento incorrecta', 'error');
    
    // Enviar
    await sendPasswordResetEmail(auth, email);
    Mensaje('Se envió correo para restablecer su contraseña, revisa en principal o spam ✅', 'success');
    
  }catch(e){console.error(e);}
});


}); // FUNCTIONS LISTO $(FUNCTION(){}) [END]

$('.miauth').html(showLogin + showRegistro + showRestablecer); // Cargar modales
// console.log('Sistema de autenticación segura'); //Incializando

} wiAuth();
 