<template>
  <b-carousel :pause-hover="false" :pause-info="false">
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section :class="`hero is-medium ${type}`">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-8">
              <div class="column is-three-fifths banner-text">
                <h1 class="title"> {{carousel.title}} </h1>
                <h2 class="subtitle"> {{carousel.subtitle}} </h2>
              </div>
              <div class="column banner-image">
                <img
                   :src="getImgUrl(carousel.image)"
                   alt="Corporación Niñas Pro"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  name: "Carrousel",
  props: {
    "type": String,
  },
  data(){
    return {
      carousel: 0,
      carousels: [
        {
          title: 'Bienvenidas',
          subtitle: 'Empoderamos a niñas y adolescentes a través de la enseñanza de programación e Inspiramos vocaciones científicas y tecnológicas',
          image: 'banner-img-1.png'
        },
        {
          title: 'Django Girls',
          subtitle: 'En Enero más de 45 mujeres participaron en Django Girls Santiago, una jornada de introducción al desarrollo de aplicaciones web.',
          image: 'banner-img-2.png'
        },
        {
          title: 'Curso Virtual',
          subtitle: 'En Abril comenzó el curso anual de programación competitiva para niñas en modalidad online. ¡Este año también en Coquimbo y Concepción!',
          image: 'banner-img-3.png'
        }
      ]
    }
  },
  methods: {
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    }
  }
};
</script>

<style lang="scss" scoped>

.banner-text {
  padding-top: 6rem;

  h1 {
    font-size: 70px;
  }
  h2 {
    font-size: 24px;
  }
}

@media only screen and (max-device-width: 1220px) {
  .banner-text {
    padding-top:0.75rem;

    h1 {
      font-size: 45px;
    }
    h2 {
      font-size: 20px;
    }
  }

  .banner-image {
    text-align: center;

    img {
      max-width: 300px;
    }
  }
}
</style>
