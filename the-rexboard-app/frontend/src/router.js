//src.router.js

// import { createRouter, createWebHistory } from "vue-router"; For VUE 3

import Vue from "vue";
import Router from "vue-router";

//import components
import HomePage from "./components/HomePage.vue";
import Academics from "./components/pages/academicsPage.vue";
import Calendar from "./components/Calendar.vue";
import Activities from "./components/pages/activitiesPage.vue";
import Fin from "./components/pages/finPage.vue";
import Health from "./components/pages/healthPage.vue";
import Contact from "./components/pages/contactusPage.vue";
import form from "./components/EventForm.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/academics",
      name: "academics",
      component: Academics,
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar,
    },
    {
      path: "/activities",
      name: "activities",
      component: Activities,
    },
    {
      path: "/financial",
      name: "fin",
      component: Fin,
    },
    {
      path: "/health",
      name: "health",
      component: Health,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/form",
      name: form,
      component: form,
    },
  ],
});

// const routes = [
//   { path: "/", component: HomePage },
//   { path: "/academics", component: Academics },
//   { path: "/activities", component: Activities },
//   { path: "/fin", component: Fin },
//   { path: "/health", component: Health },
//   { path: "/calendar", component: Calendar },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
