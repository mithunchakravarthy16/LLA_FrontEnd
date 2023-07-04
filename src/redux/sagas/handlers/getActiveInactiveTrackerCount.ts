import { put } from 'redux-saga/effects';
import { setAssetActiveInactiveTracker } from "redux/actions/getActiveInactiveTrackerCount";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";
import assetTrackingResponse from "mockdata/assetTrackerActiveInactiveData";

export function* handleActiveInactiveTracker(action:any) :any {
    try {
        // const { fetchLogin } = fetchAPIServices;
        const response = assetTrackingResponse;
        if (response) {
          yield put(setAssetActiveInactiveTracker(response));
        } else {
          yield put(setAssetActiveInactiveTracker({}));
        }
      } catch (error) {
        console.log(error);
      }
}