// src/redux/reducer/authReducer.js

import { LOGIN_SUCCESS, LOGOUT } from '../types';

const initialState = {
  user: localStorage.getItem('authUser') || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
