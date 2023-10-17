import { googleMapApiKey } from "../actions/googleMapApiKeyAction";


const initialState = {
  googleMapApiKeyData: {},
  googleMapApiKeyDataPost: {}
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case googleMapApiKey.SET_GOOGLE_MAP_API:
      const { googleMapApiKeyData } = action;
      return { ...state, googleMapApiKeyData};
      case googleMapApiKey.SET_GOOGLE_MAP_API_POST:
        const { googleMapApiKeyDataPost } = action;
      return { ...state, googleMapApiKeyDataPost };
      case googleMapApiKey.SHOW_LOADER:
        return { ...state, loadingGoogleMapApiKeyData: true };
      case googleMapApiKey.HIDE_LOADER:
        return { ...state, loadingGoogleMapApiKeyData: false };
    default:
      return state;
  }
};