<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-one-quarter">
          <a :href="pathTw">
            <vue-fontawesome :icon="['fab', 'twitter']"/>
          </a>
        </div>
        <div class="column is-one-quarter">
          <a :href="pathFb">
            <vue-fontawesome :icon="['fab', 'facebook']"/>
          </a>
        </div>
        <div class="column is-one-quarter">
          <a :href="pathLi">
            <vue-fontawesome :icon="['fab', 'linkedin']"/>
          </a>
        </div>
        <div class="column is-one-quarter">
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
    "pathLi": String,
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