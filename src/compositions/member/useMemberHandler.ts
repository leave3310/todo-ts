import { storeToRefs } from "pinia";

import { useMemberStore } from "@/stores/member";
import type { MemberInfo } from "@/types/stores/member";

export const useMemberHandler = () => {
  const memberStore = useMemberStore();

  const { memberInfo } = storeToRefs(memberStore);

  const updateMemberInfo = (data: Partial<MemberInfo>) =>
    memberStore.updateMemberInfo(data);

  return {
    memberInfo,

    updateMemberInfo,
  };
};
