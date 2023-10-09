import { useState } from "react";

const VideoInfo = ({
    video: {
        title,
        views,
        createdAt,
        upvotes,
        downvotes
    },
    toggleComments,
}) => {

    const [bool, setBool] = useState(true);
    const [numOfUpvotes, setNumOfUpvotes] = useState(upvotes);
    const [numOfDownvotes, setNumOfDownvotes] = useState(downvotes);
    const changeBtnText = () => {
        setBool(currentValue => !currentValue);
    }
    const addUpvote = () => {
        console.log("upvote")
        setNumOfUpvotes(currentValue => currentValue + 1)
    }
    const addDownvote = () => {
        console.log("downvote")
        setNumOfDownvotes(currentValue => currentValue + 1)
    }

    return <>
        <h1>{title}</h1>
        <p>{views} Views | Uploaded {createdAt}</p>
        <p><button onClick={addUpvote}>{numOfUpvotes} 👍</button>
        <button onClick={addDownvote}>{numOfDownvotes} 👎</button></p>
        <button onClick={() => {
            toggleComments();
            changeBtnText();
            }
        }>{bool ? "Hide Comments" : "Show Comments"}</button>
    </>
}

export default VideoInfo;