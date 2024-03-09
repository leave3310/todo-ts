import { apiInstance } from "@/api/index.ts";
import type {
  EmailLoginRequest,
  EmailLoginResponse,
  LogoutResponse,
} from "@/types/api/instances/member.ts";

export const apiEmailLogin = (
  data: EmailLoginRequest,
): Promise<EmailLoginResponse> => apiInstance["post"](`users/sign_in`, data);

export const apiLogout = (): Promise<LogoutResponse> =>
  apiInstance["post"](`users/sign_out`);

