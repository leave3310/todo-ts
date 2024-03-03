import { ref } from "vue";
import { defineStore } from "pinia";

import { AlertType } from "@/types/enum/stores/common";
import type { AlertContent } from "@/types/stores/common";

export const useCommonStore = defineStore("common", () => {
  const isLoading = ref(false);

  const alertContent = ref<AlertContent>({
    isShowAlert: false,
    type: AlertType.DEFAULT,
    content: "",
  });

  const updateIsLoading = (status: boolean) => (isLoading.value = status);

  const updateAlertContent = (payload: Partial<AlertContent>) =>
    (alertContent.value = {
      ...alertContent.value,
      ...payload,
    });

  return {
    isLoading,
    alertContent,

    updateIsLoading,
    updateAlertContent,
  };
});
