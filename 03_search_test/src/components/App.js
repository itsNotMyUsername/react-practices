import "./App.css";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import SearchBar from "./SearchBar/SearchBar";
import VideoDetail from "./VideoDetail/VideoDetail";
import VideoList from "./VideoList/VideoList";
import yt from "../api/yt";

import Container from "@mui/material/Container";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videosList: [],
      currentVideo: {
        id: "",
        title: "",
        description: "",
      },
      listVideosWidth: 0,
      videoWidth: 0,
    };
    this.videosListRef = React.createRef();
    this.currentVideoRef = React.createRef();
  }

  onSearchSubmit = async (term) => {
    const resp = await yt.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
      },
    });

    const results = resp.data.items.filter((item) => {
      return item.id.videoId ? true : false;
    });
    const currentVideo = {
      id: results[0].id.videoId,
      title: results[0].snippet.title,
      description: results[0].snippet.description,
    };
    this.setState({
      currentVideo,
      videosList: results.slice(1, results.length),
    });
  };

  onListVideosMounted = () => {
    const el = this.videosListRef.current;
    if (!el) return;

    const listVideosWidth = this.getElementWidth(el);
    this.setState({ listVideosWidth });
  };

  onVideoMounted = () => {
    const el = this.currentVideoRef.current;
    if (!el) return;

    const videoWidth = this.getElementWidth(el) - 24;
    this.setState({ videoWidth });
  };

  getElementWidth = (el, prop) => {
    const styles = window.getComputedStyle(el, null);
    const plPx = styles.getPropertyValue("padding-left");
    const pl = plPx.substring(0, plPx.length - 2);
    const prPx = styles.getPropertyValue("padding-right");
    const pr = prPx.substring(0, prPx.length - 2);
    return el.clientWidth - pl - pr;
  };

  onListVideosClick = (videoId) => {
    console.log(videoId);
  };

  render() {
    return (
      <Container maxWidth="md" className="container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.state.videosList.length > 0 && (
          <Grid container direction="row" columns={2} spacing={2}>
            <Grid ref={this.currentVideoRef} container item xs={8}>
              <VideoDetail
                onVideoMounted={this.onVideoMounted}
                width={this.state.videoWidth}
                video={this.state.currentVideo}
              />
            </Grid>
            <Grid ref={this.videosListRef} container item xs={4}>
              <VideoList
                width={this.state.listVideosWidth}
                onListVideosMounted={this.onListVideosMounted}
                videos={this.state.videosList}
                onListVideosClick={this.onListVideosClick}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    );
  }
}

export default App;
