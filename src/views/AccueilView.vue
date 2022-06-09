<template>
  <div>
    <header>
      <MenuView></MenuView>
    </header>
    <div class="bg-Noirr">
      <div>
        <div class="grid grid-cols-4">
          <div class="z-10 col-start-1 col-end-2">
            <barre_blanche />
          </div>

          <div class="col-start-2 col-end-4 row-start-1 row-end-3 m-48 flex flex-col">
            <h1 class="text-center font-quicksand text-8xl font-semibold">Time<span class="text-Orangee">2</span>Match</h1>

            <schearchView></schearchView>

            <div class="flex justify-center">
              <a href="#down"> <chevron class="mt-14" /></a>
            </div>
          </div>

          <div class="z-10 col-start-4 col-end-4 row-start-1 flex justify-end">
            <barre_orange />
          </div>
        </div>

        <div class="box2" id="down">
          <h3 class="p-5 font-quicksand text-3xl font-medium">Time2Match, c’est quoi ?</h3>
          <p class="p-2 font-quicksand text-lg font-normal">
            L’objectif est simple, pouvoir retrouver ses <br />
            amis pour jouer dans des terrains de <br />
            sport libre accès.
          </p>
        </div>

        <div class="grid grid-cols-6 py-5">
          <div class="col-start-1 col-end-3 row-start-1 row-end-3">
            <p>
              Si tu veux mettre des buts, <br />
              264 espaces de football libre accès <br />
              sont à ta disposition ! <br />
              <RouterLink class="block py-2 px-4" to="/terrains">
                <span class="text-Orangee">Tu peux les consulter ici. </span>
              </RouterLink>
            </p>
          </div>

          <div class="col-start-5 col-end-7 row-start-1 row-end-3">
            <p class="p_logo2">
              Si tu préfères mettre des smashes <br />
              à tes adversaires, 84 espaces de volleyball <br />
              sont la pour toi ! <br />
              <RouterLink class="block py-2 px-4" to="/terrains">
                <span class="text-Orangee">Tu peux les consulter ici. </span>
              </RouterLink>
            </p>
          </div>

          <logo_patte class="z-50 col-start-3 col-end-6 row-start-2 row-end-4" />

          <div class="col-start-1 col-end-3 row-start-4 row-end-6">
            <p class="p_logo3">
              Si ton truc c’est de mettre des paniers, <br />
              198 espaces de basketball n’attendent que toi ! <br />
              <RouterLink class="block py-2 px-4" to="/terrains">
                <span class="text-Orangee">Tu peux les consulter ici. </span>
              </RouterLink>
            </p>
          </div>

          <div class="col-start-5 col-end-7 row-start-4 row-end-6">
            <p class="p_logo4">
              Crée un compte et trouve <br />
              une partie sportive en moins de 5 minutes ! <br />
              <RouterLink class="block py-2 px-4" to="/terrains">
                <span class="text-Orangee">Tu peux les consulter ici. </span>
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <FooterView></FooterView>
    </footer>
  </div>
</template>

<script>
import barre_blanche from "../components/barre/barre_blanche.vue";
import barre_orange from "../components/barre/barre_orange.vue";
import user from "../components/user/user.vue";
import chevron from "../components/barre/chevron.vue";
import logo_patte from "../components/barre/logo_patte.vue";
import MenuView from "../components/MenuView.vue";

import FooterView from "../components/FooterView.vue";
import schearchView from "../components/schearchView.vue";

export default {
  components: { barre_blanche, barre_orange, user, chevron, logo_patte, MenuView, FooterView, schearchView },
};
</script>
