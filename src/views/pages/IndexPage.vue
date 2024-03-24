<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/vue/24/solid";

import { useForm, useField } from "vee-validate";

import { useTodoStore } from "@/stores/todo";
import {
  getTodos,
  deleteTodos,
  putTodos,
  patchTodos,
} from "@/api/modules/todo";
import { useLoadingHandler } from "@/compositions/common/useLoadingHandler";

import AddTodoComponent from "@/components/pages/AddTodoComponent.vue";

const todoStore = useTodoStore();

const { updateIsLoading } = useLoadingHandler();

const timeStampTransform = (second: number) =>
  new Date(second * 1000).toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "numeric",
    second: "2-digit",
  });

const currentEdit = ref("");
const editTodo = (id?: string) => {
  if (!id) {
    currentEdit.value = "";
  } else {
    currentEdit.value = id;
  }
};

const deleteTodo = async (id: string) => {
  updateIsLoading(true);

  await deleteTodos(id);

  updateIsLoading(false);
};

const toggleStatus = async (id: string) => {
  updateIsLoading(true);

  await patchTodos(id);

  updateIsLoading(false);
};

const { handleSubmit } = useForm({
  validationSchema: {
    content: { required: true },
  },
  initialValues: {
    content: "",
  },
});

const { value: content, errorMessage: contentErrorMessage } =
  useField<string>("content");

const onSubmit = handleSubmit(async (values) => {
  const data = {
    content: values.content,
  };

  updateIsLoading(true);

  await putTodos(currentEdit.value, data);
  editTodo();

  updateIsLoading(false);
});

onMounted(async () => {
  updateIsLoading(true);

  await getTodos();

  updateIsLoading(false);
});
</script>

<template>
  <div class="size-full px-4">
    <h1 class="mb-4 text-3xl">代辦事項清單</h1>
    <AddTodoComponent />

    <div>
      <div v-for="item in todoStore.todoContent" :key="item.id" class="mb-4">
        <div v-if="item.id === currentEdit" class="flex items-center">
          <form @submit.prevent="onSubmit" class="mr-4 w-full">
            <input v-model="content" type="text" class="w-full rounded" />
            <div class="mt-2 text-sm text-red-600 dark:text-red-500">
              {{ contentErrorMessage }}
            </div>
          </form>

          <XMarkIcon
            class="size-6 cursor-pointer fill-slate-400 hover:fill-slate-600"
            @click="editTodo()"
          />
        </div>
        <div
          v-else
          class="flex items-center justify-between"
          :class="{ 'line-through': item.status, 'text-gray-400': item.status }"
        >
          <div class="flex items-center">
            <div class="mr-5">
              <input type="checkbox" :id="item.id" :value="item.status" @change="toggleStatus(item.id)" />
            </div>
            <label :for="item.id">
              <div class="text-lg font-bold">
                {{ item.content }}
              </div>
              <div>
                {{ timeStampTransform(item.createTime) }}
              </div>
            </label>
          </div>
          <div class="flex">
            <PencilSquareIcon
              class="mr-2 size-6 cursor-pointer fill-blue-400 hover:fill-blue-600"
              @click="editTodo(item.id)"
            />
            <TrashIcon
              class="size-6 cursor-pointer fill-red-400 hover:fill-red-600"
              @click="deleteTodo(item.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
