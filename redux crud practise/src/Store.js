import { createStore } from "redux";
import rootReducer from "./Redux/Reducer/IndexReducer";

const store = createStore(rootReducer);
export default store;
