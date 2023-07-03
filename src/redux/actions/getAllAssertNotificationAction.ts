export const assetNotification ={
    GET_ASSET_NOTIFICATION : "GET_ASSET_NOTIFICATION",
    SET_ASSET_NOTIFICATION : "SET_ASSET_NOTIFICATION"
}

export const getNotificationData = (payload:any) => ({
    type:assetNotification.GET_ASSET_NOTIFICATION,
    payload:payload
});

export const setNotificationData = (assetNotificationData:any) => ({
    type:assetNotification.SET_ASSET_NOTIFICATION,
    assetNotificationData
})

export default assetNotification;