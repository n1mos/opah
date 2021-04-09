import React from 'react'

import { FlatList, Text, View } from 'react-native'

import Styles from './MovieList.style'
import Movie from 'App/Containers/Movie/Movie'

const MovieList = ({ title, data, onRefresh, onEndReached, ListFooterComponent, refreshing }) => {
  return (
    <View style={Styles.container}>
      <FlatList
        data={data}
        style={Styles.list}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        renderItem={({ item }) => <Movie page={false} data={item} />}
        keyExtractor={(item) => `movie-${item.episode_id}`}
        ListHeaderComponent={() => <Text style={Styles.title}>{title}</Text>}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  )
}

export default MovieList
