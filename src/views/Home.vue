<template>
  <div id="home">
    <Carrousel :type="type"/>
    <div class="container">  <!--Iniciativas-->
      <div class="container-home">
        <div class="columns is-variable is-1">
          <div class="column" v-for="project in datos('projects')" :key="project">
            <ProjectsHome :title="project.title" :type="project.type" :image="project.image" :path="project.path" :description="project.description" />
          </div>
        </div>
      </div>
    </div>
    <!--Information-->
    <div v-for="item in datos('information')" :key="item">
      <Information :type="item.type" :image="item.image" :text="item.text" :titulo="item.titulo" :boton="item.boton" :Path="item.Path" />
    </div>
    <!--Eventos -->
    <div>
      <div class="container">
        <h2 class="title" >
            {{$t('home.titleEvents')}}
        </h2> 
      </div>
      <div class="container-home">
        <Events > </Events>
      </div>
    </div>
    <!--Collaborators and partners -->
    <div class="container">
      <div class="container-home">
        <h1 class="title"> {{$t('home.titlePartners')}} </h1>
          <Collaborators type="is-collaborators" ></Collaborators>
      </div>
    </div>
    <!-- News -->
    <div class="container">
      <div class="container-home">
        <div class="columns">
          <div class="column">
            <h1 class=title>{{$t('home.titleNews')}}</h1>
          </div>
          <div class="column">
            <b-button rounded class="moreinfobutton" type="is-medium is-info" @click="clickMe">{{$t('home.seeAll')}}</b-button>
          </div>
        </div>
        <div class="columns">
          <div class="column" v-for="report in datos('new')" :key="report">
            <News :title="report.title" :type="report.type" :text="report.text" :path="report.path" />
          </div>
        </div>
      </div>
    </div>
    <!-- Newsletter Button -->
    <div class="container container-newsletter" >
      <a href="http://eepurl.com/gn7I3r" class="button newsletter is-rounded is-medium " >
          {{$t('home.newsletter')}}
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
    },
    //data according to language
    datos(section)
    {
      if(this.lang == "en")
        {
            if(section=="projects")
            {
              return this.data.en.projectsHome
            }
            else if(section=="information")
            {
              return this.data.en.information
            }
            else if(section=="new")
            {
              return this.data.en.news
            }
            else{
              return null
            }
        }
        else
        {
            if(section=="projects")
            {
              return this.data.es.projectsHome
            }
            else if(section=="information")
            {
              return this.data.es.information
            }
            else if(section=="new")
            {
              return this.data.es.news
            }
            else{
              return null
            }
        }
    }
  },
  
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