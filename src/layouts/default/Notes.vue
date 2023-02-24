<template>
  <div v-for="todo of store.todos" :key="todo.id">
    <v-card class="mx-auto" max-width="344" variant="outlined">
      <v-card-item>
        <div>
          <div class="text-caption mb-1">Date</div>
          <div class="text-h6 mb-1">{{ todo.title }}</div>
          <div class="text-Body-2">
            {{ todo.text }}
          </div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn variant="outlined"> Button </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { todoStore } from "@/shared/store";

export default {
  name: "renderedTodoList",
  setup() {
    const store = todoStore();
    return { store };
  },
};
</script>
