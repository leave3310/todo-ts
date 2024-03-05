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
        {
          path: "/:pathMatch(.*)*",
          name: RoutePath.INDEX,
          component: () => import("@/views/pages/IndexPage.vue"),
        },
      ],
    },
    {
      path: LayoutPath.WITHOUT_HEADER,
      name: LayoutName.WITHOUT_HEADER,
      component: () => import("@/views/layouts/WithoutHeader/LayoutBlock.vue"),
      meta: { isRequireGuest: true },
      children: [
        {
          path: RoutePath.LOGIN,
          name: RouteName.LOGIN,
          component: () => import("@/views/pages/LoginPage.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: RoutePath.LOGIN,
      component: () => import("@/views/pages/LoginPage.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const { getToken } = useAuthHandler();
  const token = getToken();
  const { meta } = to;

  if (!meta.isRequireGuest && !meta.isRequireAuth) {
    next();
  } else {
    if (to.meta.isRequireGuest) {
      if (token) {
        next({ name: RouteName.INDEX });
      } else {
        next();
      }
    }
    if (to.meta.isRequireAuth) {
      if (token) {
        next();
      } else {
        next({ name: RouteName.LOGIN });
      }
    }
  }
});

export default router;
