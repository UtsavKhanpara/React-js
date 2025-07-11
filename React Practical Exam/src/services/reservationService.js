// services/reservationService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/reservations';

export const getAllReservations = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const getReservationById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const createReservation = async (data) => {
  const response = await axios.post(BASE_URL, data);
  return response.data;
};

export const updateReservation = async (id, data) => {
  const response = await axios.put(`${BASE_URL}/${id}`, data);
  return response.data;
};

export const deleteReservation = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
