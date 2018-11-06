<template>
  <div id="app">
    <Demo />
  </div>
</template>

<script>
import Demo from './components/Demo.vue'

export default {
  name: 'app',
  components: {
    Demo
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 20px;
}
</style>
