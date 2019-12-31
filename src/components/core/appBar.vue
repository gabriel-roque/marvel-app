<template>
  <v-app-bar
      app
      clipped-left
      color="#ed1d24"
  >
    <v-img
        src="@/assets/img/marvel-logo.png"
        max-width="90"
    />
    <button
        @click="$router.push({name: 'heroes.search'})"
        v-if="$route.name !== 'heroes.search'"
    >
      <i class="fa fa-search ml-5"/> Search again
    </button>
  </v-app-bar>
</template>

<script>
    export default {
        name: "appBar"
    }
</script>