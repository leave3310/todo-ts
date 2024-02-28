<script setup lang="ts">
import { ref } from "vue";
import { FwbInput, FwbButton } from "flowbite-vue";

import { emailLogin } from "@/api/modules/member.ts";

const email = ref("");
const password = ref("");

const login = () => {
  emailLogin({
    email: email.value,
    password: password.value,
  });
};
</script>

<template>
  <div class="mx-auto max-w-container px-4">
    <fwb-input
      v-model="email"
      placeholder="enter your first name"
      label="email"
    />
    <fwb-input
      v-model="password"
      placeholder="enter your first name"
      label="password"
    />
    <fwb-button color="default" @click="login">Default</fwb-button>
  </div>
</template>
