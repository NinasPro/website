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
                Empoderar niñas y adolescentes a través de la enseñanza de 
                programación e inspirar vocaciones científicas y tecnológicas.
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
                <p class="title">Comunidad</p>
                <p>
                Confiamos en que colaborando y trabajando en equipo podemos
                lograr nuestro objetivo.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="title">Historia</div>
      <p>Niñas Pro nace en el año 2016 como una agrupación de mujeres 
      estudiantes de ingeniería que,al ser testigos de la poca 
      participación femenina en sus salas de clases, comenzaron a 
      realizar un curso gratuito de programación competitiva para 
      niñas y con ello promover vocaciones tecnológicas en niñas y 
      adolescentes.
      </p>
      <br>
      <p>
        En el año 2019 Niñas Pro se formaliza como organización sin 
        fines de lucro con un gran equipo de voluntariado en Santiago 
        y en el año 2020, se crean nuevas sedes (equipos auto-gestionados 
        de voluntariado) en Coquimbo y Concepción. Gracias al voluntariado
        y colaboraciones con universidades, empresas e instituciones públicas 
        realizamos cada año el curso anual de programación competitiva, 
        talleres introductorios de programación o electrónica y diferentes 
        proyectos para difundir las ciencias y la tecnología con niñas y 
        adolescentes.
      </p>
      <br>
      <p>
        Con nuestras actividades hemos logrado aumentar todos los años la 
        participación de mujeres en la Olimpiada Chilenas de Informática 
        y hemos impulsado que otros grupos de programación consideren la 
        equidad de género como un tema importante dentro de sus actividades. 
        En los cursos y talleres que impartimos han participado más de 2000 
        niñas quienes han adquirido conocimientos de programación y se han 
        unido a la comunidad de Niñas Pro(gramadoras).
      </p>
      <br>
      <p>
        En Niñas Pro creemos que es importante derribar los estereotipos
        y que las niñas vivan la experiencia de convertirse en creadoras
        de tecnología, para que de esa forma, decidan informadas si desean
        seguir una carrera STEAM en el futuro.
      </p>
    </div>
    <Memorie/>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Memorie from "../components/Memories.vue";

export default {
  name: "About",
  components: {
    Banner,
    Memorie,
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
