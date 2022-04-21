<template>
  <h1>Page with posts</h1>
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
export default {
  components: {
    PostForm,
    PostList,
    myDialog,
  },
  name: "App",
  data() {
    return {
      posts: [
        {
          id: 1,
          name: "Post about Javascript",
          description: "Javascript is a web language",
        },
        {
          id: 2,
          name: "Post about Vue",
          description: "Vue is a web framework",
        },
        {
          id: 3,
          name: "Post about React",
          description: "React is a web framework",
        },
        {
          id: 4,
          name: "Post about Angular",
          description: "Angular is a web framework",
        },
      ],
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
