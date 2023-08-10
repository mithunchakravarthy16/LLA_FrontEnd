import { put } from "redux-saga/effects";
import {
  setAdminPanelConfig,
  setAdminPanelConfigData,
  setAdminPanelCancelConfigData,
  setLoaderConfigData,
  hideLoaderConfigData,
  setLoaderGetConfigData,
  hideLoaderGetConfigData,
} from "redux/actions/adminPanel";
import fetchAPIServices from "services/fetchAPIServices";
import {
  adminPanelSaveApi,
  adminPanelGetApi,
  adminPanelCancelApi,
} from "services/endPoints";

export function* handleAdminPanelConfig(action: any): any {
  try {
    yield put(setLoaderConfigData());  
    const { fetchAdminPanelConfig } = fetchAPIServices;

    const response = yield fetchAdminPanelConfig(
      adminPanelSaveApi,
      action.payload
    );
    if (response) {
      yield put(setAdminPanelConfig(response));
    } else {
      yield put(setAdminPanelConfig({}));
    }
    yield put(hideLoaderConfigData());
  } catch (error) {
    yield put(hideLoaderConfigData());
    console.log(error);
  }
}

export function* handleGetAdminPanelConfig(action: any): any {
  try {
    yield put(setLoaderGetConfigData());
    const { fetchData } = fetchAPIServices;

    const response = yield fetchData(
      `${adminPanelGetApi}?isPreview=${action?.payload?.isPreview}&isDefault=${action?.payload?.isDefault}`
    );
    if (response?.statusCodeValue === 200) {
      yield put(setAdminPanelConfigData(response));
    } else {
      yield put(setAdminPanelConfigData({}));
    }
    yield put(hideLoaderGetConfigData());
  } catch (error) {
    yield put(hideLoaderGetConfigData());
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
