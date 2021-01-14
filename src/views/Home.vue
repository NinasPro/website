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
      <h1 class="title"> Nuestros Partners </h1>
      <div >
        <Collaborators type="is-collaborators" ></Collaborators>
        
      </div>
    </div>

  <div>
    <div class="container">
       <h2 class="title" >
           Próximos eventos
       </h2> 
    </div>
    <Events > </Events>
  </div>
  <div>
    <Information type='left' image='inspired.jpg' text = "Esto es una prueba a ver si tengo la informacion a la derecha <br> tambien salta de linea" a ="Mas informacion"></Information>
  </div>
  <div>
    <Information type='right' image='django-girls.jpg' text = "esto es un texto gigante para ver si puedo <br> realizar mi recado y que esto sea grande porque eso necesito" a ="Mas informacion"></Information>
  </div>
  </div>
 

</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import ImageButton from "../components/ImageButton.vue";
import Collaborators from '../components/Collaborators.vue';
import Events from '../components/Events.vue';
import Information from '../components/Information.vue';

export default {
  name: "Home",
  components: {
    Carrousel,
    ImageButton,
    Collaborators,
    Events,
    Information,
  },
  props: {
    type: String
  }
};
</script>
