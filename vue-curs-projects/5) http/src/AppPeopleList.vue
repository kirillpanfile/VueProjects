<template>
  <div class="card">
    <div
      v-for="(item, index) in people"
      v-if="people.length !== 0"
      class="inline"
      :key="index"
    >
      <h3>{{ item.firstName }}</h3>
      <button class="btn danger" @click="$emit('remove', item.id)">
        Delete
      </button>
    </div>
    <div v-else class="center">
      <h4>No persons</h4>
      <button class="btn" @click="$emit('load')">Load</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    people: Array,
  },
  emits: ["remove", "load"],
};
</script>

<style>
.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.center {
  display: block;
  margin: 0 auto;
  text-align: center;
}
</style>
