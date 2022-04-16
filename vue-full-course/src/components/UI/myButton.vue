<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  align-self: flex-end;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  color: teal;
  background: none;
}
</style>
