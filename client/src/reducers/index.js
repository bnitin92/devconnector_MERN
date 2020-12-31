import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

// this file is just for combining reducers
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
