<script>
import { store } from "../store/index";

export default {
  data() {
    return { store };
  },
};
</script>

<template>
  <nav>
    <div class="container">
      <div class="nav-left">
        <div class="btn btn-danger">order online</div>
      </div>
      <div class="nav-center">
        <ul>
          <li>
            <i class="fa-regular fa-font-awesome"></i>
            <span>home</span>
          </li>
          <li>
            <span>pages</span>
          </li>
          <li>
            <span>menu</span>
          </li>
        </ul>
        <div>
          <img src="../assets/img/h5-logo-divided-header.png" alt="" />
        </div>
        <ul>
          <li>
            <span>event</span>
          </li>
          <li>
            <span>blog</span>
          </li>
          <li>
            <span>landing</span>
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <div class="cart">
          <ul>
            <li>
              <i class="fa-regular fa-bell"></i>
              <span>cart</span>
            </li>
            <li>
              <i class="fa-solid fa-magnifying-glass"></i>
              <span>search</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  text-transform: uppercase;
  background-color: #181818;
  color: white;
  .container {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-left {
      .btn {
        background-color: #d2401e;
        border-radius: 0;
      }
    }
    .nav-center {
      display: flex;
      align-items: center;
      div {
        height: 100px;
        img {
          height: 100%;
        }
      }
    }

    ul {
      margin-bottom: 0;
      li {
        display: inline-block;
        margin: 0 1rem;
        cursor: pointer;
        i {
          margin: 0 0.25rem;
        }
      }
    }
  }
}
</style>
