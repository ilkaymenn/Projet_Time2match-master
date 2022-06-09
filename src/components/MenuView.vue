<template>
  <div class="m-0 flex items-center justify-between bg-Orangee p-2 text-Noirr">
    <div class="flex flex-col hover:border-b-4 hover:border-b-white">
      <RouterLink class="block py-2 px-4" to="/">
        <Logo class="h-[100px] w-[100px]"></Logo>
      </RouterLink>
    </div>

    <div class="flex flex-col hover:border-b-4 hover:border-b-white">
      <RouterLink class="block py-2 px-4" to="/terrains">
        <LogoTerrain   ></LogoTerrain>
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr">Trouver <br />Un terrain</h5>
      </RouterLink>
    </div>

    <div class="flex flex-col justify-center hover:border-b-4 hover:border-b-white">
      
      <RouterLink class="block py-2 px-4" to="/parties">
        <LogoPartie class="text-Noirr"></LogoPartie>
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr">Trouver <br />Une Partie</h5>
      </RouterLink>
    </div>

    <div class="flex flex-col justify-center hover:border-b-4 hover:border-b-white">
      <RouterLink class="block py-2 px-4" to="/sports">
        <LogoSports class="text-Noirr"></LogoSports>
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr">Les sports <br />Recencés</h5>
      </RouterLink>
    </div>

    <div class="flex flex-col hover:border-b-4 hover:border-b-white">
      <RouterLink class="block py-2 px-4" to="/partenaires">
        <Logopartenaire></Logopartenaire>
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr">Partenaires</h5>
      </RouterLink>
    </div>

    <div class="flex flex-col hover:border-b-4 hover:border-b-white">
      <RouterLink class="block py-2 px-4" to="/chat">
        <ChatIcon></ChatIcon>
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr">Chat</h5>
      </RouterLink>
    </div>

    <div class="flex flex-col hover:border-b-4 hover:border-b-white">
      <RouterLink class="block py-2 px-4" to="/user">
        <div class="">
          <span v-if="avatar != null" class="mr-3">
            <img class="avatar h-16 w-auto" :src="avatar" />
            <RouterLink to="/user" class="text-lg">{{ name }}</RouterLink>
          </span>
        </div>
        <div v-if="avatar != null" class="hidden pt-9">
          <LogoSeco class="text-Noirr"></LogoSeco>
        </div>
        <div v-else class="pt-9">
          <LogoSeco class="text-Noirr"></LogoSeco>
        </div>
      </RouterLink>
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            v-if="isAdmin"
          >
            Administration
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div class="dropdown-item">
              <RouterLink to="/terrains">TERRAINS</RouterLink>
            </div>

            <div class="dropdown-item">
              <RouterLink to="/parties">PARTIES</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <RouterView />
  </div>
</template>

<script>
import { ChatIcon } from "@heroicons/vue/outline";

import Logo from "./logo.vue";
import LogoTerrain from "./menu/logoterrain.vue";
import LogoPartie from "./menu/logopartie.vue";
import LogoSports from "./menu/logosports.vue";
import LogoSeco from "./menu/logoseco.vue";
import Logopartenaire from "./menu/logopartenaire.vue";

// Fonctions Firestore
import { getFirestore, collection, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Import emetteur de main.js
import { emitter } from "../main";

export default {
  name: "App",
  components: {
    Logo,
    LogoTerrain,
    LogoPartie,
    LogoSeco,
    LogoSports,
    Logopartenaire,
    ChatIcon,
  },
  data() {
    return {
      MenuOpen: false,
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté
      name: "Vidéo", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
    };
  },
  mounted() {
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();

    // Ecoute de l'évènement de connexion
    emitter.on("connectUser", (e) => {
      // Récupération du user
      this.user = e.user;
      console.log("App => Reception user connecté", this.user);
      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);
    });

    // Ecoute de l'évènement de deconnexion
    emitter.on("deConnectUser", (e) => {
      // Récupération user
      this.user = e.user;
      console.log("App => Reception user deconnecté", this.user);
      // Réinitialisation infos complémentaires user
      this.userInfo = null;
      this.name = "Vidéo";
      this.avatar = null;
      this.isAdmin = false;
    });
  },
  methods: {
    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>

<style>
/* Import Styles application */
@import "../assets/styles.css";

.avatar {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>
