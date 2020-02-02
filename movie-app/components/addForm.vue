<template>
  <div class="movie-app__form_wrapper">
    <v-form
      ref="form"
    >
      <v-text-field
        v-model="name"
        label="Movie name"
      >
      </v-text-field>

      <v-textarea
        solo
        v-model="description"
        label="Movie description"
      >
      </v-textarea>

      <v-select
        v-model="genre"
        :items="genres"
        label="Genre"
        >
      </v-select>

      <v-select
        v-model="rate"
        :items="rates"
        label="Rate"
      >
      </v-select>

      <v-btn @click="add">
        Add movie
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: 'addForm',
    data() {
      return {
        name: '',
        description: '',
        genre: '',
        rate: '',
        required: [ v => !!v || 'Name is required'],
        rates: Array.from({ length: 10 }, (_, k) => k + 1),
        genres: [
          'Horror',
          'Comedy',
          'Drama',
          'Historical',
          'Western',
          'Documentary',
          'Action',
          'War movie',
          'Romance',
        ].sort()
      }
    },
    methods: {
      add() {
        this.$store.commit('movie/add', {
          name: this.name,
          description: this.description,
          rate: this.rate,
          genre: this.genre,
        });
        this.name = '';
        this.description = '';
        this.rate = '';
        this.genre = '';
      }
    }
  };
</script>

<style lang="scss" scoped>
.movie-app {
  &__form_wrapper {
      max-width: 600px;
      margin: 100px 0 0 50px;
   }
}
</style>
