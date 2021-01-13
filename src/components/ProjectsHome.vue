<template>
  <div class="container">
    <div class="card-image">
      <figure>
        <img src="https://picsum.photos/350" alt="Placeholder image">
      </figure>
    </div>
    <div class="content">
      <p class="title"> {{title}} </p>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="morebutton">
        <router-link :to="path" :class="`button ${type} is-rounded is-small`">
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
.card-image {
  text-align: center;
}
.title {
  text-align: left;
  font-size: 12px;
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
  padding-top: 20px;
  padding-bottom: 10px;
  margin-left: 20px;
}
</style>