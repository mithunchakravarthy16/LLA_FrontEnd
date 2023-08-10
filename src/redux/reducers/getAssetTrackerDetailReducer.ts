import assetTrackerDetail from "redux/actions/getAssetTrackerDetailAction";
const initialState = {
    assetTrackerData: {},
  };
  
  export default (state = initialState, action: any) => {
    switch (action.type) {
      case assetTrackerDetail.SET_ASSET_TRACKER_DETAIL:
        const { assetTrackerData } = action;
        return { ...state, assetTrackerData };
      default:
        return state;
    }
  };
  