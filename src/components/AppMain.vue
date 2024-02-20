<script>
import { store } from "../store/index";
import MainCard1 from "../components/MainCard1.vue";
import AppCarousel from "../components/AppCarousel.vue";
import DoubleCol from "../components/DoubleCol.vue";
import MainPeople from "../components/MainPeople.vue";
import MainPizzas from "../components/MainPizzas.vue";
import MainBooking from "../components/MainBooking.vue";

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

      sponsors: [
        "h1-clients-img-4.png",
        "h1-clients-img-3.png",
        "h1-clients-img-1.png",
        "h1-clients-img-2.png",
        "h1-clients-img-5.png",
      ],

      dealsCols: {
        colOne: { img1: "h3-img-5a.jpg" },
        colTwo: {
          title: "delish pizza deals",
          description: "made with love",
          combos: [
            {
              dateDay: "02",
              dateMonth: "nov",
              name: "traditional neapolitan pies in kyoto pizza mercato",
              desc: "204 e. pizzetta tommaso",
            },
            {
              dateDay: "03",
              dateMonth: "nov",
              name: "terarazza patio dining space opening this weekend",
              desc: "204 e. pizzetta tommaso",
            },
            {
              dateDay: "05",
              dateMonth: "nov",
              name: "sienna private dining room with stéphane brunn",
              desc: "204 e. pizzetta tommaso",
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
    MainBooking,
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<template>
  <main>
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
      <double-col :cols="specialsCols"></double-col>
    </section>

    <!-- banner -->
    <section>
      <div class="banner">
        <div class="text-wrap">
          <h2>go ahead and build your own pizza we won't judge!</h2>
        </div>
      </div>
    </section>

    <!-- people  -->
    <section>
      <MainPeople></MainPeople>
    </section>

    <!-- sponsor -->
    <section>
      <div class="sponsor">
        <div v-for="sponsor in sponsors">
          <img :src="store.getImgUrl(sponsor)" alt="" />
        </div>
      </div>
    </section>

    <!-- pizzas -->
    <section>
      <main-pizzas></main-pizzas>
    </section>

    <!-- events -->
    <section>
      <double-col :cols="dealsCols"></double-col>
    </section>

    <!-- book table  -->
    <section>
      <main-booking></main-booking>
    </section>

    <!-- scroll to top  -->

    <div class="scroll-to-top" @click="scrollToTop()">
      <div>
        <img src="../assets/svg/svg-4.svg" alt="" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.banner {
  height: 500px;
  background-color: chartreuse;
  background-image: url("../assets/img/h3-background-img.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .text-wrap {
    width: 70%;
    h2 {
      color: white;
      text-transform: uppercase;
      font-weight: 700;
      width: 230px;
    }
  }
}

.sponsor {
  background-color: #f7f7f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
}

form {
  height: 200px;
  background-color: aliceblue;
}

main {
  position: relative;
}

.scroll-to-top {
  position: absolute;
  top: 100vh;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
  &:hover {
    transition: all ease-in 0.5s;
  }
  div {
    position: sticky;
    bottom: 2rem;

    height: 50px;
    aspect-ratio: 1;
    background-color: #f6f7f2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
