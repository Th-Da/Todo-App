<template>
  <v-switch
    v-model="Filter"
    hide-details
    inset
    :label="`Filter: ${Filter.toString()}`"
    false-value="Date"
    true-value="priority"
    @click="toggleFilter()"
  ></v-switch>
</template>

<script lang="ts">
import { todoStore } from "@/shared/store";

export default {
  name: "renderedTodoList",
  setup() {
    const store = todoStore();
    return { store };
  },

  data() {
    return {
      Filter: "Date",
    };
  },

  methods: {
    toggleFilter() {
      const filter = this.Filter === "Date" ? "priority" : "Date";
      filter === "Date"
        ? this.store.filterByDate()
        : this.store.filterByPriority();
    },
  },
};
</script>
