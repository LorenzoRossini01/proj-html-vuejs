<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,

      activeIndex: 0,
    };
  },

  props: {
    carousel: Array,
  },
  methods: {
    goNextSlide() {
      if (this.activeIndex >= this.carousel.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
    },

    goPrevSlide() {
      if (this.activeIndex == 0) {
        this.activeIndex = this.carousel.length - 1;
      } else {
        this.activeIndex--;
      }
    },

    goToSlide(dotIndex) {
      this.activeIndex = dotIndex;
    },
  },
};
</script>

<template>
  <div
    class="container-fluid p-0"
    :style="`background-color: ${carousel[activeIndex].bg}`"
  >
    <div class="wrapper">
      <!-- header  -->
      <img
        :src="store.getImgUrl(carousel[activeIndex].img1)"
        alt=""
        v-if="carousel[activeIndex].img1"
      />
      <img
        class="pizza-slice"
        :src="store.getImgUrl(carousel[activeIndex].img2)"
        v-if="carousel[activeIndex].img1"
        alt=""
      />

      <!-- main  -->
      <img
        :src="store.getImgUrl(carousel[activeIndex].background)"
        alt=""
        v-if="carousel[activeIndex].background"
      />

      <div class="details">
        <h3>{{ carousel[activeIndex].text }}</h3>
        <p>{{ carousel[activeIndex].by }}</p>
      </div>

      <div @click="goPrevSlide()" class="prev-button"><span>prev</span></div>
      <div @click="goNextSlide()" class="next-button"><span>next</span></div>
      <div v-if="carousel[activeIndex].background" class="dots">
        <div
          class="dot"
          :class="index == activeIndex ? 'active' : ''"
          @click="goToSlide(index)"
          v-for="(slide, index) in carousel"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  .wrapper {
    height: 500px;
    padding: 100px 0 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .pizza-slice {
    position: absolute;
  }

  .details {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    h3 {
      width: 1030px;
    }
    p {
      color: #d2401e;
    }
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
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    .dot {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #e4e4d4;
      &.active {
        background-color: #b7903c;
      }
    }
  }
}
</style>
