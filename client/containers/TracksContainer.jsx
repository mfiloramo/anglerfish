import React, { Component } from 'react';

// USE AND INCREMENT A NUMBER TO ASSIGN UNIQUE KEY IDS TO COMPONENTS
let key = 0;

class TracksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    }

    this.fetchVideo = this.fetchVideo.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  };

  fetchVideo = (song) => {
    if (song.keyCode === 13) {
      let video;
      const newState = this.state.songs;
      console.log(JSON.stringify(song.target.value));

      fetch('/api', {
        method: 'POST',
        body: JSON.stringify({'video': song.target.value }),
        headers: {
          "Content-Type": "Application/JSON",
        },
      })
        .then(res => res.text())
        .then(res => {
          newState.push(
            <iframe className='song' key={key++} width="200" height="200" src={res} />
          )
          return this.setState({songs: newState})
        })

        .catch(err => console.log(`Error with fetchVideo client request: ${err}`))
      }
  };

  deleteSong = () => {
      const newState = this.state.songs;
      newState.pop();
      this.setState({ songs: newState });
      console.log('Song deleted!');
  };

  render() {
    return (
      <div className={'innerBox'}>
        <button className={'button'} type={'button'} onClick={this.deleteSong}>Delete Song</button>
          <br />
        <label htmlFor={'artist'}>Artist: </label>
        <input className={'input'} type={'text'} name={'input'} onKeyDown={this.fetchVideo} />
          <br />
        <label htmlFor={'song'}>Song: </label>
        <input className={'input'} type={'text'} name={'song'} onKeyDown={this.fetchVideo} />
        <div>
          {this.state.songs}
        </div>
      </div>
    );
  }
}

export default TracksContainer;
