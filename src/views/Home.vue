<template>
  <div id="home">
    <Carrousel :type="type"/>
    <div class="container">  <!--Iniciativas-->
      <div class="container-home">
        <div class="columns is-variable is-1">
          <div class="column" v-for="project in dataProjectsHome" :key="project">
            <ProjectsHome :title=project.title :type=project.type :image=project.image :path=project.path :description=project.description />
          </div>
        </div>
      </div>
    </div>
    <!--Information-->
    <div v-for="item in dataInformation" :key="item">
      <Information :type=item.type :image=item.image :text=item.text :titulo=item.titulo :boton=item.boton :Path=item.path />
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
          <div class="column" v-for="report in dataNews" :key="report">
            <News :title=report.title :type=report.type :text=report.text :path=report.path />
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
import Events from '../components/EventHome.vue';
import News from "../components/News.vue";
import * as Data from '../data/home.js';

export default {
  name: "Home",
  data(){
    const dataProjectsHome = Data.default.projectsHome
    const dataInformation = Data.default.information
    const dataNews= Data.default.news
    return{
      dataProjectsHome,
      dataInformation,
      dataNews,
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