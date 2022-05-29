<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          v-model.trim="email"
          :class="{
            invalid: emailError,
          }"
          type="text"
          class="validate"
        />
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input
          v-model="password"
          :class="{
            invalid: passwordError,
          }"
          id="password"
          type="password"
          class="validate"
        />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
      <div class="input-field">
        <input v-model="name" id="name" type="text" class="validate" />
        <label for="name">Имя</label>
        <small class="helper-text invalid">Name</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";
export default {
  name: "register",
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      agree: false,
    };
  },
  methods: {
    onSubmit() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
      if (this.agree == false) {
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      console.log("submit");
    },
  },
  validations() {
    return {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      name: {
        required,
      },
      agree: {
        required,
      },
    };
  },
  computed: {
    emailError() {
      return this.v$.$error.email;
    },
    passwordError() {
      return this.v$.$error.password;
    },
    nameError() {
      return this.v$.$error.name;
    },
    agreeError() {
      return this.v$.$error.agree;
    },
  },
};
</script>
