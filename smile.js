import $ from 'jquery';
import { wiAuth } from './wiauth.js'; //Para autenticación login, registro y Restablecer
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './firebase/init.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, getDocs, deleteDoc, onSnapshot, collection, query, where } from "firebase/firestore";
import { wiTema, Capi, Mensaje, Notificacion, savels, getls, removels, accederRol } from './widev.js';


$('.logout-btn').click(async () => (await signOut(auth), window.location.href = '/')); //Logout 

// 🔐 GESTIÓN DE AUTENTICACIÓN EN DASHBOARD
onAuthStateChanged(auth, async user => {
  if(!user) return window.location.href = '/'; // Seguridad default 
  try{
    const wi = getls('wiSmile');
    if(wi) return smileContenido(wi); // Cache primero 

    const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
    const widt = busq.docs[0].data(); savels('wiSmile', widt, 450); smileContenido(widt); // Desde Online 
  }catch(e){console.error(e)}
});

function smileContenido(wi){
  console.log(wi.nombre);
  Mensaje('Hola ' + wi.nombre);
  const webSmile = `
<div class="dashboard-container">

<!-- 🔒 CONTENIDO PRIVADO SIN CONFLICTOS -->
<header class="dashboard-header">
  <div class="user-info">
    <img src="./smile.png" alt="Avatar" class="user-avatar">
    <div class="user-details">
      <h1 id="welcome-message">Buenos dias ${wi.nombre}</h1>
      <p class="user-email" id="user-email"> ${wi.email}</p>
    </div>
  </div>
  
  <nav class="dashboard-nav">
    <button class="nav-item active" data-section="inicio">
      <i class="fas fa-home"></i> Inicio
    </button>
    <button class="nav-item" data-section="beneficios">
      <i class="fas fa-gift"></i> Beneficios
    </button>
    <button class="nav-item" data-section="puntos">
      <i class="fas fa-star"></i> Puntos
    </button>
    <button class="nav-item" data-section="perfil">
      <i class="fas fa-user"></i> Perfil
    </button>
    <button class="logout-btn">
      <i class="fas fa-sign-out-alt"></i> Salir
    </button>
  </nav>
</header>

<main class="dashboard-content">
  <!-- Secciones del dashboard -->
  <section id="inicio-section" class="dashboard-section active">
    <div class="welcome-card">
      <h2>¡Bienvenido a tu Dashboard!</h2>
      <button id="tiempoRealOn">ACTIVAR TIEMPO REAL</button>
      <button id="tiempoRealOff">DESACTIVAR TIEMPO REAL</button>
      <div class="stats-grid">
        <div class="stat-card">
          <h3 id="user-points">0</h3>
          <p>Puntos Acumulados</p>
        </div>
        <div class="stat-card">
          <h3 id="user-benefits">0</h3>
          <p>Beneficios Usados</p>
        </div>
      </div>
    </div>
  </section>
  
  <section id="beneficios-section" class="dashboard-section">
    <h2>Tus Beneficios Exclusivos</h2>
    <div id="benefits-list">
      <!-- Beneficios se cargan dinámicamente -->
    </div>
  </section>
  
  <section id="perfil-section" class="dashboard-section">
    <h2>Mi Perfil</h2>
    <div class="profile-form">
      <!-- Formulario de perfil -->
    </div>
  </section>
</main>


</div>
  
`; 
$('.app').html(webSmile);// Personalizado 

}