import assetTrackingActiveInActiveAnalytics from "redux/actions/assetTrackingActiveInActiveAnalyticsAction";

const initialState = {
  assetTrackingActiveInActiveAnalyticsData: {},
  assetTrackingIncidentsAnalyticsData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    
    case assetTrackingActiveInActiveAnalytics.SET_ASSET_TRACKING_ACTIVE_INACTIVE_ANALYTICS_DATA:
      const { assetTrackingActiveInActiveAnalyticsData } = action;
      return { ...state, assetTrackingActiveInActiveAnalyticsData };

    case assetTrackingActiveInActiveAnalytics.SET_ASSET_TRACKING_INCIDENTS_ANALYTICS_DATA:
      const { assetTrackingIncidentsAnalyticsData } = action;
      return { ...state, assetTrackingIncidentsAnalyticsData };
    
    case assetTrackingActiveInActiveAnalytics.SHOW_LOADER_ANALYTICS:
      return { ...state, loadingAnalytics: true };
    case assetTrackingActiveInActiveAnalytics.HIDE_LOADER_ANALYTICS:
      return { ...state, loadingAnalytics: false };
    case assetTrackingActiveInActiveAnalytics.SHOW_LOADER_OVER_ALL_ANALYTICS:
      return { ...state, loadingOverAllAnalytics: true };
    case assetTrackingActiveInActiveAnalytics.HIDE_LOADER_OVER_ALL_ANALYTICS:
      return { ...state, loadingOverAllAnalytics: false };
    
    default:
      return state;
  }
};
