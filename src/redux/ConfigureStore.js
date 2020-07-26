import { createStore, combineReducers } from "redux"
import { appReducer } from "./reducers/AppReducer"
import { videoReducer, selectedVideoReducer, searchReducer } from "./reducers/videoReducer"

const configureStore = () => {
    const store = createStore(combineReducers({
        app: appReducer,
        homevideos: videoReducer,
        selectedVideo: selectedVideoReducer,
        searchResults: searchReducer
    }))
    return store
}

export default configureStore
