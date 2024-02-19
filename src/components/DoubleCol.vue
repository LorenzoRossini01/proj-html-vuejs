<script>
import { store } from "../store/index";

export default {
  data() {
    return { store };
  },

  props: {
    cols: Object,
  },
};
</script>

<template>
  <div class="col-6 my-2">
    <img :src="store.getImgUrl(cols.colOne.img1)" alt="" />
    <img class="logo" :src="store.getImgUrl(cols.colOne.img2)" alt="" />
  </div>
  <div class="col-6 my-2 details-col">
    <h2>{{ cols.colTwo.title }}</h2>
    <p>{{ cols.colTwo.description }}</p>

    <div class="details" v-for="(combo, index) in cols.colTwo.combos">
      <div class="price">${{ cols.colTwo.combos[index].price }}</div>
      <div>
        <h3>{{ cols.colTwo.combos[index].name }}</h3>
        <p>{{ cols.colTwo.combos[index].desc }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  position: relative;
  img {
    height: 100%;
    &.logo {
      height: 35%;
      position: absolute;
      right: 50%;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }

  &.details-col {
    padding: 15rem 20rem;
    h2 {
      font-size: 3.5rem;
      font-weight: 700;

      text-transform: uppercase;
    }
    p {
      font-size: 1.5rem;
    }

    .details {
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      margin-top: 2rem;

      .price {
        font-size: 2rem;
        line-height: 2rem;
        color: #d2401e;
        font-weight: 700;
      }
      h3 {
        text-transform: uppercase;
        font-weight: 700;

        line-height: 2rem;
        font-size: 2rem;
      }
    }
  }
}
</style>
