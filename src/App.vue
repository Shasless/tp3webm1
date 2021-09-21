<template>
  <div id="app">
    <HomePage msg="TP 3 Web M1 Adrien Girard"/>
  </div>
</template>

<script>

import HomePage from "@/components/HomePage";
export default {
  name: 'App',
  components: {
    HomePage,

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
