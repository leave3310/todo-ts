import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  // 4. Provide the history implementation to use. We
  // are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: [{ path: "/", component: () => import("@/pages/LoginPage.vue") }], // short for `routes: routes`
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
