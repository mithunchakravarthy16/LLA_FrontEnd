export const fleetManagementNotification = {
  GET_FLEET_MANAGEMENT_NOTIFICATION: "GET_FLEET_MANAGEMENT_NOTIFICATION",
  SET_FLEET_MANAGEMENT_NOTIFICATION: "SET_FLEET_MANAGEMENT_NOTIFICATION",
  GET_FLEET_MANAGEMENT_OVER_ALL_TRIP_DETAILS:
    "GET_FLEET_MANAGEMENT_OVER_ALL_TRIP_DETAILS",
  SET_FLEET_MANAGEMENT_OVER_ALL_TRIP_DETAILS:
    "SET_FLEET_MANAGEMENT_OVER_ALL_TRIP_DETAILS",
  GET_FLEET_MANAGEMENT_TRIP_DETAILS: "GET_FLEET_MANAGEMENT_TRIP_DETAILS",
  SET_FLEET_MANAGEMENT_TRIP_DETAILS: "SET_FLEET_MANAGEMENT_TRIP_DETAILS",
  GET_FLEET_MANAGEMENT_ANALYTICS_DATA: "GET_FLEET_MANAGEMENT_ANALYTICS_DATA",
  SET_FLEET_MANAGEMENT_ANALYTICS_DATA: "SET_FLEET_MANAGEMENT_ANALYTICS_DATA",
  SHOW_LOADER_TRIPDETAILS: "SHOW_LOADER_TRIPDETAILS",
  HIDE_LOADER_TRIPDETAILS: "Hide_LOADER_TRIPDETAILS",
  SHOW_LOADER_NOTIFICATIONDATA: "SHOW_LOADER_NOTIFICATIONDATA",
  HIDE_LOADER_NOTIFICATIONDATA: "Hide_LOADER_NOTIFICATIONDATA",
  SHOW_LOADER_ANALYTICS: "SHOW_LOADER_ANALYTICS",
  HIDE_LOADER_ANALYTICS: "Hide_LOADER_ANALYTICS",
  SHOW_LOADER_OVER_ALL_ANALYTICS: "SHOW_LOADER_OVER_ALL_ANALYTICS",
  HIDE_LOADER_OVER_ALL_ANALYTICS: "Hide_LOADER_OVER_ALL_ANALYTICS",
  GET_FLEET_MANAGEMENT_OVER_SPEEDING: "GET_FLEET_MANAGEMENT_OVER_SPEEDING",
  SET_FLEET_MANAGEMENT_OVER_SPEEDING: "SET_FLEET_MANAGEMENT_OVER_SPEEDING",
  GET_FLEET_MANAGEMENT_LIVE_TRIP: "GET_FLEET_MANAGEMENT_LIVE_TRIP",
  SET_FLEET_MANAGEMENT_LIVE_TRIP: "SET_FLEET_MANAGEMENT_LIVE_TRIP",
};

export const getFleetManagementNotificationData = (payload: any) => ({
  type: fleetManagementNotification.GET_FLEET_MANAGEMENT_NOTIFICATION,
  payload: payload,
});

export const setFleetManagementNotificationData = (
  fleetManagementNotificationData: any
) => ({
  type: fleetManagementNotification.SET_FLEET_MANAGEMENT_NOTIFICATION,
  fleetManagementNotificationData,
});

export const getFleetManagementOverAllTripDetails = (payload: any) => ({
  type: fleetManagementNotification.GET_FLEET_MANAGEMENT_OVER_ALL_TRIP_DETAILS,
  payload: payload,
});

export const setFleetManagementOverAllTripDetails = (
  fleetManagementOverAllTripDetailsData: any
) => ({
  type: fleetManagementNotification.SET_FLEET_MANAGEMENT_OVER_ALL_TRIP_DETAILS,
  fleetManagementOverAllTripDetailsData,
});

export const getFleetManagementTripDetails = (payload: any) => ({
  type: fleetManagementNotification.GET_FLEET_MANAGEMENT_TRIP_DETAILS,
  payload: payload,
});

export const setFleetManagementTripDetails = (
  fleetManagementTripDetailsData: any
) => ({
  type: fleetManagementNotification.SET_FLEET_MANAGEMENT_TRIP_DETAILS,
  fleetManagementTripDetailsData,
});

export const getFleetManagementAnalyticsData = (payload: any) => ({
  type: fleetManagementNotification.GET_FLEET_MANAGEMENT_ANALYTICS_DATA,
  payload: payload,
});

export const setFleetManagementAnalyticsData = (
  fleetManagementAnalyticsData: any
) => ({
  type: fleetManagementNotification.SET_FLEET_MANAGEMENT_ANALYTICS_DATA,
  fleetManagementAnalyticsData,
});

export const setLoaderTripDetails = () => ({
  type: fleetManagementNotification.SHOW_LOADER_TRIPDETAILS,
});

export const hideLoaderTripDetails = () => ({
  type: fleetManagementNotification.HIDE_LOADER_TRIPDETAILS,
});

export const setLoaderNotificationData = () => ({
  type: fleetManagementNotification.SHOW_LOADER_NOTIFICATIONDATA,
});

export const hideLoaderNotificationData = () => ({
  type: fleetManagementNotification.HIDE_LOADER_NOTIFICATIONDATA,
});

export const setLoaderAnalytics = () => ({
  type: fleetManagementNotification.SHOW_LOADER_ANALYTICS,
});

export const hideLoaderAnalytics = () => ({
  type: fleetManagementNotification.HIDE_LOADER_ANALYTICS,
});

export const setLoaderOverAllAnalytics = () => ({
  type: fleetManagementNotification.SHOW_LOADER_OVER_ALL_ANALYTICS,
});

export const hideLoaderOverAllAnalytics = () => ({
  type: fleetManagementNotification.HIDE_LOADER_OVER_ALL_ANALYTICS,
});

export const getFleetManagementOverspeeding = (payload: any) => ({
  type: fleetManagementNotification.GET_FLEET_MANAGEMENT_OVER_SPEEDING,
  payload: payload,
});

export const setFleetManagementOverspeeding = (
  fleetManagementOverspeeding: any
) => ({
  type: fleetManagementNotification.SET_FLEET_MANAGEMENT_OVER_SPEEDING,
  fleetManagementOverspeeding,
});

export const getFleetManagementLiveTrip = (payload: any) => ({
  type: fleetManagementNotification.GET_FLEET_MANAGEMENT_LIVE_TRIP,
  payload: payload,
});

export const setFleetManagementLiveTrip = (fleetManagementLiveTrip: any) => ({
  type: fleetManagementNotification.SET_FLEET_MANAGEMENT_LIVE_TRIP,
  fleetManagementLiveTrip,
});

export default fleetManagementNotification;
