export const adminPanelConfig = {
  GET_ADMIN_PANEL_CONFIG: "GET_ADMIN_PANEL_CONFIG",
  SET_ADMIN_PANEL_CONFIG: "SET_ADMIN_PANEL_CONFIG",
};

export const getAdminPanelConfig = (payload: any) => ({
  type: adminPanelConfig.GET_ADMIN_PANEL_CONFIG,
  payload: payload,
});

export const setAdminPanelConfig = (configData: any) => ({
  type: adminPanelConfig.SET_ADMIN_PANEL_CONFIG,
  configData,
});

export default adminPanelConfig;
