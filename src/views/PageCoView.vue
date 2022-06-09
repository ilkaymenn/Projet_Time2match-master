<template>
  <div>
    <header>
      <MenuView />
    </header>
    <main class="min-h-screen bg-Noirr text-Blancc">
      <h2 class="p-8 text-center font-quicksand text-8xl font-semibold">Time<span class="text-Orangee">2</span>match</h2>
      <h3 class="-mt-8 text-center text-4xl">Connexion</h3>

      <div class="mt-14 text-Noirr">
        <div class="flex place-content-center">
          <form @submit.prevent="onCnx" class="rounded-xl border-2 border-Orangee p-10">
            <div class="w-96">
              <div>
                <p class="mb-6 font-quicksand text-lg">Connecte toi pour avoir accès à des fonctionnalités supplémentaires :</p>
              </div>
              <div>
                <input
                  class="form-control mb-2 rounded-2xl placeholder:text-center hover:border-2 hover:border-Orangee"
                  placeholder="Adresse mail"
                  type="email"
                  v-model="user.email"
                  required
                />
              </div>
              <div>
                <input
                  class="form-control rounded-2xl placeholder:text-center hover:border-2 hover:border-Orangee"
                  placeholder="Mot de passe"
                  :type="type"
                  v-model="user.password"
                  required
                />
              </div>
              <div class="mt-8 flex place-content-center">
                <boutton type="submit">Connexion</boutton>
              </div>
              <div class="mt-2 flex place-content-center">
                <div class="alert alert-warning w-fit text-xs" role="alert">
                  {{ message }}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-3 text-center">
        <p>Vous n’avez pas de compte ?</p>
        <div>
          <RouterLink class="block py-2 px-4" to="/inscription">
            <h5 class="font-quicksand text-base font-bold uppercase text-Orangee">S’inscire</h5>
          </RouterLink>
        </div>
      </div>
    </main>

    <footer>
      <FooterView></FooterView>
    </footer>
  </div>
</template>

<script>
import MenuView from "../components/MenuView.vue";
import FooterView from "../components/FooterView.vue";
import Boutton from "../components/boutton.vue";

// Import des fonction d'authentification
import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

//Import de l'emetteur depuis main.js
import { emitter } from "../main.js";

export default {
  name: "MonCompte",
  components: {
    MenuView,
    FooterView,
    Boutton,
  },
  data() {
    return {
      user: {
        // Utilisateur : email + mot de passe
        email: "",
        password: "",
      },
      message: null, // Message de connexion
      view: false, // Afficher / cacher le mot de passe
      type: "password", // Type de champs pour le password : password / text pour l'afficher
      imageData: null, // Image prévisualisée pour création compte
    };
  },
  mounted() {
    // Montage de la vue
    this.message = "User non connecté";
  },
  methods: {
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK - mise à jour du user
          this.user = response.user;
          // Emission evenement de connexion
          emitter.emit("connectUser", { user: this.user });
          console.log("user", this.user);
          // Mise à jour du message
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    // Se deconnecter
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          // Mise à jour du message
          this.message = "User non connecté";
          // Ré initialisation des champs
          this.user = {
            email: null,
            password: null,
          };
          // Emission évènement de déconnexion
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },

    // Affiche/masque le champs password
    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style scoped>
a {
  color: rgb(225, 54, 54);
}
a:hover {
  text-decoration: none;
}
</style>
