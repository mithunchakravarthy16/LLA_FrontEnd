import { put } from "redux-saga/effects";
import {
  setAssetTrackingActiveInActiveAnalyticsData,
  setAssetTrackingIncidentsAnalyticsData,
  setAssetTrackingGridViewAnalyticsData,
  setLoaderAnalytics,
  hideLoaderAnalytics,
  setLoaderOverAllAnalytics,
  hideLoaderOverAllAnalytics,
} from "redux/actions/assetTrackingActiveInActiveAnalyticsAction";
import fetchAPIServices from "../../../services/fetchAPIServices";
import { getAssetActiveInactiveAnalyticsApi, getAssetIncidentsAnalyticsApi, getAssetGridViewAnalyticsApi} from "../../../services/endPoints";




export function* handleAssetTrackingActiveInActiveAnalyticsData(action: any): any {
  try {
    yield put(setLoaderAnalytics());
    const { fetchData } = fetchAPIServices;
    const response = yield fetchData(`${getAssetActiveInactiveAnalyticsApi}/${action?.payload}`);
    if (response) {
      yield put(setAssetTrackingActiveInActiveAnalyticsData(response));
    } else {
      yield put(setAssetTrackingActiveInActiveAnalyticsData({}));
    }
    yield put(hideLoaderAnalytics());
  } catch (error) {
    yield put(hideLoaderAnalytics());
    console.log(error);
  }
}

export function* handleAssetTrackingIncidentsAnalyticsData(action: any): any {
  try {
    yield put(setLoaderAnalytics());
    const { fetchData } = fetchAPIServices;
    const response = yield fetchData(`${getAssetIncidentsAnalyticsApi}/${action?.payload}`);
    if (response) {
      yield put(setAssetTrackingIncidentsAnalyticsData(response));
    } else {
      yield put(setAssetTrackingIncidentsAnalyticsData({}));
    }
    yield put(hideLoaderAnalytics());
  } catch (error) {
    yield put(hideLoaderAnalytics());
    console.log(error);
  }
}

export function* handleAssetTrackingGridViewAnalyticsData(action: any): any {
  try {
    yield put(setLoaderOverAllAnalytics());
    const { fetchData } = fetchAPIServices;
    const response = yield fetchData(`${getAssetGridViewAnalyticsApi}/${action?.payload}`);
    if (response) {
      yield put(setAssetTrackingGridViewAnalyticsData(response));
    } else {
      yield put(setAssetTrackingGridViewAnalyticsData({}));
    }
    yield put(hideLoaderOverAllAnalytics());
  } catch (error) {
    yield put(hideLoaderOverAllAnalytics());
    console.log(error);
  }
}

