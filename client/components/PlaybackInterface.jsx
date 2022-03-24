// TODO: BUILD PLAYBACK INTERFACE COMPONENT AS CHILD OF MAINCONTAINER
import React, { Component } from "react";

class PlaybackInterface extends Component {
  render() {
    const { trackList } = this.props;

    return (
      <div id={'playInterface'}>
        <h5>This is the Playback Interface component</h5>
      </div>
    )
  }
}

export default PlaybackInterface;