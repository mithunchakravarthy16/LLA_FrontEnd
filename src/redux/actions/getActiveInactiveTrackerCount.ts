export const assetActiveInactiveTracker = {
    GET_ACTIVE_INACTIVE_TRACKER : "GET_ACTIVE_INACTIVE_TRACKER",
    SET_ACTIVE_INACTIVE_TRACKER : "SET_ACTIVE_INACTIVE_TRACKER"
}

export const getAssetActiveInactiveTracker = (payload : any) =>({
    type: assetActiveInactiveTracker.GET_ACTIVE_INACTIVE_TRACKER,
    payload : payload,   
})

export const setAssetActiveInactiveTracker = (assetTrackerData:any) => ({
    type : assetActiveInactiveTracker.SET_ACTIVE_INACTIVE_TRACKER,
    assetTrackerData
})

export default assetActiveInactiveTracker;