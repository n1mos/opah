import { StyleSheet } from 'react-native'
import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  headerContainer: {
    flex: 1,
  },
  subHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  backContainer: {
    position: 'absolute',
    zIndex: 1,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: Colors.black,
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    height: 60,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    maxHeight: 40,
  },
})
