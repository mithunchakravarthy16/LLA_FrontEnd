export const BASE_IP = {
  aws: "https://apismartlabtech.sensyonsmartspaces.com",
};

export const PORTS = {
  port1: "8081",
  port2: "8090",
  port3: "5000",
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
  getFleetNotificationsUrl:
    "/api/sensyon/fleet_notification/v1/getAllFleetNotification",
  getOverAllTripDetailsUrl: "/api/sensyon/trips/v1/getOverallTripDetail",
  getTripDetailsUrl: "/api/sensyon/trips/v1/getTripdetail",
  getAnalyticsUrl: "/api/sensyon/analytics/v1/getTripStatistics",
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
