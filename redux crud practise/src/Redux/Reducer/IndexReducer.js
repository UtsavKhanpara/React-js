import { combineReducers } from "redux";
import crudreducer from "./CrudReducer";

const rootReducer = combineReducers({
  crud: crudreducer,
});
export default rootReducer;
