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
          <ProjectsHome title="Proyecto 1" type="is-info" image="lamarr.jpg" path="/somos/"/>
        </div>
        <div class="column">
          <ProjectsHome title="Proyecto 2" type="is-warning" image="ninastic.jpg" path="/proyectos/"/>
        </div>
        <div class="column">
          <ProjectsHome title="Proyecto 3" type="is-success" image="sororidad.jpg" path="/voluntariado/"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import ImageButton from "../components/ImageButton.vue";
import ProjectsHome from "../components/ProjectsHome.vue";

export default {
  name: "Home",
  components: {
    Carrousel,
    ImageButton,
    ProjectsHome,
  },
  props: {
    type: String
  }
};
</script>
