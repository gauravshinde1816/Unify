import { combineReducers } from "redux";
import application_reducer from "./application_reducers";
export default combineReducers({
  application: application_reducer,
});
