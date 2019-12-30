<template>
  <v-content>
    <h1>Home here!</h1>
  </v-content>
</template>

<script>
    import {characterClient} from "../plugins/axios";

    export default {
        name: "Home",

        created() {


            characterClient.get(characterClient.baseURL,
                { params: { name: 'thor' } })
                .then(resp => console.log(resp.data.data));



        }
    }
</script>