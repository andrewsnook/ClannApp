import { createRouter, createWebHistory } from "@ionic/vue-router";

import ClannPage from "../pages/ClannPage"

const routes = [
  {
    path: "/",
    redirect: "/clann",
  },
  {
    path: "/clann",
    component: ClannPage
  },
  {
    path: "/clann/person/:id",
    component: () => import('../pages/PersonDetails.vue')
  },
  {
    path: "/IconsTestPage",
    component: () => import('../pages/IconsTestPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
