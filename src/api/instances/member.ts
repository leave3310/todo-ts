import { apiInstance } from "@/api/index.ts";
import type {
  EmailLoginRequest,
  EmailLoginResponse,
  SignUpRequest,
  SignUpResponse,
  SignOutResponse,
} from "@/types/api/instances/member.ts";

export const apiEmailLogin = (
  data: EmailLoginRequest,
): Promise<EmailLoginResponse> => apiInstance["post"](`users/sign_in`, data);

export const apiSignUp = (data: SignUpRequest): Promise<SignUpResponse> =>
  apiInstance["post"](`users/sign_up`, data);

export const apiSignOut = (): Promise<SignOutResponse> =>
  apiInstance["post"](`/users/sign_out`);
