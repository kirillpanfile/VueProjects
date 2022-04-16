<template>
  <post-form @add-post="createPost"></post-form>
  <post-list :posts="posts"></post-list>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
export default {
  components: {
    PostForm,
    PostList,
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
    };
  },
  methods: {
    createPost(post) {
      console.log(post);
      this.posts.push(post);
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
