import Cookies from "js-cookie";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const getToken = () => Cookies.get("token");
  const setToken = (token: string) => Cookies.set("token", token);

  return {
    getToken,
    setToken,
  };
});
