<template>
  
  <div class="container">
    <div class="columns is-multiline is-mobile" >
      <div class="column is-3-desktop is-6-mobile" 
        v-for="(item, i) in datos" :key="i"
        data-aos="fade-up" :data-aos-delay="700 + 100*i" data-aos-duration="1000" data-aos-anchor-placement="bottom-center"
        align="center">
          <a :href="item.url">
            <img :src="getImgUrl(item.image)">
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
            if(this.lang == "en") {
                return this.data.en.collaborators
            } else {
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
