import { put } from "redux-saga/effects";
import {
  setAdminPanelConfig,
  setAdminPanelConfigData,
  setAdminPanelCancelConfigData,
} from "redux/actions/adminPanel";
import fetchAPIServices from "services/fetchAPIServices";
import {
  adminPanelSaveApi,
  adminPanelGetApi,
  adminPanelCancelApi,
} from "services/endPoints";

export function* handleAdminPanelConfig(action: any): any {
  try {
    const { fetchAdminPanelConfig } = fetchAPIServices;

    const response = yield fetchAdminPanelConfig(
      adminPanelSaveApi,
      action.payload
    );
    if (response?.statusCodeValue === 200) {
      yield put(setAdminPanelConfig(response));
    } else {
      yield put(setAdminPanelConfig({}));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAdminPanelConfig(action: any): any {
  try {
    const { fetchData } = fetchAPIServices;

    const response = yield fetchData(
      `${adminPanelGetApi}?isPreview=${action?.payload?.isPreview}`
    );
    if (response?.statusCodeValue === 200) {
      yield put(setAdminPanelConfigData(response));
    } else {
      yield put(setAdminPanelConfigData({}));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleCancelAdminPanelConfig(action: any): any {
  try {
    const { deleteAdminPanelConfig } = fetchAPIServices;

    const response = yield deleteAdminPanelConfig(adminPanelCancelApi);
    if (response) {
      yield put(setAdminPanelCancelConfigData(response));
    } else {
      yield put(setAdminPanelCancelConfigData({}));
    }
  } catch (error) {
    console.log(error);
  }
}
