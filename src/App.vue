<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
    export default {
        name: "App"
    };
</script>

<style>
  ::-webkit-scrollbar {
    width: 12px;
    background: #dad7d7;
  }
  ::-webkit-scrollbar-thumb {
    background: #ed1d24;
  }
</style>
