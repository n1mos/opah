import { takeLatest, all } from 'redux-saga/effects'

import { MovieTypes } from 'App/Stores/Movies/Actions'
import { PeopleTypes } from 'App/Stores/People/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'

import { fetchMovies } from './MoviesSaga'
import { fetchPeople } from './PeopleSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(MovieTypes.FETCH_MOVIES, fetchMovies),
    takeLatest(PeopleTypes.FETCH_PEOPLE, fetchPeople),
  ])
}
