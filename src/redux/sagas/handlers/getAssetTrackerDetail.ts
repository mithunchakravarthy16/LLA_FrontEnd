import { put } from "redux-saga/effects";
import assetOverallTrackerDetail from "mockdata/assetOverallTrackerDetails";
import { setAssetTrackerDetail } from "redux/actions/getAssetTrackerDetailAction";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";

export function* handleAssetTrackerDetail(action: any): any {
  try {
    // const { fetchPostData } = fetchAPIServices;

    const response = assetOverallTrackerDetail;
    if (response) {
      yield put(setAssetTrackerDetail(response));
    } else {
      yield put(setAssetTrackerDetail({}));
    }
  } catch (error) {
    console.log(error);
  }
}
