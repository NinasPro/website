<template>
  <div id="volunteer">
    <Banner :type="type" title="¿Cómo participar?" />
    
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child box notification is-primary">
            <p class="title">Voluntariado</p>
            <p class="subtitle">¡Únete y trabajemos juntos para disminuir la brecha de género en STEAM!
              Puedes apoyar en las siguientes áreas:
              <ol class="star">
                <li>Equipo de RRSS y difusión</li>
                <li>Equipo de diseño</li>
                <li>Equipo de tutorías</li>
                <li>Equipo de gestión</li>
                <li>Equipo de investigación en género y educación</li>
              </ol>              
            </p>
          </div>
          <div class="tile is-child box notification is-info">
            <p class="title">Crea tu sede</p>
            <p class="subtitle">Con tu ayuda podremos llegar a todos los rincones de Latinoamérica. </p>
            <p class="subtitle">Completa el siguiente formulario para postular a crear una nueva sede de Niñas Pro en tu ciudad.
            </p>
          </div>          
        </div>
        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child box notification is-info">
            <p class="title">Quiero hacer una donación</p>
            <p class="subtitle">Para saber más escríbenos a donaciones@ninaspro.cl</p>
          </div>
          <div class="tile is-child box notification is-success">
            <p class="title">Prácticas profesionales y oportunidades laborales</p>
            <p class="subtitle">¡Desarrolla tus competencias profesionales y expande tus conocimientos con nosotras! 
              </p>  
            <p class="subtitle">Si estás interesada(o) en realizar tu práctica o pasantía con nosotras, no dudes en escribirnos a 
              laboral@ninaspro.cl, indicando en qué podrías ayudarnos, currículum y pretensiones de sueldo.
            </p> 
          </div>          
        </div>        
      </div>    
    </div>    
  </div>
</template>

<script>

// This is necessary to access the Banner component
import Banner from "../components/Banner.vue";

export default {
  name: "Volunteer",
  components: {
    Banner   
  },
  props: {
    type: String
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 3rem;
}
ol.star {
  list-style-type: circle;
  padding-left: 3rem;
}
</style>
