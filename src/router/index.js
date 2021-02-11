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
    },
    {
      name: "inspira",
      path: "/inspira/",
      component: () => import("@/views/Inspira"),
      props: { type: "is-info" }
    },
    {
      name: "incentiva",
      path: "/incentiva/",
      component: () => import("@/views/Incentiva"),
      props: { type: "is-info" }
    },
    {
      name: "empodera",
      path: "/empodera/",
      component: () => import("@/views/Empodera"),
      props: { type: "is-info" }
    },
    {
      name: "potencia",
      path: "/potencia/",
      component: () => import("@/views/Potencia"),
      props: { type: "is-info" }
    },
    {
      name: "eventos",
      path: "/eventos/",
      component: () => import("@/views/Event"),
      props: { type: "is-primary" }
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
      else{
        return { x: 0, y: 0 }
      }
    }

    
  }
});
