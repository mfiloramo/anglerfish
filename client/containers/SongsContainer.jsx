import React, { Component } from 'react';
import { connect } from 'react-redux';
// IMPORT SONG CREATER THAT WILL QUERY FOR SONGS
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  songsList: state.songs.songsList,
  totalSongs: state.songs.totalSongs,
})

const mapDispatchToProps = dispatch => ({
  addSong: (artist, song) => dispatch(
    actions.addSongActionCreator(artist.target.attributes.id.value),
    actions.addSongActionCreator(song.target.attributes.id.value)
  ),
  deleteSong: (song) => dispatch(actions.deleteSongActionCreator(song)),
})