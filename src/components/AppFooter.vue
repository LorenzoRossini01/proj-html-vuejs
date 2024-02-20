<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,

      footerCols: {
        colDetails: {
          colOne: {
            title: "find our restaurants",
            locations: [
              {
                via: "1614 E. Bell Rd #104",
                citta: "Salerno AZ 85022",
                numTel: "(602) 867-1010",
              },
              {
                via: "204 E. Piazzetta Tommaso",
                citta: "Sorrento AZ 85022",
                numTel: "(358) 867-1010",
              },
              {
                via: "Viale Puglia 54",
                citta: "Torre Del Greco AZ 85022",
                numTel: "(359) 867-1010",
              },
              {
                via: "Corso Itali AA",
                citta: "Naples, AZ 85022",
                numTel: "(989) 867-1010",
              },
            ],
          },

          colTwo: {
            title: "working hours",
            days: [
              { subtitle: "monday", desc: "Kitchen Closed" },
              { subtitle: "tuesday until friday", desc: "9:00 - 22:00" },
              { subtitle: "saturday", desc: "Saturday 11am to midnight" },
              { subtitle: "sunday", desc: "9:00 - 22:00" },
            ],
          },

          colThree: {
            motto:
              "the don peppe crew first and foremost values an authentic, well baked slice of pizza.",
          },
        },

        colImg: { img: "footer-img-1.jpg" },
      },
    };
  },
};
</script>

<template>
  <div class="row g-0 footer">
    <div class="col-6 col-details">
      <div class="row">
        <div class="col-4 locations">
          <h3>{{ footerCols.colDetails.colOne.title }}</h3>
          <ul>
            <li
              v-for="(location, index) in footerCols.colDetails.colOne
                .locations"
              class="location"
            >
              <p>{{ footerCols.colDetails.colOne.locations[index].via }}</p>
              <p>{{ footerCols.colDetails.colOne.locations[index].citta }}</p>
              <p>{{ footerCols.colDetails.colOne.locations[index].numTel }}</p>
            </li>
          </ul>
        </div>
        <div class="col-4 working-hours">
          <h3>{{ footerCols.colDetails.colTwo.title }}</h3>
          <ul>
            <li v-for="(day, index) in footerCols.colDetails.colTwo.days">
              <h4>{{ footerCols.colDetails.colTwo.days[index].subtitle }}</h4>
              <p>{{ footerCols.colDetails.colTwo.days[index].desc }}</p>
            </li>
            <li>
              <h4>Follow us:</h4>
              <span>icon</span>
            </li>
          </ul>
        </div>
        <div class="col-4 motto">
          <h2>
            {{ footerCols.colDetails.colThree.motto }}
          </h2>
        </div>
      </div>
    </div>
    <div class="col-6 col-img">
      <!-- <img :src="store.getImgUrl(footerCols.colImg.img)" alt="" /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #1b1b1b;
  flex-wrap: nowrap;
  height: 700px;
  margin-top: 0.5rem;
  .col-img {
    background-image: url("../assets/img/footer-img-1.jpg");
    width: 100%;
    justify-self: flex-start;
    img {
      height: 100%;
    }
  }

  .col-details {
    padding: 7rem 5rem;
    background-image: url("../assets/img/footer-bottom-img.png");
    background-repeat: no-repeat;
    background-position: right 3rem bottom 2rem;

    h3 {
      text-transform: uppercase;
      font-size: 1.5rem;
      color: #b68a2c;
    }
    p {
      color: #8f8f8f;
    }

    ul {
      padding: 0;

      .location {
        margin: 2rem 0;
        p {
          margin: 0;
        }
      }
    }
    .working-hours {
      h4 {
        text-transform: uppercase;
        font-size: 1.2rem;
        color: #b68a2c;
      }
      li {
        &:first-of-type p {
          color: #d2401e;
        }
      }
    }

    .motto {
      color: white;
      text-transform: uppercase;
      h2 {
        font-size: 1.33rem;
      }
    }
  }
}
</style>
