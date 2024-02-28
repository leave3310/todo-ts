import { apiEmailLogin } from "@/api/instances/member.ts";
import type { EmailLoginRequest } from "@/types/api/instances/member.ts";

export const emailLogin = async (payload: EmailLoginRequest) => {
  try {
    const res = await apiEmailLogin(payload);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
