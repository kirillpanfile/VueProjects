<template>
  <div>
    <div class="container column">
      <Form @getFormData="getFormData"></Form>
      <card>
        <form-header :header="header"></form-header>
        <form-avatar :avatar="avatar"></form-avatar>
        <form-sub-header :subHeader="subHeader"></form-sub-header>
        <form-text :text="text"></form-text>
      </card>
    </div>
    <com></com>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Form from "./components/Form.vue";
import FormAvatar from "./components/FormAvatar.vue";
import FormHeader from "./components/FormHeader.vue";
import FormSubHeader from "./components/FormSubHeader.vue";
import FormText from "./components/FormText.vue";
import Com from "./components/Com.vue";

export default {
  components: {
    Card,
    Form,
    FormAvatar,
    FormHeader,
    FormSubHeader,
    FormText,
    Com,
  },
  data() {
    return {
      category: "",
      header: "Header",
      avatar: "Avatar",
      subHeader: "subHeader",
      text: "Lorem Ipsum",
    };
  },
  methods: {
    getFormData(category, text) {
      category == "title"
        ? (this.header = text)
        : category == "subtitle"
        ? (this.subHeader = text)
        : category == "avatar"
        ? (this.avatar = text)
        : category == "text"
        ? (this.text = text)
        : "";
    },
  },
};
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
