<template>
  <b-navbar :transparent="true" :type="type" wrapper-class="container">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
         src="@/assets/logo.png"
         alt="Corporación Niñas Pro"
        />
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Iniciativas
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/somos/' }">
        Eventos
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/proyectos/' }">
        Somos
      </b-navbar-item>
      <b-navbar-item   tag="router-link" style="padding: 0px 20px;" :to="{ path: '/voluntariado/' }">
        <button class="button is-info" style="margin-top:40px; margin:0px 0px;">
          Involucrate
        </button>
      </b-navbar-item>
      <b-navbar-item   tag="router-link" style="padding: 0px 20px;" :to="{ path: '/voluntariado/' }">
        <button class="button is-donation" style="margin-top:40px; width: 50px; margin:0px 0px;" >
          Dona
        </button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    "type": String,
  },
};
</script>

<style lang="scss" scoped>

.navbar-item {
  font-size: 20px;
  font-weight: bold;
  padding: 0px 40px;
  
  img {
    height: 7rem;
    margin-top: 1rem;
    max-height: 10rem;
    
  }

}

</style>
