import { getComments } from "../Api"
import { useApiRequest } from "../UseApiRequest"
import { Error } from "./Error"
import { Loading } from "./Loading"

export const CommentList = ({article_id}) => {
    const {data: comments, isLoading, error} = useApiRequest(getComments, article_id)

    if (isLoading){
        return <Loading/>
    }
    
    if (error){
        return <Error error={error}/>
    }


    return(
        <ul className="comments-list">
            <div>
                {comments.map((comment) => {
                const {comment_id, body, votes, author, created_at} = comment

                    return (
                    <section key={comment_id} className="comment-box">
                        
                        <div>
                        <h4>By: {author}</h4>
                        <p>{body}</p>
                        <p>Commented on: {created_at} Votes: {votes} </p>
                        </div>
            
                    </section>)
                })}
            </div>
        </ul>
    )
}