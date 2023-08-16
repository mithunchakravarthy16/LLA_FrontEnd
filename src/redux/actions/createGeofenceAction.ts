export const createGeofence = {
    SET_CREATE_GEOFENCE : "SET_CREATE_GEOFENCE",
    GET_CREATE_GEOFENCE : "GET_CREATE_GEOFENCE"
}

export const getCreateGeofence = (payload:any) =>({
    type : "GET_CREATE_GEOFENCE",
    payload : payload
})

export const setCreateGeofence = (createGeofenceData:any) =>({
    type : "SET_CREATE_GEOFENCE",
    createGeofenceData
})

export default createGeofence;