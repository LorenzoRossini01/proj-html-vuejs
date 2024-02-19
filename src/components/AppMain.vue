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
        },
        {
          text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium a error pariatur. Pariatur ratione nobis obcaecati enim deleniti quis vel nostrum."',
          by: "Washigton post 2018",
          background: "h3-testimonials-bckgrnd.jpg",
        },
        {
          text: '"Necessitatibus ullam, beatae temporibus, ipsam esse amet qui voluptatibus,  obcaecati enim deleniti quis vel nostrum."',
          by: "Washigton post 2018",
          background: "h3-testimonials-bckgrnd.jpg",
        },
      ],
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
    <div class="row">
      <div class="col-3">
        <MainCard1></MainCard1>
      </div>
      <div class="col-3">
        <MainCard1></MainCard1>
      </div>
      <div class="col-3">
        <MainCard1></MainCard1>
      </div>
      <div class="col-3">
        <MainCard1></MainCard1>
      </div>
    </div>
  </section>

  <!-- carousel  -->
  <section>
    <app-carousel :carousel="mainCarousel"></app-carousel>
  </section>

  <!-- menus -->
  <section>
    <div class="row">
      <double-col></double-col>
    </div>
  </section>

  <!-- banner -->
  <section>
    <div class="banner"></div>
  </section>

  <!-- people  -->
  <section>
    <div class="row g-0">
      <div class="col-3">
        <MainPeople></MainPeople>
      </div>
      <div class="col-3">
        <MainPeople></MainPeople>
      </div>
      <div class="col-3">
        <MainPeople></MainPeople>
      </div>
      <div class="col-3">
        <MainPeople></MainPeople>
      </div>
    </div>
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
