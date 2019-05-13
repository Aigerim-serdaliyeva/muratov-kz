import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
const router = new Router({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/clients",
      name: "clients",
      component: () => import("./views/Clients.vue")
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("./views/Contacts.vue")
    }
  ]
});

Vue.use(Router);
Vue.use(Meta);

export default router;
