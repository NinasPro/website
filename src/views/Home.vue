<template>
  <div id="home">
    <Carrousel :type="type"/>
    

    <!--Iniciativas-->
    <section id="iniciativas">
      <div class="container">
        <h1 class="title"> ¿Cómo lo hacemos? </h1>
        <p class="subtitle"> Categorizamos nuestras actividades en las siguientes iniciativas </p>
        <div class="columns is-variable is-1">
          <div class="column" v-for="(project, i) in dataProjectsHome" :key="i">
            <ProjectsHome :title=project.title :type=project.type :image=project.image :path=project.path :description=project.description />
          </div>
        </div>
      </div>
    </section>

    <!--Information-->
    <section id="information">
    <div v-for="(item, i) in dataInformation" :key="i">
      <Information :type=item.type :image=item.image :text=item.text :titulo=item.titulo :boton=item.boton :path=item.path />
    </div>
    </section>

    <!--Eventos -->
    <section id="events">
      <div class="columns is-vcentered">
        <div class="column is-4">
          <h1 class="title"> Próximos eventos </h1>
          <p class="subtitle"> Todos nuestros eventos son gratuitos, ¡revisa los requisitos e inscríbete! </p>
          <router-link class="button is-rounded is-success" name="Mas información" title="Mas información" to='/eventos/'>
            Ver todos
          </router-link>
        </div>
        <div class="column">
          <Events> </Events>
        </div>
      </div>
    </section>

    <!--Collaborators and partners -->
    <section id="collaborators">
      <div class="container">
        <h1 class="title"> Nuestros Partners </h1>
        <p class="subtitle"> Agradecemos a las empresas, instituciones y organizaciones que confían en nosotras y nos ayudan a llegar a más niñas cada año. </p>
        <Collaborators type="is-collaborators"></Collaborators>
      </div>
    </section>

    <!-- Newsletter Button -->
    <section id="newsletter">
      <a class="button is-primary is-rounded is-large" href="http://eepurl.com/gn7I3r" target="_blank">
          Suscríbete al newsletter
      </a>
    </section>
    
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import ProjectsHome from "../components/ProjectsHome.vue";
import Collaborators from '../components/Collaborators.vue';
import Information from '../components/Information.vue';
import Events from '../components/EventHome.vue';
import * as Data from '../data/home.js';

export default {
  name: "Home",
  data(){
    const dataProjectsHome = Data.default.projectsHome
    const dataInformation = Data.default.information
    return{
      dataProjectsHome,
      dataInformation,
    }
  },
  components: {
    Carrousel,
    ProjectsHome,
    Collaborators,
    Events,
    Information,
  },
  props: {
    type: String
  },
};
</script>

<style lang="scss" scoped>  
  .column, .columns {
    border: 0px;
  }

  section {
    margin: 160px 0;

    .title {
      font-size: 30px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 30px;
    }

    .subtitle {
      font-size: 18px;
      text-align: center;
      margin-bottom: 40px;
    }
  }

  #events {
    .title, .subtitle {
      text-align: left;
      margin-left: 20%;
      margin-right: 20%;
    }
    .button {
      margin-left: 20%;
    }
    
  }

  #newsletter {
    text-align: center; 
  }
</style>