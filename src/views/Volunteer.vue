<template>
  <div id="volunteer">
    <Banner :type="type" title="¿Cómo participar?" link="/voluntariado/"/>
    
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
            <div class="np-buttons">
              <a href="https://forms.gle/Y2pqXdFFV6KYTCwJA" target="_blank" class="button is-primary is-rounded is-inverted">
                Postula aquí
              </a>  
            </div>
          </div>
          <div class="tile is-child box notification is-info">
            <p class="title">Crea tu sede</p>
            <p class="subtitle">Con tu ayuda podremos llegar a todos los rincones de Latinoamérica. </p>
            <div class="np-buttons">
              <a href="https://forms.gle/QmdFW83XghDiAZZk8" target="_blank" class="button is-info is-rounded is-inverted">
                Completa el formulario aquí
              </a>
            </div>
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
            <div class="np-buttons">
              <a href="https://www.linkedin.com/company/niñas-pro" target="_blank" class="button is-success is-rounded is-inverted">
                Ver ofertas disponibles
              </a>              
            </div>
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
.np-buttons {
  text-align: center;

  .button {
    padding: 0px 50px;
    font-weight: bold;
  }
}
</style>

