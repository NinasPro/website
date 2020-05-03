import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/views/Home")
    },
    {
      name: "about",
      path: "/somos/",
      component: () => import("@/views/About")
    },
    {
      name: "projects",
      path: "/proyectos/",
      component: () => import("@/views/Projects")
    },
    {
      name: "volunteer",
      path: "/voluntariado/",
      component: () => import("@/views/Volunteer")
    }
  ]
});
