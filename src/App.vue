<template>
  <div id="app">
     
      <retail-payment> </retail-payment>

    
  </div>
</template>

<script>

import RetailPayment from './components/RetailPayment/RetailPayment.vue';

export default {
  name: 'App',
  components: {
    RetailPayment
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
