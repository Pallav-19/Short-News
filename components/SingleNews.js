import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import useNews from '../hooks/useNews';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const SingleNews = ({ item, index }) => {
    const { darkTheme } = useNews
    return (
        <View
            style={{
                height: windowHeight,
                width: windowWidth,
                backgroundColor: darkTheme ? "black" : "white",
                transform: [{ scaleY: -1 }],
            }}
        >
            <Image source={{ uri: item.urlToImage }} style={{ width: windowWidth, height: "45%", resizeMode: 'cover' }} />
            <View style={{ ...styles.description, backgroundColor: darkTheme ? '#282c35' : "#eeeeee" }}>
                <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>{item?.title}</Text>
                <Text style={{ ...styles.content, color: darkTheme ? "white" : "black" }}>{item.description}</Text>
                <Text style={{ color: darkTheme ? "white" : "black" }}>
                    Short by
                    <Text style={{ fontWeight: 'bold' }}>
                        {" "} {item.author ?? "unknown"}
                    </Text>
                </Text>
                <ImageBackground
                    source={{ uri: item?.urlToImage }}
                    blurRadius={30}
                    style={{ ...styles.footer }}>
                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                        <Text style={{ fontSize: 15, color: darkTheme ? "white" : "white" }}>{item.content?.slice(0, 45)}...</Text>
                        <Text style={{ fontSize: 17, color: darkTheme ? "white" : "white", fontWeight: 'bold' }}>Read More</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
        marginTop: 10
    },
    content: {
        fontSize: 18,
        paddingBottom: 10,
    },
    footer: {
        height: 80,
        width: windowWidth,
        position: 'absolute',
        bottom: 0,
        backgroundColor: "#d7be69",
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    description: {
        flex: 1,
        padding: 15
    }
})

export default SingleNews;
