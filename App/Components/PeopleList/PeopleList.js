import React from 'react'

import { Text, Image, View, ActivityIndicator } from 'react-native'

import { Images } from 'App/Theme';
import Styles from './PeopleList.style'
import NavigationService from 'App/Services/NavigationService'
import Touchable from 'App/Components/Touchable/Touchable';

const PeopleList = ({ people }) => {
  const onPress = (data) => {
    NavigationService.navigate('PeopleScreen', { data })
  }

  const renderPeople = () => {
    return people.map((person) => {
      return (
        <Touchable key={person.name} onPress={() => onPress(person)}>
          <View style={Styles.characterWrapper}>
            <Text style={Styles.characterText}>{person.name}</Text>

            <View style={Styles.detailsWrapper}>
              <Text style={Styles.detailsText}>View Details</Text>
              <Image style={Styles.detailsImage} source={Images.chevron} resizeMode={'contain'} />
            </View>
          </View>
        </Touchable>
      )
    })
  }

  if (!people) {
    return <ActivityIndicator size="large" color="#000" />
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Characters</Text>

      {renderPeople()}
    </View>
  )
}

export default PeopleList
