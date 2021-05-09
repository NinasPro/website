<template>
  <div id="history">
    <Banner :type="type" :title="`${$t('navbar.history')}`"/>

    <!-- History -->
    <section id="historia" class="container">
      <Timeline />
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
import Timeline from "../components/Timeline.vue";
import * as Informacion from '../data/about.js';
import i18n from '../i18n'

export default {
  name: "History",
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
    Timeline
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

    .subtitle {
      font-size: 1.5rem;
    }

    .is-v-spaced {
      padding: 3rem 1rem;
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
