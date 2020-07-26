import Axios from "axios"

const youtube = Axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`
})

export default youtube