import assetNotification from "redux/actions/getAllAssertNotificationAction";

const initialState = {
  assetNotificationData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case assetNotification.SET_ASSET_NOTIFICATION:
      const { assetNotificationData } = action;
      return { ...state, assetNotificationData };
    case assetNotification.SET_ASSET_TRACKERS_LIST:
      const { assetTrackersListData } = action;
      return { ...state, assetTrackersListData };
    case assetNotification.SHOW_LOADER_ASSET_NOTIFICATIONDATA:
      return { ...state, loadingAssetNotificationData: true };
    case assetNotification.HIDE_LOADER_ASSET_NOTIFICATIONDATA:
      return { ...state, loadingAssetNotificationData: false };
    default:
      return state;
  }
};
