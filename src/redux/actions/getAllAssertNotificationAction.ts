export const assetNotification ={
    GET_ASSET_NOTIFICATION : "GET_ASSET_NOTIFICATION",
    SET_ASSET_NOTIFICATION : "SET_ASSET_NOTIFICATION",
    GET_ASSET_TRACKERS_LIST : "GET_ASSET_TRACKERS_LIST",
    SET_ASSET_TRACKERS_LIST : "SET_ASSET_TRACKERS_LIST",
    SHOW_LOADER_ASSET_NOTIFICATIONDATA: "SHOW_LOADER_ASSET_NOTIFICATIONDATA",
    HIDE_LOADER_ASSET_NOTIFICATIONDATA: "Hide_LOADER_ASSET_NOTIFICATIONDATA",
}

export const getNotificationData = (payload:any) => ({
  type:assetNotification.GET_ASSET_NOTIFICATION,
  payload:payload.payLoad,
  isFromSearch: payload.isFromSearch
});

export const getAssetTrackersListData = (payload:any) => ({
  type:assetNotification.GET_ASSET_TRACKERS_LIST,
  payload:payload.payLoad,
  isFromSearch: payload.isFromSearch
});

export const setNotificationData = (assetNotificationData:any) => ({
    type:assetNotification.SET_ASSET_NOTIFICATION,
    assetNotificationData
});

export const setAssetTrackersListData = (assetTrackersListData:any) => ({
  type:assetNotification.SET_ASSET_TRACKERS_LIST,
  assetTrackersListData
});

export const setLoaderAssetNotificationData = () => ({
    type: assetNotification.SHOW_LOADER_ASSET_NOTIFICATIONDATA,
  });
  
  export const hideLoaderAssetNotificationData = () => ({
    type: assetNotification.HIDE_LOADER_ASSET_NOTIFICATIONDATA,
  });

export default assetNotification;
