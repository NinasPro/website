<template>
  <div id="app">
    <Navbar type="is-primary"/>
    <Carrousel type="is-primary"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Carrousel from "./components/Carrousel.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Carrousel
  }
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
