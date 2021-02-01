<template>
  <div id="app">
    <Navbar v-bind:type="$route.matched[0] ? $route.matched[0].props.default.type : 'is-primary'"/>
    <router-view></router-view>
    <Footer> </Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
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
