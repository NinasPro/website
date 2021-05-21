<template>
  <div id="events">
    <Banner :type="type" :title="`${$t('navbar.events')}`"/>
    <Event :isCondensed="false"/>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Event from '../components/Event.vue';
import i18n from '../i18n'

export default {
  name: "Events",
  data(){
    const lang=`${i18n.locale}`
    
    return{
      lang,
    }
  },
  components: {
    Banner,
    Event
  },
  props: {
    type: String
  },
};
</script>

<style lang="scss" scoped>

</style>
