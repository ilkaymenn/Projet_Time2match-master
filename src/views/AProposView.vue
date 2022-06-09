<template>
  <div>
    <header>
      <MenuView />
    </header>
    <main class="bg-Noirr text-Blancc">
      <div class="justify-center">
        <div>
          <h2 class="py-15 p-8 text-center font-quicksand text-8xl font-semibold">L'équipe de <span class="text-Orangee">2</span>match</h2>
          <p class="py-5">Derrière ce site se cache toute une équipe de passionnés !</p>
        </div>
      </div>
      <div class="grid place-content-center bg-Noirr p-2 text-Blancc">
        <div class="flex flex-row">
          <Barre_gauche></Barre_gauche>

          <Barre_droite></Barre_droite>
        </div>

        <cardIlkay class="" />
        <cardAxel class="mt-20" />
        <cardMeldryck class="mt-20" />
      </div>
    </main>

    <footer>
      <FooterView></FooterView>
    </footer>
  </div>
</template>

<script>
import cardIlkay from "../components/card/cardIlkay.vue";
import cardAxel from "../components/card/cardAxel.vue";
import cardMeldryck from "../components/card/cardMeldryck.vue";
import MenuView from "../components/MenuView.vue";
import FooterView from "../components/FooterView.vue";

export default {
  components: {
    cardIlkay,
    cardAxel,
    cardMeldryck,
    MenuView,
    FooterView,
  },
};
</script>
