<template>
  <div class="container">
    <p>
      <button class="btn primary" @click="loadComments()">
        Загрузить комментарии
      </button>
    </p>
    <div class="card">
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item" v-for="(item, index) in comments" :key="index">
          <div>
            <p>
              <strong>{{ item.email }}</strong>
            </p>
            <small>
              {{ item.body }}
            </small>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="loader" class="loader"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api: "https://jsonplaceholder.typicode.com/comments?_limit=42",
      comments: [],
      loader: false,
    };
  },
  methods: {
    async loadComments() {
      this.loader = true;
      try {
        const response = await fetch(this.api);
        const data = await response.json();
        this.comments = data;
      } catch (error) {
        console.log(error.message);
      }
      this.loader = false;
    },
  },
};
</script>

<style></style>
