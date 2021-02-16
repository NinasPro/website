<template>
  <b-carousel :pause-hover="false" :pause-info="false">
    <b-carousel-item v-for="(carousel,i) in datos" :key="i">
      <section :class="`hero is-medium ${type}`">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-8">
              <div class="column is-three-fifths banner-text">
                <h1 class="title"> {{carousel.title}} </h1>
                <h2 class="subtitle"> {{carousel.subtitle}} </h2>
              </div>
              <div class="column banner-image">
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

.banner-text {
  padding-top: 6rem;

  h1 {
    font-size: 70px;
  }
  h2 {
    font-size: 24px;
  }
}

@media only screen and (max-device-width: 1220px) {
  .banner-text {
    padding-top:0.75rem;

    h1 {
      font-size: 45px;
    }
    h2 {
      font-size: 20px;
    }
  }

  .banner-image {
    text-align: center;

    img {
      max-width: 300px;
    }
  }
}
</style>
