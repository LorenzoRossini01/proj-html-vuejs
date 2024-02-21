<script>
import { store } from "../store/index";

export default {
  data() {
    return { store };
  },

  props: {
    pizza: Object,
  },
};
</script>

<template>
  <div class="card my-2">
    <img :src="store.getImgUrl(pizza.img)" alt="" />
    <div class="pizza-details">
      <h3>{{ pizza.name }}</h3>
      <p>{{ pizza.price }}</p>
    </div>

    <div v-if="pizza.sold" class="pizza-sold">sold</div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: none;
  width: 150px;
  padding: 2rem 0;
  position: relative;
  .pizza-details {
    text-align: center;
    text-transform: uppercase;
    margin-top: 2rem;
    h3 {
      color: #bc984a;
      font-weight: 700;
      font-size: 1.2rem;
    }
    p {
      color: #d2401e;
      font-weight: 700;
    }
  }

  .pizza-sold {
    background-color: #d2401e;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    position: absolute;
    right: 0;
    top: 0;
  }

  &:hover img {
    scale: 1.2;
    rotate: 360deg;
    transition: all ease-in-out 0.4s;
    filter: drop-shadow(-12px 33px 21px #00000037);
  }
}
</style>
