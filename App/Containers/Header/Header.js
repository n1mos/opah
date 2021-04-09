import React, { Component } from 'react'
import { View, Animated, Image } from 'react-native'

import { Images } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import Touchable from 'App/Components/Touchable/Touchable'
import Styles from './Header.style'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      scaleAnim: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.scaleAnim,
      {
        toValue: 1,
        duration: 3000,
      }
    ).start();
  }

  renderBackButton() {
    const { length } = this.props.options.navigation.state.routes
    const showBackButton = length > 1

    if (!showBackButton) {
      return <View />
    }

    return (
      <Touchable onPress={() => NavigationService.navigateBack()}>
        <View style={Styles.backContainer}>
          <Image style={Styles.back} source={Images.back} resizeMode={'contain'} />
        </View>
      </Touchable>
    )
  }

  render() {
    const { scaleAnim } = this.state

    return (
      <View style={Styles.headerContainer}>
        <View style={Styles.subHeaderContainer}>
          {this.renderBackButton()}

          <View style={Styles.logoContainer}>
            <Animated.Image style={[Styles.logo, { transform: [{ scale: scaleAnim }] }]} source={Images.logo} resizeMode={'contain'} />
          </View>
        </View>
      </View>
    )
  }
}

export default Header
