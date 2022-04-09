import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Forget from "./views/Forget.vue";
import Dashbord from "./views/Dashboard.vue";
import Mail from "./views/Mail.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      alias: "/",
      component: Login,
      meta: {
        title: "Login",
      },
    },
    {
      path: "/forget",
      component: Forget,
      meta: {
        title: "Forget",
      },
    },
    {
      path: "/dashboard",
      component: Dashbord,
      meta: {
        title: "Dashboard",
      },
    },
    {
      path: "/mail",
      component: Mail,
      meta: {
        title: "Mail",
      },
    },
  ],
});
