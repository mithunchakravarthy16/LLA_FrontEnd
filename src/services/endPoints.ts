export const BASE_IP = {
  // aws: process.env.REACT_APP_BASE_URL,
  aws : process.env.REACT_APP_TEST_URL
};

export const BASE_URL = {
  baseUrl: `${BASE_IP.aws}`,
};

const VERSION = {
  v1: "/v1",
  v2: "/v2",
  v4: "/v4",
};

const apiSource = {
  lla: "/api/sensyon/users",
  llaAdmin: "/api/sensyon/admin",
};

const SUB_URL = {
  loginUrl: apiSource.lla + VERSION.v1 + "/login",
  logoutUrl: apiSource.lla + VERSION.v1 + "/userLogout",
  adminPanelSaveUrl: apiSource.llaAdmin + "/saveconfiguration",
  adminPanelGetUrl: apiSource.llaAdmin + "/getConfigurationDetail",
  adminPanelCancelUrl: apiSource.llaAdmin + "/cancelPreviewConfiguration",
  // FleetManagemet Api's -- Start
  getFleetNotificationsUrl:
    "/api/sensyon/fleet_notification/v1/getAllFleetNotification",
  getOverAllTripDetailsUrl: "/api/sensyon/trips/v1/getOverallTripDetail",
  getTripCordinatesUrl: "/api/sensyon/trips/v1/getCoordinates",
  getAnalyticsUrl: "/api/sensyon/analytics/v1/getTripAnalytics",
  getAssetActiveInactiveAnalyticsUrl:
    "/api/sensyon/asset_analytics/v1/getActiveInactiveTrackerCount",
  getAssetIncidentsAnalyticsUrl:
    "/api/sensyon/asset_notification/v1/getAllIncidentCountAnalytics",
  getOverSpeedingUrl:
    "/api/sensyon/analytics/v1/getOverSpeedHarshBreakingAnalytics",
  getTripDetailsUrl: "/api/sensyon/trips/v1/getTripdetail",
  getAssetNotificationUrl:
    "/api/sensyon/asset_notification/v1/getAllAssertNotification",
  getTrackerDetailUrl: "/api/sensyon/tracker/v1/getTrackerdetail",
  getAssetOverallTrackerDetailsUrl:
    "/api/sensyon/tracker/v1/getOverAllTrackerdetail",
  // FleetManagemet Api's -- End
  // Asset Tracking Api's -- Start
  createGeofenceUrl: "/api/sensyon/geofence/creategeofence",
  updateGeofenceUrl: "/api/sensyon/geofence/updategeofence",
  getAssetListUrl: "/api/sensyon/tracker/v1/getAssetList",
  getAssetGridViewAnalyticsUrl:
    "/api/sensyon/asset_analytics/v1/getAssetAnalytics",
    getTrackerLiveDetailUrl : "/api/sensyon/tracker/v1/getTrackerLiveDetail",
  // Asset Tracking Api's -- End

  //Asset Table API
  getAllDeviceDetailURL : "/api/sensyon/tracker/v1/getAllDeviceDetails"
};

export const loginApi = `${BASE_URL.baseUrl}${SUB_URL.loginUrl}`;
export const logoutApi = `${BASE_URL.baseUrl}${SUB_URL.logoutUrl}`;
export const adminPanelSaveApi = `${BASE_URL.baseUrl}${SUB_URL.adminPanelSaveUrl}`;
export const adminPanelGetApi = `${BASE_URL.baseUrl}${SUB_URL.adminPanelGetUrl}`;
export const adminPanelCancelApi = `${BASE_URL.baseUrl}${SUB_URL.adminPanelCancelUrl}`;
export const getFleetNotificationApi = `${BASE_URL.baseUrl}${SUB_URL.getFleetNotificationsUrl}`;
export const getOverAllTripDetailsApi = `${BASE_URL.baseUrl}${SUB_URL.getOverAllTripDetailsUrl}`;
export const getTripDetailsApi = `${BASE_URL.baseUrl}${SUB_URL.getTripDetailsUrl}`;
export const getAnalyticsApi = `${BASE_URL.baseUrl}${SUB_URL.getAnalyticsUrl}`;
export const getOverSpeedingApi = `${BASE_URL.baseUrl}${SUB_URL.getOverSpeedingUrl}`;
export const getCoordinatesApi = `${BASE_URL.baseUrl}${SUB_URL.getTripCordinatesUrl}`;
export const getAssetActiveInactiveAnalyticsApi = `${BASE_URL.baseUrl}${SUB_URL.getAssetActiveInactiveAnalyticsUrl}`;
export const getAssetIncidentsAnalyticsApi = `${BASE_URL.baseUrl}${SUB_URL.getAssetIncidentsAnalyticsUrl}`;
export const createGeofenceApi = `${BASE_URL.baseUrl}${SUB_URL.createGeofenceUrl}`;
export const updateGeofenceApi = `${BASE_URL.baseUrl}${SUB_URL.updateGeofenceUrl}`;
export const getAssetListApi = `${BASE_URL.baseUrl}${SUB_URL.getAssetListUrl}`;
export const getAssetNotificationApi = `${BASE_URL.baseUrl}${SUB_URL.getAssetNotificationUrl}`;
export const getTrackerDetailApi = `${BASE_URL.baseUrl}${SUB_URL.getTrackerDetailUrl}`;
export const getAssetOverallTrackerDetailsApi = `${BASE_URL.baseUrl}${SUB_URL.getAssetOverallTrackerDetailsUrl}`;
export const getAssetGridViewAnalyticsApi = `${BASE_URL.baseUrl}${SUB_URL.getAssetGridViewAnalyticsUrl}`;
export const getTrackerLiveDetailApi = `${BASE_URL.baseUrl}${SUB_URL.getTrackerLiveDetailUrl}`;
export const getAllDeviceDetailApi = `${BASE_URL.baseUrl}${SUB_URL.getAllDeviceDetailURL}`
