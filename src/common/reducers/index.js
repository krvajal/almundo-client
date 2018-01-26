import { combineReducers } from "redux";
import filters from "./filters";
import hotels from "./hotels";
const rootReducer = combineReducers({ filters, hotels });

export default rootReducer;
