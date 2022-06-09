<template>
  <div>
    <header>
      <MenuView />
    </header>
    <main class="min-h-screen bg-Noirr text-Blancc">
      <div class="flex flex-row">
        <Barre_gauche></Barre_gauche>

        <div class="flex flex-col">
          <div class="justify-center">
            <div>
              <h2 class="py-15 p-8 text-center font-quicksand text-8xl font-semibold">Nous contacter</h2>
            </div>
          </div>

          <div class="flex items-center justify-around">
            <Logo class="h-[100px] w-[100px]"></Logo>
            <div class="flex flex-col">
              <form>
                <input
                  type="text"
                  class="my-5 rounded-full border-4 font-quicksand font-semibold text-Noirr placeholder:text-center placeholder:font-quicksand placeholder:text-lg placeholder:font-bold placeholder:text-Noirr focus:border-Orangee"
                  placeholder="Nom :"
                />
              </form>
              <form>
                <input
                  type="text"
                  class="my-5 rounded-full border-4 font-quicksand font-semibold text-Noirr placeholder:text-center placeholder:font-quicksand placeholder:text-lg placeholder:font-bold placeholder:text-Noirr focus:border-Orangee"
                  placeholder="Prénom :"
                />
              </form>
            </div>
          </div>
          <form>
            <input
              type="mail"
              class="my-5 w-full rounded-full border-8 font-quicksand font-semibold text-Noirr placeholder:text-center placeholder:font-quicksand placeholder:text-lg placeholder:font-bold placeholder:text-Noirr focus:border-Orangee"
              placeholder="Email  :"
            />
          </form>
          <form>
            <input
              type="text"
              class="my-5 w-full rounded-full border-8 font-quicksand font-semibold text-Noirr placeholder:text-center placeholder:font-quicksand placeholder:text-lg placeholder:font-bold placeholder:text-Noirr focus:border-Orangee"
              placeholder="Objet  :"
            />
          </form>

          <form>
            <input
              type="text"
              class="my-5 h-80 w-full rounded-lg border-8 font-quicksand font-semibold text-Noirr placeholder:font-quicksand placeholder:text-lg placeholder:font-bold placeholder:text-Noirr focus:border-Orangee"
              placeholder="Message  :"
            />
          </form>
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
import Logo from "../components/menu/logo.vue";

export default {
  components: {
    MenuView,
    FooterView,
    Barre_droite,
    Barre_gauche,
    Logo,
  },
};
</script>
