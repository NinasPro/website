<template>
  <div id="home">
    <Carrousel :type="type"/>

    <!--Iniciativas-->
    <section id="iniciativas">
      <div class="container" data-aos="fade-up">
        <h1 class="title"> {{$t('home.titleProjects')}} </h1>
        <p class="subtitle"> {{$t('home.subtitleProjects')}} </p>
        <div class="columns is-variable is-1">
          <div class="column" v-for="(project, i) in datos('projects')" :key="i" data-aos="fade-up" :data-aos-delay="300 + 100*i">
            <ProjectsHome :title=project.title :type=project.type :image=project.image :path=project.path :description=project.description />
          </div>
        </div>
      </div>
    </section>

    <!--Information-->
    <section id="information">
    <div v-for="(item, i) in datos('information')" :key="i">
      <Information :type="item.type" :image="item.image" :text="item.text" :titulo="item.titulo" :boton="item.boton" :path="item.Path" />
    </div>
    </section>

    <!--Eventos -->
    <section id="events">
      <div class="container" >
        <h1 class="title"> {{$t('home.titleEvents')}} </h1>
        <p class="subtitle"> {{$t('home.subtitleEvents')}} </p>
        <Event/>
      </div>
    </section>

    <!-- Numbers -->
    <section id="metrics" class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <nav class="level">
            <div v-for="(item, i) in datos('metrics')" :key="i">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">{{item.name}}</p>
                  <p class="title">{{item.value}}</p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>

    <!--Collaborators and partners -->
    <section id="collaborators">
      <div class="container" data-aos="fade-up" data-aos-delay="200">
        <h1 class="title"> {{$t('home.titlePartners')}} </h1>
        <p class="subtitle">{{$t('home.subtitlePartners')}} </p>
        <div class="buttons">
          <b-button class="is-primary is-rounded " href="#">
              {{$t('home.buttonPartnersMail')}}
          </b-button>
        </div>
        <Collaborators type="is-collaborators"></Collaborators>
      </div>
    </section>

    <!-- Newsletter Button -->
    <!-- <section id="newsletter">
      <a class="button is-primary is-rounded is-large" href="http://eepurl.com/gn7I3r" target="_blank">
          {{$t('home.newsletter')}}
      </a>
    </section> -->
    
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import ProjectsHome from "../components/ProjectsHome.vue";
import Collaborators from '../components/Collaborators.vue';
import Information from '../components/Information.vue';
import Event from '../components/Event.vue';
import * as Data from '../data/home.js';
import i18n from '../i18n'

export default {
  name: "Home",
  data(){
    const lang=`${i18n.locale}`
    const data=Data.default
    return{
      lang,
      data
    }
  },
  components: {
    Carrousel,
    ProjectsHome,
    Collaborators,
    Event,
    Information,
  },
  props: {
    type: String
  },
  methods: {
    //data according to language
    datos(section) {
      if(this.lang == "en") {
            if(section=="projects"){
              return this.data.en.projectsHome
            } else if(section=="information") {
              return this.data.en.information
            } else if(section=="metrics") {
              return this.data.en.metrics
            } else {
              return null
            }
        } else {
            if(section=="projects") {
              return this.data.es.projectsHome
            } else if(section=="information") {
              return this.data.es.information
            } else if(section=="metrics") {
              return this.data.es.metrics
            } else {
              return null
            }
        }
    }
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

  #metrics {
    padding: 2rem 0 1rem 0;
  }

  #collaborators {
    .buttons {
      margin-top: 5rem;
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }

</style>