<template>
  <div id="home">
    <Carrousel :type="type"/>
    <div class="container">
      <div class="columns is-variable is-1">
        <div class="column">
          <ProjectsHome title="Empodera" type="is-danger" image="laschicaspueden.jpg" path="/enconstruccion/"
          description="Curso Anual de Programación"/>
        </div>
        <div class="column">
          <ProjectsHome title="Inspira" type="is-info" image="lamarr.jpg" path="/somos/"
          description="Charla de Mujeres Pro"/>
        </div>
        <div class="column">
          <ProjectsHome title="Incentiva" type="is-warning" image="ninastic.jpg" path="/proyectos/"
          description="Talleres Introductorios de Programación"/>
        </div>
        <div class="column">
          <ProjectsHome title="Potencia" type="is-success" image="sororidad.jpg" path="/voluntariado/"
          description="Cursos Avanzados de Programación"/>
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
          <News title="Titulo 1" type="is-info" text="Ver noticia completa" path="/enconstruccion/"/>
        </div>
        <div class="column">
          <News title="Titulo 2" type="is-info" text="Ver noticia completa" path="/enconstruccion/"/>
        </div>
        <div class="column">
          <News title="Titulo 3" type="is-info" text="Ver noticia completa" path="/enconstruccion/"/>
        </div>
      </div>
    </div>
    <Footer> </Footer>
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import ProjectsHome from "../components/ProjectsHome.vue";
import Collaborators from '../components/Collaborators.vue';
import Events from '../components/Events.vue';
import News from "../components/News.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Carrousel,
    ProjectsHome,
    Collaborators,
    Events,
    News,
    Footer,
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