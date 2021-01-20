<template>
  <div>
    <div class="container">
      <div class="title">{{title}}</div>
      <div class="columns is-variable is-1">
        <div class="column">
          <a :href="pathTw">
            <vue-fontawesome :icon="['fab', 'twitter']"/>
          </a>
        </div>
        <div class="column">
          <a :href="pathFb">
            <vue-fontawesome :icon="['fab', 'facebook']"/>
          </a>
        </div>
        <div class="column">
          <a :href="pathIg">
            <vue-fontawesome :icon="['fab', 'instagram']"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    "type": String,
    "pathTw": String,
    "pathFb": String,
    "pathIg": String,
    "title": String,
  },
}
</script>

<style scoped>
  .container {
    text-align: center;
  }
  .title {
    font-size: small;
  }
  a {
    color: white;
  }
</style>