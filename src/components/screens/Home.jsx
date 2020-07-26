import React, {  useEffect } from 'react'
import Layout from '../layouts/Layout'
import Seo from '../layouts/Seo'
import youtube from "../../utils/axios-config"
import { connect } from "react-redux"
import { getHomePageVideos, getSelectedVideo } from "../../redux/actions/videoActions"
import PopularVideo from '../videoCards/PopularVideo'
import "../../styles/home.scss"

const Home = (props) => {
    const { key } = props.params

    useEffect(() => {
        youtube.get("/videos", {
            params: {
                videoCategoryId: 26,
                regionCode: "IN",
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
                console.log(err)
            })
    }, [])

    return (
        <Layout>
            <Seo title="ReTube" description="Youtube clone using react" />
            <div className="home_row">
                {
                    props.videos && props.videos.map((item, i) => {
                        return (
                            <PopularVideo key={i} video={item}/>
                        )
                    })
                }
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
        videos: state.homevideos.items
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
