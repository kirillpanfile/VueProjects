<template>
  <div class="container pt-1">
    <div class="w-2/3 mx-auto text-center bg-gray-400">
      <async-comp>
      </async-comp>
      <hr />
      <div class="w-full flex justify-evenly">
        <app-button
          @click="active = 'one'"
          color=" px-2 py-1 bg-white relative left"
          >One</app-button
        >
        <app-button
          @click="active = 'two'"
          color=" px-2 p+y-1 bg-white relative left"
          >Two</app-button
        >
      </div>
    </div>

    <keep-alive >
    <app-text-1 v-if="active == 'one'"></app-text-1>
    </keep-alive > 
    <app-text-2 v-if="active == 'two'"></app-text-2>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import AppText1 from "./AppText1.vue";
import AppText2 from "./AppText2.vue";
export default {
  data() {
    return {
      active: "one", // two
    };
  },
  components: { AppButton, AppText1, AppText2 },
};
</script>

<style>
</style>