<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-variable is-1">
        <div class="column is-2">
          <img class="logo" src="/img/logo.446afc59.png" alt="Corporación Niñas Pro" width="100" height="100">
        </div>
        <div class="column is-2">
          <strong >Somos</strong> 
          <ul>
            <li><router-link class="footer-link" to="/somos/">Somos</router-link></li>
            <li><router-link class="footer-link" to="/somos/">Misión</router-link></li>
            <li><router-link class="footer-link" to="/somos/">Visión</router-link></li>
            <li><router-link class="footer-link" to="/somos/">Comunidad</router-link></li>
            <li><router-link class="footer-link" to="/somos/">Historia</router-link></li>
            <li><router-link class="footer-link" to="/somos/">Memorias</router-link></li>
          </ul> 
        </div>
        <div class="column is-2">
          <strong >Proyectos</strong> 
          <ul>
            <li><router-link class="footer-link" to="/proyectos/">Empodera</router-link></li>
            <li><router-link class="footer-link" to="/proyectos/">Incentiva</router-link></li>
            <li><router-link class="footer-link" to="/proyectos/">Inspira</router-link></li>
            <li><router-link class="footer-link" to="/proyectos/">Potencia</router-link></li>
          </ul>
        </div>
        <div class="column is-2">
          <strong >Cómo ayudar</strong> 
          <ul>
            <li><router-link class="footer-link" to="/somos/">Trabaja con nosotras</router-link></li>
            <li><router-link class="footer-link" to="/somos/">Hazte socia</router-link></li>
            <li><router-link class="footer-link" to="/somos/">Hazte voluntaria</router-link></li>
            <li><router-link class="footer-link" to="/somos/">Dona</router-link></li>
          </ul>
        </div>
        <div class="column is-1"></div>
        <div class="column">
          <div class="contactus">
            <strong>Contáctanos</strong> <br>
            <a href="mailto:contacto@ninaspro.cl">contacto@ninaspro.cl</a>
          </div>
          <div class="rrss">
            <strong>Sigue nuestras redes sociales</strong>
            <SocialNetworkButton
            pathTw="https://twitter.com/ninasPro"
            pathFb="https://www.facebook.com/NinasPro"
            pathIg="https://www.instagram.com/ninas_pro/"/>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialNetworkButton from "../components/SocialNetworkButton.vue";

export default {
  name: "Footer",
  components: {
    SocialNetworkButton,
  },
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
  .footer-link, a {
    color: white;
  }
  .contactus {
    margin-bottom: 15px;
  }
</style>