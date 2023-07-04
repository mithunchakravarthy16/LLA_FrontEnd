import assetNotification from "redux/actions/getAllAssertNotificationAction";

const initialState ={
    assetNotificationData : {}
}

export default (state=initialState, action:any) => {
    switch(action.type){
        case assetNotification.SET_ASSET_NOTIFICATION :
            const { assetNotificationData } = action;
            return{...state, assetNotificationData};

        default:
            return state;
    }
}