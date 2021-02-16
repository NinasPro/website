<template>
  
  <div class="container">
    <div class="columns is-multiline is-mobile" >
      <div class="column is-3-desktop is-6-mobile" 
        v-for="(item, i) in data" :key="i"
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
import * as Partners from '../data/collaborators.js';
export default {
  name: 'Demo',
  
  data () {
    const data = Partners.default.data
    return {
      data,
    }
  },
  methods: {
    getImgUrl(value) {
        return require(`@/assets/${value}`)
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