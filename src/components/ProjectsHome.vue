<template>
  <div class="card">
        <div class="card-image">
          <figure>
            <img src="https://picsum.photos/250" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title"> {{title}} </p>
            </div>
          </div>
          <div class="content">
            <div class="content-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </div>
            <div class="np-footer">
              <router-link :to="path" :class="`button ${type} is-rounded is-medium`">
                Ver Más
              </router-link>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    "type": String,
    "title": String,
    "text": String,
    "path": String,
  },
  data() {
    return {
      moreinfo: "url del sitio",
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