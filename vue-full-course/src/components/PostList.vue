<template>
  <div v-if="posts.length > 0">
    <h3 style="text-align: center">Users List</h3>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      ></post-item>
    </transition-group>
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

<style>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 1s;
}
.post-list-enter, .post-list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
