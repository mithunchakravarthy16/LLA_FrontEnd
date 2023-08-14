import { put } from 'redux-saga/effects';
import { setEnableGeofence } from "../../actions/enableGeofenceAction";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";
import assetTrackingResponse from "mockdata/assetTrackingAPI"

export function* handleEnableGeofence(action:any) :any {
    try {
        // const { fetchLogin } = fetchAPIServices;
        const response = { name : "Enable API" };
        if (response) {
          yield put(setEnableGeofence(response));
        } else {
          yield put(setEnableGeofence({}));
        }
      } catch (error) {
        console.log(error);
      }
}