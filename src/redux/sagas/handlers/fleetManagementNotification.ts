import { put } from "redux-saga/effects";
import {
  setFleetManagementNotificationData,
  setFleetManagementTripDetails,
  setFleetManagementOverAllTripDetails,
} from "redux/actions/fleetManagementNotificationActions";
import fetchAPIServices from "../../../services/fetchAPIServices";
import {
  getFleetNotificationApi,
  getOverAllTripDetailsApi,
  getTripDetailsApi,
} from "../../../services/endPoints";
// import fleetManagementResponse from "mockdata/fleetManagementAPI";

export function* handleFleetManagementNotification(action: any): any {
  try {
    const { fetchData } = fetchAPIServices;
    const response = yield fetchData(getFleetNotificationApi);
    if (response) {
      yield put(setFleetManagementNotificationData(response));
    } else {
      yield put(setFleetManagementNotificationData({}));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleFleetManagementTripDetails(action: any): any {
  try {
    const { fetchLogin } = fetchAPIServices;
    const response = yield fetchLogin(getTripDetailsApi, action.payload);
    if (response) {
      yield put(setFleetManagementTripDetails(response));
    } else {
      yield put(setFleetManagementTripDetails({}));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleFleetManagementOverAllTripDetails(action: any): any {
  try {
    const { fetchData } = fetchAPIServices;
    const response = yield fetchData(getOverAllTripDetailsApi);
    if (response) {
      yield put(setFleetManagementOverAllTripDetails(response));
    } else {
      yield put(setFleetManagementOverAllTripDetails({}));
    }
  } catch (error) {
    console.log(error);
  }
}
