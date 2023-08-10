import { all, takeLatest } from "redux-saga/effects";
import { handleLogin, handleLogout } from "./handlers/login";
import { handleAdminLogin, handleAdminLogout } from "./handlers/adminLogin";
import login from "../actions/loginActions";
import adminLogin from "../actions/adminLoginActions";
import assetNotification from "redux/actions/getAllAssertNotificationAction";
import fleetManagementNotification from "redux/actions/fleetManagementNotificationActions";
import { handleAssetNotification } from "./handlers/getAllAssertNotification";
import assetActiveInactiveTracker from "redux/actions/getActiveInactiveTrackerCount";
import { handleActiveInactiveTracker } from "./handlers/getActiveInactiveTrackerCount";
import assetIncidentCount from "redux/actions/getAllIncidentCount";
import { handleAssetIncidentCount } from "./handlers/getAllIncidentCount";
import assetOverallTrackerDetail from "redux/actions/getOverAllTrackerdetail";
import { handleAssetOverallTrackerDetails } from "./handlers/getOverAllTrackerdetail";
import {
  handleFleetManagementNotification,
  handleFleetManagementTripDetails,
  handleFleetManagementOverAllTripDetails,
  handleFleetManagementAnalyticsData,
} from "./handlers/fleetManagementNotification";
import adminPanelConfig from "redux/actions/adminPanel";
import {
  handleAdminPanelConfig,
  handleGetAdminPanelConfig,
  handleCancelAdminPanelConfig,
} from "./handlers/adminPanel";
import assetTrackerDetail from "redux/actions/getAssetTrackerDetailAction";
import {handleAssetTrackerDetail} from "./handlers/getAssetTrackerDetail"

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchAdminLogin(),
    watchAssetNotification(),
    watchFleetManagementNotification(),
    watchAssetActiveInactiveTracker(),
    watchAssetIncidentCount(),
    watchAssetOverallTrackerDetails(),
    watchAdminPanelConfig(),
    watchGetAdminPanelConfig(),
    watchCancelAdminPanelConfig(),
    watchFleetManagementTripDetails(),
    watchFleetManagementOverAllTripDetails(),
    watchFleetManagementAnalyticsData(),
    watchAssetTrackerDetail()
  ]);
}

export function* watchLogin() {
  yield takeLatest(login.GET_USER_LOGIN, handleLogin);
}

export function* watchAdminLogin() {
  yield takeLatest(adminLogin.GET_ADMIN_USER_LOGIN, handleAdminLogin);
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
    adminPanelConfig.GET_ADMIN_PANEL_SAVE_CONFIG,
    handleAdminPanelConfig
  );
}

export function* watchGetAdminPanelConfig() {
  yield takeLatest(
    adminPanelConfig.GET_ADMIN_PANEL_CONFIG,
    handleGetAdminPanelConfig
  );
}

export function* watchCancelAdminPanelConfig() {
  yield takeLatest(
    adminPanelConfig.GET_ADMIN_PANEL_CANCEL_CONFIG,
    handleCancelAdminPanelConfig
  );
}

export function* watchFleetManagementTripDetails() {
  yield takeLatest(
    fleetManagementNotification.GET_FLEET_MANAGEMENT_TRIP_DETAILS,
    handleFleetManagementTripDetails
  );
}

export function* watchFleetManagementOverAllTripDetails() {
  yield takeLatest(
    fleetManagementNotification.GET_FLEET_MANAGEMENT_OVER_ALL_TRIP_DETAILS,
    handleFleetManagementOverAllTripDetails
  );
}

export function* watchFleetManagementAnalyticsData() {
  yield takeLatest(
    fleetManagementNotification.GET_FLEET_MANAGEMENT_ANALYTICS_DATA,
    handleFleetManagementAnalyticsData
  );
}

export function * watchAssetTrackerDetail() {
  yield takeLatest(
    assetTrackerDetail.GET_ASSET_TRACKER_DETAIL,
    handleAssetTrackerDetail
  )
}
