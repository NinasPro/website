<template>
  <div id="inspira">
    <Banner :type="type" :title="`${$t('inspire.banner')}`"/>

    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical is-4">
          <article class="tile is-child notification is-danger">
            <p class="title">Objetivo</p>
            <p class="subtitle">
              Visibilizar a mujeres que se desarrollan en áreas de 
              Ciencia, Tecnología, Física y Matemática (STEM) para
              crear nuevos modelos de rol.
            </p>
            <p class="subtitle">
              Derribar estereotipos de género relacionados a las
              areas de la ciencia, la ingeniería, la física y las
              matemáticas.
            </p>
          </article>
          <article class="tile is-child">
            <figure class="image is-4by4">
              <img src="@/assets/initiatives/adalovelace.jpg">
            </figure>
          </article>
        </div>
        <div class="tile is-vertical">
          <div class="tile is-parent">
            <article class="tile is-child">
              <figure class="image is-4by4">
                <img src="@/assets/initiatives/portrait-charlas.png">
              </figure>
            </article>
          </div>
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification is-info spaced">
                <p class="title">¿Cómo lo hacemos?</p>
                <p class="subtitle">
                  Organizamos encuentros en los que <b> Mujeres Pro </b> cuentan su experiencia
                  y presentan su trabajo. Buscamos generar espacios de conversación
                  donde las niñas puedan interactuar y resolver todas sus dudas.
                </p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-danger spaced">
                <div class="content">
                  <p class="title">Semana de Ada Lovelace</p>
                  <p class="subtitle">
                    El 2020 realizamos por primera vez una celebración en honor a Ada Lovelace
                    en la que niñas y mujeres en STEM realizaron charlas y conversatorios.
                  </p>
                  <b-button tag="a" class="is-danger" rounded inverted href="http://ada.ninaspro.cl" target="_blank">Ver sitio del evento</b-button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child notification is-danger">
            <p class="title">Empoderadas y Encuarentenadas</p>
            <p class="subtitle">
              En Junio de este año 2021 realizamos una semana de
              actividades para hablar de feminismo, salud mental, 
              empoderamiento y mucho más. ¡Los videos están 
              disponibles en youtube!
            </p>

            <div class="buttons">
              <b-button tag="a" class="is-danger" rounded inverted href="https://www.youtube.com/playlist?list=PLy7SgTVK30OSjW-5FwowhMHXfIncxw-BB" target="_blank">
              Videos
              </b-button>
              <b-button tag="a" class="is-danger" rounded inverted href="https://empoderadas.ninaspro.cl" target="_blank">
              Sitio Empoderadas
              </b-button>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child">
            <div class="videoWrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/WXufVOR7Rog" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
import Banner from "../components/Banner.vue";

export default {
  name: "Inspira",
  components: {
    Banner,
  },
  props: {
    type: String
  },
};
</script>

<style lang="scss" scoped>
@import '../main.scss';

.container {
  padding: 3rem 0;
}

</style>