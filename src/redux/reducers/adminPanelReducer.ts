import adminPanelConfig from "redux/actions/adminPanel";

const initialState = {
  configData: {},
  getConfigData: {},
  CancelConfigData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case adminPanelConfig.SET_ADMIN_PANEL_SAVE_CONFIG:
      const { configData } = action;
      return { ...state, configData };
    case adminPanelConfig.SET_ADMIN_PANEL_CONFIG:
      const { getConfigData } = action;
      return { ...state, getConfigData };
    case adminPanelConfig.SET_ADMIN_PANEL_CANCEL_CONFIG:
      const { CancelConfigData } = action;
      return { ...state, CancelConfigData };
    default:
      return state;
  }
};
