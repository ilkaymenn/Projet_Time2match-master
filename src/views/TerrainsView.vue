<template>
  <div>
    <header>
      <MenuView />
    </header>
    <main class="min-h-screen bg-Noirr text-Blancc">
      <div class="flex flex-row">
        <Barre_gauche></Barre_gauche>

        <div class="justify-center">
          <div>
            <h2 class="py-15 p-8 text-center font-quicksand text-8xl font-semibold">Time<span class="text-Orangee">2</span>match</h2>
          </div>

          <div class="flex justify-around rounded-lg bg-Blancc">
            <p class="font-quicksand font-bold text-Noirr">Afficher uniquement les terrains de...</p>
            <select class="bg-Noirr text-Orangee" name="fréquentions">
              <option class="hover:bg-Orangee hover:text-Blancc" value="Basketball">Basketball</option>
              <option value="Football">Football</option>
              <option value="Voleyball">Voleyball</option>
            </select>
          </div>

          <div class="flex justify-center">
            <div class="card-body table-responsive col-start-1">
              <table class="text-light table">
                <thead>
                  <tr>
                    <th scope="col">
                      <span>
                        <div class="input-group m-8">
                          <input
                            type="text"
                            class="form-control w-full appearance-none rounded-full border-4 bg-Blancc py-2 px-4 text-center leading-tight text-black placeholder:text-black focus:border-Orangee focus:bg-Noirr focus:text-left focus:text-Orangee focus:outline-none focus:placeholder:text-Blancc"
                            v-model="filter"
                            placeholder="Chercher votre terrain"
                          />

                          <!-- <button class="btn btn-light" type="button" @click="createterrain()" title="Création">Ajouter</button> -->
                        </div>
                      </span>
                    </th>
                  </tr>
                </thead>
                <div class="mx-10 flex justify-center">
                  <tbody class="grid grid-cols-2">
                    <tr v-for="terrain in filterBytype" :key="terrain.id">
                      <td>
                        <form>
                          <div class="input-group mx-10 w-full">
                            <div class="p-2">
                              <div class="flex w-max flex-col items-center bg-Blancc">
                                <img class="center h-48 w-full rounded-t-lg object-cover" :src="terrain.image" alt="Image type présente" />

                                <input
                                  type="text"
                                  class="form-control leading-tightbg-Orangee mb-5 w-full appearance-none bg-Orangee py-2 px-4 text-center font-quicksand text-xl font-bold text-Noirr"
                                  v-model="terrain.type"
                                  required
                                />

                                <div class="flex p-2">
                                  <People class="flex h-full w-full p-2"> </People>
                                  <input
                                    type="text"
                                    class="form-control leading-tightbg-Orangee w-full appearance-none border-4 bg-transparent py-2 px-4 text-center font-quicksand text-xl font-bold text-Noirr hover:border-Orangee focus:border-Noirr"
                                    v-model="terrain.lieux"
                                    required
                                  />
                                </div>
                                <div class="flex p-2">
                                  <Foot_card class="flex p-2"></Foot_card>
                                  <input
                                    type="text"
                                    class="form-control leading-tightbg-Orangee w-full appearance-none border-4 bg-transparent py-2 px-4 text-center font-quicksand text-xl font-bold text-Noirr hover:border-Orangee focus:border-Noirr"
                                    v-model="terrain.fréquentions"
                                    required
                                  />
                                </div>
                                <div class="flex justify-evenly">
                                  <Boutton class="m-5" type="submit" @click.prevent="updateTerrain(terrain)" title="Modification">
                                    Modifier
                                  </Boutton>

                                  <Boutton class="m-5" type="submit" @click.prevent="deleteTerrain(terrain)" title="Suppression"
                                    >Delete</Boutton
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </td>
                    </tr>
                  </tbody>
                </div>
              </table>
            </div>
          </div>
          <div class="flex justify-center py-5">
            <div class="m-5 flex w-fit flex-col items-center justify-center rounded-xl border-4 border-Orangee py-3">
              <p class="font-quicksand text-lg font-light">Vous ne trouvez personne avec qui jouer ? Créez une terrain !</p>
              <h5 class="font-quicksand text-2xl font-light text-Orangee">Créer une terrain sportive</h5>
            </div>
          </div>
        </div>

        <Barre_droite></Barre_droite>
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

import Barre_droite from "../components/barre/barre_droite.vue";
import Barre_gauche from "../components/barre/barre_gauche.vue";
import Foot_card from "../components/icone_card/foot_card.vue";
import Horloge from "../components/icone_card/horloge.vue";
import Loca from "../components/icone_card/loca.vue";
import Boutton from "../components/boutton.vue";

import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import People from "../components/icone_card/people.vue";

export default {
  name: "ListeView",
  data() {
    return {
      listeTerrainSynchro: [],
      filter: "",
      image: null,
      type: null,
      fréquentions: null,
      date: null,
      lieux: null,
    };
  },
  components: {
    MenuView,
    FooterView,
    Barre_droite,
    Barre_gauche,
    Foot_card,
    Horloge,
    Loca,
    Boutton,
    People,
  },

  computed: {
    //Tri des catégories par ordre alpha
    orderBytype: function () {
      return this.listeTerrainSynchro.sort(function (a, b) {
        if (a.type < b.type) return -1;
        if (a.type > b.type) return 1;
        return 0;
      });
    },

    filterBytype: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderBytype.filter(function (terrain) {
          //console.log("terrain", terrain.terrain);
          return terrain.type.toLowerCase().includes(filter);
        });
      } else {
        return this.orderBytype;
      }
    },
  },
  mounted() {
    this.getTerrainSynchro();
  },
  methods: {
    async getTerrainSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbterrain = collection(firestore, "terrain");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbterrain, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la terrain data
        this.listeTerrainSynchro = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        this.listeTerrainSynchro.forEach(function (terrain) {
          const storage = getStorage();
          const spaceRef = ref(storage, "terrain/" + terrain.image);
          //const spaceRef = ref(storage, "terrain/buju.png");
          getDownloadURL(spaceRef)
            .then((url) => {
              terrain.image = url;
              // console.log("terrain", terrain);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },

    previewImage: function (event) {
      // Mise à jour de la image du terrain
      this.file = this.$refs.file.files[0];
      // Récupérer le type du fichier pour la image du terrain
      this.terrain.image = this.file.name;
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

    async createTerrain() {
      const firestore = getFirestore();
      const storage = getStorage();
      const refStorage = ref(storage, "terrain/" + this.terrain.image);
      const dbTerrain = collection(firestore, "terrain");
      const docRef = await addDoc(dbTerrain, {
        type: this.type,
        terrain: this.terrain,
      });
      console.log("document crée avec le id : ", docRef.id);
    },
    async updateTerrain(terrain) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "terrain", terrain.id);
      await updateDoc(docRef, {
        type: terrain.type,
        fréquentions: terrain.fréquentions,
        lieux: terrain.lieux,
        date: terrain.date,
      });
    },
    async deleteTerrain(terrain) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "terrain", terrain.id);
      await deleteDoc(docRef);
    },
  },
};
</script>
