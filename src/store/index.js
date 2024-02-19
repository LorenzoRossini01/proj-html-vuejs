import { reactive } from "vue";

export const store = reactive({
  getImgUrl(img) {
    return new URL(`../assets/img/${img}`, import.meta.url).href;
  },
});
