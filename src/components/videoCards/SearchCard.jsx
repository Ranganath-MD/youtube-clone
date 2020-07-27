import React from 'react'
import { Link } from "react-router-dom"
import "../../styles/home.scss"

const SearchCard = ({ results, value }) => {
    return (
        <div>
            <p>Search result for {value} </p>
            {
                results && results.map((item, i) => {
                    const thumbnail = item.snippet.thumbnails.medium.url
                    const title = item.snippet.title
                    const description = item.snippet.description
                    const channelTitle = item.snippet.channelTitle
                    return (
                        <div className="search-card" key={i}>
                            <div className="image">
                                <Link to={`/watch?v=${item.id.videoId}`} >
                                    <img src={thumbnail} alt={title} />
                                </Link>
                            </div>
                            <div className="details">
                                <Link to={`/watch?v=${item.id.videoId}`} className="title">{title}</Link>
                                <p className="channel-title">{channelTitle}</p>
                                <p className="desc">{description}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default SearchCard
