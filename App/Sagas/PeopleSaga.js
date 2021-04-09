import { put, call } from 'redux-saga/effects'
import PeopleActions from 'App/Stores/People/Actions'
import { peopleService } from 'App/Services/PeopleService'

export function* fetchPeople(action) {
  yield put(PeopleActions.fetchPeopleLoading())

  const people = yield call(peopleService.fetchPeople, action)

  if (people) {
    yield put(PeopleActions.fetchPeopleSuccess(people))
  } else {
    yield put(PeopleActions.fetchPeopleFailure('There was an error. Please try again later.'))
  }
}
