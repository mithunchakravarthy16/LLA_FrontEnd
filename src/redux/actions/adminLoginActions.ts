export const adminLogin = {
  GET_ADMIN_USER_LOGIN: "GET_ADMIN_USER_LOGIN",
  SET_ADMIN_USER_LOGIN: "SET_ADMIN_USER_LOGIN",
  GET_ADMIN_USER_LOGOUT: "GET_ADMIN_USER_LOGOUT",
  SET_ADMIN_USER_LOGOUT: "SET_ADMIN_USER_LOGOUT",
  GET_LANGUAGE: "GET_LANGUAGE",
  SET_LANGUAGE: "SET_LANGUAGE",
};

export const getAdminUserLogin = (payload: any) => ({
  type: adminLogin.GET_ADMIN_USER_LOGIN,
  payload: payload,
});

export const setAdminUserLogin = (adminLoginData: any) => ({
  type: adminLogin.SET_ADMIN_USER_LOGIN,
  adminLoginData,
});

export const getAdminUserLogout = () => ({
  type: adminLogin.GET_ADMIN_USER_LOGOUT,
  payload: { logout: true },
});

export const setAdminUserLogout = (adminLogout: any) => ({
  type: adminLogin.SET_ADMIN_USER_LOGOUT,
  adminLogout,
});

export const getLanguage = (payload: any) => ({
  type: adminLogin.GET_LANGUAGE,
  payload: payload,
});

export const setLanguage = (languageData: any) => ({
  type: adminLogin.SET_LANGUAGE,
  languageData,
});

export default adminLogin;
