import "./VideoList.css";
import React from "react";

class VideoList extends React.Component {
  componentDidMount() {
    this.props.onListVideosMounted();
  }

  handleOnClick = (e) => {
    this.props.onListVideosClick(e.target.getAttribute("data-key"));
  };

  render() {
    // console.log({ videos: this.props.videos });
    return (
      <div>
        {this.props.videos.map((v) => (
          <img
            onClick={this.handleOnClick}
            key={v.id.videoId}
            data-key={v.id.videoId}
            style={{
              width: this.props.width,
            }}
            src={v.snippet.thumbnails.medium.url}
            alt={v.snippet.description}
            title={v.snippet.title}
          />
        ))}
      </div>
    );
  }
}

export default VideoList;
