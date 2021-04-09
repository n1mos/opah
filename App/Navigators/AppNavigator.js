import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Header from 'App/Containers/Header/Header'
import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import MovieScreen from 'App/Containers/MovieScreen/MovieScreen'
import PeopleScreen from 'App/Components/PeopleScreen/PeopleScreen'

import { Colors } from 'App/Theme'

const StackNavigator = createStackNavigator(
  {
    MainScreen: HomeScreen,
    MovieScreen: MovieScreen,
    PeopleScreen: PeopleScreen,
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'float',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.black,
        height: 60,
      },
      header: (options) => <Header options={options} />,
    },
  }
)

export default createAppContainer(StackNavigator)
