import { enableGeofence } from "../actions/enableGeofenceAction";

const initialState = {
  enableGeofenceData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case enableGeofence.SET_ENABLE_GEOFENCE:
      const { enableGeofenceData } = action;
      return { ...state, enableGeofenceData };
    default:
      return state;
  }
};