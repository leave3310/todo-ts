import { ApiResponse } from "@/types/api/utilities.ts";

export interface PostTodosRequest {
  content: string;
}

export interface PostTodosResponse extends ApiResponse {
  newTodo: {
    createTime: number;
    content: string;
    status: boolean;
  };
}

export interface GetTodosResponse extends ApiResponse {
  data: {
    content: string;
    createTime: number;
    id: string;
    status: boolean;
  }[];
}

export interface DeleteTodosResponse extends ApiResponse {
  message: string;
}

export interface PutTodosRequest {
  content: string;
}

export interface PutTodosResponse extends ApiResponse {
  message: string;
}

export interface PatchTodosResponse extends ApiResponse {
  message: string;
}
