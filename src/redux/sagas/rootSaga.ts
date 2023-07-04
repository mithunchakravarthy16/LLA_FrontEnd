import { all, takeLatest } from "redux-saga/effects";
import { handleLogin, handleLogout } from "./handlers/login";
import login from "../actions/loginActions";
import assetNotification from "redux/actions/assetNotificationAction";
import fleetManagementNotification from "redux/actions/fleetManagementNotificationActions";
import { handleAssetNotification } from "./handlers/assetNotification";
import { handleFleetManagementNotification } from "./handlers/fleetManagementNotification";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchAssetNotification(),
    watchFleetManagementNotification(),
  ]);
}

export function* watchLogin() {
  yield takeLatest(login.GET_USER_LOGIN, handleLogin);
}

export function* watchAssetNotification() {
  yield takeLatest(
    assetNotification.GET_ASSET_NOTIFICATION,
    handleAssetNotification
  );
}

export function* watchFleetManagementNotification() {
  yield takeLatest(
    fleetManagementNotification.GET_FLEET_MANAGEMENT_NOTIFICATION,
    handleFleetManagementNotification
  );
}
