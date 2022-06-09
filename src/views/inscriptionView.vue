<template>
  <div>
    <header>
      <MenuView />
    </header>
    <main class="min-h-screen bg-Noirr text-Blancc">
      <h2 class="p-8 text-center font-quicksand text-8xl font-semibold">Time<span class="text-Orangee">2</span>match</h2>
      <h3 class="-mt-8 text-center text-4xl">Inscription</h3>

      <form class="mt-10 flex place-content-center">
        <div class="w-fit rounded-xl border-2 border-Orangee p-10">
          <div class="mb-3">
            <input
              class="form-control rounded-2xl placeholder:text-center hover:border-2 hover:border-Orangee"
              placeholder="Nom"
              required
            />
          </div>
          <div class="mb-3">
            <input
              class="form-control rounded-2xl placeholder:text-center hover:border-2 hover:border-Orangee"
              placeholder="Prénom"
              required
            />
          </div>
          <div class="mb-3"><input type="date" class="text-gray-800" id="start" name="trip-start" value="2018-07-22" /></div>
          <div class="mb-3">
            <div class="w-100 mb-3 text-center" v-if="imageData">
              <img class="preview img-fluid" :src="imageData" />
            </div>
            <div class="custom-file mb-3 text-center">
              <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
              <label class="custom-file-label" for="file">Sélectionner l'image</label>
            </div>
          </div>
          <div class="mb-3">
            <input
              class="form-control rounded-2xl placeholder:text-center hover:border-2 hover:border-Orangee"
              placeholder="username"
              required
            />
          </div>
          <div class="mb-3">
            <input
              class="form-control rounded-2xl placeholder:text-center hover:border-2 hover:border-Orangee"
              placeholder="Adresse mail"
              type="email"
              required
            />
          </div>
          <div class="mb-3">
            <input
              class="form-control rounded-2xl placeholder:text-center hover:border-2 hover:border-Orangee"
              placeholder="Mot de passe"
              :type="type"
              v-model="user.password"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="my-5 h-40 w-full rounded-2xl border-2 font-quicksand font-semibold text-Noirr placeholder:text-center placeholder:font-quicksand placeholder:text-lg placeholder:text-gray-800 hover:border-2 hover:border-Orangee focus:border-Orangee"
              placeholder="Message  :"
            />
          </div>
          <div class="mb-3">
            <input
              class="form-control rounded-2xl placeholder:text-center hover:border-2 hover:border-Orangee"
              placeholder="Nombre de parties créer"
              required
            />
          </div>
          <div class="mt-8 flex place-content-center"><boutton type="submit">Inscription</boutton></div>
        </div>
      </form>
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

<!-- 
<style>
@import "../assets/seco.css";
</style> -->
