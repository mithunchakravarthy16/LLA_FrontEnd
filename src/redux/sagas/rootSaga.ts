import { all, takeLatest } from "redux-saga/effects";
import { handleLogin, handleLogout } from "./handlers/login";
import login from "../actions/loginActions";
import assetNotification from "redux/actions/assetNotificationAction";
import { handleAssetNotification} from "./handlers/assetNotification"

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchAssetNotification()
  ]);
}

export function* watchLogin() {
  yield takeLatest(login.GET_USER_LOGIN, handleLogin);
}

export function* watchAssetNotification() {
  yield takeLatest(assetNotification.GET_ASSET_NOTIFICATION, handleAssetNotification);
}




