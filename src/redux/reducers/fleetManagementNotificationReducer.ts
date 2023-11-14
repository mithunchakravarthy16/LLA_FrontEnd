import fleetManagementNotification from "redux/actions/fleetManagementNotificationActions";

const initialState = {
  fleetManagementNotificationData: {},
  fleetManagementTripDetailsData: {},
  fleetManagementOverAllTripDetailsData: {},
  fleetManagementAnalyticsData: {},
  fleetManagementOverspeeding: {},
  fleetManagementLiveTrip: {},
  fleetManagementCompletedTripsData: {},
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
    case fleetManagementNotification.SHOW_LOADER_ANALYTICS:
      return { ...state, loadingAnalytics: true };
    case fleetManagementNotification.HIDE_LOADER_ANALYTICS:
      return { ...state, loadingAnalytics: false };
    case fleetManagementNotification.SHOW_LOADER_OVER_ALL_ANALYTICS:
      return { ...state, loadingOverAllAnalytics: true };
    case fleetManagementNotification.HIDE_LOADER_OVER_ALL_ANALYTICS:
      return { ...state, loadingOverAllAnalytics: false };
    case fleetManagementNotification.SET_FLEET_MANAGEMENT_OVER_SPEEDING:
      const { fleetManagementOverspeeding } = action;
      return { ...state, fleetManagementOverspeeding };
    case fleetManagementNotification.SET_FLEET_MANAGEMENT_LIVE_TRIP:
      const { fleetManagementLiveTrip } = action;
      return { ...state, fleetManagementLiveTrip };
    case fleetManagementNotification.SET_FLEET_MANAGEMENT_COMPLETED_TRIP:
      const { fleetManagementCompletedTripsData } = action;
      return { ...state, fleetManagementCompletedTripsData };
    case fleetManagementNotification.SHOW_LOADER_FLEET_MANAGEMENT_COMPLETED_TRIP:
      return { ...state, loadingFleetManagementCompletedTripsData: true };
    case fleetManagementNotification.HIDE_LOADER_FLEET_MANAGEMENT_COMPLETED_TRIP:
      return { ...state, loadingFleetManagementCompletedTripsData: false };
    default:
      return state;
  }
};
