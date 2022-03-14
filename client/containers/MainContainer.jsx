import React, { Component } from 'react';
import { connect } from 'react-redux';
import TracksContainer from "./TracksContainer";

const mapStateToProps = state => ({
  // MAP STATE TO PROPS HERE. WHAT ARE THE MAIN CONTAINER'S PROPS?
});

class MainContainer extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'outerbox'}>
          <h1 id={'header'}>
            AnglerFish Music Player
          </h1>
          <TracksContainer />
          {/* ADD PLAYBACKCONTROLS COMPONENT HERE */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(MainContainer);