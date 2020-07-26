import React from 'react'
import { Link } from "react-router-dom"
import "../../styles/home.scss"

const PopularVideo = ({ video, handleselect }) => {
    const thumbnail = video.snippet.thumbnails.medium.url
    const { title, channelTitle } = video.snippet

    return (
        <div className="card">
            <Link to={`/watch?v=${video.id}`} >
                <img src={thumbnail} alt={title} />
            </Link>
            <p className="title">{title}</p>
            <p className="channel-name">{channelTitle}</p>
        </div>
    )
}

export default PopularVideo
