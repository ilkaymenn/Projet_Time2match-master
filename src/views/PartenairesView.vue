<template>
  <div>
    <header>
      <MenuView></MenuView>
    </header>
    <main class="min-h-screen bg-Noirr text-Blancc">
      <div class="flex flex-row">
        <Barre_gauche></Barre_gauche>

        <div class="flex flex-col">
          <div class="justify-center">
            <div>
              <h2 class="py-15 p-8 text-center font-quicksand text-8xl font-semibold">
                Les sports sur Time<span class="text-Orangee">2</span>match
              </h2>
              <p class="py-5">Il est important de bien s’équiper pour bien s’amuser !</p>
            </div>
          </div>

          <div class="flex flex-row justify-center p-8">
            <img src="public/Img/nyke.png" alt="partenaire nike" />
            <div class="flex flex-col">
              <p class="mx-5 text-left">
                Si vous souhaitez trouver <br />
                les meilleurs chaussures de football, <br />
                Nyke est la marque qu’il vous faut.
              </p>
              <p class="m-5 text-left font-bold text-Orangee">Visiter le site de Nyke</p>
            </div>
          </div>

          <div class="flex flex-row justify-center p-8">
            <img src="public/Img/adydas.png" alt="partenaire nike" />
            <div class="flex flex-col">
              <p class="mx-5 text-left">
                L’equipementier allemand Adydas <br />
                saura vous fournir les plus beaux, <br />
                maillots de basketball.
              </p>
              <p class="m-5 text-left font-bold text-Orangee">Visiter le site de Adydas</p>
            </div>
          </div>

          <div class="flex flex-row justify-center p-8 pb-20">
            <img src="public/Img/agorospace.png" alt="partenaire nike" />
            <div class="flex flex-col">
              <p class="mx-5 text-left">
                Que serait une partie de sport sans <br />
                un bon terrain ! C’est la mission <br />
                d’Agorospace.
              </p>
              <p class="m-5 text-left font-bold text-Orangee">Visiter le site d’Agorospace</p>
            </div>
          </div>
        </div>

        <Barre_droite></Barre_droite>
      </div>

      <!-- <div class="flex flex-row justify-center p-8">
      <img src="public/Img/nyke.png" alt="partenaire nike" />
      <div class="flex flex-col">
        <p class="mx-5 text-left">
          Si vous souhaitez trouver <br />
          les meilleurs chaussures de football, <br />
          Nyke est la marque qu’il vous faut.
        </p>
        <p class="m-5 text-left font-bold text-Orangee">Visiter le site de Nyke</p>
      </div>
    </div>

    <div class="flex flex-row justify-center p-8">
      <img src="public/Img/adydas.png" alt="partenaire nike" />
      <div class="flex flex-col">
        <p class="mx-5 text-left">
          L’equipementier allemand Adydas <br />
          saura vous fournir les plus beaux, <br />
          maillots de basketball.
        </p>
        <p class="m-5 text-left font-bold text-Orangee">Visiter le site de Adydas</p>
      </div>
    </div>

    <div class="flex flex-row justify-center p-8">
      <img src="public/Img/agorospace.png" alt="partenaire nike" />
      <div class="flex flex-col">
        <p class="mx-5 text-left">
          Que serait une partie de sport sans <br />
          un bon terrain ! C’est la mission <br />
          d’Agorospace.
        </p>
        <p class="m-5 text-left font-bold text-Orangee">Visiter le site d’Agorospace</p>
      </div>
    </div> -->
    </main>
    <footer>
      <FooterView />
    </footer>
  </div>
</template>

<script>
import MenuView from "../components/MenuView.vue";
import FooterView from "../components/FooterView.vue";

import Barre_droite from "../components/barre/barre_droite.vue";
import Barre_gauche from "../components/barre/barre_gauche.vue";

export default {
  name: "SportsView",
  components: {
    MenuView,
    FooterView,

    Barre_droite,
    Barre_gauche,
  },
};
</script>
