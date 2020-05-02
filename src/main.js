import Vue from "vue";
import VueRouter from "vue-router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import App from "./App.vue";
import router from "./router";

import "./main.scss";

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
