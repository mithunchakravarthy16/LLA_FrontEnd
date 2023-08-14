import { put } from 'redux-saga/effects';
import { setUpdateGeofence } from "../../actions/updateGeofenceAction";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";
import assetTrackingResponse from "mockdata/assetTrackingAPI"

export function* handleUpdateGeofence(action:any) :any {
    try {
        // const { fetchLogin } = fetchAPIServices;
        const response = { name : "Update API" };
        if (response) {
          yield put(setUpdateGeofence(response));
        } else {
          yield put(setUpdateGeofence({}));
        }
      } catch (error) {
        console.log(error);
      }
}