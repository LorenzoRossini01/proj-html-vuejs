<script>
import { store } from "../store/index";
import HeaderNav from "../components/HeaderNav.vue";
import AppCarousel from "../components/AppCarousel.vue";

export default {
  data() {
    return { store };
  },

  components: {
    HeaderNav,
    AppCarousel,
  },
};
</script>

<template>
  <header>
    <header-nav></header-nav>
    <app-carousel></app-carousel>
  </header>
</template>

<style lang="scss" scoped>
nav {
  height: 100px;
  background-color: aqua;
}
</style>
