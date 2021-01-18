<template>
  <div id="home">
    <Carrousel :type="type"/>
    <div class="container">
      <div class="columns is-variable is-1">
        <div class="column">
          <ProjectsHome title="Empodera" type="is-danger" image="laschicaspueden.jpg" path="/somos/"
          description="Curso Anual de Programación"/>
        </div>
        <div class="column">
          <ProjectsHome title="Inspira" type="is-info" image="lamarr.jpg" path="/somos/"
          description="Charla de Mujeres Pro"/>
        </div>
        <div class="column">
          <ProjectsHome title="Incentiva" type="is-warning" image="ninastic.jpg" path="/proyectos/"
          description="Talleres Introductorios de Programación"/>
        </div>
        <div class="column">
          <ProjectsHome title="Potencia" type="is-success" image="sororidad.jpg" path="/voluntariado/"
          description="Cursos Avanzados de Programación"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import ProjectsHome from "../components/ProjectsHome.vue";

export default {
  name: "Home",
  components: {
    Carrousel,
    ProjectsHome,
  },
  props: {
    type: String
  }
};
</script>
