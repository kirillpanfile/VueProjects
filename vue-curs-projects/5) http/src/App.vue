<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Input your name</label>
        <input type="text" name="" id="name" v-model="name" />
      </div>
      <button :disabled="name.length === 0" class="btn primary">Submit</button>
    </form>
    <app-loader v-if="loading"> </app-loader>

    <app-people-list
      v-else
      @remove="removePerson"
      @load="loadPeople"
      :people="people"
    ></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from "./AppPeopleList.vue";
import AppAlert from "./AppAlert.vue";
import AppLoader from "./AppLoader.vue";
import axios from "axios";
export default {
  components: { AppPeopleList, AppAlert, AppLoader },
  emits: ["load"],
  data() {
    return {
      name: "",
      people: [],
      server:
        "https://vue-with-http-2a045-default-rtdb.europe-west1.firebasedatabase.app/people",
      alert: null,
      loading: false,
    };
  },
  mounted() {
    this.loadPeople();
  },
  methods: {
    async removePerson(id) {
      try {
        const name = this.people.find((person) => person.id == id).firstName;
        axios.delete(`${this.server}/${id}.json`);
        this.people = this.people.filter((person) => person.id !== id);
        this.alert = {
          type: "primary",
          title: "Success",
          text: `User ${name} deleted`,
        };
      } catch (error) {
        alert(error);
      }
    },
    async createPerson() {
      const resposne = await fetch(`${this.server}.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/josn",
        },
        body: JSON.stringify({
          firstName: this.name,
        }),
      });
      const firebaseData = await resposne.json();
      this.people.push({
        firstName: this.name,
        id: firebaseData.name,
      });
      this.name = "";
    },
    async loadPeople() {
      try {
        this.loading = true;
        const { data } = await axios.get(`${this.server}.json`);
        if (!data) {
          throw new Error("Field to fetch data");
        }
        this.people = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
      } catch (error) {
        this.loading = true;
        this.alert = {
          type: "danger",
          title: "Error",
          text: error.message,
        };
      }
      this.loading = false;
    },
  },
};
</script>

<style></style>
