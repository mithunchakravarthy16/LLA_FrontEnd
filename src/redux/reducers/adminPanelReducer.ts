import adminPanelConfig from "redux/actions/adminPanel";

const initialState = {
  configData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case adminPanelConfig.SET_ADMIN_PANEL_CONFIG:
      const { configData } = action;
      return { ...state, configData };
    default:
      return state;
  }
};
