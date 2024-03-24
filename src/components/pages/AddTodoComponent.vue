<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { FwbInput, FwbButton } from "flowbite-vue";

import { useLoadingHandler } from "@/compositions/common/useLoadingHandler";
import { postTodos, getTodos } from "@/api/modules/todo";
import type { NewTodoForm } from "@/types/pages/IndexPage";

const { handleSubmit } = useForm<NewTodoForm>({
  validationSchema: {
    content: { required: true },
  },
  initialValues: {
    content: "",
  },
});

const { value: content, errorMessage: contentErrorMessage } =
  useField<string>("content");

const { updateIsLoading } = useLoadingHandler();

const onSubmit = handleSubmit(async (values) => {
  updateIsLoading(true);

  await postTodos(values);
  await getTodos();

  updateIsLoading(false);
});
</script>

<template>
  <div class="mb-5 rounded-lg bg-slate-200 p-5">
    <div class="mb-2 text-lg">新增代辦事項</div>
    <form class="w-full" @submit.prevent="onSubmit">
      <div class="flex">
        <div class="mr-2 grow">
          <fwb-input v-model="content" placeholder="輸入代辦事項" />
        </div>
        <fwb-button color="default">新增</fwb-button>
      </div>
      <div class="mt-2 text-sm text-red-600 dark:text-red-500">
        {{ contentErrorMessage }}
      </div>
    </form>
  </div>
</template>
