export default {
  install(app, options) {
    app.config.globalProperties.$alert = (test) => {
      alert(test);
    };
  },
};
