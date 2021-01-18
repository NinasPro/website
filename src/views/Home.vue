<template>
  <div id="home">
    <Carrousel :type="type"/>
    <div class="container">
      <div class="columns">
        <div class="column">
          <ImageButton type="is-info" image="lamarr.jpg" text="Somos" path="/somos/"/>
        </div>
        <div class="column">
          <ImageButton type="is-warning" image="ninastic.jpg" text="Proyectos" path="/proyectos/"/>
        </div>
        <div class="column">
          <ImageButton type="is-success" image="sororidad.jpg" text="¿Cómo participar?" path="/voluntariado/"/>
        </div>
      </div>
      <h1 class="title"> Nuestros Partners </h1>
      <div >
        <Collaborators type="is-collaborators" ></Collaborators>
        
      </div>
    </div>

  <div>
    <div class="container">
       <h2 class="title" >
           Próximos eventos
       </h2> 
    </div>
    <Events > </Events>
  </div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class=title>Noticias</h1>
        </div>
        <div class="column">
          <b-button rounded class="moreinfobutton" type="is-small" @click="clickMe">Ver todas</b-button>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <News title="Titulo 1" type="is-info" text="Ver noticia completa" path="/somos/"/>
        </div>
        <div class="column">
          <News title="Titulo 2" type="is-info" text="Ver noticia completa" path="/somos/"/>
        </div>
        <div class="column">
          <News title="Titulo 3" type="is-info" text="Ver noticia completa" path="/somos/"/>
        </div>
      </div>
    </div>
  </div>
 

</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import ImageButton from "../components/ImageButton.vue";
import Collaborators from '../components/Collaborators.vue';
import Events from '../components/Events.vue';
import News from "../components/News.vue";

export default {
  name: "Home",
  components: {
    Carrousel,
    ImageButton,
    Collaborators,
    Events,
    News,
  },
  props: {
    type: String
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open('Clicked!!')
    }
  }
};
</script>

<style scoped>
  .column, .columns {
    border: 0px;
  }
  .title {
  font-size: larger;
  margin-left: 18px;
  }
  .moreinfobutton {
    left: 86%;
  }
</style>