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
          item
          sx={{
            padding: 0,
          }}
        >
          <iframe
            id="ytplayer"
            type="text/html"
            width={this.props.width}
            height={(this.props.width / 16) * 9}
            title="video"
            src={`https://www.youtube.com/embed/${this.props.video.id}?autoplay=0&origin=http://localhost:3000`}
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
