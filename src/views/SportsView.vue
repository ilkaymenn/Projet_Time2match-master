<template>
  <div>
    <header>
      <MenuView></MenuView>
    </header>
    <main class="bg-Noirr text-Blancc">
      <div class="flex flex-row">
        <Barre_gauche></Barre_gauche>

        <div class="justify-center">
          <div>
            <h2 class="py-15 p-8 text-center font-quicksand text-8xl font-semibold">
              Les sports sur Time<span class="text-Orangee">2</span>match
            </h2>
            <p class="py-5">Non, vous ne trouverez pas le kayak.</p>
          </div>

          <div class="py-5">
            <div class="flex columns-3 items-center justify-center">
              <div class="flex items-center justify-around py-5">
                <IconFootball class="mx-4 h-1/5 w-1/5" />
                <h3 class="text-3xl uppercase">Le football</h3>
                <IconFootball class="mx-4 h-1/5 w-1/5" />
              </div>
            </div>
            <p class="py-4 text-center">
              Icônique sport du ballon rond, le football est le
              <br />
              sport le plus pratiqué en FRANCE, on compte <br />
              notamment plus de 2 198 703 licenciés.
            </p>

            <RouterLink class="flex justify-center" to="/terrains">
              <span class="text-Orangee underline">Trouver un espace de football</span>
            </RouterLink>
          </div>

          <div class="py-5">
            <div class="flex columns-3 items-center justify-center">
              <div class="flex items-center justify-around py-5">
                <IconBasketball class="mx-4 h-1/5 w-1/5" />
                <h3 class="text-3xl uppercase">le basketball</h3>
                <IconBasketball class="mx-4 h-1/5 w-1/5" />
              </div>
            </div>
            <p class="text-center">
              Le basketball est le 4ème sport le plus pratiqué en <br />
              FRANCE, on compte notamment <br />
              683 000 licenciés.
            </p>

            <RouterLink class="flex justify-center" to="/terrains">
              <span class="text-Orangee underline">Trouver un espace de basketball</span>
            </RouterLink>
          </div>

          <div class="py-5">
            <div class="flex columns-3 items-center justify-center">
              <div class="flex items-center justify-around py-5">
                <IconVolleyball class="mx-4 h-1/5 w-1/5" />
                <h3 class="text-3xl uppercase">le volleyball</h3>
                <IconVolleyball class="mx-4 h-1/5 w-1/5" />
              </div>
            </div>
            <p class="text-center">
              Plus souvent pratiqué en loisir sur les côtes, <br />
              le volleyball compte néanmoins <br />
              111 378 licenciés.
            </p>
            <RouterLink class="flex justify-center" to="/terrains">
              <span class="text-Orangee underline">Trouver un espace de volleyball</span>
            </RouterLink>
          </div>
        </div>

        <Barre_droite></Barre_droite>
      </div>
      <div class="flex justify-center py-5">
        <div class="m-5 flex w-fit flex-col items-center justify-center rounded-xl border-4 border-Orangee py-3">
          <p class="font-quicksand text-lg font-light">Vous ne trouvez pas votre sport favori ? Proposez-le nous !</p>
          <h5 class="font-quicksand text-2xl font-light text-Orangee">Nous contacter</h5>
        </div>
      </div>
    </main>
    <footer>
      <FooterView />
    </footer>
  </div>
</template>

<script>
import IconFootball from "../components/icones-sports.vue/icon-football.vue";
import IconBasketball from "../components/icones-sports.vue/icon-basketball.vue";
import IconVolleyball from "../components/icones-sports.vue/icon-volleyball.vue";
import MenuView from "../components/MenuView.vue";
import FooterView from "../components/FooterView.vue";

import Barre_droite from "../components/barre/barre_droite.vue";
import Barre_gauche from "../components/barre/barre_gauche.vue";

export default {
  name: "SportsView",
  components: {
    IconFootball,
    IconBasketball,
    IconVolleyball,
    MenuView,
    FooterView,

    Barre_droite,
    Barre_gauche,
  },
  data() {
    return {};
  },
};
</script>
