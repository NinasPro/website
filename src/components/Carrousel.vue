<template>
  <b-carousel :pause-hover="false" :pause-info="false">
    <b-carousel-item v-for="carousel in datos" :key="carousel">
      <section :class="`hero is-medium ${type}`">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-8">
              <div class="column np-banner-header is-three-fifths">
                <h1 class="title">
                 {{carousel.title}}
                </h1>
                <h2 class="subtitle">
                 {{carousel.subtitle}}
                </h2>
              </div>
              <div class="column np-banner-img">
                <img
                   :src="getImgUrl(carousel.image)"
                   alt="Corporación Niñas Pro"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
import * as Carrousel from '../data/home.js';
import i18n from '../i18n'


export default {
  name: "Carrousel",
  props: {
    "type": String,
  },
  data(){
    const lang=`${i18n.locale}`
    const carousels=Carrousel.default
    return {
      carousel: 0,
      carousels,
      lang,
    }
  },
  methods: {
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    }
  },
  computed:
  {
    //data according to language
    datos: function(){
        if(this.lang == "en") {
          return this.carousels.en.carousels
        } else {
          return this.carousels.es.carousels
        }
        
    }
  }
};
</script>

<style lang="scss" scoped>

.hero.is-medium .hero-body {
  padding: 0rem 5rem;
  height: 30rem;

  .np-banner-header {
    margin: 6rem 0rem;

    .title {
      font-size: 5.5rem;
    }
    .subtitle {
      width: 80%;
    }
  }

  .np-banner-img {
    margin: 0rem 0.75rem 3rem 0.75rem;
    text-align: right;

    img {
      max-height: 28rem;
      border-radius: 25px;
    }
  }
}

@media only screen and (max-device-width: 1220px) {
  .hero.is-medium .hero-body {
    padding: 0rem 3rem;
    height: 20rem;

    .np-banner-header {
      margin: 6rem 0rem;

      .title {
        font-size: 2rem;
      }
      .subtitle {
        width: 100%;
      }
    }

    .np-banner-img {
      img {
        max-height: 18rem;
      }
    }
  }
}

@media only screen and (max-device-width: 768px) {
  .hero.is-medium .hero-body {
    padding: 0rem 2rem;
    height: inherit;

    .np-banner-header {
      margin: 2rem 0rem;
    }

    .np-banner-img {
      text-align: center;

      img {
        max-height: 18rem;
      }
    }
  }
}
</style>
