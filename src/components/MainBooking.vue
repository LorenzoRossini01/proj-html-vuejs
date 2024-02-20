<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <form>
      <div class="input-group">
        <input type="number" class="form-control" />
        <span class="input-group-text" id="basic-addon2">Person</span>
      </div>
      <span>for</span>
      <div class="input-group">
        <input
          type="date"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
      <span>at</span>
      <div class="input-group">
        <input
          type="time"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
      <div class="btn btn-primary form-control">book a table</div>
      <p>*Powered by OpenTable</p>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/img/h3-background-img-3.jpg");
  p {
    color: white;
    margin-top: 0.5rem;
  }
  form {
    display: flex;
    column-gap: 2rem;
    align-items: center;
    height: 75px;
    width: 1200px;
    flex-wrap: wrap;
    span {
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 600;
      color: white;
    }
    .input-group {
      border-radius: 0;
      width: 200px;
      height: 75px;
      background-color: white;
      border: 2px solid #1f1f1f;
      display: flex;
      input,
      .input-group-text {
        border: none;
        background-color: white;
        border-radius: 0;
        color: #1f1f1f;
      }
      .input-group-text {
        text-transform: capitalize;
        background-image: url("../assets/svg/user-group-solid.svg");
        background-repeat: no-repeat;
        background-position: 90px 28px;
        background-size: 20px;
        flex-grow: 1;
        text-align: start;
      }
    }

    .btn {
      background-color: #d2401e;
      border-radius: 0;
      margin-left: 3rem;
      border: none;
      text-transform: uppercase;
      font-weight: 700;
      width: 200px;
      height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
