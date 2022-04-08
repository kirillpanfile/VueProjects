export default {
  install(app, options) {
    let current = "ru";

    const changeLanguage = (lang) => {
      current = lang;
    };

    app.config.globalProperties.$i18n = (key) => {
      return key.split(".").reduce((obj, key) => {
        return obj[key] || "Unknown";
      }, options[current]);
    };

    app.provide("changeI18N", changeLanguage);
  },
};
