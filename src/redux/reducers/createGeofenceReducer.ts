import { createGeofence } from "../actions/createGeofenceAction";

const initialState = {
  createGeofenceData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case createGeofence.SET_CREATE_GEOFENCE:
      const { createGeofenceData } = action;
      return { ...state, createGeofenceData };
    default:
      return state;
  }
};