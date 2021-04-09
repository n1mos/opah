import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import Styles from './PeopleScreen.style'

const PeopleScreen = ({ navigation: { state: { params: { data }, }, } }) => {
  const capitalize = (string) => {
    return string.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  }

  return (
    <ScrollView style={Styles.scrollView}>
      <View style={Styles.container}>
        <Text style={Styles.title}>{data.name}</Text>

        <Text style={Styles.detailTitle}>Height</Text>
        <Text style={Styles.detailContent}>{data.height}cm</Text>
        <Text style={Styles.detailTitle}>Mass</Text>
        <Text style={Styles.detailContent}>{data.mass}kg</Text>
        <Text style={Styles.detailTitle}>Hair Color</Text>
        <Text style={Styles.detailContent}>{capitalize(data.hair_color)}</Text>
        <Text style={Styles.detailTitle}>Skin Color</Text>
        <Text style={Styles.detailContent}>{capitalize(data.skin_color)}</Text>
        <Text style={Styles.detailTitle}>Eye Color</Text>
        <Text style={Styles.detailContent}>{capitalize(data.eye_color)}</Text>
        <Text style={Styles.detailTitle}>Birth Year</Text>
        <Text style={Styles.detailContent}>{data.birth_year}</Text>
        <Text style={Styles.detailTitle}>Gender</Text>
        <Text style={Styles.detailContent}>{capitalize(data.gender)}</Text>
      </View>
    </ScrollView>
  )
}

export default PeopleScreen
