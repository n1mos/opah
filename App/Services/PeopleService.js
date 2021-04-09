import axios from 'axios'
import { Config } from 'App/Config'

const peopleApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchPeople({ list }) {
  const getData = Promise.all(list.map(async (charUrl) => (
    peopleApiClient.get(charUrl).then(res => res.data)
  )))

  return getData.then((data) => {
    return data
  })
}

export const peopleService = {
  fetchPeople,
}
