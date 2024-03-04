import { useAuthStore } from "@/stores/auth";

export const useAuthHandler = () => {
  const authStore = useAuthStore();

  const getToken = () => authStore.getToken();
  const setToken = (token: string) => authStore.setToken(token);

  return {
    getToken,
    setToken,
  };
};
