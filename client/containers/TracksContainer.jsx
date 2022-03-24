import React, { Component } from 'react';
// TODO: IMPORT SONG CREATOR THAT WILL QUERY FOR SONGS

let key = 0;

class TracksContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    }

    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);

  }
  addSong = () => {
    const newState = [...this.state.songs];
    newState.push(
      <tr key={key++}>this is an added song!</tr>
    );
    this.setState({ songs: newState });
    console.log(key)
  };

  deleteSong = () => {
    const newState = [...this.state.songs];
    newState.pop();
    this.setState({ songs: newState });
  };

  render() {
    return (
      <div className={'innerBox'}>
        <button
          type={'button'}
          onClick={this.addSong}>
          Add song
        </button>
        <button
          type={'button'}
          onClick={this.deleteSong}>
          Delete song
        </button>
        <h4 id={"test"}>This is the TracksContainer component, and these are the songs: { this.state.songs }</h4>
      </div>
    );
  }
}

export default TracksContainer;
