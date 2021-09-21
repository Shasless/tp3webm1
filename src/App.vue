<template>
  <div>
    <base_header />
    <HomePage msg="TP 3 Web M1 Adrien Girard"/>
    <base_footer />
  </div>
</template>

<script>

import HomePage from "@/components/HomePage";
import base_footer from "@/components/base_footer";
import base_header from "@/components/base_header";

export default {
  name: 'App',
  components: {
    HomePage,
    base_footer,
    base_header

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
