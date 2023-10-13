import { put } from "redux-saga/effects";
import assetTableData from "mockdata/assetTableData";
import { setAssetName, setAssetTable } from "redux/actions/getAssetTableDataAction";
import fetchAPIServices from "../../../services/fetchAPIServices";
import { getAllDeviceDetailApi, editAssetNameApi } from "../../../services/endPoints";

export function* handleAssetTableData(action: any): any {
  try {
    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(
      getAllDeviceDetailApi,
      action.payload
    );
    // const response = assetTableData
    if (response) {
      yield put(setAssetTable(response));
    } else {
      yield put(setAssetTable({}));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleAssetName(action: any): any {
  try {
    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(
      editAssetNameApi,
      action.payload
    );
    // const response = assetTableData
    if (response) {
      yield put(setAssetName(response));
    } else {
      yield put(setAssetName({}));
    }
  } catch (error) {
    console.log(error);
  }
}
