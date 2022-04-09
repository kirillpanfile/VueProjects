<template>
  <div class="container">
    <app-alert
      v-if="alert"
      description="This is an alert"
      title="Alert!"
      type="danger"
      closeable
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? "Close message" : " Show message" }}
      </button>
    </div>
    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from "./components/AppAlert.vue";
import AppBlock from "./components/AppBlock.vue";
import alertMixin from "./alertMixin";
export default {
  components: { AppAlert, AppBlock },
  mixins: [alertMixin],
};
</script>
