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
  characterWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  characterText: {
    ...Fonts.normal,
    color: Colors.gray3
  },
  detailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsText: {
    ...Fonts.normal - 2,
    color: Colors.black
  },
  detailsImage: {
    marginLeft: 5
  },
})
