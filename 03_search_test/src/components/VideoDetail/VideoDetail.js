import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

class VideoDetail extends React.Component {
  componentDidMount() {
    this.props.onVideoMounted();
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justifyContent="start"
        alignItems="center"
      >
        <Grid
          key={this.props.video.id}
          item
          sx={{
            padding: 0,
          }}
        >
          <iframe
            width={this.props.width}
            height={(this.props.width / 16) * 9}
            title={this.props.video.title}
            src={`https://www.youtube.com/embed/${this.props.video.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid item>
          <div>{this.props.video.title}</div>
          <div>{this.props.video.description}</div>
        </Grid>
      </Grid>
    );
  }
}

export default VideoDetail;
