import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import assetNotificationReducer from "./assetNotificationReducer";
import fleetManagementNotificationReducer from "./fleetManagementNotificationReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  assetNotification: assetNotificationReducer,
  fleetManagementNotification: fleetManagementNotificationReducer,
});

export default rootReducer;
