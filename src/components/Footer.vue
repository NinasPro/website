<template>
  <footer :class="`hero is-medium ${type}`">
    <div class="container">
      <div class="columns">
        <div class="column is-2" >
          <a href="/">
            <img class="logo" src="/img/logo.446afc59.png" alt="Corporación Niñas Pro" width="100" height="100" >
          </a>
        </div>
        <div class="column is-2">
          <strong >{{$t('footer.project')}}</strong> 
          <ul>
            <li><router-link class="footer-link" to="/empodera/">{{$t('footer.empower')}}</router-link></li>
            <li><router-link class="footer-link" to="/incentiva/">{{$t('footer.incentive')}}</router-link></li>
            <li><router-link class="footer-link" to="/inspira/">{{$t('footer.inspire')}}</router-link></li>
            <li><router-link class="footer-link" to="/potencia/">{{$t('footer.power')}}</router-link></li>
          </ul>
        </div>
        <div class="column is-2">
          <strong >{{$t('footer.about')}}</strong> 
          <ul>
            <li><router-link class="footer-link" to="/somos#mision">{{$t('footer.purpose')}}</router-link></li>
            <li><router-link class="footer-link" to="/somos#historia">{{$t('footer.history')}}</router-link></li>
            <li><router-link class="footer-link" to="/equipo">{{$t('footer.team')}}</router-link></li>
            <li><router-link class="footer-link" to="/somos#memoria">{{$t('footer.memory')}}</router-link></li>
          </ul> 
        </div>
        <div class="column is-2">
          <strong >{{$t('footer.help')}}</strong> 
          <ul>
            <li><router-link class="footer-link" to="/alliances/">{{$t('footer.alliances')}}</router-link></li>
            <li><router-link class="footer-link" to="/voluntariado/">{{$t('footer.volunteer')}}</router-link></li>
            <li><a class="footer-link" href="https://yodono.cl/institucion/546/ninas_pro">{{$t('footer.donate')}}</a></li>
          </ul>
        </div>
        <div class="column is-3 is-offset-1">
          <div class="contactus">
            <strong>{{$t('footer.contact')}}</strong> <br>
            <a href="mailto:contacto@ninaspro.cl">contacto@ninaspro.cl</a>
          </div>
          <div class="rrss">
            <strong>{{$t('footer.rrss')}}</strong>
            <SocialNetworkButton
            pathTw="https://twitter.com/ninasPro"
            pathFb="https://www.facebook.com/NinasPro"
            pathIg="https://www.instagram.com/ninas_pro/"
            pathLi="https://www.linkedin.com/company/ninas-pro/"/>
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

<style lang="scss" scoped>
  footer {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  } 
  strong {
    color: white;
  }
  .container {
    width: 1080px;
  }
  .column {
    text-align: left;
    width: max-content;
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

@media only screen and (max-device-width: 1220px) {

  .container {
    padding: 2rem 20%;
  }

}
</style>