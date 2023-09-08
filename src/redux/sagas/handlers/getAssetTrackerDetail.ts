import { put } from "redux-saga/effects";
import assetOverallTrackerDetail from "mockdata/assetOverallTrackerDetails";
import { setAssetTrackerDetail } from "redux/actions/getAssetTrackerDetailAction";
import fetchAPIServices from "../../../services/fetchAPIServices";
import { getTrackerDetailApi } from "../../../services/endPoints";

export function* handleAssetTrackerDetail(action: any): any {
  try {
    const { fetchAssetTrackerData } = fetchAPIServices;
    const response = yield fetchAssetTrackerData(getTrackerDetailApi,  action.payload);
    // const response = assetOverallTrackerDetail;
    if (response) {
      yield put(setAssetTrackerDetail(response));
    } else {
      yield put(setAssetTrackerDetail({}));
    }
  } catch (error) {
    console.log(error);
  }
}
