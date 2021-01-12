<template>
  <div id="home">
    <Carrousel :type="type"/>
    <div class="container">
      <div class="columns">
        <div class="column">
          <ImageButton type="is-info" image="lamarr.jpg" text="Somos" path="/somos/"/>
        </div>
        <div class="column">
          <ImageButton type="is-warning" image="ninastic.jpg" text="Proyectos" path="/proyectos/"/>
        </div>
        <div class="column">
          <ImageButton type="is-success" image="sororidad.jpg" text="¿Cómo participar?" path="/voluntariado/"/>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <News title="Titulo 1" url="http://ksjkfjs"/>
        </div>
        <div class="column">
          <News title="Titulo 2" url="http://ksjkfjs"/>
        </div>
        <div class="column">
          <News title="Titulo 3" url="http://ksjkfjs"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import ImageButton from "../components/ImageButton.vue";
import News from "../components/News.vue";

export default {
  name: "Home",
  components: {
    Carrousel,
    ImageButton,
    News,
  },
  props: {
    type: String
  }
};
</script>
