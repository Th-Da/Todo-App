<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item prepend-avatar="@/assets/logo.png" title="ToDo Notes" nav>
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-checkbox-multiple-marked-outline"
            title="Important Todos"
            value="prio"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-trash-can"
            title="deleted"
            value="deleted"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <InputFields></InputFields>
        <FilterTodos class="d-flex justify-center"></FilterTodos>
        <Notes></Notes>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.v-main {
  height: 100vh;
  overflow-y: scroll;
}
</style>

<script setup lang="ts">
import InputFields from "./InputFields.vue";
import Notes from "./Notes.vue";
import FilterTodos from "./FilterTodos.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>
