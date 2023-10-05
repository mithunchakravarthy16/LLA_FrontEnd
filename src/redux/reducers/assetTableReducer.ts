import { assetTable } from "../actions/getAssetTableDataAction";

const initialState = {
  assetTableData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case assetTable.SET_ASSET_TABLE:
      const { assetTableData } = action;
      return { ...state, assetTableData };
    default:
      return state;
  }
};