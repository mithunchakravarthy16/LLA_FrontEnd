import { put } from "redux-saga/effects";
import { setFleetManagementNotificationData } from "redux/actions/fleetManagementNotificationActions";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";
import fleetManagementResponse from "mockdata/fleetManagementAPI";

export function* handleFleetManagementNotification(action: any): any {
  try {
    // const { fetchLogin } = fetchAPIServices;
    const response = fleetManagementResponse;
    if (response) {
      yield put(setFleetManagementNotificationData(response));
    } else {
      yield put(setFleetManagementNotificationData({}));
    }
  } catch (error) {
    console.log(error);
  }
}
