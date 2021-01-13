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
      <router-link :to="path" :class="`button ${type} is-rounded is-medium`">
        {{text}}
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    "type": String,
    "text": String,
    "path": String,
    "title": String,
  },
  data() {
    return {
      title1: "Noticia",
      url: "url del sitio"
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
}
.title {
  font-size: larger;
}
figure {
  display: block;
  padding-top: 20px;
  padding-bottom: 0px;
  margin-left: 20px;
}
</style>