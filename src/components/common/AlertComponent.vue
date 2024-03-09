<script setup lang="ts">
import { FwbAlert } from "flowbite-vue";
import { useAlertHandler } from "@/compositions/common/useAlertHandler";

const { alertContent, updateAlertContent } = useAlertHandler();
const closeAlert = () =>
  updateAlertContent({
    isShowAlert: false,
  });
</script>

<template>
  <div v-if="alertContent.isShowAlert" class="fixed inset-x-0 p-4">
    <fwb-alert border closable :type="alertContent.type" @close="closeAlert">
      {{ alertContent.content }}
    </fwb-alert>
  </div>
</template>
