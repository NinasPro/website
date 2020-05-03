<template>
  <div id="about">
    <section :class="`hero ${type}`">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Somos
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "About",
  components: {
  },
  props: {
    type: String
  }
};
</script>
