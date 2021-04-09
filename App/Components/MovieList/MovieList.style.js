import { StyleSheet } from 'react-native'

import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...Fonts.h3,
    fontWeight: '700',
    paddingTop: 20,
    marginBottom: 20,
  },
})
