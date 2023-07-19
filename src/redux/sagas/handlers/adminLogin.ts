import { put } from "redux-saga/effects";
import { setAdminUserLogin, setAdminUserLogout } from "../../actions/adminLoginActions";
import fetchAPIServices from "../../../services/fetchAPIServices";
import { loginApi, logoutApi } from "../../../services/endPoints";
import userList from "mockdata/login";

export function* handleAdminLogin(action: any): any {
  try {
    // const response = userList;
    if (action && action.payload && action.payload.logout) {
      yield put(setAdminUserLogin({}));
    } else if (action && action.payload && action.payload.language) {
      yield put(setAdminUserLogin({ languageData: action.payload.language }));
    } else {
      const { fetchLogin } = fetchAPIServices;
      const response = yield fetchLogin(loginApi, action.payload);
      if (response) {
        yield put(setAdminUserLogin(response));
      } else {
        yield put(setAdminUserLogin({}));
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleAdminLogout(action: any): any {
  try {
    const { fetchLogin } = fetchAPIServices;
    const response = yield fetchLogin(logoutApi, action.payload);
    if (response) {
      yield put(setAdminUserLogout(response));
    } else {
      yield put(setAdminUserLogout({}));
    }
  } catch (error) {
    console.log(error);
  }
}
