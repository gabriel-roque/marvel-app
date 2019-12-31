<template>
  <v-card
      class="mx-auto"
      max-width="220"
      light
  >
    <v-img
        :src="preview.path + '.' + preview.extension"
        height="300px"
    />

    <v-card-title>
      {{this.title}}
    </v-card-title>

    <v-card-actions class="mt-0">
        <v-btn
            color="red"
            dark
            small
            :href="this.detailLink"
            target="_blank"
        >
          More details
        </v-btn>

    </v-card-actions>

  </v-card>
</template>

<script>
    export default {
        name: "cardComic",
        props: {
            preview: Object,
            title: String,
            detailLink: String
        }
    }
</script>
