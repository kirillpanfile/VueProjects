<template>
  <div class="w-2/3 mx-auto text-center">
    <h2>Slots</h2>

    <app-list>
      <template #default="{ iterator, idx }">
        <div>
          <span class="text-red-400 c">{{ iterator }} : {{ idx }}</span>
        </div>
      </template>
    </app-list>

    <app-block>
      <p class="text-gray-600">New block text</p>

      <template v-slot:header>
        <h3>This is a header</h3>
      </template>

      <!-- <template v-slot:footer>
        <div>
          <hr />
          123123
        </div>
      </template> -->
    </app-block>
  </div>
</template>


<script>
import AppBlock from "./AppBlock.vue";
import AppList from "./AppList.vue";
export default {
  components: { AppList, AppBlock },
};
</script>

<style>
</style>
