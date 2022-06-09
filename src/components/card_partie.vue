<template>
  <div class="h-96 w-80 bg-Blancc">
    <figure>
        <img :src="image" alt="terrains">
    </figure>
    <div class="bg-Orangee text-center font-quicksand text-xl font-bold text-Noirr"> <h1>{{ titre }} </h1></div>

    <div class="flex p-2">
      <Foot_card></Foot_card>
      <h2>{{ sport }}</h2>
    </div>

    <div class="flex p-2">
      <Horloge></Horloge>
      <h2>{{ horraire }}</h2>
    </div>

    <div class="flex p-2">
      <Loca></Loca>
      <h2>{{ lieux }}</h2>
    </div>
  </div>
</template>

<script>
import Foot_card from "./icone_card/foot_card.vue";
import Horloge from "./icone_card/horloge.vue";
import Loca from "./icone_card/loca.vue";

export default {
  components: {
    Foot_card,
    Horloge,
    Loca,
  },
  props: {

    image: {
      type: String,
      default: "/public/Img/terrain1.png"
      },

    

    titre: {
      type: String,

    },

    sport: {
      type: String,
    },

     horraire: {
      type: String,
    },

      lieux: {
      type: String,
    },

  }
}
</script>
