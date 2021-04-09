import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  clearPeople: null,
  fetchPeople: ['list'],
  fetchPeopleLoading: null,
  fetchPeopleSuccess: ['people'],
  fetchPeopleFailure: ['errorMessage'],
})

export const PeopleTypes = Types
export default Creators
