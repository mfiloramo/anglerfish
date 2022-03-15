import { combineReducers } from 'redux';
import '../stylesheets/styles.css'

// IMPORT ALL REDUCERS HERE
import tracksReducer from './songsReducer';
import playReducer from './playReducer';

// COMBINE REDUCERS
const reducers = combineReducers({
  tracks: tracksReducer,
  playStatus: playReducer,
});


export default reducers;