import { combineReducers } from "redux";
import Cartreducer from "./Cartreducer";


const rootreducer=combineReducers({
    cart:Cartreducer
})
export default rootreducer;