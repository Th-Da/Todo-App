<template>
  <div class="wrapper">
    <v-container class="text-input">
      <v-text-field
        type="text"
        max-width="344"
        label="Titel"
        variant="solo"
        hide-details
        class="textfield"
        v-model="todoTitle"
      ></v-text-field>

      <v-textarea
        type="text"
        bg-color="light-blue"
        name="input-7-1"
        variant="filled"
        label="Todo Text"
        auto-grow
        append-inner-icon="mdi-pencil-plus-outline"
        v-model="todoText"
        @click:append-inner="onSubmit()"
      >
      </v-textarea>
    </v-container>
  </div>
</template>

<style scoped>
.text-input {
  max-width: 500px;
  margin: 0 10px 0 10px;
  padding: 0;
}

.wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 20px;
}

.add-button {
  margin-bottom: 20px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { todoStore } from "@/shared/store";

export default defineComponent({
  name: "TodoForm",
  data() {
    return {
      todoTitle: "",
      todoText: "",
    };
  },
  setup() {
    const store = todoStore();
    return {
      store,
    };
  },
  methods: {
    onSubmit() {
      // if (!this.title) {
      //   return;
      // }

      this.store.addTodo(this.todoTitle, this.todoText);
      this.todoTitle = "";
      this.todoText = "";
    },
  },
});
</script>
