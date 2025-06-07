import $ from 'jquery'; // Para manipulación del DOM y AJAX de forma simple y compatible
import { wiAuth } from './wiauth.js'; //Para autenticación login, registro y Restablecer
import {  } from './wifun.js'; //Para funciones importantes compartidos 
import { auth, db } from './firebase/init.js'; // Importa la configuración de Firebase desde tu archivo de inicialización
import { getFirestore,
  setDoc, getDoc, deleteDoc, onSnapshot, // Lo mas usados
  doc, collection, getDocs, serverTimestamp, // Muy utiles 
  query, where, orderBy, limit } from "firebase/firestore";  //Para Firestore
import { getAuth, 
  signInWithEmailAndPassword, onAuthStateChanged
} from "firebase/auth"; // Para autenticación

import { getls, removels, accederRol } from './widev.js';


// console.log(vrauth)
onAuthStateChanged(auth, async user => {
  if(!user) return (removels('wiAuthIn'), removels('wiAuthRol'), SmilePublico());

  if (getls('wiAuthIn')){
    const cacheRol = getls('wiAuthRol');
    if(cacheRol) return accederRol(cacheRol);  //Cache primero  

    const busq = await getDocs(query(collection(db, 'smiles'), where('email', '==', user.email)));
    accederRol(busq.docs[0]?.data()?.rol); // Luego hacemos consultas si no tiene, primera vez
  } // Acceso cuando es autenticado de acuerdo a roles 

});


// 🎯 FUNCIÓN PÚBLICA SIMPLE
function SmilePublico() {
  // console.log('🌍 Modo público - SEO genial');
  $('.auth-buttons').show();
}

