import { put } from "redux-saga/effects";
import { setUserLogin, setUserLogout } from "../../actions/loginActions";
import fetchAPIServices from "../../../services/fetchAPIServices";
import { loginApi, logoutApi } from "../../../services/endPoints";
import userList from "mockdata/login";

export function* handleLogin(action: any): any {
  try {
    if (action && action.payload && action.payload.logout) {
      yield put(setUserLogin({}));
    } else if (action && action.payload && action.payload.language) {
      yield put(setUserLogin({ languageData: action.payload.language }));
    } else {
      const { fetchLogin } = fetchAPIServices;
      // const response = yield fetchLogin(loginApi, action.payload);
      const response = userList;
      if (response) {
        yield put(setUserLogin(response));
      } else {
        yield put(setUserLogin({}));
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleLogout(action: any): any {
  try {
    const { fetchLogin } = fetchAPIServices;
    const response = yield fetchLogin(logoutApi, action.payload);
    if (response) {
      yield put(setUserLogout(response));
    } else {
      yield put(setUserLogout({}));
    }
  } catch (error) {
    console.log(error);
  }
}
