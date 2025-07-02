import { combineReducers } from "redux";
import ToDoReducer from "./ToDoReducer";

const rootReducer = combineReducers({
    ToDo:ToDoReducer
});
export default rootReducer;