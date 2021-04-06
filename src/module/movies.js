import axios from 'axios';
import { reducerUtil } from '../utils/reducerUtil';

const GET_MOVIES = 'movies/GET_MOVIES';
const GET_MOVIES_SUCCESS = 'movies/GET_MOVIES_SUCCESS';
const GET_MOVIES_ERROR = 'movies/GET_MOVIES_ERROR';

export const getMoives = () => ({ type: GET_MOVIES });
export const getMoviesSuccess = data => ({
  type: GET_MOVIES_SUCCESS,
  payload: data,
});
export const getMoviesError = e => ({ type: GET_MOVIES_ERROR, payload: e });

export const getMoviesActionThunk = api => async dispatch => {
  dispatch(getMoives());
  try {
    const movies = await axios.get(api);
    dispatch(getMoviesSuccess(movies.data));
  } catch (e) {
    dispatch(getMoviesError(e));
  }
};
const initialState = reducerUtil.initial();

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return reducerUtil.loading();
    case GET_MOVIES_SUCCESS:
      return reducerUtil.success(action.payload);
    case GET_MOVIES_ERROR:
      return reducerUtil.error(action.payload);
    default:
      return state;
  }
};
