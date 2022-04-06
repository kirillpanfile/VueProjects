<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
      <app-input
        placeholder="Input name"
        :error="errors.name"
        label="What is your name ?"
        v-model="name"
      ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input v-model.number="age" type="number" id="age" />
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label
            ><input type="radio" name="trip" v-model="relocate" value="yes" />
            Да</label
          >
        </div>

        <div class="checkbox">
          <label
            ><input type="radio" name="trip" v-model="relocate" value="no" />
            Нет</label
          >
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skills"
              name="skills"
              value="vuex"
            />
            Vuex</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skills"
              name="skills"
              value="cli"
            />
            Vue CLI</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skills"
              name="skills"
              value="router"
            />
            Vue Router</label
          >
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from "./AppInput.vue";
export default {
  components: { AppInput },
  data() {
    return {
      name: "",
      age: 23,
      city: "nsk",
      relocate: null,
      skills: [],
      errors: {
        name: null,
      },
    };
  },
  methods: {
    formIsVallid() {
      if (this.name.length) {
        this.errors.name = null;
        return true;
      } else {
        this.errors.name = "Input yout name";
        return false;
      }
    },
    submitHandler() {
      if (this.formIsVallid()) {
        console.group("Form data");
        console.log("name:", this.name);
        console.log("age:", this.age);
        console.log("city:", this.city);
        console.log("relocate:", this.relocate);
        console.log("skills:", this.skills);
        console.groupEnd();
      }
    },
  },
};
</script>

<style>
.form-control small {
  color: red;
}
.invalid > input {
  border-color: red !important;
}
</style>
