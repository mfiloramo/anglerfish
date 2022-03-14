import { combineReducers } from 'redux';
import '../stylesheets/styles.css'

// IMPORT ALL REDUCERS HERE
import tracksReducer from './songsReducer';

// COMBINE REDUCERS
const reducers = combineReducers({
  tracks: tracksReducer,
});


export default reducers;