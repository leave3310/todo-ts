<script setup lang="ts">
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from "flowbite-vue";

import { signOut } from "@/api/modules/member";
import { useLoadingHandler } from "@/compositions/common/useLoadingHandler";

const { updateIsLoading } = useLoadingHandler();

const signOutFn = async () => {
  updateIsLoading(true);
  await signOut();
  updateIsLoading(false);
};
</script>

<template>
  <header>
    <fwb-navbar>
      <template #logo>
        <div class="text-xl text-red-400">TODO</div>
      </template>
      <template #default="{ isShowMenu }">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <fwb-navbar-link is-active link="#" @click="signOutFn">
            Logout
          </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
    </fwb-navbar>
  </header>
</template>
