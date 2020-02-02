<template>
  <v-card>
    <v-toolbar
      color="deep-purple accent-4"
      dark
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title> Application </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="currentItem"
          fixed-tabs
          slider-color="white"
        >
          <v-tab
            v-for="(genre, index) in genres"
            v-bind:key="index"
            :href="'#tab-' + genre.name"
          >
            {{ genre.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="currentItem">
      <v-tab-item
        v-for="(genre, index) in genres"
        :key="index"
        :value="'tab-' + genre.name"
      >
        <v-card flat>
          <v-card-text>
            <h2>{{ genre.name }}</h2>
            {{ genre.description }}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    name: 'header',
    data: () => ({
      currentItem: 'tab-Web',
      genres: [
        {
          name: 'Horror',
          description: 'Scary movies'
        },
        {
          name: 'Comedy',
          description: 'Funny movies'
        },
        {
          name: 'Drama',
          description: 'Drama movies'
        },
        {
          name: 'Historical',
          description: 'Historical movies'
        },
        {
          name: 'Western',
          description: 'Western movies'
        },
        {
          name: 'Documentary',
          description: 'Documentary movies'
        },
        {
          name: 'Action',
          description: 'Action movies'
        },
        {
          name: 'War',
          description: 'War movies'
        },
        {
          name: "Romance",
          description: 'Romance movies'
        }
      ],
    }),
  };
</script>

<style scoped>

</style>
