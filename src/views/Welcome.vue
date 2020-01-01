<template>
  <v-container
      fluid
      class="bg-marvel-red"
      style="height: 100%; width: 100%"
  >
    <intro v-if="intro"/>
    <get-started v-if="!intro"/>
  </v-container>
</template>

<script>
    import Intro from "../components/core/intro";
    import GetStarted from "../components/core/getStarted";

    export default {
        name: "Home",
        data: () => ({
            intro: true
        }),
        components: {GetStarted, Intro},
        mounted() {
            setTimeout(() => {
                this.intro = !this.intro
            }, 2000)
        }
    }
</script>

<style>
  .bg-marvel-red {
    background-color: #ed1d24;
    width: auto;
  }
</style>