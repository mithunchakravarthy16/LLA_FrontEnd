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

export default fleetManagementNotification;
