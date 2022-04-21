<template>
  <div v-if="posts.length > 0">
    <h3 style="text-align: center">Users List</h3>
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post)"
    ></post-item>
  </div>
  <div v-else style="text-align: center">
    <h3>No users</h3>
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
