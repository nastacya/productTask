export const state = () => ({
  movieList: []
});

export const mutations = {
  add(state, movie)  { // { name: "The Green Mile, description: "Best movie ever", rating: 10 }
    state.movieList = [ ...state.movieList, movie ];
  },
  remove(state, index) {
    state.movieList = state.movieList.splice(0, index);
  }
};
