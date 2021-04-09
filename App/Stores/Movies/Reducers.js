import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { MovieTypes } from './Actions'

export const fetchMoviesLoading = (state) => ({
  ...state,
  moviesIsLoading: true,
  moviesErrorMessage: null,
})

export const fetchMoviesSuccess = (state, { movies }) => {
  const nextMovies = { ...state.movies, ...movies }

  if (movies.page > state.movies.page) {
    nextMovies.results = [...state.movies.results, ...movies.results]
  }

  return {
    ...state,
    movies: nextMovies,
    moviesIsLoading: false,
    moviesErrorMessage: null,
  }
}

export const fetchMoviesFailure = (state, { errorMessage }) => ({
  ...state,
  movies: {},
  moviesIsLoading: false,
  moviesErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [MovieTypes.FETCH_MOVIES_LOADING]: fetchMoviesLoading,
  [MovieTypes.FETCH_MOVIES_SUCCESS]: fetchMoviesSuccess,
  [MovieTypes.FETCH_MOVIES_FAILURE]: fetchMoviesFailure,
})
