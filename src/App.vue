<template>
  <div class="bg-black text-white">
    <div id="app">
      <nav class="bg-black">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8" src="./assets/logo.png" alt="Logo">
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <router-link to="/calendar" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendario</router-link>
                  <router-link to="/fundamentos" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Fundamentos</router-link>
                  <router-link to="/helloworld" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Helloworld</router-link>
                  <router-link to="/tailwindtest" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">TailwindTest</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
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
