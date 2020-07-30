import React, { useEffect } from 'react'
import Layout from '../layouts/Layout'
import Seo from '../layouts/Seo'
import youtube from "../../utils/axios-config"
import { connect } from "react-redux"
import { getHomePageVideos, getSelectedVideo } from "../../redux/actions/videoActions"
import PopularVideo from '../videoCards/PopularVideo'
import VideoById from "../videoCards/VideoById"
import "../../styles/videoshow.scss"

const WatchVideo = (props) => {
    const { key } = props.params
    const { id } = props
    // destructuring of selected video
    const video = props.selectedVideo && props.selectedVideo[0]
    const title = video && video.snippet.title
    const description = video && video.snippet.description

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // getting video by id
        youtube.get("/videos", {
            params: {
                id: id,
                key: key,
                part: "snippet,contentDetails,statistics" // snippet
            }
        })
            .then(response => {
                props.getVideoById(response.data)
            })
            .catch(err => {
                window.alert("something went wrong while fetching the data")
            })

    }, [props.id, key])

    useEffect(() => {
        // getting dummy suggestions
        youtube.get("/videos", {
            params: {
                videoCategoryId: 17,
                chart: "mostPopular",
                maxResults: 50,
                key: key, // google youtube api key
                part: "snippet,contentDetails,statistics" // snippet
            }
        })
            .then(response => {
                props.getVideos(response.data)

            })
            .catch(err => {
                window.alert("something went wrong while fetching the data")
            })
    }, [props.id, key])

    return (
        <Layout>
            <Seo title={title} description={description} />
            <div className="container-show">
                <div className="main-video">
                    <VideoById video={video} />
                </div>
                <div className="video-list">
                    {
                        props.videos && props.videos.map((item, i) => {
                            return (
                                <PopularVideo key={i} video={item} />
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVideos: (response) => dispatch(getHomePageVideos(response)),
        getVideoById: (response) => dispatch(getSelectedVideo(response))
    }
}

const mapStateToProps = (state) => {
    return {
        params: state.app,
        videos: state.homevideos.items,
        selectedVideo: state.selectedVideo.items
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchVideo)
