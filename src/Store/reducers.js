import { combineReducers } from "redux";
import data from "./State/reducer";

const rootReducer = combineReducers({
  data,
});

export default rootReducer;
