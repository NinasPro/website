<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-variable is-1">
        <div class="column is-2" >
          <a href="/">
            <img class="logo" src="/img/logo.446afc59.png" alt="Corporación Niñas Pro" width="100" height="100" >
          </a>
        </div>
        <div class="column is-2">
          <strong >{{$t('footer.about')}}</strong> 
          <ul>
            <li><router-link class="footer-link" to="/somos#mision">{{$t('footer.mission')}}</router-link></li>
            <li><router-link class="footer-link" to="/somos#vision">{{$t('footer.vision')}}</router-link></li>
            <li><router-link class="footer-link" to="/somos#comunidad">{{$t('footer.community')}}</router-link></li>
            <li><router-link class="footer-link" to="/somos#historia">{{$t('footer.history')}}</router-link></li>
            <li><router-link class="footer-link" to="/somos#memoria">{{$t('footer.memory')}}</router-link></li>
          </ul> 
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
          <strong >{{$t('footer.help')}}</strong> 
          <ul>
            <li><router-link class="footer-link" to="/somos/">{{$t('footer.workWithUs')}}</router-link></li>
            <li><router-link class="footer-link" to="/somos/">{{$t('footer.member')}}</router-link></li>
            <li><router-link class="footer-link" to="/somos/">{{$t('footer.volunteer')}}</router-link></li>
            <li><router-link class="footer-link" to="/somos/">{{$t('footer.dona')}}</router-link></li>
          </ul>
        </div>
        <div class="column is-1"></div>
        <div class="column">
          <div class="contactus">
            <strong>{{$t('footer.contact')}}</strong> <br>
            <a href="mailto:contacto@ninaspro.cl">contacto@ninaspro.cl</a>
          </div>
          <div class="rrss">
            <strong>{{$t('footer.redes')}}</strong>
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