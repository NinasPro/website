<template>
  <div class="container">
    <div class="card-image">
      <figure>
        <img :src="getImgUrl(image)" alt="Placeholder image">
      </figure>
    </div>
    <div class="content">
      <p class="title"> {{title}} </p>
      <p class="description">{{description}}</p>
      <div class="morebutton">
        <router-link :to="path" :class="`button ${type} is-rounded is-medium`">
          Ver Más
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    "type": String,
    "image": String,
    "title": String,
    "text": String,
    "description": String,
    "path": String,
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open('Clicked!!')
    },
    getImgUrl(value) {
        return require(`@/assets/${value}`)
    },
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
  margin-left: 5%;
}
.description {
  text-align: left;
  font-size: 18px;
  margin-left: 5%;
}
.columns, .content{
  text-align: center;
  padding-left: 5%;
}
figure {
  display: block;
  padding-top: 10%;
  padding-bottom: 5%;
  padding-left: 8%;
}
.morebutton{
  font-weight: bold;
}
.container {
  padding-top: 70%;
}
</style>