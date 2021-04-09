import React from 'react'
import { View, Animated, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'

import { Images } from 'App/Theme'
import PeopleActions from 'App/Stores/People/Actions'
import Touchable from 'App/Components/Touchable/Touchable'
import NavigationService from 'App/Services/NavigationService'
import Styles from './Movie.style'

class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scaleAnim: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.scaleAnim,
      {
        toValue: 1,
        duration: 800,
      }
    ).start();
  }

  renderContainer = () => {
    const { scaleAnim } = this.state
    const { data, page } = this.props
    const pageInfoContainer = page && { flexDirection: 'column', height: 50 }
    const release = moment(data.release_date).format('MMMM D, YYYY')

    return (
      <View style={Styles.container}>
        <View style={Styles.imageContainer}>
          <Animated.Image style={[Styles.image, page && { transform: [{ scale: scaleAnim }] }]} source={Images[data.episode_id]} resizeMode={'cover'} />
        </View>

        <View style={Styles.bottomContainer}>
          <Text style={Styles.title}>{data.title}</Text>

          <View style={[Styles.infoContainer, pageInfoContainer]}>
            <Text style={Styles.release}>{release}</Text>
          </View>
        </View>
      </View>
    )
  }

  onPress = () => {
    const { data } = this.props

    this.props.fetchPeople(data.characters)

    NavigationService.navigate('MovieScreen', { data })
  }

  render() {
    const { page } = this.props

    if (page) {
      return this.renderContainer()
    } else {
      return <Touchable onPress={this.onPress}>{this.renderContainer()}</Touchable>
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPeople: (list) => dispatch(PeopleActions.fetchPeople(list)),
})

export default connect(null, mapDispatchToProps)(Movie)
