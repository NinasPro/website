import Vue from "vue";
import VueRouter from "vue-router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import i18n from './i18n'
import VueSmoothScroll from 'vue2-smooth-scroll'

import App from "./App.vue";
import router from "./router";

import "./main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { fas, faFilePdf, faMapMarkerAlt,faCalendarAlt,faClock} from "@fortawesome/free-solid-svg-icons";

library.add(faTwitter, faFacebook, faInstagram, faLinkedin, fas,faFilePdf,faMapMarkerAlt,faCalendarAlt,faClock);

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueRouter);
Vue.use(VueSmoothScroll, {
  duration: 600,
  updateHistory: false,
});

Vue.component("vue-fontawesome", FontAwesomeIcon);

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
