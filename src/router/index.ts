import { createRouter, createWebHashHistory } from "vue-router";

import { useAuthHandler } from "@/compositions/auth/useAuthHandler";

import {
  LayoutPath,
  LayoutName,
  RoutePath,
  RouteName,
} from "@/types/enum/router/index";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: LayoutPath.DEFAULT_LAYOUT,
      name: LayoutName.DEFAULT_LAYOUT,
      component: () => import("@/views/layouts/DefaultLayout/LayoutBlock.vue"),
      meta: { isRequireAuth: true },
      children: [
        {
          path: RoutePath.INDEX,
          name: RouteName.INDEX,
          component: () => import("@/views/pages/IndexPage.vue"),
        },
      ],
    },
    {
      path: LayoutPath.WITHOUT_HEADER,
      name: LayoutName.WITHOUT_HEADER,
      component: () => import("@/views/layouts/WithoutHeader/LayoutBlock.vue"),
      children: [
        {
          path: RoutePath.LOGIN,
          name: RouteName.LOGIN,
          component: () => import("@/views/pages/LoginPage.vue"),
        },
      ],
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isRequireAuth) {
    next();
  }

  const { getToken } = useAuthHandler();
  if (to.meta.isRequireAuth) {
    if (getToken()) {
      next();
    } else {
      next(RoutePath.LOGIN);
    }
  }
});

export default router;
