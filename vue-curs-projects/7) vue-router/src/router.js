import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Forget from "./views/Forget.vue";
import Dashbord from "./views/Dashboard.vue";
import Mail from "./views/Mail.vue";
import error from "./views/404.vue";
import AppEmailBody from "./components/AppEmailBody.vue";
const router = createRouter({
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
      children: [
        {
          path: "/mail/:mailId?",
          component: AppEmailBody,
          props: true,
        },
      ],
    },
    {
      path: "/:notFound(.*)",
      component: error,
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
