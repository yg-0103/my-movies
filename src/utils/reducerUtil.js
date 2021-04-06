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
