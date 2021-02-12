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

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .container {
    max-width: 1080px;
  }

}
</style>
