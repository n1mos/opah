import { StyleSheet } from 'react-native'

import { Fonts, Colors, Dimensions } from 'App/Theme'

const { vw } = Dimensions

export default StyleSheet.create({
  container: {
    paddingBottom: 5,
    marginBottom: 25,
  },
  title: {
    ...Fonts.normal,
    color: Colors.black,
    fontWeight: '700',
  },
  imageContainer: {
    height: vw(56),
  },
  image: {
    flex: 1,
  },
  bottomContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderLeftColor: Colors.gray4,
    borderRightColor: Colors.gray4,
    borderBottomColor: Colors.gray4,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  release: {
    flex: 1,
    ...Fonts.normal,
    color: Colors.gray3,
  },
})
