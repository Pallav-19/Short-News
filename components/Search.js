import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal, Text, TouchableOpacity, Dimensions } from 'react-native';
import SingleNews from './SingleNews';
import { ScrollView } from 'react-native';
const windowHeight = Dimensions.get('window').height
const Search = () => {
    const { news, darkTheme } = useNews()
    const [searchResults, setSearchResults] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState()
    const handleSearch = (text) => {
        if (!text) {
            setSearchResults([])
            return;
        }
        setSearchResults(news?.articles?.filter(query => query.title.includes(text)))
    }
    const handleModal = (n) => {
        setModalVisible(true);
        setCurrentNews(n);
    };

    return (
        <View style={{ width: "100%", position: "relative" }}>
            <TextInput
                onChangeText={(text) =>
                    handleSearch(text)
                }
                placeholderTextColor={darkTheme ? "#fff" : "#000"}
                placeholder='Search something' style={{
                    ...styles.search,
                    color: darkTheme ? "white" : "black",
                    backgroundColor: darkTheme ? "black" : "white"

                }} >

            </TextInput>
            <ScrollView style={styles.searchResults}>
                {searchResults.slice(0, 10).map((n) => (
                    <TouchableOpacity
                        key={n.title}
                        activeOpacity={0.7}
                        onPress={() => handleModal(n)}
                        style={{ marginVertical: 3 }}
                    >
                        <Text
                            style={{
                                ...styles.singleResult,
                                color: darkTheme ? "white" : "black",
                                backgroundColor: darkTheme ? "black" : "white"
                            }}
                        >
                            {n.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{
                        position: "absolute",
                        zIndex: 10000000,
                        right: 0,
                        margin: 20,
                    }}
                >
                    <Entypo name="circle-with-cross" size={30} color="black" />
                </TouchableOpacity>
                <View style={{ height: "100%", transform: [{ scaleY: -1 }] }}>
                    <SingleNews item={currentNews} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 16,
    },
    searchResults: {
        position: 'relative',
        // top: 80,
        zIndex: 1000000000,
        maxHeight: windowHeight,
        overflow: 'scroll'

    },
    singleResult: {
        borderRadius: 5,
        padding: 10,
        margin: 0.5,
        shadowColor: 'black',
        elevation: 5,
    }
})

export default Search;
