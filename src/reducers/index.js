import { combineReducers } from "redux";

import authReducer from "./userReducer";
import companiesReducer from "./companiesReducer";
export default combineReducers({
  auth: authReducer,
  companies: companiesReducer,
});
