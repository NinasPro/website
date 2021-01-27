<template>
  <div class="container">
  <div class="card">
  <div class="card-content">
    <p class="title">
      "{{ title }}"
    </p>
    <p class="subtitle">
      ~{{ name }}
    </p>
  </div>
</div>
  </div>
</template>

<script>
export default {
  props: {
    "type": String,
    "title": String,
    "name": String,
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
.title {
  text-align: left;
  font-size: 16px;
  margin-left: 5%;
}
.description {
  text-align: left;
  font-size: 16px;
  margin-left: 5%;
  padding-bottom: 3%;
}
.columns, .content{
  text-align: center;
  padding-left: 5%;
}
.card {
    background-color: white;
    border-radius: 2%;
}
</style>