/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import router from "../router";
import { createPinia } from "pinia";
import { watch } from "vue";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  loadFonts();
  const pinia = createPinia();
  watch(
    pinia.state,
    (state) => {
      localStorage.setItem("todoState", JSON.stringify(state.todoState));
    },
    { deep: true }
  );
  app.use(vuetify).use(router).use(pinia);
}
