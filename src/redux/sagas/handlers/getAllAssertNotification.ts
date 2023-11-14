import { put } from "redux-saga/effects";
import { setNotificationData, setLoaderAssetNotificationData, hideLoaderAssetNotificationData, setAssetTrackersListData } from "../../actions/getAllAssertNotificationAction";
import fetchAPIServices from "../../../services/fetchAPIServices";
import { getAssetNotificationApi, getAssetTrackersListApi } from "../../../services/endPoints";
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

export function* handleAssetTrackersListData(action: any): any {
  try {
    if(action.isFromSearch){
      yield put(setLoaderAssetNotificationData());
    }    
    
    // const { fetchData } = fetchAPIServices;
    // const response = yield fetchData(getAssetTrackersListApi);

    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(
      getAssetTrackersListApi,
      action.payload
    );
    
    if (response) {
      yield put(setAssetTrackersListData(response));
    } else {
      yield put(setAssetTrackersListData({}));
    }
    
    yield put(hideLoaderAssetNotificationData());
    
  } catch (error) {
    
    yield put(hideLoaderAssetNotificationData());
    
    console.log(error);
  }
}

