import React, { Component } from 'react';
import { connect } from 'react-redux';
import TracksContainer from "./TracksContainer";

const mapStateToProps = state => ({
  // TODO: MAP STATE TO PROPS HERE.
  totalTracks: state.tracks.totalTracks,
  tracksList: state.tracks.tracksList,
});

class MainContainer extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'outerBox'}>
          <h3 id={'header'}>
            AnglerFish Music Player
          </h3>
          <TracksContainer />
          {/* TODO: PLACE TRACKS CONTAINER COMPONENT HERE// */}
          {/* TODO: PLACE PLAYBACK CONTROL COMPONENT HERE// */}
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, null)(MainContainer);
export default MainContainer;