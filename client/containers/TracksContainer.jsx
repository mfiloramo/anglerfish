import React, { Component } from 'react';
// TODO: IMPORT SONG CREATOR THAT WILL QUERY FOR SONGS

class TracksContainer extends Component {
  render() {
    const { addTrack, deleteTrack, trackList, totalTracks } = this.props;

    return (
      <div className={'innerBox'}>
        <h4 id={"test"}>This is the TracksContainer component</h4>
      </div>
    );
  }
}

export default TracksContainer;
