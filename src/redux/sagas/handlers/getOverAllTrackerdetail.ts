import { put } from "redux-saga/effects";
import assetOverallTrackerDetail from "mockdata/assetOverallTrackerDetails";
import { setOverallTrackerDetail } from "redux/actions/getOverAllTrackerdetail";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";

export function* handleAssetOverallTrackerDetails(action: any): any {
  try {
    // const { fetchLogin } = fetchAPIServices;

    const response = assetOverallTrackerDetail;
    if (response) {
      yield put(setOverallTrackerDetail(response));
    } else {
      yield put(setOverallTrackerDetail({}));
    }
  } catch (error) {
    console.log(error);
  }
}
