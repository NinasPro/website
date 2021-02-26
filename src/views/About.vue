<template>
  <div id="about">
    <Banner :type="type" :title="`${$t('navbar.about')}`"/>
    
    <section id="mision" class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child">
            <figure class="image is-1by1">
              <img src="@/assets/empower.jpg" alt="Sororidad y Colaboración">
            </figure>
          </div>
        </div>
        <div class="tile is-parent is-vertical" >
          <div :id="inf.id" :class="`tile is-child notification ${inf.type}`" v-for="(inf, i) in datos('data')" :key="i">
              <p class="title"> {{inf.title}} </p>
              <p> {{inf.texto}} </p>
          </div>
        </div>
      </div>
    </section>

    <!-- History -->
    <section id="historia" class="container">
      <div class="title">{{$t('footer.history')}}</div>
        <p v-for="(texto, i) in datos('history')" :key="i">
          <span v-html="texto.text"/>
        </p>
    </section>

    <!-- Memorias -->
    <section id="memories">
      <Memorie/>
    </section>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Memorie from "../components/Memories.vue";
import * as Informacion from '../data/about.js';
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
    Memorie,
  },
  props: {
    type: String
  },
  methods: {
    //data according to language
    datos(section) {
      if(this.lang == "en") {
            if(section=="data"){
              return this.data.en.data
            } else if(section=="history") {
              return this.data.en.history
            } else {
              return null
            }
        } else {
            if(section=="data") {
              return this.data.es.data
            } else if(section=="history") {
              return this.data.es.history
            } else {
              return null
            }
        }
    }
  },
};
</script>

<style lang="scss" scoped>
  .tile {
    border-radius: 25px;

    .title {
      font-size: 2rem;
    }

    img {
      border-radius: 25px;
    }
  }

  #mision, #historia {
    margin-top: 130px;
    margin-bottom: 130px;
  }

</style>
