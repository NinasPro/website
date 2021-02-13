<template>
  <div id="about">
    <Banner :type="type" title="Somos" button="Únete hoy" link="/voluntariado/"/>
    
    <!-- Mision Vision Values -->
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
          <div :class="`tile is-child notification ${inf.type}`" v-for="(inf, i) in data" :key="i">
              <p class="title"> {{inf.title}} </p>
              <p> {{inf.texto}} </p>
          </div>
        </div>
      </div>
    </section>

    <!-- History -->
    <section id="historia" class="container">
      <div class="title">Historia</div>
        <p v-for="(texto, i) in historia" :key="i">
          {{texto.text}} 
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

export default {
  name: "About",
  data(){
    const data = Informacion.default.data
    const historia = Informacion.default.history
    return{
      data,
      historia,
    }
  },
  components: {
    Banner,
    Memorie,
  },
  props: {
    type: String
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
