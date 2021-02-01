<template>
  <div id="projects">
    <Banner :type="type" title="Potencia" button="Únete hoy" link="/voluntariado/"/>
    <PhotoBanner :type="type" title="Iniciativa Potencia" image="django-girls.jpg"/>
    <div class="container">
      <div class="description">
        <p class="title is-primary">
         "Ellas Programan"
        </p>
        <p>
        Proyecto de identificación de talentos y fortalecimiento académico en
        programación competitiva. Este consiste en 10 sesiones teórico-prácticas
        con contenidos de nivel intermedio o avanzado, acompañamiento en
        instancias de entrenamiento intensivas y coaching para competencias
        durante el año.
        </p>
        <br>
        <p>
        Esta iniciativa agrupa las actividades que tienen como objetivo potenciar 
        las habilidades de niñas que ya están insertas en el mundo de las STEAM. 
        Las actividades que pertenecen a esta iniciativa en general tienen como 
        requisito conocer alguna herramienta o tecnología previamente.
        </p>
      </div>
    </div>
    <PeopleCarousel title="Equipo" :type="type"/>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import PhotoBanner from "../components/PhotoBanner.vue";
import PeopleCarousel from "../components/PeopleCarousel.vue";

export default {
  name: "Projects",
  components: {
    Banner,
    PhotoBanner,
    PeopleCarousel,
  },
  props: {
    type: String
  }
};
</script>

<style lang="scss" scoped>
@import '../main.scss';

.description {
  min-height: 500px;
  padding: 150px 0px;
  color: black;
  font-size: 2rem;
  font-weight: 600;

  .title {
    color: black;
    font-size: 3rem;
    padding: 20px 0px;
  }
}

@media only screen and (max-device-width: 768px) {
  .description {
    min-height: 100px;
    padding: 50px 0px;
    font-size: 1rem;
    font-weight: 400;

    .title {
      font-size: 2rem;
      padding: 10px 0px;
    }
  }
}

</style>
