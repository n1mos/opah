import { StyleSheet } from 'react-native'

import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  error: {
    ...Fonts.normal,
    marginTop: 15,
    color: Colors.error,
    textAlign: 'center',
  },
})
