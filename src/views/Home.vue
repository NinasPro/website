<template>
  <div id="home">
    <Carrousel :type="type"/>
    <div class="container">  <!--Iniciativas-->
      <div class="container-home">
        <div class="columns is-variable is-1">
          <div class="column" v-for="project in projectsHome" :key="project">
            <ProjectsHome :title=project.title :type=project.type :image=project.image :path=project.path :description=project.description />
          </div>
        </div>
      </div>
    </div>
    <!--Information-->
    <div>
      <Information type='left' image='inspired.jpg' text = "Si tienes menos de 18 años. Diviértete, aprende y conecta con otras Niñas Pro como tú." titulo="¡Participa!" boton ="Ver proximas actividades" Path="/voluntariado/"></Information>
    </div>
    <div>
      <Information type='right' image='django-girls.jpg' text = "Si quieres ayudarnos. Participa del voluntariado o ayúdanos a llegar a mas niñas a traves de donaciones." titulo="¡Involúcrate!" boton ="Mas información" Path="/proyectos/"></Information>
    </div>
    <!--Eventos -->
    <div>
      <div class="container">
        <h2 class="title" >
            Próximos eventos
        </h2> 
      </div>
      <div class="container-home">
        <Events > </Events>
      </div>
    </div>
    <!--Collaborators and partners -->
    <div class="container">
      <div class="container-home">
        <h1 class="title"> Nuestros Partners </h1>
          <Collaborators type="is-collaborators" ></Collaborators>
      </div>
    </div>
    <!-- News -->
    <div class="container">
      <div class="container-home">
      <div class="columns">
        <div class="column">
          <h1 class=title>Noticias</h1>
        </div>
        <div class="column">
          <b-button rounded class="moreinfobutton" type="is-medium is-info" @click="clickMe">Ver todas</b-button>
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
    </div>
    <!-- Newsletter Button -->
    <div class="container container-newsletter" >
      <a href="http://eepurl.com/gn7I3r" class="button newsletter is-rounded is-medium " >
          Suscribete al newsletter
      </a> 
    </div>
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import ProjectsHome from "../components/ProjectsHome.vue";
import Collaborators from '../components/Collaborators.vue';
import Information from '../components/Information.vue';
import Events from '../components/Event.vue';
import News from "../components/News.vue";
import * as Data from '../data/home.js';

export default {
  name: "Home",
  data(){
    const projectsHome = Data.default.projectsHome
    return{
      projectsHome,
    }
  },
  components: {
    Carrousel,
    ProjectsHome,
    Collaborators,
    Events,
    Information,
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
  font-size: 30px;
  margin-left: 18px;
  font-size: 26px;
  }
  .moreinfobutton {
    left: 76%;
  }
  .container-home {
    padding-bottom: 20%;
  }
  .newsletter{
    background-color: #2b88f7;
    color: white;
    font-size: 1.7em; 
  }
  .container-newsletter{
    padding-bottom:10%;
    text-align:center;
  }
</style>