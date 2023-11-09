import { all, takeLatest } from "redux-saga/effects";
import { handleLogin, handleLogout } from "./handlers/login";
import { handleAdminLogin, handleAdminLogout } from "./handlers/adminLogin";
import login from "../actions/loginActions";
import adminLogin from "../actions/adminLoginActions";
import assetNotification from "redux/actions/getAllAssertNotificationAction";
import fleetManagementNotification from "redux/actions/fleetManagementNotificationActions";
import assetTrackingActiveInActiveAnalytics from "redux/actions/assetTrackingActiveInActiveAnalyticsAction";
import { handleAssetNotification, handleAssetTrackersListData } from "./handlers/getAllAssertNotification";
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
  handleFleetManagementOverspeeding,
  handleFleetManagementLiveTrip,
} from "./handlers/fleetManagementNotification";
import {
  handleAssetTrackingActiveInActiveAnalyticsData,
  handleAssetTrackingIncidentsAnalyticsData,
  handleAssetTrackingGridViewAnalyticsData,
} from "./handlers/assetTrackingActiveInActiveAnalytics";
import adminPanelConfig from "redux/actions/adminPanel";
import {
  handleAdminPanelConfig,
  handleGetAdminPanelConfig,
  handleCancelAdminPanelConfig,
} from "./handlers/adminPanel";
import assetTrackerDetail from "redux/actions/getAssetTrackerDetailAction";
import {
  handleAssetTrackerDetail,
  handleAssetTrackingAssetsList,
  handleAssetTrackingCreateGeofence,
  handleAssetTrackingUpdateGeofence,
  handleAssetLiveLocation
} from "./handlers/getAssetTrackerDetail";
import createGeofence from "redux/actions/createGeofenceAction";
import { handleCreateGeofence } from "./handlers/createGeofence";
import enableGeofence from "redux/actions/enableGeofenceAction";
import updateGeofence from "redux/actions/updateGeofenceAction";
import { handleEnableGeofence } from "./handlers/enableGeofence";
import { handleUpdateGeofence } from "./handlers/updateGeofence";
import assetTable from "redux/actions/getAssetTableDataAction";
import { handleAssetTableData, handleAssetName } from "./handlers/getAssetTable";
import googleMapApiKey from "redux/actions/googleMapApiKeyAction";
import { handleGoogleMapApi, handleGoogleMapApiPost } from "./handlers/googleMapApi";


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
    watchAssetTrackerDetail(),
    watchFleetManagementOverspeeding(),
    watchCreateGeofence(),
    watchUpdateGeofence(),
    watchEnableGeofence(),
    watchFleetManagementLiveTrip(),
    watchAssetTrackingActiveInActiveAnalyticsData(),
    watchAssetTrackingIncidentsAnalyticsData(),
    watchAssetTrackingAssetsList(),
    watchAssetTrackingCreateGeofence(),
    watchAssetTrackingUpdateGeofence(),
    watchAssetTrackingGridViewAnalyticsData(),
    watchAssetLiveLocation(),
    watchAssetTableData(),
    watchAssetNameData(),
    watchGoogleMapApiData(),
    watchGoogleMapApiDataPost(),
    watchAssetTrackersListData()
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

export function* watchAssetTrackerDetail() {
  yield takeLatest(
    assetTrackerDetail.GET_ASSET_TRACKER_DETAIL,
    handleAssetTrackerDetail
  );
}

export function* watchFleetManagementOverspeeding() {
  yield takeLatest(
    fleetManagementNotification.GET_FLEET_MANAGEMENT_OVER_SPEEDING,
    handleFleetManagementOverspeeding
  );
}

export function* watchCreateGeofence() {
  yield takeLatest(createGeofence.GET_CREATE_GEOFENCE, handleCreateGeofence);
}

export function* watchUpdateGeofence() {
  yield takeLatest(updateGeofence.GET_UPDATE_GEOFENCE, handleUpdateGeofence);
}

export function* watchEnableGeofence() {
  yield takeLatest(enableGeofence.GET_ENABLE_GEOFENCE, handleEnableGeofence);
}

export function* watchFleetManagementLiveTrip() {
  yield takeLatest(
    fleetManagementNotification.GET_FLEET_MANAGEMENT_LIVE_TRIP,
    handleFleetManagementLiveTrip
  );
}

export function* watchAssetTrackingActiveInActiveAnalyticsData() {
  yield takeLatest(
    assetTrackingActiveInActiveAnalytics.GET_ASSET_TRACKING_ACTIVE_INACTIVE_ANALYTICS_DATA,
    handleAssetTrackingActiveInActiveAnalyticsData
  );
}

export function* watchAssetTrackingIncidentsAnalyticsData() {
  yield takeLatest(
    assetTrackingActiveInActiveAnalytics.GET_ASSET_TRACKING_INCIDENTS_ANALYTICS_DATA,
    handleAssetTrackingIncidentsAnalyticsData
  );
}

export function* watchAssetTrackingAssetsList() {
  yield takeLatest(
    assetTrackerDetail.GET_ASSET_TRACKING_ASSESTS_LIST,
    handleAssetTrackingAssetsList
  );
}

export function* watchAssetTrackingCreateGeofence() {
  yield takeLatest(
    assetTrackerDetail.GET_ASSET_TRACKING_CREATE_GEOFENCE,
    handleAssetTrackingCreateGeofence
  );
}

export function* watchAssetTrackingUpdateGeofence() {
  yield takeLatest(
    assetTrackerDetail.GET_ASSET_TRACKING_UPDATE_GEOFENCE,
    handleAssetTrackingUpdateGeofence
  );
}

export function* watchAssetTrackingGridViewAnalyticsData() {
  yield takeLatest(
    assetTrackingActiveInActiveAnalytics.GET_ASSET_TRACKING_GRID_VIEW_ANALYTICS_DATA,
    handleAssetTrackingGridViewAnalyticsData
  );
}

export function* watchAssetLiveLocation() {
  yield takeLatest (
    assetTrackerDetail.GET_ASSET_LIVE_LOCATION, handleAssetLiveLocation
  )
}

export function* watchAssetTableData() {
  yield takeLatest(
    assetTable.GET_ASSET_TABLE, handleAssetTableData
  )
}
export function* watchAssetNameData() {
  yield takeLatest(
    assetTable.GET_ASSET_NAME, handleAssetName
  )
}


export function* watchGoogleMapApiData() {
  yield takeLatest(
    googleMapApiKey.GET_GOOGLE_MAP_API, handleGoogleMapApi
  )
}

export function* watchGoogleMapApiDataPost() {
  yield takeLatest(
    googleMapApiKey.GET_GOOGLE_MAP_API_POST, handleGoogleMapApiPost
  )
}

export function* watchAssetTrackersListData() {
  yield takeLatest(
    assetNotification.GET_ASSET_TRACKERS_LIST, handleAssetTrackersListData
  )
}
