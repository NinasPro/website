<template>
  
  <div class="container block">
    <div class="columns is-multiline is-mobile block" >
      <div class="column is-3-desktop is-6-mobile block" v-for="item in data" :key="item.name" align="center">
          <a :href="item.url">
          <img  class ="block" :src="getImgUrl(item.image)" >
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