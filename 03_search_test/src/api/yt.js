import axios from "axios";

export default axios.create({
  baseURL: "https://yt.lemnoslife.com/noKey",
  params: {
    part: "id,snippet",
    maxResults: 2,
    type: "video",
  },
});
