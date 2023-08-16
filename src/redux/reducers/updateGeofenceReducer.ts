import { updateGeofence } from "../actions/updateGeofenceAction";

const initialState = {
  updateGeofenceData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case updateGeofence.SET_UPDATE_GEOFENCE:
      const { updateGeofenceData } = action;
      return { ...state, updateGeofenceData };
    default:
      return state;
  }
};