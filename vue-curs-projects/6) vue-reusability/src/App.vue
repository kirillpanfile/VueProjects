<template>
  <div class="container">
    <div v-if="active" class="card">
      <h2 v-color:color.blink.hover="myColor">Talk about directives</h2>

      <div class="form-control">
        <label for="inp">Active by default</label>
        <input v-focus type="text" id="inp" />
      </div>

      <button class="btn" @click="myColor = 'darkblue'">Change color</button>
    </div>
  </div>
</template>

<script>
import focusDirective from "./focusDirective";
import colorDirective from "./colorDirective";
export default {
  directives: {
    focus: focusDirective,
    color: colorDirective,
  },
  data() {
    return {
      myColor: "darkred",
      active: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.active = false;
    }, 3000);
  },
};
</script>
