<template>
  <div class="container">
    <app-alert
      v-if="alert"
      description="This is an alert"
      title="Alert!"
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? "Close message" : " Show message" }}
      </button>
    </div>
  </div>
</template>

<script>
import AppAlert from "./AppAlert.vue";
import alertMixin from "../alertMixin";

export default {
  components: { AppAlert },
  mixins: [alertMixin],
};
</script>
