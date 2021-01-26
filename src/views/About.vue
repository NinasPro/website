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
                <p class="title">Misión</p>
                <p>
                Empoderamos niñas y adolescentes a través de la enseñanza de 
                programación e inspiramos vocaciones científicas y tecnológicas.
                </p>
              </article>
              <article class="tile is-child notification is-primary">
                <p class="title">Visión</p>
                <p>
                Que todas las niñas de Chile vivan la ciencia y la 
                tecnología libres de estereotipos de género.
                </p>
              </article>
              <article class="tile is-child notification is-warning">
                <p class="title">Info</p>
                <p>
                ~Texto de relleno~
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="title">Historia</div>
      <p>Niñas Pro nace en el año 2016 como una agrupación de mujeres estudiantes 
        de ingeniería en computación que al ser testigos de la poca participación 
        femenina en sus salas de clases, buscaban promover vocaciones tecnológicas 
        en niñas y adolescentes a través de la enseñanza de programación competitiva.
      </p>
      <br>
      <p>
        En el año 2019 se formalizan como organización sin fines de lucro con un 
        equipo multidisciplinario de 12 personas, quienes buscan a través de la 
        enseñanza de programación y actividades de difusión, empoderar a niñas y 
        adolescentes, inspirar vocaciones y fomentar la participación en programas 
        STEAM (Acrónimo en inglés para Ciencias, Tecnología, Ingeniería, Artes y Matemáticas).
      </p>
      <br>
      <p>
        Con nuestras actividades hemos logrado aumentar todos los años la participación 
        de mujeres en las Olimpiadas Chilenas de Informática y hemos impulsado que otros 
        grupos de programación consideren la equidad de género como un tema importante 
        dentro de sus actividades. En los cursos y talleres que impartimos han participado 
        más de 500 niñas quienes han  adquirido conocimientos de programación y se han 
        unido a la comunidad de Niñas Pro(gramadoras).
      </p>
      <br>
      <p>
        En Niñas Pro creemos que es importante derribar los estereotipos  y que las 
        niñas vivan la experiencia de convertirse en creadoras de tecnología, para 
        que de esa forma, decidan informadas si desean seguir una carrera STEAM 
        en el futuro.
      </p>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";

export default {
  name: "About",
  components: {
    Banner
  },
  props: {
    type: String
  }
};
</script>

<style lang="scss" scoped>
  .np-content {
    margin-top: 5%;

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
  p {
    text-align: justify;
    font-size: 1.2rem;
  }
  .container {
    padding-top: 5%;
    padding-bottom: 5%;
  }
</style>
