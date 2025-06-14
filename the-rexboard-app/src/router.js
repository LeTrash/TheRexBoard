//src.router.js

import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import Academics from "./components/pages/academicsPage.vue";
import Calendar from "./components/Calendar.vue";
import Activities from "./components/pages/activitiesPage.vue";
import Fin from "./components/pages/finPage.vue";
import Health from "./components/pages/healthPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/academics", component: Academics },
  { path: "/activities", component: Activities },
  { path: "/fin", component: Fin },
  { path: "/health", component: Health },
  { path: "/calendar", component: Calendar },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
