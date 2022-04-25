<template>
  <h1>Page with posts</h1>
  <div class="app__btns">
    <my-button @click="showDialog">Create Post</my-button>
    <my-select v-model="selectedSort" :options="sortOptions"></my-select>
  </div>
  <my-dialog v-model:show="dialogValue">
    <post-form @add-post="createPost"></post-form>
  </my-dialog>
  <post-list
    @remove="removePost"
    :posts="sortedPosts"
    v-if="arePostsLoading"
  ></post-list>
  <div v-else>Loading....</div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import myDialog from "./components/UI/myDialog.vue";
import mySelect from "./components/UI/mySelect.vue";
import axios from "axios";
export default {
  components: {
    PostForm,
    PostList,
    myDialog,
    mySelect,
  },
  name: "App",
  data() {
    return {
      posts: [],
      dialogValue: false,
      arePostsLoading: false,
      selectedSort: "",
      sortOptions: [
        {
          value: "title",
          name: "Sort By Name",
        },
        {
          value: "desc",
          name: "Sort by Descriprion",
        },
      ],
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
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },

    // watch: {
    //   selectedSort(newValue) {
    //     this.posts.sort((a, b) => a[newValue]?.localeCompare(b[newValue]));
    //   },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
}
</style>
