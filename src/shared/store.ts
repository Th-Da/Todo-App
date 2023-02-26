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
    addTodo(title: string, text: string, newDate: Date) {
      const dateString = newDate.toLocaleString("de-DE");
      const todo: Todo = {
        id: Math.floor(Math.random() * 1000),
        date: dateString,
        _date: newDate,
        title,
        text,
      };
      this.todos = [todo, ...this.todos];
    },

    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    filterByDate() {
      this.todos.sort(
        (b, a) => new Date(b._date).getTime() - new Date(a._date).getTime()
      );
      console.log(this.todos);
    },

    filterByPriority() {
      console.log(this.todos);
    },
  },
});
