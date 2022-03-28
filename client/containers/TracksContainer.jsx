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

      fetch('/api/', {
        method: 'POST',
      })
        .then(res => res.text())
        .then(res => console.log(res))
          // newState.push(
          //   <iframe className={'song'} key={key++} width="200" height="200" src={res.locals.video}>TESTING</iframe>
          // )
          // return this.setState({ songs: newState });
        // })
        .catch(err => console.log(`Error with fetchVideo client request: ${err}`))
      }
  };

  // addSong = e => {
  //   if (e.keyCode === 13) {
  //     console.log('Song Added')
  //     const newState = this.state.songs;
  //     newState.push(
  //       <div className={'song'} key={key++}>This is a new song. It is by {e.target.value}</div>,
  //     );
  //     this.setState({ songs: newState });
  //     console.log('Song Added')
  //   }
  // };

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
