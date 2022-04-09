import { createRouter, createWebHashHistory } from "vue-router";
import Login from "./views/Login.vue";
createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      component: Login,
      meta: {
        title: "Login",
      },
    },
  ],
});
