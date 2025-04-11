import { PrimeVue } from "@primevue/core";
import { createApp } from "vue";
import "../src/style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(PrimeVue, { unstyled: true }).mount("#app");
