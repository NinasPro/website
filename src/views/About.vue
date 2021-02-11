<template>
  <div id="about">
    <Banner :type="type" :title="`${$t('navbar.somos')}`"/>
    <div class="container np-content">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent">
              <img src="@/assets/empower.jpg" alt="Sororidad y Colaboración">
            </div>
            <div class="tile is-parent is-vertical" >
              <div v-for="inf in datos.data" :key="inf">
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
      <div class="title">{{$t('footer.history')}}</div>
        <p v-for="texto in datos.history" :key="texto">
          {{texto.text}} 
        </p>
        
    </div>
    <Memorie/>
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
  computed:
  {
    datos: function(){
        if(this.lang == "en")
        {
          return this.data.en
        }
        else
        {
          return this.data.es
        }
        
    }
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
