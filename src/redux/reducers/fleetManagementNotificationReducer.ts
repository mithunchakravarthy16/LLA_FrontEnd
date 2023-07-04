import fleetManagementNotification from "redux/actions/fleetManagementNotificationActions";

const initialState = {
  fleetManagementNotificationData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case fleetManagementNotification.SET_FLEET_MANAGEMENT_NOTIFICATION:
      const { fleetManagementNotificationData } = action;
      return { ...state, fleetManagementNotificationData };

    default:
      return state;
  }
};
