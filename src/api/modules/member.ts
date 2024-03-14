import { AxiosError } from "axios";

import {
  apiEmailLogin,
  apiSignUp,
  apiSignOut,
} from "@/api/instances/member.ts";
import { useAlertHandler } from "@/compositions/common/useAlertHandler";
import { AlertType } from "@/types/enum/stores/common";
import { useAuthHandler } from "@/compositions/auth/useAuthHandler";
import { useRouterHandler } from "@/compositions/common/useRouterHandler";
import { RoutePath, RouteName } from "@/types/enum/router/index";
import type {
  EmailLoginRequest,
  SignUpRequest,
} from "@/types/api/instances/member.ts";
import type { ApiErrorResponse } from "@/types/api/utilities";

const { updateAlertContent } = useAlertHandler();
const { setToken, deleteToken } = useAuthHandler();
const { delayVueRouterPush, vueRouterPush } = useRouterHandler();

export const emailLogin = async (payload: EmailLoginRequest) => {
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

export const emailRegister = async (payload: SignUpRequest) => {
  updateAlertContent({
    isShowAlert: false,
  });

  try {
    await apiSignUp(payload);

    updateAlertContent({
      isShowAlert: true,
      type: AlertType.SUCCESS,
      content: "註冊成功",
    });
    delayVueRouterPush({
      path: RoutePath.LOGIN,
      name: RouteName.LOGIN,
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

export const signOut = async () => {
  try {
    await apiSignOut();
    
    deleteToken();
    vueRouterPush({
      path: RoutePath.LOGIN,
      name: RouteName.LOGIN,
    });
    updateAlertContent({
      isShowAlert: true,
      type: AlertType.SUCCESS,
      content: "登出成功",
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
