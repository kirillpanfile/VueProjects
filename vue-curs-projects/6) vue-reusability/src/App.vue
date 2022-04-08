<template>
  <div class="container">
    <div class="card">
      <h2>Talk about directives</h2>

      <div class="form-control">
        <label for="inp">Active by default</label>
        <input v-focus type="text" id="inp" />
      </div>
    </div>
  </div>
</template>

<script>
import focusDirective from "./focusDirective";
export default {
  directives: {
    focus: focusDirective,
  },
};
</script>
