<template>
  <div id="projects">
    <Banner :type="type" title="Incentiva" button="Únete hoy" link="/voluntariado/"/>
    <PhotoBanner :type="type" title="Iniciativa Incentiva" image="django-girls.jpg"/>
    <div class="container">
      <div class="description">
        <p class="title is-primary">
         Talleres Introductorios de Programación o Electrónica
        </p>
        <p>
        Talleres de 2 a 6 horas de duración en los que se realizan actividades
        prácticas de programación, con el objetivo de acercar a las niñas a la tecnología
        e incentivarlas a continuar aprendiendo sobre estas materias.
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
