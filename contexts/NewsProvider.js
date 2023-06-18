import React, { useEffect, useState } from 'react'
import Context from './Context'
import { fetchAllNews, fetchFromSource } from '../API/apiCalls';
const NewsProvider = (props) => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState('general')
    const [index, setIndex] = useState(1)
    const [darkTheme, setDarkTheme] = useState(true)
    const fetchNews = async () => {
        await fetchAllNews({ category }).then(res => { setNews(res); setIndex(1) }).catch(err => console.log(err))
    }
    const fetchBySource = async (source) => {
        await fetchFromSource({ source }).then(data => { setNews(data); setIndex(1) }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchNews();
    }, [category])
    return (
        <Context.Provider value={{ index, setIndex, news, setNews, category, setCategory, fetchBySource, darkTheme, setDarkTheme }}>{props.children}</Context.Provider>
    )
}

export default NewsProvider