import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import de mitt
import mitt from "mitt";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHrFax7xuJzC33wVog33e432mda6J4pNc",
  authDomain: "projet-time2match.firebaseapp.com",
  projectId: "projet-time2match",
  storageBucket: "projet-time2match.appspot.com",
  messagingSenderId: "812718336711",
  appId: "1:812718336711:web:568360556d4e9693542ce2"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App);

// Création d'un emetteur mitt exportable
export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
app.config.globalProperties.emitter = emitter;

app.use(router);

app.mount("#app");

