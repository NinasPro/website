<template>
  <div id="app">
    <Navbar v-bind:type="$route.matched[0] ? $route.matched[0].props.default.type : 'is-primary'"/>
    <router-view></router-view>
    <Footer v-bind:type="$route.matched[0] ? $route.matched[0].props.default.type : 'is-primary'"/>
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
  color: #363636;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .container {
    max-width: 1080px;
  }

  .button {
    font-weight: bold;
  }

  .videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  }

  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-device-width: 1220px) {
    overflow-x: hidden;
  }

}
</style>
