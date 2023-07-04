import assetOverallTrackerDetail from "redux/actions/getOverAllTrackerdetail";

const initialState = {
  overallTrackerDetail: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case assetOverallTrackerDetail.SET_OVERALL_TRACKER_DETAIL:
      const { overallTrackerDetail } = action;
      return { ...state, overallTrackerDetail };
    default:
      return state;
  }
};
