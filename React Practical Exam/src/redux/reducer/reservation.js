// src/redux/reducer/reservation.js

const initialState = {
  reservations: [],
  loading: false,
  error: null,
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RESERVATIONS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_RESERVATIONS_SUCCESS':
      return { ...state, loading: false, reservations: action.payload };
    case 'FETCH_RESERVATIONS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_RESERVATION':
      return { ...state, reservations: [...state.reservations, action.payload] };
    case 'UPDATE_RESERVATION':
      return {
        ...state,
        reservations: state.reservations.map((r) =>
          r.id === action.payload.id ? action.payload : r
        ),
      };
    case 'DELETE_RESERVATION':
      return {
        ...state,
        reservations: state.reservations.filter((r) => r.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reservationReducer; // ✅ Must be default export
