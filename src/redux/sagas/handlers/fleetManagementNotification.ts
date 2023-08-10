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
} from "redux/actions/fleetManagementNotificationActions";
import fetchAPIServices from "../../../services/fetchAPIServices";
import {
  getFleetNotificationApi,
  getOverAllTripDetailsApi,
  getTripDetailsApi,
  getAnalyticsApi,
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
    const { fetchLogin } = fetchAPIServices;
    const response = yield fetchLogin(getTripDetailsApi, action.payload);
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
    const { fetchLogin } = fetchAPIServices;
    const response = yield fetchLogin(getOverAllTripDetailsApi, action.payload);
    if (response) {
      yield put(setFleetManagementOverAllTripDetails(response));
    } else {
      yield put(setFleetManagementOverAllTripDetails({}));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleFleetManagementAnalyticsData(action: any): any {
  try {
    const { fetchLogin } = fetchAPIServices;
    const response = yield fetchLogin(getAnalyticsApi, action.payload);
    if (response) {
      yield put(setFleetManagementAnalyticsData(response));
    } else {
      yield put(setFleetManagementAnalyticsData({}));
    }
  } catch (error) {
    console.log(error);
  }
}
