import{$ as t,m as n,o as c,g as d,h as l,q as r,j as u,k as b,i as m,s as f,l as o,M as h}from"./widev-Dz3x8liB.js";import"./wiauth-C2QfQ6Ax.js";t(".logout-btn").click(async()=>(await n(o),window.location.href="/"));c(o,async s=>{if(!s)return window.location.href="/";try{const a=d("wiSmile");if(a)return e(a);const i=(await l(r(u(b,"smiles"),m("usuario","==",s.displayName)))).docs[0].data();f("wiSmile",i,450),e(i)}catch(a){console.error(a)}});function e(s){console.log(s.nombre),h("Hola "+s.nombre);const a=`
<div class="dashboard-container">

<!-- 🔒 CONTENIDO PRIVADO SIN CONFLICTOS -->
<header class="dashboard-header">
  <div class="user-info">
    <img src="./smile.png" alt="Avatar" class="user-avatar">
    <div class="user-details">
      <h1 id="welcome-message">Buenos dias ${s.nombre}</h1>
      <p class="user-email" id="user-email"> ${s.email}</p>
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
  
`;t(".app").html(a)}
