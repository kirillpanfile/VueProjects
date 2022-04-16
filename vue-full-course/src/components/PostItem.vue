<template>
  <div class="post">
    <div>
      <div><strong>Name: </strong> {{ post.name }}</div>
      <div><strong>Description: </strong> {{ post.description }}</div>
    </div>
    <div class="post__btns">
      <button class="btn" @click="deletePost">Delete</button>
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
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
