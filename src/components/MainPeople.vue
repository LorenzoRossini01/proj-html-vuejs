<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,

      cardPeople: [
        "h1-team-1a.jpg",
        "h1-team-2a.jpg",
        "h1-team-4a.jpg",
        "h1-team-3a.jpg",
      ],
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="person" v-for="cardPerson in cardPeople">
      <img :src="store.getImgUrl(cardPerson)" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  display: flex;
  .person {
    height: calc(100vw / 4);
    width: calc(100vw / 4);
    border-radius: 0;
    margin: 0;
    padding: 0;

    img {
      width: 100%;
    }
  }
}
</style>
