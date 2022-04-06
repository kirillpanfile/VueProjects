const h = Vue.h;
const app = Vue.createApp({
  data: function () {
    return {
      title: "New Title",
    };
  },

  methods: {
      changeTitle () {
          console.log(this);
      }
  },
  render() {
    return h(
      "div",
      {
        class: "card center",
      },
      [
        h("h1", {}, this.title),
        h("button", { class: "btn", onclick: this.changeTitle }, "Change"),
      ]
    );
  },
});

app.mount("#app");

