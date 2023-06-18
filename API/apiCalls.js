import axios from "axios"
import { getNewsAPI, getSourceAPI } from "./constants"

const callApi = axios.create({
    baseURL: 'https://saurav.tech/NewsAPI'
})
export const fetchAllNews = async ({ category, country }) => {

    return new Promise(async (resolve, reject) => {

        return await callApi.get(getNewsAPI(category)).then(({ data }) => resolve(data)).catch(err => reject(err))
    })
}
export const fetchFromSource = async ({ source }) => {
    return new Promise(async (resolve, reject) => {

        return await callApi.get(getSourceAPI(source)).then(({ data }) => resolve(data)).catch(err => reject(err))
    })
}