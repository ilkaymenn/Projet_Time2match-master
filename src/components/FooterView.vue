<template>
  <div class="flex flex-wrap items-center justify-around bg-Orangee">
    <Barre_footer></Barre_footer>

    <div>
      <RouterLink class="block py-2 px-4" to="/mentionlegales">
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr hover:border-b-4 hover:border-b-Noirr hover:text-Blancc">
          Mention Légales
        </h5>
      </RouterLink>
    </div>

    <div>
      <RouterLink class="block py-2 px-4" to="/Apropos">
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr hover:border-b-4 hover:border-b-Noirr hover:text-Blancc">
          À PROPOS
        </h5>
      </RouterLink>
    </div>

    <div>
      <RouterLink class="block py-2 px-4" to="/contact">
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr hover:border-b-4 hover:border-b-Noirr hover:text-Blancc">
          NOUS CONTACTER
        </h5>
      </RouterLink>
    </div>
    <div class="flex">
      <Facebook class="mx-2"></Facebook>
      <Insta class="mx-2"></Insta>
      <Twitter class="mx-2"></Twitter>
    </div>
    <Barre_footer></Barre_footer>
  </div>
</template>

<script>
import Barre_footer from "./barre/barre_footer.vue";
import Facebook from "./resaux/facebook.vue";
import Insta from "./resaux/insta.vue";
import Twitter from "./resaux/twitter.vue";

export default {
  components: {
    Barre_footer,
    Facebook,
    Insta,
    Twitter,
  },
};
</script>
