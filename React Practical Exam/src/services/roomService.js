// services/roomService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/rooms';

export const getAllRooms = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const getRoomById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const addRoom = async (data) => {
  const response = await axios.post(BASE_URL, data);
  return response.data;
};

export const updateRoom = async (id, data) => {
  const response = await axios.put(`${BASE_URL}/${id}`, data);
  return response.data;
};

export const deleteRoom = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
