import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: term,
    },
    headers: {
      Authorization: "Client-ID jkdCQoJLfpAZnH89X02gBxb4_me2mPotYZKU6xRXGTw",
    },
  });
  return response.data.results;
};

export default searchImages;
