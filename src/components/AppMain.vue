<script>
import { store } from "../store/index";
import MainCard1 from "../components/MainCard1.vue";
import AppCarousel from "../components/AppCarousel.vue";
import DoubleCol from "../components/DoubleCol.vue";
import MainPeople from "../components/MainPeople.vue";
import MainPizzas from "../components/MainPizzas.vue";

export default {
  data() {
    return {
      store,
      mainCarousel: [
        {
          text: '"Forget the trendy pizza shops, this hidden spot makes the best new york-style pizza slice in naples"',
          by: "Washigton post 2018",
          background: "h3-testimonials-bckgrnd.jpg",
          bg: "#F6F7F2",
        },
        {
          text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium a error pariatur. Pariatur ratione nobis obcaecati enim deleniti quis vel nostrum."',
          by: "Washigton post 2018",
          background: "h3-testimonials-bckgrnd.jpg",
          bg: "#F6F7F2",
        },
        {
          text: '"Necessitatibus ullam, beatae temporibus, ipsam esse amet qui voluptatibus,  obcaecati enim deleniti quis vel nostrum."',
          by: "Washigton post 2018",
          background: "h3-testimonials-bckgrnd.jpg",
          bg: "#F6F7F2",
        },
      ],

      specialsCols: {
        colOne: { img1: "h1-img-4.jpg", img2: "h1-img-7n.png" },
        colTwo: {
          title: "specials*",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, sed Ullam sequi nesciunt tempore impedit eveniet",
          combos: [
            {
              price: "10",
              name: "combo piccolo",
              desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            },
            {
              price: "20",
              name: "combo medio",
              desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            },
            {
              price: "30",
              name: "combo grande",
              desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            },
          ],
        },
      },
    };
  },

  components: {
    MainCard1,
    AppCarousel,
    DoubleCol,
    MainPeople,
    MainPizzas,
  },
};
</script>

<template>
  <!-- cards -->
  <section>
    <div class="row g-2">
      <MainCard1></MainCard1>
    </div>
  </section>

  <!-- carousel  -->
  <section>
    <app-carousel :carousel="mainCarousel"></app-carousel>
  </section>

  <!-- menus -->
  <section>
    <div class="row">
      <double-col :cols="specialsCols"></double-col>
    </div>
  </section>

  <!-- banner -->
  <section>
    <div class="banner"></div>
  </section>

  <!-- people  -->
  <section>
    <MainPeople></MainPeople>
  </section>

  <!-- sponsor -->
  <section>
    <div class="sponsor"></div>
  </section>

  <!-- pizzas -->
  <section>
    <header>titolo</header>
    <div class="row">
      <div class="col">
        <main-pizzas></main-pizzas>
      </div>
      <div class="col">
        <main-pizzas></main-pizzas>
      </div>
      <div class="col">
        <main-pizzas></main-pizzas>
      </div>
      <div class="col">
        <main-pizzas></main-pizzas>
      </div>
      <div class="col">
        <main-pizzas></main-pizzas>
      </div>
      <div class="col">
        <main-pizzas></main-pizzas>
      </div>
    </div>
  </section>

  <!-- events -->
  <section>
    <div class="row flex-row-reverse">
      <double-col></double-col>
    </div>
  </section>

  <!-- book table  -->
  <section>
    <form>
      <input type="number" name="" id="" />
      <input type="date" name="" id="" />
      <input type="time" name="" id="" />
    </form>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  height: 500px;
  background-color: chartreuse;
}

.sponsor {
  height: 250px;
  background-color: chocolate;
}

form {
  height: 200px;
  background-color: aliceblue;
}
</style>
