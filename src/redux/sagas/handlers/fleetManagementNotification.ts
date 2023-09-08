import { put } from "redux-saga/effects";
import {
  setFleetManagementNotificationData,
  setFleetManagementTripDetails,
  setFleetManagementOverAllTripDetails,
  setFleetManagementAnalyticsData,
  setLoaderTripDetails,
  hideLoaderTripDetails,
  setLoaderNotificationData,
  hideLoaderNotificationData,
  setLoaderAnalytics,
  hideLoaderAnalytics,
  setLoaderOverAllAnalytics,
  hideLoaderOverAllAnalytics,
  setFleetManagementOverspeeding,
  setFleetManagementLiveTrip,
} from "redux/actions/fleetManagementNotificationActions";
import fetchAPIServices from "../../../services/fetchAPIServices";
import {
  getFleetNotificationApi,
  getOverAllTripDetailsApi,
  getTripDetailsApi,
  getAnalyticsApi,
  getOverSpeedingApi,
  getCoordinatesApi,
} from "../../../services/endPoints";
// import fleetManagementResponse from "mockdata/fleetManagementAPI";

export function* handleFleetManagementNotification(action: any): any {
  try {
    yield put(setLoaderNotificationData());
    const { fetchData } = fetchAPIServices;
    const response = yield fetchData(getFleetNotificationApi);
    if (response) {
      yield put(setFleetManagementNotificationData(response));
    } else {
      yield put(setFleetManagementNotificationData({}));
    }
    yield put(hideLoaderNotificationData());
  } catch (error) {
    yield put(hideLoaderNotificationData());
    console.log(error);
  }
}

export function* handleFleetManagementTripDetails(action: any): any {
  try {
    yield put(setLoaderTripDetails());
    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(getTripDetailsApi, action.payload);
    if (response) {
      yield put(setFleetManagementTripDetails(response));
    } else {
      yield put(setFleetManagementTripDetails({}));
    }
    yield put(hideLoaderTripDetails());
  } catch (error) {
    yield put(hideLoaderTripDetails());
    console.log(error);
  }
}

export function* handleFleetManagementOverAllTripDetails(action: any): any {
  try {
    yield put(setLoaderOverAllAnalytics());
    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(
      getOverAllTripDetailsApi,
      action.payload
    );
    if (response) {
      yield put(setFleetManagementOverAllTripDetails(response));
    } else {
      yield put(setFleetManagementOverAllTripDetails({}));
    }
    yield put(hideLoaderOverAllAnalytics());
  } catch (error) {
    yield put(hideLoaderOverAllAnalytics());
    console.log(error);
  }
}

export function* handleFleetManagementAnalyticsData(action: any): any {
  try {
    yield put(setLoaderAnalytics());
    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(getAnalyticsApi, action.payload);
    if (response) {
      yield put(setFleetManagementAnalyticsData(response));
    } else {
      yield put(setFleetManagementAnalyticsData({}));
    }
    yield put(hideLoaderAnalytics());
  } catch (error) {
    yield put(hideLoaderAnalytics());
    console.log(error);
  }
}

export function* handleFleetManagementOverspeeding(action: any): any {
  try {
    yield put(setLoaderAnalytics());
    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(getOverSpeedingApi, action.payload);
    if (response) {
      yield put(setFleetManagementOverspeeding(response));
    } else {
      yield put(setFleetManagementOverspeeding({}));
    }
    yield put(hideLoaderAnalytics());
  } catch (error) {
    yield put(hideLoaderAnalytics());
    console.log(error);
  }
}

export function* handleFleetManagementLiveTrip(action: any): any {
  try {
    const { fetchPostData } = fetchAPIServices;
    const response = yield fetchPostData(getCoordinatesApi, action.payload);
    if (response) {
      yield put(setFleetManagementLiveTrip(response));
    } else {
      yield put(setFleetManagementLiveTrip({}));
    }
  } catch (error) {
    console.log(error);
  }
}
