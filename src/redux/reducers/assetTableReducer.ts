import { assetTable } from "../actions/getAssetTableDataAction";

const initialState = {
  assetTableData: {},
  assetNameData : {}

};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case assetTable.SET_ASSET_TABLE:
      const { assetTableData } = action;
      return { ...state, assetTableData };
      case assetTable.SET_ASSET_NAME :
        const { assetNameData } = action;
        return { ...state, assetNameData};
    default:
      return state;
  }
};