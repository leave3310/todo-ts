import { ApiResponse } from "@/types/api/utilities.ts";

export interface EmailLoginRequest {
  email: string;
  password: string;
}

export interface EmailLoginResponse extends ApiResponse {
  exp: number;
  token: string;
}
