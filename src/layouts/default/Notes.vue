<template>
  <v-container class="container">
    <div v-for="todo of store.todos" :key="todo.id">
      <v-card class="single-card" variant="outlined">
        <v-card-item>
          <div>
            <div class="text-caption mb-1">{{ todo.date }}</div>
            <div class="text-h6 mb-1">{{ todo.title }}</div>
            <div class="text-Body-2">
              {{ todo.text }}
            </div>
          </div>
        </v-card-item>
        <div class="d-flex buttons">
          <v-card-actions>
            <v-btn variant="outlined" @click="store.deleteTodo(todo.id)">
              Delete
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn variant="outlined"> Save </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.single-card {
  margin: 25px;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
}

.v-card-actions {
  margin-top: auto;
}

.text-Body-2 {
  max-height: 200px;
  overflow-y: auto;
}

.buttons {
  position: absolute;
  bottom: 0;
}
</style>

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
