<template>
  <header class="navbar">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li><router-link to="/dashboard">Главная</router-link></li>
      <li>
        <router-link to="/mail" custom #="{ navigate, href }">
          <a
            href="#"
            @click="navigate"
            :class="{ active: $route.path.indexOf(href) != -1 }"
          >
            Почта</a
          >
        </router-link>
      </li>
      <li><a href="#" @click.prevent="logout">Выйти</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  inject: ["logout"],
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
