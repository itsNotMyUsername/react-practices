import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID FG4VH8QgW_LMOOsFhhQBQs7r24WN4xGDvFCkKBiu4j0",
  },
});
