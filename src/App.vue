<template>
  <div class="bg-black text-white">
    <div id="app">
      <router-link to="/calendar">Calendario</router-link>
      <router-link to="/fundamentos">Fundamentos</router-link>
      <router-link to="/helloworld">Helloworld</router-link>
      <router-link to="/tailwindtest">TailwindTest</router-link>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: true, // Cambia esta variable según tus necesidades
    };
  },
};
</script>

<style>
body {
  background-color: black;
  color: white;
}
</style>
