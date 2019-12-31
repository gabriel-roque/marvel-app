<template>
  <v-app class="marvel-pattern">
    <app-bar/>
    <v-content>
      <v-container class="fill-height">
        <v-row
            justify="center"
            align="center"
        >
          <v-col xl="10" lg="8" md="12">
            <form-search class="pl-10"/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>

</template>

<script>
    import FormSearch from "@/components/character/formSearch";
    import AppBar from "@/components/core/appBar";

    export default {
        name: 'SearchHeroes',
        components: {AppBar, FormSearch},
    }
</script>

<style scoped>
  .marvel-pattern {
    background-size: cover;
    background-image: url('~@/assets/img/pattern-marvel.jpg');
  }
</style>