import { put } from "redux-saga/effects";
import { setAdminPanelConfig } from "redux/actions/adminPanel";
import fetchAPIServices from "services/fetchAPIServices";
import { adminPanelSaveApi } from "services/endPoints";

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
