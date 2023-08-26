import { combineReducers } from "redux";
import { activityReducer } from "./activityReducers";
import { toDoReducer } from "./toDoReducer";

export default combineReducers({
  a: activityReducer,
  b: toDoReducer,
});
