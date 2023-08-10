import adminPanelConfig from "redux/actions/adminPanel";

const initialState = {
  configData: {},
  getConfigData: {},
  CancelConfigData: {},
  loadingConfigData: true,
  loadingGetConfigData: true
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

    case adminPanelConfig.SHOW_LOADER_CONFIGDATA:
      return { ...state, loadingConfigData: true };
    case adminPanelConfig.HIDE_LOADER_CONFIGDATA:
      return { ...state, loadingConfigData: false };

    case adminPanelConfig.SHOW_LOADER_GETCONFIGDATA:
      return { ...state, loadingGetConfigData: true };
    case adminPanelConfig.HIDE_LOADER_GETCONFIGDATA:
      return { ...state, loadingGetConfigData: false };
    default:
      return state;
  }
};
