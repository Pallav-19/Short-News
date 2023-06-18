import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { categories, sources } from '../API/constants'
import Carousel from 'react-native-snap-carousel'
import useNews from '../hooks/useNews'
import Search from '../components/Search'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const SLIDE_WIDTH = Math.round(windowWidth / 3.5);
const Discover = () => {
  const { setCategory, fetchBySource, darkTheme } = useNews()
  return (
    <View style={{ ...styles.discover, backgroundColor: darkTheme ? "#282c35" : "#eeeeee" }}>
      {/* search */}
      <Search />
      {/* categories */}
      <Text style={{ ...styles.categories, color: darkTheme ? "white" : "black" }}>Categories</Text>
      <Carousel
        activeSlideAlignment='start'
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        layout='default'
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setCategory(item.name)} style={{ ...styles.category }}>

            <Image source={{ uri: item.pic }} style={{ ...styles.categoryImage }} />
            <Text style={{ ...styles.name, color: darkTheme ? "white" : "black" }} >{item.name}</Text>
          </TouchableOpacity>)}
      />
      {/* sources */}
      <Text style={{ ...styles.categories, color: darkTheme ? "white" : "black" }}>Sources</Text>
      <View style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            onPress={() => fetchBySource(s.id)}
            key={s.id}
            style={styles.sourceContainer}
          >
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center'
  },
  categories: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007fff",
    borderBottomWidth: 5,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: 'contain'
  },
  name: {
    fontSize: 14,
    textTransform: 'capitalize'
  },
  category: {
    height: 130,
    margin: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: 'contain'
  },
  sources: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    // backgroundColor: "#cc313d"
  }
})
export default Discover