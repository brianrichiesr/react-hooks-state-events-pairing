const Comment = ({ comment: { user, comment } }) => {
    return <>
        <h4>{user}</h4>
        <p>{comment}</p>
    </>
}

export default Comment;