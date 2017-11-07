import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  userDetails: userReducer
});

export default rootReducer;
