<template>
  <div id="projects">
    <Banner :type="type" title="Inspira" button="Únete hoy" link="/voluntariado/"/>
    <PhotoBanner :type="type" title="Iniciativa Inspira" image="inspired.jpg"/>
    <div class="container">
      <div class="description">
        <p class="title is-primary">
          Charlas de Mujeres en
          <b-tooltip
            label="Acrónimo en Inglés para Science, Technology, Engineering, Arts
            and Mathematics"
            dashed multilined>
            STEAM
          </b-tooltip>
        </p>
        <p>
        Llevamos a mujeres que se desempeñan áreas STEAM y que utilizan la 
        programación de alguna forma en su día a día. El objetivo
        es inspirar a las niñas al presentarles profesiones que no son tan
        visibles o que están comunmente masculinizadas.
        </p>
        <br>
        <p>
        El objetivo de esta iniciativa es inspirar vocaciones científicas y 
        tecnológicas realizando actividades para visibilizar el quehacer de 
        mujeres y niñas en STEAM. En esta línea de trabajo se enmarcan las 
        charlas de mujeres invitadas a contar su experiencia, pero también 
        cualquier otra actividad que tenga relación directa con la creación de role models.
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
