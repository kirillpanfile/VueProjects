<template>
  <div class="post" v-for="(post, index) in posts" :key="index">
    <div><strong>Name: </strong> {{ post.name }}</div>
    <div><strong>Description: </strong> {{ post.description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.post {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  margin: 20px;
}
</style>
