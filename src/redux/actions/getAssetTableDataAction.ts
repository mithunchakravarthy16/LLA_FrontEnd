export const assetTable = {
    SET_ASSET_TABLE : "SET_ASSET_TABLE",
    GET_ASSET_TABLE : "GET_ASSET_TABLE",
    SET_ASSET_NAME : "SET_ASSET_NAME",
    GET_ASSET_NAME : "GET_ASSET_NAME"    
}

export const getAssetTable = (payload:any) =>({
    type : "GET_ASSET_TABLE",
    payload : payload
})

export const setAssetTable = (assetTableData:any) =>({
    type : "SET_ASSET_TABLE",
    assetTableData
})


export const getAssetName = (payload:any) =>({
    type : "GET_ASSET_NAME",
    payload : payload
})

export const setAssetName = (assetNameData:any) =>({
    type : "SET_ASSET_NAME",
    assetNameData
})

export default assetTable;