<template>
  <div id="volunteer">
    <section :class="`hero ${type}`">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Voluntariado
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "Volunteer",
  components: {
  },
  props: {
    type: String
  }
};
</script>
