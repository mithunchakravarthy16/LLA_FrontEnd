export const assetTable = {
    SET_ASSET_TABLE : "SET_ASSET_TABLE",
    GET_ASSET_TABLE : "GET_ASSET_TABLE"
}

export const getAssetTable = (payload:any) =>({
    type : "GET_ASSET_TABLE",
    payload : payload
})

export const setAssetTable = (assetTableData:any) =>({
    type : "SET_ASSET_TABLE",
    assetTableData
})

export default assetTable;