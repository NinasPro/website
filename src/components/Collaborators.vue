<template>
  
  <div class="container block">
    <div class="columns is-multiline is-mobile block" >
      <div class="column is-3-desktop is-6-mobile block" v-for="item in datos" :key="item.name" align="center">
          <a :href="item.url">
          <img  class ="block" :src="getImgUrl(item.image)" >
          </a>
      </div>
      
    </div>
  </div>

  
</template>


<script>
import * as Partners from '../data/home.js';
export default {
  name: 'Collaborators',
  
  data () {
    const data = Partners.default
    return {
      data,
    }
  },
  methods: {
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    }
  },
  computed:
    {
        //data according to language
        datos: function(){
            if(this.lang == "en")
            {
            return this.data.en.collaborators
            }
            else 
            {
            return this.data.es.collaborators
            }
            
        }
    }
  

}
</script>

<style scoped>
.container {
  padding-top: 0px;
  padding-left: 20px;
}
</style>