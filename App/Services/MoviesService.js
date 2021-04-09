import axios from 'axios'
import { Config } from 'App/Config'

const moviesApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchMovies(action) {
  const url = `films`

  return moviesApiClient.get(url).then((response) => {
    if (response.status == 200) {
      return response.data
    }

    return null
  })
}

export const moviesService = {
  fetchMovies,
}
