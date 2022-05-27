<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
export default {
  name: "app",
  components: {
    EmptyLayout,
    MainLayout,
  },
  computed: {
    layout() {
      console.log(this.$route.meta);
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
