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
        Inicio
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/somos/' }">
        Somos
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/proyectos/' }">
        Proyectos
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/voluntariado/' }">
        ¿Cómo participar?
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
