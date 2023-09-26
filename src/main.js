import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import order_validations from "./order_validations";

createApp(App).use(router).mount("#app");
