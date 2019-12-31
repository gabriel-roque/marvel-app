<template>
  <v-form
      @submit.prevent
  >
    <v-container>
      <v-row>
        <p class="question font-weight-bold">
          Whats your favorite hero?
        </p>

        <v-col
            xl="10" lg="9" md="9" sm="10" cols="9"
        >
          <v-text-field
              placeholder="ex: hulk, thor, iron man..."
              v-model="name"
              :height="this.height"
              class="search"
              hide-details
              light
              solo
              rounded
              required
          />

        </v-col>
        <v-col xl="2" lg="3" sm="2">
          <button @click="searchHero()">
            <i class="fa fa-search icon mt-1"/>
          </button>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "formSearch",
        data: () => ({
            valid: false,
            name: '',
            height: 100,
        }),
        methods: {
            ...mapActions({
                search: 'character/searchHero'
            }),

            searchHero() {
                if (this.name) {
                    this.search(this.name);
                    this.$router.push({name: 'heroes.profile'})
                } else {
                    // todo snackbar with alert empty hero name
                }

            }
        },

        mounted() {
            if (window.innerWidth >= 200 && window.innerWidth <= 500) {
                this.height = 30
            }
        }
    }

</script>

<style scoped>
  @media (min-width: 1921px) {
    .question {
      font-size: 80px;
    }

    .icon {
      font-size: 100px;
    }

    .search {
      font-size: 30px;
    }
  }

  @media (min-width: 1368px) and (max-width: 1920px) {
    .question {
      font-size: 80px;
    }

    .icon {
      font-size: 100px;
    }

    .search {
      font-size: 30px;
    }
  }

  @media (min-width: 700px) and (max-width: 1366px) {
    .question {
      font-size: 60px;
    }

    .icon {
      font-size: 90px;
    }

    .search {
      font-size: 30px;
    }

  }

  @media (min-width: 200px) and (max-width: 699px) {
    .question {
      font-size: 40px;
    }

    .icon {
      font-size: 30px;
    }
  }

  button:focus {
    outline: 0;
  }
</style>