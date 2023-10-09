import { useState } from "react";
import video from "../data/video.js";
import Iframe from "./Iframe.js";
import VideoInfo from "./VideoInfo.js";
import CommentList from "./CommentList.js";


function App() {
  const [showComments, setShowComments] = useState(true);
  const toggleComments = () => {
    setShowComments(currentValue => !currentValue);
  }
  return (
    <div className="App">
      <Iframe embedUrl={video.embedUrl} />
      <VideoInfo toggleComments={toggleComments} video={video} />
      <hr/>
      {showComments ? <CommentList comments={video.comments} /> : null}
    </div>
  );
}

export default App;
