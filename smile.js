import $ from 'jquery';
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, query, where, orderBy, limit } from "firebase/firestore"; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './firebase/init.js';

$(document).click(async function(){
  console.log('Generando consulta, espere... ');
  try {
    const docRef = doc(db, 'smiles', 'wilder');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log('📧 Mensaje desde base de datos:', data.mensaje);

    }else{console.log('Error en consulta, revisa el nombre')}
  }catch(e){console.error(e)}
});
