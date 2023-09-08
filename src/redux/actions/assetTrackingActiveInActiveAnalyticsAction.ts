export const assetTrackingActiveInActiveAnalytics = {

  GET_ASSET_TRACKING_ACTIVE_INACTIVE_ANALYTICS_DATA: "GET_ASSET_TRACKING_ACTIVE_INACTIVE_ANALYTICS_DATA",
  SET_ASSET_TRACKING_ACTIVE_INACTIVE_ANALYTICS_DATA: "SET_ASSET_TRACKING_ACTIVE_INACTIVE_ANALYTICS_DATA",

  GET_ASSET_TRACKING_INCIDENTS_ANALYTICS_DATA: "GET_ASSET_TRACKING_INCIDENTS_ANALYTICS_DATA",
  SET_ASSET_TRACKING_INCIDENTS_ANALYTICS_DATA: "SET_ASSET_TRACKING_INCIDENTS_ANALYTICS_DATA",

  GET_ASSET_TRACKING_GRID_VIEW_ANALYTICS_DATA: "GET_ASSET_TRACKING_GRID_VIEW_ANALYTICS_DATA",
  SET_ASSET_TRACKING_GRID_VIEW_ANALYTICS_DATA: "SET_ASSET_TRACKING_GRID_VIEW_ANALYTICS_DATA",
  
  SHOW_LOADER_ANALYTICS: "SHOW_LOADER_ANALYTICS",
  HIDE_LOADER_ANALYTICS: "Hide_LOADER_ANALYTICS",
  SHOW_LOADER_OVER_ALL_ANALYTICS: "SHOW_LOADER_OVER_ALL_ANALYTICS",
  HIDE_LOADER_OVER_ALL_ANALYTICS: "Hide_LOADER_OVER_ALL_ANALYTICS",
};



export const getAssetTrackingActiveInActiveAnalyticsData = (payload: any) => ({
  type: assetTrackingActiveInActiveAnalytics.GET_ASSET_TRACKING_ACTIVE_INACTIVE_ANALYTICS_DATA,
  payload: payload,
});

export const setAssetTrackingActiveInActiveAnalyticsData = (
  assetTrackingActiveInActiveAnalyticsData: any
) => ({
  type: assetTrackingActiveInActiveAnalytics.SET_ASSET_TRACKING_ACTIVE_INACTIVE_ANALYTICS_DATA,
  assetTrackingActiveInActiveAnalyticsData,
});

export const getAssetTrackingIncidentsAnalyticsData = (payload: any) => ({
  type: assetTrackingActiveInActiveAnalytics.GET_ASSET_TRACKING_INCIDENTS_ANALYTICS_DATA,
  payload: payload,
});

export const setAssetTrackingIncidentsAnalyticsData = (
  assetTrackingIncidentsAnalyticsData: any
) => ({
  type: assetTrackingActiveInActiveAnalytics.SET_ASSET_TRACKING_INCIDENTS_ANALYTICS_DATA,
  assetTrackingIncidentsAnalyticsData,
});


export const getAssetTrackingGridViewAnalyticsData = (payload: any) => ({
  type: assetTrackingActiveInActiveAnalytics.GET_ASSET_TRACKING_GRID_VIEW_ANALYTICS_DATA,
  payload: payload,
});

export const setAssetTrackingGridViewAnalyticsData = (
  assetTrackingGridViewAnalyticsData: any
) => ({
  type: assetTrackingActiveInActiveAnalytics.SET_ASSET_TRACKING_GRID_VIEW_ANALYTICS_DATA,
  assetTrackingGridViewAnalyticsData,
});



export const setLoaderAnalytics = () => ({
  type: assetTrackingActiveInActiveAnalytics.SHOW_LOADER_ANALYTICS,
});

export const hideLoaderAnalytics = () => ({
  type: assetTrackingActiveInActiveAnalytics.HIDE_LOADER_ANALYTICS,
});

export const setLoaderOverAllAnalytics = () => ({
  type: assetTrackingActiveInActiveAnalytics.SHOW_LOADER_OVER_ALL_ANALYTICS,
});

export const hideLoaderOverAllAnalytics = () => ({
  type: assetTrackingActiveInActiveAnalytics.HIDE_LOADER_OVER_ALL_ANALYTICS,
});





export default assetTrackingActiveInActiveAnalytics;
