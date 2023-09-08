import { put } from "redux-saga/effects";
// import assetOverallTrackerDetail from "mockdata/assetOverallTrackerDetails";
import { setOverallTrackerDetail } from "redux/actions/getOverAllTrackerdetail";
import fetchAPIServices from "../../../services/fetchAPIServices";
import { getAssetOverallTrackerDetailsApi } from "../../../services/endPoints";

export function* handleAssetOverallTrackerDetails(action: any): any {
  try {
    const { fetchData } = fetchAPIServices;

    const response = yield fetchData(
      `${getAssetOverallTrackerDetailsApi}/${action?.payload}`
    );
    if (response) {
      yield put(setOverallTrackerDetail(response));
    } else {
      yield put(setOverallTrackerDetail({}));
    }
  } catch (error) {
    console.log(error);
  }
}
