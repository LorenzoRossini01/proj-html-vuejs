<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,

      cardPeople: [
        {
          img: "h1-team-1a.jpg",
          name: "Nome Cognome",
          job: "kitchen reporter",
        },
        { img: "h1-team-2a.jpg", name: "Nome Cognome", job: "influencer" },
        {
          img: "h1-team-4a.jpg",
          name: "Frank Bailey",
          job: "kitchen reporter",
        },
        {
          img: "h1-team-3a.jpg",
          name: "Nome Cognome",
          job: "kitchen reporter",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="person" v-for="cardPerson in cardPeople">
      <img :src="store.getImgUrl(cardPerson.img)" alt="" />
      <div class="layover">
        <div>
          <h4>{{ cardPerson.name }}</h4>
          <p>{{ cardPerson.job }}</p>
          <span>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;

  .person {
    position: relative;
    width: calc(100% / 4);
    border-radius: 0;

    img {
      width: 100%;
    }
    .layover {
      position: absolute;
      top: 0;
      background-color: white;

      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0%;

      height: 50%;
      width: 50%;
      rotate: 45deg;

      overflow: hidden;
      div {
        background-color: #d2401e;
        width: 80%;
        height: 80%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        z-index: 1;
        text-align: center;

        span {
          display: flex;
          gap: 1rem;
        }
      }

      &::before {
        content: "";
        width: 150%;
        height: 150%;
        position: absolute;
        left: -25%;
        bottom: -25%;
        background-image: radial-gradient(#0000006d 10%, transparent 11%);
        background-size: 10px 10px;
        background-repeat: repeat;
        transform: rotate(45deg);
      }
    }
    &:hover .layover {
      width: 100%;
      height: 100%;
      opacity: 100%;
      transition: all ease-in-out 0.2s;
      rotate: 0deg;
    }
  }
}
</style>
