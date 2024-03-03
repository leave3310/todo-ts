import { storeToRefs } from "pinia";

import { useCommonStore } from "@/stores/common";

export const useLoadingHandler = () => {
  const commonStore = useCommonStore();

  const { isLoading } = storeToRefs(commonStore);

  const updateIsLoading = (bool: boolean) => commonStore.updateIsLoading(bool);

  return { isLoading, updateIsLoading };
};
