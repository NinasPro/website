import Vue from "vue";
import VueRouter from "vue-router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18n from './i18n'
import VueSmoothScroll from 'vue2-smooth-scroll'
import VueTimeline from "@growthbunker/vuetimeline";

import App from "./App.vue";
import router from "./router";

import "./main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { fas, faFilePdf, faMapMarkerAlt,faCalendarAlt,faClock, faLanguage} from "@fortawesome/free-solid-svg-icons";

library.add(faTwitter, faFacebook, faInstagram, faLinkedin, fas,faFilePdf,faMapMarkerAlt,faCalendarAlt,faClock,faLanguage);

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueRouter);
Vue.use(VueSmoothScroll, {
  duration: 600,
  updateHistory: false,
});
Vue.use(VueTimeline, {
  theme: "light",
});


Vue.component("vue-fontawesome", FontAwesomeIcon);


new Vue({
  created () {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 199, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 300, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
    
    });
  },
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
