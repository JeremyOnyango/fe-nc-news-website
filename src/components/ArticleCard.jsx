import { useParams } from "react-router"
import { useApiRequest } from "./UseApiRequest";
import { getArticle } from "../Api";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const ArticleCard = ({article}) => {
    const {article_id} = useParams();
    const {isLoading, error} = useApiRequest(getArticle, article_id)
    
    if (isLoading){
        return <Loading/>
    }
    
    if (error){
        return <Error error={error}/>
    }

const {title, topic, author, body, created_at, votes, comment_count, article_img_url} = article

    return(
        <section className="articles">
            <h3>{title}</h3>
            <p>{topic}</p>
            <p>By: {author}</p>
            <img src={article_img_url} alt={title} className="pic"/>
            <p>{body}</p>
            <p>No. of Comments: {comment_count} Votes: {votes} </p>
            <p>Released on: {created_at}</p>
        </section>
    )
}