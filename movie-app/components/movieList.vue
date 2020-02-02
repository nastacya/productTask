<template>
  <div>
    <div v-for="(movie, index) in movieList" v-bind:key="index">
      <v-card
        class="mx-auto my-12"
        max-width="374"
        >
        <v-card-title>{{ movie.name }}</v-card-title>
        <v-card-text>

          <div class="my-4 subtitle-1 black--text">
            {{ movie.genre }}
          </div>

          <v-row
            align="center"
            class="mx-0"
            >
            <v-rating
              :value="movie.rate"
              color="amber"
              :length="10"
              dense
              readonly
              size="14"
            >
            </v-rating>

          </v-row>
          <div> {{ movie.description }} </div>
        </v-card-text>

        <v-divider class="mx-4"/>

        <v-card-actions>
          <v-btn
            color="deep-purple accent-4"
            text
            @click="remove(index)"
            >
            Remove
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'movielist',
    computed: {
      movieList() {
        return this.$store.state.movie.movieList
      }
    },
    methods: {
      remove(index) {
        this.$store.commit('movie/remove', index)
      }
    }
  };
</script>

<style scoped>

</style>
