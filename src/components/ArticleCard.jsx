import { useParams } from "react-router"
import { useApiRequest } from "../UseApiRequest";
import { getArticle } from "../Api";
import { CommentList } from "./CommentList";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Link } from "react-router";

export const ArticleCard = ({article}) => {
    const {article_id} = useParams();
    const {isLoading, error} = useApiRequest(getArticle, article_id)
    
    if (isLoading){
        return <Loading/>
    }
    
    if (error){
        return <Error error={error}/>
    }

const {title, topic, author, created_at, votes, comment_count, article_img_url} = article

    return(
        <section className="articles">
            <Link to={`/articles/${article.article_id}`}>
            <div className="article-container">
            <div className="topic-container">
            <img src={article_img_url} alt={title} className="pic"/>
            <p> Topic: {topic}</p>
            </div>
            
            <div className="article-text">
            <h3>{title}</h3>
            <p>By: {author}</p>
            <p>Comments: {comment_count} Votes: {votes}</p>
            </div>

            </div>
            </Link>

        </section>
    )
}