import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { PeopleTypes } from './Actions'

export const fetchPeopleLoading = (state) => ({
  ...state,
  peopleIsLoading: true,
  peopleErrorMessage: null,
})

export const fetchPeopleSuccess = (state, { people }) => {
  return {
    ...state,
    people,
    peopleIsLoading: false,
    peopleErrorMessage: null,
  }
}

export const fetchPeopleFailure = (state, { errorMessage }) => ({
  ...state,
  people: {},
  peopleIsLoading: false,
  peopleErrorMessage: errorMessage,
})

export const clearPeople = (state) => ({
  ...state,
  people: INITIAL_STATE.people,
  peopleIsLoading: false,
  peopleErrorMessage: null,
})

export const reducer = createReducer(INITIAL_STATE, {
  [PeopleTypes.FETCH_PEOPLE_LOADING]: fetchPeopleLoading,
  [PeopleTypes.FETCH_PEOPLE_SUCCESS]: fetchPeopleSuccess,
  [PeopleTypes.FETCH_PEOPLE_FAILURE]: fetchPeopleFailure,
  [PeopleTypes.CLEAR_PEOPLE]: clearPeople,
})
