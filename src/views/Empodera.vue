<template>
  <div id="projects">
    <Banner :type="type" title="Empodera" button="Únete hoy" link="/voluntariado/"/>
    <PhotoBanner :type="type" title="Iniciativa Empodera" image="django-girls.jpg"/>
    <div class="container">
      <div class="description">
        <p class="title is-primary">
         Programación Competitiva para Niñas
        </p>
        <p>
        Curso teorico-práctico de programación en
        <b-tooltip
          label="Lenguaje de programación de alto rendimiento y muy usado en la actualidad.
          Se utiliza en programación competitiva, en programación de arduinos, para
          el desarrollo de videojuegos, entre otros."
          dashed multilined>
          C++
        </b-tooltip>
        en donde las niñas desarrollan
        habilidades del pensamiento computacional y de resolución de problemas.
        Este curso de 18 sesiones también busca potenciar habilidades socioemocionales
        como la autoconfianza, la tolerancia a la frustración y la colaboración.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import PhotoBanner from "../components/PhotoBanner.vue";

export default {
  name: "Projects",
  components: {
    Banner,
    PhotoBanner
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
