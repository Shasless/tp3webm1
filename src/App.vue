<template>
  <div>
    <base_layout >
    <HomePage />
    </base_layout >
  </div>
</template>

<script>

import HomePage from "@/components/HomePage";
import base_layout from "@/components/base_layout";

export default {
  name: 'App',
  components: {
    HomePage,
    base_layout,

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
