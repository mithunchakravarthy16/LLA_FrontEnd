import { put } from "redux-saga/effects";
import assetTableData from "mockdata/assetTableData";
import { setAssetTable } from "redux/actions/getAssetTableDataAction";
import fetchAPIServices from "../../../services/fetchAPIServices";
import { getAssetOverallTrackerDetailsApi } from "../../../services/endPoints";

export function* handleAssetTableData(action: any): any {
  try {
    const { fetchData } = fetchAPIServices;

    // const response = yield fetchData(
    //   `${getAssetOverallTrackerDetailsApi}/${action?.payload}`
    // );
    const response = assetTableData
    if (response) {
      yield put(setAssetTable(response));
    } else {
      yield put(setAssetTable({}));
    }
  } catch (error) {
    console.log(error);
  }
}
