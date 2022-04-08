<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n("app.title") }}</h2>
      <button @click="changeLanguage">en</button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["changeI18N"],
  methods: {
    changeLanguage() {
      this.changeI18N("en");
      this.$forceUpdate();
    },
  },
};
</script>
