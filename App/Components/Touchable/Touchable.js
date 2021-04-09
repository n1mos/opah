import React from 'react'

import { Platform, TouchableWithoutFeedback, TouchableNativeFeedback, View } from 'react-native'

const Touchable = ({ children, style, onPress }) => {
  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>
  } else {
    return <TouchableWithoutFeedback style={style} onPress={onPress}>{children}</TouchableWithoutFeedback>
  }
}

export default Touchable
