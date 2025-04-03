import { ArticleCard } from "./ArticleCard"
import { getArticles, getSearchedArticles } from "../Api"
import { useApiRequest } from "../UseApiRequest"
import { Error } from "./Error"
import { Loading } from "./Loading"

export const ArticleList = ({searchTerm}) => {
    const {data: articles, isLoading, error} = useApiRequest(searchTerm? getSearchedArticles: getArticles, searchTerm)

    if (isLoading){
        return <Loading/>
    }
    
    if (error){
        return <Error error={error}/>
    }

    return(
        <ul>
            <p>Results: {articles.length}</p>
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id} className="container"/>
            })}
        </ul>
    )
}