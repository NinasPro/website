<template>
  <div id="projects">
    <section :class="`hero ${type}`">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Proyectos
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "Projects",
  components: {
  },
  props: {
    type: String
  }
};
</script>
