export const assetTrackerDetail = {
    GET_ASSET_TRACKER_DETAIL : "GET_ASSET_TRACKER_DETAIL",
    SET_ASSET_TRACKER_DETAIL : "SET_ASSET_TRACKER_DETAIL"
}

export const getAssetTrackerDetail = (payload:any) =>({
    type : "GET_ASSET_TRACKER_DETAIL",
    payload,
})

export const setAssetTrackerDetail = (assetTrackerData:any) =>({
    type : "SET_ASSET_TRACKER_DETAIL",
    assetTrackerData
})

export default assetTrackerDetail;