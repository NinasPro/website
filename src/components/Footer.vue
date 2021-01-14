<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-2">
          <img class="logo" src="/img/logo.446afc59.png" alt="Corporación Niñas Pro" width="100" height="100">
        </div>
        <div class="column is-1">
          <strong >{{title}}</strong> 
          <ul>
            <li>Cosa 1 :)</li>
            <li>Cosa 2 :)</li>
            <li>Cosa 3 :)</li>
          </ul> 
        </div>
        <div class="column is-1">
          <strong >{{title}}</strong> 
          <ul>
            <li>Cosa 1 :)</li>
            <li>Cosa 2 :)</li>
            <li>Cosa 3 :)</li>
          </ul>
        </div>
        <div class="column is-1">
          <strong >{{title}}</strong> 
          <ul>
            <li>Cosa 1 :)</li>
            <li>Cosa 2 :)</li>
            <li>Cosa 3 :)</li>
          </ul>
        </div>
        <div class="column is-2"></div>
        <div class="column">
          <strong >{{title}}</strong>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    "type": String,
  },
  data() {
    return {
      title: "Titulo",
    }
  },
}
</script>

<style scoped>
  footer {
    text-align: center;
    padding-left: 3px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #2596be;
    color: white;
  } 
  strong {
    color: white;
  }
  .column {
    margin-left: 10px;
    margin-right: 10px;
    text-align: left;
  }
  .logo {
    margin-top: 20px;
  }
</style>