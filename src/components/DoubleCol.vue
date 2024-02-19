<script>
import { store } from "../store/index";

export default {
  data() {
    return { store };
  },
};
</script>

<template>
  <div class="col-6 my-2">card1</div>
  <div class="col-6 my-2">card2</div>
</template>

<style lang="scss" scoped>
div {
  height: 700px;
  background-color: cadetblue;
}
</style>
