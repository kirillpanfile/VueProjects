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
    <my-button class="btn" type="submit" value="Submit post">
      Submit post
    </my-button>
  </form>
</template>

<script>
import MyButton from "./UI/myButton.vue";
export default {
  components: {
    MyButton,
  },
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

.input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
