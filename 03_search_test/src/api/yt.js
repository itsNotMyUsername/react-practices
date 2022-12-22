import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyDf26nFuNIHxl9KN6I52MY_e6_Ojbma-AM",
  },
});
