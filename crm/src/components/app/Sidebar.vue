<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <li v-for="link in links" :key="link.url">
      <router-link
        active-class="active"
        :to="link.url"
        class="waves-effect waves-orange pointer"
        >{{ link.title }}</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: ["value"],
  data: () => ({
    links: [
      {
        title: "Счет",
        url: "/",
      },
      {
        title: "История",
        url: "/history",
      },
      {
        title: "Планирование",
        url: "/planning",
      },
      {
        title: "Новая запись",
        url: "/record",
      },
      {
        title: "Категории",
        url: "/categories",
      },
    ],
  }),
};
</script>

<style></style>
