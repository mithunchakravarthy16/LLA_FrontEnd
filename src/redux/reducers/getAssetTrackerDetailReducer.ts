import assetTrackerDetail from "redux/actions/getAssetTrackerDetailAction";
const initialState = {
  assetTrackerData: {},
  assetTrackingCreateGeofenceData: {},
  assetTrackingUpdateGeofenceData: {},
  assetTrackingList: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case assetTrackerDetail.SET_ASSET_TRACKER_DETAIL:
      const { assetTrackerData } = action;
      return { ...state, assetTrackerData };
    case assetTrackerDetail.SET_ASSET_TRACKING_CREATE_GEOFENCE:
      const { assetTrackingCreateGeofenceData } = action;
      return { ...state, assetTrackingCreateGeofenceData };
    case assetTrackerDetail.SET_ASSET_TRACKING_UPDATE_GEOFENCE:
      const { assetTrackingUpdateGeofenceData } = action;
      return { ...state, assetTrackingUpdateGeofenceData };
    case assetTrackerDetail.SET_ASSET_TRACKING_ASSESTS_LIST:
      const { assetTrackingList } = action;
      return { ...state, assetTrackingList };
    case assetTrackerDetail.SHOW_LOADER_ASSETS_LIST:
      return { ...state, loadingAssetsList: true };
    case assetTrackerDetail.HIDE_LOADER_ASSETS_LIST:
      return { ...state, loadingAssetsList: false };
    case assetTrackerDetail.SHOW_LOADER_CREATE_GEOFENCE:
      return { ...state, loadingCreateGeofence: true };
    case assetTrackerDetail.HIDE_LOADER_CREATE_GEOFENCE:
      return { ...state, loadingCreateGeofence: false };

    case assetTrackerDetail.SHOW_LOADER_ASSET_INFOWINDOW :
        return { ...state, loaderAssetInfoWindow : true };

        case assetTrackerDetail.HIDE_LOADER_ASSET_INFOWINDOW :
          return { ...state, loaderAssetInfoWindow : false };
    default:
      return state;
  }
};
