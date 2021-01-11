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
    <div class="title">
      <h1 class="title"> Colaboradores </h1>
      <div >
        <Collaborators type="is-collaborators" ></Collaborators>
        
      </div>
      
    </div>
  </div>
 

</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import ImageButton from "../components/ImageButton.vue";
import Collaborators from '../components/Collaborators.vue';

export default {
  name: "Home",
  components: {
    Carrousel,
    ImageButton,
    Collaborators
  },
  props: {
    type: String
  }
};
</script>
