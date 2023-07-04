export const fleetManagementNotification = {
  GET_FLEET_MANAGEMENT_NOTIFICATION: "GET_FLEET_MANAGEMENT_NOTIFICATION",
  SET_FLEET_MANAGEMENT_NOTIFICATION: "SET_FLEET_MANAGEMENT__NOTIFICATION",
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

export default fleetManagementNotification;
