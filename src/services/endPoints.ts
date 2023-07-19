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
};

const SUB_URL = {
  loginUrl: apiSource.lla + VERSION.v1 + "/login",
  logoutUrl: apiSource.lla + VERSION.v1 + "/userLogout",
  adminPanelSaveUrl: "/api/sensyon/admin/saveconfiguration",
};

export const loginApi = `${BASE_URL.baseUrl}${SUB_URL.loginUrl}`;
export const logoutApi = `${BASE_URL.baseUrl}${SUB_URL.logoutUrl}`;
export const adminPanelSaveApi = `${BASE_URL.baseUrl}${SUB_URL.adminPanelSaveUrl}`;
