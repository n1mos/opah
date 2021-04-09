import { StyleSheet } from 'react-native'

import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    ...Fonts.h3,
    color: Colors.black,
    fontWeight: '700',
    marginBottom: 20,
  },
  detailTitle: {
    ...Fonts.normal,
    fontWeight: '700',
    color: Colors.black,
  },
  detailContent: {
    ...Fonts.normal,
    color: Colors.gray3,
    marginBottom: 10
  },
})
