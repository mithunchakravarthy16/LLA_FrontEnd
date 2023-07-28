import fleetManagementNotification from "redux/actions/fleetManagementNotificationActions";

const initialState = {
  fleetManagementNotificationData: {},
  fleetManagementTripDetailsData: {},
  fleetManagementOverAllTripDetailsData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case fleetManagementNotification.SET_FLEET_MANAGEMENT_NOTIFICATION:
      const { fleetManagementNotificationData } = action;
      return { ...state, fleetManagementNotificationData };
    case fleetManagementNotification.SET_FLEET_MANAGEMENT_TRIP_DETAILS:
      const { fleetManagementTripDetailsData } = action;
      return { ...state, fleetManagementTripDetailsData };
    case fleetManagementNotification.SET_FLEET_MANAGEMENT_OVER_ALL_TRIP_DETAILS:
      const { fleetManagementOverAllTripDetailsData } = action;
      return { ...state, fleetManagementOverAllTripDetailsData };
    default:
      return state;
  }
};
