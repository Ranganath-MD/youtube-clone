import React, { useEffect, useCallback } from 'react'
import Layout from '../layouts/Layout'
import Seo from '../layouts/Seo'
import { useParams } from "react-router-dom"
import youtube from "../../utils/axios-config"
import { getSearchResults } from '../../redux/actions/videoActions'
import { connect } from "react-redux"
import SearchCard from "../videoCards/SearchCard"

const SearchResult = (props) => {
    const { key } = props.app
    const params = useParams()
    const results = props.results

    const getResults = useCallback(() => {
        youtube.get("/search", {
            params: {
                maxResults: 25,
                part: "snippet",
                q: params.value,
                key: key
            }
        })
            .then(response => {
                props.setResults(response.data)
            })
            .catch(err => {
                window.alert("something went wrong while fetching the data")
            })
    }, [params.value, key])

    useEffect(() => {
        getResults()
    }, [getResults])

    return (
        <Layout>
            <Seo title="search results" description={`search results for ${params.value}`} />
            <SearchCard results={results} value={params.value}/>
        </Layout>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setResults: (response) => dispatch(getSearchResults(response)),
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        results: state.searchResults.items
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
