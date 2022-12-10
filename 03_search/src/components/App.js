import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const resp = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: resp.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} of images.
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
