<template>
    <div id="event">
        <Banner :type="type" :title="`${$t('navbar.alliances')}`" :button="`También quiero Apoyar`" link="mailto:recaudacion@ninaspro.cl?subject=Me gustaría colaborar con Niñas Pro" />
        <collaborators />
    </div>    
</template>

<script>
import Banner from "../components/Banner.vue";
import Collaborators from "../components/Collaborators.vue";

export default {
    name: "Alliances",
    components: {
        Banner,
        Collaborators
    },
    props: {
    type: String
  },
    
}
</script>

<style scoped>

</style>