
export const videoReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_HOME_VIDEOS":
            return { ...action.payload }
        default:
            return state
    }
}

export const selectedVideoReducer = (state = {}, action) =>{
    switch (action.type) {
        case "GET_SELECTED_VIDEO":
            return { ...action.payload }
        default:
            return state
    }
}

export const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_SEARCH_RESULTS":
            return { ...action.payload }
        default:
            return state
    }
}
