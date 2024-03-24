import { AxiosError } from "axios";

import {
  apiPostTodos,
  apiGetTodos,
  apiDeleteTodos,
  apiPutTodos,
  apiPatchTodos,
} from "@/api/instances/todo";
import { useTodoStore } from "@/stores/todo";
import { useAlertHandler } from "@/compositions/common/useAlertHandler";
import { AlertType } from "@/types/enum/stores/common";
import type {
  PostTodosRequest,
  PutTodosRequest,
} from "@/types/api/instances/todo";
import type { ApiErrorResponse } from "@/types/api/utilities";

const { updateAlertContent } = useAlertHandler();

export const postTodos = async (payload: PostTodosRequest) => {
  updateAlertContent({
    isShowAlert: false,
  });

  try {
    await apiPostTodos(payload);

    updateAlertContent({
      isShowAlert: true,
      type: AlertType.SUCCESS,
      content: "新增成功",
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

export const getTodos = async () => {
  const todoStore = useTodoStore();

  try {
    const res = await apiGetTodos();
    todoStore.updateTodoContent(res.data);
  } catch (err) {
    const error = err as AxiosError<ApiErrorResponse>;

    updateAlertContent({
      isShowAlert: true,
      type: AlertType.DANGER,
      content: error.message,
    });
  }
};

export const deleteTodos = async (id: string) => {
  try {
    await apiDeleteTodos(id);
    await getTodos();

    updateAlertContent({
      isShowAlert: true,
      type: AlertType.SUCCESS,
      content: "刪除成功",
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

export const putTodos = async (id: string, data: PutTodosRequest) => {
  try {
    await apiPutTodos(id, data);
    await getTodos();

    updateAlertContent({
      isShowAlert: true,
      type: AlertType.SUCCESS,
      content: "更新成功",
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

export const patchTodos = async (id: string) => {
  try {
    await apiPatchTodos(id);
    await getTodos();

    updateAlertContent({
      isShowAlert: true,
      type: AlertType.SUCCESS,
      content: "更新成功",
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
