<template>
    <div id="event">
        <Banner :type="type" :title="`${$t('navbar.alliances')}`" />
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