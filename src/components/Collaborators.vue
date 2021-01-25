<template>
  
  <div class="container">
    <div class="columns is-multiline is-mobile" >
      <div class="column is-3" v-for="item in data" :key="item.name">
          <a :href="item.url">
          <img  :src="getImgUrl(item.image)" width="270px" >
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
  padding-top: 10px;
  padding-left: 20px;
}
</style>