<template>
  <form @submit.prevent="submitPost">
    <input
      class="input"
      type="text"
      v-model="post.name"
      placeholder="post name"
    />
    <input
      class="input"
      type="text"
      v-model="post.description"
      placeholder="post description"
    />
    <input class="btn" type="submit" value="Submit post" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        name: "",
        description: "",
      },
    };
  },
  methods: {
    submitPost() {
      this.$emit("add-post", this.post);
      this.post = {
        name: "",
        description: "",
      };
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
.btn {
  align-self: flex-end;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  color: teal;
  background: none;
}
.input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
