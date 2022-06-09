import { createRouter, createWebHistory } from "vue-router";

// Fonction d'authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Fonctions Firestore
import { getFirestore, collection, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import AccueilView from "../views/AccueilView.vue";
import TerrainsView from "../views/TerrainsView.vue";
import PartiesView from "../views/PartiesView.vue";
import SportsView from "../views/SportsView.vue";
import PartenairesView from "../views/PartenairesView.vue";
import AProposView from "../views/AProposView.vue";
import MentionLegalesView from "../views/MentionLegalesView.vue";
import PageCoView from "../views/PageCoView.vue";
import ContactView from "../views/ContactView.vue";
import ChatView from "../views/ChatView.vue";
import userView from "../views/userView.vue";
import inscriptionView from "../views/inscriptionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "AccueilView", component: AccueilView },
    { path: "/terrains", name: "TerrainsView", component: TerrainsView },
    { path: "/parties", name: "PartiesView", component: PartiesView },
    { path: "/sports", name: "SportsView", component: SportsView },
    { path: "/partenaires", name: "PartenairesView", component: PartenairesView },
    { path: "/Apropos", name: "aProposView", component: AProposView },
    { path: "/mentionlegales", name: "MentionsLegalesView", component: MentionLegalesView },
    { path: "/pageco", name: "PageCoView", component: PageCoView },
    { path: "/contact", name: "ContactView", component: ContactView },
    { path: "/chat", name: "ChatView", component: ChatView },
    { path: "/user", name: "userView", component: userView },
    { path: "/inscription", name: "inscriptionView", component: inscriptionView },
  ],
});

// On créé un guard : Observateur (fonction) permettant de savoir si un utilisateur
// a le droit d'utiliser une route
// paramètres : to : d'où il vient, from où il veut aller, next où il doit aller après contrôle
function guard(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      // User connecté
      console.log("router OK => user ", user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // userInfo étant un tableau, on récupère
        // ses informations dans la 1° cellule du tableau : 0
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          // Utilisateur administrateur, on autorise la page/vue
          next(to.params.name);
          return;
        } else {
          // Utilisateur non administrateur, renvoi sur accueil
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "accueilView" });
          return;
        }
      });
    } else {
      // Utilisateur non connecté, renvoi sur accueil
      console.log("router NOK => user ", user);
      next({ name: "accueilView" });
    }
  });
}

export default router;
