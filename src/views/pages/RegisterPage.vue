<script setup lang="ts">
import { FwbInput, FwbButton } from "flowbite-vue";
import { useForm, useField } from "vee-validate";

import { emailRegister } from "@/api/modules/member.ts";
import { useLoadingHandler } from "@/compositions/common/useLoadingHandler";
import { RouteName } from "@/types/enum/router/index";
import type { RegisterForm } from "@/types/pages/RegisterPage";

const { handleSubmit } = useForm<RegisterForm>({
  validationSchema: {
    email: { required: true, email: true },
    password: { required: true, min: 6 },
    nickName: { required: true },
  },
  initialValues: {
    email: "",
    password: "",
    nickName: "",
  },
});

const { value: email, errorMessage: emailErrorMessage } =
  useField<string>("email");
const { value: password, errorMessage: passwordErrorMessage } =
  useField<string>("password");
const { value: nickName, errorMessage: nickNameErrorMessage } =
  useField<string>("nickName");

const { updateIsLoading } = useLoadingHandler();
const onSubmit = handleSubmit(async (values) => {
  updateIsLoading(true);

  await emailRegister({
    email: values.email,
    password: values.password,
    nickname: values.nickName,
  });

  updateIsLoading(false);
});
</script>

<template>
  <div class="flex size-full flex-col items-center justify-center px-4">
    <h1 class="mb-3 text-3xl text-blue-400">註冊</h1>
    <fwb-button color="default" class="mb-2">
      <router-link :to="{ name: RouteName.LOGIN }">返回登入頁</router-link>
    </fwb-button>

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
      <div class="mb-4">
        <fwb-input
          v-model="nickName"
          type="text"
          placeholder="輸入暱稱"
          label="暱稱"
        />
        <div class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ nickNameErrorMessage }}
        </div>
      </div>
      <div class="flex">
        <div class="mr-2">
          <fwb-button color="default">註冊</fwb-button>
        </div>
      </div>
    </form>
  </div>
</template>
