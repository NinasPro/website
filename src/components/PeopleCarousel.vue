<template>
  <div class="carrusel">
    <b-carousel-list
    v-model="values"
    :data="datos(iniciativa)"
    :arrow="arrow"
    :arrow-hover="arrowHover"
    icon-size="is-medium"
    :items-to-show="perList"
    :items-to-list="increment"
    :has-drag="drag"
    >
    
    <template slot="item" slot-scope="props">
      <div>
        <div class="card-image">
          <figure>
            <img :src="getImgUrl(props.list.image) ">
          </figure>
        </div>
        <div class="card-content">
          <h1 class="title">{{ props.list.text }}</h1>
          <p class="subtitle">{{ props.list.workstation }}</p>
          <p class="description">{{ props.list.description }} </p>
        </div>
      </div>            
    </template>
    </b-carousel-list>
</div>
</template>

<script>
  import * as Inspire from '../data/inspire.js';
  import * as Empower from '../data/empower.js';
  import * as Power from '../data/power.js';
  import * as Incentive from '../data/incentive.js';
  import i18n from '../i18n';
  
  export default {
    props: {
    "iniciativa": String,
    "perList":Int32Array,
    },
    data() {
      const inspire = Inspire.default;
      const empower = Empower.default;
      const power = Power.default;
      const incentive = Incentive.default;
      const lang=`${i18n.locale}`;
      return {
        arrow: true,
        arrowHover: true,
        values: 1,
        increment: 1,
        drag: true,
        repeat: false,
        lang,
        inspire,
        empower,
        power,
        incentive
      }
    },
    methods: {
    //data according to language
    datos(section) {
      if(this.lang == "en") {
            if(section=="inspire"){
              return this.inspire.en.team
            } else if(section=="empower") {
              return this.empower.en.team
            } else if(section=="power") {
              return this.power.en.team
            } else if(section=="incentive") {
              return this.incentive.en.team
            } else {
              return null
            }
        } else {
            if(section=="inspire"){
              return this.inspire.es.team
            } else if(section=="empower") {
              return this.empower.es.team
            } else if(section=="power") {
              return this.power.es.team
            } else if(section=="incentive") {
              return this.incentive.es.team
            } else {
              return null
            }
        }
    },
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    }
  },
  }
</script>

<style lang="scss" scoped>

.card-image {
  padding-top: 15px;
  text-align: center;

  figure {
  display: block;
  padding-top: 0px;
  padding-bottom: 10px;
  margin-left: 15px; 
  margin-right: 15px;

    img{
    border-radius: 150px 150px;
    height: 150px;
    }
  }
}


.card-content {
  text-align: center;
  margin-bottom: 10px;

  .title {
  text-align: center;
  font-size: 20px;
  margin-left: 10px;
  }
  .subtitle{
    text-align: center;
    font-size: 18px;
    margin-left: 10px;
  }

  .description {
  text-align: center;
  font-size: 14px;
  margin-left: 10px;
  }
}

.carrusel{
  padding-bottom: 10px;
}

vue-fontawesome {
  color: black;
}
</style>