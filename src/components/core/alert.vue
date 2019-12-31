<template>
  <div class="text-center">

    <v-snackbar
        v-model="alert.status"
        :timeout="timeout"
        color="blue"
    >
      <span class="white--text--text subtitle-2 font-weight-bold">
        {{alert.msg}}
        <v-icon class="ml-1">fa fa-sad-tear</v-icon>
      </span>
    </v-snackbar>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "alert",
        data: () => ({
            timeout: 2000,
        }),

        computed: {
            ...mapGetters({
                alert: 'character/alert'
            })
        }
    }
</script>

<style scoped>

</style>