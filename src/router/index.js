import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/views/Home"),
      props: { type: "is-primary" }
    },
    {
      name: "about",
      path: "/somos/",
      component: () => import("@/views/About"),
      props: { type: "is-info" }
    },
    {
      name: "projects",
      path: "/proyectos/",
      component: () => import("@/views/Projects"),
      props: { type: "is-warning" }
    },
    {
      name: "volunteer",
      path: "/voluntariado/",
      component: () => import("@/views/Volunteer"),
      props: { type: "is-success" }
    },
    {
      name: "underconstruction",
      path: "/enconstruccion/",
      component: () => import("@/views/UndCons"),
      props: { type: "is-danger" }
    }
  ]
});
