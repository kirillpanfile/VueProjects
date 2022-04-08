import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";
import translatePlugin from "./translatePlugin";

const app = createApp(App);
const ru = {
  app: {
    title: "Приложение",
    subtitle: "Приложение для работы с переводами",
  },
};

const en = {
  app: {
    title: "Application",
    subtitle: "Application for translations",
  },
};

app.use(translatePlugin, { en, ru });

app.mount("#app");
