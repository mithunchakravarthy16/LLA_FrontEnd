import adminLoginActions from '../actions/adminLoginActions';

const initialState = {
  adminLoginData: '',
  languageData:'en',
  adminLogout: {}
};

export default (state = initialState, action:any) => {
  switch (action.type) {
    case adminLoginActions.SET_ADMIN_USER_LOGIN:
      const { adminLoginData } = action;
      return { ...state, adminLoginData };
      case adminLoginActions.SET_LANGUAGE:
      const { languageData } = action;
      return { ...state, languageData };
      case adminLoginActions.SET_ADMIN_USER_LOGOUT:
      const { adminLogout } = action;
      return { ...state, adminLogout };
    default:
      return state;
  }
};