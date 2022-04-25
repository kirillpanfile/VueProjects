<template>
  <div>
    <select v-model="modelValue" @change="changeOption">
      <option value="" disabled>Select from list</option>
      <option
        :value="option.value"
        v-for="(option, index) in options"
        :key="index"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style></style>
