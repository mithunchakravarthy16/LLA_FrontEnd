export const assetIncidentCount = {
    GET_ASSET_INCIDENT_COUNT : "GET_ASSET_INCIDENT_COUNT",
    SET_ASSET_INCIDENT_COUNT : "SET_ASSET_INCIDENT_COUNT"
}

export const getAssetIncidentCount = (payload:any) => ({
    type : assetIncidentCount.GET_ASSET_INCIDENT_COUNT,
    payload : payload
})

export const setAssetIncidentCount = (assetIncidentCountValue:any) => ({
    type : assetIncidentCount.SET_ASSET_INCIDENT_COUNT,
    assetIncidentCountValue
})

export default assetIncidentCount;