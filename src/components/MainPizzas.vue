<script>
import { store } from "../store/index";
import PizzasCard from "./PizzasCard.vue";

export default {
  data() {
    return {
      store,

      pizzasArray: [
        {
          img: "h3-product-img-1a-100x100.png",
          name: "bismarck",
          price: "$30.00",
          sold: false,
        },
        {
          img: "h3-product-img-2a-150x150.png",
          name: "fiori di zucca",
          price: "$7.00 - $50.00",
          sold: false,
        },
        {
          img: "h3-product-img-6a-100x100.png",
          name: "valdostana",
          price: "$55.00",
          sold: true,
        },
        {
          img: "h3-product-img-4a-150x150.png",
          name: "pizza tartufata",
          price: "$45.00",
          sold: false,
        },
        {
          img: "h3-product-img-5a-150x150.png",
          name: "francescana",
          price: "$25.00",
          sold: false,
        },
        {
          img: "h3-product-img-3a-150x150.png",
          name: "campagnola",
          price: "$50.00 - $95.00",
          sold: false,
        },
      ],
    };
  },

  components: {
    PizzasCard,
  },
};
</script>

<template>
  <header>
    <p>choose your flavour</p>
    <h2>The best pizza menu in town</h2>
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        dignissimos molestiae fuga iste rerum magnam quidem iure similique dolor
        sint!
      </p>
    </div>
  </header>

  <div class="scroller">
    <div class="inner-scroller">
      <PizzasCard v-for="pizza in pizzasArray" :pizza="pizza"></PizzasCard>
      <PizzasCard v-for="pizza in pizzasArray" :pizza="pizza"></PizzasCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
  p {
    color: orange;
    margin-bottom: 0;
  }
  h2 {
    line-height: 2.5rem;
    font-size: 2.5rem;
    font-weight: 700;
  }
  div {
    p {
      text-transform: none;
      width: 900px;
      color: gray;
    }
  }
}
.scroller {
  max-width: 100%;
  overflow: hidden;

  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 10%,
    white 90%,
    transparent
  );
  .inner-scroller {
    width: max-content;
    display: flex;
    gap: 5rem;
    animation: scroll 20s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }
}
</style>
