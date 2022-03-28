import React, { Component } from 'react';
import TracksContainer from "./TracksContainer";
import PlaybackInterface from "../components/PlaybackInterface";

class MainContainer extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'outerBox'}>
          <h3 id={'header'}>
            AnglerFish Music Player
          </h3>
          <TracksContainer />
          <div className={'pbinterface'}>
            <PlaybackInterface />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;