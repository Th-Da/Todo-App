import type { Todo } from "@/shared/Todo-Interface";
import { defineStore } from "pinia";
import { watch } from "vue";

export const todoStore = defineStore("todoState", {
  state: () => {
    if (localStorage.getItem("todoState"))
      return JSON.parse(localStorage.getItem("todoState"));
    else return { todos: [] as Todo[] };
  },
  getters: {
    allTodos: (state: any) => state.todos.length,
  },
  actions: {
    addTodo(title: string, text: string) {
      const todo: Todo = {
        id: Math.floor(Math.random() * 1000),
        date: new Date(),
        title,
        text,
      };
      this.todos = [todo, ...this.todos];
    },
  },
});
