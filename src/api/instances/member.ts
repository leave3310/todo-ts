import { apiInstance } from "@/api/index.ts";
import type {
  EmailLoginRequest,
  EmailLoginResponse,
  LogoutResponse,
  SignUpRequest,
  SignUpResponse,
} from "@/types/api/instances/member.ts";

export const apiEmailLogin = (
  data: EmailLoginRequest,
): Promise<EmailLoginResponse> => apiInstance["post"](`users/sign_in`, data);

export const apiLogout = (): Promise<LogoutResponse> =>
  apiInstance["post"](`users/sign_out`);

export const apiSignUp = (data: SignUpRequest): Promise<SignUpResponse> =>
  apiInstance["post"](`users/sign_up`, data);
