export const login = {
  GET_USER_LOGIN: "GET_USER_LOGIN",
  SET_USER_LOGIN: "SET_USER_LOGIN",
  GET_USER_LOGOUT: "GET_USER_LOGOUT",
  SET_USER_LOGOUT: "SET_USER_LOGOUT",
  GET_LANGUAGE: "GET_LANGUAGE",
  SET_LANGUAGE: "SET_LANGUAGE",
};

export const getUserLogin = (payload:any) => ({
  type: login.GET_USER_LOGIN,
  payload: payload,
});

export const setUserLogin = (loginData:any) => ({
  type: login.SET_USER_LOGIN,
  loginData,
});

export const getUserLogout = (payload:any) => ({
  type: login.GET_USER_LOGOUT,
  payload: payload,
});

export const setUserLogout = (logout:any) => ({
  type: login.SET_USER_LOGOUT,
  logout,
});

export const getLanguage = (payload:any) => ({
  type: login.GET_LANGUAGE,
  payload: payload,
});

export const setLanguage = (languageData:any) => ({
  type: login.SET_LANGUAGE,
  languageData,
});

export default login;
