<template>
  <div id="volunteer">
    <Banner :type="type" title="¿Cómo participar?" />
    <h1 class="title container">¿Que hace una persona voluntaria en Niñas Pro?</h1>
    <Do/>
    <Profile/>
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
    <div class="container">
      <div class="title">Proyectos en los que puedes involucrarte</div>
      <div class="columns">
        <div class="column" v-for="item in dataProjects" :key="item">
          <News :title=item.title :type=item.type :text=item.text :path=item.path />  
        </div>
      </div>
    </div>
    <div class="container">
      <div class="title">Testimonios</div>
      <div class="columns is-multiline">
        <div class="column is-one-fifth">
          <Testimony 
          name="Jane Doe" 
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris" 
          type="is-success"/>
        </div>
        <div class="column is-one-fifth">
          <Testimony 
          name="Jane Doe" 
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris" 
          type="is-info"/>
        </div>
        <div class="column is-one-fifth">
          <Testimony name="Jane Doe" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris" type="is-danger"/>
        </div>
        <div class="column is-one-fifth">
          <Testimony 
          name="Jane Doe" 
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris" 
          type="is-primary"/>
        </div>
        <div class="column is-one-fifth">
          <Testimony 
          name="Jane Doe" 
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris" 
          type="is-warning"/>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>

// This is necessary to access the Banner component
import Banner from "../components/Banner.vue";
import Do from "../components/VolunteerDo.vue";
import Profile from "../components/VolunteerProfile.vue";
import Testimony from "../components/Testimony.vue";
import News from "../components/News.vue";
import * as Data from '../data/volunteer.js';

export default {
  name: "Volunteer",
  data () {
    const dataProjects = Data.default.projects
    return {
      dataProjects,
    }
  },
  components: {
    Banner,
    Do,   
    Profile,     
    Testimony,
    News,
  },
  props: {
    type: String
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 3rem;
  margin-bottom: 3rem;
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
