<template>
  <div class="w-full py-6 bg-blue-100">
    <div class="w-2/3 mx-auto bg-gray-50 p-2">
      <h2>News : {{ now }}</h2>
      <span>Open : {{ openRate }} | read : {{ readRate }}</span>
    </div>
    <app-news
      v-for="(item, index) in news"
      :key="index"
      :title="item.title"
      :id="item.id"
      :isOpen="item.isOpen"
      @open-news="openRate++"
      @read-news="readNews"
      @unread-news="readRate--"
    ></app-news>
  </div>
</template>

<script>
import AppNews from "./AppNews.vue";
export default {
  data() {
    return {
      now: new Date().toLocaleString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: "Won in USA",
          id: 1,
          isOpen: false,
        },
        {
          title: "Won in USA",
          id: 1,
          isOpen: false,
        },
        {
          title: "Won in USA",
          id: 1,
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    readNews() {
      this.readRate++;
    },
  },
  components: {
    "app-news": AppNews,
  },
};
</script>

<style>
</style>
