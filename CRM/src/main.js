import { createApp } from "vue";
import { VuelidatePlugin } from "@vuelidate/core";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "materialize-css/dist/js/materialize.min";
import dateFilter from "./filters/date.filter";

const app = createApp(App).use(store).use(router).use(VuelidatePlugin);
app.config.globalProperties.$filters = {
  dateFilter: dateFilter,
};
app.mount("#app");
