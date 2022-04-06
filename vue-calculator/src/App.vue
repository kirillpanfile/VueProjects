<template>
  <Calculator>
    <Screen></Screen>
    <div class="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
      <div class="flex w-full">
        <Button value="C"> C </Button>
        <Button value=""> +/- </Button>
        <Button value="%"> % </Button>
        <Button value="÷"> ÷ </Button>
      </div>
      <div class="flex w-full">
        <Button value=""> 7 </Button>
        <Button value=""> 8 </Button>
        <Button value=""> 9 </Button>
        <Button value=""> ⨉ </Button>
      </div>
      <div class="flex w-full">
        <Button value=""> 4 </Button>
        <Button value=""> 5 </Button>
        <Button value=""> 6 </Button>
        <Button value=""> - </Button>
      </div>
      <div class="flex w-full">
        <Button value=""> 1 </Button>
        <Button value=""> 2 </Button>
        <Button value=""> 3 </Button>
        <Button value=""> + </Button>
      </div>
      <div class="flex w-full">
        <Button value=""> 0 </Button>
        <Button value=""> . </Button>
        <Button value="" class="w-2/4"> = </Button>
      </div>
    </div>
  </Calculator>
</template>

<script>
import Button from './components/Button.vue'
import Calculator from './components/Calculator.vue'
import Screen from './components/Screen.vue'
export default {
  name: 'App',
  components: { Button, Calculator, Screen }
}
</script>

<style lang="scss"></style>
