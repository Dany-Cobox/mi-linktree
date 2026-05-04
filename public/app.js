//importacion de firebase
//importar firestone

import { getFirestore, collection, getDocs, orderBy, query }

    from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js"
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";




// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGjMELcUDj7QWyHeIczPVUULhD8VrS0dE",
    authDomain: "ejemplo1-98008.firebaseapp.com",
    projectId: "ejemplo1-98008",
    storageBucket: "ejemplo1-98008.firebasestorage.app",
    messagingSenderId: "997174893479",
    appId: "1:997174893479:web:8ac492b0670d003d55f482"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// creacion de botones, y enlace con firebase
async function cargarEnlaces() {
    const coleccion = collection(db, "enlaces")
    const consulta = query(coleccion, orderBy("orden"))
    const resultado = await getDocs(consulta)

    resultado.forEach(doc => {
        let btn = document.createElement('button')
        btn.textContent = doc.data().titulo
        btn.className = 'link-btn'
        btn.onclick = () => window.open(doc.data().url)
        document.getElementById('links-container').appendChild(btn)
    })
}

cargarEnlaces()





console.log('app.js cargando...')