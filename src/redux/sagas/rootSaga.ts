import { all, takeLatest } from "redux-saga/effects";
import { handleLogin, handleLogout } from "./handlers/login";
import login from "../actions/loginActions";
import assetNotification from "redux/actions/getAllAssertNotificationAction";
import fleetManagementNotification from "redux/actions/fleetManagementNotificationActions";
import { handleAssetNotification } from "./handlers/getAllAssertNotification";
import assetActiveInactiveTracker from "redux/actions/getActiveInactiveTrackerCount";
import { handleActiveInactiveTracker } from "./handlers/getActiveInactiveTrackerCount";
import assetIncidentCount from "redux/actions/getAllIncidentCount";
import { handleAssetIncidentCount } from "./handlers/getAllIncidentCount";
import assetOverallTrackerDetail from "redux/actions/getOverAllTrackerdetail";
import { handleAssetOverallTrackerDetails } from "./handlers/getOverAllTrackerdetail";
import { handleFleetManagementNotification } from "./handlers/fleetManagementNotification";
import adminPanelConfig from "redux/actions/adminPanel";
import { handleAdminPanelConfig } from "./handlers/adminPanel";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchAssetNotification(),
    watchFleetManagementNotification(),
    watchAssetActiveInactiveTracker(),
    watchAssetIncidentCount(),
    watchAssetOverallTrackerDetails(),
    watchAdminPanelConfig(),
  ]);
}

export function* watchLogin() {
  yield takeLatest(login.GET_USER_LOGIN, handleLogin);
}

export function* watchAssetNotification() {
  yield takeLatest(
    assetNotification.GET_ASSET_NOTIFICATION,
    handleAssetNotification
  );
}

export function* watchFleetManagementNotification() {
  yield takeLatest(
    fleetManagementNotification.GET_FLEET_MANAGEMENT_NOTIFICATION,
    handleFleetManagementNotification
  );
}
export function* watchAssetActiveInactiveTracker() {
  yield takeLatest(
    assetActiveInactiveTracker.GET_ACTIVE_INACTIVE_TRACKER,
    handleActiveInactiveTracker
  );
}

export function* watchAssetIncidentCount() {
  yield takeLatest(
    assetIncidentCount.GET_ASSET_INCIDENT_COUNT,
    handleAssetIncidentCount
  );
}

export function* watchAssetOverallTrackerDetails() {
  yield takeLatest(
    assetOverallTrackerDetail.GET_OVERALL_TRACKER_DETAIL,
    handleAssetOverallTrackerDetails
  );
}

export function* watchAdminPanelConfig() {
  yield takeLatest(
    adminPanelConfig.GET_ADMIN_PANEL_CONFIG,
    handleAdminPanelConfig
  );
}
