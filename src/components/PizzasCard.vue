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
  position: relative;
  .pizza-details {
    text-align: center;
    text-transform: uppercase;
    margin-top: 2rem;
    h3 {
      color: #bc984a;
      font-weight: 700;
    }
    p {
      color: #d2401e;
      font-weight: 700;
    }
  }

  .pizza-sold {
    background-color: #d2401e;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
</style>
