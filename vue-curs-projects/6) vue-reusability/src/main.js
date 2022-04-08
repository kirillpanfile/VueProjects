import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";
import translatePlugin from "./translatePlugin";

const app = createApp(App);

app.use(translatePlugin, {});

app.mount("#app");
