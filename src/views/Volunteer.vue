<template>
  <div id="volunteer">
    <Banner :type="type" :title="`${$t('volunteer.help')}`" />
    <h1 class="title container">{{$t('volunteer.titleDo')}}</h1>
    <Do/>
    <Profile/>
    <div class="container">
      <div class="title">{{$t('volunteer.titleProject')}}</div>
      <div class="columns">
        <div class="column" v-for="item in datos('projects')" :key="item">
          <News :title="item.title" :type="item.type" :text="item.text" :path="item.path" />  
        </div>
      </div>
    </div>
    <div class="container">
      <div class="title">{{$t('volunteer.titleTestimony')}}</div>
      <div class="columns is-multiline">
        <div class="column is-one-fifth" v-for="testimony in datos('testimony')" :key="testimony">
          <Testimony 
          :name="testimony.name"
          :title="testimony.title"
          :type="testimony.type" />
        </div>
      </div>
    </div>   
  </div>
</template>

<script>

// This is necessary to access the Banner component
import Banner from "../components/Banner.vue";
import Do from "../components/VolunteerDo.vue";
import Profile from "../components/VolunteerProfile.vue";
import Testimony from "../components/Testimony.vue";
import News from "../components/News.vue";
import * as Data from '../data/volunteer.js';
import i18n from '../i18n';

export default {
  name: "Volunteer",
  data () {
    const data = Data.default
    const lang=`${i18n.locale}`
    return {
      data,
      lang,
    }
  },
  components: {
    Banner,
    Do,   
    Profile,     
    Testimony,
    News,
  },
  props: {
    type: String
  },
  methods:
  {
    //data according to language
    datos(section)
    {
      if(this.lang == "en")
        {
            if(section=="projects") {
              return this.data.en.projects
            } else if(section=="testimony") {
              return this.data.en.testimony
            } else {
              return null
            }
        }
        else
        {
            if(section=="projects") {
              return this.data.es.projects
            } else if(section=="testimony") {
              return this.data.es.testimony
            } else {
              return null
            }
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
ol.star {
  list-style-type: circle;
  padding-left: 3rem;
}
.np-buttons {
  text-align: center;

  .button {
    padding: 0px 50px;
    font-weight: bold;
  }
}
</style>
