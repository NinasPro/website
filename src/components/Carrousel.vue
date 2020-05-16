<template>
  <b-carousel
    :animated="animated"
    :has-drag="drag"
    :autoplay="autoPlay"
    :pause-hover="pauseHover"
    :pause-info="pauseInfo"
    :pause-info-type="pauseType"
    :interval="interval">
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section :class="`hero is-medium ${type}`">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-8">
              <div class="column np-banner-header is-three-fifths">
                <img
                   src="@/assets/logo.png"
                   alt="Corporación Niñas Pro"
                 />
                 <h1 class="title">
                   {{carousel.title}}
                 </h1>
                 <h2 class="subtitle">
                   {{carousel.subtitle}}
                 </h2>
              </div>
              <div class="column np-banner-img">
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
      animated: 'slide',
      drag: true,
      autoPlay: true,
      pauseHover: false,
      pauseInfo: false,
      repeat: true,
      pauseType: 'is-primary',
      interval: 6000,
      carousels: [
        {
          title: 'Bienvenidas',
          subtitle: 'Empoderamos niñas y adolescentes a través de la enseñanza de programación e Inspiramos vocaciones científicas y tecnológicas',
          image: 'banner-img-1.jpg'
        },
        {
          title: 'Django Girls',
          subtitle: 'En Enero más de 45 mujeres participaron en Django Girls Santiago, una jornada para conocer este framework y desarrollar su primer sitio web.',
          image: 'banner-django-girls.jpg'
        },
        {
          title: 'Curso Virtual',
          subtitle: 'En Abril comenzamos con el tradicional curso de programación competitiva para Niñas. ¡Esta vez también en las regiones de Coquimbo y Concepción!',
          image: 'banner-curso.jpg'
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

.hero.is-medium .hero-body {
  padding-bottom: 0rem;
  padding-top: 0rem;
  height: 600px;
}

.np-banner-header {
  .title {
    margin-top: 100px;
    font-size: 6rem;
  }
  .subtitle {
    width: 70%;
  }
}

.np-banner-img {
  padding-bottom: 4rem;
  padding-top: 4rem;
  text-align: right;

  img {
    width: 100%;
    vertical-align: middle;
    max-width: 30rem;
  }
}

@media only screen and (max-device-width: 1220px) {
  .np-banner-header {
    .title {
      font-size: 3rem;
    }
    .subtitle {
      width: 100%;
    }
  }
}

@media only screen and (max-device-width: 768px) {
  .hero.is-medium .hero-body {
    height: inherit;
  }

  .np-banner-header {
    .title {
      margin-top: 20px;
    }
  }

  .np-banner-img {
    padding-top: 0rem;
    text-align: center;
  }
}
</style>
