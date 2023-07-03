import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import assetNotificationReducer from "./assetNotificationReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  assetNotification: assetNotificationReducer,
});

export default rootReducer;
