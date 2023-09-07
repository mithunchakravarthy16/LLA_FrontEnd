import { put } from "redux-saga/effects";
import { setNotificationData } from "../../actions/getAllAssertNotificationAction";
import fetchAPIServices from "../../../services/fetchAPIServices";
import { getAssetNotificationApi } from "../../../services/endPoints";
import assetTrackingResponse from "mockdata/assetTrackingAPI";

export function* handleAssetNotification(action: any): any {
  try {
    const { fetchAssetNotification } = fetchAPIServices;
    const response = yield fetchAssetNotification(getAssetNotificationApi,  action.payload);
    // const response = assetTrackingResponse;
    if (response) {
      yield put(setNotificationData(response));
    } else {
      yield put(setNotificationData({}));
    }
  } catch (error) {
    console.log(error);
  }
}
