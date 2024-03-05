<script setup lang="ts">
import { FwbInput, FwbButton } from "flowbite-vue";
import { useForm, useField } from "vee-validate";

import { emailLogin } from "@/api/modules/member.ts";
import { useLoadingHandler } from "@/compositions/common/useLoadingHandler";
import type { EmailLoginForm } from "@/types/pages/LoginPage.ts";

const { handleSubmit } = useForm<EmailLoginForm>({
  validationSchema: {
    email: { required: true, email: true },
    password: { required: true, min: 6 },
  },
  initialValues: {
    email: "",
    password: "",
  },
});

const { value: email, errorMessage: emailErrorMessage } =
  useField<string>("email");

const { value: password, errorMessage: passwordErrorMessage } =
  useField<string>("password");

const { updateIsLoading } = useLoadingHandler();
const onSubmit = handleSubmit(async (values) => {
  updateIsLoading(true);

  await emailLogin({
    email: values.email,
    password: values.password,
  });

  updateIsLoading(false);
});
</script>

<template>
  <div class="flex size-full flex-col items-center justify-center px-4">
    <h1 class="mb-3 text-3xl text-blue-400">登入</h1>
    <form class="w-full rounded-lg border p-3" @submit.prevent="onSubmit">
      <div class="mb-4">
        <fwb-input v-model="email" placeholder="輸入信箱" label="信箱" />
        <div class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ emailErrorMessage }}
        </div>
      </div>
      <div class="mb-4">
        <fwb-input
          v-model="password"
          type="password"
          placeholder="輸入密碼"
          label="密碼"
        />
        <div class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ passwordErrorMessage }}
        </div>
      </div>
      <div class="flex">
        <div class="mr-2">
          <fwb-button color="default">登入</fwb-button>
        </div>
        <div>
          <fwb-button color="default" type="button">註冊</fwb-button>
        </div>
      </div>
    </form>
  </div>
</template>
