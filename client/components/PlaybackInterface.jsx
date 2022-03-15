// TODO: BUILD PLAYBACK INTERFACE COMPONENT AS CHILD OF MAINCONTAINER
import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = state => {
  // ADD CODE HERE
}

const mapDispatchToProps = dispatch => ({
  playTrack: () => dispatch(
    actions.playTrackActionCreator() // WE DON'T NEED A PARAM TO CARRY A PAYLOAD BECAUSE IT DOESN'T REQUIRE ONE
  ),
  pauseTrack: () => dispatch(
    actions.pauseTrackActionCreator()
  ),
  prevTrack: () => dispatch(
    actions.prevTrackActionCreator()
  ),
  seekTrack: () => dispatch(
    actions.seekTrackActionCreator()
  ),
});

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