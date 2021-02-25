<template>
  <div id="about">
    <Banner :type="type" :title="`${$t('navbar.dona')}`"/>
    
    <section id="mision" class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child">
            <figure class="image is-1by1">
              <img src="@/assets/sororidad.jpg" alt="Sororidad y Colaboración">
            </figure>
          </div>
        </div>
        <div class="tile is-vertical" >
          <div :class="`tile size notification is-warning`">
              <p class="title"> {{datos}} </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import * as Informacion from '../data/donate.js';
import i18n from '../i18n'

export default {
  name: "About",
  data(){
    const lang=`${i18n.locale}`
    const data = Informacion.default
    
    return{
      data,
      lang,
    }
  },
  components: {
    Banner,
  },
  props: {
    type: String
  },
  computed:
  {
    //data according to language
    datos: function() {
        if(this.lang == "en"){
          return this.data.en.donate
        } else {
          return this.data.es.donate
        }
    }
  }
};
</script>

<style lang="scss" scoped>
  .tile {
    border-radius: 25px;

    .title {
      font-size: 2rem;
      text-align: center;
    }

    img {
      border-radius: 25px;
    }
    .size{
        margin: 35% 5%;
    }
  }

  #mision, #historia {
    margin-top: 130px;
    margin-bottom: 130px;
  }

</style>
