import { storeToRefs } from "pinia";

import { useCommonStore } from "@/stores/common";
import { AlertContent } from "@/types/stores/common";

export const useAlertHandler = () => {
  const commonStore = useCommonStore();

  const { alertContent } = storeToRefs(commonStore);

  const updateAlertContent = (payload: Partial<AlertContent>) =>
    commonStore.updateAlertContent(payload);

  return { alertContent, updateAlertContent };
};
