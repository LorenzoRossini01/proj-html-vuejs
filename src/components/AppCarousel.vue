<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,

      HeaderCarousel: [
        { img1: "h3-rev-img-1.png", img2: "h3-rev-img-2.png" },
        { img1: "h3-rev-img-3.png", img2: "h3-rev-img-4.png" },
        { img1: "h3-rev-img-5.png", img2: "h3-rev-img-6.png" },
      ],
      activeIndex: 0,
    };
  },

  methods: {
    getImgUrl(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },

    goNextSlide() {
      if (this.activeIndex >= this.HeaderCarousel.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
    },

    goPrevSlide() {
      if (this.activeIndex == 0) {
        this.activeIndex = this.HeaderCarousel.length - 1;
      } else {
        this.activeIndex--;
      }
    },

    goToSlide() {},
  },
};
</script>

<template>
  <div class="container-fluid p-0" style="background-color: #181818">
    <div class="wrapper">
      <img :src="getImgUrl(HeaderCarousel[activeIndex].img1)" alt="" />
      <img
        class="pizza-slice"
        :src="getImgUrl(HeaderCarousel[activeIndex].img2)"
        alt=""
      />
      <div @click="goPrevSlide()" class="prev-button"><span>prev</span></div>
      <div @click="goNextSlide()" class="next-button"><span>next</span></div>
      <div v-if="!HeaderCarousel" class="dots">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  .wrapper {
    height: 500px;
    padding: 50px 0 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .pizza-slice {
    position: absolute;
  }

  .prev-button,
  .next-button {
    rotate: 90deg;
    text-transform: uppercase;
    background-color: white;
    position: absolute;
    width: 100px;
    height: 100px;
    padding: 1rem 0;
    color: #d2401e;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .prev-button {
    left: 0;
    transform: translate(0, 50%);
    border-radius: 50%;
    span {
      padding-bottom: 2rem;
    }
  }
  .next-button {
    right: 0;
    transform: translate(0, -50%);
    border-radius: 50%;
    span {
      padding-top: 2rem;
    }
  }

  .dots {
    position: absolute;
    bottom: 30%;
    display: flex;
    gap: 5px;
    .dot {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #e4e4d4;
      &.active {
        background-color: #b7903c;
      }
    }
  }
}
</style>
