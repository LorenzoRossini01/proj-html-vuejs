<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
      cardImg: ["h3-img-1.jpg", "h3-img-2.jpg", "h3-img-3.jpg", "h3-img-4.jpg"],
    };
  },
};
</script>

<template>
  <div class="col-3" v-for="card in cardImg">
    <div class="card my-2">
      <img :src="store.getImgUrl(card)" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  border-radius: 0;
}
</style>
