<template>
  <div class="card">
        <div class="card-image">
          <figure>
<<<<<<< HEAD
            <img src="https://picsum.photos/250" alt="Placeholder image">
=======
            <img src="https://picsum.photos/210" alt="Placeholder image">
>>>>>>> 7e0a5dfc07aafc9fef6098851e7e92142e31aa40
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
<<<<<<< HEAD
              <p class="title"> {{title}} </p>
=======
              <p class="title"> {{ title }} </p>
>>>>>>> 7e0a5dfc07aafc9fef6098851e7e92142e31aa40
            </div>
          </div>
          <div class="content">
            <div class="content-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </div>
<<<<<<< HEAD
            <div class="np-footer">
              <router-link :to="path" :class="`button ${type} is-rounded is-medium`">
                Ver Más
              </router-link>
            </div>
=======
            <b-button @click="clickMe" type="is-primary">Ver Más</b-button>
>>>>>>> 7e0a5dfc07aafc9fef6098851e7e92142e31aa40
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    "type": String,
<<<<<<< HEAD
    "title": String,
    "text": String,
    "path": String,
  },
  data() {
    return {
      moreinfo: "url del sitio",
=======
  },
  data() {
    return {
      title: "Proyecto",
      moreinfo: "url del sitio"
>>>>>>> 7e0a5dfc07aafc9fef6098851e7e92142e31aa40
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
<<<<<<< HEAD
=======
  background-color:lightpink;
>>>>>>> 7e0a5dfc07aafc9fef6098851e7e92142e31aa40
}
.title {
  text-align: center;
  font-size: large;
}
.columns {
  text-align: center;
}
.content-description {
  margin-top: 0px;
  margin-bottom: 10px;
}
figure {
  display: block;
  padding-top: 20px;
  padding-bottom: 0px;
  margin-left: 20px;
}
</style>