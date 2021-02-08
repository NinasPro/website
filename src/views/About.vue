<template>
  <div id="about">
    <Banner :type="type" title="Somos" button="Únete hoy" link="/voluntariado/"/>
    <div class="container np-content">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent">
              <img src="@/assets/empower.jpg" alt="Sororidad y Colaboración">
            </div>
            <div class="tile is-parent is-vertical" >
              <div v-for="inf in data" :key="inf">
                <section :id="inf.id" class="margin">
                  <article :class="`tile is-child notification ${inf.type}`">
                    <p  class="title">{{inf.title}}</p>
                    <p>
                    {{inf.texto}}
                    </p>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div  id="historia" class="container">
      <div class="title">Historia</div>
        <p v-for="texto in historia" :key="texto">
          {{texto.text}} 
        </p>
        
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
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
  },
  props: {
    type: String
  }
};
</script>

<style lang="scss" scoped>
  .np-content {
    margin-top: 5%;

    .tile {
      border-radius: 25px;

      .title {
        font-size: 2rem;
      }
      .subtitle {
        font-size: 1.5rem;
        font-weight: bold;
      }

      img {
        border-radius: 25px;
      }
    }
  }
  p {
    text-align: justify;
    font-size: 1.2rem;
  }
  .container {
    padding-top: 5%;
    padding-bottom: 5%;
  }
  .margin{
    margin-bottom: 5%;
  }
</style>
