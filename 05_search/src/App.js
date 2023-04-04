import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api/api";
import ImageList from "./components/ImageList";

function App() {
  const [imageList, setImageList] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImageList(result);
  };

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <ImageList images={imageList} />
    </div>
  );
}

export default App;
