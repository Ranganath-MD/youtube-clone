const initialState = {
    app: "ReTube",
    description: "Youtube clone using React",
    techstack: ["react", "redux", "sass", "axios"],
    key: process.env.REACT_APP_YOUTUBE_KEY,
    part: "snippet",
}

export const appReducer = (state = initialState, action) => {
    switch (action) {
        case "GET_APP_DETAILS":
            return state
        default:
            return state
    }
}

