import { useParams } from "react-router"
import { useApiRequest } from "../UseApiRequest";
import { getArticle } from "../Api";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { CommentList } from "./CommentList";

export const ArticlePage = () => {
    const {article_id} = useParams();
    const {data: article, isLoading, error} = useApiRequest(getArticle, article_id)

    if (isLoading){
        return <Loading/>
    }
    
    if (error){
        return <Error error={error}/>
    }

    const {title, topic, author, body, created_at, votes, comment_count, article_img_url} = article

    return(
        <section>
            
            <div className="article-container">

            <div className="topic-container">
            <img src={article_img_url} alt={title} className="pic"/>
            <p> Topic: {topic}</p>
            </div>
            
            <div className="article-text">
            <h3>{title}</h3>
            <h4>By: {author}</h4>
            <p>{body}</p>
            <p>No. of Comments: {comment_count} Votes: {votes} </p>
            <p>Released on: {created_at}</p>
            </div>

            </div>

            <section className="comment-section">
            <CommentList article_id={article_id}/>
            </section>

        </section>
    )
}