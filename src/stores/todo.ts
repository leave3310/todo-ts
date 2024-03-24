import { ref } from "vue";
import { defineStore } from "pinia";

import type { Todo } from "@/types/stores/todo";

export const useTodoStore = defineStore("todo", () => {
  const todoContent = ref<Todo[]>([]);

  const updateTodoContent = (data: Todo[]) => (todoContent.value = data);

  return {
    todoContent,

    updateTodoContent,
  };
});
