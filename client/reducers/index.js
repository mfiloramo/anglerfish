import { combineReducers } from 'redux';

// IMPORT ALL REDUCERS HERE
import tracksReducer from './songsReducer';

// COMBINE REDUCERS
const reducers = combineReducers({
  tracks: tracksReducer,
});

export default reducers;