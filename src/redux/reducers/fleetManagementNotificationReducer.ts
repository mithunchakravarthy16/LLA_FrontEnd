import fleetManagementNotification from "redux/actions/fleetManagementNotificationActions";

const initialState = {
  fleetManagementNotificationData: {},
  fleetManagementTripDetailsData: {},
  fleetManagementOverAllTripDetailsData: {},
  fleetManagementAnalyticsData: {},
  loadingTripDetails: true,
  loadingNotificationData: true,
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
    case fleetManagementNotification.SET_FLEET_MANAGEMENT_ANALYTICS_DATA:
      const { fleetManagementAnalyticsData } = action;
      return { ...state, fleetManagementAnalyticsData };
    case fleetManagementNotification.SHOW_LOADER_TRIPDETAILS:
      return { ...state, loadingTripDetails: true };
    case fleetManagementNotification.HIDE_LOADER_TRIPDETAILS:
      return { ...state, loadingTripDetails: false };

    case fleetManagementNotification.SHOW_LOADER_NOTIFICATIONDATA:
      return { ...state, loadingNotificationData: true };
    case fleetManagementNotification.HIDE_LOADER_NOTIFICATIONDATA:
      return { ...state, loadingNotificationData: false };
    default:
      return state;
  }
};
