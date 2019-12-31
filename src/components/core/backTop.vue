<template>
  <v-fab-transition>
    <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        tag="icon"
        height="50"
        color="transparent"
        class="transparent elevation-0"
        @click="toTop"
        style="z-index: 10"
    >
      <i class="fas fa-arrow-circle-up fa-2x"/>
    </v-btn>
  </v-fab-transition>
</template>

<script>
    export default {
        name: "backTop",
        data() {
            return {
                fab: false
            }
        },
        methods: {
            onScroll(e) {
                if (typeof window === 'undefined') return;
                const top = window.pageYOffset || e.target.scrollTop || 0;
                this.fab = top > 20
            },
            toTop() {
                this.$vuetify.goTo(0)
            }
        },
    }
</script>