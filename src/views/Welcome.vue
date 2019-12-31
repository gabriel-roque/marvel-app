<template>
  <v-container
      fluid
      class="bg-marvel-red"
      style="height: 100%"
  >
    <v-row
        justify="center"
        class="ma-10"
    >
      <v-col xl="6" lg="7">
        <v-img
            src="@/assets/img/marvel-logo.png"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-row
        justify="center"
        class="ma-10"
    >
      <v-col md="6" lg="6" align="center">
        <p class="display-1 white--text font-weight-bold">
          WELCOME MARVEL APP!
        </p>
      </v-col>
    </v-row>
    <v-row
        justify="center"
        class="ma-10"
    >
      <v-col align="center">
        <v-btn
            rounded
            large
            type="btn"
            @click="$router.push({name: 'heroes.search'})"
        >
          Get started!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
  .bg-marvel-red {
    background-color: #ed1d24;
    width: auto;
  }
</style>