import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import MoviesActions from 'App/Stores/Movies/Actions'
import Styles from './HomeScreen.style'
import MovieList from 'App/Components/MovieList/MovieList'

class HomeScreen extends React.Component {
  renderMovieList() {
    const { moviesErrorMessage, moviesIsLoading, movies } = this.props

    if (moviesErrorMessage) {
      return <Text style={Styles.error}>{moviesErrorMessage}</Text>
    }

    if (!movies.hasOwnProperty('results')) {
      return <ActivityIndicator size="large" color="#000" />
    }

    return (
      <MovieList
        title="List of Movies"
        data={movies['results']}
        onRefresh={() => this.props.fetchMovies()}
        refreshing={moviesIsLoading}
        ListFooterComponent={moviesIsLoading && <ActivityIndicator size="large" color="#000" />}
      />
    )
  }

  render() {
    return (
      <View style={Styles.container}>
        {this.renderMovieList()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  moviesIsLoading: state.movies.moviesIsLoading,
  moviesErrorMessage: state.movies.moviesErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(MoviesActions.fetchMovies()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
