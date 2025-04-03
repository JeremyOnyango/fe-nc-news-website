import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://seeding-nc-news.onrender.com/api"
})

export const getArticles = () => {
    return ncNewsApi.get("/articles")
    .then(({data: {articles}}) => {
        return articles
    })
    .catch((error) =>
        console.log(error))
}

export const getArticle = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`)
    .then(({data : {article}}) => {
        return article
    })
    .catch((error) =>
        console.log(error))
}

export const getSearchedArticles = (searchTerm) => {
    return ncNewsApi.get(`/articles?q=${searchTerm}`)
    .then(({data: {articles}}) => {
        return articles
    })
    .catch((error) =>
        console.log(error))
}

