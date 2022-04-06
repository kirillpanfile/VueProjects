<template>
  <div class="w-2/3 mx-auto">
    <slot name="header"></slot>
    <slot name="default"> No slot text </slot>
    <slot name="footer" v-if="$slots.footer"></slot>
  </div>
</template>


<script>

export default {
  mounted() {
    console.log(this.$slots);
  },
}
</script>

<style>
</style>
