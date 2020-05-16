<template>
  <section :class="`hero is-medium ${type}`">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-8">
          <div class="column is-three-quarters np-banner-header">
            <img
               src="@/assets/logo.png"
               alt="Corporación Niñas Pro"
             />
            <h1 class="title">
              {{title}}
            </h1>
            <router-link :to="link"
              :class="`button ${type} is-inverted is-rounded is-large is-outlined`">
              {{button}}
            </router-link>
          </div>
          <div class="column is-one-quarter np-banner-symbol">
            <div class="np-symbol">;</div>
          </div>
          <div class="column">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Banner",
  components: {
  },
  props: {
    type: String,
    title: String,
    button: String,
    link: String
  }
};
</script>

<style lang="scss" scoped>

.hero.is-medium .hero-body {
  padding-bottom: 0rem;
  padding-top: 0rem;
  height: 500px;
}

.np-banner-header {
  .title {
    margin-top: 60px;
    font-size: 7rem;
  }

  .button {
    padding: 0px 50px;
  }
}

.np-banner-symbol {
  .np-symbol {
    margin-top: 100px;
    font-family: sans-serif;
    font-size: 12rem;
    font-weight: bold;
  }
}

@media only screen and (max-device-width: 1220px) {
  .np-banner-header {
    .title {
      font-size: 3rem;
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
}
</style>
