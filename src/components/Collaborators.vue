<template>
  
  <div class="fondo">
    <div class="level-item has-text-centered" >
        <a href="https://stackoverflow.com/questions/60723501/vue-how-can-i-do-click-in-image-and-redirect-to-page">
        <img  src="@/assets/images/angular.png" width="100px" height="100px">
        </a>
        <a href="https://www.uandes.cl/">
        <img  src="https://www.uandes.cl/extra/imagen-corporativa/marca-uandes/Marca_vertical.jpg" width="100px" height="100px">
        </a>
        <a href="https://www.uchile.cl/">
        <img  src="https://www.uchile.cl/image/f159277-0-h.jpeg?3144" width="100px" height="100px">
        </a>
        <router-link :to="/somos/">
        <img  src="@/assets/images/angular.png" width="100px" height="100px" >
        </router-link>
      
    </div>
    <div class="level-item has-text-centered">
      <a href="https://www.uchile.cl/">
        <img  src="https://www.uchile.cl/image/f159277-0-h.jpeg?3144" width="100px" height="100px">
        </a>
        <router-link :to="/somos/">
        <img  src="@/assets/images/angular.png" width="100px" height="100px" >
        </router-link>
    </div>
  </div>

  
</template>


<script>

export default {
  name: 'Demo',

  data () {
    return {
      
    }
  }
  

}
</script>

<style scoped>
  .fondo
  {
    background-color: whitesmoke;
  }

</style>
