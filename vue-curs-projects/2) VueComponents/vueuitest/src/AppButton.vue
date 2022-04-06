<template>
  <button :class="color" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
emits: ["action"];
export default {
  props: {
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>