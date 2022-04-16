<template>
  <div>
    <h3>Users List</h3>
    <div v-for="(post, index) in posts" :key="index">
      <post-item :post="post"></post-item>
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
