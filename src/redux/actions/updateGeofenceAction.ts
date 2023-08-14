export const updateGeofence = {
    SET_UPDATE_GEOFENCE : "SET_UPDATE_GEOFENCE",
    GET_UPDATE_GEOFENCE : "GET_UPDATE_GEOFENCE"
}

export const getUpdateGeofence = (payload:any) =>({
    type : "GET_UPDATE_GEOFENCE",
    payload : payload
})

export const setUpdateGeofence = (updateGeofenceData:any) =>({
    type : "SET_UPDATE_GEOFENCE",
    updateGeofenceData
})

export default updateGeofence;