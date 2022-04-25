<template>
  <h1>Page with posts</h1>
  <my-button @click="fetchPosts">Get Posts</my-button>
  <my-button @click="showDialog">Create Post</my-button>
  <my-dialog v-model:show="dialogValue">
    <post-form @add-post="createPost"></post-form>
  </my-dialog>
  <post-list @remove="removePost" :posts="posts"></post-list>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import myDialog from "./components/UI/myDialog.vue";
import axios from "axios";
export default {
  components: {
    PostForm,
    PostList,
    myDialog,
  },
  name: "App",
  data() {
    return {
      posts: [],
      dialogValue: false,
    };
  },
  methods: {
    createPost(post) {
      console.log(post);
      this.posts.push(post);
      this.dialogValue = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogValue = true;
    },
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
