<template>
  <div>
    <div class="modal-backdrop" @click="$emit('close')"></div>
    <div class="modal">
      <h3>
        This is a modal header
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          placeat reiciendis aliquid?
        </p>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

<style></style>
