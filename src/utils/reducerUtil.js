import axios from 'axios';

export const reducerUtil = {
  initial() {
    return {
      loading: false,
      data: null,
      error: null,
    };
  },

  loading(data = null) {
    return {
      loading: true,
      data,
      error: null,
    };
  },

  success(data) {
    return {
      loading: false,
      data,
      error: null,
    };
  },
  error(e) {
    return {
      loading: false,
      data: null,
      error: e,
    };
  },
};

export const createThunkAcition = type => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return api => async dispatch => {
    dispatch({ type });
    try {
      const movies = await axios.get(api);
      dispatch({ type: SUCCESS, payload: movies.data });
    } catch (e) {
      dispatch({ type: ERROR, payload: e });
    }
  };
};

export const createMovieReducer = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtil.loading(),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtil.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtil.error(action.payload),
        };
      default:
        return state;
    }
  };
};
