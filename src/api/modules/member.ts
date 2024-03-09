import { AxiosError } from "axios";

import { apiEmailLogin, apiLogout } from "@/api/instances/member.ts";
import { useAlertHandler } from "@/compositions/common/useAlertHandler";
import { AlertType } from "@/types/enum/stores/common";
import { useAuthHandler } from "@/compositions/auth/useAuthHandler";
import { useRouterHandler } from "@/compositions/common/useRouterHandler";
import { RoutePath, RouteName } from "@/types/enum/router/index";
import type { EmailLoginRequest } from "@/types/api/instances/member.ts";
import type { ApiErrorResponse } from "@/types/api/utilities";

export const emailLogin = async (payload: EmailLoginRequest) => {
  const { updateAlertContent } = useAlertHandler();
  const { setToken } = useAuthHandler();
  const { delayVueRouterPush } = useRouterHandler();

  updateAlertContent({
    isShowAlert: false,
  });

  try {
    const res = await apiEmailLogin(payload);
    setToken(res.token);

    updateAlertContent({
      isShowAlert: true,
      type: AlertType.SUCCESS,
      content: "登入成功",
    });
    delayVueRouterPush({
      path: RoutePath.INDEX,
      name: RouteName.INDEX,
    });
  } catch (err) {
    const error = err as AxiosError<ApiErrorResponse>;

    updateAlertContent({
      isShowAlert: true,
      type: AlertType.DANGER,
      content: error.message,
    });
  }
};

export const logOut = async () => {
  const { vueRouterPush } = useRouterHandler();
  const { deleteToken } = useAuthHandler();
  const { updateAlertContent } = useAlertHandler();

  try {
    await apiLogout();

    deleteToken();
    updateAlertContent({
      isShowAlert: true,
      type: AlertType.SUCCESS,
      content: "登出成功",
    });
    vueRouterPush({
      path: RoutePath.LOGIN,
      name: RouteName.LOGIN,
    });
  } catch (err) {
    updateAlertContent({
      isShowAlert: true,
      type: AlertType.DANGER,
      content: "登出失敗，請稍後再試",
    });
  }
};
