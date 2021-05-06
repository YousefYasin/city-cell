import { combineReducers } from "redux";

import authReducer from "./userReducer";
import companiesReducer from "./companiesReducer";
import errorReducer from './errorReducer'
export default combineReducers({
  auth: authReducer,
  companies: companiesReducer,
  error: errorReducer,
});
