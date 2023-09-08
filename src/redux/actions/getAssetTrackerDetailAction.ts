export const assetTrackerDetail = {
  GET_ASSET_TRACKER_DETAIL: "GET_ASSET_TRACKER_DETAIL",
  SET_ASSET_TRACKER_DETAIL: "SET_ASSET_TRACKER_DETAIL",
  GET_ASSET_TRACKING_CREATE_GEOFENCE: "GET_ASSET_TRACKING_CREATE_GEOFENCE",
  SET_ASSET_TRACKING_CREATE_GEOFENCE: "SET_ASSET_TRACKING_CREATE_GEOFENCE",
  GET_ASSET_TRACKING_UPDATE_GEOFENCE: "GET_ASSET_TRACKING_UPDATE_GEOFENCE",
  SET_ASSET_TRACKING_UPDATE_GEOFENCE: "SET_ASSET_TRACKING_UPDATE_GEOFENCE",
  GET_ASSET_TRACKING_ASSESTS_LIST: "GET_ASSET_TRACKING_ASSESTS_LIST",
  SET_ASSET_TRACKING_ASSESTS_LIST: "SET_ASSET_TRACKING_ASSESTS_LIST",
  SHOW_LOADER_ASSETS_LIST: "SHOW_LOADER_ASSETS_LIST",
  HIDE_LOADER_ASSETS_LIST: "Hide_LOADER_ASSETS_LIST",
  SHOW_LOADER_CREATE_GEOFENCE: "SHOW_LOADER_CREATE_GEOFENCE",
  HIDE_LOADER_CREATE_GEOFENCE: "Hide_LOADER_CREATE_GEOFENCET",
};

export const getAssetTrackerDetail = (payload: any) => ({
  type: "GET_ASSET_TRACKER_DETAIL",
  payload,
});

export const setAssetTrackerDetail = (assetTrackerData: any) => ({
  type: "SET_ASSET_TRACKER_DETAIL",
  assetTrackerData,
});

export const getAssetTrackingCreateGeofence = (payload: any) => ({
  type: assetTrackerDetail.GET_ASSET_TRACKING_CREATE_GEOFENCE,
  payload,
});

export const setAssetTrackingCreateGeofence = (
  assetTrackingCreateGeofenceData: any
) => ({
  type: assetTrackerDetail.SET_ASSET_TRACKING_CREATE_GEOFENCE,
  assetTrackingCreateGeofenceData,
});

export const getAssetTrackingUpdateGeofence = (payload: any) => ({
  type: assetTrackerDetail.GET_ASSET_TRACKING_UPDATE_GEOFENCE,
  payload,
});

export const setAssetTrackingUpdateGeofence = (
  assetTrackingUpdateGeofenceData: any
) => ({
  type: assetTrackerDetail.SET_ASSET_TRACKING_UPDATE_GEOFENCE,
  assetTrackingUpdateGeofenceData,
});

export const getAssetTrackingList = (payload: any) => ({
  type: assetTrackerDetail.GET_ASSET_TRACKING_ASSESTS_LIST,
  payload,
});

export const setAssetTrackingList = (assetTrackingList: any) => ({
  type: assetTrackerDetail.SET_ASSET_TRACKING_ASSESTS_LIST,
  assetTrackingList,
});

export const setLoaderAssetsList = () => ({
  type: assetTrackerDetail.SHOW_LOADER_ASSETS_LIST,
});

export const hideLoaderAssetsList = () => ({
  type: assetTrackerDetail.HIDE_LOADER_ASSETS_LIST,
});

export const setLoaderCreateGeofence = () => ({
  type: assetTrackerDetail.SHOW_LOADER_CREATE_GEOFENCE,
});

export const hideLoaderCreateGeofence = () => ({
  type: assetTrackerDetail.HIDE_LOADER_CREATE_GEOFENCE,
});

export default assetTrackerDetail;
