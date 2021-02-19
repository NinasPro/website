<template>
  <div id="projects">
    <PhotoBanner :type="type" title="Iniciativa Inspira" image="inspired.jpg"/>

    <section id="inspira">
      <div class="container">
        <h1 class="title">¿En qué consiste la iniciativa inspira?</h1>
        <p class="subtitle"> El objetivo de esta iniciativa es inspirar vocaciones científicas y 
        tecnológicas realizando actividades para visibilizar el quehacer de 
        mujeres y niñas en STEAM. En esta línea de trabajo se enmarcan las 
        charlas de mujeres invitadas a contar su experiencia, pero también 
        cualquier otra actividad que tenga relación directa con la creación de role models. </p>
        <p class="subtitle">
        Llevamos a mujeres que se desempeñan áreas STEAM y que utilizan la 
        programación de alguna forma en su día a día. El objetivo
        es inspirar a las niñas al presentarles profesiones que no son tan
        visibles o que están comunmente masculinizadas.
        </p>
        <br>
      </div>
    </section>
    <section id="equipo-inspira">
      <div class="container">
        <h1 class="title"> Equipo inspira </h1>
          <PeopleCarousel title="Equipo" :type="type"/>
      </div>
    </section>

    <section>
      <div class="container">
        <h1 class="title"> Novedades </h1>
        <div class="row columns">
          <div class="column is-4">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
          </div>
          <div class="column">
            <p class="subtitle"> Pueden participar niñas entre 15-18 años. </p>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import PhotoBanner from "../components/PhotoBanner.vue";
import PeopleCarousel from "../components/PeopleCarousel.vue";

export default {
  name: "Projects",
  components: {
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

section {
    margin: 160px 0;

    .title {
      font-size: 30px;
      font-weight: 600;
      text-align: center;
      padding-bottom: 20px;
    }

    .subtitle {
      font-size: 18px;
      text-align: left;
      margin-bottom: 40px;
    }
  }

#equipo-inspira{
  background-color: #fdca36;
  margin: 50px 0px;
}

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
