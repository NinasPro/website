<template>
  <div id="projects">
    <PhotoBanner :type="type" :title="`${$t('power.banner')}`" image="inspired.jpg"/>

    <section id="inspira">
      <div class="container">
        <h1 class="title">{{$t('power.title')}}</h1>
        <p class="subtitle" v-for="(texto, i) in datos('about')" :key="i">
          <span v-html="texto.text"/>
        </p>
        <br>
      </div>
    </section>

 <!--   <section id="equipo-power">
      <div class="container">
        <h1 class="title"> {{$t('power.titleTeam')}} </h1>
          <Team :team="datos('team')"/>
      </div>
    </section>-->

    <section>
      <div class="container">
        <h1 class="title"> {{$t('power.titlenovelties')}} </h1>
        <div class="row columns" v-for="item in datos('news')" :key="item.id">
          <div class="column is-4">
            <img class="embed-responsive-item" :src="getImgUrl(item.image)" >
          </div>
          <div class="column">
            <p class="subtitle" v-html="item.description"> {{item.description}} </p>
            <a class="button is-rounded is-info" v-for="(url,i) in item.link" :key="i" :href="url.url" target="_blank"> {{url.title}} </a>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import PhotoBanner from "../components/PhotoBanner.vue";
//import Team from "../components/Team.vue";
import * as Inspire from '../data/power.js';
import i18n from '../i18n'

export default {
  name: "Projects",
  components: {
    PhotoBanner,
    //Team,
  },
  data(){
    const lang=`${i18n.locale}`
    const data = Inspire.default
    
    return{
      data,
      lang,
    }
  },
  props: {
    type: String
  },
  methods: {
    //data according to language
    datos(section) {
      if(this.lang == "en") {
            if(section=="about"){
              return this.data.en.about
            } else if(section=="news"){
              return this.data.en.news
            } else if(section=="team"){
              return this.data.en.team
            } else {
              return null
            }
        } else {
            if(section=="about") {
              return this.data.es.about
            } else if(section=="news"){
              return this.data.es.news
            } else if(section=="team"){
              return this.data.es.team
            } else {
              return null
            }
        }
    },
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../main.scss';

section {
    margin: 160px 0;

    .title {
      font-size: 30px;
      font-weight: 600;
      text-align: center;
      padding-bottom: 20px;
    }

    .subtitle {
      font-size: 18px;
      text-align: left;
      margin-bottom: 40px;
    }

    a{
      margin-right: 1%;
    }
  }

#equipo-power{
  background-color: #fdca36;
  margin: 50px 0px;
}

.description {
  min-height: 500px;
  padding: 150px 0px;
  color: black;
  font-size: 2rem;
  font-weight: 600;

  .title {
    color: black;
    font-size: 3rem;
    padding: 20px 0px;
  }
}

@media only screen and (max-device-width: 768px) {
  .description {
    min-height: 100px;
    padding: 50px 0px;
    font-size: 1rem;
    font-weight: 400;

    .title {
      font-size: 2rem;
      padding: 10px 0px;
    }
  }
}

</style>

