import * as types from '../constants/actionTypes';

export const addTrackActionCreator = (artist, song) => ({
  type: types.ADD_TRACK,
  payload: { artist, song },
});

export const deleteTrackActionCreator = song => ({
  type: types.DELETE_TRACK,
  payload: song,
})

export const playTrackActionCreator = song => ({
  type: types.PLAY_TRACK,
  payload: song,
})

export const pauseTrackActionCreator = song => ({
  type: types.PAUSE_TRACK,
  payload: song,
})
export const prevTrackActionCreator = song => ({
  type: types.PREV_TRACK,
  payload: song,
})
export const seekTrackActionCreator = song => ({
  type: types.SEEK_TRACK,
  payload: song,
})

// TODO: VERIFY THAT ACTION CREATORS ARE OPERATIONAL