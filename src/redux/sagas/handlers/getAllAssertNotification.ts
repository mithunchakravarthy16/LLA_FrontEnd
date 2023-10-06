import { put } from "redux-saga/effects";
import { setNotificationData, setLoaderAssetNotificationData, hideLoaderAssetNotificationData } from "../../actions/getAllAssertNotificationAction";
import fetchAPIServices from "../../../services/fetchAPIServices";
import { getAssetNotificationApi } from "../../../services/endPoints";
import assetTrackingResponse from "mockdata/assetTrackingAPI";

export function* handleAssetNotification(action: any): any {
  try {
    if(action.isFromSearch){
      yield put(setLoaderAssetNotificationData());
    }    
    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(
      getAssetNotificationApi,
      action.payload
    );
    // const response = assetTrackingResponse;
    if (response) {
      yield put(setNotificationData(response));
    } else {
      yield put(setNotificationData({}));
    }
    
    yield put(hideLoaderAssetNotificationData());
    
  } catch (error) {
    
    yield put(hideLoaderAssetNotificationData());
    
    console.log(error);
  }
}

