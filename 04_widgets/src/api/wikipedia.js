import axios from "axios";

export default axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php",
  params: {
    action: "query",
    format: "json",
    list: "search",
    origin: "*",
  },
});
