<template>
  <v-content>
    <v-container>
      <app-bar/>
      <v-card class="marvel-pattern elevation-4">
        <v-row justify="start">
          <v-col cols="12" align="center">
            <v-avatar
                width="150"
                height="150"
                class="elevation-4">
              <v-img
                  :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
              />
            </v-avatar>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" align="center">
            <p class="display-1 font-weight-bold">{{hero.name}}</p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col xl="8" lg="10" md="10" >
            <p class="pl-4 pr-4 ">{{hero.description}}</p>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <v-container style="width: 80%">
      <v-card class="elevation-4 pa-5">
        <v-row justify="center">
          <v-col
              xl="2"
              align="center"
              v-for="comic in comics">
            <card-comic
                :title="comic.title"
                :preview="comic.thumbnail"
                :detailLink="comic.urls[0].url"
            />
          </v-col>
        </v-row>
      </v-card>
      <back-top/>
    </v-container>
  </v-content>

</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import CardComic from "@/components/character/cardComic";
    import AppBar from "@/components/core/appBar";
    import BackTop from "../../components/core/backTop";

    export default {
        name: "ProfileHero",
        components: {BackTop, AppBar, CardComic},
        computed: {
            ...mapGetters({
                hero: 'character/hero',
                comics: 'character/comics'
            }),
        },

        methods: {
            ...mapActions({
                searchComics: 'character/searchComicsHero'
            })
        },

        mounted() {
            this.searchComics(this.hero.id)
        }

    }
</script>

<style>
  .marvel-pattern {
    background-size: cover;
    background-image: url('~@/assets/img/pattern-marvel.jpg');
  }

  button:focus {
    outline: 0;
  }
</style>