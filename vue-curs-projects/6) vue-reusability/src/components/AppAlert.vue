<template>
  <div class="alert" :class="type">
    <p>{{ title }}</p>
    <p>{{ description }}</p>
    <button class="btn" v-if="closeable" :class="type" @click="$emit('close')">
      Close
    </button>
  </div>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    title: String,
    description: String,
    closeable: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      default: "primary",
      validator(val) {
        return ["primary", "danger", "warning"].includes(val);
      },
    },
  },
};
</script>

<style></style>
