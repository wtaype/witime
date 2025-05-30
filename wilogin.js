import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './firebase/init.js';

// Auth imports
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail 
} from "firebase/auth";

// Firestore imports
import { 
  doc, setDoc, getDoc, updateDoc, collection, query, where, 
  getDocs, serverTimestamp 
} from "firebase/firestore";

// widev imports
import { 
  witip, Capi, Mensaje, Notificacion, showLoading, fechaLocal,
  openModal, closeModal, closeAllModals
} from './widev.js';

// ==============================
// TEMPLATES HTML
// ==============================
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
        <button type="button" id="Login" class="btn-auth">Iniciar Sesión</button>
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
        <button type="button" id="Registrar" class="btn-auth inactivo">Registrarme</button>
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
        <p class="auth-text">Ingresa tu Correo:</p>
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
        <button type="button" id="Recuperar" class="btn-auth">Restablecer Contraseña</button>
      </form>
      
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;

// ==============================
// VALIDACIONES
// ==============================
const validacionesRegistro = {
  regEmail: [v => v.toLowerCase(), v => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v) || 'Correo inválido'],
  regUsuario: [v => v.toLowerCase().replace(/[^a-z0-9_]/g, ''), v => v.length >= 4 || 'Usuario 4-20 caracteres'],
  regNombre: [v => v.trim(), v => v.length > 0 || 'Ingrese nombre'],
  regApellidos: [v => v.trim(), v => v.length > 0 || 'Ingrese apellidos'],
  regCelular: [v => v.replace(/\D/g, ''), v => v.length >= 8 || 'Mínimo 8 dígitos'],
  regFechaNacimiento: [v => v, v => new Date(v) <= new Date() || 'Fecha inválida'],
  regPassword: [v => v, v => v.length >= 6 || 'Mínimo 6 caracteres'],
  regPassword1: [v => v, v => v === $('#regPassword').val() || 'Contraseñas no coinciden']
};

// ================================================
// FUNCIONES VALIDACIONES FIREBASE
// ================================================
const validarUsuarioExiste = async (username) => {
  try {
    const docRef = doc(db, 'usuarios', username);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  }catch(e){console.error('evdUsuario', e); return false}
};

const validarEmailExiste = async (email) => {
  try {
    const q = query(collection(db, 'usuarios'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }catch(e){console.error('evdEmail', e); return false}
};

const convertirUsuarioAEmail = async (campo) => {
  if (campo.includes('@')) return campo;
  try {
    const busq = await getDoc(doc(db, 'usuarios', campo));
    return busq.exists() ? busq.data().email : null;
  }catch(e){console.error('ebdUsuario', e); return null}
};

// ======================================================
// FUNCIONES PRINCIPALES REGISTRAR + LOGIN + RESTABLECER
// ======================================================
const registrarUsuario = async () => {
  try {
    const campos = ['regEmail', 'regUsuario', 'regNombre', 'regApellidos', 'regCelular', 'regPassword'];
    const [email, usuario, nombre, apellidos, celular, password] = campos.map(id => 
      $('#' + id).val().trim().toLowerCase()
    ); //Trayendo valores y validando completo 

    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    await Promise.all([
      updateProfile(user, { displayName: usuario }), 
      sendEmailVerification(user)
    ]); // Registrando en Auth + enviando de validacion

    await setDoc(doc(db, "usuarios", usuario), {
      email, nombre, apellidos, celular, usuario,
      uid: user.uid,
      fechaCreacion: serverTimestamp(),
      fechaNacimiento: fechaLocal($('#regFechaNacimiento').val())
    });// Guardando en Firebase nuevo usuario

    return user;
  }catch(e){console.error('eRegistro',e);throw e}
};

const iniciarSesion = async (campo, password) => {
  try {
    const email = await convertirUsuarioAEmail(campo);
    
    const {user} = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (e){throw e}
};

// ==============================
// EVENT DE ABRIL MODALS 
// ==============================
const registroEventos = () => {
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

  $('input').on('click', function() {
    witip(this, $(this).attr('placeholder'));
  }); //Tooltips validaciones 

  $.each(validacionesRegistro, function(id, [tis, validado]) {
    $(`#${id}`).on('blur', function() {
      const vl = tis($(this).val());
      $(this).val(vl);
      const result = validado(vl);
      if (result !== true) witip(this, result, 'error');
    });
  }); // Validaciones en tiempo real

  $(document).on('input', '#regUsuario, #email', function() {
    $(this).val($(this).val().toLowerCase().trim());
  }); // Conversión a minúsculas

  $(document).on('blur focus', '#regUsuario', async function() {
    const vl = $(this).val();
    if (vl.length >= 3) {
      const existe = await validarUsuarioExiste(vl);
      const mensaje = `Usuario ${existe ? 'no disponible' : 'disponible'}`;
      witip(this, mensaje, existe ? 'error' : 'success');
      $('#Registrar').removeClass('inactivo');
    }
  }); // Validación de usuario disponible

  // Validación de email disponible
  $(document).on('blur', '#regEmail', async function() {
    const vl = $(this).val();
    if (vl.length >= 3) {
      const existe = await validarEmailExiste(vl);
      const mensaje = `Email ${existe ? 'no disponible' : 'disponible'}`;
      witip(this, mensaje, existe ? 'error' : 'success');
    }
  });

  // Registro
  $('#Registrar').click(async function() {
    if (await validarUsuarioExiste($('#regUsuario').val())) {
      return witip($('#regUsuario')[0], 'Usuario no disponible', 'error');
    } //Validando nuevamente si esta disponible usuario 
    for (const [id, [tis, validado]] of Object.entries(validacionesRegistro)){
      const campo = $(`#${id}`), vl = tis(campo.val()), result = validado(vl);
      if (result !== true){witip(campo[0], result, 'error');campo.focus();return}
    }
    try {
      $(this).addClass('inactivo');  await registrarUsuario();
      Mensaje('¡Registro exitoso!', 'success'); closeAllModals();
    }catch(e){Mensaje('Error en el registro', e);
    }finally{$(this).addClass('inactivo')}
  });

  // Login a web 
  $('#Login').click(async function() {
    try {
      $(this).addClass('inactivo');
      const [campo, password] = ['#email', '#password'].map(id => $(id).val().trim());
      const user = await iniciarSesion(campo, password); //Iniciando      
      closeAllModals();
    }catch(err) {
      const errores = {
        'auth/invalid-credential': 'Contraseña incorrecta',
        'auth/invalid-email': 'Falta registrar Email',
        'auth/missing-email': 'Email no registrado'
      };
      Mensaje(errores[err.code] || `Error: ${err.message}`, 'error');
      console.error(err);
    } finally{$(this).removeClass('inactivo')}
  });

  $('#password').on('keydown', function(e) {
    if (e.key === 'Enter') $('#Login').click();
  }); // Tecla Enter en password para login
};

// ==============================
// FUNCIÓN PRINCIPAL DE INICIALIZACIÓN
// ==============================
export const wiAuth = () => {
  // Cargar templates
  const authHTML = showLogin + showRegistro + showRestablecer;
  $('.wiauth').html(authHTML);

  registroEventos(); // Configurar eventos
//   console.log('🔐 Sistema de autenticación inicializado');
};

// ==============================
// EXPORTACIONES
// ==============================
export {
  validarUsuarioExiste,
  validarEmailExiste,
  convertirUsuarioAEmail,
  registrarUsuario,
  iniciarSesion
};
$(document).ready(()=>{wiAuth()}); //Auto inicialización 