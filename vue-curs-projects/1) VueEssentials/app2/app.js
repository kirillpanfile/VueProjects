Vue.createApp({
  data: () => ({
    title: "I am A a header",
    myHtml: "<h1>Vue 3 App</h1>",
    person: {
      fName: "Kirill",
      lName: "Panfile",
      age: "17",
    },
    items: [1, 2, 3, 4, 5, 6, 7],
  }),
  methods: {
    addItem (event) {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
      console.log(event.key);
    },
    remove (index) {
      this.items.splice(index,1)
    },
    log(item) {
      console.log(item);
    }
  },
  computed: {
      evenItems() {
          return this.items.filter(i => i%2 ===0)
      }
  },
}).mount("#app");
