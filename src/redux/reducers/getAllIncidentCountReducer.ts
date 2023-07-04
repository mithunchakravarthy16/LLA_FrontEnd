import assetIncidentCount from "redux/actions/getAllIncidentCount";

const initialState = {
    assetIncidentCountValue : {}
}

export default (state=initialState, action:any) => {
    switch (action.type) {
        case assetIncidentCount.SET_ASSET_INCIDENT_COUNT :
            const { assetIncidentCountValue } = action;
            return {...state, assetIncidentCountValue};
        default : 
        return state;
    }
}