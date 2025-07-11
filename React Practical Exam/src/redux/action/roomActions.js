import axios from 'axios';
import {
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
} from '../types';

export const fetchRooms = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ROOMS_REQUEST });
    try {
      const response = await axios.get('http://localhost:5000/rooms');
      dispatch({ type: FETCH_ROOMS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_ROOMS_FAILURE, payload: error.message });
    }
  };
};
