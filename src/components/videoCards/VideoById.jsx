import React, { useState } from 'react'
import "../../styles/videoshow.scss"

const VideoById = ({ video }) => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="iframe-container">
                <iframe
                    title={video && video.snippet.title}
                    src={`https://www.youtube.com/embed/${video && video.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                    allowFullScreen
                ></iframe>
            </div>
            <p >{video && video.snippet.title}</p>
            <div className="stat-container">
                <div>
                    <p className="stats">
                        <span role="img" aria-label="views">👀</span>
                        {video && Number(video.statistics.viewCount).toLocaleString('en-IN')} views
                    </p>
                    <p className="stats">
                        <span role="img" aria-label="publishdate">⌚</span>
                        {video && new Date(video.snippet.publishedAt).toDateString()}
                    </p>
                </div>
                <div>
                    <p className="stats">
                        <span role="img" aria-label="likes">👍</span>
                        {video && Number(video.statistics.likeCount).toLocaleString('en-IN')} Likes
                    </p>
                    <p className="stats">
                        <span role="img" aria-label="dislikes">👎</span>
                        {video && Number(video.statistics.dislikeCount).toLocaleString('en-IN')} Dislikes
                    </p>
                </div>
            </div>
            <div className="channel">
                <p className="channel-title">{video && video.snippet.channelTitle}</p>
                <p className={show ? "description": "chopped-desc"}>{video && video.snippet.description}</p>
                <button onClick={() => setShow(!show)}>{show ? "Show Less" : "Show More"}</button>
            </div>

        </div>
    )
}

export default VideoById
