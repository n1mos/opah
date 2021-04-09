import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'

import PeopleActions from 'App/Stores/People/Actions';
import Styles from './MovieScreen.style'
import Movie from 'App/Containers/Movie/Movie'
import PeopleList from 'App/Components/PeopleList/PeopleList'

class MovieScreen extends React.Component {
  componentWillUnmount() {
    this.props.clearPeople()
  }

  render() {
    const { navigation: { state: { params: { data }, }, }, people } = this.props

    console.log(people)

    return (
      <ScrollView style={Styles.scrollView}>
        <Movie page={true} data={data} />

        <View style={Styles.container}>
          <Text style={Styles.title}>Opening Crawl</Text>

          <Text style={Styles.overview}>{data.opening_crawl}</Text>

          <PeopleList people={people} />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  people: state.people.people,
  peopleIsLoading: state.people.peopleIsLoading,
  peopleErrorMessage: state.people.peopleErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  clearPeople: () => dispatch(PeopleActions.clearPeople()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieScreen)
