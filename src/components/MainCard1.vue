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
      <div class="layover">
        <div>
          <span>
            <i class="fa-solid fa-eye"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  border-radius: 0;
  border: none;
}

.layover {
  position: absolute;
  top: 0;
  background-color: white;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0%;
  overflow: hidden;
  div {
    background-color: #d2401e;

    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1;

    span {
      display: flex;
      gap: 1rem;
    }
  }

  &:hover {
    opacity: 100%;
    transition: all ease-in-out 0.2s;
  }
  &::before {
    content: "";
    width: 250%;
    height: 350%;
    position: absolute;
    top: 0;
    background-image: radial-gradient(#0000006d 10%, transparent 11%);
    background-size: 10px 10px;
    background-position: center;
    background-repeat: repeat;
    transform: rotate(45deg);
  }
}
</style>
