import Comment from "./Comment";

const CommentList = ({ comments }) => {
    return <div id="comments">
        <h2>{comments.length} Comments</h2>
        {comments.map(comment => {
            return <Comment key={comment.id} comment={comment} />
        })}
    </div>
}

export default CommentList;