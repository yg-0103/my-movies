import { reducer } from './movies';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies: reducer,
});

export default rootReducer;
