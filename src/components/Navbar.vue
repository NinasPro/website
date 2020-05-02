<template>
  <b-navbar :transparent="true" :type="type" wrapper-class="container">
    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Inicio
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Somos
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Proyectos
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Voluntariado
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

<style scoped>
.navbar-item {
  font-size: 18px;
  font-weight: bold;
  margin: 0px 40px;
}
</style>
