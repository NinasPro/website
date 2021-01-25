import Vue from "vue";
import VueRouter from "vue-router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";


import App from "./App.vue";
import router from "./router";


import "./main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faFacebook, faInstagram, faLinkedin);

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueRouter);

Vue.component("vue-fontawesome", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
