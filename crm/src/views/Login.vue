<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
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
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";
export default {
  name: "login",
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      email: "",
      password: "",
    };
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
    };
  },
  methods: {
    submitHandler() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };

      console.log(formData);
      this.$router.push("/");
    },
  },
  computed: {
    emailError() {
      return this.v$.$error.email;
    },
    passwordError() {
      return this.v$.$error.password;
    },
  },
};
</script>
