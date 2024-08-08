import { createApp } from "vue";
// import Toasted from "vue-toasted";
import router from "./router";
import store from "./store";
import App from "./App.vue";

createApp(App).use(router).use(store).mount("#app");
