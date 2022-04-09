<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n("app.title") }}</h2>
      <button class="btn" @click="changeLanguage">Change Lang</button>
      <button @click="modal = true" class="btn primary">Open Modal</button>

      <teleport to="body">
        <app-modal v-if="modal" @close="modal = false"></app-modal>
      </teleport>
    </div>
  </div>
</template>

<script>
import AppModal from "./components/AppModal.vue";
export default {
  inject: ["changeI18N"],
  components: { AppModal },
  methods: {
    changeLanguage() {
      this.changeI18N("en");
      this.$forceUpdate();
    },
  },
  data() {
    return {
      modal: false,
    };
  },
};
</script>
