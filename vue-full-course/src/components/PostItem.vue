<template>
  <div class="post">
    <div>
      <div><strong>Name: </strong> {{ post.title }}</div>
      <div><strong>Description: </strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$emit('remove', post)">Delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.post {
  padding: 4px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
