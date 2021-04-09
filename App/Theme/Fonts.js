import { StyleSheet } from 'react-native'

const size = {
  h2: 20,
  h3: 28,
  regular: 18,
}

export default StyleSheet.create({
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },
})
