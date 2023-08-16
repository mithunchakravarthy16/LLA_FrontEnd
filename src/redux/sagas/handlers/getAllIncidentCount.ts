import { put } from "redux-saga/effects";
import { setAssetIncidentCount } from "redux/actions/getAllIncidentCount";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";
import assetTrackingResponse from "mockdata/assetTrackerIncidentCount";

export function* handleAssetIncidentCount(action: any): any {
  try {
    // const { fetchPostData } = fetchAPIServices;

    const response = assetTrackingResponse;
    if (response) {
      yield put(setAssetIncidentCount(response));
    } else {
      yield put(setAssetIncidentCount({}));
    }
  } catch (error) {
    console.log(error);
  }
}
