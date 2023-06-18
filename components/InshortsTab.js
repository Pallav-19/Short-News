import React, { useState } from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import Discover from '../pages/Discover';
import News from '../pages/News';
import TopNavigation from './TopNavigation';
import useNews from '../hooks/useNews';

const InshortsTab = () => {
    const { index, setIndex } = useNews()
    const layout = useWindowDimensions()
    const [routes] = useState([
        { key: "first", title: "Discover" },
        { key: "second", title: "News" }
    ])
    const renderScene = SceneMap({
        first: Discover,
        second: News
    })
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
        />
    );
}

const styles = StyleSheet.create({})

export default InshortsTab;
