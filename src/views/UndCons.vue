<template>
  <div id="underconstruction">
      <Banner :type="type" title="En Construcción" link="/voluntariado/" button="Pronto"/>
  </div>
</template>

<script>import Banner from "../components/Banner.vue";

export default {
  name: "UnderConstruction",
  components: {
    Banner,
  },
  props: {
    type: String
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open('Clicked!!')
    }
  }
};
</script>

<style scoped>
  .title {
  font-size: larger;
  }
</style>