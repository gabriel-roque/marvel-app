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
    <alert/>
  </v-app>

</template>

<script>
    import FormSearch from "@/components/character/formSearch";
    import AppBar from "@/components/core/appBar";
    import Alert from "@/components/core/alert";

    export default {
        name: 'SearchHeroes',
        components: {Alert, AppBar, FormSearch},
    }
</script>

<style scoped>
  .marvel-pattern {
    background-size: cover;
    background-image: url('~@/assets/img/pattern-marvel.jpg');
  }
</style>