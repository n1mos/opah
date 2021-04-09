import { put, call } from 'redux-saga/effects'
import MoviesActions from 'App/Stores/Movies/Actions'
import { moviesService } from 'App/Services/MoviesService'

export function* fetchMovies(action) {
  yield put(MoviesActions.fetchMoviesLoading())

  const movies = yield call(moviesService.fetchMovies, action)

  if (movies) {
    yield put(MoviesActions.fetchMoviesSuccess(movies))
  } else {
    yield put(MoviesActions.fetchMoviesFailure('There was an error. Please try again later.'))
  }
}
