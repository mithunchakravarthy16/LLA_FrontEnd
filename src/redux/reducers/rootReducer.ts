import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import fleetManagementNotificationReducer from "./fleetManagementNotificationReducer";
import assetNotificationReducer from "./getAllAssertNotificationReducer";
import assetActiveInactiveTrackerReducer from "./getActiveInactiveTrackerCountReducer";
import assetIncidentCountReducer from "./getAllIncidentCountReducer";
import assetOverallTrackerDetailsReducer from "./getOverAllTrackerdetailReducer";
import adminPanelReducer from "./adminPanelReducer";
import adminLoginReducer from "./adminLoginReducer";
import assetTrackerDetailReducer from "./getAssetTrackerDetailReducer";
import createGeofenceReducer from "./createGeofenceReducer";
import updateGeofenceReducer from "./updateGeofenceReducer";
import enableGeofenceReducer from "./enableGeofenceReducer";
import assetTrackingActiveInActiveAnalyticsReducer from "./assetTrackingActiveInActiveAnalyticsReducer";
import assetTableReducer from "./assetTableReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  assetNotification: assetNotificationReducer,
  fleetManagementNotification: fleetManagementNotificationReducer,
  assetActiveInactiveTracker: assetActiveInactiveTrackerReducer,
  assetIncidentCount: assetIncidentCountReducer,
  assetOverallTrackerDetails: assetOverallTrackerDetailsReducer,
  adminPanel: adminPanelReducer,
  adminLogin: adminLoginReducer,
  assetTracker:assetTrackerDetailReducer,
  createGeofence : createGeofenceReducer,
  updateGeofence: updateGeofenceReducer,
  enableGeofence : enableGeofenceReducer,
  assetTrackingActiveInActiveAnalytics: assetTrackingActiveInActiveAnalyticsReducer,
  assetTable : assetTableReducer
});

export default rootReducer;
