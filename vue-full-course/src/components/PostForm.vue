<template>
  <form @submit.prevent="submitPost">
    <my-input type="text" v-model="post.title" placeholder="post name" />
    <my-input type="text" v-model="post.body" placeholder="post description" />
    <my-button class="btn" type="submit" value="Submit post">
      Submit post
    </my-button>
  </form>
</template>

<script>
import myInput from "./UI/myInput.vue";
export default {
  name: "post-form",
  components: {
    myInput,
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
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
