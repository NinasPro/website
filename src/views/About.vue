<template>
  <div id="about">
    <Banner :type="type" title="Somos" button="Únete hoy" link="/voluntariado/"/>
    <div class="container np-content">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent">
              <img src="@/assets/empower.jpg" alt="Sororidad y Colaboración">
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-success">
                <p class="title">
                  Empoderaramos a niñas y adolescentes a través de la enseñanza de
                  programación e inspiraramos vocaciones científicas y tecnológicas.
                </p>
              </article>
              <article class="tile is-child notification is-primary">
                <p class="title">Este 2020</p>
                <p class="subtitle">
                ¡Nuevas sedes en Concepción, Coquimbo y Santiago!
                </p>
                <p>
                  El crecimiento de nuestra red de voluntarias y voluntarios a otras regiones
                  nos ha permitido crear estas nuevas sedes, albergadas en la Universidad
                  Católica del Norte, la Universidad de Concepción, la Universidad de los Andes
                  y la Universidad de Chile.
                </p>
              </article>
              <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <article class="tile is-child notification is-info">
                    <p class="title">
                      +600
                    </p>
                    <p class="subtitle">
                       Niñas y Adolescentes
                    </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-info">
                    <p class="title">
                      +40
                    </p>
                    <p class="subtitle">
                      Personas Voluntarias
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <Sedes title="Titulo 1" type="is-info"  text="Descripcion de la sede" path="/enconstruccion/" image="programming.jpg"/>
        </div>
        <div class="column">
          <Sedes title="Titulo 2" type="is-info" text="Descripcion de la sede" path="/enconstruccion/" image="programming.jpg"/>
        </div>
        <div class="column">
          <Sedes title="Titulo 3" type="is-info" text="Descripcion de la sede" path="/enconstruccion/" image="programming.jpg"/>
        </div>
        <div class="column">
          <Sedes title="Titulo 4" type="is-info" text="Descripcion de la sede" path="/enconstruccion/" image="programming.jpg"/>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

import Banner from "../components/Banner.vue";
import Sedes from "../components/Sedes.vue";

export default {
  name: "About",
  components: {
    Banner,
    Sedes,
  },
  props: {
    type: String
  }
};
</script>

<style lang="scss" scoped>
  .np-content {
    margin-top: 30px;

    .tile {
      border-radius: 25px;

      .title {
        font-size: 2rem;
      }
      .subtitle {
        font-size: 1.5rem;
        font-weight: bold;
      }

      img {
        border-radius: 25px;
      }
    }
  }
</style>
