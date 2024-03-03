<script setup lang="ts">
import { FwbAlert } from "flowbite-vue";
import { useAlertHandler } from "@/compositions/common/useAlertHandler";

const { alertContent } = useAlertHandler();
</script>

<template>
  <div v-if="alertContent.isShowAlert" class="fixed inset-x-0 p-4">
    <fwb-alert border closable :type="alertContent.type">
      {{ alertContent.content }}
    </fwb-alert>
  </div>
</template>
