import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // ✅ correct for latest versions
import { composeWithDevTools } from '@redux-devtools/extension';
import roomReducer from './reducer/roomReducer';
import reservationReducer from './reducer/reservation';
import authReducer from './reducer/authReducer';

const rootReducer = combineReducers({
  rooms: roomReducer,
  reservations: reservationReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
