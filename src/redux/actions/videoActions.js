export const getHomePageVideos = (video) => ({
    type: "GET_HOME_VIDEOS",
    payload: video
})

export const getSelectedVideo = (video) => ({
    type: "GET_SELECTED_VIDEO",
    payload: video
})

export const getSearchResults = (video) => ({
    type: "GET_SEARCH_RESULTS",
    payload: video
})
