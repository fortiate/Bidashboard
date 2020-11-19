<template>
  <div id="app">
    <consumer-analytics></consumer-analytics>
  </div>
</template>

<script>

import consumerAnalytics from './components/consumerAnalytics.vue'

export default {
  name: 'App',
  components: {
    consumerAnalytics
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
