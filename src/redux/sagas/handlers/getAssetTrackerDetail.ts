import { put } from "redux-saga/effects";
import assetOverallTrackerDetail from "mockdata/assetOverallTrackerDetails";
import {
  setAssetTrackerDetail,
  setAssetTrackingCreateGeofence,
  setAssetTrackingUpdateGeofence,
  setAssetTrackingList,
  setLoaderAssetsList,
  hideLoaderAssetsList,
  setLoaderCreateGeofence,
  hideLoaderCreateGeofence,
  setShowLoaderAssetInfoDialog,
  hideLoaderAssetInfoDialog
} from "redux/actions/getAssetTrackerDetailAction";
import fetchAPIServices from "../../../services/fetchAPIServices";
import {
  createGeofenceApi,
  updateGeofenceApi,
  getAssetListApi,
  getTrackerDetailApi,
} from "../../../services/endPoints";

export function* handleAssetTrackerDetail(action: any): any {
  try {
    yield put(setShowLoaderAssetInfoDialog())
    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(getTrackerDetailApi, action.payload);
    // const response = assetOverallTrackerDetail;
    if (response) {
      yield put(setAssetTrackerDetail(response));
    } else {
      yield put(setAssetTrackerDetail({}));
    }
    yield put(hideLoaderAssetInfoDialog())
  } catch (error) {
    console.log(error);
  }
}

export function* handleAssetTrackingCreateGeofence(action: any): any {
  try {
    yield put(setLoaderCreateGeofence());
    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(createGeofenceApi, action.payload);
    if (response) {
      yield put(setAssetTrackingCreateGeofence(response));
    } else {
      yield put(setAssetTrackingCreateGeofence({}));
    }
    yield put(hideLoaderCreateGeofence());
  } catch (error) {
    yield put(hideLoaderCreateGeofence());
    console.log(error);
  }
}

export function* handleAssetTrackingUpdateGeofence(action: any): any {
  try {
    const { fetchUpdateData } = fetchAPIServices;
    const response = yield fetchUpdateData(updateGeofenceApi, action.payload);
    if (response) {
      yield put(setAssetTrackingUpdateGeofence(response));
    } else {
      yield put(setAssetTrackingUpdateGeofence({}));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleAssetTrackingAssetsList(): any {
  try {
    yield put(setLoaderAssetsList());
    const { fetchData } = fetchAPIServices;
    const response = yield fetchData(getAssetListApi);
    if (response) {
      yield put(setAssetTrackingList(response));
    } else {
      yield put(setAssetTrackingList({}));
    }
    yield put(hideLoaderAssetsList());
  } catch (error) {
    yield put(hideLoaderAssetsList());
    console.log(error);
  }
}
