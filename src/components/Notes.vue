<template>
  <v-app>
    <Side-Bar />
  </v-app>
  <Input-Fields />
</template>

<style scoped>
main {
  height: 100%;
}
</style>

<script lang="ts" setup>
import SideBar from "@/layouts/default/SideBar.vue";
import InputFields from "@/layouts/default/InputFields.vue";
</script>
