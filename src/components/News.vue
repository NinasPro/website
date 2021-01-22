<template>
  <div class="container">
  <div class="card-image">
    <figure>
      <img src="@/assets/sororidad.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="content">
      <p class="title"> {{ title }} </p>
      <p class="description">Breve descripción de la noticia.</p>
      <router-link :to="path" :class="`button ${type} is-rounded is-small`">
        {{text}}
      </router-link>
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
}
</script>

<style scoped>
.card-image {
  text-align: center;
}
.title {
  text-align: left;
  font-size: 16px;
  margin-left: 10px;
}
.description {
  text-align: left;
  font-size: 14px;
  margin-left: 10px;
}
.columns, .content{
  text-align: center;
  padding-left: 10px;
}
figure {
  display: block;
  padding-top: 0px;
  padding-bottom: 10px;
  margin-left: 20px;
}
</style>