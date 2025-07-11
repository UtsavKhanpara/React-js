import axios from 'axios';
import {
  FETCH_RESERVATIONS,
  ADD_RESERVATION,
  UPDATE_RESERVATION,
  DELETE_RESERVATION
} from '../types';

// ✅ Fetch all reservations
export const fetchReservations = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/reservations');
    dispatch({ type: FETCH_RESERVATIONS, payload: res.data });
  } catch (error) {
    console.error('Error fetching reservations:', error);
  }
};

// ✅ Add a new reservation
export const addReservation = (data) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/reservations', data);
    dispatch({ type: ADD_RESERVATION, payload: res.data });
  } catch (error) {
    console.error('Error adding reservation:', error);
  }
};

// ✅ Update a reservation (PUT replaces full data)
export const updateReservation = (id, updatedData) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/reservations/${id}`, updatedData);
    dispatch({ type: UPDATE_RESERVATION, payload: res.data });
  } catch (error) {
    console.error('Error updating reservation:', error);
  }
};

// ✅ Delete a reservation
export const deleteReservation = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/reservations/${id}`);
    dispatch({ type: DELETE_RESERVATION, payload: id });
  } catch (error) {
    console.error('Error deleting reservation:', error);
  }
};
