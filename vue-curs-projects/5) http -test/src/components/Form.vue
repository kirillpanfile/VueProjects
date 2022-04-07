<template>
  <form class="card card-w30">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="category">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea v-model="text" id="value" rows="3"></textarea>
    </div>

    <button
      class="btn primary"
      :disabled="text.length < 5"
      @click.prevent="send"
    >
      Добавить
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      category: "title",
      text: "",
    };
  },
  methods: {
    send() {
      this.$emit("getFormData", this.category, this.text);
      this.category = "title";
      this.text = "";
    },
  },
};
</script>

<style></style>
