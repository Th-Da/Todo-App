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

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  loadFonts();
  const pinia = createPinia();
  app.use(vuetify).use(router).use(pinia);
}
