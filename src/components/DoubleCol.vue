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
  <div class="row specials" v-if="cols.colOne.img2">
    <div class="col my-2 col-img">
      <img :src="store.getImgUrl(cols.colOne.img1)" alt="" />
      <img class="logo" :src="store.getImgUrl(cols.colOne.img2)" alt="" />
    </div>
    <div class="col my-2 details-col">
      <div class="wrapper">
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
    </div>
  </div>

  <div class="row g-0 deals" v-else>
    <div class="col my-2 col-img">
      <img :src="store.getImgUrl(cols.colOne.img1)" alt="" />
    </div>
    <div class="col my-2 details-col">
      <div class="wrapper">
        <p>{{ cols.colTwo.description }}</p>
        <h2>{{ cols.colTwo.title }}</h2>

        <div class="details" v-for="(combo, index) in cols.colTwo.combos">
          <div class="date">
            <div class="date-day">
              {{ cols.colTwo.combos[index].dateDay }}
            </div>
            <div class="date-month">
              {{ cols.colTwo.combos[index].dateMonth }}
            </div>
          </div>
          <div>
            <h3>{{ cols.colTwo.combos[index].name }}</h3>
            <p>{{ cols.colTwo.combos[index].desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.specials {
  width: 100%;
  .col-img {
    position: relative;

    img {
      width: 100%;
      &.logo {
        width: 35%;
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translate(50%, -50%);
      }
    }
  }

  .details-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    .wrapper {
      width: 60%;
    }
    h2 {
      font-size: 3rem;
      font-weight: 700;

      text-transform: uppercase;
    }
    p {
      font-size: 1rem;
    }

    .details {
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      margin-top: 1.5rem;

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
.deals {
  flex-direction: row-reverse;

  width: 100%;

  .col-img {
    img {
      width: 100%;
    }
  }

  .details-col {
    padding: 3rem 0;
    background-color: #1a1a1a;

    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .wrapper {
      width: 60%;
    }
    h2 {
      font-size: 2.5rem;
      font-weight: 700;

      text-transform: uppercase;
    }
    p {
      font-size: 1rem;
      color: #ab4027;
      text-transform: uppercase;
      margin-bottom: 0;
    }

    .details {
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      border-bottom: 3px dotted #b7903c;
      margin-top: 2rem;

      &:last-child {
        border: none;
      }

      .date-day {
        font-size: 3rem;
        line-height: 3rem;
        color: #ab4027;
        font-weight: 700;
        margin-bottom: 1rem;
      }
      .date-month,
      h3 {
        text-transform: uppercase;
        font-weight: 600;

        line-height: 2rem;
        font-size: 1.5rem;
      }
      p {
        text-transform: capitalize;
        margin-bottom: 3rem;
      }
    }
  }
}
</style>
