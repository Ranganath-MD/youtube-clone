const initialState = {
    app: "ReTube",
    description: "Youtube clone using React",
    techstack: ["react", "redux", "sass", "axios"],
    defaultChannelId: "UCW5YeuERMmlnqo4oq8vwUpg",
    key: "AIzaSyCOW-2WzSf7l94gswQgrI9Xr8NZPReiN8g",
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

