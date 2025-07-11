import { LOGIN_SUCCESS, LOGOUT } from '../types';

export const login = (username) => {
  localStorage.setItem('authUser', username);
  return { type: LOGIN_SUCCESS, payload: username };
};

export const logout = () => {
  localStorage.removeItem('authUser');
  return { type: LOGOUT };
};
