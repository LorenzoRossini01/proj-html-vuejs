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
    setAutoplay() {
      this.autoplay = setInterval(() => {
        this.goNextSlide();
      }, 3000);
    },

    stopAutoplay() {
      clearInterval(this.autoplay);
    },
  },
};
</script>

<template>
  <div
    class="container-fluid p-0"
    :style="`background-color: ${carousel[activeIndex].bg}`"
  >
    <div
      class="wrapper"
      @mouseover="stopAutoplay()"
      @mouseleave="setAutoplay()"
    >
      <!-- header  -->
      <img
        class="pizza-slice-bg"
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
        class="cit"
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
  width: 100%;
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 500px;
  }
  .pizza-slice {
    scale: 0.7;
    animation: getbigger linear 3s infinite;
    position: absolute;
  }

  .pizza-slice-bg {
    scale: 1;
    transition: all ease-in 0.5s;
  }
  &:hover .pizza-slice {
    scale: 1;
    transition: all ease-in 0.5s;
  }
  &:hover .pizza-slice-bg {
    scale: 0.8;
    transition: all ease-in 0.5s;
  }

  .cit {
    width: 100%;
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
    height: 50px;
    padding: 1rem 0;
    color: #d2401e;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .prev-button {
    left: 0;
    transform: translate(0, 50%);
    border-radius: 50px 50px 0 0;
    span {
    }
  }
  .next-button {
    right: 0;
    transform: translate(0, -50%);
    border-radius: 0 0 50px 50px;
    span {
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
