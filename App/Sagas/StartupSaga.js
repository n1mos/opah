import { put } from 'redux-saga/effects'

import MoviesActions from 'App/Stores/Movies/Actions'
import NavigationService from 'App/Services/NavigationService'

export function* startup() {
  yield put(MoviesActions.fetchMovies())

  NavigationService.navigateAndReset('MainScreen')
}
