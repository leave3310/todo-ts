import { apiInstance } from "@/api/index.ts";
import type {
  PostTodosRequest,
  PostTodosResponse,
  GetTodosResponse,
  DeleteTodosResponse,
  PutTodosRequest,
  PutTodosResponse,
  PatchTodosResponse,
} from "@/types/api/instances/todo";

export const apiPostTodos = (
  data: PostTodosRequest,
): Promise<PostTodosResponse> => apiInstance["post"](`todos/`, data);

export const apiGetTodos = (): Promise<GetTodosResponse> =>
  apiInstance["get"](`todos/`);

export const apiDeleteTodos = (id: string): Promise<DeleteTodosResponse> =>
  apiInstance["delete"](`todos/${id}`);

export const apiPutTodos = (
  id: string,
  data: PutTodosRequest,
): Promise<PutTodosResponse> => apiInstance["put"](`todos/${id}`, data);

export const apiPatchTodos = (id: string): Promise<PatchTodosResponse> =>
  apiInstance["patch"](`todos/${id}/toggle`);
