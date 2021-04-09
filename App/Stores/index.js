import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as MoviesReducer } from './Movies/Reducers'
import { reducer as PeopleReducer } from './People/Reducers'

export default () => {
  const rootReducer = combineReducers({
    movies: MoviesReducer,
    people: PeopleReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
