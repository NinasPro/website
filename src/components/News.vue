<template>
  <div class="card">
  <div class="card-image">
    <figure>
      <img src="https://picsum.photos/210" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title"> {{ title }} </p>
      </div>
    </div>
    <div class="content">
      <b-button type="is-primary">Ver Más</b-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    "type": String,
  },
  data() {
    return {
      title: "Noticia",
      moreinfo: "url del sitio"
    }
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open('Clicked!!')
    }
  }
}
</script>

<style scoped>
.media-content, .card-image, .card-content {
  text-align: center;
  background-color:lightgrey;
}
.title {
  text-align: center;
  font-size: larger;
}
figure {
  display: block;
  padding-top: 20px;
  padding-bottom: 0px;
  margin-left: 20px;
}
</style>