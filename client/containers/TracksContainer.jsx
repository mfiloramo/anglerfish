import React, { Component, useState } from 'react';
// TODO: IMPORT SONG CREATOR THAT WILL QUERY FOR SONGS

// USE AND INCREMENT A NUMBER TO ASSIGN UNIQUE KEY IDS TO COMPONENTS
let key = 0;

class TracksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] }

    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  };

  addSong = e => {
    if (e.keyCode === 13) {
      const newState = this.state.songs;
      newState.push(
        <div key={key++}>This is a new song. It is by {e.target.value}</div>,
        // <br />
    );
      this.setState({ songs: newState });
      console.log('Song added!');
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

        <button type={'button'} onClick={this.deleteSong}>Delete Song</button>
          <br />
        <label htmlFor={'artist'}>Artist: </label>
        <input id={'a'} type={'text'} name={'artist'} onKeyDown={this.addSong} />
          <br />
        <label htmlFor={'song'}>Song: </label>
        <input id={'a'} type={'text'} name={'song'} onKeyDown={this.addSong} />

        <div>
          {this.state.songs}
        </div>

      </div>

      // {/*// <table className={'innerBox'}>*/}
      // {/*//   <tbody>*/}
      // {/*//   <tr>*/}
      // {/*//     <td>*/}
      // {/*//       <button type={'button'} onClick={this.deleteSong}>Delete Song</button>*/}
      // {/*//         <br />*/}
      // {/*//       <label htmlFor={'artist'}>Artist: </label>*/}
      // {/*//       <input id={'a'} type={'text'} name={'artist'} onKeyDown={this.addSong} />*/}
      // {/*//         <br />*/}
      // {/*//       <label htmlFor={'song'}>Song: </label>*/}
      // {/*//       <input id={'a'} type={'text'} name={'song'} onKeyDown={this.addSong} />*/}
      // {/*//     </td>*/}
      // {/*//     <td>*/}
      // {/*//       {this.state.songs}*/}
      // {/*//     </td>*/}
      // {/*//*/}
      // {/*//   </tr>*/}
      // {/*//   </tbody>*/}
      // {/*// </table>*/}
    );
  }
}

export default TracksContainer;
