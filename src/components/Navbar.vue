<template>
  <b-navbar :transparent="true" :type="type" wrapper-class="container">
    <template v-if="logo" slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          class="logo"
          src="../assets/logo.png"
          alt="Corporación Niñas Pro"
        />
      </b-navbar-item>
    </template>
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
    "logo": Boolean,
    "type": String,
  }
};
</script>

<style scoped>
.logo {
  position: fixed;
  top: -10px;
  width: 400px;
  max-height: 350px;
}
.navbar-item {
  font-size: 18px;
  font-weight: bold;
  margin: 0px 40px;
}
</style>
