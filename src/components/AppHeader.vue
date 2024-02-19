<script>
import { store } from "../store/index";
import HeaderNav from "../components/HeaderNav.vue";
import AppCarousel from "../components/AppCarousel.vue";

export default {
  data() {
    return {
      store,
      HeaderCarousel: [
        { img1: "h3-rev-img-1.png", img2: "h3-rev-img-2.png", bg: "#181818" },
        { img1: "h3-rev-img-3.png", img2: "h3-rev-img-4.png", bg: "#C83B1A" },
        { img1: "h3-rev-img-5.png", img2: "h3-rev-img-6.png", bg: "#FFA323" },
      ],
    };
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
    <app-carousel :carousel="HeaderCarousel"></app-carousel>
  </header>
</template>

<style lang="scss" scoped></style>
