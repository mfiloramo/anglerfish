import { combineReducers } from 'redux';

// IMPORT ALL REDUCERS HERE
import songsReducer from './songsReducer';

// COMBINE REDUCERS
const reducers = combineReducers({
  songs: songsReducer,
});

export default reducers;