const initialState = {
  user: null
}

const LOGIN = 'LOGIN';

// competency 43E
export const login = (user) => {
  return {
    type: LOGIN,
    PAYLOAD: user
  };
};

// competency 43D
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
  
    default: return state;
  }
}

export default reducer;