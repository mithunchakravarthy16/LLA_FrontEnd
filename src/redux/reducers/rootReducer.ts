import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import fleetManagementNotificationReducer from "./fleetManagementNotificationReducer";
import assetNotificationReducer from "./getAllAssertNotificationReducer";
import assetActiveInactiveTrackerReducer from "./getActiveInactiveTrackerCountReducer";
import assetIncidentCountReducer from "./getAllIncidentCountReducer";
import assetOverallTrackerDetailsReducer from "./getOverAllTrackerdetailReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  assetNotification: assetNotificationReducer,
  fleetManagementNotification: fleetManagementNotificationReducer,
  assetActiveInactiveTracker: assetActiveInactiveTrackerReducer,
  assetIncidentCount: assetIncidentCountReducer,
  assetOverallTrackerDetails: assetOverallTrackerDetailsReducer,
});

export default rootReducer;
