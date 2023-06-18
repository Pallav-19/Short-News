// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741

export const categories = [
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/news.png",
        name: "general",
    },
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
        name: "business",
    },
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
        name: "entertainment",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
        name: "health",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
        name: "science",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
        name: "sports",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
        name: "technology",
    },
];

export const country = [
    {
        code: "in",
        name: "India",
    },
    {
        code: "us",
        name: "USA",
    },
    {
        code: "au",
        name: "Australia",
    },
    {
        code: "ru",
        name: "Russia",
    },
    {
        code: "fr",
        name: "France",
    },
    {
        code: "gb",
        name: "United Kingdom",
    },
];

export const sources = [
    {
        id: "bbc-news",
        name: "BBC News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
    },
    {
        id: "cnn",
        name: "CNN",
        pic: "data:image/png;base64,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",
    },
    {
        id: "fox-news",
        name: "Fox News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
    },
    {
        id: "google-news",
        name: "Google News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
    },
];

export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category, country = "in") => {
    return `/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
    return `/everything/${source}.json`;
};