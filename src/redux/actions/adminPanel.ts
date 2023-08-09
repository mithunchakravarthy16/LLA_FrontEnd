export const adminPanelConfig = {
  GET_ADMIN_PANEL_SAVE_CONFIG: "GET_ADMIN_PANEL_SAVE_CONFIG",
  SET_ADMIN_PANEL_SAVE_CONFIG: "SET_ADMIN_PANEL_SAVE_CONFIG",
  GET_ADMIN_PANEL_CONFIG: "GET_ADMIN_PANEL_CONFIG",
  SET_ADMIN_PANEL_CONFIG: "SET_ADMIN_PANEL_CONFIG",
  GET_ADMIN_PANEL_CANCEL_CONFIG: "GET_ADMIN_PANEL_CANCEL_CONFIG",
  SET_ADMIN_PANEL_CANCEL_CONFIG: "SET_ADMIN_PANEL_CANCEL_CONFIG",
  SHOW_LOADER_GETCONFIGDATA: "SHOW_LOADER_GETCONFIGDATA",
  HIDE_LOADER_GETCONFIGDATA: "Hide_LOADER_GETCONFIGDATA",
  SHOW_LOADER_CONFIGDATA: "SHOW_LOADER_CONFIGDATA",
  HIDE_LOADER_CONFIGDATA: "Hide_LOADER_CONFIGDATA",
};

export const getAdminPanelConfig = (payload: any) => ({
  type: adminPanelConfig.GET_ADMIN_PANEL_SAVE_CONFIG,
  payload: payload,
});

export const setAdminPanelConfig = (configData: any) => ({
  type: adminPanelConfig.SET_ADMIN_PANEL_SAVE_CONFIG,
  configData,
});

export const getAdminPanelConfigData = (payload: any) => ({
  type: adminPanelConfig.GET_ADMIN_PANEL_CONFIG,
  payload: payload,
});

export const setAdminPanelConfigData = (getConfigData: any) => ({
  type: adminPanelConfig.SET_ADMIN_PANEL_CONFIG,
  getConfigData,
});

export const getAdminPanelCancelConfigData = (payload: any) => ({
  type: adminPanelConfig.GET_ADMIN_PANEL_CANCEL_CONFIG,
  payload: payload,
});

export const setAdminPanelCancelConfigData = (CancelConfigData: any) => ({
  type: adminPanelConfig.SET_ADMIN_PANEL_CANCEL_CONFIG,
  CancelConfigData,
});

export const setLoaderConfigData = () => ({
  type: adminPanelConfig.SHOW_LOADER_CONFIGDATA,
});

export const hideLoaderConfigData = () => ({
  type: adminPanelConfig.HIDE_LOADER_CONFIGDATA,
});

export const setLoaderGetConfigData = () => ({
  type: adminPanelConfig.SHOW_LOADER_GETCONFIGDATA,
});

export const hideLoaderGetConfigData = () => ({
  type: adminPanelConfig.HIDE_LOADER_GETCONFIGDATA,
});

export default adminPanelConfig;
