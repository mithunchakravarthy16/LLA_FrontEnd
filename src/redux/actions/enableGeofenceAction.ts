export const enableGeofence = {
    SET_ENABLE_GEOFENCE : "SET_ENABLE_GEOFENCE",
    GET_ENABLE_GEOFENCE : "GET_ENABLE_GEOFENCE"
}

export const getEnableGeofence = (payload:any) =>({
    type : "GET_ENABLE_GEOFENCE",
    payload : payload
})

export const setEnableGeofence = (enableGeofenceData:any) =>({
    type : "SET_ENABLE_GEOFENCE",
    enableGeofenceData
})

export default enableGeofence;