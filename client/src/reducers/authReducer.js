const initialState = {
  // initial state for the reducer in the chrome extension
  isAuthenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
