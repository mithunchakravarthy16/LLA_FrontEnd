import { assetActiveInactiveTracker } from "../actions/getActiveInactiveTrackerCount";

const initialState = {
  assetTrackerData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case assetActiveInactiveTracker.SET_ACTIVE_INACTIVE_TRACKER:
      const { assetTrackerData } = action;
      return { ...state, assetTrackerData };
    default:
      return state;
  }
};
