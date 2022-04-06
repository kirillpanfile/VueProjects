<template>
  <div>
    <ul>
      <li v-for="(item, index) in 5" :key="index">
        <slot :iterator="item" :idx="index"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>