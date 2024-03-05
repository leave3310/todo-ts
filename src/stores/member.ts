import { ref } from "vue";
import { defineStore } from "pinia";

import type { MemberInfo } from "@/types/stores/member";

export const useMemberStore = defineStore("member", () => {
  const memberInfo = ref<MemberInfo>({
    nickname: "",
  });

  const updateMemberInfo = (data: Partial<MemberInfo>) =>
    (memberInfo.value = {
      ...memberInfo.value,
      ...data,
    });

  return {
    memberInfo,

    updateMemberInfo,
  };
});
