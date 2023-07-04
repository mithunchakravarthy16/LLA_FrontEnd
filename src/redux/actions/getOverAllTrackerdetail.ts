export const assetOverallTrackerDetail = {
    GET_OVERALL_TRACKER_DETAIL : "GET_OVERALL_TRACKER_DETAIL",
    SET_OVERALL_TRACKER_DETAIL : "SET_OVERALL_TRACKER_DETAIL"
};

export const getOverallTrackerDetail = (payload:any) => ({
    type : assetOverallTrackerDetail.GET_OVERALL_TRACKER_DETAIL,
    payload : payload
})
export const setOverallTrackerDetail = (overallTrackerDetail:any) => ({
    type : assetOverallTrackerDetail.SET_OVERALL_TRACKER_DETAIL,
    overallTrackerDetail
})

export default assetOverallTrackerDetail;