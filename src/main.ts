/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import "@mdi/font/css/materialdesignicons.css";
import "material-icons/iconfont/material-icons.css";

// Components
import App from "./App.vue";

// Composables
import { createApp, watch } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
