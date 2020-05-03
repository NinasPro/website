<template>
  <div id="about">
    <Banner :type="type" title="Somos" button="Únete hoy" link="/voluntariado/"/>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";

export default {
  name: "About",
  components: {
    Banner
  },
  props: {
    type: String
  }
};
</script>

<style lang="scss" scoped>
</style>
