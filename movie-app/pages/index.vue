<template>
  <v-app>
    <Header/>
    <v-content>
      <AddForm/>
      <MovieList/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import Footer from '../components/footer';
  import Header from '../components/header';
  import AddForm from '../components/addForm';
  import MovieList from '../components/movieList'
  export default {
  components: {
    Footer,
    Header,
    AddForm,
    MovieList,
  }
}
</script>

<style>
</style>

