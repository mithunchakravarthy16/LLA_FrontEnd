import { put } from 'redux-saga/effects';
import { setCreateGeofence } from "../../actions/createGeofenceAction";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";
import assetTrackingResponse from "mockdata/assetTrackingAPI"

export function* handleCreateGeofence(action:any) :any {
    try {
        // const { fetchLogin } = fetchAPIServices;
        const response = { name : "Create API" };
        if (response) {
          yield put(setCreateGeofence(response));
        } else {
          yield put(setCreateGeofence({}));
        }
      } catch (error) {
        console.log(error);
      }
}