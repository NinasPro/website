<template>
    <div id="event">
        <Banner :type="type" :title="`${$t('navbar.events')}`" />
        <Event/>
    </div>    
</template>

<script>
import Banner from "../components/Banner.vue";
import Event from "../components/Event.vue";
export default {
    name: "Eventos",
    components: {
        Banner,
        Event
    },
    props: {
    type: String
  },
    
}
</script>

<style scoped>

</style>