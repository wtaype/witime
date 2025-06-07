import{o as g,l as h,$ as i,m as y,M as n,n as $,p as w,G as e,h as d,j as u,k as m,H as A,B as S,I as C}from"./widev-CQk9t5-n.js";g(h,async r=>{r?U():window.location.href="/"});i(".logout-btn").click(async()=>{try{await y(h),n("Sesión cerrada correctamente","success"),window.location.href="/"}catch(r){console.error(r)}});async function U(r){const b=`
<div class="tabla-container">
  <div class="tabla-header">
    <h2><i class="fas fa-users"></i> Gestión de Usuarios Smile</h2>
    <button class="btn-nuevo" onclick="nuevoUsuario()">
      <i class="fas fa-plus"></i> Nuevo Usuario
    </button>
  </div>
  
  <div class="tabla-responsive">
    <table class="tabla-smiles" id="tablaSmiles">
      <thead>
        <tr>
          <th><i class="fas fa-user"></i> Usuario</th>
          <th><i class="fas fa-envelope"></i> Email</th>
          <th><i class="fas fa-id-card"></i> Nombre</th>
          <th><i class="fas fa-id-card-alt"></i> Apellidos</th>
          <th><i class="fas fa-phone"></i> Celular</th>
          <th><i class="fas fa-crown"></i> Rol</th>
          <th><i class="fas fa-birthday-cake"></i> F. Nacimiento</th>
          <th><i class="fas fa-calendar"></i> Creación</th>
          <th><i class="fas fa-key"></i> UID</th>
          <th><i class="fas fa-cogs"></i> Acciones</th>
        </tr>
      </thead>
      <tbody id="bodySmiles">
        <!-- Usuarios dinámicos -->
      </tbody>
    </table>
  </div>
</div>

<!-- Modal de Confirmación -->
<div class="modal" id="confirmationModal">
  <div class="modal-content confirmation-modal">
    <div class="modal-header">
      <h3 class="modal-title" id="confirmationTitle">Confirmar Acción</h3>
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body">
      <div class="confirmation-message" id="confirmationMessage"></div>
      <div class="confirmation-details" id="confirmationDetails"></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary close-modal">Cancelar</button>
      <button class="btn btn-danger" id="confirmActionBtn">Confirmar</button>
    </div>
  </div>
</div>
`;i(function(){const c=async()=>{try{e(!0);const t=await d(u(m,"smiles"));i("#bodySmiles").html(t.docs.map(s=>{const a=s.data(),o=a.creacion?new Date(a.creacion.seconds*1e3).toLocaleString("es-PE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):"N/A",l=a.fechaNacimiento?new Date(a.fechaNacimiento.seconds*1e3).toLocaleDateString("es-PE"):"N/A";return`
        <tr data-uid="${a.uid}">
          <td><input type="text" value="${a.usuario}" class="input-tabla" data-field="usuario"></td>
          <td><input type="email" value="${a.email}" class="input-tabla" data-field="email"></td>
          <td><input type="text" value="${a.nombre}" class="input-tabla" data-field="nombre"></td>
          <td><input type="text" value="${a.apellidos}" class="input-tabla" data-field="apellidos"></td>
          <td><input type="text" value="${a.celular}" class="input-tabla" data-field="celular"></td>
          <td>
            <select class="select-tabla" data-field="rol">
              <option value="smile" ${a.rol==="smile"?"selected":""}>Smile</option>
              <option value="smiletop" ${a.rol==="smiletop"?"selected":""}>Smile Top</option>
            </select>
          </td>
          <td><span class="fecha-nacimiento">${l}</span></td>
          <td><span class="fecha-creacion" title="Creado: ${o}">${o}</span></td>
          <td><code class="uid-display" title="${a.uid}">${a.uid.substring(0,12)}...</code></td>
          <td class="acciones">
            <button class="btn-accion btn-actualizar" data-uid="${a.uid}">
              <i class="fas fa-save"></i>
            </button>
            <button class="btn-accion btn-eliminar" data-uid="${a.uid}" data-usuario="${a.usuario}">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      `}).join("")),e(!1)}catch(t){console.error("Error:",t),n("Error al cargar usuarios","error"),e(!1)}};i(document).on("click",".btn-actualizar",function(){const t=i(this).data("uid"),s=i(this).closest("tr"),a=["usuario","email","nombre","apellidos","celular","rol"].reduce((o,l)=>(o[l]=s.find(`[data-field="${l}"]`).val(),o),{});f("Actualizar Usuario",`¿Actualizar "${a.usuario}"?`,"actualizar",t,a)}),i(document).on("click",".btn-eliminar",function(){const t=i(this).data("uid"),s=i(this).data("usuario");f("Eliminar Usuario",`¿Eliminar "${s}"?`,"eliminar",t,{usuario:s})});const f=(t,s,a,o,l)=>{i("#confirmationTitle").text(t),i("#confirmationMessage").text(s),a==="eliminar"?i("#confirmationDetails").html(`
      <div class="alert-warning">
        <strong>⚠️ Limitación Plan Gratis:</strong><br>
        ✅ Se elimina de Firestore<br>
        ❌ Auth permanece activo<br><br>
        <strong>Para eliminación completa de Auth:</strong><br>
        <a href="https://console.firebase.google.com/project/witime/authentication/users" 
           target="_blank" class="btn-firebase-console">
          🔥 Abrir Firebase Console
        </a>
      </div>
    `):i("#confirmationDetails").html(`
      <strong>Campos a actualizar:</strong><br>
      👤 Usuario, Email, Nombre, Apellidos<br>
      📱 Celular, Rol
    `),i("#confirmActionBtn").data({accion:a,uid:o,datos:JSON.stringify(l)}),$("confirmationModal")};i(document).on("click","#confirmActionBtn",async function(){const{accion:t,uid:s,datos:a}=i(this).data();w("confirmationModal"),t==="actualizar"?await p(s,JSON.parse(a)):t==="eliminar"&&await v(s,JSON.parse(a))});const p=async(t,s)=>{try{e(!0);const a=(await d(u(m,"smiles"))).docs.find(o=>o.data().uid===t);a?(await A(a.ref,{...s,ultimaActualizacion:S()}),n(`✅ "${s.usuario}" actualizado`,"success"),c()):n("Usuario no encontrado","error"),e(!1)}catch(a){console.error("Error:",a),n("Error al actualizar","error"),e(!1)}},v=async(t,s)=>{try{e(!0);const a=(await d(u(m,"smiles"))).docs.find(o=>o.data().uid===t);a?(await C(a.ref),n(`✅ "${s.usuario}" eliminado de Firestore

💡 Para eliminar de Auth:
🔥 Ve a Firebase Console (enlace en modal)`,"success"),c()):n("Usuario no encontrado","error"),e(!1)}catch(a){console.error("Error:",a),n("Error al eliminar","error"),e(!1)}};i(".app").html(b),c()})}
