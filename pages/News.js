import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import useNews from '../hooks/useNews'
import Carousel from 'react-native-snap-carousel'
import SingleNews from '../components/SingleNews'
const News = () => {
    const { news, darkTheme } = useNews()

    const windowHeight = Dimensions.get('window').height
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <View

            style={{ ...styles.Carousel, backgroundColor: darkTheme ? 'black' : "#eeeeee" }}
        >
            {news?.articles &&
                < Carousel
                    initialScrollIndex={0}
                    layout='stack'
                    data={news?.articles?.slice(0, 100)}
                    sliderHeight={300}
                    itemHeight={windowHeight}
                    vertical={true}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    renderItem={({ item, index }) => (
                        <SingleNews item={item} index={index} />
                    )}
                />

            }
        </View>
    )
}
const styles = StyleSheet.create({
    Carousel: {
        flex: 1,

        transform: [{ scaleY: -1 }],
    }
})
export default News