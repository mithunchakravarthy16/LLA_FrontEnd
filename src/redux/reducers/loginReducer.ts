import loginActions from '../actions/loginActions';

const initialState = {
  loginData: '',
  languageData:'en',
  logout: {}
};

export default (state = initialState, action:any) => {
  switch (action.type) {
    case loginActions.SET_USER_LOGIN:
      const { loginData } = action;
      return { ...state, loginData };
      case loginActions.SET_LANGUAGE:
      const { languageData } = action;
      return { ...state, languageData };
      case loginActions.SET_USER_LOGOUT:
      const { logout } = action;
      return { ...state, logout };
    default:
      return state;
  }
};