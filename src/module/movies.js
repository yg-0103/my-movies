import {
  createThunkAcition,
  reducerUtil,
  createMovieReducer,
} from '../utils/reducerUtil';

const GET_MOVIES = 'movies/GET_MOVIES';
const GET_MOVIES_SUCCESS = 'movies/GET_MOVIES_SUCCESS';
const GET_MOVIES_ERROR = 'movies/GET_MOVIES_ERROR';

const GET_MOVIE = 'movies/GET_MOVIE';
const GET_MOVIE_SUCCESS = 'movies/GET_MOVIE_SUCCESS';
const GET_MOVIE_ERROR = 'movies/GET_MOVIE_ERROR';

// export const getMoives = () => ({ type: GET_MOVIES });
// export const getMoviesSuccess = data => ({
//   type: GET_MOVIES_SUCCESS,
//   payload: data,
// });
// export const getMoviesError = e => ({ type: GET_MOVIES_ERROR, payload: e });

// export const getMovie = () => ({ type: GET_MOVIE });
// export const getMovieSuccess = data => ({
//   type: GET_MOVIE_SUCCESS,
//   payload: data,
// });
//export const getMovieError = e => ({ type: GET_MOVIE_ERROR, payload: e });

export const getMoviesActionThunk = createThunkAcition(GET_MOVIES);
export const getMovieActionThunk = createThunkAcition(GET_MOVIE);

const initialState = {
  movies: reducerUtil.initial(),
  movie: reducerUtil.initial(),
};

const movieReducer = createMovieReducer(GET_MOVIE, 'movie');
const moviesReducer = createMovieReducer(GET_MOVIES, 'movies');

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
    case GET_MOVIES_SUCCESS:
    case GET_MOVIES_ERROR:
      return moviesReducer(state, action);
    case GET_MOVIE:
    case GET_MOVIE_SUCCESS:
    case GET_MOVIE_ERROR:
      return movieReducer(state, action);
    default:
      return state;
  }
};
