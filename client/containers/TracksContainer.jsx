import React, { Component } from 'react';
import { connect } from 'react-redux';
// TODO: IMPORT SONG CREATOR THAT WILL QUERY FOR SONGS
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  tracksList: state.tracks.tracksList,
  totalSongs: state.tracks.totalSongs,
})

const mapDispatchToProps = dispatch => ({
  addSong: (artist, track) => dispatch(
    actions.addTrackActionCreator(artist.target.attributes.id.value),
    actions.addTrackActionCreator(track.target.attributes.id.value)
  ),
  deleteSong: track => dispatch(actions.deleteTrackActionCreator(track)),
})

class TracksContainer extends Component {
  render() {
    const { addTrack, deleteTrack, trackList, totalTracks } = this.props;

    return (
      <div className={'innerbox'}>
        <h4 id={"test"}>This is the TracksContainer component</h4>
      {/* TODO: ADD SONG COMPONENT HERE */}
      </div>
    );
  }
}

export default TracksContainer;
// export default connect((mapStateToProps, mapDispatchToProps)(TracksContainer));