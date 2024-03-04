import { useRoute } from "vue-router";

import Router from "@/router/index.js";
import type { routerObjStruct } from "@/types/router/index";

export const useRouterHandler = () => {
  const vueRouterPush = (routerObj: routerObjStruct) => {
    if (!Object.keys(routerObj).includes("name")) {
      return;
    }
    Router.push(routerObj);
  };

  const delayVueRouterPush = (routerObj: routerObjStruct) => {
    setTimeout(() => {
      vueRouterPush(routerObj);
    }, 3000);
  };

  const vueRoute = () => {
    const route = useRoute();
    return route;
  };

  return {
    vueRouterPush,
    delayVueRouterPush,
    vueRoute,
  };
};
