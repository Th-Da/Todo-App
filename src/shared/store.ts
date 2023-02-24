import type { Todo } from "@/shared/Todo-Interface";
import { defineStore } from "pinia";

export const todoStore = defineStore({
  id: "todoState",
  state: () => ({
    todos: [] as Todo[],
  }),
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
