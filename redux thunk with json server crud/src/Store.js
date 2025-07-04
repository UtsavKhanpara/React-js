import { applyMiddleware, createStore } from "redux";
import rootreducer from "./Redux/Reducer/IndexReducer";
import { thunk } from "redux-thunk";

const store = createStore(rootreducer, applyMiddleware(thunk));
export default store;
