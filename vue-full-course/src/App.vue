<template>
  <h1>Page with posts</h1>
  <my-button @click="fetchPosts">Get Posts</my-button>
  <my-button @click="showDialog">Create Post</my-button>
  <my-dialog v-model:show="dialogValue">
    <post-form @add-post="createPost"></post-form>
  </my-dialog>
  <post-list
    @remove="removePost"
    :posts="posts"
    v-if="arePostsLoading"
  ></post-list>
  <div v-else>Loading....</div>
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
      arePostsLoading: false,
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
        setTimeout(async () => {
          this.arePostsLoading = true;
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.posts = response.data;
        }, 1000);
      } catch (error) {
        console.log(error);
      } finally {
        this.arePostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
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
