import { useRoute } from "vue-router";

import Router from "@/router/index.js";
import { useAlertHandler } from "@/compositions/common/useAlertHandler";
import type { routerObjStruct } from "@/types/router/index";

export const useRouterHandler = () => {
  const { updateAlertContent } = useAlertHandler();

  const vueRouterPush = (routerObj: routerObjStruct) => {
    Router.push({ name: routerObj.name });
  };

  const delayVueRouterPush = (routerObj: routerObjStruct) => {
    setTimeout(() => {
      updateAlertContent({
        isShowAlert: false,
      });
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
